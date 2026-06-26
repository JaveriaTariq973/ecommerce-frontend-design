# Brand Ecommerce Website

A static multi-page ecommerce website built with HTML, CSS, and JavaScript. There's no backend/server — the cart system runs entirely on **localStorage** (browser memory), so it works fully on any static host (Netlify, GitHub Pages, or a local server).
---

## 📁 Folder Structure

```
├── index.html              # Homepage
├── product-detail.html     # Product Listing page (grid + filters)
├── product.html             # Single Product Detail page (gallery + buy)
├── cart.html                # Shopping Cart page
├── js/
│   └── cart.js              # Shared cart logic (localStorage)
└── images/
    └── (all product/logo images go here)
```

> ⚠️ All files must stay in the **same root folder**, with `images/` and `js/` as subfolders alongside them — otherwise the relative paths will break.

---

## 🗺️ What Each Page Does — Click Map

### 1. `index.html` — Homepage
This is the website's entry point. It includes:

| Element | What clicking it does |
|---|---|
| Logo (top-left) | Stays on `index.html` |
| Search bar + Search button | Opens `product-detail.html` (listing page) with the search query attached |
| 🛒 Cart icon (header) | Opens `cart.html` |
| "Hot Offers" (nav menu) | Opens `product-detail.html` (listing page) |
| The 5 small "Deals & Offers" cards (Smart watches, Laptops, etc.) | Opens `product.html` (detail page) |
| Home & Outdoor / Electronics promo grid items | Opens `product.html` (detail page) |
| The 10 "Recommended items" product cards (T-shirt, Jacket, etc.) | Clicking the card opens `product.html` |
| Each card's **"Add to cart"** button (shows on hover) | Adds the item to the cart — no page change, just updates the badge |
| ❤️ Favorite icon (on each card) | Visual toggle only (turns red) — nothing is actually saved |
| Newsletter "Subscribe" button | Validates the email and shows a confirmation alert |

---

### 2. `product-detail.html` — Product Listing Page
This is the grid/listing page with filters, sorting, and pagination.

| Element | What clicking it does |
|---|---|
| Sidebar filters (Category, Brand, Price, Rating) | Visual only — no real filtering logic (UI demo) |
| Grid/List view toggle buttons | Switches the layout (grid ↔ list) |
| Any product card (image/title) | Opens `product.html` (detail page) |
| Each card's **"Add to cart"** button | Adds the item to the cart (no page change) |
| "View details" button | Opens `product.html` |
| Pagination numbers (1, 2, 3) | Visual page switch only (no real data loading — it's a demo) |
| 🛒 Cart icon (header) | Opens `cart.html` |

---

### 3. `product.html` — Single Product Detail Page
This is the page with the image gallery, price tiers, supplier info, and tabs (the screenshot-style design).

| Element | What clicking it does |
|---|---|
| Gallery thumbnails (6 small images) | Updates the large main gallery image |
| Tabs: Description / Reviews / Shipping / About seller | Switches the visible tab content |
| **"Add to cart"** button (in the supplier card) | Adds the product to the cart (using the current price) |
| "Send inquiry" button | Visual button only (no backend) |
| "Seller's profile" button | Visual button only (no backend) |
| "Save for later" (heart link) | Visual toggle only |
| "You may like" — 6 mini-cards | Opens `product.html` again (loops back to this same page — demo behavior) |
| "Related products" — 6 mini-cards | Opens `product.html` again (loops back to this same page — demo behavior) |
| 🛒 Cart icon (header) | Opens `cart.html` |

---

### 4. `cart.html` — Shopping Cart Page
Every product added from any page shows up here in real time, via localStorage.

| Element | What clicking it does |
|---|---|
| Qty dropdown (next to each item) | Updates the quantity and recalculates totals automatically |
| "Remove" link | Removes the item from the cart |
| "Save for later" link | Moves the item from the cart into the "Saved for later" section |
| "Remove all" link | Empties the entire cart |
| "Move to cart" button (in Saved for later section) | Moves the item back into the cart |
| Coupon "Apply" button | Entering the code `SAVE10` applies a 10% discount (demo coupon) |
| "Checkout" button | Shows a demo alert (no real payment integration) |
| "Back to shop" link | Takes you back to `index.html` |
| Newsletter "Subscribe" button | Validates the email and shows a confirmation alert |

---

## 🔄 Full Navigation Flow (summary)

```
index.html (Homepage)
   │
   ├──► product-detail.html (Listing)  ──► product.html (Detail)
   │                                              │
   └──────────────────────────────────────────────┤
                                                    ├──► product.html (loops: You may like / Related)
                                                    │
   [Add to cart button — from anywhere]            │
        │                                           │
        ▼                                           ▼
   cart.html  ◄────────────────────── (🛒 icon in header, from every page)
```

**How "Add to cart" works:**
- `index.html`, `product-detail.html`, and `product.html` all have working add-to-cart buttons.
- Wherever you click it, the item is saved into `localStorage`.
- The header's 🛒 icon instantly shows a red badge with the updated count — no page reload needed.
- When you open `cart.html`, every saved item loads automatically — no matter which page it was added from.

---

## ⚙️ How to Run This Project

### Option A — Local server (VS Code)
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

### Option B — Local server (terminal)
```bash
# From inside the project folder:
python3 -m http.server 8000
# Then open in your browser:
http://localhost:8000/index.html
```

---

## 🛠️ Tech Used
- HTML5, CSS3 (custom, no framework)
- Vanilla JavaScript
- [Font Awesome](https://fontawesome.com/) — icons
- [Google Fonts – Inter](https://fonts.google.com/specimen/Inter) — typography
- `localStorage` — cart data persistence (no backend/database)

---
