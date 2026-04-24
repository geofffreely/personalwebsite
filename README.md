# Personal Website

This folder contains a simple static website for a philosophy professor, built with HTML, CSS, and a small script for the Research page tabs. There is no build step; you can open `index.html` directly in a browser or upload these files to any static hosting service.

## Files

- `index.html` – Home page with your name, photo, bio, teaching, service, and contact info.
- `writings.html` – Research page with tabs: **Published articles**, **Reviews / commentaries**, **Drafts / work in progress**, and **Books**.
- `assets/css/styles.css` – All typography, layout, and color styling.
- `assets/js/research-tabs.js` – Switches tabs and updates the URL hash (`#published-articles`, `#reviews`, `#drafts`, `#books`; `#publications` and `#book` still work as aliases).
- `assets/img/profile.jpg` – Your profile photo (you need to add this image file yourself).
- `assets/img/banner-sulfur-crystals.jpg` – Full-width masthead banner (resized from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Microscopic_image_of_crystals_growing_from_melted_sulfur_3.jpg); replace or edit in CSS if you change the art).
- `papers/` – PDFs linked from the Research tabs. Filenames match each entry’s `id` after dropping the `pub-`, `rev-`, `book-`, or `draft-` prefix (e.g. `book-LEETIO-22` → `papers/LEETIO-22.pdf`). See `papers/README.txt`.

## Editing your content

Open the `.html` files in a text editor and replace the placeholder text with your own information.

- **Name and tagline**: In each HTML file, replace `Your Name` and `Philosophy Professor` with your actual name and title/affiliation.
- **Home page** (`index.html`):
  - Replace the placeholder bio paragraphs with your own. Update the Contact email and department profile link as needed.
  - The contact email and **UC Berkeley faculty page** link point to your Berkeley address and [department page](https://philosophy.berkeley.edu/lee); edit those in `index.html` if they change.
- **Profile photo**:
  - Save a portrait photo as `profile.jpg`.
  - Place it in `assets/img/` so the path `assets/img/profile.jpg` works as written.
- **Research / writings** (`writings.html`):
  - **Published articles**, **Reviews / commentaries**, **Drafts**, and **Books** use `<article class="writing-item pub-entry">` blocks with `<details class="pub-abstract">` for **Abstract**. Title links point to PDFs in `papers/`: drop the `pub-`, `rev-`, `book-`, or `draft-` prefix from the article `id` and add `.pdf` (for example `id="pub-ORLHRI"` → `papers/ORLHRI.pdf`; `id="rev-LEETCB-3"` → `papers/LEETCB-3.pdf`).
  - To add or edit an item, copy an existing `pub-entry` article and update the title link, meta line, and abstract body (or the “no abstract” placeholder). Place the corresponding PDF in `papers/` with the correct filename.

## How to add a new writing

1. Open `writings.html` in a text editor.
2. Find the tab panel you need (`panel-published-articles`, `panel-reviews`, `panel-drafts`, or `panel-books`).
3. Paste a new `<article class="writing-item">…</article>` block (see the comment template in the file).
4. Edit the title, link, venue/year, and abstract.
5. Save the file.

You can link directly to a tab with `writings.html#published-articles`, `writings.html#reviews`, `writings.html#drafts`, or `writings.html#books` (or `#publications` for the first tab).

## Hosting

You can host this site anywhere that serves static files. Two simple options:

### Option 1: GitHub Pages

1. Create a new Git repository in this folder.
2. Commit all files (`index.html`, `writings.html`, `assets/`, `papers/`, and `README.md`).
3. Push the repository to GitHub.
4. In your GitHub repository settings, enable **Pages** for the `main` branch (and root directory).
5. After a short delay, GitHub will give you a public URL where your site is live.

### Option 2: Institutional web space / other static hosting

1. Connect to your institution’s web server using the method they provide (often SFTP).
2. Upload all of the files and folders, preserving the structure:
   - `index.html`
   - `writings.html`
   - `assets/` (and everything inside it)
   - `papers/` (your PDF files)
3. Your institution will typically give you a URL such as `https://university.edu/~username/` where the site will appear.

## Updating the site

Whenever you change any of the HTML or CSS files:

- If you are using **GitHub Pages**:
  - Commit and push the changes to GitHub.
  - The live site will update automatically after a short delay.
- If you are using **institutional hosting or another static host**:
  - Re-upload the changed files to the server, keeping the same folder structure.

No additional tools or build steps are required; editing the HTML files and uploading them is enough to keep your site up to date.

