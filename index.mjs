// ayaw mahide nung intro puta
function showDescription(pageId) {
    document.getElementById("intro").style.display = "none";
    document.getElementById('description').classList.add('active-section');
}

// Function to show a specific page
function showPage(pageId) {
    // pang hide ng lahat
    document.getElementById('intro').classList.remove('active-section');
    document.getElementById('description').classList.remove('active-section');
    document.getElementById('main-page').classList.remove('active-section');
    
    // pang select ng page
    document.getElementById(pageId).classList.add('active-section');
}

// main page
function showSection(sectionId) {
    // alis section nung main page
    document.getElementById('home').classList.remove('active-section');
    document.getElementById('services').classList.remove('active-section');
    document.getElementById('contacts').classList.remove('active-section');
    
    // show content nung main page
    document.getElementById(sectionId).classList.add('active-section');
}
//back to intro to

function backPage() {
    document.getElementById('intro').style.display = 'block';
    document.getElementById('description').classList.remove('active-section');
    document.getElementById('main-page').classList.remove('active-section');
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


const scrollToSkillsBtn = document.getElementById('scrollToSkillsBtn');
const skillsSection = document.querySelector('.home-sec2');


scrollToSkillsBtn.addEventListener('click', function() {
    
    skillsSection.scrollIntoView({
        behavior: 'smooth', 
        block: 'start' 
    });
});

const scrollToProjectsBtn = document.getElementById('scrollToProjectsBtn');
const projectsSection = document.querySelector('.home-sec3');


scrollToProjectsBtn.addEventListener('click', function() {
    
    projectsSection.scrollIntoView({
        behavior: 'smooth', 
        block: 'start' 
    });
});
