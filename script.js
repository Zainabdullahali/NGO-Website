const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const canvas = document.getElementById("donutChart");
if (canvas) {
  const ctx = canvas.getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: [
        "Healthy Food",
        "Pure Water",
        "Medicine",
        "Feeding the Poor",
        "Excursions",
      ],
      datasets: [
        {
          data: [37, 17, 20, 12, 13],
          backgroundColor: [
            "#2e7d32",
            "#fbc02d",
            "#f57c00",
            "#aed581",
            "#ffcc80",
          ],
          borderWidth: 0,
          cutout: "60%",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") contactModal.style.display = "none";
});

const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  contactModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == contactModal) {
    contactModal.style.display = "none";
  }
});

closeModal.addEventListener("keydown", (e) => {
  if (e.key === "Enter") contactModal.style.display = "none";
});

const counters = document.querySelectorAll(".count");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 200;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

const translations = {
  en: {
    "logo-title": "Arzi Foundation",
    "nav-home": "Home",
    "nav-about": "About Us",
    "nav-donations": "Donations",
    "nav-campaigns": "Campaigns",
    "nav-blogs": "Blogs",
    "nav-contact": "Contact Us",
    "donate-btn": "Donate Now",
    // Hero section
    "hero-title-1": "Uniting for Change,",
    "hero-title-2": "Building a Brighter",
    "hero-title-3": "Future",
    "hero-desc":
      "Join us in creating lasting impact through collaboration, compassion, and action",
    "hero-btn-primary": "What we do",
    "hero-btn-video": "Play Video",
    "volunteer-count-text": "Happy Volunteer",
    // About Section
    "about-label": "Know About Us",
    "about-title-1": "Creating a Safe Haven for",
    "about-title-2": "Children with Special Needs",
    "about-desc":
      "At Arzi Foundation, we are dedicated to creating a nurturing environment where children with special needs receive the care, support, and resources they deserve. Through personalized programs and a community-driven approach, we empower every child to overcome challenges, unlock their potential, and build a brighter future.",
    "about-btn": "Learn more",

    // Donation Section
    "donation-label": "Donation",
    "donation-title-1": "Your Donation Brings Smiles And",
    "donation-title-2": "Transforms Lives",
    "donation-edu-title": "Education",
    "donation-edu-desc":
      "Empowering future leaders through access to quality education.",
    "donation-edu-link": "See All Campaigns ↗",
    "donation-health-title": "Healthcare",
    "donation-health-desc":
      "Providing essential healthcare services to underserved communities.",
    "donation-health-link": "See All Campaigns ↗",
    "donation-footer-btn": "View All Category ↗",
    // Campaigns
    "campaigns-label": "Campaigns",
    "campaigns-title-1": "Together For Change: Join Our Mission",
    "campaigns-title-2": "To Make A Difference",
    "campaign1-category": "• Pure Water",
    "campaign1-title-1": "Clean Water, Bright",
    "campaign1-title-2": "Futures",
    "campaign1-desc":
      "Providing safe drinking water to transform lives and bring hope to underprivileged children.",
    "campaign2-category": "• Healthy Food",
    "campaign2-title-1": "Nourishing Hope, One",
    "campaign2-title-2": "Meal At A Time",
    "campaign2-desc":
      "Bringing healthy, nutritious food to underprivileged children for a brighter, healthier future.",
    "campaign3-category": "• Medical Care",
    "campaign3-title-1": "Healing Lives,",
    "campaign3-title-2": "Spreading Smiles",
    "campaign3-desc":
      "Providing essential medical care to underprivileged children, ensuring a healthier tomorrow.",
    "goal-label": "Goal",
    "donate-now": "Donate Now! ↗",

    // Impact
    "impact-title-1": "Where Your Giving Goes:",
    "impact-title-2": "Transparency & Impact",
    "impact-subtitle":
      "Ensuring every donation makes a real difference—see how your generosity transforms lives",
    "impact-legend-1": "37% Healthy Food",
    "impact-legend-2": "17% Pure Water",
    "impact-legend-3": "20% Medicine",
    "impact-legend-4": "12% Feeding the Poor",
    "impact-legend-5": "13% Excursions",
    "blog-label": "From The Blog",
    "blog-heading": "Our Latest News And Articles",
    "blog1-title-1": "Providing Food, Clean Water, and",
    "blog1-title-2": "Medical Care to Those Who Need.",
    "blog1-snippet":
      "Ensuring no child suffers from hunger, thirst, or lack of medical care—because every life matters.",
    "blog2-title-1": "No One Should Go Hungry, Thirsty,",
    "blog2-title-2": "or Without Treatment",
    "blog2-snippet":
      "Providing essential food, clean water, and life-saving treatment to build a healthier future.",
    "blog3-title-1": "Nutritious Meals, Safe Water, and",
    "blog3-title-2": "Healthcare to Every Child in Need.",
    "blog3-snippet":
      "Through care, support, and help, bring hope to those who need it the most.",
    "read-more": "Read more →",
    "view-all-blogs": "View All Blogs ↗",
    "footer-title": "Arzi Foundation",
    "footer-description":
      "Empowering communities through food, water, education, and compassion. Join us in creating a better tomorrow.",
    "quick-links-title": "Quick Links",
    "contact-title": "Contact Us",
    "phone-label": "Phone:",
    "address-label": "Address:",
    "address-value": "123 Charity Road, Kindness City, Country",
    "connect-title": "Connect with Us",
    "connect-description": "Follow our journey on social media.",
    copyright: "© 2025 Arzi Foundation. All rights reserved.",

    "contact-heading": "Get In Touch",
    "contact-subheading":
      "Feel free to reach out to us through any of the following ways:",
    "contact-location-title": "Our Location",
    "contact-location-desc": "123 Islamic Center Street, City Name, Country",
    "contact-phone-title": "Phone Number",
    "contact-phone-desc": "+91 12345 67890\n+91 98765 43210",
    "contact-email-title": "Email Address",
    "contact-email-desc": "info@unityinaction.org\nsupport@unityinaction.org",
    "contact-hours-title": "Working Hours",
    "contact-hours-desc":
      "Mon - Fri: 9:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM",
    "form-heading": "Send Us a Message",
    "form-name": "Full Name",
    "form-email": "Email Address",
    "form-phone": "Phone Number",
    "form-subject": "Subject",
    "form-message": "Your Message",
    "form-submit": "Send Message",
    "form-success": "✅ Message sent successfully!",
    "map-heading": "Find Us On Map",
    "map-link": "Open in Google Maps ↗",
  },
  hi: {
    "logo-title": "अर्जी फाउंडेशन",
    "nav-home": "मुखपृष्ठ",
    "nav-about": "हमारे बारे में",
    "nav-donations": "दान",
    "nav-campaigns": "अभियान",
    "nav-blogs": "ब्लॉग्स",
    "nav-contact": "संपर्क करें",
    "donate-btn": "अब दान करें",
    // Hero section (Hindi)
    "hero-title-1": "परिवर्तन के लिए एकजुटता,",
    "hero-title-2": "एक उज्जवल भविष्य के लिए",
    "hero-title-3": "निर्माण",
    "hero-desc":
      "सहयोग, करुणा और कार्रवाई के माध्यम से स्थायी प्रभाव बनाने में हमारे साथ जुड़ें",
    "hero-btn-primary": "हम क्या करते हैं",
    "hero-btn-video": "वीडियो देखें",
    "volunteer-count-text": "खुशहाल स्वयंसेवक",
    // About Section
    "about-label": "हमारे बारे में जानें",
    "about-title-1": "विशेष आवश्यकताओं वाले बच्चों के लिए",
    "about-title-2": "एक सुरक्षित स्थान बनाना",
    "about-desc":
      "अर्जी फाउंडेशन में, हम एक ऐसा पोषणकारी वातावरण बनाने के लिए समर्पित हैं जहाँ विशेष आवश्यकताओं वाले बच्चों को वह देखभाल, समर्थन और संसाधन मिलें जिसके वे हकदार हैं। व्यक्तिगत कार्यक्रमों और सामुदायिक भागीदारी के माध्यम से, हम प्रत्येक बच्चे को चुनौतियों को पार करने, अपनी क्षमताओं को उजागर करने और एक उज्जवल भविष्य का निर्माण करने के लिए सशक्त बनाते हैं।",
    "about-btn": "और जानें",

    // Donation Section
    "donation-label": "दान",
    "donation-title-1": "आपका दान मुस्कान लाता है और",
    "donation-title-2": "जीवन को बदलता है",
    "donation-edu-title": "शिक्षा",
    "donation-edu-desc":
      "गुणवत्तापूर्ण शिक्षा तक पहुंच के माध्यम से भविष्य के नेताओं को सशक्त बनाना।",
    "donation-edu-link": "सभी अभियानों को देखें ↗",
    "donation-health-title": "स्वास्थ्य देखभाल",
    "donation-health-desc":
      "कमज़ोर समुदायों को आवश्यक स्वास्थ्य सेवाएं प्रदान करना।",
    "donation-health-link": "सभी अभियानों को देखें ↗",
    "donation-footer-btn": "सभी श्रेणियां देखें ↗",
    "campaigns-label": "अभियान",
    "campaigns-title-1": "परिवर्तन के लिए एक साथ: हमारे मिशन में शामिल हों",
    "campaigns-title-2": "एक फर्क डालने के लिए",
    "campaign1-category": "• शुद्ध जल",
    "campaign1-title-1": "स्वच्छ जल, उज्ज्वल",
    "campaign1-title-2": "भविष्य",
    "campaign1-desc":
      "कमज़ोर बच्चों के जीवन को बदलने और उम्मीद लाने के लिए सुरक्षित पेयजल प्रदान करना।",
    "campaign2-category": "• पौष्टिक भोजन",
    "campaign2-title-1": "एक उम्मीद, एक",
    "campaign2-title-2": "भोजन के साथ",
    "campaign2-desc":
      "कमज़ोर बच्चों को स्वस्थ, पोषणयुक्त भोजन प्रदान करना ताकि उनका भविष्य उज्ज्वल हो सके।",
    "campaign3-category": "• चिकित्सा सेवा",
    "campaign3-title-1": "जीवन बचाना,",
    "campaign3-title-2": "मुस्कान फैलाना",
    "campaign3-desc":
      "कमज़ोर बच्चों को आवश्यक चिकित्सा सेवाएं प्रदान करना, ताकि वे स्वस्थ भविष्य पा सकें।",
    "goal-label": "लक्ष्य",
    "donate-now": "अब दान करें! ↗",

    // Impact
    "impact-title-1": "आपका दान कहाँ जाता है:",
    "impact-title-2": "पारदर्शिता और प्रभाव",
    "impact-subtitle":
      "सुनिश्चित करना कि प्रत्येक दान का वास्तविक प्रभाव हो—देखें कि आपकी उदारता कैसे जीवन बदलती है",
    "impact-legend-1": "37% पौष्टिक भोजन",
    "impact-legend-2": "17% शुद्ध जल",
    "impact-legend-3": "20% दवा",
    "impact-legend-4": "12% गरीबों को भोजन",
    "impact-legend-5": "13% भ्रमण",
    "blog-label": "ब्लॉग से",
    "blog-heading": "हमारी ताज़ा खबरें और लेख",
    "blog1-title-1": "भोजन, स्वच्छ पानी और",
    "blog1-title-2": "चिकित्सा सेवा जिनको ज़रूरत है।",
    "blog1-snippet":
      "सुनिश्चित करना कि कोई भी बच्चा भूख, प्यास या चिकित्सा की कमी से न जूझे—क्योंकि हर जीवन कीमती है।",
    "blog2-title-1": "कोई भी भूखा, प्यासा या",
    "blog2-title-2": "बिना इलाज के न रहे।",
    "blog2-snippet":
      "आवश्यक भोजन, स्वच्छ जल और जीवन रक्षक इलाज प्रदान कर एक बेहतर भविष्य का निर्माण।",
    "blog3-title-1": "पौष्टिक भोजन, सुरक्षित पानी और",
    "blog3-title-2": "हर ज़रूरतमंद बच्चे को स्वास्थ्य सेवा।",
    "blog3-snippet":
      "देखभाल, सहयोग और मदद के ज़रिए, ज़रूरतमंदों में उम्मीद की किरण जगाना।",
    "read-more": "और पढ़ें →",
    "view-all-blogs": "सभी ब्लॉग देखें ↗",
    "footer-title": "अर्जी फाउंडेशन",
    "footer-description":
      "भोजन, पानी, शिक्षा और करुणा के माध्यम से समुदायों को सशक्त बनाना। हमारे साथ एक बेहतर कल बनाएं।",
    "quick-links-title": "त्वरित लिंक",
    "contact-title": "संपर्क करें",
    "phone-label": "फ़ोन:",
    "address-label": "पता:",
    "address-value": "123 चैरिटी रोड, काइंडनेस सिटी, देश",
    "connect-title": "हमसे जुड़ें",
    "connect-description": "सोशल मीडिया पर हमारे सफर का हिस्सा बनें।",
    copyright: "© 2025 अर्जी फाउंडेशन. सर्वाधिकार सुरक्षित।",
    "contact-heading": "संपर्क करें",
    "contact-subheading":
      "कृपया नीचे दिए गए किसी भी माध्यम से हमसे संपर्क करें:",
    "contact-location-title": "हमारा स्थान",
    "contact-location-desc": "123 इस्लामिक सेंटर स्ट्रीट, शहर का नाम, देश",
    "contact-phone-title": "फ़ोन नंबर",
    "contact-phone-desc": "+91 12345 67890\n+91 98765 43210",
    "contact-email-title": "ईमेल पता",
    "contact-email-desc": "info@unityinaction.org\nsupport@unityinaction.org",
    "contact-hours-title": "कार्य समय",
    "contact-hours-desc":
      "सोम - शुक्र: 9:00 AM – 6:00 PM\nशनिवार: 9:00 AM – 1:00 PM",
    "form-heading": "हमें संदेश भेजें",
    "form-name": "पूरा नाम",
    "form-email": "ईमेल पता",
    "form-phone": "फ़ोन नंबर",
    "form-subject": "विषय",
    "form-message": "आपका संदेश",
    "form-submit": "संदेश भेजें",
    "form-success": "✅ संदेश सफलतापूर्वक भेजा गया!",
    "map-heading": "नक्शे में हमें खोजें",
    "map-link": "Google Maps में खोलें ↗",
  },
};

const switchLanguage = (lang) => {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
};

// Load saved language or default to English
const savedLang = localStorage.getItem("selectedLang") || "en";
switchLanguage(savedLang);
document.getElementById("languageSwitcher").value = savedLang;

// Update on change + save to localStorage
document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  const lang = e.target.value;
  switchLanguage(lang);
  localStorage.setItem("selectedLang", lang);
});

const form = document.getElementById("contactForm");
const popup = document.getElementById("successPopup");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const res = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (res.ok) {
    form.reset();
    popup.style.display = "block";

    // Hide popup after 3 seconds
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  } else {
    alert("Something went wrong. Please try again.");
  }
});
