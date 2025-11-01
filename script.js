// Portfolio Website JavaScript

// ============================================
// Dark Mode Toggle
// ============================================
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        html.classList.add('dark');
    }
    
    const toggleDarkMode = () => {
        html.classList.toggle('dark');
        const theme = html.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    };
    
    if (darkModeToggle) darkModeToggle.addEventListener('click', toggleDarkMode);
    if (darkModeToggleMobile) darkModeToggleMobile.addEventListener('click', toggleDarkMode);
}

// ============================================
// Mobile Menu Toggle
// ============================================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('show');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking a link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('show');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

// ============================================
// Smooth Scroll Navigation
// ============================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offset = 80; // Account for fixed navbar
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Active Nav Link Highlighting
// ============================================
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    function updateActiveNav() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('text-blue-600', 'dark:text-blue-400');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('text-blue-600', 'dark:text-blue-400');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
}

// ============================================
// Navbar Scroll Effect
// ============================================
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================================
// Animated Counters with Smooth Easing
// ============================================
let countersAnimated = false; // Global flag to track if counters have been animated

function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (counters.length === 0) return;
    
    // Reset if we want to re-animate (useful when config updates values)
    const shouldReset = !countersAnimated || document.querySelectorAll('.counter[data-reset="true"]').length > 0;
    if (shouldReset) {
        countersAnimated = false;
        counters.forEach(counter => {
            counter.removeAttribute('data-reset');
        });
    }
    
    // Easing function for smooth animation
    function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }
    
    function animateCounters() {
        if (countersAnimated) return;
        
        const aboutSection = document.getElementById('about');
        if (!aboutSection) return;
        
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 200) {
            countersAnimated = true;
            
            counters.forEach((counter, index) => {
                const target = parseInt(counter.getAttribute('data-target')) || 0;
                const duration = 2500; // 2.5 seconds for smooth animation
                const startTime = Date.now();
                
                // Add initial scale animation
                counter.style.transform = 'scale(1.2)';
                counter.style.opacity = '0.7';
                
                const updateCounter = () => {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Apply easing function
                    const easedProgress = easeOutQuart(progress);
                    const current = Math.floor(target * easedProgress);
                    
                    counter.textContent = current;
                    
                    // Scale animation during counting
                    const scale = 1 + (0.2 * Math.sin(progress * Math.PI * 2));
                    counter.style.transform = `scale(${1 + (progress * 0.2)})`;
                    counter.style.opacity = 0.7 + (progress * 0.3);
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        // Final state
                        counter.textContent = target;
                        counter.style.transform = 'scale(1)';
                        counter.style.opacity = '1';
                        
                        // Add completion pulse
                        counter.parentElement.classList.add('counter-complete');
                    }
                };
                
                // Stagger animation start
                setTimeout(() => {
                    updateCounter();
                }, index * 150);
            });
        }
    }
    
    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                animateCounters();
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        observer.observe(aboutSection);
    }
    
    // Also check on load in case section is already visible
    if (!countersAnimated) {
        window.addEventListener('load', () => {
            setTimeout(animateCounters, 500);
        });
        // Initial check
        setTimeout(animateCounters, 100);
    }
}

// ============================================
// Progress Bar Animation
// ============================================
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    let hasAnimated = false;
    
    function animateProgressBars() {
        if (hasAnimated) return;
        
        const skillsSection = document.getElementById('skills');
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 200) {
            hasAnimated = true;
            
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        }
    }
    
    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars(); // Check on load
}

// ============================================
// Portfolio Filter
// ============================================
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-blue-600', 'text-white');
                btn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
            });
            
            button.classList.add('active', 'bg-blue-600', 'text-white');
            button.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
            
            // Filter portfolio items
            const filter = button.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });
}

// ============================================
// Scroll Reveal Animation
// ============================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.skill-card, .service-card, .portfolio-item, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        element.classList.add('reveal');
        observer.observe(element);
    });
}

