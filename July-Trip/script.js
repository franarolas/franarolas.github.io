// Function to switch between main destinations (Cape Verde / Azores)
function openDestination(evt, destinationName) {
    // Hide all destination content
    const destinations = document.getElementsByClassName('destination-content');
    for (let i = 0; i < destinations.length; i++) {
        destinations[i].style.display = 'none';
    }

    // Remove active class from all main tabs
    const mainTabs = document.getElementsByClassName('main-tab-btn');
    for (let i = 0; i < mainTabs.length; i++) {
        mainTabs[i].className = mainTabs[i].className.replace(' active', '');
    }

    // Show the selected destination
    document.getElementById(destinationName).style.display = 'block';
    
    // Add active class to the clicked tab
    evt.currentTarget.className += ' active';

    // Show the first sub-section of the newly opened destination
    const firstSubSection = document.getElementById(destinationName).querySelector('.section-content');
    if (firstSubSection) {
        const allSubSections = document.getElementById(destinationName).querySelectorAll('.section-content');
        allSubSections.forEach(section => section.classList.remove('active'));
        firstSubSection.classList.add('active');

        // Activate the first sub-tab
        const subTabs = document.getElementById(destinationName).querySelectorAll('.sub-tab-btn');
        subTabs.forEach(tab => tab.classList.remove('active'));
        if (subTabs[0]) subTabs[0].classList.add('active');
    }
}

// Function to switch between sub-sections (Presentacion / Plan / Precio)
function openSection(evt, sectionName, destinationName) {
    // Hide all sections within this destination
    const destination = document.getElementById(destinationName);
    const sections = destination.getElementsByClassName('section-content');
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }

    // Remove active class from all sub-tabs in this destination
    const subTabs = destination.getElementsByClassName('sub-tab-btn');
    for (let i = 0; i < subTabs.length; i++) {
        subTabs[i].classList.remove('active');
    }

    // Show the selected section
    document.getElementById(sectionName).classList.add('active');
    
    // Add active class to the clicked sub-tab
    evt.currentTarget.classList.add('active');
}

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card, .species-card, .package-card, .day-plan').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });

    // Add click animation to buttons
    document.querySelectorAll('.main-tab-btn, .sub-tab-btn').forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
});