Pricing Cards Section
A responsive pricing section for a small task-management product ("Taskly"), with a working monthly/annual billing toggle. Built with plain HTML, CSS and JavaScript. Made for Task 4 of the SpireX Foundation web development internship.
Features
Three-tier pricing layout that reflows to one column on mobile, with the recommended plan shown first
Working monthly / annual billing toggle. Updates every price and the "billed annually" note live
Feature lists styled as checked checklist items, fitting a task-management product
Light / dark mode toggle
No frameworks, no build step, no icon libraries. The checkmarks are pure CSS
Tech stack
HTML5
CSS3 (custom properties, Grid, Flexbox)
Vanilla JavaScript
Plus Jakarta Sans & JetBrains Mono via Google Fonts
Run it
Open `index.html` in any browser. No build step needed.
Customize it
Everything lives in `index.html`, with matching styles in `style.css`.
Field	Where
Product name	the page `<title>` and footer
Plan names, taglines, features	each `<article class="plan-card">`
Prices	the `data-monthly` / `data-annual` attributes on each `.amount` span
"Billed annually" notes	the `data-monthly-note` / `data-annual-note` attributes on each `.billed-note`
Which plan is recommended	move the `popular` class and `.recommended` label to a different `<article>`
Colors and fonts are CSS custom properties at the top of `style.css`: `:root` for light mode, `[data-theme="dark"]` for dark. Change `--teal` and `--gold` to restyle the whole page.
Deploy it
Push this folder to a GitHub repo and turn on GitHub Pages (Settings, then Pages, then Deploy from branch) for a live link to share alongside your repo.
Author
Abdulsalam Abubakar Abolaji
