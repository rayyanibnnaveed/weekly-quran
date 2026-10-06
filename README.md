# QuranSkool Quran Weekly Planner — landing page

Plain HTML/CSS/JavaScript, ready to host as a static site on Vercel. No installation or build step required.

## Preview
Extract the ZIP, then open index.html. Keep all files and the assets folder together. Google Fonts is optional; system-font fallbacks work offline.

## Enable purchasing
Edit config.js and set:
- checkoutUrl: your real HTTPS hosted checkout link
- priceLabel: your real price and currency
- purchaseLabel: optional button label
- purchaseNote: optional short offer detail

The Buy the planner button is visible by default. Without a valid checkout link, it opens an honest "Purchasing is not available yet" dialog. With the link configured, it takes the visitor to checkout.
Payment processing, receipts and paid PDF delivery must be handled by your checkout provider. Never add secret API keys to this website. The full PDF is not bundled or publicly exposed; only four sample page images are included.

## Vercel
Upload this folder's contents into a GitHub repository, then import it into Vercel. Use framework preset Other, no build command, output directory `.`. The included vercel.json sets these values. If the folder is nested in your repository, select quran-weekly-planner as the Root Directory.

## Product grounding
Source: QuranSkool_Weekly_Planner_Canva_Editable.pptx.pdf supplied in this conversation.
Actual contents: 14 pages — cover, 12 numbered weekly spreads, closing reflection page. Each weekly spread includes Quran reading, translation, revision, memorization, listening and dua; weekly intention/goals, Surah focus, best reading times, reflection, small win and next tiny goal.
The supplied file is a PDF without interactive form fields. No Canva editing link or presentation file was supplied, so the offer describes only a printable PDF. Update the corresponding FAQ if you later include a Canva template.
The original user-supplied QuranSkool logo is included. CSS crops its generous background for a better header fit without modifying the original image.

## Files
index.html — page content
styles.css — responsive design and logo positioning
script.js — preview switching, enlarged preview dialog, checkout handling
config.js — price and checkout settings
assets/ — original logo and four PDF preview images
vercel.json — static deployment settings

## Validation
JavaScript syntax, internal section links, local asset references and PDF content/page count checked. Browser rendering was unavailable; review desktop and mobile appearance before launch.
