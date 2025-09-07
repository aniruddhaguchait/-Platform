document.getElementById('startNavigation').addEventListener('click', function () {
    window.location.href = 'gptmpa1.html';
});

document.getElementById('setAlarm').addEventListener('click', function () {
    document.getElementById('alarmModal').style.display = 'flex';
});

document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('alarmModal').style.display = 'none';
});

document.getElementById('confirmAlarm').addEventListener('click', function () {
    document.getElementById('alarmModal').style.display = 'none';
    // Set the alarm logic here
    showNotification('Alarm set for your destination!');
});

// Toggle light/dark mode
const modeToggle = document.getElementById('modeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check if user has a preference stored
if (localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-mode');
    modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

modeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Helper function to show notifications
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-bell"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add styles dynamically
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary)';
    notification.style.color = 'white';
    notification.style.padding = '12px 20px';
    notification.style.borderRadius = '8px';
    notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    notification.style.zIndex = '2000';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
    notification.style.transition = 'opacity 0.3s, transform 0.3s';
    
    // Animation
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

async function updateArrivalTime() {
    try {
        // Simulate getting current location
        const userCoords = {
            lat: 21.146800,
            lng: 79.088158
        };

        // Simulate next station coordinates
        const nextStationCoords = {
            lat: 21.145800,
            lng: 79.088158
        };

        // Simulate calculating route duration (in seconds)
        const duration = Math.floor(Math.random() * 900) + 60; // 1-15 minutes
        
        // Calculate arrival time
        const arrivalTime = new Date(Date.now() + duration * 1000).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });

        // Update the UI with a fade effect
        const arrivalTimeElement = document.getElementById('arrivalTime');
        arrivalTimeElement.style.opacity = '0';
        
        setTimeout(() => {
            arrivalTimeElement.innerText = arrivalTime;
            arrivalTimeElement.style.opacity = '1';
        }, 300);

        // Update every minute
        setTimeout(updateArrivalTime, 60000);
    } catch (error) {
        console.error('Error updating arrival time:', error);
    }
}

updateArrivalTime();

const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.className = isOpen
        ? 'fas fa-xmark'
        : 'fas fa-bars';
}

// Play sound buttons
const playSoundButtons = document.querySelectorAll('.play-sound');
playSoundButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        // In a real app, you would play the actual sound here
        console.log('Playing sound:', this.dataset.sound);
        
        // Visual feedback
        const icon = this.querySelector('i');
        icon.className = 'fas fa-pause';
        
        setTimeout(() => {
            icon.className = 'fas fa-play';
        }, 2000);
    });
});

// Refresh crowd data animation
document.querySelector('.refresh-btn').addEventListener('click', function() {
    this.classList.add('rotating');
    setTimeout(() => {
        this.classList.remove('rotating');
        showNotification('Crowd data updated');
    }, 1000);
});
function refreshPage() {
      location.reload(); // reloads the current page
    }

