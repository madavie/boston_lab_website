
        // Product data with actual image URLs
        const products = [
            {
                id: 1,
                name: "SSD Topix solution",
                category: "SSD CHEMICAL",
                description: "SSD Topix solution – SSD Chemical Solution",
                price: "Premium",
                rating: 5,
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 2,
                name: "DX230I activation powder solution",
                category: "FAKE BANKNOTES",
                description: "DX230I activation powder solution",
                price: "Premium",
                rating: 5,
                image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 3,
                name: "SSD Solution Automatic A929",
                category: "SSD CHEMICAL",
                description: "SSD Solution Automatic A929 – SSD Chemical",
                price: "Premium",
                rating: 5,
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 4,
                name: "SSD Tourmaline solution",
                category: "SSD CHEMICAL",
                description: "SSD Tourmaline solution – SSD Chemical Solution",
                price: "Premium",
                rating: 5,
                image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 5,
                name: "SSD-volume 1 universal Solution",
                category: "SSD CHEMICAL",
                description: "SSD-volume 1 universal Solution",
                price: "Premium",
                rating: 5,
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 6,
                name: "SSD Supreme Solution DX-1C",
                category: "SSD CHEMICAL",
                description: "SSD Supreme Solution DX-1C",
                price: "Premium",
                rating: 5,
                image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 7,
                name: "SSD Solution Automatic DX-1",
                category: "SSD CHEMICAL",
                description: "SSD Solution Automatic DX-1",
                price: "Premium",
                rating: 5,
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            }
        ];

        // Stats data
        const stats = {
            delivered: 2000,
            customers: 1890,
            experience: 10,
            orders: 2930
        };

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Load products
            loadProducts();
            
            // Animate stats
            animateStats();
            
            // Setup animations
            setupAnimations();
            
            // Smooth scrolling
            setupSmoothScrolling();
            
            // Navbar scroll effect
            setupNavbarScroll();
            
            // Auto rotate carousel
            setupCarousel();
        });

        // Load products into the container
        function loadProducts() {
            const productContainer = document.getElementById('product-container');
            let productHTML = '';
            
            products.forEach(product => {
                // Generate star rating
                let stars = '';
                for (let i = 0; i < 5; i++) {
                    if (i < product.rating) {
                        stars += '<i class="fas fa-star"></i>';
                    } else {
                        stars += '<i class="far fa-star"></i>';
                    }
                }
                
                productHTML += `
                <div class="col-md-6 col-lg-4">
                    <div class="product-card fade-in">
                        <div class="product-img" style="background-image: url('${product.image}')">
                            <div class="product-overlay"></div>
                        </div>
                        <div class="product-body">
                            <span class="product-category">${product.category}</span>
                            <h4>${product.name}</h4>
                            <p>${product.description}</p>
                            <div class="rating">${stars}</div>
                            <button class="btn btn-add-to-cart" onclick="addToCart(${product.id})">
                                <i class="fas fa-cart-plus me-2"></i>Add to Cart - ${product.price}
                            </button>
                        </div>
                    </div>
                </div>
                `;
            });
            
            productContainer.innerHTML = productHTML;
        }

        // Animate statistics counting up
        function animateStats() {
            const stat1 = document.getElementById('stat1');
            const stat2 = document.getElementById('stat2');
            const stat3 = document.getElementById('stat3');
            const stat4 = document.getElementById('stat4');
            
            // Check if element is in viewport
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
            
            // Animate a counter
            function animateCounter(element, target, duration = 2000) {
                let start = 0;
                const increment = target / (duration / 16);
                
                function updateCounter() {
                    start += increment;
                    if (start < target) {
                        element.textContent = Math.floor(start);
                        requestAnimationFrame(updateCounter);
                    } else {
                        element.textContent = target;
                    }
                }
                
                updateCounter();
            }
            
            // Check when stats section is in viewport
            function checkStatsVisibility() {
                if (isInViewport(stat1) && parseInt(stat1.textContent) === 0) {
                    animateCounter(stat1, stats.delivered);
                    animateCounter(stat2, stats.customers);
                    animateCounter(stat3, stats.experience);
                    animateCounter(stat4, stats.orders);
                }
            }
            
            // Initial check
            checkStatsVisibility();
            
            // Check on scroll
            window.addEventListener('scroll', checkStatsVisibility);
        }

        // Setup animations on scroll
        function setupAnimations() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            function checkFade() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('visible');
                    }
                });
            }
            
            // Initial check
            checkFade();
            
            // Check on scroll
            window.addEventListener('scroll', checkFade);
        }

        // Setup smooth scrolling for navigation
        function setupSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        // Update active nav link
                        document.querySelectorAll('.nav-link').forEach(link => {
                            link.classList.remove('active');
                        });
                        this.classList.add('active');
                        
                        // Scroll to target
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Update active nav link on scroll
            window.addEventListener('scroll', function() {
                const sections = document.querySelectorAll('section[id]');
                const navLinks = document.querySelectorAll('.nav-link');
                
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (scrollY >= sectionTop - 100) {
                        current = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
        }

        // Navbar background on scroll
        function setupNavbarScroll() {
            const navbar = document.querySelector('.navbar');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.style.padding = '10px 0';
                    navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
                    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                } else {
                    navbar.style.padding = '15px 0';
                    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                }
            });
        }

        // Setup carousel auto rotation
        function setupCarousel() {
            const carousel = document.getElementById('heroCarousel');
            if (carousel) {
                // Auto rotate every 5 seconds
                setInterval(() => {
                    const carouselInstance = bootstrap.Carousel.getInstance(carousel);
                    if (carouselInstance) {
                        carouselInstance.next();
                    }
                }, 5000);
            }
        }

        // Add to cart function
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                // Animation effect
                const button = event.target;
                const originalText = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check me-2"></i>Added to Cart';
                button.style.background = 'linear-gradient(to right, #2e7d32, #4caf50)';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.style.background = 'linear-gradient(to right, var(--primary-blue), var(--secondary-blue))';
                }, 2000);
                
                // Alert message
                setTimeout(() => {
                    alert(`"${product.name}" has been added to your cart. Please contact us via WhatsApp to complete your order.`);
                }, 500);
            }
        }

          // Set dynamic copyright year
        function updateCopyrightYear() {
        const copyrightElement = document.querySelector('.copyright p');
        if (copyrightElement) {
            const currentYear = new Date().getFullYear();
            copyrightElement.innerHTML = `Copyright © ${currentYear} | SSD Solutions Automatique | Boston Universal Chemical Analysis Laboratory`;
        }
    }

    updateCopyrightYear();