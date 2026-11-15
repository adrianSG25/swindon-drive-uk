export const TEST_CENTRE = {
  name: "Swindon Driving Test Centre (Peatmoor)",
  address: "1 Fenn Close, Peatmoor, Swindon, Wiltshire, SN5 5BL",
  postcode: "SN5 5BL",
  coords: { lat: 51.5549, lng: -1.8442 },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Swindon+Driving+Test+Centre+1+Fenn+Close+Peatmoor+Swindon+SN5+5BL",
  exitBriefing: {
    en: "Leaving 1 Fenn Close: check both sides of the car park exit for reversing test candidates, keep left on the blind bend past parked Hillmead vans, respect the immediate 30 mph limit onto Peatmoor Way, and yield to the right at the Peatmoor Copse mini-roundabout without clipping the raised centre dome.",
    es: "Al salir de 1 Fenn Close: revisa ambos lados de la salida por si otro alumno maniobra, mantente a la izquierda en la curva ciega con furgonetas aparcadas en Hillmead, respeta al instante los 30 mph al entrar en Peatmoor Way y cede el paso a la derecha en la mini-rotonda de Peatmoor Copse sin pisar la isleta pintada."
  }
};

export const ROUTES = [
  {
    id: "route-1",
    code: "SWD-01",
    category: "roundabouts",
    difficulty: "critical",
    durationMin: 40,
    distanceMiles: 9.8,
    speedLimits: [30, 40, 50],
    name: {
      en: "West Swindon & The Big Three Roundabouts",
      es: "West Swindon y las Tres Grandes Rotondas"
    },
    area: {
      en: "Peatmoor · The Meads · Mannington · Bruce Street Bridges · Mead Way",
      es: "Peatmoor · The Meads · Mannington · Bruce Street Bridges · Mead Way"
    },
    manoeuvres: {
      en: "Forward or Reverse Bay Park at test centre / West Swindon",
      es: "Aparcamiento en batería de frente o marcha atrás al inicio o regreso"
    },
    summary: {
      en: "Swindon's classic lane-discipline exam. Links the three multi-lane spiral roundabouts (The Meads, Mannington, and Bruce Street Bridges) where most serious lane-drift faults happen.",
      es: "La ruta clásica de disciplina de carril en Swindon. Enlaza las tres rotondas en espiral más temidas (The Meads, Mannington y Bruce Street Bridges), donde ocurren la mayoría de suspensos por invadir otro carril."
    },
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=1+Fenn+Close,+Swindon+SN5+5BL&destination=1+Fenn+Close,+Swindon+SN5+5BL&waypoints=Peatmoor+Way,+Swindon|The+Meads+Roundabout,+Swindon|Mannington+Roundabout,+Swindon|Bruce+Street+Bridges,+Swindon|Tewkesbury+Way,+Swindon&travelmode=driving",
    waypoints: [
      {
        street: "1 Fenn Close → Peatmoor Way",
        en: "Exit left onto Peatmoor Way (30 mph), keep well clear of parked commercial vans.",
        es: "Sal a la izquierda hacia Peatmoor Way (30 mph), dejando margen lateral con las furgonetas."
      },
      {
        street: "The Meads Roundabout (A3102 / Mead Way)",
        en: "Follow painted floor arrows early; spiral naturally outward after passing the first exit.",
        es: "Lee las flechas pintadas en el suelo con antelación; deja que la espiral te saque hacia fuera tras pasar la primera salida."
      },
      {
        street: "Mannington Roundabout (Great Western Way)",
        en: "Obey traffic lights inside the circulatory road and watch the central lane split toward A3102.",
        es: "Respeta los semáforos interiores de la rotonda y vigila la bifurcación del carril central hacia la A3102."
      },
      {
        street: "Bruce Street Bridges (4-Roundabout Complex)",
        en: "Do not stay trapped in the left-only Rodbourne lane if going ahead onto Great Western Way.",
        es: "No te quedes encerrada en el carril izquierdo exclusivo hacia Rodbourne/Outlet si sigues recto por Great Western Way."
      },
      {
        street: "Mead Way → Tewkesbury Way → Peatmoor",
        en: "Accelerate briskly up to 40/50 mph where safe, then brake smoothly before the 30 mph Peatmoor turn-off.",
        es: "Acelera con decisión hasta 40/50 mph cuando sea seguro y reduce con suavidad antes de entrar de nuevo en 30 mph hacia Peatmoor."
      }
    ],
    traps: [
      {
        severity: "serious",
        title: {
          en: "Cutting lane markings inside Bruce Street Bridges",
          es: "Pisar la línea discontinua dentro de Bruce Street Bridges"
        },
        examinerQuoteEn: "At the roundabout ahead, follow signs for Town Centre / A4289.",
        explanation: {
          en: "Four connected mini/signalized roundabouts mean lane lines curve sharply. Pick your lane by the gantry sign 150 yards early and hold your exact track between the broken white lines.",
          es: "Son cuatro rotondas enlazadas con curvas cerradas. Elige tu carril 150 yardas antes mirando los carteles altos y mantén tu trazada exacta entre las líneas blancas sin cruzar al carril de al lado."
        }
      },
      {
        severity: "serious",
        title: {
          en: "Stopping beyond the white line at Mannington internal lights",
          es: "Saltarse la línea de detención en el semáforo interior de Mannington"
        },
        examinerQuoteEn: "Follow the road ahead through Mannington Roundabout.",
        explanation: {
          en: "When entering on green, watch the secondary lights on the roundabout island. Going straight on amber/red when space ahead is clear—or blocking yellow box markings—triggers an immediate serious fault.",
          es: "Aunque entres en verde, la rotonda tiene semáforos interiores. Quedarte parada sobre una cuadrícula amarilla o rebasar la línea blanca en rojo dentro de la glorieta es suspenso directo."
        }
      }
    ],
    videoIds: ["spKDQ3BMwts", "xMHFAVMB2B8", "hBXzSIY0rAU"]
  },
  {
    id: "route-2",
    code: "SWD-02",
    category: "residential",
    difficulty: "high",
    durationMin: 38,
    distanceMiles: 8.4,
    speedLimits: [20, 30, 40],
    name: {
      en: "Nine Elms, Toothill & Tewkesbury Cross",
      es: "Nine Elms, Toothill y Tewkesbury Cross"
    },
    area: {
      en: "Nine Elms · Tewkesbury Cross · Toothill · Freshbrook · Whitehill Way",
      es: "Nine Elms · Tewkesbury Cross · Toothill · Freshbrook · Whitehill Way"
    },
    manoeuvres: {
      en: "Pull up on the right & reverse 2 car lengths / Parallel Park",
      es: "Parar en el lado derecho y dar marcha atrás 2 coches / Aparcamiento en línea"
    },
    summary: {
      en: "Heavy residential loop testing tight meeting situations, blind T-junctions in Nine Elms and Toothill, and fast sightlines entering Tewkesbury Cross.",
      es: "Circuito urbano-residencial muy usado para evaluar cómo cedes el paso en calles estrechas con coches aparcados en Nine Elms y Toothill, además de la visibilidad rápida en Tewkesbury Cross."
    },
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=1+Fenn+Close,+Swindon+SN5+5BL&destination=1+Fenn+Close,+Swindon+SN5+5BL&waypoints=Nine+Elms,+Swindon|Tewkesbury+Way,+Swindon|Toothill,+Swindon|Freshbrook,+Swindon|Whitehill+Way,+Swindon&travelmode=driving",
    waypoints: [
      {
        street: "Peatmoor → Nine Elms Estate",
        en: "Slow down early for narrow bends and parked cars blocking your side of the road.",
        es: "Reduce pronto ante curvas cerradas y coches aparcados que invaden tu lado de la calzada."
      },
      {
        street: "Tewkesbury Cross Roundabout",
        en: "Low hedge and fast traffic from the right; keep creeping in 1st gear ready to stop.",
        es: "Setos bajos y coches rápidos desde la derecha; acércate muy despacio en primera lista para detenerte."
      },
      {
        street: "Toothill & Freshbrook Estate Roads",
        en: "Expect examiner request to pull up on the right and reverse, or parallel park behind a parked hatchback.",
        es: "Aquí suelen pedir parar a la derecha y dar marcha atrás 2 coches o aparcar en línea detrás de un vehículo."
      },
      {
        street: "Whitehill Way → Shaw Ridge → Peatmoor",
        en: "Check 40 mph repeater signs on Whitehill Way so you do not hold up traffic at 28 mph.",
        es: "Atenta a las señales repetidoras de 40 mph en Whitehill Way para no ir demasiado lenta a 28 mph (falta de progreso)."
      }
    ],
    traps: [
      {
        severity: "serious",
        title: {
          en: "Forcing through parked-car pinch points in Nine Elms",
          es: "Forzar el paso entre coches aparcados en Nine Elms"
        },
        examinerQuoteEn: "Continue along this road and take the next road on the left.",
        explanation: {
          en: "If parked vehicles are on your side, oncoming traffic has priority. Wait fully inside a passing gap before the pinch point instead of squeezing alongside another moving car.",
          es: "Si el obstáculo está en tu carril, el que viene de frente tiene prioridad. Espera completamente dentro de un hueco amplio antes de estrecharse en vez de intentar pasar a la vez."
        }
      },
      {
        severity: "serious",
        title: {
          en: "Missing the right blind spot after 'Pull up on the right'",
          es: "Olvidar el ángulo muerto derecho tras parar a la derecha"
        },
        examinerQuoteEn: "Pull up on the right when it is safe to do so, please.",
        explanation: {
          en: "Check mirrors before slowing, pull parallel without touching the kerb, reverse straight while scanning all around (especially front-left swing and rear glass), and check right blind spot before moving off.",
          es: "Mira espejos antes de frenar, alinea sin golpear el bordillo, da marcha atrás mirando alrededor y al moverte hacia tu carril revisa obligatoriamente el ángulo muerto derecho."
        }
      }
    ],
    videoIds: ["hTmXDlogJE8", "-6N1yof4BYY"]
  },
  {
    id: "route-3",
    code: "SWD-03",
    category: "rural",
    difficulty: "critical",
    durationMin: 42,
    distanceMiles: 12.1,
    speedLimits: [30, 40, 60],
    name: {
      en: "Purton & Lydiard Millicent Rural + STOP Sign",
      es: "Purton y Lydiard Millicent Rural + Señal STOP"
    },
    area: {
      en: "Swinley Drive · Hook Street · Lydiard Millicent · Purton · Mead Way",
      es: "Swinley Drive · Hook Street · Lydiard Millicent · Purton · Mead Way"
    },
    manoeuvres: {
      en: "Emergency Stop (frequent on straight rural approaches) or Pull up on right",
      es: "Frenada de emergencia (frecuente en rectas despejadas) o parada a la derecha"
    },
    summary: {
      en: "Country-lane test out towards Lydiard Millicent and Purton. Famous for the mandatory octagonal STOP sign at Purton, blind crests, and sudden 60 mph to 30 mph transitions.",
      es: "Ruta hacia carreteras rurales de Lydiard Millicent y Purton. Famosa por la señal octogonal obligatoria de STOP en Purton, cambios de rasante y transiciones bruscas de 60 mph a 30 mph."
    },
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=1+Fenn+Close,+Swindon+SN5+5BL&destination=1+Fenn+Close,+Swindon+SN5+5BL&waypoints=Swinley+Drive,+Swindon|Hook+Street,+Swindon|Lydiard+Millicent,+Swindon|Purton,+Swindon|Mead+Way,+Swindon&travelmode=driving",
    waypoints: [
      {
        street: "Peatmoor → Hook Street (B4553)",
        en: "Transition to National Speed Limit (60 mph single carriageway), adjusting speed down before blind bends.",
        es: "Paso a National Speed Limit (60 mph en calzada única); adapta la velocidad antes de cada curva sin visibilidad."
      },
      {
        street: "Lydiard Millicent Village Entry",
        en: "Brake early so your speedometer reads 30 mph or less BEFORE passing the 30 mph terminal signs.",
        es: "Frena con antelación para pasar la señal de entrada al pueblo a 30 mph o menos, nunca después de cruzarla."
      },
      {
        street: "Purton Crossroads (Mandatory STOP)",
        en: "Bring wheels to a complete dead stop (0 mph) behind the solid white line, select 1st gear, peep & creep.",
        es: "Detén las ruedas por completo (0 mph) detrás de la línea blanca continua, mete primera y asómate poco a poco."
      },
      {
        street: "Purton → Shaw / Mead Way → Fenn Close",
        en: "Watch cyclists and horses along country hedges; leave at least 1.5 m clearance when overtaking.",
        es: "Atenta a ciclistas y caballos en los arcenes; deja al menos 1,5 m de separación lateral al adelantar."
      }
    ],
    traps: [
      {
        severity: "serious",
        title: {
          en: "Rolling through the Purton STOP sign at 2 mph",
          es: "Hacer 'cede el paso' (rolling stop) en el STOP de Purton"
        },
        examinerQuoteEn: "At the end of this road, turn right.",
        explanation: {
          en: "Unlike 'Give Way', a UK octagonal STOP sign requires your wheels to stop turning completely behind the solid line for a clear pause, even when the junction looks empty.",
          es: "A diferencia del Give Way, la señal STOP octogonal exige detención absoluta de las ruedas detrás de la línea continua durante un segundo real, aunque parezca que no viene nadie."
        }
      },
      {
        severity: "serious",
        title: {
          en: "Entering village 30 mph signs still doing 38 mph",
          es: "Entrar en zona de 30 mph en Lydiard o Purton todavía a 38 mph"
        },
        examinerQuoteEn: "Watch the change in speed limit ahead.",
        explanation: {
          en: "Examiners look for proactive speed control: ease off the gas as soon as you spot the village name plate and 30 mph roundel in the distance.",
          es: "El examinador evalúa si anticipas el límite: levanta el acelerador en cuanto veas la placa del pueblo y la señal circular de 30 mph a lo lejos."
        }
      }
    ],
    videoIds: ["2HHmMuRosW8", "DLPXP4yRmWE"]
  },
  {
    id: "route-4",
    code: "SWD-04",
    category: "dual",
    difficulty: "high",
    durationMin: 40,
    distanceMiles: 11.4,
    speedLimits: [30, 40, 50, 70],
    name: {
      en: "Blagrove, Spittleborough (M4 J16) & A3102",
      es: "Blagrove, Spittleborough (M4 J16) y A3102"
    },
    area: {
      en: "Whitehill Way · Blagrove · Spittleborough J16 · A3102 Wootton Bassett · Mannington",
      es: "Whitehill Way · Blagrove · Spittleborough J16 · A3102 Wootton Bassett · Mannington"
    },
    manoeuvres: {
      en: "Forward Bay Park (retail car park / test centre) + Sat-Nav Independent Driving",
      es: "Aparcamiento en batería de frente + 20 min de conducción independiente con GPS"
    },
    summary: {
      en: "High-speed dual-carriageway confidence route. Tests safe slip-road merging, motorway-sign awareness at M4 Junction 16, and returning promptly to the left lane.",
      es: "Ruta de velocidad y autovía (dual carriageway). Evalúa incorporaciones decididas, no entrar por error en la autopista M4 en la rotonda de Junction 16 y volver siempre al carril izquierdo."
    },
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=1+Fenn+Close,+Swindon+SN5+5BL&destination=1+Fenn+Close,+Swindon+SN5+5BL&waypoints=Whitehill+Way,+Swindon|Blagrove+Roundabout,+Swindon|Spittleborough+Roundabout,+Swindon|A3102+Swindon+Road,+Royal+Wootton+Bassett|Mannington+Roundabout,+Swindon&travelmode=driving",
    waypoints: [
      {
        street: "Whitehill Way → Blagrove Roundabout",
        en: "Use middle/right lane markings carefully when heading south toward M4 J16.",
        es: "Sigue las marcas de carril central/derecho al bajar hacia Blagrove y Junction 16."
      },
      {
        street: "Spittleborough Roundabout (M4 Junction 16)",
        en: "Read blue vs green signs: learners CANNOT enter blue-signed M4 slip roads.",
        es: "Distingue carteles verdes (A3102) de azules (M4): con permiso provisional está prohibido entrar en la autopista M4."
      },
      {
        street: "A3102 Dual Carriageway (50 / 70 mph)",
        en: "Match traffic speed cleanly, stay in Lane 1 (left) unless overtaking slower vehicles.",
        es: "Alcanza la velocidad segura de la vía y circula por el carril izquierdo (Lane 1) salvo para adelantar."
      },
      {
        street: "Wootton Bassett Rd → Mannington → Peatmoor",
        en: "Anticipate red lights on Mannington approach and slow smoothly from 40 to 30 mph.",
        es: "Anticipa los semáforos al volver por Wootton Bassett Rd y Mannington, reduciendo progresivamente."
      }
    ],
    traps: [
      {
        severity: "serious",
        title: {
          en: "Lane-hogging in Lane 2 on the A3102",
          es: "Quedarse circulando en el carril derecho en la A3102"
        },
        examinerQuoteEn: "Follow the road ahead towards Swindon.",
        explanation: {
          en: "In the UK you must drive in the left lane unless overtaking or turning right soon. Staying in the right lane with empty space to your left results in a fault.",
          es: "En Reino Unido siempre se circula por la izquierda salvo adelantamiento o giro inminente a la derecha. Quedarse en el carril derecho con el izquierdo libre penaliza."
        }
      },
      {
        severity: "serious",
        title: {
          en: "Wrong spiral lane at Spittleborough J16 pointing onto the M4",
          es: "Equivocarse de espiral en Spittleborough J16 hacia el ramal de la M4"
        },
        examinerQuoteEn: "Follow signs for Royal Wootton Bassett / A3102.",
        explanation: {
          en: "Check the painted road wording ('M4 E', 'M4 W', 'A3102') in advance so you don't accidentally steer toward a motorway slip road.",
          es: "Lee las letras pintadas sobre el asfalto ('M4 E', 'M4 W', 'A3102') antes de cruzar para no encarar el ramal azul de la autopista."
        }
      }
    ],
    videoIds: ["TDPr2SV2Tjo", "xMHFAVMB2B8"]
  },
  {
    id: "route-5",
    code: "SWD-05",
    category: "roundabouts",
    difficulty: "critical",
    durationMin: 40,
    distanceMiles: 9.2,
    speedLimits: [20, 30, 40],
    name: {
      en: "Town Centre, Transfer Bridges & Magic Roundabout",
      es: "Centro, Transfer Bridges y Magic Roundabout"
    },
    area: {
      en: "Bruce Street Bridges · Transfer Bridges · Magic Roundabout · Queens Drive",
      es: "Bruce Street Bridges · Transfer Bridges · Magic Roundabout · Queens Drive"
    },
    manoeuvres: {
      en: "Reverse Bay Park or Parallel Park + Heavy Bus Lane Observation",
      es: "Aparcamiento marcha atrás o en línea + Vigilancia estricta de carriles bus"
    },
    summary: {
      en: "Urban challenge route crossing Bruce Street Bridges toward Swindon Town Centre, including Transfer Bridges and the famous 5-mini-roundabout Magic Roundabout.",
      es: "Ruta urbana exigente hacia el centro de Swindon, pasando por Bruce Street Bridges, Transfer Bridges y la famosa Magic Roundabout de cinco mini-rotondas."
    },
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=1+Fenn+Close,+Swindon+SN5+5BL&destination=1+Fenn+Close,+Swindon+SN5+5BL&waypoints=Bruce+Street+Bridges,+Swindon|Transfer+Bridges,+Swindon|Magic+Roundabout,+Swindon+SN1+2EA|Queens+Drive,+Swindon|Wootton+Bassett+Road,+Swindon&travelmode=driving",
    waypoints: [
      {
        street: "Bruce Street Bridges → Great Western Way",
        en: "Select central/right lane early for Town Centre, checking left mirror before exiting.",
        es: "Colócate con tiempo en el carril correcto hacia Town Centre y mira el espejo izquierdo al salir."
      },
      {
        street: "Transfer Bridges Roundabout",
        en: "Check active Bus Lane signs (operating hours) before moving back left after the roundabout.",
        es: "Comprueba los carteles horarios de carril bus (Bus Lane) antes de meterte al carril izquierdo tras salir."
      },
      {
        street: "The Magic Roundabout (County Rd / Shrivenham Rd)",
        en: "Treat each of the 5 mini-roundabouts one by one: give way to your immediate right at every white circle.",
        es: "Afronta cada una de las 5 mini-rotondas de una en una: cede siempre a tu derecha inmediata en cada círculo blanco."
      },
      {
        street: "Queens Drive → Wootton Bassett Rd → Peatmoor",
        en: "Keep clear of yellow box junctions and watch cyclists filtering on the left at traffic lights.",
        es: "No bloquees las cuadrículas amarillas (yellow box) y revisa el espejo izquierdo por si se cuelan ciclistas en semáforos."
      }
    ],
    traps: [
      {
        severity: "serious",
        title: {
          en: "Panicking or rushing the Magic Roundabout",
          es: "Bloquearte o entrar sin ceder en cada mini-rotonda de la Magic Roundabout"
        },
        examinerQuoteEn: "At the Magic Roundabout, take the 3rd exit toward Queens Drive.",
        explanation: {
          en: "For exits 1 or 2, go clockwise around the outside. For exits 3 or 4, take the right-hand approach lane, go around the first mini-roundabout clockwise, then follow the inner ring ANTI-CLOCKWISE around the centre island.",
          es: "Para salidas 1 o 2, ve por el anillo exterior en sentido horario. Para salidas 3 o 4, entra por el carril derecho, rodea la primera mini-rotonda y usa el anillo interior EN SENTIDO ANTIHORARIO hasta tu salida."
        }
      },
      {
        severity: "serious",
        title: {
          en: "Driving in an active Bus Lane along Rodbourne / Town Centre",
          es: "Invadir un carril bus activo (Bus Lane) en horario restringido"
        },
        examinerQuoteEn: "Continue straight ahead at the lights.",
        explanation: {
          en: "Read the blue Bus Lane time plate. If no times are listed it operates 24/7. Driving inside a live bus lane during test hours is an immediate serious fault.",
          es: "Lee siempre el horario de la señal azul del Bus Lane; si no pone horas funciona las 24h. Entrar en un carril bus activo es suspenso inmediato."
        }
      }
    ],
    videoIds: ["S0oZC397iU4", "spKDQ3BMwts"]
  },
  {
    id: "route-6",
    code: "SWD-06",
    category: "urban",
    difficulty: "high",
    durationMin: 39,
    distanceMiles: 10.6,
    speedLimits: [20, 30, 40],
    name: {
      en: "Broome Manor, Dorcan Way, Liden & Queens Drive",
      es: "Broome Manor, Dorcan Way, Liden y Queens Drive"
    },
    area: {
      en: "Marlborough Rd · Broome Manor · Dorcan Way · Liden · Welcombe Ave · Queens Drive",
      es: "Marlborough Rd · Broome Manor · Dorcan Way · Liden · Welcombe Ave · Queens Drive"
    },
    manoeuvres: {
      en: "Parallel Park or Pull up on the right in Walcot / Liden residential loops",
      es: "Aparcamiento en línea o parada a la derecha en calles de Walcot / Liden"
    },
    summary: {
      en: "East & South Swindon test pattern mixing 40 mph dual links (Dorcan Way & Queens Drive) with pedestrian crossings right after roundabouts and school 20 mph zones.",
      es: "Recorrido por el sur y este de Swindon que combina tramos de 40 mph en Dorcan Way y Queens Drive con pasos de peatones justo a la salida de rotondas y zonas de 20 mph en Liden/Walcot."
    },
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=1+Fenn+Close,+Swindon+SN5+5BL&destination=1+Fenn+Close,+Swindon+SN5+5BL&waypoints=Marlborough+Road,+Swindon|Broome+Manor+Lane,+Swindon|Dorcan+Way,+Swindon|Liden+Drive,+Swindon|Queens+Drive,+Swindon&travelmode=driving",
    waypoints: [
      {
        street: "Marlborough Road → Broome Manor Lane",
        en: "Keep clear vision around sweeping bends near the golf course entrance.",
        es: "Modera velocidad en las curvas junto al acceso de Broome Manor y mantén distancia de seguridad."
      },
      {
        street: "Dorcan Way → Liden Drive",
        en: "Watch rapid drops from 40 mph to 30 mph and school 20 mph zones around Liden and Walcot.",
        es: "Ojo con los cambios bruscos de 40 mph a 30 mph y las zonas escolares de 20 mph en Liden y Walcot."
      },
      {
        street: "Welcombe Avenue → Whitbourne Ave → Queens Drive",
        en: "Check mirrors before slowing at every mini-roundabout and pedestrian refuge island.",
        es: "Espejo interior antes de tocar freno en cada mini-rotonda e isleta de peatones."
      },
      {
        street: "Queens Drive → Windsor Rd → Peatmoor",
        en: "Pedestrian crossings sit immediately after Queens Drive roundabouts—exit in control ready to stop.",
        es: "Hay pasos de peatones justo tras salir de las rotondas de Queens Drive: sal con velocidad controlada lista para frenar."
      }
    ],
    traps: [
      {
        severity: "serious",
        title: {
          en: "Missing pedestrian crossings just beyond roundabout exits",
          es: "No ver el paso de peatones justo a la salida de rotondas en Queens Drive"
        },
        examinerQuoteEn: "Take the 2nd exit ahead onto Queens Drive.",
        explanation: {
          en: "Drivers accelerate right out of the roundabout and miss amber/red pelican crossings 20 metres past the exit. Check your mirrors, keep exit speed calm, and scan early.",
          es: "Muchos salen acelerando de la rotonda y se comen el semáforo de peatones que está a 20 metros de la salida. Sal suave y mira lejos desde dentro de la glorieta."
        }
      },
      {
        severity: "minor",
        title: {
          en: "Hesitating on clear roundabouts along Dorcan Way",
          es: "Dudar en exceso (hesitation) en las rotondas despejadas de Dorcan Way"
        },
        examinerQuoteEn: "Follow signs for Coate / Town Centre.",
        explanation: {
          en: "Look early past the hedge line as you approach so you can commit smoothly in 2nd gear when traffic to the right is clear or signalling left.",
          es: "Mira antes de llegar a la línea de ceda el paso para no parar innecesariamente si no viene nadie por tu derecha."
        }
      }
    ],
    videoIds: ["TDPr2SV2Tjo", "DLPXP4yRmWE"]
  }
];