// Language translation data
const translations = {
    en: {
        // Header
        title: "आपकाPlatform",
        home: "Home",
        about: "About",
        contact: "Contact",
        search_placeholder: "Search station or facility...",
        mobile_search_placeholder: "Search for a place",
        // Navigation Options
        start_navigation: "Start Navigation",
        set_alarm: "Set Alarm",
        view_schedule: "View Schedule",
        // Station Info
        station_information: "Station Information",
        live: "Live",
        next_station: "Next Station",
        arriving_in: "Arriving In",
        crowd_density: "Crowd Density",
        current_density: "Current Density",
        forecast: "Forecast",
        // Facilities
        facilities_available: "Facilities Available",
        at_howrah_station: "at Howrah Station",
        restroom: "Restroom",
        food_court: "Food Court",
        coffee_shop: "Coffee Shop",
        atm: "ATM",
        waiting_area: "Waiting Area",
        accessibility: "Accessibility",
        platform_info: "Platform Info",
        station_map: "Station Map",
        available: "Available",
        busy: "Busy",
        // Upcoming Trains
        upcoming_trains: "Upcoming Trains",
        view_all: "View All",
        roukela_vande_bharat: "Roukela Vande Bharat Express",
        mumbai_csmt_sf: "Mumbai CSMT SF Express",
        chennai_central: "MGR Chennai Central Express",
        on_time: "On Time",
        delayed: "10 min late",
        platform_3: "Platform 3",
        platform_1: "Platform 1",
        platform_5: "Platform 5",
        // Footer
        footer_description: "Enhancing your railway travel experience with modern navigation tools.",
        quick_links: "Quick Links",
        help_support: "Help & Support",
        privacy_policy: "Privacy Policy",
        terms_service: "Terms of Service",
        connect_with_us: "Connect With Us",
        footer_copyright: "© 2024 Railway Navigator. All rights reserved.",
        // Modal
        set_alarm_title: "Set Alarm",
        destination_station: "Destination Station:",
        enter_destination: "Enter destination station",
        alarm_time: "Alarm Time:",
        minutes_5: "5 minutes before arrival",
        minutes_10: "10 minutes before arrival",
        minutes_15: "15 minutes before arrival",
        minutes_30: "30 minutes before arrival",
        choose_alarm_sound: "Choose Alarm Sound:",
        bell: "Bell",
        chime: "Chime",
        melody: "Melody",
        confirm_alarm: "Set Alarm"
    },
    bn: {
        // Header
        title: "आपकाPlatform",
        home: "হোম",
        about: "সম্পর্কে",
        contact: "যোগাযোগ",
        search_placeholder: "স্টেশন বা সুবিধা অনুসন্ধান করুন...",
        mobile_search_placeholder: "একটি স্থান অনুসন্ধান করুন",
        // Navigation Options
        start_navigation: "নেভিগেশন শুরু করুন",
        set_alarm: "অ্যালার্ম সেট করুন",
        view_schedule: "সময়সূচী দেখুন",
        // Station Info
        station_information: "স্টেশন তথ্য",
        live: "লাইভ",
        next_station: "পরবর্তী স্টেশন",
        arriving_in: "পৌঁছানোর সময়",
        crowd_density: "ভিড়ের ঘনত্ব",
        current_density: "বর্তমান ঘনত্ব",
        forecast: "পূর্বাভাস",
        // Facilities
        facilities_available: "উপলব্ধ সুবিধা",
        at_howrah_station: "হাওড়া স্টেশনে",
        restroom: "রেস্টরুম",
        food_court: "ফুড কোর্ট",
        coffee_shop: "কফি শপ",
        atm: "এটিএম",
        waiting_area: "অপেক্ষার জায়গা",
        accessibility: "অ্যাক্সেসিবিলিটি",
        platform_info: "প্ল্যাটফর্ম তথ্য",
        station_map: "স্টেশন মানচিত্র",
        available: "উপলব্ধ",
        busy: "ব্যস্ত",
        // Upcoming Trains
        upcoming_trains: "আসন্ন ট্রেন",
        view_all: "সব দেখুন",
        roukela_vande_bharat: "রাউরকেলা বন্দে ভারত এক্সপ্রেস",
        mumbai_csmt_sf: "মুম্বাই সিএসএমটি এসএফ এক্সপ্রেস",
        chennai_central: "এমজিআর চেন্নাই সেন্ট্রাল এক্সপ্রেস",
        on_time: "সময়মতো",
        delayed: "১০ মিনিট দেরি",
        platform_3: "প্ল্যাটফর্ম ৩",
        platform_1: "প্ল্যাটফর্ম ১",
        platform_5: "প্ল্যাটফর্ম ৫",
        // Footer
        footer_description: "আধুনিক নেভিগেশন সরঞ্জাম দিয়ে আপনার রেল ভ্রমণের অভিজ্ঞতা উন্নত করা।",
        quick_links: "দ্রুত লিঙ্ক",
        help_support: "সাহায্য ও সমর্থন",
        privacy_policy: "গোপনীয়তা নীতি",
        terms_service: "পরিষেবার শর্তাবলী",
        connect_with_us: "আমাদের সাথে যোগাযোগ করুন",
        footer_copyright: "© ২০২৪ রেলওয়ে নেভিগেটর। সমস্ত অধিকার সংরক্ষিত।",
        // Modal
        set_alarm_title: "অ্যালার্ম সেট করুন",
        destination_station: "গন্তব্য স্টেশন:",
        enter_destination: "গন্তব্য স্টেশন লিখুন",
        alarm_time: "অ্যালার্ম সময়:",
        minutes_5: "পৌঁছানোর ৫ মিনিট আগে",
        minutes_10: "পৌঁছানোর ১০ মিনিট আগে",
        minutes_15: "পৌঁছানোর ১৫ মিনিট আগে",
        minutes_30: "পৌঁছানোর ৩০ মিনিট আগে",
        choose_alarm_sound: "অ্যালার্ম শব্দ নির্বাচন করুন:",
        bell: "ঘণ্টা",
        chime: "চিম",
        melody: "মেলোডি",
        confirm_alarm: "অ্যালার্ম সেট করুন"
    },
    hi: {
        // Header
        title: "आपकाPlatform",
        home: "होम",
        about: "के बारे में",
        contact: "संपर्क करें",
        search_placeholder: "स्टेशन या सुविधा खोजें...",
        mobile_search_placeholder: "कोई स्थान खोजें",
        // Navigation Options
        start_navigation: "नेविगेशन शुरू करें",
        set_alarm: "अलार्म सेट करें",
        view_schedule: "समय-सारणी देखें",
        // Station Info
        station_information: "स्टेशन जानकारी",
        live: "लाइव",
        next_station: "अगला स्टेशन",
        arriving_in: "पहुंचने में",
        crowd_density: "भीड़ घनत्व",
        current_density: "वर्तमान घनत्व",
        forecast: "पूर्वानुमान",
        // Facilities
        facilities_available: "उपलब्ध सुविधाएं",
        at_howrah_station: "हावड़ा स्टेशन पर",
        restroom: "शौचालय",
        food_court: "फूड कोर्ट",
        coffee_shop: "कॉफी शॉप",
        atm: "एटीएम",
        waiting_area: "प्रतीक्षा क्षेत्र",
        accessibility: "पहुंच-योग्यता",
        platform_info: "प्लेटफॉर्म जानकारी",
        station_map: "स्टेशन नक्शा",
        available: "उपलब्ध",
        busy: "व्यस्त",
        // Upcoming Trains
        upcoming_trains: "आगामी ट्रेनें",
        view_all: "सभी देखें",
        roukela_vande_bharat: "राउरकेला वंदे भारत एक्सप्रेस",
        mumbai_csmt_sf: "मुंबई सीएसएमटी एसएफ एक्सप्रेस",
        chennai_central: "एमजीआर चेन्नई सेंट्रल एक्सप्रेस",
        on_time: "समय पर",
        delayed: "10 मिनट देरी",
        platform_3: "प्लेटफॉर्म 3",
        platform_1: "प्लेटफॉर्म 1",
        platform_5: "प्लेटफॉर्म 5",
        // Footer
        footer_description: "आधुनिक नेविगेशन उपकरणों के साथ आपके रेल यात्रा अनुभव को बेहतर बनाना।",
        quick_links: "त्वरित लिंक",
        help_support: "सहायता और समर्थन",
        privacy_policy: "गोपनीयता नीति",
        terms_service: "सेवा की शर्तें",
        connect_with_us: "हमसे जुड़ें",
        footer_copyright: "© 2024 रेलवे नेविगेटर। सभी अधिकार सुरक्षित।",
        // Modal
        set_alarm_title: "अलार्म सेट करें",
        destination_station: "गंतव्य स्टेशन:",
        enter_destination: "गंतव्य स्टेशन दर्ज करें",
        alarm_time: "अलार्म समय:",
        minutes_5: "पहुंचने से 5 मिनट पहले",
        minutes_10: "पहुंचने से 10 मिनट पहले",
        minutes_15: "पहुंचने से 15 मिनट पहले",
        minutes_30: "पहुंचने से 30 मिनट पहले",
        choose_alarm_sound: "अलार्म ध्वनि चुनें:",
        bell: "घंटी",
        chime: "चाइम",
        melody: "मेलोडी",
        confirm_alarm: "अलार्म सेट करें"
    }
};

