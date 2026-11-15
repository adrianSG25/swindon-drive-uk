import {
  TEST_CENTRE,
  ROUTES,
  HOTSPOTS,
  VIDEOS,
  PRACTICAL_KIT
} from "./data/swindon-data.js";

const STORAGE_KEY = "swindon_drive_state_v1";

const DEFAULT_STATE = {
  lang: "dual",
  theme: "auto",
  activeTab: "tab-routes",
  routeFilter: "all",
  routeQuery: "",
  videoFilter: "all",
  practicedRoutes: {},
  masteredHotspots: {},
  learnedQuestions: {}
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATE };
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

const state = loadState();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage quota errors in private browsing
  }
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function bi(enText, esText, tag = "span") {
  return `
    <span class="bilingual-stack">
      <${tag} class="t-en" lang="en">${escapeHtml(enText)}</${tag}>
      <${tag} class="t-es" lang="es">${escapeHtml(esText)}</${tag}>
    </span>
  `;
}

function inlineBi(enText, esText) {
  return `<span class="t-en" lang="en">${escapeHtml(enText)}</span><span class="t-es" lang="es">${escapeHtml(esText)}</span>`;
}

const ICONS = {
  mapPin: `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  check: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`,
  play: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><polygon points="6 4 20 12 6 20 6 4"/></svg>`,
  external: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  video: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3Z"/></svg>`
};

function severityBadge(level) {
  const map = {
    critical: { cls: "is-critical", en: "Critical Trap", es: "Muy Exigente" },
    high: { cls: "is-high", en: "High Focus", es: "Alta Atención" },
    medium: { cls: "is-medium", en: "Standard", es: "Estándar" },
    serious: { cls: "is-critical", en: "Serious Fault Risk", es: "Riesgo Suspenso Directo" },
    minor: { cls: "is-high", en: "Driving Fault Risk", es: "Falta Leve" }
  };
  const item = map[level] || map.medium;
  return `<span class="severity-badge ${item.cls}">${inlineBi(item.en, item.es)}</span>`;
}

function applyLang(mode) {
  state.lang = mode;
  document.documentElement.setAttribute("data-lang", mode);
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.langMode === mode));
  });
  saveState();
}

function resolveTheme(pref) {
  if (pref === "light" || pref === "dark") return pref;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(pref) {
  state.theme = pref;
  const resolved = resolveTheme(pref);
  document.documentElement.setAttribute("data-theme", resolved);
  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.setAttribute("aria-pressed", String(resolved === "dark"));
  }
  saveState();
}

function renderCentreBriefing() {
  const host = document.getElementById("centre-briefing-card");
  if (!host) return;
  host.innerHTML = `
    <div class="banner-head">
      <div>
        <h2 class="banner-title">${escapeHtml(TEST_CENTRE.name)}</h2>
        <p class="banner-meta mono">${escapeHtml(TEST_CENTRE.address)}</p>
      </div>
      <a class="action-btn primary" style="flex: 0 0 auto;" href="${TEST_CENTRE.googleMapsUrl}" target="_blank" rel="noopener noreferrer">
        ${ICONS.mapPin}
        ${inlineBi("Open Centre in Maps", "Abrir Centro en Maps")}
      </a>
    </div>
    ${bi(TEST_CENTRE.exitBriefing.en, TEST_CENTRE.exitBriefing.es, "p")}
  `;
}

function updateRoutesProgress() {
  const doneCount = ROUTES.filter((r) => Boolean(state.practicedRoutes[r.id])).length;
  const pill = document.getElementById("routes-progress");
  if (pill) {
    pill.textContent = `${doneCount}/${ROUTES.length}`;
  }
}

