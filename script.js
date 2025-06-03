function flipImage() {
    document.getElementById("flipCard").classList.toggle("flipped");
}

document.addEventListener("DOMContentLoaded", function() {
    const recentTab = document.getElementById("recent-projects");
    const oldTab = document.getElementById("old-projects");
    const recentContent = document.getElementById("recent-projects-content");
    const oldContent = document.getElementById("old-projects-content");

    // Add event listeners for tab switching
    recentTab.addEventListener("click", function() {
        recentTab.classList.add("active");
        oldTab.classList.remove("active");

        recentContent.classList.remove("hidden");
        oldContent.classList.add("hidden");
    });

    oldTab.addEventListener("click", function() {
        oldTab.classList.add("active");
        recentTab.classList.remove("active");

        oldContent.classList.remove("hidden");
        recentContent.classList.add("hidden");
    });
});

// Project data with complete information including multiple images
const projects = [{
        id: 1,
        title: "A Web-based Document Management System for the Research Support Center",
        tag: "Website",
        year: 2025,
        date: "2025-01-15",
        images: ["home_page1.png", "dashboard.png", "documents.png", "search.png"], // Multiple images
        description: "A comprehensive web-based document management system designed specifically for the Research Support Center. This system streamlines document organization, version control, and collaborative research workflows, making it easier for researchers to manage and access important documents.",
        technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
        features: [
            "Document upload and categorization",
            "Version control system",
            "User authentication and authorization",
            "Advanced search functionality",
            "Collaborative workspace",
            "Automated backup system"
        ],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Lagoon Hub",
        tag: "Website",
        year: 2024,
        date: "2024-11-20",
        images: ["home_page2.png", "map.png", "data.png"], // Multiple images
        description: "An innovative platform connecting marine researchers and environmental enthusiasts. Lagoon Hub serves as a centralized location for sharing research data, environmental monitoring results, and conservation efforts related to lagoon ecosystems.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "Mapbox"],
        features: [
            "Interactive lagoon mapping",
            "Real-time environmental data",
            "Research collaboration tools",
            "Data visualization dashboard",
            "Community forum",
            "Mobile responsive design"
        ],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "ReliQuik",
        tag: "UI-UX",
        year: 2023,
        date: "2023-08-10",
        images: ["home_page3.png", "wireframe.png", "prototype.png"], // Multiple images
        description: "A user-centered design project focused on creating an intuitive interface for quick reliability testing tools. ReliQuik emphasizes accessibility and ease of use while maintaining professional functionality for engineering applications.",
        technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
        features: [
            "Intuitive user interface design",
            "Accessibility-first approach",
            "Interactive prototyping",
            "User testing and iteration",
            "Design system creation",
            "Mobile-first design"
        ],
        liveUrl: "#",
        behanceUrl: "#"
    },
    {
        id: 4,
        title: "ShoPUP",
        tag: "Website",
        year: 2024,
        date: "2024-03-15",
        images: ["ShoPUP.png", "shop-products.png", "shop-cart.png"], // Multiple images
        description: "An e-commerce platform designed specifically for university students and local businesses. ShoPUP creates a marketplace ecosystem that supports the local economy while providing students with convenient access to goods and services.",
        technologies: ["Vue.js", "Laravel", "PostgreSQL", "Stripe API", "Redis", "Docker"],
        features: [
            "Student verification system",
            "Local business integration",
            "Secure payment processing",
            "Order tracking system",
            "Review and rating system",
            "Admin dashboard"
        ],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 5,
        title: "Happy Birthday",
        tag: "UI-App",
        year: 2024,
        date: "2024-07-22",
        images: ["bday.jpg", "bday-calendar.png", "bday-party.png"], // Multiple images
        description: "A delightful mobile application interface designed to help users create personalized birthday experiences. The app focuses on social connection and celebration planning with an emphasis on user engagement and joy.",
        technologies: ["Flutter", "Firebase", "Adobe After Effects", "Lottie", "Figma"],
        features: [
            "Personalized celebration planning",
            "Social media integration",
            "Custom animation library",
            "Event scheduling",
            "Photo sharing capabilities",
            "Push notifications"
        ],
        liveUrl: "#",
        githubUrl: "#"
    }
];