// ============================================
// Back to Top Button
// ============================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ============================================
// Contact Form Validation & Submission
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset messages
            formSuccess.classList.add('hidden');
            formError.classList.add('hidden');
            
            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const projectType = document.getElementById('projectType');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            // Validate name
            if (name.value.trim() === '') {
                showError(name, 'Name is required');
                isValid = false;
            } else {
                clearError(name);
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                showError(email, 'Email is required');
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                showError(email, 'Please enter a valid email address');
                isValid = false;
            } else {
                clearError(email);
            }
            
            // Validate project type
            if (projectType.value === '') {
                showError(projectType, 'Please select a project type');
                isValid = false;
            } else {
                clearError(projectType);
            }
            
            // Validate message
            if (message.value.trim() === '') {
                showError(message, 'Message is required');
                isValid = false;
            } else {
                clearError(message);
            }
            
            if (isValid) {
                // Simulate form submission
                // In a real application, you would send this to a server
                const formData = {
                    name: name.value,
                    email: email.value,
                    projectType: projectType.value,
                    message: message.value
                };
                
                console.log('Form submitted:', formData);
                
                // Show success message
                formSuccess.classList.remove('hidden');
                form.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.add('hidden');
                }, 5000);
                
                // Here you would typically send the data to your backend:
                // fetch('/api/contact', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(formData)
                // })
                // .then(response => response.json())
                // .then(data => {
                //     formSuccess.classList.remove('hidden');
                //     form.reset();
                // })
                // .catch(error => {
                //     formError.classList.remove('hidden');
                // });
            }
        });
    }
}

function showError(field, message) {
    const errorSpan = field.parentElement.querySelector('.error-message');
    if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.classList.remove('hidden');
        errorSpan.classList.add('show');
        field.classList.add('border-red-500');
    }
}

function clearError(field) {
    const errorSpan = field.parentElement.querySelector('.error-message');
    if (errorSpan) {
        errorSpan.classList.add('hidden');
        errorSpan.classList.remove('show');
        field.classList.remove('border-red-500');
    }
}

// ============================================
// Populate Content from Config
// ============================================
function populateFromConfig() {
    if (!window.portfolioConfig) {
        console.warn('Config file not loaded. Using default content.');
        return;
    }
    
    const config = window.portfolioConfig;
    
    // Populate Hero Section
    populateHero(config);
    
    // Populate Brand Name
    populateBrandName(config);
    
    // Populate About Section
    populateAbout(config);
    
    // Populate Statistics
    populateStatistics(config);
    
    // Populate Skills
    populateSkills(config);
    
    // Populate Services
    populateServices(config);
    
    // Populate Portfolio
    populatePortfolio(config);
    
    // Populate Testimonials
    populateTestimonials(config);
    
    // Populate Contact
    populateContact(config);
    
    // Populate Social Links
    populateSocialLinks(config);
}

