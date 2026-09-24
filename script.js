/* ==========================================================================
   TRAVELMATE - CUTE SCRAPBOOK TRAVEL PLANNER
   JavaScript Functionality: Navigation, Forms, Tabs, Packing, Budget & Mock Data
   ========================================================================== */

// --- Initial Preset Data ---
const PRESET_TRIPS = [
  {
    id: "kyoto-sakura",
    title: "Kyoto Cherry Blossom Adventure",
    destination: "Kyoto, Japan",
    city: "Kyoto",
    hotel: "Gion Machiya Traditional Inn",
    hotelLocation: "Higashiyama Ward, Kyoto",
    startDate: "2026-04-10",
    endDate: "2026-04-13",
    duration: "4 Days / 3 Nights",
    currency: "¥",
    budget: 120000,
    travellerType: "couple",
    travellerCount: 2,
    style: "Cultural & Historic",
    accommodation: "Traditional Ryokan / Boutique Hotel",
    pace: "Moderate (Balanced sightseeing & rest)",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80",
    budgetBreakdown: {
      stay: 45000,
      transport: 25000,
      food: 28000,
      activities: 14000,
      shopping: 8000
    },
    days: [
      {
        dayNum: 1,
        title: "Arashiyama Bamboo & River Stroll",
        highlight: "Green bamboo grooves & matcha tea house",
        morning: [
          { time: "08:30 AM", title: "Early walk through Arashiyama Bamboo Grove", location: "Sagaogurayama" },
          { time: "10:30 AM", title: "Traditional Matcha & Wagashi treat", location: "Okochi Sanso Garden" }
        ],
        afternoon: [
          { time: "01:00 PM", title: "Soba noodle lunch by Oi River", location: "Arashiyama riverside" },
          { time: "03:00 PM", title: "Tenryu-ji Temple Zen Gardens exploration", location: "Ukyo Ward" }
        ],
        evening: [
          { time: "06:30 PM", title: "Kaiseki seasonal dinner at the Ryokan", location: "Gion Inn" },
          { time: "08:30 PM", title: "Peaceful onsen wooden footbath soak", location: "Ryokan Courtyard" }
        ]
      },
      {
        dayNum: 2,
        title: "Vermilion Torii & Historic Gion",
        highlight: "Fushimi Inari morning climb & geisha district",
        morning: [
          { time: "07:30 AM", title: "Fushimi Inari Shrine Thousand Torii gates", location: "Fushimi Ward" },
          { time: "11:00 AM", title: "Kitsune Inari Fox street snack tour", location: "Shrine Market" }
        ],
        afternoon: [
          { time: "01:30 PM", title: "Kimono rental & photography walk", location: "Ninenzaka & Sannenzaka" },
          { time: "04:00 PM", title: "Kiyomizu-dera wooden terrace sunset view", location: "Higashiyama" }
        ],
        evening: [
          { time: "07:00 PM", title: "Lantern-lit dinner along Pontocho Alley", location: "Kamogawa River" },
          { time: "09:00 PM", title: "Sweet strawberry Daifuku dessert hunt", location: "Shijo Dori" }
        ]
      },
      {
        dayNum: 3,
        title: "Golden Pavilion & Tea Ceremony",
        highlight: "Kinkaku-ji reflection & traditional tea ritual",
        morning: [
          { time: "09:00 AM", title: "Marvel at Kinkaku-ji (Golden Pavilion)", location: "Kita Ward" },
          { time: "11:00 AM", title: "Ryoan-ji Temple rock garden meditation", location: "Ryoanji" }
        ],
        afternoon: [
          { time: "01:00 PM", title: "Bento box picnic under cherry blossoms", location: "Kyoto Imperial Park" },
          { time: "03:30 PM", title: "Authentic Chado Matcha Tea Ceremony class", location: "Historic Tea House" }
        ],
        evening: [
          { time: "06:30 PM", title: "Crispy Tonkatsu & craft draft beer dinner", location: "Katsukura Sanjo" },
          { time: "08:30 PM", title: "Gion twilight lantern stroll", location: "Hanamikoji Street" }
        ]
      },
      {
        dayNum: 4,
        title: "Philosopher's Path & Souvenir Farewell",
        highlight: "Canal-side petal shower & pottery shopping",
        morning: [
          { time: "09:00 AM", title: "Walk along cherry blossom Philosopher's Path", location: "Sakyo Ward" },
          { time: "11:00 AM", title: "Ginkaku-ji Silver Pavilion & moss garden", location: "Ginkakuji" }
        ],
        afternoon: [
          { time: "01:00 PM", title: "Nishiki Market 100-stall street food tasting", location: "Nakagyo Ward" },
          { time: "03:30 PM", title: "Pick up hand-crafted Kiyomizu ceramics & tea", location: "Sanjo craft shops" }
        ],
        evening: [
          { time: "06:00 PM", title: "Shinkansen bullet train departure farewell", location: "Kyoto Central Station" }
        ]
      }
    ]
  },
  {
    id: "paris-cafes",
    title: "Paris Romance & Pastel Cafe Strolls",
    destination: "Paris, France",
    city: "Paris",
    hotel: "Hôtel Saint-Germain Pastel Suite",
    hotelLocation: "6th Arrondissement, Paris",
    startDate: "2026-05-15",
    endDate: "2026-05-18",
    duration: "4 Days / 3 Nights",
    currency: "€",
    budget: 1400,
    travellerType: "couple",
    travellerCount: 2,
    style: "Romantic & Cozy",
    accommodation: "Cozy Airbnb / Apartment",
    pace: "Relaxed (Slow mornings & afternoon tea)",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=80",
    budgetBreakdown: {
      stay: 620,
      transport: 200,
      food: 380,
      activities: 120,
      shopping: 80
    },
    days: [
      {
        dayNum: 1,
        title: "Saint-Germain Morning & Montmartre Sunset",
        highlight: "Warm pain au chocolat & artists in Place du Tertre",
        morning: [
          { time: "09:30 AM", title: "Flaky croissants & cafe creme", location: "Café de Flore" },
          { time: "11:00 AM", title: "Vintage book shopping by the Seine", location: "Bouquinistes stalls" }
        ],
        afternoon: [
          { time: "02:00 PM", title: "Funicular up to Montmartre & Sacré-Cœur", location: "Montmartre" },
          { time: "04:30 PM", title: "Watercolor portrait sitting at Place du Tertre", location: "Artists Square" }
        ],
        evening: [
          { time: "07:30 PM", title: "Candlelit French onion soup & red wine", location: "Le Consulat" }
        ]
      },
      {
        dayNum: 2,
        title: "Pastel Louvre, Tuileries & Eiffel Lights",
        highlight: "Monet Water Lilies & evening picnic",
        morning: [
          { time: "10:00 AM", title: "Musée de l'Orangerie giant water lilies", location: "Tuileries Garden" },
          { time: "12:00 PM", title: "Stroll by the green chairs & fountain", location: "Jardin des Tuileries" }
        ],
        afternoon: [
          { time: "02:00 PM", title: "Macaron tasting & pastel packaging", location: "Ladurée Champs-Élysées" },
          { time: "04:30 PM", title: "Vintage thrifting in Le Marais", location: "Rue des Rosiers" }
        ],
        evening: [
          { time: "08:00 PM", title: "Champagne & cheese picnic under Eiffel sparkles", location: "Champ de Mars" }
        ]
      }
    ]
  },
  {
    id: "bali-bliss",
    title: "Bali Island Serenity & Jungle Villas",
    destination: "Ubud & Canggu, Bali",
    city: "Ubud",
    hotel: "Bambu Indah Eco Luxury Treehouse",
    hotelLocation: "Sayan Valley, Ubud",
    startDate: "2026-06-02",
    endDate: "2026-06-06",
    duration: "5 Days / 4 Nights",
    currency: "$",
    budget: 950,
    travellerType: "friends",
    travellerCount: 3,
    style: "Beach & Island Relaxation",
    accommodation: "Beachfront Resort & Spa",
    pace: "Relaxed (Slow mornings & afternoon tea)",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop&q=80",
    budgetBreakdown: {
      stay: 400,
      transport: 150,
      food: 200,
      activities: 120,
      shopping: 80
    },
    days: [
      {
        dayNum: 1,
        title: "Rice Terrace Swings & Smoothie Bowls",
        highlight: "Emerald paddies & dragonfruit bowls",
        morning: [
          { time: "08:00 AM", title: "Tegalalang Rice Terraces morning mist stroll", location: "North Ubud" },
          { time: "10:30 AM", title: "Tropical pitaya smoothie bowls & iced coconut", location: "Clear Cafe Ubud" }
        ],
        afternoon: [
          { time: "02:00 PM", title: "Handmade rattan bag shopping at Art Market", location: "Ubud Traditional Market" },
          { time: "04:30 PM", title: "Flower bath aromatherapy massage", location: "Karsa Spa" }
        ],
        evening: [
          { time: "07:00 PM", title: "Balinese wood-fired pizza & live acoustic set", location: "Campuhan Ridge" }
        ]
      }
    ]
  }
];