function renderRoutes() {
  const listEl = document.getElementById("routes-list");
  if (!listEl) return;

  const query = state.routeQuery.trim().toLowerCase();
  const filtered = ROUTES.filter((route) => {
    const matchesCat = state.routeFilter === "all" || route.category === state.routeFilter;
    if (!matchesCat) return false;
    if (!query) return true;
    const haystack = [
      route.code,
      route.name.en,
      route.name.es,
      route.area.en,
      route.summary.en,
      route.summary.es,
      ...route.waypoints.map((w) => `${w.street} ${w.en} ${w.es}`),
      ...route.traps.map((t) => `${t.title.en} ${t.title.es} ${t.explanation.en} ${t.explanation.es}`)
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });

  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div class="empty-state">
        ${bi("No Swindon routes match your search.", "Ninguna ruta coincide con esa búsqueda.", "p")}
        <button type="button" class="chip-btn is-active" id="reset-routes-filter">
          ${inlineBi("Reset filters", "Ver todas las rutas")}
        </button>
      </div>
    `;
    document.getElementById("reset-routes-filter")?.addEventListener("click", () => {
      state.routeFilter = "all";
      state.routeQuery = "";
      const input = document.getElementById("route-search");
      if (input) input.value = "";
      document.querySelectorAll("[data-route-filter]").forEach((b) => {
        b.classList.toggle("is-active", b.dataset.routeFilter === "all");
      });
      renderRoutes();
    });
    return;
  }

  listEl.innerHTML = filtered
    .map((route) => {
      const isDone = Boolean(state.practicedRoutes[route.id]);
      const speedHtml = route.speedLimits
        .map((limit) => `<span class="uk-speed-sign" title="${limit} mph">${limit}</span>`)
        .join("");

      const waypointsHtml = route.waypoints
        .map(
          (wp, idx) => `
          <li class="waypoint-item">
            <span class="step-num mono">${idx + 1}</span>
            <div>
              <strong style="display:block; margin-bottom:0.2rem;">${escapeHtml(wp.street)}</strong>
              ${bi(wp.en, wp.es, "span")}
            </div>
          </li>`
        )
        .join("");

      const trapsHtml = route.traps
        .map(
          (trap) => `
          <div class="trap-box ${trap.severity === "serious" ? "is-serious" : ""}">
            <div class="badges-row">${severityBadge(trap.severity)}</div>
            <strong>${bi(trap.title.en, trap.title.es, "span")}</strong>
            <div class="quote-pill">"${escapeHtml(trap.examinerQuoteEn)}"</div>
            ${bi(trap.explanation.en, trap.explanation.es, "span")}
          </div>`
        )
        .join("");

      return `
        <article class="route-card ${isDone ? "is-done" : ""}" id="${route.id}">
          <div class="card-top">
            <div class="badges-row">
              <span class="code-badge mono">${escapeHtml(route.code)}</span>
              ${severityBadge(route.difficulty)}
              ${route.id === "route-3" ? `<span class="uk-stop-badge">STOP</span>` : ""}
            </div>
            <button type="button" class="check-btn" data-toggle-route="${route.id}" aria-pressed="${isDone}">
              ${ICONS.check}
              ${inlineBi(isDone ? "Practised" : "Mark Practised", isDone ? "Practicada" : "Marcar")}
            </button>
          </div>

          <div>
            <h3 class="route-title">${bi(route.name.en, route.name.es, "span")}</h3>
            <p class="route-area">${escapeHtml(route.area.en)}</p>
          </div>

          <div class="meta-strip">
            <span class="metric-chip mono">~${route.durationMin} min · ${route.distanceMiles} mi</span>
            <div class="speed-signs" aria-label="Speed limits in mph">${speedHtml}</div>
          </div>

          ${bi(route.summary.en, route.summary.es, "p")}

          <div class="card-actions">
            <a class="action-btn primary" href="${route.googleMapsUrl}" target="_blank" rel="noopener noreferrer">
              ${ICONS.mapPin}
              ${inlineBi("Open Route in Google Maps", "Abrir Ruta en Google Maps")}
            </a>
            <button type="button" class="action-btn secondary" data-jump-videos="${route.id}">
              ${ICONS.video}
              ${inlineBi(`Watch Videos (${route.videoIds.length})`, `Ver Vídeos (${route.videoIds.length})`)}
            </button>
          </div>

          <details class="nested-details">
            <summary>
              <span class="summary-text">${inlineBi(`Turn-by-Turn Waypoints (${route.waypoints.length})`, `Puntos de paso y trucos (${route.waypoints.length})`)}</span>
            </summary>
            <div class="details-body">
              <ol class="waypoint-list">${waypointsHtml}</ol>
              <div>
                <strong>${inlineBi("Likely Manoeuvre:", "Maniobra probable:")}</strong>
                ${bi(route.manoeuvres.en, route.manoeuvres.es, "span")}
              </div>
            </div>
          </details>

          <details class="nested-details">
            <summary>
              <span class="summary-text">${inlineBi(`Examiner Traps & Fault Risks (${route.traps.length})`, `Pilladas del examinador (${route.traps.length})`)}</span>
            </summary>
            <div class="details-body">
              ${trapsHtml}
            </div>
          </details>
        </article>
      `;
    })
    .join("");

  updateRoutesProgress();
}

function updateHotspotsProgress() {
  const mastered = HOTSPOTS.filter((h) => Boolean(state.masteredHotspots[h.id])).length;
  const pill = document.getElementById("hotspots-progress");
  if (pill) {
    pill.textContent = `${mastered}/${HOTSPOTS.length}`;
  }
}

function renderHotspots() {
  const container = document.getElementById("hotspots-accordion");
  if (!container) return;

  container.innerHTML = HOTSPOTS.map((hs, index) => {
    const isMastered = Boolean(state.masteredHotspots[hs.id]);
    return `
      <details class="card-details" ${index === 0 ? "open" : ""}>
        <summary>
          <span class="summary-text">
            <span>${inlineBi(hs.name.en, hs.name.es)}</span>
            <span class="mono" style="font-size:0.75rem; font-weight:500; color:var(--text-secondary);">${escapeHtml(hs.road)}</span>
          </span>
          <span class="summary-meta">${severityBadge(hs.severity)}</span>
        </summary>
        <div class="details-body">
          <div class="trap-box is-serious">
            <strong>${inlineBi("The Trap:", "Dónde está la pillada:")}</strong>
            ${bi(hs.trapEn, hs.trapEs, "span")}
          </div>
          <div>
            <strong>${inlineBi("How to Pass Cleanly:", "Cómo superarlo sin faltas:")}</strong>
            ${bi(hs.tipEn, hs.tipEs, "span")}
          </div>
          <div class="card-actions">
            <a class="action-btn primary" href="${hs.mapsUrl}" target="_blank" rel="noopener noreferrer">
              ${ICONS.mapPin}
              ${inlineBi("Inspect in Google Maps", "Ver punto en Google Maps")}
            </a>
            <button type="button" class="check-btn" data-toggle-hotspot="${hs.id}" aria-pressed="${isMastered}">
              ${ICONS.check}
              ${inlineBi(isMastered ? "Mastered" : "Mark Mastered", isMastered ? "Dominada" : "Dominada")}
            </button>
          </div>
        </div>
      </details>
    `;
  }).join("");

  updateHotspotsProgress();
  syncToggleAllButton(container);
}

function renderVideos() {
  const listEl = document.getElementById("videos-list");
  if (!listEl) return;

  const filtered = VIDEOS.filter(
    (v) => state.videoFilter === "all" || v.routeId === state.videoFilter
  );

  listEl.innerHTML = filtered
    .map((video) => {
      const watchUrl = `https://www.youtube.com/watch?v=${encodeURIComponent(video.id)}`;
      const thumbUrl = `https://i.ytimg.com/vi/${encodeURIComponent(video.id)}/hqdefault.jpg`;
      return `
        <article class="video-card" data-video-id="${escapeHtml(video.id)}">
          <div class="video-stage" id="stage-${escapeHtml(video.id)}">
            <button type="button" class="video-poster-btn" data-play-video="${escapeHtml(video.id)}" aria-label="Play video: ${escapeHtml(video.title)}">
              <img src="${thumbUrl}" alt="${escapeHtml(video.title)}" loading="lazy" decoding="async" />
              <span class="play-badge">${ICONS.play}</span>
            </button>
          </div>
          <div class="video-body">
            <div class="badges-row">
              <span class="code-badge mono">${escapeHtml(video.durationLabel)}</span>
            </div>
            <h3 class="video-title">${escapeHtml(video.title)}</h3>
            <p class="video-author">${escapeHtml(video.author)}</p>
            ${bi(video.notes.en, video.notes.es, "p")}
            <div class="card-actions" style="margin-top:auto;">
              <a class="action-btn primary" href="${video.mapsUrl}" target="_blank" rel="noopener noreferrer">
                ${ICONS.mapPin}
                ${inlineBi("Route in Google Maps", "Ruta en Google Maps")}
              </a>
              <a class="action-btn secondary" href="${watchUrl}" target="_blank" rel="noopener noreferrer">
                ${ICONS.external}
                ${inlineBi("Open in YouTube", "Abrir en YouTube")}
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function updateQuestionsProgress() {
  const total = PRACTICAL_KIT.showMeTellMe.length;
  const done = PRACTICAL_KIT.showMeTellMe.filter((q) => Boolean(state.learnedQuestions[q.id])).length;
  const pill = document.getElementById("questions-progress");
  if (pill) {
    pill.textContent = `${done}/${total}`;
  }
}

function renderPracticalKit() {
  const phrasesEl = document.getElementById("phrases-list");
  if (phrasesEl) {
    phrasesEl.innerHTML = PRACTICAL_KIT.examinerPhrases
      .map(
        (item) => `
        <article class="phrase-card">
          <p class="phrase-quote">"${escapeHtml(item.en)}"</p>
          <p class="phrase-es">${escapeHtml(item.es)}</p>
          ${bi(item.focus.en, item.focus.es, "span")}
        </article>`
      )
      .join("");
  }

  const questionsEl = document.getElementById("questions-accordion");
  if (questionsEl) {
    questionsEl.innerHTML = PRACTICAL_KIT.showMeTellMe
      .map((item, idx) => {
        const learned = Boolean(state.learnedQuestions[item.id]);
        return `
          <details class="card-details" ${idx === 0 ? "open" : ""}>
            <summary>
              <span class="summary-text">${inlineBi(item.qEn, item.qEs)}</span>
              <span class="summary-meta code-badge mono">${escapeHtml(item.type)}</span>
            </summary>
            <div class="details-body">
              ${bi(item.aEn, item.aEs, "p")}
              <div>
                <button type="button" class="check-btn" data-toggle-question="${item.id}" aria-pressed="${learned}">
                  ${ICONS.check}
                  ${inlineBi(learned ? "Learned" : "Mark Learned", learned ? "Sabida" : "Sabida")}
                </button>
              </div>
            </div>
          </details>
        `;
      })
      .join("");
    syncToggleAllButton(questionsEl);
  }

  const manoeuvresEl = document.getElementById("manoeuvres-list");
  if (manoeuvresEl) {
    manoeuvresEl.innerHTML = PRACTICAL_KIT.manoeuvres
      .map(
        (m) => `
        <article class="manoeuvre-card">
          <div class="badges-row">
            <span class="code-badge mono">${escapeHtml(m.code)}</span>
          </div>
          <strong>${bi(m.en, m.es, "span")}</strong>
          ${bi(m.stepsEn, m.stepsEs, "p")}
        </article>`
      )
      .join("");
  }

  updateQuestionsProgress();
}

/* Tab Management (modern-web-guidance: tabs + hidden="until-found" + beforematch) */
const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function activateTab(tab, { focus = false } = {}) {
  if (!tab) return;
  const targetPanelId = tab.dataset.panel;

  for (const t of tabs) {
    const selected = t === tab;
    t.setAttribute("aria-selected", String(selected));
    t.toggleAttribute("focusgroupstart", selected);
  }

  for (const panel of panels) {
    const isTarget = panel.id === targetPanelId;
    if (isTarget) {
      panel.hidden = false;
      panel.removeAttribute("hidden");
      panel.setAttribute("tabindex", "0");
    } else {
      panel.hidden = "until-found";
      panel.setAttribute("hidden", "until-found");
      panel.removeAttribute("tabindex");
    }
  }

  tab.scrollIntoView({ block: "nearest", inline: "nearest", container: "nearest" });
  if (focus) {
    tab.focus();
  }

  state.activeTab = tab.id;
  saveState();
}

function setupTabs() {
  const tablist = document.querySelector('[role="tablist"]');
  if (!tablist) return;

  tablist.addEventListener("click", (event) => {
    const btn = event.target.closest('[role="tab"]');
    if (btn) activateTab(btn);
  });

  // Keyboard arrow fallback for browsers without native focusgroup support
  tablist.addEventListener("keydown", (event) => {
    const current = event.target.closest('[role="tab"]');
    if (!current) return;
    const idx = tabs.indexOf(current);
    let nextIdx = -1;
    if (event.key === "ArrowRight") nextIdx = (idx + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIdx = (idx - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIdx = 0;
    if (event.key === "End") nextIdx = tabs.length - 1;
    if (nextIdx !== -1) {
      event.preventDefault();
      activateTab(tabs[nextIdx], { focus: true });
    }
  });

  // Sync tab selection when browser Find-in-page opens a hidden="until-found" panel
  document.addEventListener("beforematch", (event) => {
    const matchedPanel = event.target.closest('[role="tabpanel"]');
    if (!matchedPanel) return;
    const matchingTab = tabs.find((t) => t.dataset.panel === matchedPanel.id);
    if (matchingTab) activateTab(matchingTab);
  });

  const savedTab = document.getElementById(state.activeTab) || tabs[0];
  activateTab(savedTab);
}

/* Accordion Expand All / Collapse All (modern-web-guidance: accordion) */
function syncToggleAllButton(accordion) {
  if (!accordion) return;
  const button = document.querySelector(`[command="--toggle-all"][commandfor="${CSS.escape(accordion.id)}"]`);
  if (!button) return;
  const items = accordion.querySelectorAll(":scope > details");
  const allOpen = items.length > 0 && Array.prototype.every.call(items, (d) => d.open);
  button.setAttribute("aria-expanded", String(allOpen));
}

function runToggleAll(button, accordion) {
  if (!button || !accordion) return;
  const expand = button.getAttribute("aria-expanded") !== "true";
  for (const details of accordion.querySelectorAll(":scope > details")) {
    details.open = expand;
  }
  syncToggleAllButton(accordion);
}

function setupAccordions() {
  document.addEventListener("click", (event) => {
    const btn = event.target.closest(".toggle-all-btn");
    if (!btn) return;
    const targetId = btn.getAttribute("commandfor");
    const accordion = targetId ? document.getElementById(targetId) : null;
    runToggleAll(btn, accordion);
  });

  document.addEventListener(
    "toggle",
    (event) => {
      if (!(event.target instanceof HTMLDetailsElement)) return;
      const accordion = event.target.closest(".accordion");
      if (accordion) syncToggleAllButton(accordion);
    },
    { capture: true }
  );
}

/* No scroll hide on top bar so tabs stay reachable on mobile */
function setupProgressiveScrollFallbacks() {}

function setupInteractions() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.langMode));
  });

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    const current = resolveTheme(state.theme);
    applyTheme(current === "dark" ? "light" : "dark");
  });

  const searchInput = document.getElementById("route-search");
  if (searchInput) {
    searchInput.value = state.routeQuery;
    searchInput.addEventListener("input", (event) => {
      state.routeQuery = event.target.value;
      saveState();
      renderRoutes();
    });
  }

  document.querySelectorAll("[data-route-filter]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.routeFilter === state.routeFilter);
    btn.addEventListener("click", () => {
      state.routeFilter = btn.dataset.routeFilter;
      document.querySelectorAll("[data-route-filter]").forEach((b) => {
        b.classList.toggle("is-active", b === btn);
      });
      saveState();
      renderRoutes();
    });
  });

  document.querySelectorAll("[data-video-filter]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.videoFilter === state.videoFilter);
    btn.addEventListener("click", () => {
      state.videoFilter = btn.dataset.videoFilter;
      document.querySelectorAll("[data-video-filter]").forEach((b) => {
        b.classList.toggle("is-active", b === btn);
      });
      saveState();
      renderVideos();
    });
  });

  document.addEventListener("click", (event) => {
    const routeToggle = event.target.closest("[data-toggle-route]");
    if (routeToggle) {
      const id = routeToggle.dataset.toggleRoute;
      state.practicedRoutes[id] = !state.practicedRoutes[id];
      saveState();
      renderRoutes();
      return;
    }

    const hotspotToggle = event.target.closest("[data-toggle-hotspot]");
    if (hotspotToggle) {
      const id = hotspotToggle.dataset.toggleHotspot;
      const next = !state.masteredHotspots[id];
      state.masteredHotspots[id] = next;
      saveState();
      hotspotToggle.setAttribute("aria-pressed", String(next));
      hotspotToggle.innerHTML = `${ICONS.check} ${inlineBi(next ? "Mastered" : "Mark Mastered", "Dominada")}`;
      updateHotspotsProgress();
      return;
    }

    const questionToggle = event.target.closest("[data-toggle-question]");
    if (questionToggle) {
      const id = questionToggle.dataset.toggleQuestion;
      const next = !state.learnedQuestions[id];
      state.learnedQuestions[id] = next;
      saveState();
      questionToggle.setAttribute("aria-pressed", String(next));
      questionToggle.innerHTML = `${ICONS.check} ${inlineBi(next ? "Learned" : "Mark Learned", "Sabida")}`;
      updateQuestionsProgress();
      return;
    }

    const jumpBtn = event.target.closest("[data-jump-videos]");
    if (jumpBtn) {
      const routeId = jumpBtn.dataset.jumpVideos;
      state.videoFilter = routeId;
      document.querySelectorAll("[data-video-filter]").forEach((b) => {
        b.classList.toggle("is-active", b.dataset.videoFilter === routeId);
      });
      saveState();
      renderVideos();
      activateTab(document.getElementById("tab-videos"), { focus: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const playBtn = event.target.closest("[data-play-video]");
    if (playBtn) {
      const videoId = playBtn.dataset.playVideo;
      const stage = document.getElementById(`stage-${videoId}`);
      if (stage) {
        stage.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0" title="Swindon Driving Test Route Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      }
    }
  });
}

applyLang(state.lang);
applyTheme(state.theme);
renderCentreBriefing();
renderRoutes();
renderHotspots();
renderVideos();
renderPracticalKit();
setupTabs();
setupAccordions();
setupInteractions();
setupProgressiveScrollFallbacks();