function populateHero(config) {
    const heroTitle = document.querySelector('#home h1');
    const heroTagline = document.querySelector('#home p.text-xl.md\\:text-2xl');
    const heroDescription = document.querySelector('#home p.text-lg.md\\:text-xl.text-gray-600');
    
    if (heroTitle) {
        heroTitle.innerHTML = `<span class="gradient-text">${config.personal.name}</span>`;
    }
    if (heroTagline) {
        heroTagline.textContent = config.personal.tagline;
    }
    if (heroDescription) {
        heroDescription.textContent = config.personal.description;
    }
    
    // Update page title and meta description
    document.title = `${config.personal.name} Portfolio | ${config.personal.tagline}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = config.personal.description;
    }
}

function populateBrandName(config) {
    // Update brand logo text
    const brandLogoText = document.querySelector('.brand-logo-text');
    if (brandLogoText) {
        brandLogoText.textContent = config.personal.brandName;
    }
    
    // Footer brand
    const footerBrand = document.querySelector('footer .gradient-text');
    if (footerBrand) {
        footerBrand.textContent = config.personal.brandName;
    }
}

function populateAbout(config) {
    // Update bio
    const bioParagraphs = document.querySelectorAll('#about p.text-lg');
    if (bioParagraphs.length >= 2) {
        const bioText = config.personal.bio.split('\n\n');
        bioParagraphs[0].textContent = bioText[0] || '';
        if (bioText[1]) {
            bioParagraphs[1].textContent = bioText[1];
        }
    }
    
    // Update profile photo
    if (config.personal.photo) {
        const photoContainer = document.querySelector('#about .rounded-full .flex.items-center');
        if (photoContainer) {
            photoContainer.innerHTML = `<img src="${config.personal.photo}" alt="${config.personal.name}" class="w-full h-full object-cover rounded-full">`;
        }
    }
    
    // Update Why Choose Me
    const whyChooseList = document.querySelectorAll('#about .flex.items-center span');
    if (whyChooseList.length >= 4) {
        config.whyChooseMe.forEach((item, index) => {
            if (whyChooseList[index]) {
                whyChooseList[index].textContent = item;
            }
        });
    }
}

function populateStatistics(config) {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const statCard = counter.closest('.statistics-card');
        if (!statCard) return;
        
        const statText = statCard.querySelector('div:last-child').textContent.toLowerCase();
        let targetValue = 0;
        
        if (statText.includes('project')) {
            targetValue = config.statistics.projectsCompleted;
        } else if (statText.includes('client') && statText.includes('happy')) {
            targetValue = config.statistics.happyClients;
        } else if (statText.includes('experience')) {
            targetValue = config.statistics.yearsExperience;
        } else if (statText.includes('satisfaction')) {
            targetValue = config.statistics.clientSatisfaction;
        }
        
        if (targetValue > 0) {
            counter.setAttribute('data-target', targetValue);
            counter.textContent = '0'; // Reset to 0 for animation
        }
    });
    
    // Mark counters for re-animation after populating from config
    setTimeout(() => {
        // Reset animation state to allow re-animation
        countersAnimated = false;
        
        // Reset all counters visual state
        counters.forEach(counter => {
            counter.textContent = '0';
            counter.style.transform = '';
            counter.style.opacity = '';
            counter.setAttribute('data-reset', 'true');
        });
        
        // Reinitialize counters with new values
        initCounters();
    }, 200);
}

function populateSkills(config) {
    const skillsContainer = document.querySelector('#skills .grid');
    if (!skillsContainer) return;
    
    skillsContainer.innerHTML = config.skills.map(skill => {
        const colorClasses = {
            blue: 'from-blue-600 to-purple-600',
            green: 'from-green-600 to-teal-600',
            purple: 'from-purple-600 to-pink-600',
            orange: 'from-orange-600 to-red-600',
            indigo: 'from-indigo-600 to-blue-600',
            teal: 'from-teal-600 to-cyan-600'
        };
        
        const bgColorClasses = {
            blue: 'bg-blue-100 dark:bg-blue-900',
            green: 'bg-green-100 dark:bg-green-900',
            purple: 'bg-purple-100 dark:bg-purple-900',
            orange: 'bg-orange-100 dark:bg-orange-900',
            indigo: 'bg-indigo-100 dark:bg-indigo-900',
            teal: 'bg-teal-100 dark:bg-teal-900'
        };
        
        const textColorClasses = {
            blue: 'text-blue-600 dark:text-blue-400',
            green: 'text-green-600 dark:text-green-400',
            purple: 'text-purple-600 dark:text-purple-400',
            orange: 'text-orange-600 dark:text-orange-400',
            indigo: 'text-indigo-600 dark:text-indigo-400',
            teal: 'text-teal-600 dark:text-teal-400'
        };
        
        const colorClass = colorClasses[skill.iconColor] || colorClasses.blue;
        const bgClass = bgColorClasses[skill.iconColor] || bgColorClasses.blue;
        const textClass = textColorClasses[skill.iconColor] || textColorClasses.blue;
        
        return `
            <div class="skill-card bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div class="text-center mb-6">
                    <div class="w-20 h-20 ${bgClass} rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="${skill.icon} text-4xl ${textClass}"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">${skill.name}</h3>
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
                        <div class="progress-bar bg-gradient-to-r ${colorClass} h-3 rounded-full" data-width="${skill.percentage}"></div>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400">${skill.percentage}%</p>
                </div>
                <p class="text-gray-600 dark:text-gray-400 text-center">${skill.description}</p>
            </div>
        `;
    }).join('');
    
    // Reinitialize progress bars after population
    setTimeout(() => {
        initProgressBars();
        initScrollReveal();
    }, 100);
}

function populateServices(config) {
    const servicesContainer = document.querySelector('#services .grid');
    if (!servicesContainer) return;
    
    servicesContainer.innerHTML = config.services.map(service => {
        const gradientClasses = {
            blue: 'from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700',
            green: 'from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-700',
            purple: 'from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700',
            orange: 'from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700',
            indigo: 'from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700',
            teal: 'from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700'
        };
        
        const borderClasses = {
            blue: 'hover:border-blue-500 dark:hover:border-purple-500',
            green: 'hover:border-green-500 dark:hover:border-teal-500',
            purple: 'hover:border-purple-500 dark:hover:border-pink-500',
            orange: 'hover:border-orange-500 dark:hover:border-red-500',
            indigo: 'hover:border-indigo-500 dark:hover:border-blue-500',
            teal: 'hover:border-teal-500 dark:hover:border-cyan-500'
        };
        
        const iconColorClasses = {
            blue: 'text-blue-600 dark:text-blue-400',
            green: 'text-green-600 dark:text-green-400',
            purple: 'text-purple-600 dark:text-purple-400',
            orange: 'text-orange-600 dark:text-orange-400',
            indigo: 'text-indigo-600 dark:text-indigo-400',
            teal: 'text-teal-600 dark:text-teal-400'
        };
        
        const gradientClass = gradientClasses[service.iconColor] || gradientClasses.blue;
        const borderClass = borderClasses[service.iconColor] || borderClasses.blue;
        const iconClass = iconColorClasses[service.iconColor] || iconColorClasses.blue;
        
        const featuresList = service.features.map(feature => 
            `<li><i class="fas fa-check text-green-500 mr-2"></i>${feature}</li>`
        ).join('');
        
        // CTA button text - customizable per service or use default
        const ctaText = service.ctaText || "Order Now";
        const ctaLink = service.ctaLink || "#contact";
        const ctaIcon = service.ctaIcon || "fas fa-shopping-cart";
        
        // Badge HTML
        let badgeHTML = '';
        if (service.badge) {
            const badgeTexts = {
                'most-selling': 'Most Selling',
                'recommended': 'Recommended to start e-commerce',
                'new': 'New'
            };
            const badgeText = badgeTexts[service.badge] || service.badge;
            badgeHTML = `<div class="service-badge ${service.badge}">${badgeText}</div>`;
        }
        
        return `
            <div class="service-card bg-gradient-to-br ${gradientClass} dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-transparent ${borderClass}">
                ${badgeHTML}
                <!-- Service Content -->
                <div class="service-card-content">
                    <div class="text-5xl mb-6 ${iconClass}">
                        <i class="${service.icon}"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">${service.title}</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-6">${service.description}</p>
                    <ul class="space-y-2 text-gray-600 dark:text-gray-400">
                        ${featuresList}
                    </ul>
                </div>
                
                <!-- CTA Overlay (appears on hover) -->
                <div class="service-card-overlay">
                    <p class="service-card-cta-text">Ready to get started?</p>
                    <a href="${ctaLink}" class="service-card-cta-button">
                        <i class="${ctaIcon}"></i>
                        <span>${ctaText}</span>
                    </a>
                </div>
            </div>
        `;
    }).join('');
    
    setTimeout(() => {
        initScrollReveal();
    }, 100);
}

function populatePortfolio(config) {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = config.projects.map(project => {
        const gradientClasses = {
            blue: 'from-blue-400 to-purple-600',
            green: 'from-green-400 to-teal-600',
            purple: 'from-purple-400 to-pink-600',
            orange: 'from-orange-400 to-red-600',
            indigo: 'from-indigo-400 to-blue-600',
            teal: 'from-teal-400 to-cyan-600',
            yellow: 'from-yellow-400 to-orange-600',
            pink: 'from-pink-400 to-rose-600'
        };
        
        const gradientClass = gradientClasses[project.gradientFrom] || gradientClasses.blue;
        
        const tagsHtml = project.tags.map(tag => {
            const tagColors = {
                'WordPress': 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
                'WooCommerce': 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
                'Shopify': 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
                'Custom Theme': 'bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400',
                'AI Chatbot': 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
                'ChatGPT': 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400',
                'AI': 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
                'Automation': 'bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400',
                'Multi-vendor': 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400',
                'B2B': 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
                'Apps': 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
            };
            
            const colorClass = tagColors[tag] || 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400';
            return `<span class="px-3 py-1 ${colorClass} rounded-full text-sm font-semibold">${tag}</span>`;
        }).join('');
        
        const linkColor = project.category === 'wordpress' ? 'text-blue-600 dark:text-blue-400' :
                          project.category === 'shopify' ? 'text-green-600 dark:text-green-400' :
                          'text-purple-600 dark:text-purple-400';
        
        const imageHtml = project.image 
            ? `<img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">`
            : `<i class="${project.category === 'wordpress' ? 'fab fa-wordpress' : project.category === 'shopify' ? 'fab fa-shopify' : 'fas fa-robot'} text-6xl text-white opacity-80"></i>`;
        
        return `
            <div class="portfolio-item bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300" data-category="${project.category}">
                <div class="h-48 bg-gradient-to-br ${gradientClass} flex items-center justify-center">
                    ${imageHtml}
                </div>
                <div class="p-6">
                    <div class="flex flex-wrap gap-2 mb-3">
                        ${tagsHtml}
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">${project.title}</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">${project.description}</p>
                    <a href="${project.link}" class="${linkColor} font-semibold hover:underline">
                        View Details <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        `;
    }).join('');
    
    setTimeout(() => {
        initScrollReveal();
        initPortfolioFilter();
    }, 100);
}