// Preset Destinations Catalog
const DESTINATIONS_CATALOG = [
  {
    id: "kyoto",
    name: "Kyoto, Japan",
    region: "Asia",
    tag: "🌸 Zen & Temples",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&auto=format&fit=crop&q=80",
    description: "Quiet moss gardens, vermilion gates, traditional tea rituals, and gentle morning temple bells.",
    highlights: ["Bamboo Forest", "Matcha Cafes", "Ryokans"],
    suggestedDuration: "4 Days / 3 Nights",
    suggestedBudget: "¥120,000",
    currency: "¥"
  },
  {
    id: "paris",
    name: "Paris, France",
    region: "Europe",
    tag: "🥐 Bakery & Art",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=80",
    description: "Crisp flaky croissants, antique flea markets, dreamy museum halls, and golden hour along the Seine.",
    highlights: ["Montmartre", "Louvre", "Boutique Cafes"],
    suggestedDuration: "5 Days / 4 Nights",
    suggestedBudget: "€1,400",
    currency: "€"
  },
  {
    id: "amalfi",
    name: "Amalfi Coast, Italy",
    region: "Europe",
    tag: "🍋 Pastel Cliffs",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&auto=format&fit=crop&q=80",
    description: "Lemon grove trails, pastel colored seaside villages, fresh burrata, and turquoise Mediterranean dips.",
    highlights: ["Positano", "Lemon Granita", "Boat Tours"],
    suggestedDuration: "4 Days / 3 Nights",
    suggestedBudget: "€1,200",
    currency: "€"
  },
  {
    id: "bali",
    name: "Ubud & Canggu, Bali",
    region: "Islands",
    tag: "🌴 Tropical Bliss",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&auto=format&fit=crop&q=80",
    description: "Jungle treehouses, soothing morning yoga, vibrant pink dragonfruit bowls, and orange sunsets.",
    highlights: ["Rice Terraces", "Spas", "Beach Clubs"],
    suggestedDuration: "6 Days / 5 Nights",
    suggestedBudget: "$950",
    currency: "$"
  },
  {
    id: "santorini",
    name: "Santorini, Greece",
    region: "Islands",
    tag: "🌊 White & Blue Domes",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    description: "Whitewashed pathways perched over deep blue caldera waters with world-renowned pink sunsets.",
    highlights: ["Oia Sunsets", "Seafood Tavernas", "Caldera Walk"],
    suggestedDuration: "4 Days / 3 Nights",
    suggestedBudget: "€1,350",
    currency: "€"
  },
  {
    id: "seoul",
    name: "Seoul, South Korea",
    region: "Asia",
    tag: "🍡 Aesthetics & Palaces",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=500&auto=format&fit=crop&q=80",
    description: "Historic Bukchon Hanok villages, futuristic neon night markets, and adorable themed pastry bakeries.",
    highlights: ["Hanok Village", "Night Markets", "Cute Cafes"],
    suggestedDuration: "5 Days / 4 Nights",
    suggestedBudget: "¥110,000",
    currency: "¥"
  }
];

