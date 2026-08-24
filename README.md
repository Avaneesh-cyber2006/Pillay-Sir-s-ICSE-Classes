# Pillay Sir's ICSE Classes — Website Editing Guide

This website is made of simple HTML pages, one CSS file, and one JavaScript file. You do **not** need a database or any programming language besides basic HTML to update the content.

Open the HTML files in a text editor (Notepad, VS Code, Cursor, etc.), change the placeholder text, save, then refresh the page in your browser.

---

## 29.1 Editing Course Names

1. Open `courses.html`.
2. Find the course cards under **Class Programmes**.
3. Change the text inside the `<h3>` tags.

Example — change:

```html
<h3>Class 8 ICSE</h3>
```

to:

```html
<h3>Class 8 ICSE — Morning Batch</h3>
```

Do the same for **Class 9 ICSE** and **Class 10 ICSE**.

---

## 29.2 Editing Course Descriptions

In the same `course-card` in `courses.html`, find this line:

```html
<p>[WRITE COURSE DESCRIPTION HERE]</p>
```

Replace **only** the text between `<p>` and `</p>`. Keep the `<p>` tags.

Example:

```html
<p>ICSE Class 8 coaching with regular practice and doubt sessions.</p>
```

---

## 29.3 Editing Course Prices

In each course card, find:

```html
<p><strong>Price:</strong> ₹XXXX</p>
```

Replace `₹XXXX` with the real price, for example:

```html
<p><strong>Price:</strong> ₹12,000</p>
```

If you prefer the other wording used on test-series cards, you can write:

```html
<p><strong>Price:</strong> To be updated</p>
```

until you have a final amount.

---

## 29.4 Adding Another Course

Copy one full `course-card` block and paste it **inside** the same `<div class="course-list">` as the other courses (before that `</div>` closes).

```html
<div class="course-card">
    <h3>NEW COURSE NAME</h3>
    <p>NEW COURSE DESCRIPTION</p>
    <p><strong>Subjects:</strong> SUBJECTS</p>
    <p><strong>Price:</strong> ₹XXXX</p>
    <a href="contact.html" class="btn">Enquire</a>
</div>
```

Change:

- `NEW COURSE NAME` — the title
- `NEW COURSE DESCRIPTION` — the description
- `SUBJECTS` — the subject list
- `₹XXXX` — the price

You can leave the **Enquire** button as it is. It already goes to the Contact page.

---

## 29.5 Editing Test Series

Still in `courses.html`, scroll to the **Test Series** section.

For each card you can change:

- **Name** — the `<h3>` text (`Test Series 1`, `Test Series 2`, `Test Series 3`)
- **Description** — `[WRITE TEST SERIES DESCRIPTION HERE]`
- **Number/type of tests** — `[NUMBER / TYPE OF TESTS HERE]`
- **Price** — `To be updated` (or later `₹XXXX` / a real amount)

---

## 29.6 Adding Another Test Series

Copy a test-series card and paste it inside the Test Series `<div class="course-list">`:

```html
<div class="course-card">
    <h3>Test Series 4</h3>
    <p>[WRITE TEST SERIES DESCRIPTION HERE]</p>
    <p><strong>Tests:</strong> [NUMBER / TYPE OF TESTS HERE]</p>
    <p><strong>Price:</strong> To be updated</p>
    <a href="contact.html" class="btn">Enquire</a>
</div>
```

Then replace the placeholders with your real details.

---

## 29.7 Editing About Us

1. Open `about.html`.
2. Find:

```html
[WRITE INFORMATION ABOUT THE INSTITUTE HERE]
```

3. Replace that sentence with your own paragraph(s). You can add more `<p>...</p>` blocks if you need extra paragraphs.

Do not invent achievements or teacher names unless they are true and you want them on the site later.

---

## 29.8 Editing Address

1. Open `location.html`.
2. Find:

```html
[ENTER ADDRESS HERE]
```

3. Replace it with the full postal address (building, street, area, city, pin code).

---

## 29.9 Adding the Google Maps Link

1. Open `location.html`.
2. There is an HTML comment:

```html
<!-- Replace GOOGLE_MAPS_LINK_HERE with the actual Google Maps URL -->
```

3. In the link below it, replace **only** `GOOGLE_MAPS_LINK_HERE` with the URL you copy from Google Maps (it usually starts with `https://`).

Example shape (use your real link, not this as a fake address):

```html
<a class="btn" href="https://maps.google.com/..." target="_blank" rel="noopener noreferrer">
```

