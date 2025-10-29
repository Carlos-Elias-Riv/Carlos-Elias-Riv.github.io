/* ===================================
   Modern Portfolio JavaScript
   Bilingual Toggle & Interactions
   =================================== */

// ===================================
// Language Translations
// ===================================
const translations = {
    en: {
        // Navigation
        'Home': 'Home',
        'About': 'About',
        'Experience': 'Experience',
        'Projects': 'Projects',
        'Skills': 'Skills',
        'Contact': 'Contact',
        
        // Hero Section
        'Hi, I\'m': 'Hi, I\'m',
        'Data Scientist & Software Developer': 'Data Scientist & Software Developer',
        'Transforming data into insights and building intelligent solutions with AI, Machine Learning, and Cloud Technologies.': 'Transforming data into insights and building intelligent solutions with AI, Machine Learning, and Cloud Technologies.',
        'View Projects': 'View Projects',
        'Contact Me': 'Contact Me',
        
        // About Section
        'About Me': 'About Me',
        'Turning data into actionable insights and building innovative solutions': 'Turning data into actionable insights and building innovative solutions',
        'I\'m a Data Scientist and Software Developer with experience in building and deploying machine learning models, web applications, and data pipelines. Currently pursuing my Bachelor of Science in Data Science at Instituto Tecnológico Autónomo de México (ITAM) with a GPA of 9.58/10.': 'I\'m a Data Scientist and Software Developer with experience in building and deploying machine learning models, web applications, and data pipelines. Currently pursuing my Bachelor of Science in Data Science at Instituto Tecnológico Autónomo de México (ITAM) with a GPA of 9.58/10.',
        'Education Excellence': 'Education Excellence',
        'Academic Excellence Award for Highest Grade (Spring 2023)': 'Academic Excellence Award for Highest Grade (Spring 2023)',
        'Study Abroad': 'Study Abroad',
        'Aalto University, Finland - Deep Learning & AI courses': 'Aalto University, Finland - Deep Learning & AI courses',
        'IBM AI Hackathon Winner': 'IBM AI Hackathon Winner',
        'Won international IBM AI hackathon with a fully international team': 'Won international IBM AI hackathon with a fully international team',
        'IBM AI Hackathon - Aalto University, Finland': 'IBM AI Hackathon - Aalto University, Finland',
        
        // Experience Section
        'Experience': 'Experience',
        'My professional journey in data science and software development': 'My professional journey in data science and software development',
        'October 2023 - Present': 'October 2023 - Present',
        'Jr. Data Scientist and Lead of Research': 'Jr. Data Scientist and Lead of Research',
        'February 2024 - August 2024': 'February 2024 - August 2024',
        'PhD Research Assistant': 'PhD Research Assistant',
        'Crime and Security Project': 'Crime and Security Project',
        'November 2023 - Present': 'November 2023 - Present',
        'Technical Lead and Software Engineer': 'Technical Lead and Software Engineer',
        
        // Projects Section
        'Projects': 'Projects',
        'Innovative solutions leveraging AI, Machine Learning, and Cloud Technologies': 'Innovative solutions leveraging AI, Machine Learning, and Cloud Technologies',
        'Face Verification Model': 'Face Verification Model',
        'Machine Learning': 'Machine Learning',
        'State-of-the-art face verification system using PyTorch, deployed on AWS with auto-scaling capabilities. Replaced AWS Rekognition with 56% cost reduction and 99.99% precision.': 'State-of-the-art face verification system using PyTorch, deployed on AWS with auto-scaling capabilities. Replaced AWS Rekognition with 56% cost reduction and 99.99% precision.',
        'Insurance Chatbot with RAG': 'Insurance Chatbot with RAG',
        'Natural Language Processing': 'Natural Language Processing',
        'Intelligent chatbot deployed on Google Cloud using LangGraph and Retrieval-Augmented Generation (RAG). Efficiently answers personalized insurance policy inquiries via WhatsApp.': 'Intelligent chatbot deployed on Google Cloud using LangGraph and Retrieval-Augmented Generation (RAG). Efficiently answers personalized insurance policy inquiries via WhatsApp.',
        'Crime & Security Platform': 'Crime & Security Platform',
        'Data Visualization': 'Data Visualization',
        'Interactive crime mapping and analysis tool for Mexico City neighborhoods. Provides real-time data visualization and crime pattern insights for community safety.': 'Interactive crime mapping and analysis tool for Mexico City neighborhoods. Provides real-time data visualization and crime pattern insights for community safety.',
        'View Project': 'View Project',
        'Dive CLI Chatbot': 'Dive CLI Chatbot',
        'Current Project': 'Current Project',
        'NPM package connecting developers to an intelligent chatbot with access to Dive\'s latest documentation, procedures, and technical guides. Quick answers to questions like "How can I build a quick lambda?" or "Where\'s the documentation for this project?"': 'NPM package connecting developers to an intelligent chatbot with access to Dive\'s latest documentation, procedures, and technical guides. Quick answers to questions like "How can I build a quick lambda?" or "Where\'s the documentation for this project?"',
        
        // Publications Section
        'Publications': 'Publications',
        'Thoughts and insights on AI, Data Science, and Innovation': 'Thoughts and insights on AI, Data Science, and Innovation',
        'R&D: The Investment in Answering \'What Would Happen If...?\'': 'R&D: The Investment in Answering "What Would Happen If...?"',
        'An exploration of how research and development investments drive innovation by answering hypothetical questions and creating solutions for future challenges.': 'An exploration of how research and development investments drive innovation by answering hypothetical questions and creating solutions for future challenges.',
        'Read on Medium': 'Read on Medium',
        
        // Skills Section
        'Skills & Expertise': 'Skills & Expertise',
        'Technologies and tools I work with': 'Technologies and tools I work with',
        'Machine Learning & AI': 'Machine Learning & AI',
        'Natural Language Processing': 'Natural Language Processing',
        'Cloud Architecture': 'Cloud Architecture',
        'Programming Languages': 'Programming Languages',
        'Data Engineering': 'Data Engineering',
        'Full Stack Development': 'Full Stack Development',
        'Languages': 'Languages',
        'Spanish': 'Spanish',
        'Native': 'Native',
        'English': 'English',
        
        // Contact Section
        'Get In Touch': 'Get In Touch',
        'Let\'s work together on your next project': 'Let\'s work together on your next project',
        'Email': 'Email',
        'Phone': 'Phone',
        'Location': 'Location',
        'Mexico City, Mexico': 'Mexico City, Mexico',
        'Connect With Me': 'Connect With Me',
        
        // Footer
        '© 2024 Carlos Elias Rivera Mercado. All rights reserved.': '© 2024 Carlos Elias Rivera Mercado. All rights reserved.'
    },
    es: {
        // Navigation
        'Home': 'Inicio',
        'About': 'Acerca',
        'Experience': 'Experiencia',
        'Projects': 'Proyectos',
        'Skills': 'Habilidades',
        'Contact': 'Contacto',
        
        // Hero Section
        'Hi, I\'m': 'Hola, soy',
        'Data Scientist & Software Developer': 'Científico de Datos & Desarrollador de Software',
        'Transforming data into insights and building intelligent solutions with AI, Machine Learning, and Cloud Technologies.': 'Transformando datos en insights y construyendo soluciones inteligentes con IA, Machine Learning y Tecnologías en la Nube.',
        'View Projects': 'Ver Proyectos',
        'Contact Me': 'Contáctame',
        
        // About Section
        'About Me': 'Acerca de Mí',
        'Turning data into actionable insights and building innovative solutions': 'Convirtiendo datos en insights accionables y construyendo soluciones innovadoras',
        'I\'m a Data Scientist and Software Developer with experience in building and deploying machine learning models, web applications, and data pipelines. Currently pursuing my Bachelor of Science in Data Science at Instituto Tecnológico Autónomo de México (ITAM) with a GPA of 9.58/10.': 'Soy un Científico de Datos y Desarrollador de Software con experiencia en la construcción y despliegue de modelos de machine learning, aplicaciones web y pipelines de datos. Actualmente cursando mi Licenciatura en Ciencia de Datos en el Instituto Tecnológico Autónomo de México (ITAM) con un promedio de 9.58/10.',
        'Education Excellence': 'Excelencia Académica',
        'Academic Excellence Award for Highest Grade (Spring 2023)': 'Premio a la Excelencia Académica por Calificación Más Alta (Primavera 2023)',
        'Study Abroad': 'Intercambio Académico',
        'Aalto University, Finland - Deep Learning & AI courses': 'Universidad Aalto, Finlandia - Cursos de Deep Learning e IA',
        'IBM AI Hackathon Winner': 'Ganador del Hackathon de IA de IBM',
        'Won international IBM AI hackathon with a fully international team': 'Ganador del hackathon internacional de IA de IBM con un equipo totalmente internacional',
        'IBM AI Hackathon - Aalto University, Finland': 'Hackathon de IA de IBM - Universidad Aalto, Finlandia',
        
        // Experience Section
        'Experience': 'Experiencia',
        'My professional journey in data science and software development': 'Mi trayectoria profesional en ciencia de datos y desarrollo de software',
        'October 2023 - Present': 'Octubre 2023 - Presente',
        'Jr. Data Scientist and Lead of Research': 'Científico de Datos Jr. y Líder de Investigación',
        'February 2024 - August 2024': 'Febrero 2024 - Agosto 2024',
        'PhD Research Assistant': 'Asistente de Investigación de Doctorado',
        'Crime and Security Project': 'Proyecto de Crimen y Seguridad',
        'November 2023 - Present': 'Noviembre 2023 - Presente',
        'Technical Lead and Software Engineer': 'Líder Técnico e Ingeniero de Software',
        
        // Projects Section
        'Projects': 'Proyectos',
        'Innovative solutions leveraging AI, Machine Learning, and Cloud Technologies': 'Soluciones innovadoras aprovechando IA, Machine Learning y Tecnologías en la Nube',
        'Face Verification Model': 'Modelo de Verificación Facial',
        'Machine Learning': 'Machine Learning',
        'State-of-the-art face verification system using PyTorch, deployed on AWS with auto-scaling capabilities. Replaced AWS Rekognition with 56% cost reduction and 99.99% precision.': 'Sistema de verificación facial de última generación usando PyTorch, desplegado en AWS con capacidades de auto-escalado. Reemplazó AWS Rekognition con 56% de reducción de costos y 99.99% de precisión.',
        'Insurance Chatbot with RAG': 'Chatbot de Seguros con RAG',
        'Natural Language Processing': 'Procesamiento de Lenguaje Natural',
        'Intelligent chatbot deployed on Google Cloud using LangGraph and Retrieval-Augmented Generation (RAG). Efficiently answers personalized insurance policy inquiries via WhatsApp.': 'Chatbot inteligente desplegado en Google Cloud usando LangGraph y Generación Aumentada por Recuperación (RAG). Responde eficientemente consultas personalizadas sobre pólizas de seguros vía WhatsApp.',
        'Crime & Security Platform': 'Plataforma de Crimen y Seguridad',
        'Data Visualization': 'Visualización de Datos',
        'Interactive crime mapping and analysis tool for Mexico City neighborhoods. Provides real-time data visualization and crime pattern insights for community safety.': 'Herramienta interactiva de mapeo y análisis del crimen para colonias de la Ciudad de México. Proporciona visualización de datos en tiempo real e insights sobre patrones criminales para la seguridad comunitaria.',
        'View Project': 'Ver Proyecto',
        'Dive CLI Chatbot': 'Chatbot CLI de Dive',
        'Current Project': 'Proyecto Actual',
        'NPM package connecting developers to an intelligent chatbot with access to Dive\'s latest documentation, procedures, and technical guides. Quick answers to questions like "How can I build a quick lambda?" or "Where\'s the documentation for this project?"': 'Paquete NPM que conecta desarrolladores a un chatbot inteligente con acceso a la documentación más reciente de Dive, procedimientos y guías técnicas. Respuestas rápidas a preguntas como "¿Cómo puedo construir un lambda rápido?" o "¿Dónde está la documentación de este proyecto?"',
        
        // Publications Section
        'Publications': 'Publicaciones',
        'Thoughts and insights on AI, Data Science, and Innovation': 'Pensamientos e insights sobre IA, Ciencia de Datos e Innovación',
        'R&D: The Investment in Answering \'What Would Happen If...?\'': 'R&D: La Inversión en Contestar "¿Qué Pasaría Si...?"',
        'An exploration of how research and development investments drive innovation by answering hypothetical questions and creating solutions for future challenges.': 'Una exploración de cómo las inversiones en investigación y desarrollo impulsan la innovación al responder preguntas hipotéticas y crear soluciones para desafíos futuros.',
        'Read on Medium': 'Leer en Medium',
        
        // Skills Section
        'Skills & Expertise': 'Habilidades y Experiencia',
        'Technologies and tools I work with': 'Tecnologías y herramientas con las que trabajo',
        'Machine Learning & AI': 'Machine Learning e IA',
        'Natural Language Processing': 'Procesamiento de Lenguaje Natural',
        'Cloud Architecture': 'Arquitectura en la Nube',
        'Programming Languages': 'Lenguajes de Programación',
        'Data Engineering': 'Ingeniería de Datos',
        'Full Stack Development': 'Desarrollo Full Stack',
        'Languages': 'Idiomas',
        'Spanish': 'Español',
        'Native': 'Nativo',
        'English': 'Inglés',
        
        // Contact Section
        'Get In Touch': 'Contáctame',
        'Let\'s work together on your next project': 'Trabajemos juntos en tu próximo proyecto',
        'Email': 'Correo',
        'Phone': 'Teléfono',
        'Location': 'Ubicación',
        'Mexico City, Mexico': 'Ciudad de México, México',
        'Connect With Me': 'Conéctate Conmigo',
        
        // Footer
        '© 2024 Carlos Elias Rivera Mercado. All rights reserved.': '© 2024 Carlos Elias Rivera Mercado. Todos los derechos reservados.'
    }
};

