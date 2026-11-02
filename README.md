# Nairobi Gymnastics Stores website

A responsive static catalogue website for Nairobi Gymnastics Stores Limited.

## Publish with GitHub Pages
1. Create a GitHub repository (for example `nairobi-gymnastics-stores`).
2. Upload the contents of this folder to the repository root. Keep `index.html`, `styles.css`, `script.js`, `products.js` and the `assets` folder together.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** and **/(root)**, then Save.
6. GitHub will provide your public website URL after deployment.

## WhatsApp number
The site currently uses the official WhatsApp ordering number `+254 733 311311` (international format in the code: `254733311311`). If the correct ordering number is different, update `WHATSAPP_NUMBER` near the top of `script.js` and the phone link in `index.html`.

## Product updates
Edit `products.js` to update product names, prices, descriptions and categories. Replace the matching `assets/product-XX.jpg` image to update a product photo.

## Notes
- Product information and prices are transcribed from the supplied 2026 catalogue.
- Product 16 has an unclear dimension in the source catalogue; confirm it before publishing that specification.
- Items with size options display “See options”; the available sizes and prices are included in their product details and can be confirmed over WhatsApp.
