document.addEventListener('DOMContentLoaded', function() {
    // Product data
    const products = [
        {
            id: 1,
            name: "Summer Haybale Blazer",
            category: "women",
            price: "$7,999",
            image: "Images/CL10-removebg-preview.png",
            description: "Step into effortless elegance with the Summer Haybale Blazer - a statement piece inspired by the natural tones of golden summer fields. Its luxurious faux fur texture brings warmth and sophistication, while the soft satin interior ensures comfort with every wear. Finished with a classic black velvet bow, this blazer is perfect for evening glamour or high-fashion moments."
        },
        {
            id: 2,
            name: "Denim Chain Skirt",
            category: "women",
            price: "$3,999",
            image: "Images/CL8-removebg-preview.png",
            description: "Make a bold statement with the Denim Chain Skirt – where edgy meets chic in perfect harmony. Crafted from high-quality denim, this skirt combines timeless durability with modern flair. The standout feature? A striking chain detail that wraps around the waist, adding a touch of metallic elegance to the classic denim look. Its flattering A-line silhouette offers comfort and movement, making it perfect for everything from casual outings to more fashion-forward events. Pair it with a tucked-in tee or dress it up with a sleek blouse – this skirt is designed to turn heads."
        },
        {
            id: 3,
            name: "Airism Tuxedo",
            category: "men",
            price: "$599",
            image: "Images/CL5-removebg-preview.png",
            description: "Step into modern sophistication with the Airism Tuxedo – a sleek fusion of classic elegance and innovative comfort. Made from Airism fabric, this tuxedo offers breathability and moisture-wicking properties, ensuring you stay cool and comfortable all day or night. The crisp, tailored fit creates a sharp silhouette, while the subtle sheen of the fabric adds a refined touch. Featuring a timeless lapel design and sophisticated black accents, this tuxedo is perfect for formal events, upscale gatherings, or any occasion where you want to make a polished impression without sacrificing comfort.."
        },
        {
            id: 4,
            name: "Sunpearl Dress",
            category: "women",
            price: "$1,499",
            image: "Images/cl1-removebg-preview.png",
            description: "Radiate effortless beauty with the Sunpearl Dress – a stunning fusion of elegance and grace. Crafted from lightweight, flowing fabric, this dress catches the light with a soft, pearlescent sheen that mimics the glow of a summer sunset. Its flattering A-line silhouette cinches at the waist, creating a timeless shape that moves beautifully with every step. The delicate detailing, from the subtle pleats to the graceful neckline, adds a refined touch that elevates its simple yet striking design. Perfect for garden parties, evening soirees, or any occasion where you want to shine, the Sunpearl Dress brings understated glamour to life."
        },
        {
            id: 5,
            name: "Cotton UV Protection Tuxedo",
            category: "men",
            price: "$499",
            image: "Images/CL2-removebg-preview.png",
            description: "Elevate your wardrobe with the Cotton UV Protection Tuxedo – a perfect blend of refined style and innovative protection. Made from breathable cotton fabric, this tuxedo not only offers classic elegance but also shields you from harmful UV rays, making it ideal for outdoor events. The crisp, tailored fit defines your silhouette, while the smart design features subtle details, such as sharp lapels and sleek buttons, adding sophistication. Whether attending a formal wedding or a daytime gala, this tuxedo keeps you cool, comfortable, and confidently stylish, all while providing an extra layer of protection against the sun’s rays."
        },
        {
            id: 6,
            name: "Leather Coat",
            category: "women",
            price: "$7,999",
            image: "Images/CL3REP-removebg-preview.png",
            description: "Unleash timeless style with the Leather Coat – a bold statement piece that blends rugged sophistication with effortless elegance. Crafted from premium leather, this coat offers a sleek, smooth finish that ages beautifully with wear. The tailored cut provides a sharp, flattering silhouette, while the sturdy yet soft material ensures both warmth and durability. Featuring classic details like metal buttons and a notched collar, this coat transitions seamlessly from day to night, adding an edge to any outfit. Perfect for everything from casual outings to more formal occasions, the Leather Coat is a must-have for anyone looking to make a lasting impression."
        },
        {
            id: 7,
            name: "Ostrich Skin Folded Neck Tuxedo",
            category: "men",
            price: "$19,999",
            image: "Images/CL4-removebg-preview.png",
            description: "Make a striking impression with the Ostrich Skin Folded Neck Tuxedo – a masterpiece of luxury and bold design. Crafted from genuine ostrich leather, known for its unique texture and durability, this tuxedo combines classic elegance with an undeniable edge. The standout folded neck collar adds a contemporary twist, exuding confidence and sophistication. The sleek, tailored fit enhances your silhouette, while the rich, exotic pattern of the ostrich skin gives the tuxedo a distinctive look that sets you apart from the crowd. Perfect for high-end events or exclusive gatherings, this tuxedo elevates any formal occasion to new heights of style and craftsmanship."
        },
        {
            id: 8,
            name: "Leather Jacket",
            category: "women",
            price: "$5,999",
            image: "Images/CL6-removebg-preview.png",
            description: "Embrace effortless cool with the Leather Jacket – a timeless essential that never goes out of style. Crafted from high-quality, supple leather, this jacket offers the perfect blend of durability and comfort. Its sleek, tailored fit enhances your silhouette, while the classic design – featuring zippered pockets, a stand-up collar, and sturdy metal hardware – adds a touch of rugged sophistication. Whether paired with jeans for a casual look or layered over a smart outfit for a night out, this leather jacket effortlessly elevates any ensemble, making it the ultimate go-to piece for every wardrobe."
        },
        {
            id: 9,
            name: "Suede Blouse",
            category: "footwear",
            price: "$4,399",
            image: "Images/CL7-removebg-preview.png",
            description: "Embrace understated luxury with the Suede Blouse – a timeless wardrobe essential that exudes elegance and versatility. Crafted from sumptuously soft suede, this blouse boasts a rich, textured finish that feels as indulgent as it looks. Its sleek, tailored fit flatters every silhouette, while the gentle drape adds a touch of fluidity. Whether dressed up for a night out or paired casually with denim, this blouse effortlessly elevates any look. The subtle sheen and refined design make it an ideal choice for both day-to-night transitions and sophisticated style.."
        },
        {
            id: 10,
            name: "Fermented Crocodile Skin Jacket",
            category: "women",
            price: "$14,999",
            image: "Images/CL9-removebg-preview.png",
            description: "Step into bold luxury with the Fermented Crocodile Skin Jacket – a true statement of high fashion and exotic craftsmanship. Made from meticulously fermented crocodile skin, this jacket boasts a unique texture that exudes sophistication and strength. The natural sheen of the skin is enhanced by its distinctive pattern, giving each jacket a one-of-a-kind look. With a modern, tailored fit and sleek detailing, including sturdy zippers and subtle stitchwork, this jacket adds an edgy yet refined touch to any wardrobe. Perfect for those who want to stand out and make a lasting impression, the Fermented Crocodile Skin Jacket is a timeless investment in both style and exclusivity."
        }
    ];
    
    // Function to display products
    function displayProducts(productList) {
        const productsContainer = document.getElementById('products-container');
        if (!productsContainer) return;
        
        productsContainer.innerHTML = '';
        
        productList.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-price">${product.price}</p>
                    <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-secondary">View Details</a>
                </div>
            `;
            
            productsContainer.appendChild(productCard);
        });
    }
    
    // Display all products initially
    displayProducts(products);
    
    const video = document.getElementById('brand-video');
    const playButton = document.getElementById('play-btn');

    if (video && playButton) {
        playButton.addEventListener('click', function () {
            if (video.paused) {
                video.play();
                playButton.innerHTML = '<span class="play-icon">⏸</span>';
            } else {
                video.pause();
                playButton.innerHTML = '<span class="play-icon">▶</span>';
            }
        });

        video.addEventListener('ended', function () {
            playButton.innerHTML = '<span class="play-icon">▶</span>';
        });

        video.addEventListener('pause', function () {
            playButton.innerHTML = '<span class="play-icon">▶</span>';
        });

        video.addEventListener('play', function () {
            playButton.innerHTML = '<span class="play-icon">⏸</span>';
        });
    }
    
    // Filtering functionality
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    if (categoryFilter && sortFilter) {
        function filterAndSortProducts() {
            let filteredProducts = [...products];
            
            // Apply category filter
            if (categoryFilter.value !== 'all') {
                filteredProducts = filteredProducts.filter(product => product.category === categoryFilter.value);
            }
            
            // Apply sort filter
            switch (sortFilter.value) {
                case 'price-high':
                    filteredProducts.sort((a, b) => parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', '')));
                    break;
                case 'price-low':
                    filteredProducts.sort((a, b) => parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', '')));
                    break;
                case 'popular':
                    // Simulating a popularity sort by id for demo purposes
                    filteredProducts.sort((a, b) => a.id - b.id);
                    break;
                case 'newest':
                default:
                    // Simulating a newest sort by reversing ids for demo purposes
                    filteredProducts.sort((a, b) => b.id - a.id);
                    break;
            }
            
            displayProducts(filteredProducts);
        }
        
        categoryFilter.addEventListener('change', filterAndSortProducts);
        sortFilter.addEventListener('change', filterAndSortProducts);
    }
    
    // Store products in localStorage for use in product-detail.js
    localStorage.setItem('products', JSON.stringify(products));
});