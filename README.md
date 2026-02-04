# Your Personal Portfolio Website

A clean, image-focused website inspired by binksjardin.com. This guide will teach you how to customize everything yourself - no coding experience needed!

---

## 📁 What's In This Folder

```
website/
├── index.html      ← Homepage (your main landing page)
├── ethos.html      ← About you / your story
├── gallery.html    ← Photo & video gallery with categories
├── contact.html    ← Contact info & social links
├── styles.css      ← All the visual styling (colors, fonts, sizes)
├── script.js       ← Interactive features (don't need to edit this much)
└── images/         ← Create this folder for your photos (instructions below)
```

---

## 🚀 How to View Your Website

### Option 1: Open Directly in Browser
1. Find the `index.html` file
2. Double-click it
3. It will open in your web browser!

### Option 2: Use VS Code with Live Server (Recommended)
1. Download VS Code (free): https://code.visualstudio.com/
2. Install the "Live Server" extension
3. Open your website folder in VS Code
4. Right-click `index.html` → "Open with Live Server"
5. The website will auto-refresh when you save changes!

---

## 🖼️ HOW TO REPLACE IMAGES (The Main Thing You'll Do!)

### Step 1: Create an Images Folder
Create a folder called `images` inside your website folder.

### Step 2: Add Your Photos
Put your photos in that folder. Name them something memorable like:
- `hero-beach-sunset.jpg`
- `portrait-sarah.jpg`
- `landscape-mountains.jpg`

### Step 3: Find the Image Code to Replace
Open any `.html` file in a text editor. Look for code that looks like this:

```html
<img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80" 
     alt="Hero image - replace with your photo">
```

### Step 4: Replace the URL with Your Image Path
Change it to:

```html
<img src="images/your-photo-name.jpg" 
     alt="Description of your photo">
```

**That's it!** The `src=""` part is where the image comes from.

---

## 📝 DETAILED EDITING GUIDE

### Changing Your Name

In EVERY `.html` file, find and replace:
- `YOUR NAME` → Your actual name
- `your.email@example.com` → Your email
- `yourusername` → Your social media handles

**Tip:** Use Ctrl+H (or Cmd+H on Mac) to "Find and Replace" across the file.

---

### Editing the Homepage (index.html)

#### Hero Image (The Big One at the Top)
Find this around line 25:
```html
<img src="https://images.unsplash.com/photo-..." 
     alt="Hero image" 
     class="hero-image">
```
Replace with:
```html
<img src="images/your-hero-photo.jpg" 
     alt="Your description" 
     class="hero-image">
```

#### Hero Text
Find this around line 28:
```html
<h1 class="hero-title">YOUR NAME</h1>
<p class="hero-subtitle">Photographer & Videographer</p>
```
Change to whatever you want!

#### Grid Images
Each image in the grid looks like this:
```html
<div class="grid-item large">
    <img src="https://images.unsplash.com/..." alt="Description">
    <div class="image-hover">
        <span>Nature</span>  <!-- This text appears on hover -->
    </div>
</div>
```

Just replace the `src="..."` part with your image.

**Grid sizes you can use:**
- `class="grid-item large"` → Big image (spans 2 columns & 2 rows)
- `class="grid-item medium"` → Medium (spans 2 columns)
- `class="grid-item small"` → Small (1 column)
- `class="grid-item gif-item"` → For GIFs (1 column)

---

### Adding GIFs

GIFs work exactly like images! Just use a `.gif` file:
```html
<img src="images/my-cool-animation.gif" alt="Animated decoration">
```

**Where to find free GIFs:** https://giphy.com (right-click → "Copy GIF address")

---

### Editing the Ethos Page (ethos.html)

Find the text sections and replace with your story:
```html
<p class="ethos-text large">
    "Your personal quote or tagline here"
</p>

<p class="ethos-text">
    Write about yourself here. Your journey, what inspires you, etc.
</p>
```

---

### Editing the Contact Page (contact.html)

#### Email
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

#### Social Links
Find this section and update the URLs:
```html
<div class="social-links">
    <a href="https://instagram.com/yourusername">Instagram</a>
    <a href="https://vimeo.com/yourusername">Vimeo</a>
    ...
</div>
```