export const HOTSPOTS = [
  {
    id: "hs-bruce-street",
    severity: "critical",
    diagramType: "spiral",
    name: {
      en: "Bruce Street Bridges Roundabout",
      es: "Rotonda de Bruce Street Bridges"
    },
    road: "Great Western Way / Rodbourne Rd / Kemble Dr",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=51.5694,-1.7972",
    trapEn:
      "Four tightly linked roundabouts under railway bridges. Approaching from West Swindon on Great Western Way, the far-left lane suddenly turns into left-only toward Rodbourne / Designer Outlet.",
    trapEs:
      "Complejo de 4 rotondas enlazadas bajo puentes. Viniendo desde West Swindon por Great Western Way, el carril izquierdo se convierte en giro obligatorio hacia Rodbourne / Outlet.",
    tipEn:
      "Read the overhead gantry signs early, pick the middle lane for Town Centre / A4289, check left door mirror before exiting, and never drift across broken curved lines.",
    tipEs:
      "Lee los pórticos elevados pronto, elige el carril central para ir recto hacia Town Centre / A4289, mira el espejo izquierdo antes de salir y sigue tu línea curva exacta."
  },
  {
    id: "hs-mannington",
    severity: "critical",
    diagramType: "spiral",
    name: {
      en: "Mannington Roundabout",
      es: "Rotonda de Mannington"
    },
    road: "Great Western Way / Wootton Bassett Rd (A3102)",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=51.5594,-1.8159",
    trapEn:
      "Part-time / full-time traffic lights both at entries and inside the roundabout, plus yellow box junctions and sudden spiral splits toward A3102 Wootton Bassett.",
    trapEs:
      "Tiene semáforos tanto fuera como dentro de la glorieta, cuadrículas amarillas (yellow boxes) y divisiones en espiral hacia la A3102.",
    tipEn:
      "Always scan the second set of lights inside the island—green on entry does NOT guarantee green inside. Never enter a yellow box unless your exit lane is clear.",
    tipEs:
      "Mira siempre el segundo semáforo interior aunque hayas entrado en verde. Nunca te quedes parada encima de una cuadrícula amarilla si el tramo siguiente está atascado."
  },
  {
    id: "hs-the-meads",
    severity: "high",
    diagramType: "spiral",
    name: {
      en: "The Meads Roundabout",
      es: "Rotonda de The Meads"
    },
    road: "Mead Way / Great Western Way / Shaw Ridge",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=51.5612,-1.8306",
    trapEn:
      "First major multi-lane roundabout minutes after leaving Peatmoor Test Centre. Fast cross-traffic from Mead Way and spiral markings pushing lanes outward.",
    trapEs:
      "Primera gran rotonda multi-carril a los pocos minutos de salir del centro de examen. Tráfico rápido desde Mead Way y líneas en espiral que te empujan hacia el exterior.",
    tipEn:
      "Trust the spiral: stay inside your lane markings without turning sharply right when the broken lines guide you outward toward your exit.",
    tipEs:
      "Confía en la espiral: sigue las marcas del asfalto sin cerrar el volante hacia la derecha cuando las líneas discontinuas ya te estén sacando hacia tu salida."
  },
  {
    id: "hs-magic-roundabout",
    severity: "critical",
    diagramType: "magic",
    name: {
      en: "The Magic Roundabout",
      es: "The Magic Roundabout (5 mini-rotondas)"
    },
    road: "Drove Rd / Fleming Way / Queens Dr / County Rd / Shrivenham Rd (SN1 2EA)",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=51.5628,-1.7715",
    trapEn:
      "Looks overwhelming because the inner central ring flows ANTI-CLOCKWISE while the 5 outer mini-roundabouts flow clockwise. Most errors come from looking at the whole junction instead of one mini-roundabout at a time.",
    trapEs:
      "Asusta porque el anillo central gira EN SENTIDO ANTIHORARIO y las 5 mini-rotondas exteriores en sentido horario. El error típico es agobiarse mirando todo el cruce a la vez.",
    tipEn:
      "Rule of thumb: left lane for 1st or 2nd exit (outer clockwise path); right lane for 3rd or 4th exit (inner anti-clockwise ring). Give way to the right at EACH white painted circle individually.",
    tipEs:
      "Regla de oro: carril izquierdo para 1.ª o 2.ª salida (por fuera); carril derecho para 3.ª o 4.ª salida (anillo interior antihorario). Trata cada círculo blanco como una mini-rotonda independiente cediendo a la derecha."
  },
  {
    id: "hs-purton-stop",
    severity: "critical",
    diagramType: "stop",
    name: {
      en: "Purton Crossroads Mandatory STOP",
      es: "Cruce con STOP obligatorio en Purton"
    },
    road: "B4553 / Packhorse Lane / Church Street, Purton",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=51.5888,-1.8698",
    trapEn:
      "A genuine octagonal red STOP sign with a solid white stop line on a rural test route. Treating it like a Give Way (rolling at 1–2 mph) is an instant serious fault.",
    trapEs:
      "Señal octogonal real de STOP con línea continua en ruta rural. Hacer un 'cede el paso' rodando a 1-2 mph sin detener las ruedas del todo es suspenso automático.",
    tipEn:
      "Come to a complete halt (0 mph), handbrake if on a slope, select 1st gear, then edge forward slowly to check past the walls/hedges.",
    tipEs:
      "Detente a 0 mph reales detrás de la línea continua, mete 1.ª marcha y luego asómate muy despacio para ver detrás de los setos y muros."
  },
  {
    id: "hs-spittleborough",
    severity: "high",
    diagramType: "spiral",
    name: {
      en: "Spittleborough Roundabout (M4 Junction 16)",
      es: "Rotonda de Spittleborough (M4 J16)"
    },
    road: "Great Western Way / A3102 / M4 Slip Roads",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=51.5476,-1.8554",
    trapEn:
      "High-speed motorway interchange with M4 East/West lanes alongside A3102 Swindon/Wootton Bassett lanes.",
    trapEs:
      "Enlace de alta velocidad con carriles exclusivos hacia la autopista M4 pegados a los de la A3102.",
    tipEn:
      "Read road text ('A3102', 'Swindon W') before moving off at traffic lights; never steer onto a blue motorway sign lane.",
    tipEs:
      "Lee los textos pintados en el suelo ('A3102', 'Swindon W') antes de arrancar en verde para nunca entrar hacia una señal azul de M4."
  },
  {
    id: "hs-peatmoor-exit",
    severity: "medium",
    diagramType: "none",
    name: {
      en: "1 Fenn Close & Hillmead Van Curve",
      es: "Salida del Test Centre y curva con furgonetas (Hillmead)"
    },
    road: "1 Fenn Close / Croft Centre Rd / Peatmoor Way",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=51.5549,-1.8442",
    trapEn:
      "Candidates get nervous in the first 60 seconds: parked delivery vans on the bend force oncoming vehicles onto your side before the 30 mph mini-roundabout.",
    trapEs:
      "Los nervios del primer minuto: furgonetas de reparto aparcadas en la curva obligan a los coches de frente a invadir tu carril justo antes de la mini-rotonda.",
    tipEn:
      "Take a deep breath before moving off from the test bay, keep speed around 15–18 mph on the industrial curve, and wait cleanly if an oncoming van is already passing.",
    tipEs:
      "Respira hondo antes de salir de la plaza, pasa la curva del polígono despacio (15-18 mph) y cede si una furgoneta ya viene de frente."
  },
  {
    id: "hs-tewkesbury-cross",
    severity: "high",
    diagramType: "none",
    name: {
      en: "Tewkesbury Cross & Nine Elms Pinches",
      es: "Tewkesbury Cross y estrechamientos de Nine Elms"
    },
    road: "Tewkesbury Way / Whitehill Way / Nine Elms",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=51.5656,-1.8415",
    trapEn:
      "Approach sightline from the right is tight at Tewkesbury Cross while cars approach at 40 mph; inside Nine Elms, parked cars create single-file bottlenecks.",
    trapEs:
      "Visibilidad corta a la derecha en Tewkesbury Cross con coches a 40 mph, seguido de calles en Nine Elms con un único carril libre entre coches aparcados.",
    tipEn:
      "Stay in 1st gear creeping up to the Tewkesbury give-way line, and be patient holding back in passing spaces inside Nine Elms.",
    tipEs:
      "Acércate en primera muy suave a la línea de Tewkesbury Cross y ten paciencia cediendo en huecos amplios dentro de Nine Elms."
  }
];