// Initial Packing Checklist Mock Data
const DEFAULT_PACKING_ITEMS = [
  { id: "p1", category: "clothing", label: "Cozy cardigan & light jacket", packed: true },
  { id: "p2", category: "clothing", label: "Walking sneakers for cobbled streets", packed: true },
  { id: "p3", category: "clothing", label: "Flowy pastel dresses / comfy pants", packed: false },
  { id: "p4", category: "clothing", label: "Sleepwear & cozy lounge socks", packed: false },

  { id: "p5", category: "toiletries", label: "Sunscreen SPF 50+ & lip balm", packed: true },
  { id: "p6", category: "toiletries", label: "Hydrating sheet masks & moisturizer", packed: true },
  { id: "p7", category: "toiletries", label: "Travel toothbrush & toothpaste kit", packed: false },
  { id: "p8", category: "toiletries", label: "Solid shampoo bar in cute tin", packed: false },

  { id: "p9", category: "tech", label: "Phone & portable power bank 10,000mAh", packed: true },
  { id: "p10", category: "tech", label: "Universal plug travel adapter", packed: false },
  { id: "p11", category: "tech", label: "Instax polaroid camera & film packs", packed: false },
  { id: "p12", category: "tech", label: "Noise-cancelling headphones for flight", packed: true },

  { id: "p13", category: "documents", label: "Passport (with at least 6mo validity)", packed: true },
  { id: "p14", category: "documents", label: "Flight boarding passes (saved offline)", packed: true },
  { id: "p15", category: "documents", label: "Hotel booking voucher & address in local text", packed: true },
  { id: "p16", category: "documents", label: "Emergency contact & travel insurance card", packed: false },

  { id: "p17", category: "misc", label: "TravelMate scrapbooking pen & stickers", packed: true },
  { id: "p18", category: "misc", label: "Cute reusable tote bag for market finds", packed: false },
  { id: "p19", category: "misc", label: "Hand sanitizer & gentle wet wipes", packed: true }
];

// Application State
let appState = {
  activeTrip: PRESET_TRIPS[0],
  savedTrips: [...PRESET_TRIPS],
  activeDayIndex: 0,
  packingItems: [...DEFAULT_PACKING_ITEMS]
};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  // Load saved state from LocalStorage if available
  loadStateFromStorage();

  // Set default dates in form (Today + 14 days, return + 4 days)
  initPlannerDates();

  // Render initial components
  renderItineraryView();
  renderPackingList();
  renderBudgetDashboard();
  renderSavedTrips();
  renderDestinationsCatalog();

  // Setup mobile navigation toggle
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  // Setup hash change listener for direct anchor navigation
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "") || "home";
    navigateTo(hash, false);
  });

  // Ensure current active section matches initial hash if present
  if (window.location.hash) {
    navigateTo(window.location.hash.replace("#", ""), false);
  }
});

