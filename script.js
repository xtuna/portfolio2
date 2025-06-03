function forceDownload() {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'https://www.dropbox.com/scl/fi/rwgx9d5ikzujgvbiiebpv/Velasco-Ma.-Cristina-S_Resume.pdf?rlkey=k1rl5xl27959fxjs6rt2puixz&st=7ia5pyki&dl=0&dl=1';
    link.download = 'Cristina_Velasco_Resume.pdf';

    // Append to body, click, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

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
        year: 2024,
        date: "2024-07-22",
        images: ["p1.png", "p2.png", "p3.png", "p4.png", "p5.png", "p6.png", "p7.png", "p8.png", "p9.png", "p10.png", "p11.png", "p12.png", "p13.png", "p14.png", "p15.png", "p16.png", "p17.png", "p18.png", "p19.png", "p20.png", "p21.png", "p22.png", "p23.png", "p24.png", "p25.png", "p26.png", "p27.png", "p28.png", "p29.png", "p30.png", "p31.png", "p32.png", "p33.png", "p34.png", "p35.png"], // Multiple images
        description: "A web-based document management system developed for the Research Support Center to streamline application processing, automate notifications, and improve document handling, ensuring faster approvals and better communication with researchers.",
        technologies: ["C#", "MSSQL", "JavaScript", "Bootstrap", "ASP .NET Framework"],
        features: [
            "User Friendly interface",
            "Document Management (Upload, Read, Update, Sort, Tracking, and Cancel)",
            "Centralized Repository",
            "Audit Trail",
            "Provide Notifications and Updates",
            "Status Document Monitoring",
            "Role-based access control",
            "Search and Filtering",
            "Generate Reports"
        ],
        liveUrl: "#",
        githubUrl: "https://drive.google.com/drive/folders/1dj8_ebaIThl-u087XKaWN8SOscX3eRGg?usp=drive_link",
        documentUrl: "https://docs.google.com/document/d/1KmAyWQBYIhAKs_YkTYOZwzZ5-eta90VJ/edit?usp=sharing&ouid=107806911557582686117&rtpof=true&sd=true"
    },
    {
        id: 2,
        title: "Lagoon Hub",
        tag: "Website",
        year: 2024,
        date: "2024-03-13",
        images: ["pp1.png", "pp2.jfif", "pp3.png", "pp4.png", "pp5.png", "pp6.png", "pp7.png", "pp8.png"], // Multiple images
        description: "The PUP Lagoon Ordering App revolutionizes the way users interact in Lagoon by offering a seamless ordering experience through innovative features. Users can effortlessly place their orders by choosing what store they want to buy and check out from the app’s interface. With automatic retrieval of item information and pricing, users can assure in their orders accuracy, ensuring a convenient and reliable service. The app guarantees accuracy and transparency in pricing, enhancing user confidence. Moreover, the app maintains a comprehensive order history, enabling users to track past purchases and streamline future orders.",
        technologies: ["PHP", "ASP. NET Core", "MySQL", "Bootstrap"],
        features: [
            "User Account Management",
            "Store Browsing & Status",
            "Product Catalog & Search",
            "Ordering System",
            "Order Tracking",
            "Feedback & Ratings"
        ],
        liveUrl: "#",
        githubUrl: "https://drive.google.com/drive/folders/1GkhH_hJACpIkerfCQjH0zF0j1cO8_hrW?fbclid=IwY2xjawKrTM1leHRuA2FlbQIxMQABHofjNqPdVEjFRYqylopKVGB8kQcDIBEiiRliotzltgeOXnF9lYnWkqeD8UWd_aem__X7j-z6U-8ZTM1YlsSyHVA",
        documentUrl: "https://docs.google.com/document/d/1hQPuP1Drre3-s9iVwSVPXoNy5PDCOXXH3lun85-y2Qs/edit?usp=sharing"
    },
    {
        id: 3,
        title: "ReliQuik",
        tag: "UI-UX",
        year: 2023,
        date: "2023-05-25",
        images: ["pppp1.png", "pppp2.png", "pppp3.png", "pppp4.png"], // Multiple images
        description: "REALIEABLE is a user-centered web application designed to streamline the process of verifying online information. Focused on students and young researchers, it combines intuitive content filtering, credibility tools, and collaborative features to promote efficient and reliable research in academic and everyday digital environments.",
        technologies: ["Figma", "Sketch"],
        features: [
            "User Account Setup",
            "Content Creation & Management",
            "Content Filtering & Verification",
            "Search System",
            "Engagement & Credibility Signals",
            "Collaboration & Discussion"
        ],
        liveUrl: "#",
        behanceUrl: "#",
        documentUrl: "https://docs.google.com/document/d/1Iuip7ND6O8Np98uR3CpWQbYyfe9IWTI5sgwecmipVxQ/edit?usp=sharing"
    },
    {
        id: 4,
        title: "ShoPUP",
        tag: "Website",
        year: 2024,
        date: "2024-02-17",
        images: ["ppp1.png", "ppp2.png", "ppp3.png", "ppp4.png", "ppp5.png", "ppp6.png", "ppp7.png", "ppp8.png", "ppp9.png", "ppp10.png", "ppp11.png", "ppp12.png", "ppp13.png", "ppp14.png", "ppp15.png", "ppp16.png", "ppp17.png"], // Multiple images
        description: "Many current sales inventory systems suffer from outdated technology, leading to performance issues and limited functionality. A lack of real-time inventory visibility often causes stock inaccuracies, affecting restocking efficiency and customer satisfaction. To address these challenges, the group developed ShoPUP—an online shop website with integrated customer reviews.",
        technologies: ["PHP", "MySQLi", "Javascript", "CSS"],
        features: [
            "Manage Category List",
            "Manage Brand List",
            "Manage Products",
            "Manage Orders",
            "Manage Messages",
            "Browse Product with details",
            "Shopping Cart",
            "Login/Registration",
            "Manage Orders",
            "Manage Account Details",
            "Add Products to Wish List",
            "Add Products to Compare",
            "Send Message to Management"
        ],
        liveUrl: "#",
        githubUrl: "https://drive.google.com/file/d/13Xs5VfXvjxEWk6fgcOffDDQh_cBuD7sN/view?usp=sharing",
        documentUrl: "https://docs.google.com/document/d/10TOBwqFimtc6uLJ0QS7E9ohA9RRgx8WU/edit?usp=sharing&ouid=112556465980385058368&rtpof=true&sd=true"
    }
    // },
    // {
    //     id: 5,
    //     title: "Happy Birthday",
    //     tag: "UI-App",
    //     year: 2024,
    //     date: "2024-07-22",
    //     images: ["bday.jpg", "bday-calendar.png", "bday-party.png"], // Multiple images
    //     description: "A delightful mobile application interface designed to help users create personalized birthday experiences. The app focuses on social connection and celebration planning with an emphasis on user engagement and joy.",
    //     technologies: ["Flutter", "Firebase", "Adobe After Effects", "Lottie", "Figma"],
    //     features: [
    //         "Personalized celebration planning",
    //         "Social media integration",
    //         "Custom animation library",
    //         "Event scheduling",
    //         "Photo sharing capabilities",
    //         "Push notifications"
    //     ],
    //     liveUrl: "#",
    //     githubUrl: "#"
    // }
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
    if (project.documentUrl && project.documentUrl !== '#') {
    projectLinks += `<a href="${project.documentUrl}" class="project-link" target="_blank">
        <i class="fas fa-file-alt"></i> View Document
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