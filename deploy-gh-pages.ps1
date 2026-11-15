param(
  [string]$RepoName = "swindon-drive-uk",
  [string]$Owner = "adrianSG25"
)

$ErrorActionPreference = "Stop"

$remoteUrl = "https://github.com/$Owner/$RepoName.git"
$existingRemote = git remote 2>$null
if ($existingRemote -notcontains "origin") {
  git remote add origin $remoteUrl
} else {
  git remote set-url origin $remoteUrl
}

Write-Host "Pushing branch 'main' to $remoteUrl ..."
git push -u origin main

Write-Host ""
Write-Host "Next step if GitHub Pages isn't enabled automatically on first push:"
Write-Host "Open https://github.com/$Owner/$RepoName/settings/pages and set Source = GitHub Actions"
Write-Host "Live URL: https://$($Owner.ToLower()).github.io/$RepoName/"
