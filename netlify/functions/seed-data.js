/**
 * ASV TOURS — Seed data for Netlify Blobs storage
 * Extracted from db/seed.js, stored as native JS values (no SQL/JSON.stringify).
 * Used by netlify/functions/api.js to seed the blob store on cold start.
 */
const bcrypt = require('bcryptjs');

const ADMIN_PASSWORD_HASH = bcrypt.hashSync('admin123', 10);

const USERS = [
  { id: 1, name: 'ASV Admin', email: 'admin@asvtours.com', password: ADMIN_PASSWORD_HASH, role: 'admin' }
];

const SETTINGS = {
  min_price: '6000',
  site_title: 'ASV TOURS — Premium Curated Journeys',
  offer_text: 'India Getaways Starting From ₹6,000'
};

const DESTINATIONS = [
  { id: 1, name: 'Goa', slug: 'goa', category: 'india', country: 'India', image_url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80', short_desc: 'Sun-kissed beaches, vibrant nightlife, and Portuguese heritage.', price: 6000, duration: '3N/4D', is_active: 1 },
  { id: 2, name: 'Kerala', slug: 'kerala', category: 'india', country: 'India', image_url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', short_desc: 'Lush backwaters, misty hill stations, and Ayurvedic tranquility.', price: 11000, duration: '5N/6D', is_active: 1 },
  { id: 3, name: 'Uttarakhand', slug: 'uttarakhand', category: 'india', country: 'India', image_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', short_desc: 'Yoga capital of the world, Ganga aarti, and Himalayan foothills.', price: 13500, duration: '4N/5D', is_active: 1 },
  { id: 4, name: 'Himachal Pradesh', slug: 'himachal', category: 'india', country: 'India', image_url: 'https://images.unsplash.com/photo-1597074866923-dc0589150a32?w=800&q=80', short_desc: 'Colonial charm, apple orchards, and snow-capped Himalayan peaks.', price: 15000, duration: '5N/6D', is_active: 1 },
  { id: 5, name: 'Gujarat', slug: 'gujarat', category: 'india', country: 'India', image_url: 'https://images.unsplash.com/photo-1590050752117-2981f4f5a5be?w=800&q=80', short_desc: 'Rann of Kutch white desert, Gir lions, and vibrant textile heritage.', price: 15000, duration: '4N/5D', is_active: 1 },
  { id: 6, name: 'Kashmir', slug: 'kashmir', category: 'india', country: 'India', image_url: 'https://images.unsplash.com/photo-1597074866923-dc0589150a32?w=800&q=80', short_desc: 'Dal Lake houseboats, Mughal gardens, and Alpine meadows.', price: 16500, duration: '5N/6D', is_active: 1 },
  { id: 7, name: 'Rajasthan', slug: 'rajasthan', category: 'india', country: 'India', image_url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80', short_desc: 'Magnificent palaces, golden deserts, and royal hospitality.', price: 18500, duration: '5N/6D', is_active: 1 },
  { id: 8, name: 'Sikkim / Darjeeling', slug: 'sikkim-darjeeling', category: 'india', country: 'India', image_url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80', short_desc: 'Monasteries, tea gardens, and Kanchenjunga views.', price: 25000, duration: '6N/7D', is_active: 1 },
  { id: 9, name: 'Andaman', slug: 'andaman', category: 'india', country: 'India', image_url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', short_desc: 'Turquoise waters, pristine islands, and coral reefs.', price: 25000, duration: '5N/6D', is_active: 1 },
  { id: 10, name: 'Ladakh', slug: 'ladakh', category: 'india', country: 'India', image_url: 'https://images.unsplash.com/photo-1566439768012-5484922c8b25?w=800&q=80', short_desc: 'Dramatic high-altitude landscapes, monasteries, and pristine lakes.', price: 27000, duration: '6N/7D', is_active: 1 },
  { id: 11, name: 'Sri Lanka', slug: 'sri-lanka', category: 'international', country: 'Sri Lanka', image_url: 'https://images.unsplash.com/photo-1586526399029-23c1be6f72a5?w=800&q=80', short_desc: 'Tropical landscapes, ancient temples, and golden beaches.', price: 35000, duration: '5N/6D', is_active: 1 },
  { id: 12, name: 'Thailand', slug: 'thailand', category: 'international', country: 'Thailand', image_url: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80', short_desc: 'Tropical islands, ornate temples, and bustling night markets.', price: 40000, duration: '4N/5D', is_active: 1 },
  { id: 13, name: 'Malaysia', slug: 'malaysia', category: 'international', country: 'Malaysia', image_url: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80', short_desc: 'Kuala Lumpur skyline, rainforests, and island escapes.', price: 45000, duration: '5N/6D', is_active: 1 },
  { id: 14, name: 'Dubai', slug: 'dubai', category: 'international', country: 'UAE', image_url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', short_desc: 'Futuristic skyline, desert safaris, and luxury shopping.', price: 48000, duration: '4N/5D', is_active: 1 },
  { id: 15, name: 'Vietnam', slug: 'vietnam', category: 'international', country: 'Vietnam', image_url: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80', short_desc: 'Ha Long Bay, ancient temples, and vibrant street food.', price: 52000, duration: '6N/7D', is_active: 1 },
  { id: 16, name: 'Bali', slug: 'bali', category: 'international', country: 'Indonesia', image_url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', short_desc: 'Rice terraces, tropical temples, and serene beaches.', price: 55000, duration: '5N/6D', is_active: 1 },
  { id: 17, name: 'Singapore', slug: 'singapore', category: 'international', country: 'Singapore', image_url: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80', short_desc: 'Modern skyline, Gardens by the Bay, and culinary paradise.', price: 58000, duration: '4N/5D', is_active: 1 },
  { id: 18, name: 'Maldives', slug: 'maldives', category: 'international', country: 'Maldives', image_url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80', short_desc: 'Luxury water villas, crystal lagoons, and underwater wonders.', price: 80000, duration: '4N/5D', is_active: 1 },
  { id: 19, name: 'Japan', slug: 'japan', category: 'international', country: 'Japan', image_url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80', short_desc: 'Ancient temples, Mount Fuji, and modern Tokyo culture.', price: 145000, duration: '7N/8D', is_active: 1 },
  { id: 20, name: 'Switzerland', slug: 'switzerland', category: 'international', country: 'Switzerland', image_url: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80', short_desc: 'Swiss Alps, pristine lakes, and charming Alpine villages.', price: 185000, duration: '6N/7D', is_active: 1 },
];

const PACKAGES = [
  {
    id: 1, name: 'Goa Beach Escape', slug: 'goa', category: 'india', title: 'Goa Beach Escape',
    country: 'India', where: 'North Goa · South Goa · Panaji',
    image_url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1600&q=80',
    duration: '3N/4D', duration_nights: 3, group_size: 'Max 10', difficulty: 'Easy',
    best_season: 'Oct — Mar', starting_location: 'Goa Airport',
    price: 6000, offer_price: null, short_desc: 'Sun-kissed beaches, vibrant nightlife, and Portuguese heritage.',
    intro: "Goa is India's favourite beach paradise — a place where golden sands meet swaying palms, where centuries-old Portuguese churches stand beside colourful bazaars, and where every sunset feels like a celebration.",
    about: ['Begin your journey in North Goa, where the energy of Baga and Calangute beaches sets the tone.', 'Move south to the quieter, more serene beaches of Palolem and Agonda.', 'This is the perfect short break for anyone needing sun, sand, and a dose of Goan warmth.'],
    highlights: [{ title: 'Beach Hopping', desc: "Discover North Goa's lively shores and South Goa's serene coves.", icon: 'beach' }, { title: 'Old Goa Churches', desc: 'Visit UNESCO World Heritage churches.', icon: 'temple' }, { title: 'Spice Plantation', desc: 'Walk through aromatic spice gardens.', icon: 'terrace' }, { title: 'Water Sports', desc: 'Parasailing, jet skiing, and banana rides.', icon: 'adventure' }, { title: 'Latin Quarter', desc: "Wander Fontainhas — Goa's Portuguese-era quarter.", icon: 'city' }, { title: 'Sunset Cruise', desc: 'A sunset river cruise on the Mandovi.', icon: 'lake' }],
    itinerary: [{ day: '01', title: 'Arrival in Goa', desc: 'Arrive at Dabolim Airport and transfer to your beach resort in North Goa.' }, { day: '02', title: 'North Goa Exploration', desc: 'Morning: Aguada Fort. Afternoon: water sports at Baga Beach.' }, { day: '03', title: 'Old Goa & South Goa', desc: 'Basilica of Bom Jesus, Se Cathedral, Latin Quarter, Palolem Beach.' }, { day: '04', title: 'Spice Tour & Departure', desc: 'Spice plantation visit and departure.' }],
    accommodation: [{ name: 'Beach Resort (North Goa)', desc: 'Beachfront resort in Calangute with pool and restaurant.' }, { name: 'Beach Hut (South Goa)', desc: 'Charming beach hut on Palolem Beach.' }],
    included: ['All accommodation (3 nights)', 'Daily breakfast and 1 dinner', 'Airport transfers', 'Old Goa guided tour', 'Spice plantation visit', 'Sunset river cruise', 'Dedicated travel planner'],
    not_included: ['Flights', 'Travel insurance', 'Lunches', 'Water sports', 'Personal expenses'],
    is_active: 1
  },
  {
    id: 2, name: 'Kerala Backwater Bliss', slug: 'kerala', category: 'india', title: 'Kerala Backwater Bliss',
    country: 'India', where: 'Kochi · Munnar · Alleppey · Kovalam',
    image_url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=80',
    duration: '5N/6D', duration_nights: 5, group_size: 'Max 8', difficulty: 'Easy',
    best_season: 'Sep — Mar', starting_location: 'Kochi',
    price: 11000, offer_price: null, short_desc: 'Lush backwaters, misty hill stations, and Ayurvedic tranquility.',
    intro: "Kerala — God's Own Country — is a land of serene backwaters, emerald tea plantations, and Ayurvedic healing traditions.",
    about: ['Start in Kochi. Drive to Munnar. The highlight awaits in Alleppey.'],
    highlights: [{ title: 'Houseboat Stay', desc: 'Sleep on a traditional kettuvallam houseboat.', icon: 'lake' }, { title: 'Tea Plantations', desc: 'Walk through emerald tea gardens of Munnar.', icon: 'terrace' }, { title: 'Kathakali Dance', desc: 'Witness the elaborate Kathakali dance performance.', icon: 'dance' }, { title: 'Ayurvedic Spa', desc: 'Traditional Ayurvedic massage and wellness.', icon: 'spa' }, { title: 'Spice Markets', desc: "Explore Kochi's aromatic spice bazaars.", icon: 'craft' }, { title: 'Backwater Cruise', desc: 'Glide through narrow canals lined with coconut palms.', icon: 'fjord' }],
    itinerary: [{ day: '01', title: 'Arrival in Kochi', desc: 'Fort Kochi exploration and Kathakali dance.' }, { day: '02', title: 'Kochi to Munnar', desc: 'Scenic drive to Munnar through spice plantations.' }, { day: '03', title: 'Munnar Exploration', desc: 'Eravikulam National Park and tea factory visit.' }, { day: '04', title: 'Munnar to Alleppey', desc: 'Board houseboat for overnight cruise.' }, { day: '05', title: 'Alleppey to Kovalam', desc: 'Ayurvedic spa and sunset at lighthouse beach.' }, { day: '06', title: 'Departure', desc: 'Transfer to Trivandrum airport.' }],
    accommodation: [{ name: 'Heritage Hotel (Kochi)', desc: 'Boutique heritage hotel in Fort Kochi.' }, { name: 'Tea Estate Bungalow (Munnar)', desc: 'Colonial-era bungalow surrounded by tea gardens.' }, { name: 'Houseboat (Alleppey)', desc: 'Traditional kettuvallam houseboat.' }],
    included: ['All accommodation (5 nights)', 'Daily breakfast and 2 dinners', 'Airport transfers', 'Houseboat overnight', 'Kathakali performance', 'Tea plantation tour', 'Ayurvedic massage', 'Dedicated travel planner'],
    not_included: ['Flights', 'Travel insurance', 'Lunches', 'Optional activities', 'Personal expenses'],
    is_active: 1
  },
  {
    id: 3, name: 'Himachal — Shimla & Manali', slug: 'himachal', category: 'india', title: 'Himachal — Shimla & Manali',
    country: 'India', where: 'Shimla · Kullu · Manali',
    image_url: 'https://images.unsplash.com/photo-1597074866923-dc0589150a32?w=1600&q=80',
    duration: '5N/6D', duration_nights: 5, group_size: 'Max 8', difficulty: 'Easy',
    best_season: 'Mar — Jun, Dec — Feb', starting_location: 'Chandigarh',
    price: 15000, offer_price: null, short_desc: 'Colonial charm, apple orchards, and snow-capped Himalayan peaks.',
    intro: 'Himachal Pradesh is the crown jewel of Indian hill stations — where colonial-era architecture meets dramatic Himalayan landscapes.',
    about: ['Begin in Shimla. Drive to Manali through Kullu Valley.'],
    highlights: [{ title: 'Toy Train Ride', desc: 'UNESCO-listed Kalka-Shimla railway.', icon: 'train' }, { title: 'Rohtang Pass', desc: 'Breathtaking views of the Pir Panjal range.', icon: 'mountain' }, { title: 'Old Manali', desc: 'Bohemian cafés, apple orchards, and Hadimba Temple.', icon: 'temple' }, { title: 'River Rafting', desc: 'White-water rafting on the Beas River.', icon: 'adventure' }, { title: 'Mall Road Shimla', desc: 'Colonial-era buildings and mountain café culture.', icon: 'city' }, { title: 'Solang Valley', desc: 'Paragliding, zorbing, and ski slopes.', icon: 'hike' }],
    itinerary: [{ day: '01', title: 'Arrival in Shimla', desc: 'Drive from Chandigarh. Walk the Mall Road.' }, { day: '02', title: 'Shimla Sightseeing', desc: 'Kufri excursion and Jakhoo Temple.' }, { day: '03', title: 'Shimla to Manali', desc: 'Scenic drive via Kullu Valley.' }, { day: '04', title: 'Manali Exploration', desc: 'Hadimba Temple, Solang Valley adventure.' }, { day: '05', title: 'Rohtang / Snow Point', desc: 'Full-day excursion to Rohtang Pass.' }, { day: '06', title: 'Departure', desc: 'Drive to Chandigarh Airport.' }],
    accommodation: [{ name: 'Colonial Hotel (Shimla)', desc: 'Heritage hotel on Mall Road.' }, { name: 'Riverside Resort (Manali)', desc: 'Boutique resort on the banks of the Beas.' }],
    included: ['All accommodation (5 nights)', 'Daily breakfast and 1 dinner', 'All transfers', 'Kufri excursion', 'Solang Valley visit', 'Rohtang excursion', 'Dedicated travel planner'],
    not_included: ['Flights', 'Travel insurance', 'Lunches', 'River rafting', 'Personal expenses'],
    is_active: 1
  },
  {
    id: 4, name: 'Kashmir — Paradise on Earth', slug: 'kashmir', category: 'india', title: 'Kashmir — Paradise on Earth',
    country: 'India', where: 'Srinagar · Gulmarg · Pahalgam · Sonmarg',
    image_url: 'https://images.unsplash.com/photo-1597074866923-dc0589150a32?w=1600&q=80',
    duration: '5N/6D', duration_nights: 5, group_size: 'Max 8', difficulty: 'Easy',
    best_season: 'Mar — Oct', starting_location: 'Srinagar',
    price: 16500, offer_price: null, short_desc: 'Dal Lake houseboats, Mughal gardens, and Alpine meadows.',
    intro: "Kashmir is India's most breathtaking destination — a valley of snow-capped peaks, pristine lakes, and Mughal gardens.",
    about: ['Begin with a stay on a houseboat on Dal Lake. Drive to Gulmarg.'],
    highlights: [{ title: 'Dal Lake Stay', desc: 'Sleep on a luxurious shikara houseboat.', icon: 'lake' }, { title: 'Gulmarg Gondola', desc: "Ride Asia's highest cable car to 13,000 ft.", icon: 'mountain' }, { title: 'Mughal Gardens', desc: 'Nishat, Shalimar, and Chashme Shahi.', icon: 'terrace' }, { title: 'Pahalgam Valleys', desc: 'Betaab Valley and Aru Valley.', icon: 'hike' }, { title: 'Kashmiri Cuisine', desc: 'Wazwan feast, Kahwa tea, and lamb Rogan Josh.', icon: 'food' }, { title: 'Pashmina Shopping', desc: 'Authentic Pashmina shawls and carpets.', icon: 'craft' }],
    itinerary: [{ day: '01', title: 'Arrival in Srinagar', desc: 'Transfer to houseboat. Shikara ride at sunset.' }, { day: '02', title: 'Mughal Gardens', desc: 'Nishat, Shalimar, Chashme Shahi, Shankaracharya Temple.' }, { day: '03', title: 'Gulmarg Excursion', desc: 'Gondola ride to 13,000 ft.' }, { day: '04', title: 'Pahalgam Day Trip', desc: 'Betaab Valley and Aru Valley.' }, { day: '05', title: 'Srinagar Local', desc: 'Old city, Jama Masjid, Pashmina shopping.' }, { day: '06', title: 'Departure', desc: 'Transfer to Srinagar Airport.' }],
    accommodation: [{ name: 'Deluxe Houseboat (Dal Lake)', desc: 'Luxury shikara houseboat with carved wood interiors.' }],
    included: ['All accommodation (5 nights)', 'Daily breakfast and 2 dinners', 'Airport transfers', 'Shikara rides (2)', 'Gulmarg Gondola ticket', 'Wazwan dinner', 'Dedicated travel planner'],
    not_included: ['Flights', 'Travel insurance', 'Lunches', 'Pony rides', 'Personal expenses'],
    is_active: 1
  },
  {
    id: 5, name: 'Royal Rajasthan Trail', slug: 'rajasthan', category: 'india', title: 'Royal Rajasthan Trail',
    country: 'India', where: 'Jaipur · Jodhpur · Jaisalmer · Udaipur',
    image_url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80',
    duration: '5N/6D', duration_nights: 5, group_size: 'Max 8', difficulty: 'Easy',
    best_season: 'Oct — Mar', starting_location: 'Jaipur',
    price: 18500, offer_price: null, short_desc: 'Magnificent palaces, golden deserts, and royal hospitality.',
    intro: "Rajasthan is India's most romantic state — a land of maharajas' palaces, golden desert fortresses, and lakes reflecting centuries of royal grandeur.",
    about: ['Start in Jaipur. Move to Jodhpur. End in Udaipur.'],
    highlights: [{ title: 'Amber Fort', desc: 'Masterpiece of Rajput architecture.', icon: 'fort' }, { title: 'Blue City', desc: 'Indigo-washed lanes beneath Mehrangarh Fort.', icon: 'city' }, { title: 'Desert Camp', desc: 'Camel ride and campfire under the stars.', icon: 'desert' }, { title: 'Lake Pichola', desc: 'Sunset boat ride in Udaipur.', icon: 'lake' }, { title: 'Heritage Havelis', desc: 'Restored merchant mansions with rooftop dining.', icon: 'haveli' }, { title: 'Local Craft', desc: 'Block printing and blue pottery workshops.', icon: 'craft' }],
    itinerary: [{ day: '01', title: 'Arrival in Jaipur', desc: 'Hawa Mahal and Rajasthani thali dinner.' }, { day: '02', title: 'Amber Fort & Jaipur', desc: 'Amber Fort, City Palace, block printing workshop.' }, { day: '03', title: 'Jaipur to Jodhpur', desc: 'Sardar Market and rooftop dinner.' }, { day: '04', title: 'Mehrangarh & Blue City', desc: 'Mehrangarh Fort and Blue City walking tour.' }, { day: '05', title: 'Jaisalmer Desert Safari', desc: 'Golden fort and camel safari at Sam Sand Dunes.' }, { day: '06', title: 'Udaipur & Departure', desc: 'Lake Pichola boat ride and farewell dinner.' }],
    accommodation: [{ name: 'Heritage Haveli (Jaipur)', desc: 'Restored merchant mansion with courtyard.' }, { name: 'Desert Camp (Jaisalmer)', desc: 'Luxury camp in Sam Sand Dunes.' }, { name: 'Lake View Hotel (Udaipur)', desc: 'Heritage property on Lake Pichola.' }],
    included: ['All accommodation (5 nights)', 'Daily breakfast and 2 dinners', 'All transfers', 'Amber Fort entry', 'Mehrangarh Fort entry', 'Camel safari', 'Lake Pichola boat ride', 'Block printing workshop', 'Dedicated travel planner'],
    not_included: ['Flights', 'Travel insurance', 'Lunches', 'Optional activities', 'Personal expenses'],
    is_active: 1
  },
  {
    id: 6, name: 'Uttarakhand Himalayan Gateway', slug: 'uttarakhand', category: 'india', title: 'Uttarakhand Himalayan Gateway',
    country: 'India', where: 'Dehradun · Mussoorie · Rishikesh · Haridwar',
    image_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
    duration: '4N/5D', duration_nights: 4, group_size: 'Max 8', difficulty: 'Easy',
    best_season: 'Mar — Jun, Sep — Nov', starting_location: 'Dehradun',
    price: 13500, offer_price: null, short_desc: 'Yoga capital of the world, Ganga aarti, and Himalayan foothills.',
    intro: 'Uttarakhand is the gateway to the Himalayas — a land of holy rivers, yoga ashrams, and hill stations wrapped in pine forests.',
    about: ['Begin in Dehradun. Drive to Mussoorie. Descend to Rishikesh. End in Haridwar.'],
    highlights: [{ title: 'Ganga Aarti', desc: 'Spectacular evening aarti at Har Ki Pauri.', icon: 'temple' }, { title: 'Yoga in Rishikesh', desc: 'Morning yoga at a riverside ashram.', icon: 'spa' }, { title: 'Laxman Jhula', desc: 'Walk across the iconic suspension bridge.', icon: 'fjord' }, { title: 'Mussoorie Hills', desc: 'Panoramic Himalayan views from Gun Hill.', icon: 'mountain' }, { title: 'River Rafting', desc: 'White-water rafting on the Ganges.', icon: 'adventure' }, { title: 'Ashram Visit', desc: 'Visit a traditional yoga ashram.', icon: 'dance' }],
    itinerary: [{ day: '01', title: 'Dehradun to Mussoorie', desc: 'Gun Hill viewpoint and Kempty Falls.' }, { day: '02', title: 'Mussoorie to Rishikesh', desc: 'Ganga aarti at Triveni Ghat.' }, { day: '03', title: 'Rishikesh Exploration', desc: 'Yoga, Laxman Jhula, Beatles Ashram.' }, { day: '04', title: 'Rishikesh to Haridwar', desc: 'Ganga aarti at Har Ki Pauri.' }, { day: '05', title: 'Departure', desc: 'Mansa Devi Temple and airport transfer.' }],
    accommodation: [{ name: 'Hill Resort (Mussoorie)', desc: 'Colonial-era hill resort with mountain views.' }, { name: 'Riverside Hotel (Rishikesh)', desc: 'Hotel on the banks of the Ganges.' }],
    included: ['All accommodation (4 nights)', 'Daily breakfast and 1 dinner', 'All transfers', 'Rishikesh temple tour', 'Yoga session', 'Ganga aarti visit', 'Dedicated travel planner'],
    not_included: ['Flights', 'Travel insurance', 'Lunches', 'River rafting', 'Personal expenses'],
    is_active: 1
  },
  {
    id: 7, name: 'Thailand — Land of Smiles', slug: 'thailand', category: 'international', title: 'Thailand — Land of Smiles',
    country: 'Thailand', where: 'Bangkok · Chiang Mai · Phuket',
    image_url: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1600&q=80',
    duration: '4N/5D', duration_nights: 4, group_size: 'Max 10', difficulty: 'Easy',
    best_season: 'Nov — Mar', starting_location: 'Bangkok',
    price: 40000, offer_price: null, short_desc: 'Tropical islands, ornate temples, and bustling night markets.',
    intro: "Thailand is Southeast Asia's most beloved destination — a country of golden temples, tropical islands, legendary street food, and warm hospitality.",
    about: ['Begin in Bangkok. Visit Chiang Mai. End in Phuket.'],
    highlights: [{ title: 'Grand Palace', desc: "Bangkok's magnificent royal complex.", icon: 'temple' }, { title: 'Phi Phi Islands', desc: 'Crystal-clear waters and limestone cliffs.', icon: 'beach' }, { title: 'Night Markets', desc: "Bangkok and Chiang Mai's legendary street food.", icon: 'food' }, { title: 'Elephant Sanctuary', desc: 'Ethical elephant encounter in Chiang Mai.', icon: 'terrace' }, { title: 'Island Hopping', desc: "Explore Phuket's surrounding islands.", icon: 'fjord' }, { title: 'Thai Massage', desc: 'Traditional Thai massage and spa treatments.', icon: 'spa' }],
    itinerary: [{ day: '01', title: 'Arrival in Bangkok', desc: 'Grand Palace and Wat Pho. Night market dinner.' }, { day: '02', title: 'Bangkok Exploration', desc: 'Floating market and Chinatown.' }, { day: '03', title: 'Fly to Chiang Mai', desc: 'Elephant sanctuary visit and night bazaar.' }, { day: '04', title: 'Chiang Mai to Phuket', desc: 'Temple visit. Fly to Phuket. Beach evening.' }, { day: '05', title: 'Phuket & Departure', desc: 'Phi Phi Islands day trip and departure.' }],
    accommodation: [{ name: 'City Hotel (Bangkok)', desc: 'Modern hotel near Sukhumvit.' }, { name: 'Boutique Hotel (Chiang Mai)', desc: 'Lanna-style boutique in the Old City.' }, { name: 'Beach Resort (Phuket)', desc: 'Beachfront resort on Kata Beach.' }],
    included: ['All accommodation (4 nights)', 'Daily breakfast', 'All transfers', 'Domestic flights (BKK-CNX-HKT)', 'Grand Palace entry', 'Phi Phi Islands tour', 'Dedicated travel planner'],
    not_included: ['International flights', 'Travel insurance', 'Lunches and dinners', 'Personal expenses'],
    is_active: 1
  },
  {
    id: 8, name: 'Japan — Rising Sun', slug: 'japan', category: 'international', title: 'Japan — Rising Sun',
    country: 'Japan', where: 'Tokyo · Kyoto · Osaka',
    image_url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=80',
    duration: '7N/8D', duration_nights: 7, group_size: 'Max 10', difficulty: 'Easy',
    best_season: 'Mar — May, Oct — Nov', starting_location: 'Tokyo',
    price: 145000, offer_price: null, short_desc: 'Ancient temples, Mount Fuji, and modern Tokyo culture.',
    intro: 'Japan is a land of contrasts — where ancient temples stand beside neon-lit skyscrapers, where bullet trains connect centuries of tradition to cutting-edge innovation.',
    about: ['Begin in Tokyo. Travel to Kyoto. End in Osaka.'],
    highlights: [{ title: 'Mount Fuji', desc: "Iconic views of Japan's sacred mountain.", icon: 'mountain' }, { title: 'Kyoto Temples', desc: 'Fushimi Inari, Kinkaku-ji, and bamboo groves.', icon: 'temple' }, { title: 'Shinkansen', desc: 'Experience the legendary bullet train.', icon: 'train' }, { title: 'Cherry Blossoms', desc: 'Seasonal sakura viewing in parks and gardens.', icon: 'blossom' }, { title: 'Tokyo Tower', desc: 'Panoramic views from the iconic tower.', icon: 'city' }, { title: 'Hot Springs', desc: 'Traditional onsen experience near Mt. Fuji.', icon: 'spring' }],
    itinerary: [{ day: '01', title: 'Arrival in Tokyo', desc: 'Shibuya Crossing and Shinjuku. Welcome dinner.' }, { day: '02', title: 'Tokyo Exploration', desc: 'Asakusa, Senso-ji, Tokyo Skytree.' }, { day: '03', title: 'Day Trip: Mt. Fuji', desc: 'Hakone and Lake Ashi with Mt. Fuji views.' }, { day: '04', title: 'Tokyo to Kyoto', desc: 'Shinkansen to Kyoto. Fushimi Inari shrine.' }, { day: '05', title: 'Kyoto Temples', desc: 'Kinkaku-ji, Arashiyama bamboo grove.' }, { day: '06', title: 'Kyoto Traditional', desc: 'Tea ceremony, geisha district, Nijo Castle.' }, { day: '07', title: 'Kyoto to Osaka', desc: 'Osaka Castle, Dotonbori food tour.' }, { day: '08', title: 'Departure', desc: 'Transfer to Kansai Airport.' }],
    accommodation: [{ name: 'Business Hotel (Tokyo)', desc: 'Modern hotel in Shinjuku with city views.' }, { name: 'Ryokan (Kyoto)', desc: 'Traditional Japanese inn with tatami rooms.' }, { name: 'Hotel (Osaka)', desc: 'Central hotel near Dotonbori.' }],
    included: ['All accommodation (7 nights)', 'Daily breakfast', 'All transfers', 'Japan Rail Pass (7-day)', 'Tea ceremony experience', 'Mt. Fuji day trip', 'Dedicated travel planner'],
    not_included: ['International flights', 'Travel insurance', 'Lunches and dinners', 'Personal expenses'],
    is_active: 1
  },
  {
    id: 9, name: 'Maldives — Turquoise Dreams', slug: 'maldives', category: 'international', title: 'Maldives — Turquoise Dreams',
    country: 'Maldives', where: 'Malé · Resort Island',
    image_url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80',
    duration: '4N/5D', duration_nights: 4, group_size: 'Max 4', difficulty: 'Easy',
    best_season: 'Nov — Apr', starting_location: 'Malé',
    price: 80000, offer_price: null, short_desc: 'Luxury water villas, crystal lagoons, and underwater wonders.',
    intro: 'The Maldives is the ultimate tropical escape — overwater villas, turquoise lagoons, vibrant coral reefs, and absolute serenity.',
    about: ['Fly into Malé. Transfer to a luxury resort island.'],
    highlights: [{ title: 'Water Villa', desc: 'Sleep over crystal-clear lagoon waters.', icon: 'lake' }, { title: 'Snorkeling', desc: 'Vibrant coral reefs and marine life.', icon: 'beach' }, { title: 'Sunset Dolphin Cruise', desc: 'Watch dolphins play at golden hour.', icon: 'fjord' }, { title: 'Spa & Wellness', desc: 'Overwater spa with ocean views.', icon: 'spa' }, { title: 'Private Beach', desc: 'Exclusive beach dining under the stars.', icon: 'desert' }, { title: 'Scuba Diving', desc: 'Discover underwater world with guided dives.', icon: 'adventure' }],
    itinerary: [{ day: '01', title: 'Arrival in Malé', desc: 'Seaplane transfer to resort. Sunset dinner.' }, { day: '02', title: 'Beach & Snorkel', desc: 'Morning snorkeling. Afternoon pool and spa.' }, { day: '03', title: 'Island Excursion', desc: 'Dolphin cruise and sandbank picnic.' }, { day: '04', title: 'Water Activities', desc: 'Scuba diving or jet ski. Evening beach dinner.' }, { day: '05', title: 'Departure', desc: 'Seaplane transfer to Malé and departure.' }],
    accommodation: [{ name: 'Water Villa', desc: 'Overwater villa with glass floor, private deck, and lagoon access.' }],
    included: ['All accommodation (4 nights)', 'All meals (full board)', 'Airport transfers (seaplane)', 'Snorkeling equipment', 'Sunset dolphin cruise', 'Dedicated travel planner'],
    not_included: ['International flights', 'Travel insurance', 'Scuba diving', 'Spa treatments', 'Personal expenses'],
    is_active: 1
  },
  {
    id: 10, name: 'Swiss Alpine Escape', slug: 'switzerland', category: 'international', title: 'Swiss Alpine Escape',
    country: 'Switzerland', where: 'Zurich · Lucerne · Interlaken · Zermatt',
    image_url: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1600&q=80',
    duration: '6N/7D', duration_nights: 6, group_size: 'Max 8', difficulty: 'Easy',
    best_season: 'Jun — Sep', starting_location: 'Zurich',
    price: 185000, offer_price: null, short_desc: 'Swiss Alps, pristine lakes, and charming Alpine villages.',
    intro: "Switzerland is Europe's most picturesque country — a land of snow-capped Alps, emerald lakes, chocolate-box villages, and world-class scenic trains.",
    about: ['Begin in Zurich. Visit Lucerne and Interlaken. End in Zermatt.'],
    highlights: [{ title: 'Matterhorn', desc: 'Iconic views of the Matterhorn in Zermatt.', icon: 'mountain' }, { title: 'Glacier Express', desc: 'Scenic train ride through the Alps.', icon: 'train' }, { title: 'Lake Geneva', desc: 'Cruise on crystal-clear Alpine lake.', icon: 'lake' }, { title: 'Jungfraujoch', desc: 'Top of Europe — 11,333 ft observation deck.', icon: 'hike' }, { title: 'Swiss Chocolate', desc: 'Visit a chocolate factory and tasting.', icon: 'food' }, { title: 'Lake Lucerne', desc: 'Scenic boat ride with mountain backdrop.', icon: 'fjord' }],
    itinerary: [{ day: '01', title: 'Arrival in Zurich', desc: 'Old Town tour and lake cruise.' }, { day: '02', title: 'Zurich to Lucerne', desc: 'Chapel Bridge, Lion Monument, lake cruise.' }, { day: '03', title: 'Lucerne to Interlaken', desc: 'Scenic train through Alpine valleys.' }, { day: '04', title: 'Jungfraujoch Excursion', desc: 'Train to the Top of Europe.' }, { day: '05', title: 'Interlaken to Zermatt', desc: 'Glacier Express scenic train ride.' }, { day: '06', title: 'Zermatt & Matterhorn', desc: 'Matterhorn views and Gornergrat railway.' }, { day: '07', title: 'Departure', desc: 'Transfer to Zurich Airport.' }],
    accommodation: [{ name: 'Lakeside Hotel (Lucerne)', desc: 'Premium hotel with lake and mountain views.' }, { name: 'Alpine Resort (Interlaken)', desc: 'Mountain resort with valley views.' }, { name: 'Boutique Hotel (Zermatt)', desc: 'Charming hotel with Matterhorn views.' }],
    included: ['All accommodation (6 nights)', 'Daily breakfast', 'All transfers', 'Swiss Travel Pass', 'Jungfraujoch excursion', 'Glacier Express', 'Dedicated travel planner'],
    not_included: ['International flights', 'Travel insurance', 'Lunches and dinners', 'Personal expenses'],
    is_active: 1
  }
];

const OFFERS = [
  { id: 1, title: 'Goa Summer Special', package_id: 1, original_price: 7500, offer_price: 6000, offer_text: 'Beach escape with all-inclusive stays', start_date: '2026-04-01', end_date: '2026-09-30', is_active: 1 },
  { id: 2, title: 'Kerala Monsoon Magic', package_id: 2, original_price: 14000, offer_price: 11000, offer_text: 'Monsoon season special — backwaters and Ayurveda', start_date: '2026-06-01', end_date: '2026-09-30', is_active: 1 }
];

module.exports = { USERS, SETTINGS, DESTINATIONS, PACKAGES, OFFERS };
