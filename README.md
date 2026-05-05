# Personal Website

A minimal academic website.

## Edit Before Publishing

- Replace the CV link in `index.html` if you want it to point directly to a PDF instead of your current CV page.
- Replace the portrait placeholder by adding `assets/headshot.jpg`, then changing:

```html
<div class="photo" aria-label="Portrait placeholder">
  <span>MD</span>
</div>
```

to:

```html
<div class="photo">
  <img src="assets/headshot.jpg" alt="Merve Demirel">
</div>
```

- Replace the placeholder abstract text for each paper.

## Publish on GitHub Pages

1. Create a new public GitHub repository named `mervedmrl.github.io`, or use your actual GitHub username in the format `USERNAME.github.io`.
2. Upload these files to the root of that repository.
3. In GitHub, open Settings -> Pages.
4. Under "Build and deployment", choose "Deploy from a branch".
5. Select the `main` branch and `/root`, then save.

The site will publish at `https://USERNAME.github.io/`.