Delete any platforms you don't use by removing the entire `<a>...</a>` line.

---

### Editing the Gallery (gallery.html)

#### Renaming Categories
Find the tabs section:
```html
<button class="gallery-tab" data-category="landscapes">Landscapes</button>
```

You can rename categories! Just change:
1. The text between `>` and `</button>`
2. The `data-category="..."` value

Example - changing "Landscapes" to "Nature":
```html
<button class="gallery-tab" data-category="nature">Nature</button>
```

**Important:** You must also update the `data-category` on your images to match!

#### Adding Gallery Images
Each gallery image looks like this:
```html
<div class="gallery-item" data-category="landscapes">
    <img src="images/my-mountain-photo.jpg" alt="Mountain at sunset">
</div>
```

The `data-category` tells the filter which tab this image belongs to.

#### Adding More Images
Just copy-paste a gallery-item block and change the src and data-category:
```html
<!-- Copy this block for each new image -->
<div class="gallery-item" data-category="portraits">
    <img src="images/portrait-1.jpg" alt="Portrait description">
</div>
```

---

## 🎨 CUSTOMIZING COLORS & FONTS

Open `styles.css` and find the `:root` section at the top (around line 10):

```css
:root {
    --color-bg: #0a0a0a;           /* Background color (dark) */
    --color-text: #f5f5f5;          /* Text color (light) */
    --color-accent: #e8e8e8;        /* Accent color */
    --color-muted: #888888;         /* Secondary text */
}
```

### Changing Colors
Replace the hex codes with your preferred colors:
- `#0a0a0a` = Almost black
- `#ffffff` = White
- `#f5f5f5` = Off-white
- `#888888` = Gray

**Color picker tool:** https://htmlcolorcodes.com/color-picker/

### Changing Fonts
The fonts are loaded from Google Fonts. To change them:

1. Go to https://fonts.google.com
2. Pick fonts you like
3. Click "Get Font" → "Get embed code"
4. Replace the `<link>` tag in the HTML files
5. Update the font names in `styles.css`:

```css
--font-display: 'Your Display Font', serif;
--font-body: 'Your Body Font', sans-serif;
```

---

## 🌐 PUTTING YOUR WEBSITE ONLINE

### Free Hosting Options:

#### Netlify (Easiest)
1. Go to https://netlify.com
2. Sign up for free
3. Drag your entire website folder onto the page
4. Done! You'll get a URL like `yoursite.netlify.app`

#### GitHub Pages (Free with custom domain support)
1. Create a GitHub account
2. Create a new repository
3. Upload your files
4. Go to Settings → Pages → Enable

#### Vercel
1. Go to https://vercel.com
2. Sign up and connect to GitHub
3. Import your project

---

## ❓ COMMON ISSUES

### Image Not Showing?
- Check the file path is correct (case-sensitive!)
- Make sure the image is in the `images` folder
- Check for typos in the filename

### Changes Not Appearing?
- Make sure you saved the file
- Try hard-refreshing: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Clear your browser cache

### Layout Looks Broken?
- Make sure you didn't accidentally delete a `<div>` or `</div>` tag
- HTML tags come in pairs - every opening tag needs a closing tag

---

## 📋 QUICK REFERENCE: What to Replace

| What | Where to Find | What to Change |
|------|---------------|----------------|
| Your name | All HTML files | Search "YOUR NAME" |
| Hero image | index.html line ~25 | Change `src="..."` |
| Grid images | index.html | Change each `src="..."` |
| About photo | ethos.html | Change `src="..."` |
| About text | ethos.html | Edit paragraph text |
| Email | contact.html | Change email address |
| Social links | contact.html | Update URLs |
| Gallery images | gallery.html | Add/edit gallery-item divs |
| Colors | styles.css :root | Change hex codes |

---

## 💡 TIPS

1. **Make a backup** before making big changes
2. **Edit one thing at a time** and check if it worked
3. **Use descriptive filenames** for images (easier to remember)
4. **Optimize images** for web - large files slow down your site
   - Free tool: https://squoosh.app
5. **Test on mobile** - resize your browser window to see how it looks

---

Good luck with your website! 🎉