export const VIDEOS = [
  {
    id: "xMHFAVMB2B8",
    title: "2025 Swindon Test Routes - Bruce Street Bridges, The Meads & Mannington",
    author: "Elvis Kyei (Swindon AA Instructor)",
    durationLabel: "Roundabouts Focus",
    routeId: "route-1",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=1+Fenn+Close,+Swindon+SN5+5BL&destination=1+Fenn+Close,+Swindon+SN5+5BL&waypoints=The+Meads+Roundabout,+Swindon|Mannington+Roundabout,+Swindon|Bruce+Street+Bridges,+Swindon&travelmode=driving",
    notes: {
      en: "Detailed walkthrough of Swindon's big three roundabouts: how to read spiral road markings and avoid drifting lanes on Bruce Street Bridges, The Meads, and Mannington.",
      es: "Recorrido explicado por las tres grandes rotondas de Swindon: cómo leer las flechas en espiral y no cambiar de carril por error en Bruce Street Bridges, The Meads y Mannington."
    }
  },
  {
    id: "spKDQ3BMwts",
    title: "Swindon Test Route - From Test Centre Through The Meads & Bruce Street Bridges",
    author: "Elvis Kyei",
    durationLabel: "Full Route Exit",
    routeId: "route-1",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=1+Fenn+Close,+Swindon+SN5+5BL&destination=1+Fenn+Close,+Swindon+SN5+5BL&waypoints=Peatmoor+Way,+Swindon|The+Meads+Roundabout,+Swindon|Bruce+Street+Bridges,+Swindon&travelmode=driving",
    notes: {
      en: "Starts directly at 1 Fenn Close test centre exit and guides you live through Peatmoor, The Meads, and Bruce Street Bridges.",
      es: "Empieza directamente desde la salida del Test Centre en 1 Fenn Close y enseña el recorrido real por Peatmoor, The Meads y Bruce Street Bridges."
    }
  },
  {
    id: "hBXzSIY0rAU",
    title: "Swindon Test Routes - Part 3 (Bruce Street Bridges & Mannington)",
    author: "Elvis Kyei",
    durationLabel: "Lane Discipline",
    routeId: "route-1",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=1+Fenn+Close,+Swindon+SN5+5BL&destination=Mannington+Roundabout,+Swindon&waypoints=Bruce+Street+Bridges,+Swindon&travelmode=driving",
    notes: {
      en: "Breaks down approach lane selection and signal timing when approaching Mannington and Bruce Street Bridges from multiple directions.",
      es: "Desglosa qué carril elegir antes de llegar y cuándo señalizar en Mannington y Bruce Street Bridges desde distintos accesos."
    }
  },
  {
    id: "-6N1yof4BYY",
    title: "Swindon Driving Test Route | Bruce Street, Meads, Mannington & Tewkesbury Cross",
    author: "Swindon Driving Lessons",
    durationLabel: "Mock Test Example",
    routeId: "route-2",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=1+Fenn+Close,+Swindon+SN5+5BL&destination=1+Fenn+Close,+Swindon+SN5+5BL&waypoints=Tewkesbury+Way,+Swindon|The+Meads+Roundabout,+Swindon|Mannington+Roundabout,+Swindon&travelmode=driving",
    notes: {
      en: "Local Swindon instructor covering Tewkesbury Cross blind approach plus the multi-lane roundabout corridor.",
      es: "Instructor local de Swindon enseñando la aproximación sin visibilidad de Tewkesbury Cross y el corredor de rotondas principales."
    }
  },
  {
    id: "hTmXDlogJE8",
    title: "Swindon Test Routes - Part 1: Nine Elms",
    author: "Elvis Kyei",
    durationLabel: "Residential Estates",
    routeId: "route-2",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=1+Fenn+Close,+Swindon+SN5+5BL&destination=1+Fenn+Close,+Swindon+SN5+5BL&waypoints=Nine+Elms,+Swindon|Toothill,+Swindon&travelmode=driving",
    notes: {
      en: "Essential for West Swindon housing estates: parked cars, meeting oncoming vehicles, and tight residential turns in Nine Elms.",
      es: "Imprescindible para las urbanizaciones de West Swindon: coches aparcados, cómo ceder ante tráfico de frente y giros cerrados en Nine Elms."
    }
  },
  {
    id: "S0oZC397iU4",
    title: "Swindon Test Routes - Part 5: To the Magic Roundabout!",
    author: "Elvis Kyei",
    durationLabel: "Magic Roundabout",
    routeId: "route-5",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=1+Fenn+Close,+Swindon+SN5+5BL&destination=Magic+Roundabout,+Swindon+SN1+2EA&waypoints=Great+Western+Way,+Swindon|Transfer+Bridges,+Swindon&travelmode=driving",
    notes: {
      en: "Step-by-step demonstration showing how to cross Town Centre and tackle the 5 mini-roundabouts of the Magic Roundabout calmly.",
      es: "Demostración paso a paso para llegar al centro de Swindon y cruzar con calma las 5 mini-rotondas de la Magic Roundabout."
    }
  },
  {
    id: "2HHmMuRosW8",
    title: "Swindon Test Route! Before Going for a Practice Driving Test",
    author: "Elvis Kyei",
    durationLabel: "Rural & Purton",
    routeId: "route-3",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=1+Fenn+Close,+Swindon+SN5+5BL&destination=1+Fenn+Close,+Swindon+SN5+5BL&waypoints=Lydiard+Millicent,+Swindon|Purton,+Swindon&travelmode=driving",
    notes: {
      en: "Pre-test checklist run covering speed changes, country lanes, and common examiner traps around Swindon.",
      es: "Recorrido de repaso previo al examen cubriendo cambios de velocidad, carreteras secundarias y fallos habituales."
    }
  },
  {
    id: "DLPXP4yRmWE",
    title: "Swindon Test Routes! Must Watch Before Your Test",
    author: "Elvis Kyei",
    durationLabel: "Examiner Traps",
    routeId: "route-3",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=1+Fenn+Close,+Swindon+SN5+5BL&destination=1+Fenn+Close,+Swindon+SN5+5BL&waypoints=Hook+Street,+Swindon|Purton,+Swindon&travelmode=driving",
    notes: {
      en: "Highlights the sudden traps around Swindon test roads, speed sign transitions, and last-minute examiner surprises.",
      es: "Señala las trampas más frecuentes en las rutas de Swindon, cambios bruscos de límite de velocidad y despistes típicos."
    }
  },
  {
    id: "TDPr2SV2Tjo",
    title: "Swindon Driving Test Route 2026 | Most Common Urban Test Route",
    author: "ShimranTravel",
    durationLabel: "Full Urban Run",
    routeId: "route-4",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=1+Fenn+Close,+Swindon+SN5+5BL&destination=1+Fenn+Close,+Swindon+SN5+5BL&waypoints=Blagrove+Roundabout,+Swindon|Mannington+Roundabout,+Swindon|Queens+Drive,+Swindon&travelmode=driving",
    notes: {
      en: "2026 full urban test route recording showing real traffic flow, dual carriageways, and roundabout positioning in Swindon.",
      es: "Grabación completa de ruta urbana frecuente en 2026 mostrando tráfico real, tramos rápidos y colocación en rotondas de Swindon."
    }
  }
];

