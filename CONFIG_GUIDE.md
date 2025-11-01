# Configuration File Guide

## Quick Start

Your portfolio content is now managed through the `config.js` file! This makes it super easy to update your portfolio without touching any HTML code.

## How It Works

1. **Open `config.js`** in any text editor
2. **Edit the values** you want to change
3. **Save the file**
4. **Refresh your browser** - changes appear instantly!

## What You Can Change

### ✏️ Personal Information

```javascript
personal: {
    name: "Your Name",                    // Main headline
    brandName: "YourBrand",               // Logo/brand in nav
    tagline: "Your • Tagline • Here",     // Subtitle
    description: "Your description...",     // Hero description
    bio: "Your bio text...",              // About section bio
    photo: "images/photo.jpg",            // Profile photo path
    location: "City, Country",
    timezone: "GMT+X",
    languages: "English, Spanish",
    availableForProjects: true,           // true/false
    responseTime: "Typically responds within 24 hours"
}
```

### 📊 Statistics

```javascript
statistics: {
    projectsCompleted: 50,    // Number of projects
    happyClients: 45,         // Number of clients
    yearsExperience: 5,       // Years of experience
    clientSatisfaction: 100   // Percentage
}
```

### 🎯 Skills

Add, remove, or modify skills:

```javascript
skills: [
    {
        name: "Skill Name",
        icon: "fab fa-wordpress",        // Font Awesome icon class
        iconColor: "blue",                // blue, green, purple, orange, indigo, teal
        percentage: 95,                   // Skill level (0-100)
        description: "Skill description"
    }
]
```

**Available icon colors:** `blue`, `green`, `purple`, `orange`, `indigo`, `teal`

### 💼 Services

Customize your services:

```javascript
services: [
    {
        title: "Service Title",
        icon: "fas fa-icon",             // Font Awesome icon
        iconColor: "blue",                // Color theme
        description: "Service description...",
        features: [
            "Feature 1",
            "Feature 2",
            "Feature 3"
        ]
    }
]
```

### 🎨 Portfolio Projects

Add or edit projects:

```javascript
projects: [
    {
        title: "Project Name",
        category: "wordpress",            // wordpress, shopify, or ai
        image: "images/project.jpg",      // Image path (optional)
        gradientFrom: "blue",             // Gradient start color
        gradientTo: "purple",             // Gradient end color
        tags: ["WordPress", "WooCommerce"], // Project tags
        description: "Project description...",
        link: "https://project-url.com"  // Project link
    }
]
```

**Project categories:**
- `wordpress` - For WordPress projects
- `shopify` - For Shopify projects  
- `ai` - For AI/Chatbot projects

**Gradient colors:** `blue`, `green`, `purple`, `orange`, `indigo`, `teal`, `yellow`, `pink`

### 💬 Testimonials

Update client testimonials:

```javascript
testimonials: [
    {
        rating: 5,                        // 1-5 stars
        text: "Testimonial text...",
        author: "Client Name",
        position: "Title, Company",
        initials: "CN",                   // Avatar initials
        gradientFrom: "blue",             // Avatar gradient color
        gradientTo: "purple"
    }
]
```

### 🔗 Social Links

Update your social media links:

```javascript
socialLinks: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    email: "mailto:your.email@example.com",
    whatsapp: "https://wa.me/1234567890"  // Format: wa.me/number (no +)
}
```

### ✅ Why Choose Me

Update the bullet points in About section:

```javascript
whyChooseMe: [
    "Point 1",
    "Point 2",
    "Point 3",
    "Point 4"
]
```

### 📧 Contact Form Setup

#### Option 1: Formspree (Free & Easy)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy the form ID
4. Add to config:

```javascript
contactForm: {
    formspreeId: "your-form-id"
}
```

#### Option 2: Your Own API

```javascript
contactForm: {
    apiEndpoint: "/api/contact"  // Your API endpoint
}
```

## Tips & Tricks

### Adding New Projects

Simply add a new object to the `projects` array:

```javascript
{
    title: "New Project",
    category: "wordpress",
    image: "images/new-project.jpg",
    gradientFrom: "blue",
    gradientTo: "purple",
    tags: ["WordPress", "Custom"],
    description: "Project description",
    link: "#"
}
```

### Removing Items

To remove a skill, service, or project, simply delete its entire object from the array.

### Changing Colors

All color options use Tailwind CSS color names:
- `blue`, `green`, `purple`, `orange`, `indigo`, `teal`, `yellow`, `pink`, `red`

### Using Icons

Find Font Awesome icons at [fontawesome.com/icons](https://fontawesome.com/icons)

**Icon format:**
- Brands: `fab fa-wordpress`, `fab fa-shopify`
- Solid: `fas fa-robot`, `fas fa-chart-line`
- Regular: `far fa-envelope`

## Common Questions

**Q: Can I add more skills/services/projects?**  
A: Yes! Just add more objects to the respective arrays.

**Q: What if I leave an image field empty?**  
A: A beautiful gradient placeholder will be used automatically.

**Q: How do I add my photo?**  
A: Save your photo in an `images` folder and set `photo: "images/your-photo.jpg"`

**Q: Can I change the layout?**  
A: The layout is in the HTML/CSS. The config only controls content.

**Q: What happens if I make a typo?**  
A: Just fix it and refresh. The site will update automatically!

## Need Help?

- Check `config.js` for examples
- All fields have comments explaining their purpose
- Invalid values will fall back to defaults gracefully

---

**Happy Customizing! 🚀**
