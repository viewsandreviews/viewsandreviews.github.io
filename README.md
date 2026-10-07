# Views & Reviews

Film, TV & culture reviews by Dr. Nabin Chowdhury.

## Deploying to GitHub Pages

1. Create a new GitHub repository named `nabin1992.github.io`
2. Upload all files from this folder to the repository root
3. Go to **Settings → Pages** in the repo
4. Under **Source**, select **Deploy from a branch**
5. Choose `main` branch, `/ (root)` folder → Save
6. Your site will be live at **https://nabin1992.github.io** within a few minutes

## Adding a new review

1. Copy `reviews/_template.html` → name it `reviews/your-film-title.html`
2. Fill in: post number, scores (DS / LF / GP), film info, pull quote, body text
3. Add an entry to `reviews.html` (the archive list)
4. Update the homepage `index.html` featured card / recent grid if needed
5. Update `now-watching.html` (move the film to "Recently Finished")
6. Commit and push — the site updates automatically

## Scoring system

| Score | Scale | What it measures |
|---|---|---|
| **Doom Scroll** | 1–10 (inverted — lower = better) | How likely you are to reach for your phone |
| **Linger Factor** | 1–10 (higher = better) | How long it stays with you after watching |
| **Gut Punch** | 1–10 (higher = better) | Emotional / intellectual impact |

## File structure

```
/
├── index.html          Homepage
├── reviews.html        Archive with filter
├── about.html
├── now-watching.html
├── css/
│   └── style.css       All shared styles
├── js/
│   └── main.js         Nav active state + archive filter
├── assets/
│   └── logo.svg        Eye/nib hybrid logo
├── reviews/
│   ├── _template.html  Copy this for each new review
│   ├── resident-evil.html
│   ├── the-drama.html  (to be added)
│   ├── lanterns.html   (to be added)
│   └── obsession.html  (to be added)
└── .nojekyll           Tells GitHub Pages not to run Jekyll
```
