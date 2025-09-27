document.addEventListener('DOMContentLoaded', function() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    // Get products from localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];
    
    if (!productId || !products.length) {
        window.location.href = 'products.html';
        return;
    }
    
    // Find the selected product
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        window.location.href = 'products.html';
        return;
    }
    
    // Update breadcrumb
    const breadcrumbName = document.getElementById('product-breadcrumb-name');
    if (breadcrumbName) {
        breadcrumbName.textContent = product.name;
    }
    
    // Display product details
    const productDetailContainer = document.getElementById('product-detail');
    if (productDetailContainer) {
        productDetailContainer.innerHTML = `
            <div class="product-gallery">
                <div class="product-main-image">
                    <img src="${product.image}" alt="${product.name}" id="main-product-image">
            </div>
            <div class="product-info-container">
                <h1>${product.name}</h1>
                <p class="product-price">${product.price}</p>
                <div class="product-description">
                    <p><span style="font-weight: 600;">Product detail:</span> ${product.description}</p>
                </div>
                <div class="product-meta">
                    <div class="product-meta-item">
                        <span class="meta-label">Category:</span>
                        <span class="meta-value">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                    </div>
                    <div class="product-meta-item">
                        <span class="meta-label">Collection:</span>
                        <span class="meta-value">Spring/Summer 2025</span>
                    </div>
                    <div class="product-meta-item">
                        <span class="meta-label">SKU:</span>
                        <span class="meta-value">CW${product.id.toString().padStart(4, '0')}</span>
                    </div>
                </div>
                <div class="product-form">
                    <div class="form-group">
                        <label for="product-size">Size</label>
                        <select id="product-size" name="size">
                            <option value="s">Small</option>
                            <option value="m" selected>Medium</option>
                            <option value="l">Large</option>
                            <option value="xl">X-Large</option>
                        </select>
                    </div>
                    <div class="quantity-selector">
                        <label>Quantity</label>
                        <div class="quantity-controls">
                            <button type="button" class="quantity-btn decrease">-</button>
                            <input type="number" class="quantity-input" value="1" min="1" max="10">
                            <button type="button" class="quantity-btn increase">+</button>
                        </div>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-secondary" id="add-to-cart">Add to Cart</button>
                        <button class="btn btn-primary" id="order-now">Order Now</button>
                    </div>
                </div>
            </div>
        `;
        
        // Set up thumbnail gallery
        const mainImage = document.getElementById('main-product-image');
        const thumbnails = document.querySelectorAll('.product-thumbnail');
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Update active class
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Update main image
                const imageUrl = this.getAttribute('data-image');
                mainImage.src = imageUrl;
            });
        });
        
        // Set up quantity controls
        const quantityInput = document.querySelector('.quantity-input');
        const decreaseBtn = document.querySelector('.decrease');
        const increaseBtn = document.querySelector('.increase');
        
        if (quantityInput && decreaseBtn && increaseBtn) {
            decreaseBtn.addEventListener('click', function() {
                let value = parseInt(quantityInput.value);
                if (value > 1) {
                    quantityInput.value = value - 1;
                }
            });
            
            increaseBtn.addEventListener('click', function() {
                let value = parseInt(quantityInput.value);
                if (value < 10) {
                    quantityInput.value = value + 1;
                }
            });
            
            quantityInput.addEventListener('change', function() {
                let value = parseInt(this.value);
                if (value < 1) this.value = 1;
                if (value > 10) this.value = 10;
            });
        }
        
        // Set up Add to Cart and Order Now buttons
        const addToCartBtn = document.getElementById('add-to-cart');
        const orderNowBtn = document.getElementById('order-now');
        
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', function() {
                const size = document.getElementById('product-size').value;
                const quantity = parseInt(document.querySelector('.quantity-input').value);
                
                // Simulate adding to cart
                alert(`Added to cart: ${quantity} ${product.name} (Size: ${size.toUpperCase()})`);
            });
        }
        
        if (orderNowBtn) {
            orderNowBtn.addEventListener('click', function() {
                const size = document.getElementById('product-size').value;
                const quantity = parseInt(document.querySelector('.quantity-input').value);
                
                // Simulate immediate checkout
                alert(`Proceeding to checkout: ${quantity} ${product.name} (Size: ${size.toUpperCase()})`);
            });
        }
    }
    
    // Display related products
    const relatedProductsContainer = document.getElementById('related-products');
    if (relatedProductsContainer) {
        // Get 4 products from the same category (excluding current product)
        let relatedProducts = products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 3);
        
        // If we don't have enough related products, add some from other categories
        if (relatedProducts.length < 3) {
            const additionalProducts = products
                .filter(p => p.category !== product.category && p.id !== product.id)
                .slice(0, 3 - relatedProducts.length);
            
            relatedProducts = [...relatedProducts, ...additionalProducts];
        }
        
        relatedProductsContainer.innerHTML = '';
        
        relatedProducts.forEach(relatedProduct => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${relatedProduct.image}" alt="${relatedProduct.name}">
                </div>
                <div class="product-info">
                    <h3>${relatedProduct.name}</h3>
                    <p class="product-price">${relatedProduct.price}</p>
                    <a href="product-detail.html?id=${relatedProduct.id}" class="btn btn-secondary">View Details</a>
                </div>
            `;
            
            relatedProductsContainer.appendChild(productCard);
        });
    }
});