// --- LocalStorage Persistence Helpers ---
function saveStateToStorage() {
  try {
    localStorage.setItem("travelmate_app_state", JSON.stringify({
      activeTrip: appState.activeTrip,
      savedTrips: appState.savedTrips,
      packingItems: appState.packingItems
    }));
  } catch (e) {
    console.warn("Storage write failed:", e);
  }
}

function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem("travelmate_app_state");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.activeTrip) appState.activeTrip = parsed.activeTrip;
      if (parsed.savedTrips && parsed.savedTrips.length) appState.savedTrips = parsed.savedTrips;
      if (parsed.packingItems && parsed.packingItems.length) appState.packingItems = parsed.packingItems;
    }
  } catch (e) {
    console.warn("Storage read failed:", e);
  }
}

// --- Navigation Controller ---
function navigateTo(sectionId, updateHash = true) {
  const sections = document.querySelectorAll(".page-section");
  const navButtons = document.querySelectorAll(".nav-btn");

  const targetSection = document.getElementById(sectionId);
  if (!targetSection) return;

  sections.forEach(sec => sec.classList.remove("active"));
  navButtons.forEach(btn => btn.classList.remove("active"));

  targetSection.classList.add("active");

  const activeBtn = document.querySelector(`.nav-btn[data-target="${sectionId}"]`);
  if (activeBtn) activeBtn.classList.add("active");

  // Close mobile menu if open
  const navMenu = document.getElementById("navMenu");
  if (navMenu) navMenu.classList.remove("show");

  if (updateHash) {
    window.location.hash = sectionId;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- Toast Feedback Helper ---
function showToast(message, emoji = "✨") {
  const toast = document.getElementById("toastNotification");
  if (!toast) return;
  toast.querySelector(".toast-text").textContent = message;
  toast.querySelector(".toast-emoji").textContent = emoji;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// --- Planner Form Logic ---
function initPlannerDates() {
  const depInput = document.getElementById("planDeparture");
  const retInput = document.getElementById("planReturn");
  const durInput = document.getElementById("planDuration");

  const now = new Date();
  const depDate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
  const retDate = new Date(now.getTime() + 18 * 24 * 60 * 60 * 1000);

  const formatDate = d => d.toISOString().split("T")[0];

  if (depInput && retInput) {
    depInput.value = formatDate(depDate);
    retInput.value = formatDate(retDate);

    const updateDuration = () => {
      const start = new Date(depInput.value);
      const end = new Date(retInput.value);
      if (end >= start) {
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        durInput.value = `${diffDays} Days / ${diffDays - 1} Nights`;
      } else {
        durInput.value = "Invalid dates";
      }
    };

    depInput.addEventListener("change", updateDuration);
    retInput.addEventListener("change", updateDuration);
    updateDuration();
  }
}

function handleTripSubmit(e) {
  e.preventDefault();

  const destination = document.getElementById("planDestination").value.trim();
  const departure = document.getElementById("planDeparture").value;
  const returnDate = document.getElementById("planReturn").value;
  const currency = document.getElementById("planCurrency").value;
  const budget = parseFloat(document.getElementById("planBudgetAmount").value) || 1000;
  const travellerType = document.getElementById("planTravellerType").value;
  const travellerCount = parseInt(document.getElementById("planTravellerCount").value, 10) || 1;
  const style = document.getElementById("planTravelStyle").value;
  const accommodation = document.getElementById("planAccommodation").value;
  const pace = document.getElementById("planPace").value;
  const notes = document.getElementById("planNotes").value;

  const start = new Date(departure);
  const end = new Date(returnDate);
  const diffDays = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1);

  // Derive mock hotel name and city
  const city = destination.split(",")[0].trim();
  const hotel = `${city} Cozy Boutique Suites`;

  // Generate dynamic days array
  const generatedDays = [];
  for (let i = 1; i <= Math.min(diffDays, 7); i++) {
    generatedDays.push({
      dayNum: i,
      title: getDayTitleTemplate(city, i, style),
      highlight: `Slow-paced exploration of ${city} neighborhoods and tasty local bites`,
      morning: [
        { time: "09:00 AM", title: `Morning tea & breakfast stroll in ${city}`, location: "Central Town" },
        { time: "11:00 AM", title: `Visit iconic ${city} historical monument`, location: "Historic Center" }
      ],
      afternoon: [
        { time: "01:30 PM", title: `Local artisan lunch & sweet dessert`, location: "Old Town Market" },
        { time: "04:00 PM", title: `Handcrafted souvenir shopping & photo walk`, location: "Artisan Quarter" }
      ],
      evening: [
        { time: "07:30 PM", title: `Sunset dinner with scenic view`, location: "Panoramic Terrace" }
      ]
    });
  }

  // Calculate proportional budget allocation
  const stayCost = Math.round(budget * 0.38);
  const transportCost = Math.round(budget * 0.22);
  const foodCost = Math.round(budget * 0.22);
  const actCost = Math.round(budget * 0.12);
  const shopCost = Math.max(0, budget - (stayCost + transportCost + foodCost + actCost));

  const newTrip = {
    id: "trip-" + Date.now(),
    title: `${city} ${style.split(" ")[0]} Getaway`,
    destination,
    city,
    hotel,
    hotelLocation: `${city} Center`,
    startDate: departure,
    endDate: returnDate,
    duration: `${diffDays} Days / ${diffDays - 1} Nights`,
    currency,
    budget,
    travellerType,
    travellerCount,
    style,
    accommodation,
    pace,
    notes,
    image: getCityCoverImage(city),
    budgetBreakdown: {
      stay: stayCost,
      transport: transportCost,
      food: foodCost,
      activities: actCost,
      shopping: shopCost
    },
    days: generatedDays
  };

  appState.activeTrip = newTrip;
  appState.savedTrips.unshift(newTrip);
  appState.activeDayIndex = 0;

  saveStateToStorage();

  // Re-render relevant modules
  renderItineraryView();
  renderBudgetDashboard();
  renderSavedTrips();

  showToast(`Trip to ${city} created with love!`, "🎉");
  navigateTo("itinerary");
}

function getCityCoverImage(cityName) {
  const map = {
    Kyoto: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80",
    Paris: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=80",
    Bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop&q=80",
    Rome: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=80",
    Tokyo: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&auto=format&fit=crop&q=80",
    London: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=80"
  };
  return map[cityName] || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=80";
}

function getDayTitleTemplate(city, dayNum, style) {
  const titles = [
    `Arrival, Warm Tea & Gentle ${city} Strolls`,
    `Iconic Sights & Secret Alleyways`,
    `Cultural Discovery & Sunset Wonders`,
    `Local Flavors, Cafe Hopping & Vintage Shops`,
    `Scenic Escapes & Memory Scrapbooking`,
    `Hidden Courtyards & Peaceful Farewells`
  ];
  return titles[(dayNum - 1) % titles.length];
}

function resetFormToSample() {
  document.getElementById("planDestination").value = "Kyoto, Japan";
  document.getElementById("planBudgetAmount").value = "120000";
  document.getElementById("planCurrency").value = "¥";
  document.getElementById("planTravellerType").value = "couple";
  document.getElementById("planTravellerCount").value = "2";
  document.getElementById("planTravelStyle").value = "Cultural & Historic";
  document.getElementById("planAccommodation").value = "Traditional Ryokan / Boutique Hotel";
  document.getElementById("planPace").value = "Moderate (Balanced sightseeing & rest)";
  document.getElementById("planNotes").value = "Visit Gion district at twilight and catch the bamboo forest early in the morning.";
  initPlannerDates();
  showToast("Sample Kyoto details loaded!", "🌸");
}

// --- Itinerary Display & Day Tabs ---
function renderItineraryView() {
  const trip = appState.activeTrip;
  if (!trip) return;

  // Header meta
  document.getElementById("itinTripTitle").textContent = trip.title;
  document.getElementById("itinDatesChip").textContent = `📅 ${trip.startDate} - ${trip.endDate}`;
  document.getElementById("itinPaceChip").textContent = `🐾 ${trip.pace.split("(")[0].trim()}`;
  document.getElementById("itinStyleChip").textContent = `✨ ${trip.style}`;
  document.getElementById("itinPartyChip").textContent = `👥 ${trip.travellerCount} Travellers (${trip.travellerType})`;
  document.getElementById("itinHotelName").textContent = trip.hotel || "Cozy Local Stay";
  document.getElementById("itinCityLocation").textContent = trip.hotelLocation || trip.destination;

  // Day tabs
  const tabsContainer = document.getElementById("dayTabsList");
  tabsContainer.innerHTML = "";

  trip.days.forEach((day, index) => {
    const tabBtn = document.createElement("button");
    tabBtn.className = `day-tab-btn ${index === appState.activeDayIndex ? "active" : ""}`;
    tabBtn.setAttribute("role", "tab");
    tabBtn.setAttribute("aria-selected", index === appState.activeDayIndex);
    tabBtn.innerHTML = `<span>Day ${day.dayNum}</span> 🏷️`;
    tabBtn.onclick = () => {
      appState.activeDayIndex = index;
      renderItineraryView();
    };
    tabsContainer.appendChild(tabBtn);
  });

  // Render active day content
  renderActiveDaySchedule();
}

function renderActiveDaySchedule() {
  const contentArea = document.getElementById("dayContentArea");
  const trip = appState.activeTrip;
  if (!trip || !trip.days || !trip.days[appState.activeDayIndex]) {
    contentArea.innerHTML = `<p>No day schedule available.</p>`;
    return;
  }

  const day = trip.days[appState.activeDayIndex];

  const renderSlot = (slotKey, slotName, slotEmoji, timeRange, slotClass) => {
    const items = day[slotKey] || [];
    let itemsHtml = items.map((item, itemIdx) => `
      <li class="activity-item">
        <span class="act-time-pill">${item.time}</span>
        <div class="act-details">
          <strong>${item.title}</strong>
          ${item.location ? `<small>📍 ${item.location}</small>` : ""}
        </div>
        <button class="act-delete-btn" title="Remove activity" onclick="removeActivity('${slotKey}', ${itemIdx})">✕</button>
      </li>
    `).join("");

    if (!items.length) {
      itemsHtml = `<li class="activity-item"><div class="act-details"><small>Slow free time or spontaneous wanderings ✨</small></div></li>`;
    }

    return `
      <div class="slot-card ${slotClass}">
        <div class="slot-header">
          <span class="slot-title">${slotEmoji} ${slotName}</span>
          <span class="slot-time-range">${timeRange}</span>
        </div>
        <ul class="activity-list">
          ${itemsHtml}
        </ul>
      </div>
    `;
  };

  contentArea.innerHTML = `
    <div class="day-headline">
      <div>
        <span class="meta-label">DAY ${day.dayNum} OF ${trip.days.length}</span>
        <h3>${day.title}</h3>
      </div>
      <span class="day-highlight-tag">✨ ${day.highlight || "Magical moments"}</span>
    </div>

    <div class="timeline-slots-grid">
      ${renderSlot("morning", "Morning", "🌅", "8:00 AM - 12:00 PM", "morning-slot")}
      ${renderSlot("afternoon", "Afternoon", "☀️", "12:00 PM - 5:30 PM", "afternoon-slot")}
      ${renderSlot("evening", "Evening", "🌙", "6:00 PM onwards", "evening-slot")}
    </div>
  `;
}

function handleAddNewActivity(e) {
  e.preventDefault();
  const slot = document.getElementById("newActSlot").value;
  const time = document.getElementById("newActTime").value.trim();
  const title = document.getElementById("newActTitle").value.trim();
  const location = document.getElementById("newActLocation").value.trim();

  const trip = appState.activeTrip;
  if (!trip || !trip.days[appState.activeDayIndex]) return;

  const currentDay = trip.days[appState.activeDayIndex];
  if (!currentDay[slot]) currentDay[slot] = [];

  currentDay[slot].push({ time, title, location });
  saveStateToStorage();
  renderActiveDaySchedule();

  document.getElementById("addActivityForm").reset();
  showToast("Activity pinned to day schedule!", "📌");
}

function removeActivity(slotKey, itemIdx) {
  const trip = appState.activeTrip;
  if (!trip || !trip.days[appState.activeDayIndex]) return;

  trip.days[appState.activeDayIndex][slotKey].splice(itemIdx, 1);
  saveStateToStorage();
  renderActiveDaySchedule();
  showToast("Activity removed", "🗑️");
}

// --- Packing List Controller ---
function renderPackingList() {
  const grid = document.getElementById("packingGridContainer");
  if (!grid) return;

  const categories = [
    { key: "clothing", title: "👗 Cute Outfits & Shoes" },
    { key: "toiletries", title: "🧴 Toiletries & Skincare" },
    { key: "tech", title: "🔌 Gadgets & Chargers" },
    { key: "documents", title: "📑 Tickets & Passport" },
    { key: "misc", title: "🧸 Sweet Extras & Snacks" }
  ];

  grid.innerHTML = "";

  let totalItems = appState.packingItems.length;
  let packedCount = appState.packingItems.filter(i => i.packed).length;

  categories.forEach(cat => {
    const items = appState.packingItems.filter(i => i.category === cat.key);
    const catCard = document.createElement("div");
    catCard.className = "pack-cat-card";

    let rowsHtml = items.map(item => `
      <li class="pack-item-row ${item.packed ? 'completed' : ''}">
        <label>
          <input type="checkbox" ${item.packed ? 'checked' : ''} onchange="togglePackingItem('${item.id}')" />
          <span>${item.label}</span>
        </label>
        <button class="del-pack-btn" onclick="deletePackingItem('${item.id}')" title="Delete item">✕</button>
      </li>
    `).join("");

    if (!items.length) {
      rowsHtml = `<li style="color: var(--ink-muted); font-size: 0.85rem; padding: 0.5rem 0;">Nothing here yet!</li>`;
    }

    catCard.innerHTML = `
      <div class="tape-mini"></div>
      <div class="pack-cat-title">
        <span>${cat.title}</span>
        <small style="color: var(--ink-muted); font-size: 0.8rem;">(${items.filter(i=>i.packed).length}/${items.length})</small>
      </div>
      <ul class="pack-item-list">
        ${rowsHtml}
      </ul>
    `;
    grid.appendChild(catCard);
  });

  // Update progress bar
  const percent = totalItems ? Math.round((packedCount / totalItems) * 100) : 0;
  document.getElementById("packingPercent").textContent = `${percent}%`;
  document.getElementById("packingCountText").textContent = `(${packedCount} of ${totalItems} packed)`;
  document.getElementById("packingProgressBar").style.width = `${percent}%`;
}

function togglePackingItem(id) {
  const item = appState.packingItems.find(i => i.id === id);
  if (item) {
    item.packed = !item.packed;
    saveStateToStorage();
    renderPackingList();
  }
}

function deletePackingItem(id) {
  appState.packingItems = appState.packingItems.filter(i => i.id !== id);
  saveStateToStorage();
  renderPackingList();
  showToast("Packing item removed", "🗑️");
}

function addNewPackingItem() {
  const input = document.getElementById("customPackingItem");
  const catSelect = document.getElementById("customPackingCategory");
  const label = input.value.trim();
  if (!label) return;

  appState.packingItems.push({
    id: "pack-" + Date.now(),
    category: catSelect.value,
    label: label,
    packed: false
  });

  input.value = "";
  saveStateToStorage();
  renderPackingList();
  showToast("Added to packing list!", "🧳");
}

function resetPackingChecklist() {
  appState.packingItems.forEach(i => i.packed = false);
  saveStateToStorage();
  renderPackingList();
  showToast("All items reset to unpacked!", "🔄");
}

// --- Budget Dashboard Controller ---
function renderBudgetDashboard() {
  const trip = appState.activeTrip;
  if (!trip || !trip.budgetBreakdown) return;

  const currency = trip.currency || "$";
  const breakdown = trip.budgetBreakdown;

  const total = breakdown.stay + breakdown.transport + breakdown.food + breakdown.activities + breakdown.shopping;
  trip.budget = total;

  document.getElementById("budgetCurrencySymbol").textContent = currency;
  document.getElementById("budgetTotalDisplay").textContent = total.toLocaleString();

  // Per person & per day
  const travellers = trip.travellerCount || 1;
  const numDays = trip.days ? trip.days.length : 1;
  document.getElementById("budgetPerPerson").textContent = `${currency}${Math.round(total / travellers).toLocaleString()}`;
  document.getElementById("budgetPerDay").textContent = `${currency}${Math.round(total / numDays).toLocaleString()}`;

  // Meter Bar Percentages
  const pStay = total ? (breakdown.stay / total) * 100 : 0;
  const pTransport = total ? (breakdown.transport / total) * 100 : 0;
  const pFood = total ? (breakdown.food / total) * 100 : 0;
  const pActivities = total ? (breakdown.activities / total) * 100 : 0;
  const pShopping = total ? (breakdown.shopping / total) * 100 : 0;

  document.getElementById("meterStay").style.width = `${pStay}%`;
  document.getElementById("meterTransport").style.width = `${pTransport}%`;
  document.getElementById("meterFood").style.width = `${pFood}%`;
  document.getElementById("meterActivities").style.width = `${pActivities}%`;
  document.getElementById("meterShopping").style.width = `${pShopping}%`;

  // Render input list
  const container = document.getElementById("budgetItemsContainer");
  const categories = [
    { key: "stay", label: "Accommodations & Stays", icon: "🏡", amount: breakdown.stay },
    { key: "transport", label: "Flights, Trains & Transit", icon: "✈️", amount: breakdown.transport },
    { key: "food", label: "Cafes, Meals & Soft Serves", icon: "🍜", amount: breakdown.food },
    { key: "activities", label: "Attractions & Guided Tours", icon: "🎟️", amount: breakdown.activities },
    { key: "shopping", label: "Souvenirs, Postcards & Gifts", icon: "🛍️", amount: breakdown.shopping }
  ];

  container.innerHTML = categories.map(cat => `
    <div class="budget-row">
      <div class="b-row-left">
        <span class="b-row-icon">${cat.icon}</span>
        <span class="b-row-title">${cat.label}</span>
      </div>
      <div>
        <span style="font-weight: 700; margin-right: 4px;">${currency}</span>
        <input type="number" class="b-row-input" min="0" value="${cat.amount}" onchange="updateBudgetItem('${cat.key}', this.value)" />
      </div>
    </div>
  `).join("");

  // Highlight active currency button
  const currPills = document.querySelectorAll(".curr-pill");
  currPills.forEach(pill => {
    pill.classList.toggle("active", pill.textContent.includes(currency));
  });
}

function updateBudgetItem(categoryKey, value) {
  const val = parseFloat(value) || 0;
  if (appState.activeTrip && appState.activeTrip.budgetBreakdown) {
    appState.activeTrip.budgetBreakdown[categoryKey] = val;
    saveStateToStorage();
    renderBudgetDashboard();
  }
}

function switchCurrency(newCurrency) {
  if (appState.activeTrip) {
    appState.activeTrip.currency = newCurrency;
    saveStateToStorage();
    renderBudgetDashboard();
    renderItineraryView();
    showToast(`Currency switched to ${newCurrency}!`, "🪙");
  }
}

// --- My Trips Archive Controller ---
function renderSavedTrips() {
  const grid = document.getElementById("savedTripsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  appState.savedTrips.forEach(trip => {
    const card = document.createElement("div");
    card.className = "trip-polaroid-card";

    const isCurrent = appState.activeTrip && appState.activeTrip.id === trip.id;

    card.innerHTML = `
      <div class="trip-card-image-box">
        <img src="${trip.image}" alt="${trip.title}" />
        <span class="trip-badge-overlay">${trip.style}</span>
      </div>
      <div class="trip-card-body">
        <h3>${trip.title}</h3>
        <div class="trip-dates-row">
          <span>📅 ${trip.startDate} - ${trip.endDate}</span>
          <span>• ${trip.duration}</span>
        </div>
        <div class="trip-stats-chips">
          <span class="mini-chip">📍 ${trip.city || trip.destination}</span>
          <span class="mini-chip">🪙 ${trip.currency}${trip.budget.toLocaleString()}</span>
          <span class="mini-chip">👥 ${trip.travellerCount} ${trip.travellerType}</span>
        </div>
      </div>
      <div class="trip-card-footer">
        <button class="btn-pastel ${isCurrent ? 'btn-mint' : 'btn-pink'} btn-sm" onclick="selectActiveTrip('${trip.id}')">
          ${isCurrent ? '✓ Active Trip' : 'Open Scrapbook 📖'}
        </button>
        <button class="btn-pastel btn-yellow btn-sm" onclick="deleteTrip('${trip.id}')" title="Delete trip">
          🗑️
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function selectActiveTrip(tripId) {
  const found = appState.savedTrips.find(t => t.id === tripId);
  if (found) {
    appState.activeTrip = found;
    appState.activeDayIndex = 0;
    saveStateToStorage();
    renderItineraryView();
    renderBudgetDashboard();
    renderSavedTrips();
    showToast(`Switched to "${found.title}"!`, "📖");
    navigateTo("itinerary");
  }
}

function deleteTrip(tripId) {
  if (appState.savedTrips.length <= 1) {
    showToast("Keep at least one trip in your scrapbook!", "⚠️");
    return;
  }
  appState.savedTrips = appState.savedTrips.filter(t => t.id !== tripId);
  if (appState.activeTrip.id === tripId) {
    appState.activeTrip = appState.savedTrips[0];
  }
  saveStateToStorage();
  renderSavedTrips();
  renderItineraryView();
  renderBudgetDashboard();
  showToast("Trip removed from archive", "🗑️");
}

function loadSampleTrip(tripTitle) {
  const match = appState.savedTrips.find(t => t.title.toLowerCase().includes("kyoto"));
  if (match) {
    selectActiveTrip(match.id);
  } else {
    appState.savedTrips.push(PRESET_TRIPS[0]);
    selectActiveTrip(PRESET_TRIPS[0].id);
  }
}

function loadSampleTripsPreset() {
  appState.savedTrips = [...PRESET_TRIPS];
  appState.activeTrip = PRESET_TRIPS[0];
  saveStateToStorage();
  renderSavedTrips();
  renderItineraryView();
  renderBudgetDashboard();
  showToast("Preset trips reloaded!", "📁");
}

// --- Destinations Catalog Controller ---
function renderDestinationsCatalog(filter = "all") {
  const grid = document.getElementById("destinationsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = filter === "all" 
    ? DESTINATIONS_CATALOG 
    : DESTINATIONS_CATALOG.filter(d => d.region === filter);

  filtered.forEach(dest => {
    const card = document.createElement("div");
    card.className = "destination-postcard";
    card.innerHTML = `
      <div class="dest-img-wrap">
        <img src="${dest.image}" alt="${dest.name}" />
        <span class="dest-stamp-tag">${dest.tag}</span>
      </div>
      <div class="dest-info">
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
        <div class="dest-highlights">
          ${dest.highlights.map(h => `<span class="h-tag">🌸 ${h}</span>`).join("")}
        </div>
      </div>
      <button class="btn-pastel btn-pink dest-action-btn" onclick="quickPlanDestination('${dest.name}', '${dest.currency}', '${dest.suggestedBudget}')">
        Plan Trip Here ✏️
      </button>
    `;
    grid.appendChild(card);
  });
}

function filterDestinations(region, btnElement) {
  const buttons = document.querySelectorAll(".filter-pill");
  buttons.forEach(b => b.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  renderDestinationsCatalog(region);
}

function quickPlanDestination(destName, currency, budgetStr) {
  document.getElementById("planDestination").value = destName;
  document.getElementById("planCurrency").value = currency;
  const numBudget = parseInt(budgetStr.replace(/[^0-9]/g, "")) || 1000;
  document.getElementById("planBudgetAmount").value = numBudget;

  showToast(`Loaded ${destName} into trip maker!`, "✈️");
  navigateTo("plan");
}
