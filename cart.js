/* ══════════════════════════════════════════════
   SHARED CART LOGIC (localStorage based)
   Include this file on every page (index, product-listing,
   product, cart) via: <script src="cart.js"></script>
══════════════════════════════════════════════ */

const CART_KEY = 'brand_cart_items';
const SAVED_KEY = 'brand_saved_items';

/* ---------- storage helpers ---------- */
function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch (e) { return []; }
}
function setCart(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    updateCartBadge();
}
function getSaved() {
    try { return JSON.parse(localStorage.getItem(SAVED_KEY)) || []; }
    catch (e) { return []; }
}
function setSaved(items) {
    localStorage.setItem(SAVED_KEY, JSON.stringify(items));
}

/* ---------- add to cart (called from product cards / detail page) ---------- */
function addToCart(opts) {
    // opts: { name, price, image, seller, variant }
    const items = getCart();
    const existing = items.find(i => i.name === opts.name);
    if (existing) {
        existing.qty += 1;
    } else {
        items.push({
            id: 'item_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
            name: opts.name || 'Product',
            price: parseFloat(opts.price) || 0,
            image: opts.image || '',
            seller: opts.seller || 'Brand Store',
            variant: opts.variant || '',
            qty: 1
        });
    }
    setCart(items);
}

/* ---------- header badge ---------- */
function updateCartBadge() {
    const count = getCart().reduce((sum, i) => sum + i.qty, 0);
    document.querySelectorAll('.cart-badge').forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? 'flex' : 'none';
    });
}

/* ---------- visual feedback on the clicked button ---------- */
function flashAdded(btn) {
    if (!btn) return;
    const originalHTML = btn.innerHTML;
    const originalBg = btn.style.background;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
    btn.style.background = '#28a745';
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = originalBg;
    }, 1200);
}

/* ---------- helper used by onclick handlers on product cards ---------- */
function handleAddToCartClick(btn, opts) {
    addToCart(opts);
    flashAdded(btn);
}

/* ---------- run on every page load ---------- */
document.addEventListener('DOMContentLoaded', updateCartBadge);