Keep `target="_blank"` so the map opens in a new tab.

---

## 29.10 Editing Phone Numbers

1. Open `contact.html`.
2. For **Phone 1**, change **both**:
   - the visible text `[ENTER PHONE NUMBER]`
   - the `href="tel:PHONE_NUMBER_1"` value

The `tel:` value should be the number people can tap to call (you can use digits, and `+` for country code). Example pattern:

```html
<a href="tel:+911234567890">+91 12345 67890</a>
```

Do the same for **Phone 2** (`PHONE_NUMBER_2`).

If you only have one number, you can delete the whole Phone 2 `<p>...</p>` block.

---

## 29.11 Editing Email

In `contact.html`, replace **both**:

- `[ENTER EMAIL]` (what visitors see)
- `mailto:EMAIL_HERE` (what the mail app opens)

Example:

```html
<a href="mailto:info@example.com">info@example.com</a>
```

Use your real institute email, not a made-up one.

---

## 29.12 Editing Instagram

In `contact.html`:

- Replace `[ENTER INSTAGRAM ID]` with the public username (for example `@yourhandle`).
- Replace `INSTAGRAM_URL_HERE` with the profile URL, usually:

```text
https://www.instagram.com/YOUR_USERNAME/
```

Example:

```html
<a href="https://www.instagram.com/YOUR_USERNAME/" target="_blank" rel="noopener noreferrer">@YOUR_USERNAME</a>
```

---

## 29.13 Editing WhatsApp Number

In `contact.html`, find:

```html
<!-- Replace WHATSAPP_NUMBER with the actual WhatsApp number including country code -->
<a class="btn" href="https://wa.me/WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer">
```

Replace `WHATSAPP_NUMBER` with digits only, **including country code**, and **no** `+`, spaces, or dashes.

**Illustrative example only** (not a real institute number — you must replace it):

```text
https://wa.me/919876543210
```

That pattern means: country code `91` + 10-digit Indian mobile number. Use the institute’s real WhatsApp number.

This works on phones with WhatsApp and on desktop where WhatsApp Web / the desktop app is available.

---

## 29.14 Editing the Logo

The file `logo.jpg` is the current logo / hero background image (used on the home page and the top of other pages).

To change it:

1. Prepare your new image (JPG is simplest).
2. Name it **exactly** `logo.jpg`.
3. Put it in the same folder as `Pillay.html`, replacing the old file.
4. Refresh the browser (you may need a hard refresh: Ctrl+F5).

If you use a different filename, you would also have to edit `style.css` where it says `url('logo.jpg')`. Keeping the same name is easier.

---

## 29.15 Important Files

| File | What it is |
|------|------------|
| `Pillay.html` | Home page |
| `courses.html` | Courses + Test Series |
| `about.html` | About page |
| `location.html` | Location |
| `contact.html` | Contact information |
| `style.css` | Shared design (do not split into extra CSS files) |
| `script.js` | Shared mathematical-symbol mouse animation — used on every page |
| `logo.jpg` | Logo / background image |
| `README.md` | These editing instructions |

Open `Pillay.html` in a browser to start. All menu links use relative paths, so the site works when you open the files locally as long as they stay in the same folder.

---

## Adding a New Topper

The **Our Vidarbha & City Toppers** section is on `about.html`, below the About Us card.

1. Put the new photo in the same folder as `about.html` (for example `topper4.jpg`).
2. Copy one existing `<div class="topper-card">...</div>` block.
3. Paste it after the last topper card, still inside `<div class="toppers-grid">`.
4. Change only these parts:
   - the image filename (`src="topper4.jpg"`), **or** keep the `Student Photo` placeholder until you have a picture
   - the `alt` text (if using an image)
   - the name inside `<h3>`
   - `Vidarbha Topper` or `City Topper`
   - the year (for example `ICSE 2024`)

When a photo is ready, put it in the same folder and use an `<img>` inside `.topper-image-container` instead of `.photo-placeholder`.

**Example only** (not a real student — replace with the real name, category, year, and photo):

```html
<div class="topper-card">

    <div class="topper-image-container">

        <img src="topper4.jpg" alt="Rahul Sharma">

    </div>

    <div class="topper-info">

        <h3>Rahul Sharma</h3>

        <p class="topper-category">City Topper</p>

        <p class="topper-year">ICSE 2024</p>

    </div>

</div>
```

You do not need to change `style.css` or `script.js` when you add more cards. The cards wrap onto new rows automatically.
