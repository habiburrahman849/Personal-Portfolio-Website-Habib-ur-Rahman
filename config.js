// ============================================
// Portfolio Configuration File
// ============================================
// This file contains all customizable content for your portfolio.
// Simply update the values below and save - no HTML editing needed!

const portfolioConfig = {
    // ============================================
    // Personal Information
    // ============================================
    personal: {
        name: "E-commerce Web Developer",
        brandName: "Habib Ur Rahman", // Used in navigation and footer
        tagline: "WordPress • Shopify • AI Solutions",
        description: "Creating conversion-focused online stores with cutting-edge technology and seamless user experiences",
        bio: "With years of experience in e-commerce development, I specialize in creating high-converting online stores using WordPress and Shopify. My expertise extends to integrating AI-powered chatbots that enhance customer engagement and drive sales.\n\nI combine technical excellence with a deep understanding of e-commerce best practices to deliver solutions that not only look great but also perform exceptionally well.",
        photo: "images/The College WAllah.jpg", // Add your photo path here, e.g., "images/profile.jpg" or leave empty for placeholder
        location: "Peshawar,KP Pakistan", // Update with your location
        timezone: "GMT+5 or Pakistan Time", // Update with your timezone
        languages: "English, Urdu, Pashto", // Update with languages you speak
        availableForProjects: true, // Set to false if not available
        responseTime: "Typically responds within 2 to 3 hours"
    },

    // ============================================
    // Statistics (About Section)
    // ============================================
    statistics: {
        projectsCompleted: 15,
        happyClients: 20,
        yearsExperience: 3,
        clientSatisfaction: 100 // Percentage
    },

    // ============================================
    // Skills
    // ============================================
    skills: [
        {
            name: "WordPress Development",
            icon: "fab fa-wordpress",
            iconColor: "blue", // blue, green, purple, orange, indigo, teal
            percentage: 95,
            description: "Custom themes, plugins, WooCommerce integration, and performance optimization"
        },
        {
            name: "Shopify Store Setup",
            icon: "fab fa-shopify",
            iconColor: "green",
            percentage: 90,
            description: "Store customization, theme development, app integration, and SEO optimization"
        },
        {
            name: "AI Chatbot Integration",
            icon: "fas fa-robot",
            iconColor: "purple",
            percentage: 85,
            description: "ChatGPT integration, custom chatbots, conversational AI, and automation"
        },
        {
            name: "E-commerce Development",
            icon: "fas fa-chart-line",
            iconColor: "orange",
            percentage: 92,
            description: "Create a Full stack ecomerce website using react js and node js"
        },
        {
            name: "Ai Chatbot Development",
            icon: "fas fa-credit-card",
            iconColor: "indigo",
            percentage: 88,
            description: "Develop a Custom AI Chatbot Using GIMINI API"
        },
        {
            name: "Single Product Brandend Store",
            icon: "fas fa-exchange-alt",
            iconColor: "teal",
            percentage: 90,
            description: "Create a Single Product Brandend Store Using HTML, CSS, and JavaScript"
        }
    ],

    // ============================================
    // Services
    // ============================================
    // Optional fields: badge, ctaText, ctaLink, ctaIcon
    // Badge options: "most-selling", "recommended", "new" (or leave empty for no badge)
    // If CTA fields not provided, defaults to "Order Now", "#contact", and "fas fa-shopping-cart"
    services: [
        {
            title: "WordPress E-commerce Sites",
            icon: "fab fa-wordpress",
            iconColor: "blue",
            badge: "most-selling", // Badge type: "most-selling", "recommended", "new"
            description: "Custom WordPress websites with WooCommerce integration, tailored to your brand and optimized for conversions.",
            features: [
                "Custom Theme Development",
                "WooCommerce Setup",
                "Plugin Development",
                "Performance Optimization"
            ],
            ctaText: "Order Now",
            ctaLink: "#contact",
            ctaIcon: "fas fa-shopping-cart"
        },
        {
            title: "Shopify Store Development",
            icon: "fab fa-shopify",
            iconColor: "green",
            badge: "most-selling",
            description: "Complete Shopify store setup from design to launch, with custom themes and seamless app integrations.",
            features: [
                "Store Setup & Configuration",
                "Custom Theme Design",
                "App Integration",
                "SEO Optimization"
            ],
            ctaText: "Get Quote",
            ctaLink: "#contact",
            ctaIcon: "fas fa-handshake"
        },
        {
            title: "AI Chatbot Integration",
            icon: "fas fa-robot",
            iconColor: "purple",
            badge: "recommended",
            description: "Intelligent chatbots powered by ChatGPT and custom AI solutions to enhance customer support and engagement. Perfect for automating customer interactions and improving conversion rates.",
            features: [
                "ChatGPT Integration",
                "Custom Bot Development",
                "Conversational AI",
                "24/7 Customer Support",
                "Lead Generation Automation"
            ],
            ctaText: "Start Project",
            ctaLink: "#contact",
            ctaIcon: "fas fa-rocket"
        },
        {
            title: "Real Estate Website Development",
            icon: "fas fa-home",
            iconColor: "orange",
            description: "Professional real estate websites with property listings, virtual tours, IDX integration, and lead capture systems.",
            features: [
                "Property Listings System",
                "IDX Integration",
                "Virtual Tour Integration",
                "Lead Capture Forms",
                "Mobile Responsive Design"
            ],
            ctaText: "Get Started",
            ctaLink: "#contact",
            ctaIcon: "fas fa-home"
        },
        {
            title: "Store Migration & Optimization",
            icon: "fas fa-exchange-alt",
            iconColor: "red",
            description: "Seamless migration between platforms with data preservation and post-migration optimization for better performance.",
            features: [
                "Platform Migration",
                "Data Transfer",
                "Performance Tuning",
                "SEO Preservation",
                "Zero Downtime Migration"
            ],
            ctaText: "Order Now",
            ctaLink: "#contact",
            ctaIcon: "fas fa-sync-alt"
        },
        {
            title: "Payment Gateway Integration",
            icon: "fas fa-credit-card",
            iconColor: "indigo",
            description: "Secure payment processing integration with major providers like Stripe, PayPal, Square, and others.",
            features: [
                "Stripe Integration",
                "PayPal Setup",
                "Multi-Gateway Support",
                "Security Compliance",
                "Recurring Payments"
            ],
            ctaText: "Get Started",
            ctaLink: "#contact",
            ctaIcon: "fas fa-arrow-right"
        },
        {
            title: "E-commerce Consulting",
            icon: "fas fa-lightbulb",
            iconColor: "teal",
            badge: "recommended",
            description: "Strategic guidance on platform selection, optimization strategies, and growth tactics to boost your online business.",
            features: [
                "Platform Analysis",
                "Conversion Optimization",
                "Growth Strategy",
                "Technical Audit",
                "Market Research"
            ],
            ctaText: "Book Consultation",
            ctaLink: "#contact",
            ctaIcon: "fas fa-calendar-alt"
        },
        {
            title: "Website Redesign & Maintenance",
            icon: "fas fa-paint-brush",
            iconColor: "pink",
            description: "Modern website redesigns and ongoing maintenance to keep your site updated, secure, and performing at peak levels.",
            features: [
                "Complete Redesign",
                "UI/UX Improvement",
                "Regular Updates",
                "Security Monitoring",
                "Performance Optimization"
            ],
            ctaText: "Learn More",
            ctaLink: "#contact",
            ctaIcon: "fas fa-info-circle"
        },
        {
            title: "Custom Web Development",
            icon: "fas fa-code",
            iconColor: "cyan",
            description: "Bespoke web solutions built from scratch tailored to your unique business requirements and workflows.",
            features: [
                "Custom Development",
                "Unique Features",
                "Scalable Architecture",
                "API Integration",
                "Third-party Integrations"
            ],
            ctaText: "Discuss Project",
            ctaLink: "#contact",
            ctaIcon: "fas fa-comments"
        }
    ],

    // ============================================
    // Portfolio Projects
    // ============================================
    projects: [
        {
            title: "Fashion E-commerce Store",
            category: "wordpress", // wordpress, shopify, ai
            image: "", // Add image path or leave empty for gradient placeholder
            gradientFrom: "blue",
            gradientTo: "purple",
            tags: ["WordPress", "WooCommerce"],
            description: "Modern WordPress store with custom theme, advanced product filtering, and payment integration.",
            link: "#" // Add project URL
        },
        {
            title: "Electronics Retail Store",
            category: "shopify",
            image: "",
            gradientFrom: "green",
            gradientTo: "teal",
            tags: ["Shopify", "Custom Theme"],
            description: "Fully customized Shopify store with unique design, product bundles, and subscription options.",
            link: "#"
        },
        {
            title: "AI Customer Support Bot",
            category: "ai",
            image: "",
            gradientFrom: "purple",
            gradientTo: "pink",
            tags: ["AI Chatbot", "ChatGPT"],
            description: "Intelligent chatbot integrated with ChatGPT API for 24/7 customer support and lead generation.",
            link: "#"
        },
        {
            title: "Jewelry Online Store",
            category: "wordpress",
            image: "",
            gradientFrom: "orange",
            gradientTo: "red",
            tags: ["WordPress", "WooCommerce"],
            description: "Elegant WordPress e-commerce site with custom product galleries and international shipping support.",
            link: "#"
        },
        {
            title: "Health & Wellness Store",
            category: "shopify",
            image: "",
            gradientFrom: "indigo",
            gradientTo: "blue",
            tags: ["Shopify", "Apps"],
            description: "Shopify store with subscription products, customer portal, and loyalty program integration.",
            link: "#"
        },
        {
            title: "Smart Product Recommendations",
            category: "ai",
            image: "",
            gradientFrom: "teal",
            gradientTo: "cyan",
            tags: ["AI", "Automation"],
            description: "AI-powered recommendation engine integrated with e-commerce store for personalized shopping experience.",
            link: "#"
        },
        {
            title: "Marketplace Platform",
            category: "wordpress",
            image: "",
            gradientFrom: "pink",
            gradientTo: "rose",
            tags: ["WordPress", "Multi-vendor"],
            description: "Multi-vendor marketplace built on WordPress with vendor dashboard and commission management.",
            link: "#"
        },
        {
            title: "B2B Wholesale Store",
            category: "shopify",
            image: "",
            gradientFrom: "yellow",
            gradientTo: "orange",
            tags: ["Shopify", "B2B"],
            description: "Shopify Plus store with B2B features, custom pricing, and bulk order functionality.",
            link: "#"
        }
    ],

    // ============================================
    // Testimonials
    // ============================================
    testimonials: [
        {
            rating: 5,
            text: "Exceptional work! The WordPress store was delivered on time and exceeded our expectations. The custom features and seamless payment integration made a huge difference to our sales.",
            author: "John Doe",
            position: "CEO, Fashion Brand",
            initials: "JD",
            gradientFrom: "blue",
            gradientTo: "purple"
        },
        {
            rating: 5,
            text: "The Shopify store migration was flawless! Zero downtime and all our data was perfectly transferred. The AI chatbot integration has significantly improved our customer service response time.",
            author: "Sarah Miller",
            position: "Founder, Tech Store",
            initials: "SM",
            gradientFrom: "green",
            gradientTo: "teal"
        },
        {
            rating: 5,
            text: "Professional, responsive, and incredibly skilled. The custom e-commerce solution transformed our online business. Highly recommend for any WordPress or Shopify project!",
            author: "Michael Rodriguez",
            position: "Director, Retail Company",
            initials: "MR",
            gradientFrom: "purple",
            gradientTo: "pink"
        },
        {
            rating: 5,
            text: "The AI chatbot integration was a game-changer for our customer engagement. Sales increased by 30% after implementation. Outstanding work and great communication throughout the project.",
            author: "Emily Wilson",
            position: "Marketing Manager, E-commerce Brand",
            initials: "EW",
            gradientFrom: "orange",
            gradientTo: "red"
        }
    ],

    // ============================================
    // Social Media Links
    // ============================================
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/habib-ur-rahman-e-commerece-consaltant/", // Update with your LinkedIn profile
        github: "https://github.com/habiburrahman849/", // Update with your GitHub profile
        email: "mailto:hu045444@gmail.com", // Update with your email
        whatsapp: "https://wa.me/03346328047" // Update with your WhatsApp number (format: +1234567890 without + in URL)
    },

    // ============================================
    // Contact Form Settings
    // ============================================
    contactForm: {
        // For Formspree.io - Create account and get form ID
        formspreeId: "", // e.g., "xayzqweq"
        // For EmailJS - Create account and get service/template IDs
        emailjs: {
            serviceId: "",
            templateId: "",
            publicKey: ""
        },
        // Or use your custom API endpoint
        apiEndpoint: "" // e.g., "/api/contact" or "https://yourdomain.com/api/contact"
    },

    // ============================================
    // Why Choose Me (About Section)
    // ============================================
    whyChooseMe: [
        "Conversion-focused design approach",
        "Seamless payment gateway integration",
        "AI chatbot implementation expertise",
        "Responsive, mobile-first development"
    ],

    // ============================================
    // Color Theme (Optional - Advanced)
    // ============================================
    colors: {
        primary: "blue", // Main accent color
        secondary: "purple", // Secondary accent color
        // You can customize specific elements if needed
    }
};

// Make config available globally
if (typeof window !== 'undefined') {
    window.portfolioConfig = portfolioConfig;
}
