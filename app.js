// Royal Threads Client-Side Single Page Application Logic

// Initial seed products database
const DEFAULT_PRODUCTS = [
    {
        id: "rt-mens-suit",
        name: "Royal Emperor Charcoal Suit",
        category: "men",
        basePrice: 11999.00,
        gstRate: 12, // Premium Apparel
        discount: 10, // Pongal Harvest Discount
        discountName: "Pongal Special (10% OFF)",
        description: "Exquisitely tailored slim-fit double-breasted premium suit. Woven with luxury Italian wool and crafted with hand-finished interior seams, this piece offers the modern gentleman an unparalleled sense of confidence and class.",
        stock: 15,
        variations: [
            { img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=600&q=80", label: "Classic Studio Fit" },
            { img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80", label: "Model Silhouette View" },
            { img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80", label: "Collar & Fabric Details" }
        ]
    },
    {
        id: "rt-mens-shirt",
        name: "Indigo Premium Linen Shirt",
        category: "men",
        basePrice: 2499.00,
        gstRate: 5,
        discount: 0,
        discountName: "",
        description: "Casual elegance in breathable, high-grade linen. Colored with organic indigo dye and detailed with shell buttons, it provides a relaxed yet refined styling option for contemporary men's summer wardrobe.",
        stock: 25,
        variations: [
            { img: "https://images.unsplash.com/photo-1620012253295-c05518e99309?auto=format&fit=crop&w=600&q=80", label: "Linen Flatlay View" },
            { img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80", label: "Front Hanger Display" },
            { img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=600&q=80", label: "Model Relaxed Pose" }
        ]
    },
    {
        id: "rt-mens-kurta",
        name: "Coimbatore Silk Veshti & Kurta",
        category: "festive",
        basePrice: 5999.00,
        gstRate: 5,
        discount: 15, // Diwali Festive Discount
        discountName: "Diwali Special (15% OFF)",
        description: "A traditional South Indian masterpiece. Made from pure mulberry silk, this set includes a gold-bordered Veshti (Dhoti) and a matching premium silk Kurta, perfect for marriage ceremonies and local festivals.",
        stock: 18,
        variations: [
            { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", label: "Silk Kurta Front" },
            { img: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=600&q=80", label: "Ceremonial Silk Drape" },
            { img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80", label: "Ethnic Fabric Texture" }
        ]
    },
    {
        id: "rt-mens-sherwani",
        name: "Royal Emerald Wedding Sherwani",
        category: "festive",
        basePrice: 16999.00,
        gstRate: 12,
        discount: 10,
        discountName: "Pongal Special (10% OFF)",
        description: "Behold the height of traditional formal wear. Woven with rich emerald threadwork, hand-embroidered borders, and styled with premium velvet details, this wedding sherwani is perfect for high-end ceremonies.",
        stock: 6,
        variations: [
            { img: "https://images.unsplash.com/photo-1597983073492-bc2415978132?auto=format&fit=crop&w=600&q=80", label: "Boutique Display Front" },
            { img: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&w=600&q=80", label: "Sherwani Model Side View" },
            { img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80", label: "Velvet Collar Detail" }
        ]
    },
    {
        id: "rt-womens-gown",
        name: "Midnight Blue Couture Gown",
        category: "women",
        basePrice: 15499.00,
        gstRate: 12, // Premium Apparel
        discount: 15, // Diwali Festive Discount
        discountName: "Diwali Celebration (15% OFF)",
        description: "A breathtaking floor-length designer evening gown in a rich midnight royal blue shade. Featuring hand-draped fluid satin fabric, a sophisticated neckline, and an elegant sweeping train, it represents couture design at its finest.",
        stock: 8,
        variations: [
            { img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80", label: "Atelier Display View" },
            { img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80", label: "Model Grace Pose" },
            { img: "https://images.unsplash.com/photo-1518049360754-71641edd775b?auto=format&fit=crop&w=600&q=80", label: "Embroidery Close-up" }
        ]
    },
    {
        id: "rt-womens-jumpsuit",
        name: "Sage Green Linen Jumpsuit",
        category: "women",
        basePrice: 3899.00,
        gstRate: 5,
        discount: 0,
        discountName: "",
        description: "Crafted for effortless modern styling. This premium casual jumpsuit is woven from Belgian flax linen and features a wide-leg cut, an adjustable tie waist, and double pockets for maximum comfort and style.",
        stock: 20,
        variations: [
            { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80", label: "Sage Casual Pose" },
            { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80", label: "Model Standing Fit" },
            { img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80", label: "Linen Texture Detail" }
        ]
    },
    {
        id: "rt-festive-saree",
        name: "Elite Coimbatore Silk Saree",
        category: "festive",
        basePrice: 18999.00,
        gstRate: 5, // Traditional Silk GST Category
        discount: 15, // Diwali Festive Discount
        discountName: "Diwali Special (15% OFF)",
        description: "Woven in Coimbatore, Tamil Nadu, this authentic pure silk saree features opulent Banarasi-style gold brocade embroidery. It represents our heritage of premium craftsmanship, combining rich red tones with shimmering metallic zari work.",
        stock: 12,
        variations: [
            { img: "https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&w=600&q=80", label: "Traditional Drape View" },
            { img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80", label: "Model Grace View" },
            { img: "https://images.unsplash.com/photo-1610030470224-4f81b1a403ec?auto=format&fit=crop&w=600&q=80", label: "Close-up Gold Brocade" }
        ]
    },
    {
        id: "rt-womens-anarkali",
        name: "Crimson Banarasi Anarkali Set",
        category: "festive",
        basePrice: 8999.00,
        gstRate: 12,
        discount: 10,
        discountName: "Pongal Festive (10% OFF)",
        description: "Celebrate luxury traditions in our flared crimson Anarkali gown. Embellished with Banarasi silk brocade, matching pants, and a sheer dupatta, this outfit delivers traditional sophistication and comfort.",
        stock: 10,
        variations: [
            { img: "https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=600&q=80", label: "Classic Studio Front" },
            { img: "https://images.unsplash.com/photo-1610030469850-2a537f2674e1?auto=format&fit=crop&w=600&q=80", label: "Anarkali Model Walking" },
            { img: "https://images.unsplash.com/photo-1610030469848-185c13e55198?auto=format&fit=crop&w=600&q=80", label: "Dupatta Embroidery Detail" }
        ]
    }
];

// App State Variables
let state = {
    products: [],
    cart: [],
    orders: [],
    currentCategory: "all",
    searchQuery: "",
    sortBy: "default",
    selectedSize: "S",
    selectedVariationIndex: 0,
    currentDetailProductId: null,
    isAdminAuthenticated: false,
    activeAdminTab: "products",
    activeSection: "shop",
    checkoutCartTotal: 0
};

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    // Load products database from localStorage or seed defaults
    const savedProducts = localStorage.getItem("rt_products");
    if (savedProducts) {
        const parsed = JSON.parse(savedProducts);
        if (parsed.length === DEFAULT_PRODUCTS.length) {
            state.products = parsed;
        } else {
            // Seed list length changed, overwrite with new catalog
            state.products = [...DEFAULT_PRODUCTS];
            localStorage.setItem("rt_products", JSON.stringify(state.products));
        }
    } else {
        state.products = [...DEFAULT_PRODUCTS];
        localStorage.setItem("rt_products", JSON.stringify(state.products));
    }

    // Load orders database from localStorage
    const savedOrders = localStorage.getItem("rt_orders");
    if (savedOrders) {
        state.orders = JSON.parse(savedOrders);
    } else {
        state.orders = generateMockOrders();
        localStorage.setItem("rt_orders", JSON.stringify(state.orders));
    }

    // Initialize UI views
    renderProducts();
    updateCartCount();
    setupUPIQR();
    loadSalesReport();
});

// Switch Main Sections (Shop / Contact / Admin)
function switchSection(sectionId) {
    state.activeSection = sectionId;
    
    // Toggle active classes on sections
    const sections = ["shop", "contact", "admin"];
    sections.forEach(sec => {
        const el = document.getElementById(`section-${sec}`);
        const navEl = document.getElementById(`nav-${sec}`);
        if (sec === sectionId) {
            el.classList.add("active");
            if (navEl) navEl.classList.add("active");
        } else {
            el.classList.remove("active");
            if (navEl) navEl.classList.remove("active");
        }
    });

    // Close mobile menu if open
    const navMenu = document.getElementById("nav-menu");
    if (navMenu) navMenu.classList.remove("active");

    // Scroll to top of section
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Custom view loads
    if (sectionId === "admin") {
        checkAdminAuth();
    }
}

// Toggle Mobile Menu Navigation
function toggleMobileMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}

// Scroll to products grid anchor
function scrollToProducts() {
    const el = document.getElementById("products-anchor");
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}

// PRICING CALCULATION ENGINE
// Returns transparent pricing objects including base, GST, discounts, and finals
function calculateProductPricing(product) {
    const base = product.basePrice;
    const discountPercent = product.discount || 0;
    
    // 1. Calculate base price minus festive discount
    const discountVal = base * (discountPercent / 100);
    const priceAfterFestiveDiscount = base - discountVal;

    // 2. Calculate GST on the discounted base price
    const gstVal = priceAfterFestiveDiscount * (product.gstRate / 100);

    // 3. Final display price per item
    const finalPrice = priceAfterFestiveDiscount + gstVal;

    return {
        basePrice: base,
        discountRate: discountPercent,
        discountAmount: discountVal,
        gstRate: product.gstRate,
        gstAmount: gstVal,
        priceAfterDiscount: priceAfterFestiveDiscount,
        finalPrice: finalPrice
    };
}

// STOREFRONT: RENDER PRODUCTS
function renderProducts() {
    const gridList = document.getElementById("products-grid-list");
    if (!gridList) return;

    gridList.innerHTML = "";

    // Apply filter conditions
    let filteredList = state.products.filter(prod => {
        // Category Filter
        const matchesCategory = state.currentCategory === "all" || prod.category === state.currentCategory;
        
        // Search Query Filter
        const matchesSearch = prod.name.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                             prod.description.toLowerCase().includes(state.searchQuery.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });

    // Apply Sorting conditions
    if (state.sortBy === "price-low") {
        filteredList.sort((a, b) => calculateProductPricing(a).finalPrice - calculateProductPricing(b).finalPrice);
    } else if (state.sortBy === "price-high") {
        filteredList.sort((a, b) => calculateProductPricing(b).finalPrice - calculateProductPricing(a).finalPrice);
    }

    if (filteredList.length === 0) {
        gridList.innerHTML = `
            <div class="no-products-found">
                <i class="fas fa-search-minus" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                <h3>No luxury garments found</h3>
                <p>Try adjusting your search criteria or filters.</p>
            </div>
        `;
        return;
    }

    filteredList.forEach(prod => {
        const pricing = calculateProductPricing(prod);
        const mainImage = prod.variations[0]?.img || "images/hero_banner.png";
        const hoverImage = prod.variations[1]?.img || mainImage;
        
        // Create Product Card DOM Elements
        const card = document.createElement("div");
        card.className = "product-card";
        
        // Badge indicator if discount exists
        const badgeHTML = pricing.discountRate > 0 
            ? `<div class="product-card-badge">${pricing.discountRate}% Festive Off</div>` 
            : "";

        // Variation indicator dots
        let dotsHTML = "";
        prod.variations.forEach((v, idx) => {
            dotsHTML += `<div class="variation-dot" style="background-color: ${getVariationColorHex(idx)}" title="${v.label}"></div>`;
        });

        card.innerHTML = `
            ${badgeHTML}
            <div class="product-card-image" onclick="openProductDetailModal('${prod.id}')">
                <img src="${mainImage}" alt="${prod.name}" class="primary-img">
                <img src="${hoverImage}" alt="${prod.name}" class="secondary-img">
                <div class="product-card-overlay">
                    <button class="btn btn-primary btn-small"><i class="fas fa-expand-alt"></i> Detail & Variations</button>
                </div>
            </div>
            <div class="product-card-details">
                <span class="product-card-category">${prod.category} couture</span>
                <h3 class="product-card-title">${prod.name}</h3>
                <div class="product-card-variations">
                    ${dotsHTML}
                </div>
                <div class="price-container">
                    <span class="final-price">₹${formatCurrency(pricing.finalPrice)}</span>
                    ${pricing.discountRate > 0 ? `<span class="base-price">₹${formatCurrency(pricing.basePrice)}</span>` : ""}
                    <span class="gst-indicator">GST ${pricing.gstRate}%</span>
                </div>
                <button class="btn btn-secondary btn-block" onclick="addProductToCartDirect('${prod.id}', event)">
                    <i class="fas fa-shopping-bag"></i> Quick Add
                </button>
            </div>
        `;

        // Adding direct click logic on card details
        gridList.appendChild(card);
    });
}

// Return variation color dots hex values helper
function getVariationColorHex(index) {
    const colors = ["#0A192F", "#D4AF37", "#4A5568", "#8c6239", "#e2e8f0"];
    return colors[index % colors.length];
}

// Filter products category function
function filterCategory(category, buttonEl) {
    state.currentCategory = category;
    
    // Update active state class on filter buttons
    const filterButtons = document.querySelectorAll("#categories-filter-bar .filter-btn");
    filterButtons.forEach(btn => btn.classList.remove("active"));
    
    if (buttonEl) {
        buttonEl.classList.add("active");
    }

    renderProducts();
}

// Search bar handle query function
function handleSearch() {
    const searchInput = document.getElementById("search-input");
    state.searchQuery = searchInput.value;
    renderProducts();
}

// Sort dropdown handling function
function handleSort() {
    const sortSelect = document.getElementById("sort-select");
    state.sortBy = sortSelect.value;
    renderProducts();
}

// ONE-CLICK EXPANSION: PRODUCT DETAIL MODAL
function openProductDetailModal(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    state.currentDetailProductId = productId;
    state.selectedSize = "S";
    state.selectedVariationIndex = 0;

    const pricing = calculateProductPricing(product);

    // Load elements
    document.getElementById("modal-product-category").innerText = `${product.category} Couture`;
    document.getElementById("modal-product-title").innerText = product.name;
    document.getElementById("modal-final-price").innerText = `₹${formatCurrency(pricing.finalPrice)}`;
    document.getElementById("modal-base-price").innerText = `₹${formatCurrency(pricing.basePrice)}`;
    document.getElementById("modal-gst-rate").innerText = `${pricing.gstRate}%`;
    document.getElementById("modal-product-desc").innerText = product.description;
    
    // Discount label tag load
    const discountTag = document.getElementById("modal-discount-tag");
    if (pricing.discountRate > 0) {
        discountTag.style.display = "inline-block";
        discountTag.innerText = `${product.discountName || `${pricing.discountRate}% OFF`}`;
    } else {
        discountTag.style.display = "none";
    }

    // Load variations options buttons
    const variationsContainer = document.getElementById("modal-variation-options");
    variationsContainer.innerHTML = "";
    product.variations.forEach((v, index) => {
        const btn = document.createElement("button");
        btn.className = `var-option-btn ${index === 0 ? "active" : ""}`;
        btn.innerText = v.label;
        btn.onclick = () => selectVariation(index, btn);
        variationsContainer.appendChild(btn);
    });

    // Load Image Gallery
    updateModalImages(product);

    // Size reset
    const sizeButtons = document.querySelectorAll(".size-options .size-btn");
    sizeButtons.forEach(btn => {
        btn.classList.remove("active");
        if (btn.innerText === "S") btn.classList.add("active");
    });

    // Toggle Modal State
    document.getElementById("product-detail-modal").classList.add("active");
}

function updateModalImages(product) {
    const mainImg = document.getElementById("modal-main-image");
    const thumbList = document.getElementById("modal-thumbnails-list");

    const currentImgUrl = product.variations[state.selectedVariationIndex]?.img || product.variations[0].img;
    mainImg.src = currentImgUrl;

    thumbList.innerHTML = "";
    product.variations.forEach((v, index) => {
        const thumb = document.createElement("div");
        thumb.className = `thumbnail-item ${index === state.selectedVariationIndex ? "active" : ""}`;
        thumb.innerHTML = `<img src="${v.img}" alt="${v.label}">`;
        thumb.onclick = () => {
            state.selectedVariationIndex = index;
            // Update active state across thumbnails
            const thumbs = document.querySelectorAll(".thumbnails-container .thumbnail-item");
            thumbs.forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");

            // Update main image source
            mainImg.src = v.img;

            // Update variation active button state
            const varBtns = document.querySelectorAll("#modal-variation-options .var-option-btn");
            varBtns.forEach((b, bIdx) => {
                if (bIdx === index) b.classList.add("active");
                else b.classList.remove("active");
            });
        };
        thumbList.appendChild(thumb);
    });
}

// Select size handling inside detail modal
function selectSize(btnEl) {
    const sizeButtons = document.querySelectorAll(".size-options .size-btn");
    sizeButtons.forEach(btn => btn.classList.remove("active"));
    btnEl.classList.add("active");
    state.selectedSize = btnEl.innerText;
}

// Select variation handling inside detail modal
function selectVariation(index, btnEl) {
    state.selectedVariationIndex = index;
    const varBtns = document.querySelectorAll("#modal-variation-options .var-option-btn");
    varBtns.forEach(btn => btn.classList.remove("active"));
    btnEl.classList.add("active");

    const product = state.products.find(p => p.id === state.currentDetailProductId);
    if (product) {
        updateModalImages(product);
    }
}

// Close modals
function closeProductDetailModalDirect() {
    document.getElementById("product-detail-modal").classList.remove("active");
}

function closeProductDetailModal(event) {
    if (event.target === document.getElementById("product-detail-modal")) {
        closeProductDetailModalDirect();
    }
}

// WARDROBE SHOPPING CART LOGIC
function toggleCart(open) {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-drawer-overlay");
    if (open) {
        drawer.classList.add("active");
        overlay.classList.add("active");
        renderCartItems();
    } else {
        drawer.classList.remove("active");
        overlay.classList.remove("active");
    }
}

// One-click quick add from product grid listing
function addProductToCartDirect(productId, event) {
    if (event) event.stopPropagation(); // Prevent modal opening on card click

    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    if (product.stock <= 0) {
        showToast("Error: Item out of stock.", "error");
        return;
    }

    // Add classic default size S and first variation image
    const variationLabel = product.variations[0]?.label || "Default Fit";
    const variationImg = product.variations[0]?.img || "";

    const existingIndex = state.cart.findIndex(item => 
        item.id === productId && 
        item.size === "S" && 
        item.variationIndex === 0
    );

    if (existingIndex > -1) {
        if (state.cart[existingIndex].qty + 1 > product.stock) {
            showToast(`Error: Only ${product.stock} items available.`, "error");
            return;
        }
        state.cart[existingIndex].qty += 1;
    } else {
        state.cart.push({
            id: productId,
            name: product.name,
            size: "S",
            variationIndex: 0,
            variationLabel: variationLabel,
            image: variationImg,
            basePrice: product.basePrice,
            gstRate: product.gstRate,
            discount: product.discount,
            qty: 1
        });
    }

    updateCartCount();
    showToast(`"${product.name}" added to cart!`);
}

// Add item from detail modal
function addModalItemToCart() {
    const product = state.products.find(p => p.id === state.currentDetailProductId);
    if (!product) return;

    if (product.stock <= 0) {
        showToast("Error: Item out of stock.", "error");
        return;
    }

    const variationLabel = product.variations[state.selectedVariationIndex]?.label || "Default Fit";
    const variationImg = product.variations[state.selectedVariationIndex]?.img || "";

    const existingIndex = state.cart.findIndex(item => 
        item.id === state.currentDetailProductId && 
        item.size === state.selectedSize && 
        item.variationIndex === state.selectedVariationIndex
    );

    if (existingIndex > -1) {
        if (state.cart[existingIndex].qty + 1 > product.stock) {
            showToast(`Error: Only ${product.stock} items available.`, "error");
            return;
        }
        state.cart[existingIndex].qty += 1;
    } else {
        state.cart.push({
            id: state.currentDetailProductId,
            name: product.name,
            size: state.selectedSize,
            variationIndex: state.selectedVariationIndex,
            variationLabel: variationLabel,
            image: variationImg,
            basePrice: product.basePrice,
            gstRate: product.gstRate,
            discount: product.discount,
            qty: 1
        });
    }

    updateCartCount();
    closeProductDetailModalDirect();
    toggleCart(true); // Open cart to show item added
    showToast(`"${product.name}" added to cart!`);
}

// Update floating badge cart icon count
function updateCartCount() {
    const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const badge = document.getElementById("cart-badge-count");
    if (badge) {
        badge.innerText = totalQty;
    }
}

// Adjust cart item quantities
function adjustCartQty(index, change) {
    const cartItem = state.cart[index];
    const product = state.products.find(p => p.id === cartItem.id);
    if (!product) return;

    const newQty = cartItem.qty + change;
    if (newQty <= 0) {
        state.cart.splice(index, 1);
    } else {
        if (newQty > product.stock) {
            showToast(`Maximum stock limit of ${product.stock} reached.`, "error");
            return;
        }
        cartItem.qty = newQty;
    }

    updateCartCount();
    renderCartItems();
}

// Remove item from cart completely
function removeCartItem(index) {
    state.cart.splice(index, 1);
    updateCartCount();
    renderCartItems();
    showToast("Item removed from cart.", "info");
}

// Reset cart selections completely
function clearCart() {
    state.cart = [];
    updateCartCount();
    renderCartItems();
    showToast("Cart cleared.", "info");
}

// RENDER CART DRAWER DATA AND SUMMARIES
function renderCartItems() {
    const container = document.getElementById("cart-items-container");
    const summarySection = document.getElementById("cart-summary-section");
    
    if (state.cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-message">
                <i class="fas fa-shopping-bag empty-bag-icon"></i>
                <p>Your bag is empty. Start adding premium threads!</p>
                <button class="btn btn-primary" onclick="toggleCart(false)">Continue Shopping</button>
            </div>
        `;
        summarySection.classList.add("hidden");
        return;
    }

    container.innerHTML = "";
    summarySection.classList.remove("hidden");

    let subtotalBase = 0;
    let totalGST = 0;
    let totalFestiveDiscount = 0;

    state.cart.forEach((item, index) => {
        // Calculations per item
        const itemSubBase = item.basePrice * item.qty;
        const itemDiscountVal = (item.basePrice * (item.discount / 100)) * item.qty;
        const itemDiscountedBase = itemSubBase - itemDiscountVal;
        const itemGstVal = itemDiscountedBase * (item.gstRate / 100);
        const itemFinalTotal = itemDiscountedBase + itemGstVal;

        subtotalBase += itemSubBase;
        totalFestiveDiscount += itemDiscountVal;
        totalGST += itemGstVal;

        const cartItemEl = document.createElement("div");
        cartItemEl.className = "cart-item";
        cartItemEl.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-variation">Fit: ${item.variationLabel} / Size: ${item.size}</div>
                <div class="cart-item-price-info">
                    <span class="cart-item-final-price">₹${formatCurrency(itemFinalTotal)}</span>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="adjustCartQty(${index}, -1)"><i class="fas fa-minus"></i></button>
                        <span class="item-qty">${item.qty}</span>
                        <button class="quantity-btn" onclick="adjustCartQty(${index}, 1)"><i class="fas fa-plus"></i></button>
                    </div>
                    <button class="cart-item-remove" onclick="removeCartItem(${index})"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
        container.appendChild(cartItemEl);
    });

    // CART SUMMARY PRICING
    const grossTotal = (subtotalBase - totalFestiveDiscount) + totalGST;
    const onlineDiscount = grossTotal * 0.03; // Automatic 3% online discount applied to cart totals
    const grandTotal = grossTotal - onlineDiscount;

    state.checkoutCartTotal = grandTotal;

    document.getElementById("summary-subtotal").innerText = `₹${formatCurrency(subtotalBase)}`;
    document.getElementById("summary-gst").innerText = `₹${formatCurrency(totalGST)}`;
    document.getElementById("summary-festive-discount").innerText = `-₹${formatCurrency(totalFestiveDiscount)}`;
    document.getElementById("summary-online-discount").innerText = `-₹${formatCurrency(onlineDiscount)}`;
    document.getElementById("summary-grand-total").innerText = `₹${formatCurrency(grandTotal)}`;
}

// CHECKOUT & PAYMENT WORKFLOW
function openPaymentModal() {
    toggleCart(false);
    
    // Display total payable
    document.getElementById("payment-payable-amount").innerText = `₹${formatCurrency(state.checkoutCartTotal)}`;

    // Reset steps
    document.getElementById("payment-checkout-step").classList.add("active");
    document.getElementById("payment-receipt-step").classList.remove("active");

    // Open Modal Backdrop
    document.getElementById("payment-modal").classList.add("active");
}

function closePaymentModalDirect() {
    document.getElementById("payment-modal").classList.remove("active");
}

function closePaymentModal(event) {
    if (event.target === document.getElementById("payment-modal")) {
        closePaymentModalDirect();
    }
}

// UPI QR Dynamic Canvas Drawing
function setupUPIQR() {
    // We already styled the fallback QR Code with CSS, but let's draw some fine matrix detailing onto the QR canvas wrapper to make it look outstanding.
    const container = document.getElementById("qrcode-canvas-container");
    if (!container) return;

    // Create matrix dot decorations
    const patternEl = container.querySelector(".qr-pattern");
    if (patternEl) {
        patternEl.innerHTML = "";
        for(let i=0; i<300; i++) {
            const dot = document.createElement("div");
            dot.style.position = "absolute";
            dot.style.width = "4px";
            dot.style.height = "4px";
            dot.style.backgroundColor = Math.random() > 0.45 ? "#000" : "transparent";
            dot.style.top = `${Math.floor(Math.random() * 155) + 10}px`;
            dot.style.left = `${Math.floor(Math.random() * 155) + 10}px`;
            patternEl.appendChild(dot);
        }
    }
}

// SIMULATE CHECKOUT SUCCESS STATE
function simulatePaymentSuccess() {
    // 1. Process payment and record order in state & localStorage
    const orderId = `RT-${Math.floor(100000 + Math.random() * 900000)}`;
    const dateStr = getCurrentDateString();
    
    let subtotalBase = 0;
    let totalFestiveDiscount = 0;
    let totalGST = 0;

    // Build items purchased array and deduct stock
    const itemsPurchased = state.cart.map(item => {
        const itemSubBase = item.basePrice * item.qty;
        const itemDiscountVal = (item.basePrice * (item.discount / 100)) * item.qty;
        const itemDiscountedBase = itemSubBase - itemDiscountVal;
        const itemGstVal = itemDiscountedBase * (item.gstRate / 100);

        subtotalBase += itemSubBase;
        totalFestiveDiscount += itemDiscountVal;
        totalGST += itemGstVal;

        // Deduct product inventory stock
        const storeProd = state.products.find(p => p.id === item.id);
        if (storeProd) {
            storeProd.stock = Math.max(0, storeProd.stock - item.qty);
        }

        return {
            name: item.name,
            qty: item.qty,
            size: item.size,
            variation: item.variationLabel,
            rate: item.basePrice,
            gstRate: item.gstRate,
            discountRate: item.discount,
            finalItemTotal: itemDiscountedBase + itemGstVal
        };
    });

    // Save updated products inventory to localStorage
    localStorage.setItem("rt_products", JSON.stringify(state.products));
    renderProducts();

    const grossTotal = (subtotalBase - totalFestiveDiscount) + totalGST;
    const onlineDiscount = grossTotal * 0.03;
    const grandTotal = grossTotal - onlineDiscount;

    const newOrder = {
        orderId: orderId,
        dateTime: dateStr,
        items: itemsPurchased,
        subtotal: subtotalBase,
        festiveDiscount: totalFestiveDiscount,
        gstTotal: totalGST,
        onlineDiscount: onlineDiscount,
        grandTotal: grandTotal,
        status: "Paid"
    };

    // Store in State and LocalStorage
    state.orders.unshift(newOrder); // Add to beginning of log
    localStorage.setItem("rt_orders", JSON.stringify(state.orders));

    // 2. Populate Bill Receipt Invoice Details
    document.getElementById("receipt-no-val").innerText = orderId;
    document.getElementById("receipt-date-val").innerText = dateStr;
    
    const receiptItemsBody = document.getElementById("receipt-invoice-items-body");
    receiptItemsBody.innerHTML = "";

    itemsPurchased.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name} (${item.variation}, Size: ${item.size})</td>
            <td>${item.qty}</td>
            <td>₹${formatCurrency(item.rate)}</td>
            <td>₹${formatCurrency(item.qty * item.rate)}</td>
        `;
        receiptItemsBody.appendChild(row);
    });

    document.getElementById("receipt-subtotal").innerText = `₹${formatCurrency(subtotalBase)}`;
    document.getElementById("receipt-gst").innerText = `₹${formatCurrency(totalGST)}`;
    document.getElementById("receipt-festive-discount").innerText = `-₹${formatCurrency(totalFestiveDiscount)}`;
    document.getElementById("receipt-online-discount").innerText = `-₹${formatCurrency(onlineDiscount)}`;
    document.getElementById("receipt-grand-total").innerText = `₹${formatCurrency(grandTotal)}`;

    // 3. Update dashboard analytics reports
    loadSalesReport();

    // 4. Switch modal step view
    document.getElementById("payment-checkout-step").classList.remove("active");
    document.getElementById("payment-receipt-step").classList.add("active");
    
    showToast("Payment simulated successfully!", "success");
}

// Print Bill Receipt Invoice
function printReceipt() {
    window.print();
}

// Complete payment, reset cart, close modal
function completePaymentWorkflow() {
    state.cart = [];
    updateCartCount();
    closePaymentModalDirect();
    showToast("Cart updated and finalized.");
}

// ADMIN PANEL SECURITY PIN SYSTEM
function handleAdminLogin(event) {
    event.preventDefault();
    const pinVal = document.getElementById("admin-pin").value;
    const errorMsg = document.getElementById("login-error-msg");

    // Standard PIN configuration
    if (pinVal === "1234") {
        state.isAdminAuthenticated = true;
        errorMsg.style.display = "none";
        
        // Show Admin Board Panel, Hide login gate
        document.getElementById("admin-login-gate").classList.add("hidden");
        document.getElementById("admin-dashboard-panel").classList.remove("hidden");
        
        renderAdminInventoryTable();
        loadSalesReport();
        renderAdminOrdersLog();
        showToast("Manager verified.", "success");
    } else {
        errorMsg.style.display = "block";
        document.getElementById("admin-pin").value = "";
    }
}

function handleAdminLogout() {
    state.isAdminAuthenticated = false;
    document.getElementById("admin-pin").value = "";
    document.getElementById("admin-login-gate").classList.remove("hidden");
    document.getElementById("admin-dashboard-panel").classList.add("hidden");
    showToast("Logged out of staff portal.");
}

function checkAdminAuth() {
    if (state.isAdminAuthenticated) {
        document.getElementById("admin-login-gate").classList.add("hidden");
        document.getElementById("admin-dashboard-panel").classList.remove("hidden");
        renderAdminInventoryTable();
        renderAdminOrdersLog();
    } else {
        document.getElementById("admin-login-gate").classList.remove("hidden");
        document.getElementById("admin-dashboard-panel").classList.add("hidden");
    }
}

// Toggle Admin Inner Tabs
function switchAdminTab(tabId) {
    state.activeAdminTab = tabId;

    const tabs = ["products", "sales", "orders"];
    tabs.forEach(tab => {
        const viewEl = document.getElementById(`admin-view-${tab}`);
        const navEl = document.getElementById(`admin-tab-${tab}`);
        if (tab === tabId) {
            viewEl.classList.add("active");
            navEl.classList.add("active");
        } else {
            viewEl.classList.remove("active");
            navEl.classList.remove("active");
        }
    });

    if (tabId === "sales") {
        loadSalesReport();
    } else if (tabId === "products") {
        renderAdminInventoryTable();
    } else if (tabId === "orders") {
        renderAdminOrdersLog();
    }
}

// ADMIN TABLE RENDER: INVENTORY CRUD LIST
function renderAdminInventoryTable() {
    const tableBody = document.getElementById("inventory-table-body");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    state.products.forEach(prod => {
        const mainImg = prod.variations[0]?.img || "images/hero_banner.png";
        
        // Stock status tag helper
        let stockTagClass = "in-stock";
        let stockTagLabel = "In Stock";
        if (prod.stock === 0) {
            stockTagClass = "out-stock";
            stockTagLabel = "Out of Stock";
        } else if (prod.stock <= 5) {
            stockTagClass = "low-stock";
            stockTagLabel = `Low Stock (${prod.stock})`;
        } else {
            stockTagLabel = `In Stock (${prod.stock})`;
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>
                <div class="table-thumbnail">
                    <img src="${mainImg}" alt="${prod.name}">
                </div>
            </td>
            <td><strong>${prod.name}</strong></td>
            <td><span class="detail-category-tag">${prod.category}</span></td>
            <td>₹${formatCurrency(prod.basePrice)}</td>
            <td>${prod.gstRate}%</td>
            <td><span class="stock-tag ${stockTagClass}">${stockTagLabel}</span></td>
            <td>
                <div class="action-buttons-cell">
                    <button class="action-icon-btn edit" onclick="openEditProductModal('${prod.id}')" title="Edit Garment"><i class="fas fa-edit"></i></button>
                    <button class="action-icon-btn delete" onclick="deleteProduct('${prod.id}')" title="Delete Garment"><i class="fas fa-trash-alt"></i></button>
                </div>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

// INVENTORY CRUD OPERATIONS
// Edit Product
function openEditProductModal(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById("admin-product-modal-title").innerText = "Modify Garment Details";
    document.getElementById("admin-product-id-val").value = product.id;
    document.getElementById("admin-product-name").value = product.name;
    document.getElementById("admin-product-category").value = product.category;
    document.getElementById("admin-product-base-price").value = product.basePrice;
    document.getElementById("admin-product-gst-rate").value = product.gstRate;
    document.getElementById("admin-product-discount").value = product.discount;
    document.getElementById("admin-product-stock").value = product.stock;
    document.getElementById("admin-product-desc").value = product.description;
    
    // Fill image paths and tags
    document.getElementById("admin-product-img1").value = product.variations[0]?.img || "";
    document.getElementById("admin-product-img1-label").value = product.variations[0]?.label || "";
    document.getElementById("admin-product-img2").value = product.variations[1]?.img || "";
    document.getElementById("admin-product-img2-label").value = product.variations[1]?.label || "";

    calculateAdminFinalPrice();

    document.getElementById("admin-product-modal").classList.add("active");
}

// Add Product Modal trigger
function openAddProductModal() {
    document.getElementById("admin-product-modal-title").innerText = "Add New Inventory Garment";
    
    // Clear form fields
    document.getElementById("admin-product-id-val").value = "";
    document.getElementById("admin-product-name").value = "";
    document.getElementById("admin-product-category").value = "men";
    document.getElementById("admin-product-base-price").value = "";
    document.getElementById("admin-product-gst-rate").value = "5";
    document.getElementById("admin-product-discount").value = "0";
    document.getElementById("admin-product-stock").value = "";
    document.getElementById("admin-product-desc").value = "";
    
    // Fill default values for images using existing assets
    document.getElementById("admin-product-img1").value = "images/mens_suit_1.png";
    document.getElementById("admin-product-img1-label").value = "Atelier Model Fit";
    document.getElementById("admin-product-img2").value = "images/mens_suit_2.png";
    document.getElementById("admin-product-img2-label").value = "Variation details";

    calculateAdminFinalPrice();

    document.getElementById("admin-product-modal").classList.add("active");
}

// Calculate storefront pricing live while typing in forms
function calculateAdminFinalPrice() {
    const basePrice = parseFloat(document.getElementById("admin-product-base-price").value) || 0;
    const gstRate = parseFloat(document.getElementById("admin-product-gst-rate").value) || 0;
    const discount = parseFloat(document.getElementById("admin-product-discount").value) || 0;

    const discountVal = basePrice * (discount / 100);
    const discountedBase = basePrice - discountVal;
    const gstVal = discountedBase * (gstRate / 100);
    const finalPrice = discountedBase + gstVal;

    document.getElementById("admin-calculated-store-price").innerText = `₹${formatCurrency(finalPrice)}`;
}

// Close Admin Product CRUD Modals
function closeAdminProductModalDirect() {
    document.getElementById("admin-product-modal").classList.remove("active");
}

function closeAdminProductModal(event) {
    if (event.target === document.getElementById("admin-product-modal")) {
        closeAdminProductModalDirect();
    }
}

// Create/Update Product Submit Handlers
function handleAdminProductSubmit(event) {
    event.preventDefault();
    
    const idVal = document.getElementById("admin-product-id-val").value;
    const name = document.getElementById("admin-product-name").value;
    const category = document.getElementById("admin-product-category").value;
    const basePrice = parseFloat(document.getElementById("admin-product-base-price").value);
    const gstRate = parseInt(document.getElementById("admin-product-gst-rate").value);
    const discount = parseInt(document.getElementById("admin-product-discount").value) || 0;
    const stock = parseInt(document.getElementById("admin-product-stock").value);
    const description = document.getElementById("admin-product-desc").value;
    
    const img1 = document.getElementById("admin-product-img1").value;
    const img1Label = document.getElementById("admin-product-img1-label").value || "Model Fit A";
    const img2 = document.getElementById("admin-product-img2").value;
    const img2Label = document.getElementById("admin-product-img2-label").value || "Model Fit B";

    const variations = [];
    if (img1) variations.push({ img: img1, label: img1Label });
    if (img2) variations.push({ img: img2, label: img2Label });

    // Fallback if variations are empty
    if (variations.length === 0) {
        variations.push({ img: "images/hero_banner.png", label: "Store Display" });
    }

    if (idVal) {
        // UPDATE Existing product
        const prodIndex = state.products.findIndex(p => p.id === idVal);
        if (prodIndex > -1) {
            state.products[prodIndex] = {
                ...state.products[prodIndex],
                name,
                category,
                basePrice,
                gstRate,
                discount,
                stock,
                description,
                variations
            };
            showToast("Garment details modified successfully.");
        }
    } else {
        // CREATE New product
        const newId = `rt-garment-${Date.now()}`;
        state.products.push({
            id: newId,
            name,
            category,
            basePrice,
            gstRate,
            discount,
            discountName: discount > 0 ? `Seasonal Offer (${discount}% OFF)` : "",
            description,
            stock,
            variations
        });
        showToast("New luxury garment added to inventory catalog.");
    }

    // Save state
    localStorage.setItem("rt_products", JSON.stringify(state.products));
    
    // Close modal & re-render
    closeAdminProductModalDirect();
    renderProducts();
    renderAdminInventoryTable();
    loadSalesReport();
}

// DELETE product
function deleteProduct(productId) {
    if (confirm("Are you sure you want to delete this product garment from store inventory catalog?")) {
        state.products = state.products.filter(p => p.id !== productId);
        localStorage.setItem("rt_products", JSON.stringify(state.products));
        renderProducts();
        renderAdminInventoryTable();
        loadSalesReport();
        showToast("Product deleted from catalog.", "info");
    }
}

// MONTHLY SALES REPORT GENERATION AND DISPLAY
function loadSalesReport() {
    const revenueEl = document.getElementById("kpi-revenue");
    const itemsSoldEl = document.getElementById("kpi-items-sold");
    const discountsEl = document.getElementById("kpi-discounts");
    const gstEl = document.getElementById("kpi-gst");
    const categorySalesContainer = document.getElementById("category-sales-list");

    if (!revenueEl) return;

    let totalRevenue = 0;
    let totalItems = 0;
    let totalDiscounts = 0;
    let totalGST = 0;
    let totalOrdersCount = state.orders.length;

    // Category tracking logs
    const categoriesSum = {
        men: { revenue: 0, items: 0 },
        women: { revenue: 0, items: 0 },
        festive: { revenue: 0, items: 0 }
    };

    // Calculate sums from order log database
    state.orders.forEach(order => {
        totalRevenue += order.grandTotal;
        totalDiscounts += (order.festiveDiscount + order.onlineDiscount);
        totalGST += order.gstTotal;

        order.items.forEach(item => {
            totalItems += item.qty;
            
            // Map item categories dynamically
            const matchingProd = DEFAULT_PRODUCTS.find(p => p.name === item.name) || 
                               state.products.find(p => p.name === item.name);
            
            const category = matchingProd ? matchingProd.category : "men";
            
            if (categoriesSum[category]) {
                categoriesSum[category].revenue += item.finalItemTotal;
                categoriesSum[category].items += item.qty;
            }
        });
    });

    // Write KPIs to panel
    revenueEl.innerText = `₹${formatCurrency(totalRevenue)}`;
    itemsSoldEl.innerText = totalItems;
    discountsEl.innerText = `₹${formatCurrency(totalDiscounts)}`;
    gstEl.innerText = `₹${formatCurrency(totalGST)}`;

    document.getElementById("stat-total-orders").innerText = totalOrdersCount;
    
    const avgBasket = totalOrdersCount > 0 ? (totalRevenue / totalOrdersCount) : 0;
    document.getElementById("stat-avg-basket").innerText = `₹${formatCurrency(avgBasket)}`;

    // Low stock count alert tracking
    const lowStockCount = state.products.filter(p => p.stock <= 5).length;
    const stockAlertEl = document.getElementById("stat-low-stock-count");
    stockAlertEl.innerText = `${lowStockCount} Items`;
    if (lowStockCount > 0) {
        stockAlertEl.classList.add("alert-text");
    } else {
        stockAlertEl.classList.remove("alert-text");
    }

    // Render Category Breakdown Bars
    categorySalesContainer.innerHTML = "";
    
    // Find highest revenue category to scale bar widths dynamically
    const maxRevenue = Math.max(
        categoriesSum.men.revenue, 
        categoriesSum.women.revenue, 
        categoriesSum.festive.revenue,
        1 // prevent divide by zero
    );

    const categoriesList = [
        { key: "men", label: "Men's Couture", colorClass: "" },
        { key: "women", label: "Women's Atelier", colorClass: "gold" },
        { key: "festive", label: "Festive Collections", colorClass: "" }
    ];

    categoriesList.forEach(cat => {
        const data = categoriesSum[cat.key];
        const percent = (data.revenue / maxRevenue) * 100;

        const breakdownRow = document.createElement("div");
        breakdownRow.className = "breakdown-row";
        breakdownRow.innerHTML = `
            <div class="breakdown-row-meta">
                <span>${cat.label} (${data.items} Sold)</span>
                <strong>₹${formatCurrency(data.revenue)}</strong>
            </div>
            <div class="breakdown-progress-container">
                <div class="breakdown-progress-fill ${cat.colorClass}" style="width: ${percent}%"></div>
            </div>
        `;
        categorySalesContainer.appendChild(breakdownRow);
    });
}

// ADMIN TABLE RENDER: CUSTOMER ORDER LOG
function renderAdminOrdersLog() {
    const tableBody = document.getElementById("orders-table-body");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    if (state.orders.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 2rem;">No orders completed yet.</td>
            </tr>
        `;
        return;
    }

    state.orders.forEach(order => {
        // Build items details cell string
        let itemsString = order.items.map(it => `${it.name} (Qty: ${it.qty})`).join(", ");

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>#${order.orderId}</strong></td>
            <td>${order.dateTime}</td>
            <td><span class="table-item-desc" title="${itemsString}">${itemsString}</span></td>
            <td>₹${formatCurrency(order.grandTotal)}</td>
            <td>₹${formatCurrency(order.festiveDiscount + order.onlineDiscount)}</td>
            <td>₹${formatCurrency(order.gstTotal)}</td>
            <td><span class="stock-tag in-stock">${order.status}</span></td>
        `;
        tableBody.appendChild(tr);
    });
}

// CONTACT INQUIRY FORM SUBMIT MOCK ACTION
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email-input").value;
    const msg = document.getElementById("contact-message").value;

    showToast(`Thank you, ${name}! Your design inquiry has been sent to Royalthreads@gmail.com.`, "success");
    
    // Clear form
    document.getElementById("contact-form").reset();
}

// MOCK SALES TRANSACTIONS DATA GENERATOR (For analytics preview)
function generateMockOrders() {
    return [
        {
            orderId: "RT-892301",
            dateTime: "03-06-2026 14:35",
            items: [
                { name: "Royal Emperor Charcoal Suit", qty: 1, size: "M", variation: "Classic Studio Fit", rate: 11999.00, gstRate: 12, discountRate: 10, finalItemTotal: 12094.99 }
            ],
            subtotal: 11999.00,
            festiveDiscount: 1199.90,
            gstTotal: 1295.89,
            onlineDiscount: 362.85,
            grandTotal: 11732.14,
            status: "Paid"
        },
        {
            orderId: "RT-783281",
            dateTime: "04-06-2026 11:20",
            items: [
                { name: "Midnight Blue Couture Gown", qty: 1, size: "S", variation: "Model Grace Pose", rate: 15499.00, gstRate: 12, discountRate: 15, finalItemTotal: 14755.05 },
                { name: "Elite Coimbatore Silk Saree", qty: 1, size: "L", variation: "Traditional Drape View", rate: 18999.00, gstRate: 5, discountRate: 15, finalItemTotal: 16956.61 }
            ],
            subtotal: 34498.00,
            festiveDiscount: 5174.70,
            gstTotal: 2577.81,
            onlineDiscount: 957.03,
            grandTotal: 30944.09,
            status: "Paid"
        }
    ];
}

// GENERAL UI HELPERS
// Show toast notifications messages
function showToast(message, type = "default") {
    const toast = document.getElementById("toast-notification");
    const toastText = document.getElementById("toast-text");
    const toastIcon = document.getElementById("toast-icon");

    if (!toast) return;

    toastText.innerText = message;
    
    // Apply type styles
    toast.className = `toast-message active ${type}`;
    
    if (type === "success") {
        toastIcon.className = "fas fa-check-circle toast-icon";
    } else if (type === "error") {
        toastIcon.className = "fas fa-exclamation-circle toast-icon";
    } else if (type === "info") {
        toastIcon.className = "fas fa-info-circle toast-icon";
    } else {
        toastIcon.className = "fas fa-shopping-bag toast-icon";
    }

    // Slide out toast after 4 seconds
    setTimeout(() => {
        toast.classList.remove("active");
    }, 4000);
}

// Format double floats to INR Currency strings
function formatCurrency(number) {
    return parseFloat(number).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Get current date string in standard format
function getCurrentDateString() {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0'); // January is 0
    const yyyy = now.getFullYear();
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    return `${dd}-${mm}-${yyyy} ${hh}:${min}`;
}