export const PRACTICAL_KIT = {
  examinerPhrases: [
    {
      en: "Follow the road ahead / Take the 2nd exit ahead",
      es: "Sigue recto por la carretera / Toma la 2.ª salida de frente",
      focus: {
        en: "No indicator on approach unless road layout demands it; signal left right as you pass exit 1.",
        es: "Sin intermitente al entrar si sigues recto; pon intermitente izquierdo justo al pasar la 1.ª salida."
      }
    },
    {
      en: "Pull up on the left at a safe place",
      es: "Para a la izquierda en un lugar seguro",
      focus: {
        en: "Avoid blocking driveways, dropped kerbs, bus stops, double yellow lines, or junctions (10m).",
        es: "Nunca tapes entradas de garaje (dropped kerbs), paradas de bus, líneas amarillas dobles ni esquinas (10 m)."
      }
    },
    {
      en: "Move off when you are ready",
      es: "Reanuda la marcha cuando estés lista",
      focus: {
        en: "POM routine + mandatory right shoulder blind-spot check BEFORE signalling or releasing handbrake.",
        es: "Mirada obligatoria al ángulo muerto derecho (hombro) ANTES de poner el intermitente o soltar el freno."
      }
    },
    {
      en: "Pull up on the right when safe, then reverse two car lengths",
      es: "Para en el lado derecho cuando sea seguro y da marcha atrás dos coches",
      focus: {
        en: "Check mirrors, stop smoothly against kerb, reverse under full control looking out the rear window, and check blind spots before rejoining left.",
        es: "Espejos, detente paralela sin dar al bordillo, da marcha atrás despacio mirando atrás y vuelve a mirar ángulo muerto antes de incorporarte."
      }
    },
    {
      en: "Now follow the sat-nav / Follow traffic signs for...",
      es: "Ahora sigue el navegador GPS / Sigue las señales hacia...",
      focus: {
        en: "20 mins independent driving (usually TomTom Sat-Nav). Taking a safe wrong turn is NOT a fault!",
        es: "20 min de conducción independiente (normalmente TomTom). Si te equivocas de salida de forma segura NO es falta."
      }
    },
    {
      en: "I will ask you to carry out an emergency stop shortly",
      es: "En breve te pediré que realices una frenada de emergencia",
      focus: {
        en: "Brake firmly without locking/skidding, press clutch right before stopping, apply handbrake, then 360° observation before moving off.",
        es: "Frena firme sin dudar, pisa embrague al final para no calar, pon freno de mano y haz barrido 360° antes de arrancar."
      }
    }
  ],
  showMeTellMe: [
    {
      id: "sm-1",
      type: "TELL ME",
      qEn: "Tell me how you'd check that the brakes are working before starting a journey.",
      qEs: "Dime cómo comprobarías que los frenos funcionan antes de iniciar un viaje.",
      aEn: "Brakes should not feel spongy or slack. Test them as you set off; the vehicle should not pull to one side.",
      aEs: "El pedal no debe sentirse esponjoso ni flojo. Pruébalos al empezar a moverte; el coche no debe irse hacia ningún lado."
    },
    {
      id: "sm-2",
      type: "TELL ME",
      qEn: "Tell me where you'd find the recommended tyre pressures and how to check them.",
      qEs: "Dime dónde encontrarías las presiones recomendadas de los neumáticos y cómo comprobarlas.",
      aEn: "In the manufacturer's handbook or inside the driver's door sill. Use a reliable pressure gauge when tyres are cold, check tread depth (min 1.6mm across central three-quarters), and refit valve caps.",
      aEs: "En el manual del coche o la pegatina del marco de la puerta del conductor. Mídelo con manómetro con las ruedas en frío, comprueba dibujo mínimo de 1,6 mm y pon los tapones."
    },
    {
      id: "sm-3",
      type: "TELL ME",
      qEn: "Tell me how you'd check the headlights and tail lights are working.",
      qEs: "Dime cómo comprobarías que las luces delanteras y traseras funcionan.",
      aEn: "Turn on the ignition/lights switch (no need to start engine), then walk around the vehicle to check both headlights and tail lights are lit.",
      aEs: "Pon el contacto y enciende las luces (sin arrancar el motor) y sal a dar una vuelta alrededor del coche para comprobar todas."
    },
    {
      id: "sm-4",
      type: "TELL ME",
      qEn: "Tell me how you'd check that the power-assisted steering is working.",
      qEs: "Dime cómo comprobarías que la dirección asistida funciona correctamente.",
      aEn: "Apply gentle pressure on the steering wheel while starting the engine—you should feel a slight movement as assistance activates (or turning the wheel just after moving off shouldn't feel heavy).",
      aEs: "Haz ligera presión sobre el volante mientras arrancas el motor: notarás cómo cede suavemente al activarse la asistencia (o al girar nada más salir no debe estar duro)."
    },
    {
      id: "sm-5",
      type: "TELL ME",
      qEn: "Open the bonnet and tell me how you'd check the engine oil / coolant / brake fluid level.",
      qEs: "Abre el capó y dime cómo comprobarías el aceite, refrigerante o líquido de frenos.",
      aEn: "Oil: remove dipstick, wipe clean, reinsert fully, withdraw and verify level is between MIN and MAX marks. Coolant & Brake fluid: inspect translucent header tanks against MIN/MAX lines without opening hot caps.",
      aEs: "Aceite: saca la varilla, límpiala, métela del todo y comprueba que esté entre MIN y MAX. Refrigerante y frenos: revisa el nivel visualmente entre las marcas MIN y MAX en sus depósitos."
    },
    {
      id: "sm-6",
      type: "SHOW ME",
      qEn: "When it's safe, show me how you wash and clean the front windscreen.",
      qEs: "Cuando sea seguro, muéstrame cómo limpias el parabrisas delantero en marcha.",
      aEn: "Operate the right-hand wiper stalk (pull toward you / press button) while keeping eyes mostly on the road.",
      aEs: "Acciona la palanca derecha de los limpiaparabrisas (tirando hacia ti o pulsando el botón según el coche) sin apartar la vista de la carretera."
    },
    {
      id: "sm-7",
      type: "SHOW ME",
      qEn: "When it's safe, show me how you'd switch on your dipped headlights / demist front & rear screens / sound the horn / open side window.",
      qEs: "Cuando sea seguro, muéstrame cómo enciendes luces de cruce, desempañas cristales, tocas el claxon o bajas la ventanilla.",
      aEn: "Know your exact car switches by touch before test day so you never look down for more than a split second while moving.",
      aEs: "Memoriza al tacto los mandos exactos de tu coche antes del examen para no bajar la mirada más de una fracción de segundo en marcha."
    }
  ],
  manoeuvres: [
    {
      code: "M1",
      en: "Forward Bay Park (into a bay, then reverse out)",
      es: "Aparcamiento en batería de frente y salir marcha atrás",
      stepsEn:
        "Approach wide so you swing cleanly between the white lines. Once inside, handbrake & neutral. Before reversing out: full 360° check including rear window and both blind spots.",
      stepsEs:
        "Ábrete bien antes de girar para quedar centrada entre las líneas blancas. Al salir marcha atrás: barrido 360° mirando por la luneta trasera y parando si se acerca un peatón o coche."
    },
    {
      code: "M2",
      en: "Reverse Bay Park (at Fenn Close car park)",
      es: "Aparcamiento en batería marcha atrás (en el Test Centre)",
      stepsEn:
        "Done at the start or end at 1 Fenn Close. Keep speed crawling with clutch control, pause immediately if another test car enters the aisle.",
      stepsEs:
        "Muy habitual al principio o al final en 1 Fenn Close. Velocidad muy lenta controlando el embrague y detente al instante si entra otro coche en el pasillo."
    },
    {
      code: "M3",
      en: "Parallel Park behind a parked car",
      es: "Aparcamiento en línea detrás de un coche aparcado",
      stepsEn:
        "Stop ~0.5m alongside the target car. Watch the right-side traffic constantly—remember the front swings out right as you steer left! Finish straight within 1 car length without mounting the kerb.",
      stepsEs:
        "Ponte paralela a ~0,5 m del coche de referencia. Vigila constantemente si vienen coches por la derecha (el morro barre hacia fuera al girar) y termina sin subirte ni rozar el bordillo."
    },
    {
      code: "M4",
      en: "Pull up on the right & reverse 2 car lengths",
      es: "Parar en el lado derecho y dar marcha atrás 2 coches",
      stepsEn:
        "Only pull across when oncoming road is completely clear. Reverse hugging the kerb straight back, pause for passing cars, and check right blind spot before returning left.",
      stepsEs:
        "Cruza al lado derecho solo sin tráfico de frente. Da marcha atrás paralelo al bordillo derecho, para si pasa un coche y revisa el ángulo muerto derecho antes de volver a tu carril."
    }
  ]
};