// Current language (default to English)
let currentLanguage = 'en';

// Function to update text content based on selected language
function updateLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];

    // Header
    document.querySelector('.logo h1').textContent = t.title;
    document.querySelectorAll('.desktop-nav ul li a')[0].textContent = t.home;
    document.querySelectorAll('.desktop-nav ul li a')[1].textContent = t.about;
    document.querySelectorAll('.desktop-nav ul li a')[2].textContent = t.contact;
    document.querySelector('.search-container input').placeholder = t.search_placeholder;
    document.querySelector('.mob-search-container input').placeholder = t.mobile_search_placeholder;

    // Navigation Options
    document.querySelector('#startNavigation').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${t.start_navigation}`;
    document.querySelector('#setAlarm').innerHTML = `<i class="fas fa-bell"></i> ${t.set_alarm}`;
    document.querySelector('#viewSchedule').innerHTML = `<i class="fas fa-calendar-alt"></i> ${t.view_schedule}`;

    // Station Info
    document.querySelector('.arrival-info .card-header h2').textContent = t.station_information;
    document.querySelector('.arrival-info .badge').textContent = t.live;
    document.querySelector('.detail-item:nth-child(1) h3').textContent = t.next_station;
    document.querySelector('.detail-item:nth-child(2) h3').textContent = t.arriving_in;
    document.querySelector('.crowd-density .card-header h2').textContent = t.crowd_density;
    document.querySelector('#currentCrowd').innerHTML = `${t.current_density}: <span class="medium">${translations[lang].medium || 'Medium'}</span>`;
    document.querySelector('.crowd-forecast h3').textContent = t.forecast;

    // Facilities
    document.querySelector('.facilities .card-header h2').textContent = t.facilities_available;
    document.querySelector('.facilities .subtitle').textContent = t.at_howrah_station;
    const facilities = document.querySelectorAll('.facilities-grid .facility span');
    facilities[0].textContent = t.restroom;
    facilities[1].textContent = t.food_court;
    facilities[2].textContent = t.coffee_shop;
    facilities[3].textContent = t.atm;
    facilities[4].textContent = t.waiting_area;
    facilities[5].textContent = t.accessibility;
    facilities[6].textContent = t.platform_info;
    facilities[7].textContent = t.station_map;
    document.querySelectorAll('.facility-status.available').forEach(el => el.textContent = t.available);
    document.querySelector('.facility-status.busy').textContent = t.busy;

    // Upcoming Trains
    document.querySelector('.upcoming-trains .card-header h2').textContent = t.upcoming_trains;
    document.querySelector('.view-all-btn').textContent = t.view_all;
    const trainCards = document.querySelectorAll('.train-card');
    trainCards[0].querySelector('.train-name').textContent = t.roukela_vande_bharat;
    trainCards[1].querySelector('.train-name').textContent = t.mumbai_csmt_sf;
    trainCards[2].querySelector('.train-name').textContent = t.chennai_central;
    trainCards[0].querySelector('.platform').textContent = t.platform_3;
    trainCards[1].querySelector('.platform').textContent = t.platform_1;
    trainCards[2].querySelector('.platform').textContent = t.platform_5;
    trainCards[0].querySelector('.status.on-time').textContent = t.on_time;
    trainCards[1].querySelector('.status.delayed').textContent = t.delayed;
    trainCards[2].querySelector('.status.on-time').textContent = t.on_time;

    // Footer
    document.querySelectorAll('.footer-section h3')[0].textContent = t.title;
    document.querySelectorAll('.footer-section p')[0].textContent = t.footer_description;
    document.querySelectorAll('.footer-section h3')[1].textContent = t.quick_links;
    document.querySelectorAll('.footer-section ul li a')[0].textContent = t.help_support;
    document.querySelectorAll('.footer-section ul li a')[1].textContent = t.privacy_policy;
    document.querySelectorAll('.footer-section ul li a')[2].textContent = t.terms_service;
    document.querySelectorAll('.footer-section h3')[2].textContent = t.connect_with_us;
    document.querySelector('.footer-bottom p').textContent = t.footer_copyright;

    // Modal
    document.querySelector('#alarmModal .modal-header h2').textContent = t.set_alarm_title;
    document.querySelector('#alarmModal .form-group:nth-child(1) label').textContent = t.destination_station;
    document.querySelector('#stationName').placeholder = t.enter_destination;
    document.querySelector('#alarmModal .form-group:nth-child(2) label').textContent = t.alarm_time;
    const alarmOptions = document.querySelectorAll('#alarmTime option');
    alarmOptions[0].textContent = t.minutes_5;
    alarmOptions[1].textContent = t.minutes_10;
    alarmOptions[2].textContent = t.minutes_15;
    alarmOptions[3].textContent = t.minutes_30;
    document.querySelector('#alarmModal .form-group:nth-child(3) label').textContent = t.choose_alarm_sound;
    const soundOptions = document.querySelectorAll('.sound-option label span');
    soundOptions[0].textContent = t.bell;
    soundOptions[1].textContent = t.chime;
    soundOptions[2].textContent = t.melody;
    document.querySelector('#confirmAlarm').textContent = t.confirm_alarm;
}

// Add language selector to the header
document.addEventListener('DOMContentLoaded', () => {
    // Create language selector dropdown
    const langSelector = document.createElement('select');
    langSelector.id = 'languageSelector';
    langSelector.innerHTML = `
        <option value="en">English</option>
        <option value="bn">Bengali</option>
        <option value="hi">Hindi</option>
    `;
    langSelector.style.padding = '0.5rem';
    langSelector.style.borderRadius = 'var(--radius-md)';
    langSelector.style.border = '1px solid var(--gray-light)';
    langSelector.style.backgroundColor = 'var(--light)';
    langSelector.style.color = 'var(--dark)';
    langSelector.style.marginLeft = '1rem';
    langSelector.style.fontFamily = 'var(--font-sans)';

    // Append to header
    document.querySelector('header').appendChild(langSelector);

    // Update language on change
    langSelector.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
    });

    // Set initial language to English
    updateLanguage('en');
});

// Ensure dark mode compatibility for language selector
const style = document.createElement('style');
style.textContent = `
    .dark-mode #languageSelector {
        background-color: var(--gray-light);
        border-color: rgba(255, 255, 255, 0.1);
        color: var(--dark);
    }
`;
document.head.appendChild(style);