// ===================================
// Language Toggle Functionality
// ===================================
let currentLanguage = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Update language toggle buttons
    document.querySelectorAll('.lang-option').forEach(option => {
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    // Update all translatable elements
    updateTranslations();
}

function updateTranslations() {
    // Update elements with data-en and data-es attributes
    document.querySelectorAll('[data-en]').forEach(element => {
        const key = element.getAttribute(`data-${currentLanguage}`);
        if (key) {
            element.textContent = key;
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
    
    // Language toggle event listeners
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            if (e.target.classList.contains('lang-option')) {
                const selectedLang = e.target.dataset.lang;
                setLanguage(selectedLang);
            }
        });
    }
});

// ===================================
// Navigation Functionality
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
});

// ===================================
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Intersection Observer for Animations
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll(
        '.project-card, .skill-card, .timeline-item, .publication-card, .contact-item'
    );
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// ===================================
// Scroll to Top
// ===================================
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (scrollTop > 500) {
        // Could add a scroll-to-top button here if desired
    }
});

// ===================================
// Loading Animation
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===================================
// Performance Optimization
// ===================================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Utility Functions
// ===================================
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

// Debounced scroll handler
const debouncedScroll = debounce(() => {
    // Add any scroll-dependent functionality here
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ===================================
// Console Message
// ===================================
console.log('%c👋 Hi there!', 'font-size: 20px; color: #64ffda;');
console.log('%cInterested in the code? Check out my GitHub!', 'font-size: 14px; color: #8892b0;');
console.log('%chttps://github.com/Carlos-Elias-Riv', 'font-size: 14px; color: #64ffda;');