function populateTestimonials(config) {
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    if (!testimonialsContainer) return;
    
    testimonialsContainer.innerHTML = config.testimonials.map(testimonial => {
        const stars = Array(testimonial.rating).fill('<i class="fas fa-star"></i>').join('');
        const gradientClasses = {
            blue: 'from-blue-400 to-purple-600',
            green: 'from-green-400 to-teal-600',
            purple: 'from-purple-400 to-pink-600',
            orange: 'from-orange-400 to-red-600'
        };
        
        const gradientClass = gradientClasses[testimonial.gradientFrom] || gradientClasses.blue;
        
        return `
            <div class="testimonial-card bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div class="flex items-center mb-4">
                    <div class="flex text-yellow-400 text-lg">
                        ${stars}
                    </div>
                </div>
                <p class="text-gray-700 dark:text-gray-300 mb-6 italic">"${testimonial.text}"</p>
                <div class="flex items-center">
                    <div class="w-12 h-12 bg-gradient-to-br ${gradientClass} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        ${testimonial.initials}
                    </div>
                    <div>
                        <div class="font-bold text-gray-800 dark:text-white">${testimonial.author}</div>
                        <div class="text-sm text-gray-600 dark:text-gray-400">${testimonial.position}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    setTimeout(() => {
        initScrollReveal();
    }, 100);
}

function populateContact(config) {
    // Update availability status
    const availabilityStatus = document.querySelector('#contact .bg-green-500');
    if (availabilityStatus) {
        availabilityStatus.parentElement.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="w-3 h-3 ${config.personal.availableForProjects ? 'bg-green-500' : 'bg-red-500'} rounded-full mr-3 ${config.personal.availableForProjects ? 'animate-pulse' : ''}"></div>
                <span class="text-gray-700 dark:text-gray-300 font-semibold">${config.personal.availableForProjects ? 'Available for Projects' : 'Currently Unavailable'}</span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm">${config.personal.responseTime}</p>
        `;
    }
    
    // Update quick info
    const quickInfoItems = document.querySelectorAll('#contact .flex.items-start span');
    if (quickInfoItems.length >= 3) {
        quickInfoItems[0].textContent = `Location: ${config.personal.location}`;
        quickInfoItems[1].textContent = `Timezone: ${config.personal.timezone}`;
        quickInfoItems[2].textContent = `Languages: ${config.personal.languages}`;
    }
    
    // Update contact form action if using Formspree
    const contactForm = document.getElementById('contactForm');
    if (contactForm && config.contactForm.formspreeId) {
        contactForm.action = `https://formspree.io/f/${config.contactForm.formspreeId}`;
        contactForm.method = 'POST';
    }
}

function populateSocialLinks(config) {
    // Update LinkedIn
    const linkedinLinks = document.querySelectorAll('a[href*="linkedin"]');
    linkedinLinks.forEach(link => {
        link.href = config.socialLinks.linkedin;
    });
    
    // Update GitHub
    const githubLinks = document.querySelectorAll('a[href*="github"]');
    githubLinks.forEach(link => {
        link.href = config.socialLinks.github;
    });
    
    // Update Email
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.href = config.socialLinks.email;
    });
    
    // Update WhatsApp
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.href = config.socialLinks.whatsapp;
    });
}

// ============================================
// Current Year for Footer
// ============================================
function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ============================================
// Page Load Animation
// ============================================
function initPageLoad() {
    // Remove loading screen after page loads
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
}

// ============================================
// Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Populate content from config first
    populateFromConfig();
    
    // Then initialize all interactive features
    initDarkMode();
    initMobileMenu();
    initSmoothScroll();
    initActiveNav();
    initNavbarScroll();
    initCounters();
    initProgressBars();
    initPortfolioFilter();
    initScrollReveal();
    initBackToTop();
    initContactForm();
    updateCurrentYear();
    initPageLoad();
});

// ============================================
// Performance Optimization: Debounce Function
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events for better performance
const optimizedScrollHandler = debounce(() => {
    // Scroll-based functions are already optimized
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);