// Function to determine if a project is recent (within 1 year)
function isRecentProject(projectDate) {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    return new Date(projectDate) >= oneYearAgo;
}

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="card" onclick="openProjectDetail(${project.id})">
            <img src="${project.images[0]}" alt="${project.title}">
            <div class="card-title">${project.title}</div>
            <div class="card-tag">${project.tag}</div>
            <div class="card-year">${project.year}</div>
        </div>
    `;
}

// Function to populate projects
function populateProjects() {
    const recentContainer = document.getElementById('recent-projects-content');
    const oldContainer = document.getElementById('old-projects-content');

    let recentProjectsHTML = '';
    let oldProjectsHTML = '';

    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        if (isRecentProject(project.date)) {
            recentProjectsHTML += projectCard;
        } else {
            oldProjectsHTML += projectCard;
        }
    });

    recentContainer.innerHTML = recentProjectsHTML;
    oldContainer.innerHTML = oldProjectsHTML;
}

// Carousel functionality
let currentSlide = 0;
let totalSlides = 0;

function createCarousel(images, projectTitle) {
    totalSlides = images.length;
    currentSlide = 0;

    const carouselHTML = `
        <div class="carousel-container">
            <div class="carousel-header">
                <h3>Project Gallery</h3>
                <div class="slide-counter">
                    <span id="current-slide">1</span> / <span id="total-slides">${totalSlides}</span>
                </div>
            </div>
            <div class="carousel-wrapper">
                <button class="carousel-btn carousel-prev" onclick="previousSlide()">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <div class="carousel-track-container">
                    <div class="carousel-track" id="carousel-track">
                        ${images.map((image, index) => `
                            <div class="carousel-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                                <img src="${image}" alt="${projectTitle} - Image ${index + 1}">
                            </div>
                        `).join('')}
                    </div>
                </div>
                <button class="carousel-btn carousel-next" onclick="nextSlide()">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <div class="carousel-indicators">
                ${images.map((_, index) => `
                    <button class="indicator ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></button>
                `).join('')}
            </div>
        </div>
    `;
    
    return carouselHTML;
}

function updateCarousel() {
    const track = document.getElementById('carousel-track');
    const slides = track.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const currentSlideSpan = document.getElementById('current-slide');
    
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide and indicator
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    // Update slide counter
    currentSlideSpan.textContent = currentSlide + 1;
    
    // Move track
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Function to open project detail
function openProjectDetail(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const detailBody = document.getElementById('project-detail-body');

    // Create technologies list
    const techList = project.technologies.map(tech =>
        `<span class="tech-item">${tech}</span>`
    ).join('');

    // Create features list
    const featuresList = project.features.map(feature =>
        `<li>${feature}</li>`
    ).join('');

    // Create links based on project type
    let projectLinks = '';
    if (project.liveUrl && project.liveUrl !== '#') {
        projectLinks += `<a href="${project.liveUrl}" class="project-link" target="_blank">
            <i class="fas fa-external-link-alt"></i> View Live
        </a>`;
    }
    if (project.githubUrl && project.githubUrl !== '#') {
        projectLinks += `<a href="${project.githubUrl}" class="project-link" target="_blank">
            <i class="fab fa-github"></i> View Code
        </a>`;
    }
    if (project.behanceUrl && project.behanceUrl !== '#') {
        projectLinks += `<a href="${project.behanceUrl}" class="project-link" target="_blank">
            <i class="fab fa-behance"></i> View Design
        </a>`;
    }

    // Create carousel for images
    const carouselHTML = createCarousel(project.images, project.title);

    detailBody.innerHTML = `
        <div class="project-header">
            <h1>${project.title}</h1>
            <div class="project-meta">
                <span class="project-tag-large">${project.tag}</span>
                <span class="project-year-large">${project.year}</span>
            </div>
        </div>
        
        ${carouselHTML}
        
        <div class="project-description">
            ${project.description}
        </div>
        
        <div class="project-technologies">
            <h3>Technologies Used</h3>
            <div class="tech-list">
                ${techList}
            </div>
        </div>
        
        <div class="project-technologies">
            <h3>Key Features</h3>
            <ul style="text-align: left; max-width: 600px; margin: 0 auto; line-height: 1.8;">
                ${featuresList}
            </ul>
        </div>
        
        <div class="project-links">
            ${projectLinks}
        </div>
    `;

    document.getElementById('project-detail').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Initialize carousel after DOM is updated
    setTimeout(() => {
        updateCarousel();
    }, 100);
}

// Function to close project detail
function closeProjectDetail() {
    document.getElementById('project-detail').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Tab switching functionality
document.addEventListener("DOMContentLoaded", function() {
    const recentTab = document.getElementById("recent-projects");
    const oldTab = document.getElementById("old-projects");
    const recentContent = document.getElementById("recent-projects-content");
    const oldContent = document.getElementById("old-projects-content");

    // Populate projects on load
    populateProjects();

    // Add event listeners for tab switching
    recentTab.addEventListener("click", function() {
        recentTab.classList.add("active");
        recentTab.classList.remove("inactive");
        oldTab.classList.remove("active");
        oldTab.classList.add("inactive");

        recentContent.classList.remove("hidden");
        oldContent.classList.add("hidden");
    });

    oldTab.addEventListener("click", function() {
        oldTab.classList.add("active");
        oldTab.classList.remove("inactive");
        recentTab.classList.remove("active");
        recentTab.classList.add("inactive");

        oldContent.classList.remove("hidden");
        recentContent.classList.add("hidden");
    });

    // Close project detail when clicking outside
    document.getElementById('project-detail').addEventListener('click', function(e) {
        if (e.target === this) {
            closeProjectDetail();
        }
    });

    // Close project detail with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProjectDetail();
        }
    });

    // Keyboard navigation for carousel
    document.addEventListener('keydown', function(e) {
        if (!document.getElementById('project-detail').classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') {
                previousSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        }
    });
});

//achievement section
function switchTab(tabName, element) {
    // Remove active class from all tabs
    const allTabs = document.querySelectorAll('.tab-item');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
        tab.classList.add('inactive');
    });

    // Add active class to clicked tab
    element.classList.add('active');
    element.classList.remove('inactive');

    // Hide all content sections
    const allSections = document.querySelectorAll('.content-section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected content section
    document.getElementById(tabName).classList.add('active');
}

// Add hover effects and smooth transitions
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.achievement-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});