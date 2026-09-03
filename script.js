// ═══════════════════════════════════════════════════════════════════════════
// ASV TOURS — Conversion-First Script
// ═══════════════════════════════════════════════════════════════════════════

// ── Journey Data Store (20 destinations) ──
let allJourneys = [
  // ════════════════ INDIA ════════════════
  {
    slug: 'goa',
    category: 'india',
    num: '01',
    title: 'Goa Beach Escape',
    country: 'India',
    where: 'North Goa · South Goa · Panaji',
    img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1600&q=80',
    duration: '3N/4D',
    durationNights: 3,
    groupSize: 'Max 10',
    difficulty: 'Easy',
    bestSeason: 'Oct — Mar',
    startingLocation: 'Goa Airport',
    destination: 'North Goa · South Goa · Panaji',
    price: '₹6,000',
    priceNum: 6000,
    shortDesc: 'Sun-kissed beaches, vibrant nightlife, and Portuguese heritage.',
    intro: 'Goa is India\'s favourite beach paradise — a place where golden sands meet swaying palms, where centuries-old Portuguese churches stand beside colourful bazaars, and where every sunset feels like a celebration. This quick getaway packs the best of Goa into four unforgettable days.',
    about: [
      'Begin your journey in North Goa, where the energy of Baga and Calangute beaches sets the tone. Explore the Saturday Night Market, try authentic Goan fish curry at a beach shack, and watch the sun melt into the Arabian Sea.',
      'Move south to the quieter, more serene beaches of Palolem and Agonda. Visit the Basilica of Bom Jesus — a UNESCO World Heritage Site — and wander through the Latin Quarter of Fontainhas with its pastel-coloured houses.',
      'This is the perfect short break for anyone needing sun, sand, and a dose of Goan warmth.'
    ],
    highlights: [
      { title: 'Beach Hopping', desc: 'Discover North Goa\'s lively shores and South Goa\'s serene coves — from Baga to Palolem.', icon: 'beach' },
      { title: 'Old Goa Churches', desc: 'Visit UNESCO World Heritage churches — Basilica of Bom Jesus and Se Cathedral.', icon: 'temple' },
      { title: 'Spice Plantation', desc: 'Walk through aromatic spice gardens and learn about Goa\'s spice trade heritage.', icon: 'terrace' },
      { title: 'Water Sports', desc: 'Parasailing, jet skiing, and banana rides at Baga and Calangute beaches.', icon: 'adventure' },
      { title: 'Latin Quarter', desc: 'Wander Fontainhas — Goa\'s Portuguese-era quarter with art galleries and cafés.', icon: 'city' },
      { title: 'Sunset Cruise', desc: 'A sunset river cruise on the Mandovi with live music and Goan folklore.', icon: 'lake' }
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Goa', desc: 'Arrive at Dabolim Airport and transfer to your beach resort in North Goa. Afternoon free to explore Calangute Beach. Evening: welcome dinner at a beach shack with fresh seafood and Goan feni.' },
      { day: '02', title: 'North Goa Exploration', desc: 'Morning: visit the Aguada Fort and lighthouse. Afternoon: beach time at Baga with water sports. Evening: explore the Saturday Night Market or Anjuna Flea Market.' },
      { day: '03', title: 'Old Goa & South Goa', desc: 'Full-day tour: Basilica of Bom Jesus, Se Cathedral, and the Latin Quarter of Fontainhas. Afternoon: drive to South Goa\'s Palolem Beach. Sunset dolphin-spotting boat ride.' },
      { day: '04', title: 'Spice Tour & Departure', desc: 'Morning: visit a spice plantation with a traditional Goan lunch. Afternoon: transfer to airport for departure.' }
    ],
    accommodation: [
      { name: 'Beach Resort (North Goa)', desc: 'A beachfront resort in Calangute with pool, restaurant, and direct beach access.' },
      { name: 'Beach Hut (South Goa)', desc: 'A charming beach hut on Palolem Beach — wake to the sound of waves at your doorstep.' }
    ],
    included: ['All accommodation (3 nights)', 'Daily breakfast and 1 dinner', 'Airport transfers', 'Old Goa guided tour', 'Spice plantation visit', 'Sunset river cruise', 'Dedicated travel planner'],
    notIncluded: ['Flights', 'Travel insurance', 'Lunches', 'Water sports', 'Personal expenses']
  },
  {
    slug: 'kerala',
    category: 'india',
    num: '02',
    title: 'Kerala Backwater Bliss',
    country: 'India',
    where: 'Kochi · Munnar · Alleppey · Kovalam',
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=80',
    duration: '5N/6D',
    durationNights: 5,
    groupSize: 'Max 8',
    difficulty: 'Easy',
    bestSeason: 'Sep — Mar',
    startingLocation: 'Kochi',
    destination: 'Kochi · Munnar · Alleppey · Kovalam',
    price: '₹11,000',
    priceNum: 11000,
    shortDesc: 'Lush backwaters, misty hill stations, and Ayurvedic tranquility.',
    intro: 'Kerala — God\'s Own Country — is a land of serene backwaters, emerald tea plantations, and Ayurvedic healing traditions. This six-day journey takes you from the historic port of Kochi through the misty hills of Munnar to the tranquil houseboats of Alleppey.',
    about: [
      'Start in Kochi, where Chinese fishing nets silhouette against the Arabian Sea sunset and spice markets perfume the air. Drive to Munnar, where endless carpets of tea plantations roll across misty hillsides.',
      'The highlight awaits in Alleppey — drifting through palm-fringed backwaters on a traditional kettuvallam houseboat, watching village life unfold along the banks as coconut palms sway overhead.',
      'End your journey on the pristine sands of Kovalam Beach, where Ayurvedic spas offer ancient healing treatments.'
    ],
    highlights: [
      { title: 'Houseboat Stay', desc: 'Sleep on a traditional kettuvallam houseboat drifting through Kerala\'s legendary backwaters.', icon: 'lake' },
      { title: 'Tea Plantations', desc: 'Walk through the emerald tea gardens of Munnar with panoramic mountain views.', icon: 'terrace' },
      { title: 'Kathakali Dance', desc: 'Witness the elaborate Kathakali dance performance with its vibrant costumes and makeup.', icon: 'dance' },
      { title: 'Ayurvedic Spa', desc: 'Traditional Ayurvedic massage and wellness treatments at a beachside resort.', icon: 'spa' },
      { title: 'Spice Markets', desc: 'Explore Kochi\'s aromatic spice bazaars — cardamom, pepper, cinnamon, and vanilla.', icon: 'craft' },
      { title: 'Backwater Cruise', desc: 'Glide through narrow canals lined with coconut palms and village life.', icon: 'fjord' }
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Kochi', desc: 'Arrive in Kochi and explore Fort Kochi — Chinese fishing nets, St. Francis Church, and the Jewish synagogue. Evening: Kathakali dance performance.' },
      { day: '02', title: 'Kochi to Munnar', desc: 'Scenic drive to Munnar through spice plantations and waterfalls. Afternoon: tea museum visit and walk through the plantations.' },
      { day: '03', title: 'Munnar Exploration', desc: 'Full day in Munnar: Eravikulam National Park (home to the Nilgiri Tahr), tea factory visit, and viewpoint hikes.' },
      { day: '04', title: 'Munnar to Alleppey', desc: 'Drive to Alleppey. Board your houseboat for an overnight cruise through the backwaters — lunch, dinner, and breakfast served on board.' },
      { day: '05', title: 'Alleppey to Kovalam', desc: 'Morning disembark. Drive to Kovalam Beach. Afternoon: Ayurvedic spa treatment. Evening: sunset at the lighthouse beach.' },
      { day: '06', title: 'Departure from Trivandrum', desc: 'Morning free for beach time or a visit to the Padmanabhaswamy Temple. Transfer to Trivandrum airport.' }
    ],
    accommodation: [
      { name: 'Heritage Hotel (Kochi)', desc: 'A boutique heritage hotel in Fort Kochi with colonial architecture and rooftop dining.' },
      { name: 'Tea Estate Bungalow (Munnar)', desc: 'A colonial-era bungalow surrounded by tea gardens with misty mountain views.' },
      { name: 'Houseboat (Alleppey)', desc: 'A traditional kettuvallam houseboat with AC bedrooms, kitchen, and open deck.' }
    ],
    included: ['All accommodation (5 nights)', 'Daily breakfast and 2 dinners', 'Airport transfers and all transport', 'Houseboat overnight with meals', 'Kathakali performance', 'Tea plantation tour', 'Ayurvedic massage', 'Dedicated travel planner'],
    notIncluded: ['Flights', 'Travel insurance', 'Lunches', 'Optional activities', 'Personal expenses']
  },
  {
    slug: 'himachal',
    category: 'india',
    num: '03',
    title: 'Himachal — Shimla & Manali',
    country: 'India',
    where: 'Shimla · Kullu · Manali',
    img: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=1600&q=80',
    duration: '5N/6D',
    durationNights: 5,
    groupSize: 'Max 8',
    difficulty: 'Easy',
    bestSeason: 'Mar — Jun, Dec — Feb',
    startingLocation: 'Chandigarh',
    destination: 'Shimla · Kullu · Manali',
    price: '₹15,000',
    priceNum: 15000,
    shortDesc: 'Colonial charm, apple orchards, and snow-capped Himalayan peaks.',
    intro: 'Himachal Pradesh is the crown jewel of Indian hill stations — where colonial-era architecture meets dramatic Himalayan landscapes. This six-day journey takes you through the charming lanes of Shimla, the adventure playground of Manali, and the scenic valleys in between.',
    about: [
      'Begin in Shimla, the former summer capital of British India, where the Mall Road echoes with colonial history and Ridge offers panoramic mountain views. Take the famous Kalka-Shimla toy train through 102 tunnels and over bridges spanning deep valleys.',
      'Drive through the Kullu Valley — famous for its apple orchards, handloom shawls, and river rafting — to Manali, a town framed by towering peaks and rushing rivers.',
      'Whether you seek adventure or tranquility, Himachal delivers both in equal measure.'
    ],
    highlights: [
      { title: 'Toy Train Ride', desc: 'Experience the UNESCO-listed Kalka-Shimla railway through 102 tunnels and spectacular mountain scenery.', icon: 'train' },
      { title: 'Rohtang Pass', desc: 'Drive to Rohtang Pass (seasonal) for breathtaking views of the Pir Panjal range and glaciers.', icon: 'mountain' },
      { title: 'Old Manali', desc: 'Wander through Old Manali\'s bohemian cafés, apple orchards, and Hadimba Temple.', icon: 'temple' },
      { title: 'River Rafting', desc: 'White-water rafting on the Beas River through the Kullu Valley.', icon: 'adventure' },
      { title: 'Mall Road Shimla', desc: 'Walk the iconic Mall Road — colonial-era buildings, local shops, and mountain café culture.', icon: 'city' },
      { title: 'Solang Valley', desc: 'Paragliding, zorbing, and ski slopes (winter) in the adventure hub near Manali.', icon: 'hike' }
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Shimla', desc: 'Drive from Chandigarh to Shimla. Afternoon: walk the Mall Road and visit Christ Church. Evening: enjoy the cool mountain air from the Ridge.' },
      { day: '02', title: 'Shimla Sightseeing', desc: 'Morning: Kufri excursion with horse riding and valley views. Afternoon: Jakhoo Temple (Hanuman statue) and Indian Institute of Advanced Study.' },
      { day: '03', title: 'Shimla to Manali', desc: 'Scenic drive to Manali via Kullu Valley. Stop at Kullu for handloom shopping and river rafting (optional). Evening: explore Old Manali.' },
      { day: '04', title: 'Manali Exploration', desc: 'Morning: Hadimba Temple and Manu Temple. Afternoon: Solang Valley adventure activities. Evening: café hopping in Old Manali.' },
      { day: '05', title: 'Rohtang / Snow Point', desc: 'Full-day excursion to Rohtang Pass or Snow Point (seasonal). Snow activities, mountain views, and packed lunch.' },
      { day: '06', title: 'Departure', desc: 'Morning: Vashisht Hot Springs visit. Drive to Chandigarh Airport for departure.' }
    ],
    accommodation: [
      { name: 'Colonial Hotel (Shimla)', desc: 'A heritage hotel on the Mall Road with colonial-era charm and mountain-view rooms.' },
      { name: 'Riverside Resort (Manali)', desc: 'A boutique resort on the banks of the Beas River with garden views and modern amenities.' }
    ],
    included: ['All accommodation (5 nights)', 'Daily breakfast and 1 dinner', 'All transfers (Chandigarh round-trip)', 'Kufri excursion', 'Solang Valley visit', 'Rohtang/Snow Point excursion', 'Dedicated travel planner'],
    notIncluded: ['Flights', 'Travel insurance', 'Lunches', 'River rafting', 'Adventure activities', 'Personal expenses']
  },
  {
    slug: 'kashmir',
    category: 'india',
    num: '04',
    title: 'Kashmir — Paradise on Earth',
    country: 'India',
    where: 'Srinagar · Gulmarg · Pahalgam · Sonmarg',
    img: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1600&q=80',
    duration: '5N/6D',
    durationNights: 5,
    groupSize: 'Max 8',
    difficulty: 'Easy',
    bestSeason: 'Mar — Oct',
    startingLocation: 'Srinagar',
    destination: 'Srinagar · Gulmarg · Pahalgam · Sonmarg',
    price: '₹16,500',
    priceNum: 16500,
    shortDesc: 'Dal Lake houseboats, Mughal gardens, and Alpine meadows.',
    intro: 'Kashmir is India\'s most breathtaking destination — a valley of snow-capped peaks, pristine lakes, and Mughal gardens that seem almost too beautiful to be real. This six-day journey takes you through the finest experiences Kashmir has to offer.',
    about: [
      'Begin with a stay on a traditional shikara houseboat on Dal Lake, waking to the gentle lapping of water and the call of the morning prayer. Visit the Mughal Gardens — Nishat, Shalimar, and Chashme Shahi — where terraced lawns meet lake views.',
      'Drive to Gulmarg, the meadow of flowers, where a gondola ride takes you to 13,000 feet for panoramic views of the Himalayas. In Pahalgam, walk through pine forests along the Lidder River.',
      'This is Kashmir at its most magical — untouched, unhurried, and unforgettable.'
    ],
    highlights: [
      { title: 'Dal Lake Stay', desc: 'Sleep on a luxurious shikara houseboat on the iconic Dal Lake with daily Shikara rides.', icon: 'lake' },
      { title: 'Gulmarg Gondola', desc: 'Ride Asia\'s highest cable car to 13,000 ft for panoramic Himalayan views.', icon: 'mountain' },
      { title: 'Mughal Gardens', desc: 'Explore Nishat, Shalimar, and Chashme Shahi — terraced paradise gardens from the 16th century.', icon: 'terrace' },
      { title: 'Pahalgam Valleys', desc: 'Walk through Betaab Valley and Aru Valley — pine forests, meadows, and the Lidder River.', icon: 'hike' },
      { title: 'Kashmiri Cuisine', desc: 'Authentic Wazwan feast, Kahwa tea, and lamb Rogan Josh in local restaurants.', icon: 'food' },
      { title: 'Pashmina Shopping', desc: 'Visit local markets for authentic Pashmina shawls, carpets, and saffron.', icon: 'craft' }
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Srinagar', desc: 'Arrive at Srinagar Airport. Transfer to your houseboat on Dal Lake. Evening: Shikara ride through the lake at sunset. Dinner on the houseboat.' },
      { day: '02', title: 'Mughal Gardens', desc: 'Full-day tour of Nishat Garden, Shalimar Garden, and Chashme Shahi. Afternoon: visit Shankaracharya Temple for panoramic valley views.' },
      { day: '03', title: 'Gulmarg Excursion', desc: 'Drive to Gulmarg (1.5 hrs). Gondola ride to Phase 1 (8,500 ft) or Phase 2 (13,000 ft). Lunch at a meadow-side café. Return to Srinagar.' },
      { day: '04', title: 'Pahalgam Day Trip', desc: 'Full-day trip to Pahalgam. Walk through Betaab Valley, visit Aru Valley, and enjoy a pony ride along the Lidder River. Packed lunch included.' },
      { day: '05', title: 'Srinagar Local', desc: 'Morning: visit the old city and Jama Masjid. Afternoon: carpet factory visit and Pashmina shopping. Farewell dinner with Wazwan feast.' },
      { day: '06', title: 'Departure', desc: 'Morning: optional early Shikara ride. Transfer to Srinagar Airport.' }
    ],
    accommodation: [
      { name: 'Deluxe Houseboat (Dal Lake)', desc: 'A luxury shikara houseboat with carved wood interiors, heated rooms, and a front deck over the lake.' },
      { name: 'Hotel (Srinagar)', desc: 'A lakeside hotel with garden views and modern amenities, used as backup or overflow.' }
    ],
    included: ['All accommodation (5 nights)', 'Daily breakfast and 2 dinners', 'Airport transfers', 'All sightseeing by private car', 'Shikara rides (2)', 'Gulmarg Gondola ticket', 'Wazwan dinner', 'Dedicated travel planner'],
    notIncluded: ['Flights', 'Travel insurance', 'Lunches', 'Pony rides', 'Personal expenses']
  },
  {
    slug: 'rajasthan',
    category: 'india',
    num: '05',
    title: 'Royal Rajasthan Trail',
    country: 'India',
    where: 'Jaipur · Jodhpur · Jaisalmer · Udaipur',
    img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80',
    duration: '5N/6D',
    durationNights: 5,
    groupSize: 'Max 8',
    difficulty: 'Easy',
    bestSeason: 'Oct — Mar',
    startingLocation: 'Jaipur',
    destination: 'Jaipur · Jodhpur · Jaisalmer · Udaipur',
    price: '₹18,500',
    priceNum: 18500,
    shortDesc: 'Magnificent palaces, golden deserts, and royal hospitality.',
    intro: 'Rajasthan is India\'s most romantic state — a land of maharajas\' palaces, golden desert fortresses, and lakes reflecting centuries of royal grandeur. This six-day journey through Rajasthan\'s most iconic cities immerses you in the opulence and warmth of Rajasthani hospitality.',
    about: [
      'Start in the Pink City of Jaipur, where the Hawa Mahal and Amber Fort stand as testaments to Rajput engineering and aesthetics. Move on to Jodhpur, the Blue City, where a massive fort rises above a maze of indigo-washed houses.',
      'In Jaisalmer, a golden sandstone fortress rises from the Thar Desert like a mirage. Spend a night in a desert camp, riding camels as the sun sets over the dunes. End in Udaipur, the Venice of the East, where white marble palaces float on serene lakes.',
      'This journey is designed for travelers who want to experience Rajasthan\'s royal heritage without the tourist traps.'
    ],
    highlights: [
      { title: 'Amber Fort', desc: 'Explore the magnificent Amber Fort near Jaipur — a masterpiece of Rajput architecture.', icon: 'fort' },
      { title: 'Blue City', desc: 'Wander the indigo-washed lanes of Jodhpur beneath the towering Mehrangarh Fort.', icon: 'city' },
      { title: 'Desert Camp', desc: 'A night in the Thar Desert — camel ride, folk music, and campfire under the stars.', icon: 'desert' },
      { title: 'Lake Pichola', desc: 'Sunset boat ride on Lake Pichola in Udaipur, past the Lake Palace and Jag Mandir.', icon: 'lake' },
      { title: 'Heritage Havelis', desc: 'Sleep in restored merchant mansions with carved sandstone facades and rooftop dining.', icon: 'haveli' },
      { title: 'Local Craft', desc: 'Block printing, blue pottery, and gemstone cutting workshops in Jaipur.', icon: 'craft' }
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Jaipur', desc: 'Arrive and settle into your heritage haveli. Evening: visit the illuminated Hawa Mahal from a rooftop café. Welcome dinner of Rajasthani thali.' },
      { day: '02', title: 'Amber Fort & Jaipur', desc: 'Morning: guided tour of Amber Fort. Afternoon: City Palace, Jantar Mantar, and block printing workshop.' },
      { day: '03', title: 'Jaipur to Jodhpur', desc: 'Scenic drive to Jodhpur. Afternoon: explore Sardar Market and clock tower. Evening: rooftop dinner overlooking Mehrangarh Fort.' },
      { day: '04', title: 'Mehrangarh & Blue City', desc: 'Morning: Mehrangarh Fort tour. Afternoon: walking tour through the Blue City lanes and Toorji Ka Jhalra stepwell.' },
      { day: '05', title: 'Jaisalmer Desert Safari', desc: 'Drive to Jaisalmer. Explore the golden fort. Afternoon: camel safari into Sam Sand Dunes. Sunset and campfire dinner with folk music.' },
      { day: '06', title: 'Udaipur & Departure', desc: 'Transfer to Jodhpur airport and fly to Udaipur. Sunset boat ride on Lake Pichola. Farewell dinner. Transfer to airport.' }
    ],
    accommodation: [
      { name: 'Heritage Haveli (Jaipur)', desc: 'A restored merchant mansion with carved sandstone, inner courtyard, and rooftop dining with fort views.' },
      { name: 'Desert Camp (Jaisalmer)', desc: 'A luxury camp in the Sam Sand Dunes with spacious tents, private bathrooms, and campfire dining.' },
      { name: 'Lake View Hotel (Udaipur)', desc: 'A heritage property on Lake Pichola with views of the Lake Palace and City Palace.' }
    ],
    included: ['All accommodation (5 nights)', 'Daily breakfast and 2 dinners', 'All transfers and sightseeing', 'Amber Fort entry', 'Mehrangarh Fort entry', 'Camel safari and desert camp', 'Lake Pichola boat ride', 'Block printing workshop', 'Dedicated travel planner'],
    notIncluded: ['Flights', 'Travel insurance', 'Lunches', 'Optional activities', 'Personal expenses']
  },
  {
    slug: 'uttarakhand',
    category: 'india',
    num: '06',
    title: 'Uttarakhand Himalayan Gateway',
    country: 'India',
    where: 'Dehradun · Mussoorie · Rishikesh · Haridwar',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
    duration: '4N/5D',
    durationNights: 4,
    groupSize: 'Max 8',
    difficulty: 'Easy',
    bestSeason: 'Mar — Jun, Sep — Nov',
    startingLocation: 'Dehradun',
    destination: 'Dehradun · Mussoorie · Rishikesh · Haridwar',
    price: '₹13,500',
    priceNum: 13500,
    shortDesc: 'Yoga capital of the world, Ganga aarti, and Himalayan foothills.',
    intro: 'Uttarakhand is the gateway to the Himalayas — a land of holy rivers, yoga ashrams, and hill stations wrapped in pine forests. This five-day journey combines spiritual Rishikesh, the hill-station charm of Mussoorie, and the sacred Ganga aarti of Haridwar.',
    about: [
      'Begin in Dehradun, the valley capital, then drive to Mussoorie — the Queen of Hills — where colonial-era charm meets panoramic Himalayan views from Gun Hill.',
      'Descend to Rishikesh, the yoga capital of the world, where the Ganges emerges from the Himalayas and ashrams line the riverbank. Walk across the iconic Laxman Jhula suspension bridge and attend the evening Ganga aarti at Triveni Ghat.',
      'End in Haridwar, one of Hinduism\'s seven holiest cities, for the spectacular evening Ganga aarti ceremony at Har Ki Pauri.'
    ],
    highlights: [
      { title: 'Ganga Aarti', desc: 'Witness the spectacular evening aarti ceremony at Har Ki Pauri, Haridwar.', icon: 'temple' },
      { title: 'Yoga in Rishikesh', desc: 'Morning yoga session at a riverside ashram in the yoga capital of the world.', icon: 'spa' },
      { title: 'Laxman Jhula', desc: 'Walk across the iconic suspension bridge spanning the Ganges in Rishikesh.', icon: 'fjord' },
      { title: 'Mussoorie Hills', desc: 'Panoramic Himalayan views from Gun Hill and the charming Mall Road.', icon: 'mountain' },
      { title: 'River Rafting', desc: 'White-water rafting on the Ganges through the Rishikesh rapids.', icon: 'adventure' },
      { title: 'Ashram Visit', desc: 'Visit a traditional yoga ashram and learn about Indian spiritual traditions.', icon: 'dance' }
    ],
    itinerary: [
      { day: '01', title: 'Dehradun to Mussoorie', desc: 'Arrive in Dehradun and drive to Mussoorie. Afternoon: Gun Hill viewpoint and Kempty Falls. Evening: stroll on Mall Road.' },
      { day: '02', title: 'Mussoorie to Rishikesh', desc: 'Morning: Benog Wildlife Sanctuary or Cloud\'s End. Afternoon: drive to Rishikesh. Evening: attend the Ganga aarti at Triveni Ghat.' },
      { day: '03', title: 'Rishikesh Exploration', desc: 'Morning: yoga class at an ashram. Visit Laxman Jhula, Ram Jhula, and the Beatles Ashram. Afternoon: optional river rafting.' },
      { day: '04', title: 'Rishikesh to Haridwar', desc: 'Morning: free for adventure activities or temple visits. Afternoon: drive to Haridwar. Evening: spectacular Ganga aarti at Har Ki Pauri.' },
      { day: '05', title: 'Departure', desc: 'Morning: visit Mansa Devi Temple by cable car. Transfer to Dehradun Airport.' }
    ],
    accommodation: [
      { name: 'Hill Resort (Mussoorie)', desc: 'A colonial-era hill resort with mountain-view rooms and a garden restaurant.' },
      { name: 'Riverside Hotel (Rishikesh)', desc: 'A serene hotel on the banks of the Ganges with yoga facility and river-view rooms.' }
    ],
    included: ['All accommodation (4 nights)', 'Daily breakfast and 1 dinner', 'All transfers', 'Mussoorie sightseeing', 'Rishikesh temple tour', 'Yoga session', 'Ganga aarti visit', 'Dedicated travel planner'],
    notIncluded: ['Flights', 'Travel insurance', 'Lunches', 'River rafting', 'Personal expenses']
  },
  {
    slug: 'gujarat',
    category: 'india',
    num: '07',
    title: 'Gujarat Heritage Trail',
    country: 'India',
    where: 'Ahmedabad · Gir · Rann of Kutch · Dwarka',
    img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&q=80',
    duration: '4N/5D',
    durationNights: 4,
    groupSize: 'Max 8',
    difficulty: 'Easy',
    bestSeason: 'Oct — Mar',
    startingLocation: 'Ahmedabad',
    destination: 'Ahmedabad · Gir · Rann of Kutch · Dwarka',
    price: '₹15,000',
    priceNum: 15000,
    shortDesc: 'Lion safaris, white desert, and ancient temples.',
    intro: 'Gujarat is India\'s most underrated destination — a state of startling diversity where Asiatic lions prowl in Gir Forest, the Rann of Kutch stretches to the horizon like a white desert moon, and ancient temples whisper stories of millennia.',
    about: [
      'Begin in Ahmedabad, India\'s first UNESCO World Heritage City, where intricate stepwalls (adalaj vav), medieval mosques, and the Sabarmati Ashram tell the story of India\'s independence movement.',
      'Drive to Gir National Park — the only place on Earth where Asiatic lions roam free. Continue to the Rann of Kutch, an extraordinary landscape of white salt desert that seems to merge with the sky at the horizon.',
      'End your journey at Dwarka, one of the four sacred Char Dham pilgrimage sites, where an ancient temple stands at the edge of the Arabian Sea.'
    ],
    highlights: [
      { title: 'Gir Lion Safari', desc: 'Spot Asiatic lions in their only natural habitat — Gir National Park.', icon: 'adventure' },
      { title: 'Rann of Kutch', desc: 'Experience the surreal white salt desert stretching to the horizon under a vast sky.', icon: 'desert' },
      { title: 'Ahmedabad Heritage', desc: 'Explore India\'s first UNESCO Heritage City — stepwells, mosques, and the Sabarmati Ashram.', icon: 'fort' },
      { title: 'Dwarka Temple', desc: 'Visit the sacred ancient temple at Dwarka, one of Hinduism\'s four holiest cities.', icon: 'temple' },
      { title: 'Kutch Handicrafts', desc: 'Visit artisan villages for Ajrakh block printing, lacquer work, and mirror embroidery.', icon: 'craft' },
      { title: 'Gujarati Thali', desc: 'Feast on a traditional Gujarati thali — an elaborate vegetarian meal with dozens of dishes.', icon: 'food' }
    ],
    itinerary: [
      { day: '01', title: 'Ahmedabad Heritage', desc: 'Arrive in Ahmedabad. Tour the old city: Jama Masjid, Adalaj Stepwell, and Sabarmati Ashram. Evening: Gujarati thali dinner.' },
      { day: '02', title: 'Ahmedabad to Gir', desc: 'Drive to Gir National Park. Afternoon: jeep safari to spot Asiatic lions. Evening: tribal cultural programme.' },
      { day: '03', title: 'Gir to Rann of Kutch', desc: 'Drive to the Rann of Kutch. Afternoon: visit artisan villages — Ajrakh printing, handloom. Evening: sunset over the white desert.' },
      { day: '04', title: 'Rann to Dwarka', desc: 'Morning: Bhuj palace visit. Afternoon: drive to Dwarka. Evening: visit the Dwarkadhish Temple and attend the aarti.' },
      { day: '05', title: 'Dwarka & Departure', desc: 'Morning: Nageshwar Jyotirlinga and Bet Dwarka island visit. Transfer to Jamnagar Airport.' }
    ],
    accommodation: [
      { name: 'Heritage Hotel (Ahmedabad)', desc: 'A restored haveli in the old city with courtyard dining and traditional architecture.' },
      { name: 'Wildlife Resort (Gir)', desc: 'An eco-resort near Gir National Park with natural swimming pool and forest views.' },
      { name: 'Desert Camp (Kutch)', desc: 'A luxury tented camp on the edge of the Rann with traditional Kutchi dinner and cultural performances.' }
    ],
    included: ['All accommodation (4 nights)', 'Daily breakfast and 2 dinners', 'All transfers', 'Gir safari permit and jeep', 'Ahmedabad city tour', 'Artisan village visits', 'Dedicated travel planner'],
    notIncluded: ['Flights', 'Travel insurance', 'Lunches', 'Personal expenses']
  },
  {
    slug: 'sikkim-darjeeling',
    category: 'india',
    num: '08',
    title: 'Sikkim & Darjeeling',
    country: 'India',
    where: 'Gangtok · Pelling · Darjeeling · Kalimpong',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80',
    duration: '6N/7D',
    durationNights: 6,
    groupSize: 'Max 8',
    difficulty: 'Moderate',
    bestSeason: 'Mar — May, Oct — Dec',
    startingLocation: 'Bagdogra',
    destination: 'Gangtok · Pelling · Darjeeling · Kalimpong',
    price: '₹25,000',
    priceNum: 25000,
    shortDesc: 'Monasteries, tea gardens, and Kanchenjunga views.',
    intro: 'The northeastern Himalayas are India\'s best-kept secret — a region of Buddhist monasteries perched on misty ridges, emerald tea gardens cascading down mountainsides, and views of Kanchenjunga, the world\'s third-highest peak. This seven-day journey covers Sikkim\'s alpine beauty and Darjeeling\'s colonial charm.',
    about: [
      'Begin in Gangtok, Sikkim\'s capital, where Buddhist monasteries overlook a valley of prayer flags and mist. Visit the Rumtek Monastery and the enchanting Tsomgo Lake at 12,313 feet.',
      'Drive to Pelling for closer views of Kanchenjunga, then descend to Darjeeling — the Queen of Hills — where the famous toy train chugs through tea estates and sunrise over Kanchenjunga from Tiger Hill is a life-changing experience.',
      'This is northeast India at its most captivating — serene, spiritual, and spectacularly beautiful.'
    ],
    highlights: [
      { title: 'Tiger Hill Sunrise', desc: 'Watch the sunrise paint Kanchenjunga gold from the famous viewpoint in Darjeeling.', icon: 'mountain' },
      { title: 'Toy Train Ride', desc: 'Experience the UNESCO-listed Darjeeling Himalayan Railway — the famous "Toy Train."', icon: 'train' },
      { title: 'Tsomgo Lake', desc: 'Visit the sacred glacial lake at 12,313 ft surrounded by snow-capped mountains.', icon: 'lake' },
      { title: 'Buddhist Monasteries', desc: 'Explore Rumtek, Pemayangtse, and other ancient monasteries of Sikkim.', icon: 'temple' },
      { title: 'Tea Garden Tour', desc: 'Walk through Darjeeling\'s emerald tea estates and taste the world-famous tea.', icon: 'terrace' },
      { title: 'Local Culture', desc: 'Experience Tibetan, Bhutia, and Lepcha cultures through food, crafts, and festivals.', icon: 'dance' }
    ],
    itinerary: [
      { day: '01', title: 'Bagdogra to Gangtok', desc: 'Arrive at Bagdogra Airport and drive to Gangtok (4 hrs). Evening: explore MG Marg — Gangtok\'s pedestrian-only shopping street.' },
      { day: '02', title: 'Gangtok Sightseeing', desc: 'Visit Rumtek Monastery, Namgyal Institute of Tibetology, and Hanuman Tok. Afternoon: Tsomgo Lake excursion (permit required).' },
      { day: '03', title: 'Gangtok to Pelling', desc: 'Drive to Pelling (5 hrs) through scenic mountain roads. Afternoon: Pemayangtse Monastery and Rabdentse ruins.' },
      { day: '04', title: 'Pelling to Darjeeling', desc: 'Morning: Kanchenjunga viewpoint. Drive to Darjeeling (4 hrs) through tea gardens. Evening: walk along the Mall Road.' },
      { day: '05', title: 'Darjeeling Full Day', desc: 'Early morning: Tiger Hill sunrise. Visit Batasia Loop and Peace Pagoda. Afternoon: tea garden tour and Himalayan Mountaineering Institute.' },
      { day: '06', title: 'Kalimpong Day Trip', desc: 'Drive to Kalimpong (1 hr). Visit Deolo Hill, Durpin Monastery, and a local orchid nursery. Return to Darjeeling.' },
      { day: '07', title: 'Toy Train & Departure', desc: 'Morning: Darjeeling Himalayan Railway joyride. Transfer to Bagdogra Airport.' }
    ],
    accommodation: [
      { name: 'Mountain Hotel (Gangtok)', desc: 'A hotel with valley views and traditional Sikkimese décor in the heart of Gangtok.' },
      { name: 'Heritage Resort (Darjeeling)', desc: 'A colonial-era bungalow-turned-resort with Kanchenjunga views and tea garden walks.' }
    ],
    included: ['All accommodation (6 nights)', 'Daily breakfast and 2 dinners', 'All transfers', 'Tsomgo Lake permit', 'Monastery entries', 'Toy train ride', 'Tea garden tour', 'Dedicated travel planner'],
    notIncluded: ['Flights', 'Travel insurance', 'Lunches', 'Personal expenses']
  },
  {
    slug: 'andaman',
    category: 'india',
    num: '09',
    title: 'Andaman Island Escape',
    country: 'India',
    where: 'Port Blair · Havelock · Neil Island',
    img: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=1600&q=80',
    duration: '5N/6D',
    durationNights: 5,
    groupSize: 'Max 8',
    difficulty: 'Easy',
    bestSeason: 'Oct — May',
    startingLocation: 'Port Blair',
    destination: 'Port Blair · Havelock · Neil Island',
    price: '₹25,000',
    priceNum: 25000,
    shortDesc: 'Turquoise waters, pristine beaches, and coral reefs.',
    intro: 'The Andaman Islands are India\'s tropical paradise — a chain of emerald islands in the Bay of Bengal with crystal-clear waters, powder-white beaches, and some of the best snorkeling and diving in the country. This six-day journey takes you island-hopping through the best of the Andamans.',
    about: [
      'Begin in Port Blair, where the Cellular Jail — a colonial-era prison — tells the story of India\'s freedom struggle through its haunting evening light-and-sound show.',
      'Ferry to Havelock Island (Swaraj Dweep), home to Radhanagar Beach — consistently ranked among Asia\'s best. Snorkel at Elephant Beach among vibrant coral gardens and tropical fish.',
      'End at Neil Island (Shaheed Dweep), a quieter gem with natural rock formations, coral reefs, and bioluminescent plankton that lights up the water at night.'
    ],
    highlights: [
      { title: 'Radhanagar Beach', desc: 'Relax on one of Asia\'s best beaches — powdery white sand meeting turquoise water.', icon: 'beach' },
      { title: 'Snorkeling & Diving', desc: 'Explore vibrant coral reefs teeming with tropical fish at Elephant Beach.', icon: 'adventure' },
      { title: 'Cellular Jail', desc: 'Visit the historic Cellular Jail and witness the powerful light-and-sound show.', icon: 'fort' },
      { title: 'Island Hopping', desc: 'Ferry between Port Blair, Havelock, and Neil Island — each with its own character.', icon: 'fjord' },
      { title: 'Bioluminescence', desc: 'Watch the water glow with bioluminescent plankton at Neil Island (seasonal).', icon: 'stars' },
      { title: 'Seafood Feast', desc: 'Fresh grilled lobster, fish curry, and coconut-based Andaman cuisine.', icon: 'food' }
    ],
    itinerary: [
      { day: '01', title: 'Port Blair', desc: 'Arrive in Port Blair. Visit Cellular Jail. Evening: light-and-sound show at the jail. Seafood dinner.' },
      { day: '02', title: 'Port Blair to Havelock', desc: 'Morning ferry to Havelock. Afternoon: Radhanagar Beach — swim, relax, sunset. Beachside dinner.' },
      { day: '03', title: 'Havelock — Elephant Beach', desc: 'Morning: speed boat to Elephant Beach for snorkeling among coral reefs. Afternoon: kayak through mangroves or beach time.' },
      { day: '04', title: 'Havelock to Neil Island', desc: 'Ferry to Neil Island. Afternoon: Natural Bridge and Bharatpur Beach snorkeling. Evening: bioluminescence tour (seasonal).' },
      { day: '05', title: 'Neil to Port Blair', desc: 'Morning: Laxmanpur Beach and Sitapur Beach. Afternoon ferry to Port Blair. Evening: shopping at Aberdeen Bazaar.' },
      { day: '06', title: 'Departure', desc: 'Morning: Ross Island (Netaji Subhas Chandra Bose Island) visit. Transfer to airport.' }
    ],
    accommodation: [
      { name: 'Beach Resort (Havelock)', desc: 'A beachfront resort on Radhanagar Beach with pool, restaurant, and direct beach access.' },
      { name: 'Beach Cottage (Neil Island)', desc: 'A charming beach cottage surrounded by coconut palms with sea-view rooms.' }
    ],
    included: ['All accommodation (5 nights)', 'Daily breakfast and 1 dinner', 'Airport and ferry transfers', 'All sightseeing', 'Elephant Beach snorkeling trip', 'Ross Island entry', 'Dedicated travel planner'],
    notIncluded: ['Flights', 'Travel insurance', 'Lunches', 'Scuba diving', 'Personal expenses']
  },
  {
    slug: 'ladakh',
    category: 'india',
    num: '10',
    title: 'Ladakh — Land of High Passes',
    country: 'India',
    where: 'Leh · Nubra Valley · Pangong Lake · Khardung La',
    img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80',
    duration: '6N/7D',
    durationNights: 6,
    groupSize: 'Max 8',
    difficulty: 'Moderate',
    bestSeason: 'Jun — Sep',
    startingLocation: 'Leh',
    destination: 'Leh · Nubra Valley · Pangong Lake · Khardung La',
    price: '₹27,000',
    priceNum: 27000,
    shortDesc: 'High-altitude monasteries, frozen lakes, and dramatic landscapes.',
    intro: 'Ladakh is a landscape unlike anywhere else on Earth — a high-altitude desert of barren mountains, turquoise lakes, and ancient Buddhist monasteries perched on impossible ledges. This seven-day journey takes you through the most dramatic scenery in the Himalayas.',
    about: [
      'Begin in Leh, the capital of Ladakh, where the ancient Leh Palace overlooks a town of whitewashed houses and buzzing bazaars. Acclimatize to the altitude while exploring monasteries that have stood for centuries.',
      'Drive over Khardung La — one of the world\'s highest motorable passes — to the Nubra Valley, where sand dunes meet snow-capped peaks and Bactrian camels roam the desert.',
      'The climax awaits at Pangong Tso — the legendary lake that shifts from deep blue to turquoise to emerald depending on the light, stretching 134 km across the India-China border.'
    ],
    highlights: [
      { title: 'Pangong Lake', desc: 'Visit the legendary color-shifting lake stretching across the India-China border.', icon: 'lake' },
      { title: 'Khardung La Pass', desc: 'Drive over one of the world\'s highest motorable passes at 17,582 feet.', icon: 'mountain' },
      { title: 'Nubra Valley', desc: 'Sand dunes, double-hump camels, and the stunning Diskit Monastery.', icon: 'desert' },
      { title: 'Leh Monasteries', desc: 'Explore Thiksey, Hemis, and Shey monasteries with their ancient murals and monks.', icon: 'temple' },
      { title: 'Magnetic Hill', desc: 'Experience the optical illusion at Magnetic Hill where vehicles appear to roll uphill.', icon: 'adventure' },
      { title: 'Ladakhi Cuisine', desc: 'Try thukpa, momos, butter tea, and skyu — hearty Ladakhi mountain food.', icon: 'food' }
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Leh', desc: 'Fly into Leh (Kushok Bakula Airport). Transfer to hotel. Rest and acclimatize. Light walk around Leh Market in the evening.' },
      { day: '02', title: 'Leh Monasteries', desc: 'Full-day monastery circuit: Thiksey (mini Potala), Hemis (largest monastery), Shey Palace, and Stok Palace. Evening: Leh Palace sunset.' },
      { day: '03', title: 'Leh to Nubra Valley', desc: 'Drive over Khardung La Pass (17,582 ft) to Nubra Valley. Visit Diskit Monastery. Evening: Bactrian camel ride on the Hunder sand dunes.' },
      { day: '04', title: 'Nubra to Pangong', desc: 'Drive to Pangong Lake via Shyok River road. Arrive at the lake — watch it shift colours. Camp near the lakeside.' },
      { day: '05', title: 'Pangong to Leh', desc: 'Morning: sunrise at Pangong Lake. Drive back to Leh via Chang La Pass. Afternoon: free for shopping or rest.' },
      { day: '06', title: 'Leh Local', desc: 'Morning: Magnetic Hall and Sangam (confluence of Indus and Zanskar). Afternoon: white-water rafting on the Indus (optional).' },
      { day: '07', title: 'Departure', desc: 'Morning: last-minute shopping for Ladakhi crafts and apricot products. Transfer to airport.' }
    ],
    accommodation: [
      { name: 'Boutique Hotel (Leh)', desc: 'A modern boutique hotel in Leh with mountain views, oxygen support, and Ladakhi décor.' },
      { name: 'Desert Camp (Nubra)', desc: 'A luxury camp on the Hunder sand dunes with heated tents and mountain views.' },
      { name: 'Lakeside Camp (Pangong)', desc: 'A tented camp on the shores of Pangong Lake — the most photogenic campsite in India.' }
    ],
    included: ['All accommodation (6 nights)', 'Daily breakfast and 2 dinners', 'All transfers in private vehicle', 'Inner Line Permits', 'Khardung La and Chang La crossings', 'Bactrian camel ride', 'Monastery entries', 'Dedicated travel planner'],
    notIncluded: ['Flights to/from Leh', 'Travel insurance', 'Lunches', 'Rafting', 'Personal expenses']
  },
  // ════════════════ INTERNATIONAL ════════════════
  {
    slug: 'thailand',
    category: 'international',
    num: '01',
    title: 'Thailand — Land of Smiles',
    country: 'Thailand',
    where: 'Bangkok · Chiang Mai · Phuket · Krabi',
    img: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1600&q=80',
    duration: '4N/5D',
    durationNights: 4,
    groupSize: 'Max 10',
    difficulty: 'Easy',
    bestSeason: 'Nov — Mar',
    startingLocation: 'Bangkok',
    destination: 'Bangkok · Chiang Mai · Phuket · Krabi',
    price: '₹40,000',
    priceNum: 40000,
    shortDesc: 'Golden temples, tropical islands, and legendary street food.',
    intro: 'Thailand is Southeast Asia\'s most beloved destination — a country where golden temples rise above bustling markets, turquoise waters lap white-sand beaches, and every meal is a celebration of flavour. This five-day journey covers Thailand\'s greatest hits.',
    about: [
      'Begin in Bangkok, a city of contrasts where ancient temples sit beside gleaming skyscrapers. Visit the Grand Palace, Wat Pho, and Wat Arun — then dive into the neon-lit energy of Khao San Road and rooftop bars.',
      'Fly north to Chiang Mai for temple tours, night markets, and ethical elephant encounters. End on the southern islands — Phuket or Krabi — where limestone cliffs, coral reefs, and beachside massages complete the Thai experience.',
      'Thailand delivers extraordinary value — world-class food, accommodation, and experiences at prices that make every traveller feel welcome.'
    ],
    highlights: [
      { title: 'Grand Palace', desc: 'Explore Bangkok\'s most sacred site — the dazzling Grand Palace and Wat Phra Kaew.', icon: 'fort' },
      { title: 'Island Hopping', desc: 'Limestone karsts, hidden lagoons, and crystal waters around Krabi and Phuket.', icon: 'beach' },
      { title: 'Thai Street Food', desc: 'Pad Thai, green curry, mango sticky rice — Bangkok\'s street food is world-famous.', icon: 'food' },
      { title: 'Temple Trail', desc: 'Doi Suthep, Wat Chedi Luang, and dozens of gilded temples in Chiang Mai.', icon: 'temple' },
      { title: 'Night Markets', desc: 'Bustling night markets in Bangkok and Chiang Mai — food, crafts, and local life.', icon: 'city' },
      { title: 'Thai Massage', desc: 'Traditional Thai massage and spa treatments — affordable luxury at every turn.', icon: 'spa' }
    ],
    itinerary: [
      { day: '01', title: 'Bangkok Arrival', desc: 'Arrive in Bangkok. Visit the Grand Palace and Wat Pho. Evening: Chao Phraya river dinner cruise.' },
      { day: '02', title: 'Bangkok Exploration', desc: 'Morning: Chatuchak Weekend Market or Jim Thompson House. Afternoon: Chinatown food tour. Evening: rooftop bar with skyline views.' },
      { day: '03', title: 'Fly to Chiang Mai', desc: 'Morning flight to Chiang Mai. Afternoon: Old City temples — Wat Chedi Luang, Wat Phra Singh. Evening: Sunday Night Market.' },
      { day: '04', title: 'Chiang Mai Activities', desc: 'Morning: ethical elephant sanctuary visit. Afternoon: Doi Suthep temple. Evening: Khao Soi dinner (Chiang Mai specialty).' },
      { day: '05', title: 'Departure', desc: 'Free morning for shopping or cooking class. Transfer to airport.' }
    ],
    accommodation: [
      { name: 'Riverside Hotel (Bangkok)', desc: 'A modern hotel on the Chao Phraya River with pool, restaurant, and temple views.' },
      { name: 'Boutique Hotel (Chiang Mai)', desc: 'A stylish boutique hotel inside the Old City walls with Lanna-style architecture.' }
    ],
    included: ['All accommodation (4 nights)', 'Daily breakfast', 'Airport transfers', 'Grand Palace entry', 'Chiang Mai temple tour', 'Elephant sanctuary visit', 'Dedicated travel planner'],
    notIncluded: ['International flights', 'Travel insurance', 'Lunches/dinners', 'Personal expenses']
  },
  {
    slug: 'sri-lanka',
    category: 'international',
    num: '02',
    title: 'Sri Lanka — Pearl of the Indian Ocean',
    country: 'Sri Lanka',
    where: 'Colombo · Kandy · Sigiriya · Galle · Bentota',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
    duration: '5N/6D',
    durationNights: 5,
    groupSize: 'Max 8',
    difficulty: 'Easy',
    bestSeason: 'Dec — Apr',
    startingLocation: 'Colombo',
    destination: 'Colombo · Kandy · Sigiriya · Galle · Bentota',
    price: '₹35,000',
    priceNum: 35000,
    shortDesc: 'Ancient rock fortresses, tea country, and golden beaches.',
    intro: 'Sri Lanka packs an astonishing variety into a compact island — ancient cities, misty tea plantations, wildlife-rich national parks, and some of the best beaches in Asia. This six-day journey covers the island\'s greatest highlights.',
    about: [
      'Begin in Colombo, Sri Lanka\'s cosmopolitan capital, then drive to Sigiriya — the legendary lion rock fortress rising 200 meters above the jungle. Climb to the top for panoramic views that will take your breath away.',
      'Explore Kandy, the cultural capital, home to the Temple of the Tooth — Sri Lanka\'s most sacred Buddhist site. Drive through the tea country to the colonial hill station of Nuwara Eliya.',
      'End on the southern coast in Galle — a beautifully preserved Dutch colonial fort — and the beach resorts of Bentota.'
    ],
    highlights: [
      { title: 'Sigiriya Rock', desc: 'Climb the legendary lion rock fortress — ancient frescoes and panoramic views from the top.', icon: 'fort' },
      { title: 'Tea Country', desc: 'Tour lush tea plantations in Nuwara Eliya and taste fresh Ceylon tea.', icon: 'terrace' },
      { title: 'Galle Fort', desc: 'Walk the ramparts of the UNESCO-listed Dutch colonial fort on the southern coast.', icon: 'city' },
      { title: 'Temple of the Tooth', desc: 'Visit Kandy\'s sacred Buddhist temple housing a relic of the Buddha\'s tooth.', icon: 'temple' },
      { title: 'Safari Experience', desc: 'Jeep safari in a national park to spot elephants, leopards, and exotic birds.', icon: 'adventure' },
      { title: 'Sri Lankan Cuisine', desc: 'Rice and curry, hoppers, kottu roti — Sri Lanka\'s food is a revelation.', icon: 'food' }
    ],
    itinerary: [
      { day: '01', title: 'Colombo to Sigiriya', desc: 'Arrive in Colombo. Drive to Sigiriya. Afternoon: climb Sigiriya Rock Fortress. Evening: village cooking experience.' },
      { day: '02', title: 'Sigiriya to Kandy', desc: 'Morning: Minneriya or Kaudulla elephant safari (seasonal). Drive to Kandy. Evening: Temple of the Tooth aarti.' },
      { day: '03', title: 'Kandy to Nuwara Eliya', desc: 'Morning: Kandy Royal Botanical Gardens. Drive through tea country to Nuwara Eliya. Afternoon: tea factory tour.' },
      { day: '04', title: 'Nuwara Eliya to Galle', desc: 'Morning: Horton Plains or a tea estate walk. Scenic drive to the south coast. Evening: Galle Fort sunset walk.' },
      { day: '05', title: 'Galle & Bentota', desc: 'Morning: explore Galle Fort — boutiques, cafés, and ramparts. Afternoon: Bentota beach time and water sports.' },
      { day: '06', title: 'Departure', desc: 'Morning: optional turtle hatchery visit. Drive to Colombo Airport.' }
    ],
    accommodation: [
      { name: 'Heritage Hotel (Kandy)', desc: 'A colonial-era hotel overlooking Kandy Lake with mountain views and traditional décor.' },
      { name: 'Tea Bungalow (Nuwara Eliya)', desc: 'A restored planter\'s bungalow surrounded by tea gardens with cozy fireplaces.' },
      { name: 'Boutique Hotel (Galle)', desc: 'A chic boutique hotel inside the Galle Fort with rooftop views over the Indian Ocean.' }
    ],
    included: ['All accommodation (5 nights)', 'Daily breakfast and 1 dinner', 'Airport transfers', 'Sigiriya entry', 'Tea factory visit', 'Galle Fort walk', 'Temple of the Tooth entry', 'Dedicated travel planner'],
    notIncluded: ['International flights', 'Travel insurance', 'Lunches', 'Safari (seasonal)', 'Personal expenses']
  },
  {
    slug: 'bali',
    category: 'international',
    num: '03',
    title: 'Bali — Island of the Gods',
    country: 'Indonesia',
    where: 'Ubud · Seminyak · Uluwatu',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80',
    duration: '5N/6D',
    durationNights: 5,
    groupSize: 'Max 10',
    difficulty: 'Easy',
    bestSeason: 'Apr — Oct',
    startingLocation: 'Bali Airport',
    destination: 'Ubud · Seminyak · Uluwatu',
    price: '₹55,000',
    priceNum: 55000,
    shortDesc: 'Rice terraces, ancient temples, and the art of slow travel.',
    intro: 'Bali is more than a beach destination — it\'s a spiritual landscape of tiered rice paddies, ancient water temples, and a living culture that infuses every aspect of daily life. This six-day journey balances cultural immersion with pure relaxation.',
    about: [
      'Begin in Ubud, the cultural heart of Bali. Walk through emerald rice terraces at dawn, visit ancient water temples blessed by Hindu priests, and take a traditional Balinese cooking class.',
      'Move to the coast where Uluwatu\'s clifftop temple and Seminyak\'s beach clubs offer a different rhythm. Watch the Kecak fire dance at sunset, surf gentle waves, and dine at some of Southeast Asia\'s most celebrated restaurants.',
      'This journey is for travelers seeking balance — culture and comfort, adventure and stillness.'
    ],
    highlights: [
      { title: 'Rice Terraces', desc: 'Walk the Tegallalang rice terraces at dawn, when morning light transforms the paddies.', icon: 'terrace' },
      { title: 'Water Temples', desc: 'Visit Tirta Empul and Tanah Lot — sacred water temples worshipped for centuries.', icon: 'temple' },
      { title: 'Kecak Dance', desc: 'Witness the hypnotic Kecak fire dance at Uluwatu Temple as the sun sets.', icon: 'dance' },
      { title: 'Cooking Class', desc: 'Learn traditional Balinese recipes in a village kitchen.', icon: 'food' },
      { title: 'Beach Clubs', desc: 'Relax at Seminyak\'s iconic beach clubs with infinity pools and sunset cocktails.', icon: 'beach' },
      { title: 'Spa & Wellness', desc: 'Daily Balinese massage and spa treatments at every hotel.', icon: 'spa' }
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Ubud', desc: 'Transfer to your boutique hotel overlooking the Ayung River. Afternoon: Sacred Monkey Forest. Evening: welcome dinner with gamelan music.' },
      { day: '02', title: 'Rice Terraces & Temples', desc: 'Dawn walk through Tegallalang. Visit Tirta Empul for purification ceremony. Afternoon: Balinese cooking class.' },
      { day: '03', title: 'Ubud Culture', desc: 'Morning: Royal Palace and art market. Afternoon: Legong dance or silver workshop. Evening: Ubud restaurant scene.' },
      { day: '04', title: 'Transfer to Uluwatu', desc: 'Drive south. Afternoon: surf lesson at Padang Padang Beach. Sunset: Kecak fire dance at Uluwatu Temple.' },
      { day: '05', title: 'Seminyak', desc: 'Transfer to Seminyak. Beach club day. Evening: farewell dinner at a top restaurant.' },
      { day: '06', title: 'Departure', desc: 'Morning: spa treatment or shopping. Transfer to airport.' }
    ],
    accommodation: [
      { name: 'River Resort (Ubud)', desc: 'A boutique resort above the Ayung River with private villas, infinity pool, and daily spa.' },
      { name: 'Beachfront Hotel (Seminyak)', desc: 'A stylish beachfront property with pool, walking distance to restaurants and clubs.' }
    ],
    included: ['All accommodation (5 nights)', 'Daily breakfast and 1 dinner', 'Airport transfers', 'Rice terrace walk', 'Water temple visit', 'Cooking class', 'Kecak dance tickets', 'Daily spa', 'Dedicated travel planner'],
    notIncluded: ['International flights', 'Travel insurance', 'Lunches', 'Surf lessons', 'Personal expenses']
  },
  {
    slug: 'malaysia',
    category: 'international',
    num: '04',
    title: 'Malaysia — Truly Asia',
    country: 'Malaysia',
    where: 'Kuala Lumpur · Langkawi · Penang',
    img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1600&q=80',
    duration: '5N/6D',
    durationNights: 5,
    groupSize: 'Max 10',
    difficulty: 'Easy',
    bestSeason: 'Year-round',
    startingLocation: 'Kuala Lumpur',
    destination: 'Kuala Lumpur · Langkawi · Penang',
    price: '₹45,000',
    priceNum: 45000,
    shortDesc: 'Modern skyline, island paradise, and world-class street food.',
    intro: 'Malaysia is truly Asia in miniature — a multicultural mosaic of Malay, Chinese, and Indian influences reflected in its food, festivals, and architecture. From the Petronas Towers to the rainforest island of Langkawi, Malaysia delivers diverse experiences at excellent value.',
    about: [
      'Begin in Kuala Lumpur, where the iconic Petronas Twin Towers dominate the skyline. Explore Batu Caves, Chinatown, and the vibrant Jalan Alor food street — Malaysia\'s street food scene rivals any in Asia.',
      'Fly to Langkawi, a duty-free island of ancient rainforest, cable-car rides, and pristine beaches. End in Penang — the food capital of Malaysia — where George Town\'s colonial charm and hawker centres make every meal an event.',
      'Malaysia offers world-class experiences at remarkably affordable prices.'
    ],
    highlights: [
      { title: 'Petronas Towers', desc: 'Visit the iconic Twin Towers — the world\'s tallest twin structures.', icon: 'city' },
      { title: 'Langkawi Island', desc: 'Cable car ride, sky bridge, and pristine beaches on this duty-free island paradise.', icon: 'beach' },
      { title: 'Penang Street Food', desc: 'George Town\'s hawker centres serve the best street food in Southeast Asia.', icon: 'food' },
      { title: 'Batu Caves', desc: 'Climb 272 steps to the stunning Hindu temple inside a limestone cave.', icon: 'temple' },
      { title: 'Rainforest Walk', desc: 'Langkawi\'s ancient rainforest — one of the world\'s oldest, with canopy walks and waterfalls.', icon: 'terrace' },
      { title: 'Cultural Mix', desc: 'Experience Malay, Chinese, and Indian cultures side by side in food, festivals, and architecture.', icon: 'dance' }
    ],
    itinerary: [
      { day: '01', title: 'Kuala Lumpur', desc: 'Arrive in KL. Visit Petronas Twin Towers and KLCC Park. Evening: Jalan Alor food street tour.' },
      { day: '02', title: 'KL Sightseeing', desc: 'Morning: Batu Caves. Afternoon: Merdeka Square, Chinatown, and Central Market. Evening: rooftop bar.' },
      { day: '03', title: 'Fly to Langkawi', desc: 'Morning flight to Langkawi. Afternoon: Cable car and Sky Bridge. Evening: beachside dinner.' },
      { day: '04', title: 'Langkawi', desc: 'Full day: island hopping, snorkelling, and waterfalls. Or: duty-free shopping and beach relaxation.' },
      { day: '05', title: 'Langkawi to Penang', desc: 'Fly to Penang. Afternoon: George Town heritage walk and street art. Evening: hawker food tour.' },
      { day: '06', title: 'Departure', desc: 'Morning: Penang Hill or Kek Lok Si Temple. Transfer to airport.' }
    ],
    accommodation: [
      { name: 'City Hotel (KL)', desc: 'A modern hotel near the Petronas Towers with pool and city views.' },
      { name: 'Beach Resort (Langkawi)', desc: 'A resort on Pantai Cenang with pool, spa, and direct beach access.' },
      { name: 'Heritage Hotel (Penang)', desc: 'A boutique hotel in George Town\'s UNESCO zone with colonial charm.' }
    ],
    included: ['All accommodation (5 nights)', 'Daily breakfast', 'Airport transfers', 'Petronas Towers ticket', 'Langkawi cable car', 'George Town walk', 'Dedicated travel planner'],
    notIncluded: ['International flights', 'Travel insurance', 'Lunches/dinners', 'Personal expenses']
  },
  {
    slug: 'singapore',
    category: 'international',
    num: '05',
    title: 'Singapore — The Lion City',
    country: 'Singapore',
    where: 'Marina Bay · Sentosa · Gardens by the Bay · Orchard Road',
    img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600&q=80',
    duration: '4N/5D',
    durationNights: 4,
    groupSize: 'Max 10',
    difficulty: 'Easy',
    bestSeason: 'Year-round',
    startingLocation: 'Singapore Airport',
    destination: 'Marina Bay · Sentosa · Gardens by the Bay · Orchard Road',
    price: '₹58,000',
    priceNum: 58000,
    shortDesc: 'Futuristic skyline, world-class shopping, and multicultural cuisine.',
    intro: 'Singapore is a city of superlatives — the world\'s best airport, Asia\'s most expensive city, and home to some of the most innovative architecture on the planet. This five-day journey reveals why this tiny island nation punches so far above its weight.',
    about: [
      'Explore Marina Bay — where the lotus-shaped ArtScience Museum sits beside the futuristic Gardens by the Bay with their supertree grove light show. Visit the iconic Marina Bay Sands infinity pool (from the observation deck) and Merlion Park.',
      'Sentosa Island offers beaches, Universal Studios, and the S.E.A. Aquarium. Chinatown, Little India, and Kampong Glam reveal Singapore\'s multicultural soul — each neighbourhood a world unto itself.',
      'Singapore is a food paradise — from hawker centres to Michelin-starred restaurants, eating well is a way of life here.'
    ],
    highlights: [
      { title: 'Gardens by the Bay', desc: 'Walk among the futuristic Supertrees and watch the evening light show.', icon: 'terrace' },
      { title: 'Marina Bay Sands', desc: 'Iconic skyline views from the observation deck and the famous infinity pool area.', icon: 'city' },
      { title: 'Sentosa Island', desc: 'Beaches, Universal Studios, S.E.A. Aquarium, and the Skyline Luge.', icon: 'beach' },
      { title: 'Hawker Centres', desc: 'Michelin-recommended street food at hawker centres — chicken rice, laksa, and char kway teow.', icon: 'food' },
      { title: 'Chinatown & Little India', desc: 'Explore Singapore\'s vibrant multicultural neighbourhoods — temples, mosques, and markets.', icon: 'temple' },
      { title: 'Orchard Road', desc: 'Asia\'s most famous shopping belt — luxury brands and megamalls.', icon: 'craft' }
    ],
    itinerary: [
      { day: '01', title: 'Marina Bay', desc: 'Arrive in Singapore. Visit Gardens by the Bay and Cloud Forest. Evening: Marina Bay Sands light and water show.' },
      { day: '02', title: 'Sentosa Island', desc: 'Full day on Sentosa: S.E.A. Aquarium, beaches, and Universal Studios (optional). Evening: Wings of Time show.' },
      { day: '03', title: 'Cultural Singapore', desc: 'Morning: Chinatown and Thian Hock Keng Temple. Afternoon: Little India and Kampong Glam. Evening: hawker centre dinner.' },
      { day: '04', title: 'Singapore Zoo & Night Safari', desc: 'Morning: Singapore Zoo (one of the world\'s best). Afternoon: River Wonders. Evening: Night Safari.' },
      { day: '05', title: 'Departure', desc: 'Morning: Orchard Road shopping or Botanic Gardens (UNESCO). Transfer to airport — explore Jewel Changi.' }
    ],
    accommodation: [
      { name: 'Marina Bay Hotel', desc: 'A premium hotel near Marina Bay with city views, pool, and easy MRT access.' }
    ],
    included: ['All accommodation (4 nights)', 'Daily breakfast', 'Airport transfers', 'Gardens by the Bay ticket', 'Singapore Zoo ticket', 'Dedicated travel planner'],
    notIncluded: ['International flights', 'Travel insurance', 'Lunches/dinners', 'Universal Studios', 'Personal expenses']
  },
  {
    slug: 'dubai',
    category: 'international',
    num: '06',
    title: 'Dubai — City of Superlatives',
    country: 'UAE',
    where: 'Dubai · Abu Dhabi',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80',
    duration: '4N/5D',
    durationNights: 4,
    groupSize: 'Max 10',
    difficulty: 'Easy',
    bestSeason: 'Nov — Mar',
    startingLocation: 'Dubai Airport',
    destination: 'Dubai · Abu Dhabi',
    price: '₹48,000',
    priceNum: 48000,
    shortDesc: 'Desert safaris, record-breaking architecture, and luxury shopping.',
    intro: 'Dubai is a city that defies imagination — where the world\'s tallest building pierces the clouds, man-made islands reshape the coastline, and the ancient desert meets cutting-edge modernity. This five-day journey reveals the many faces of the Arabian Gulf.',
    about: [
      'Explore the gleaming skyline — Burj Khalifa, Dubai Mall, and the Dubai Fountain show. Wander through the Gold Souk and Spice Souk in old Dubai, where the traditional abras (water taxis) still cross the creek.',
      'Experience a desert safari with dune bashing, camel rides, and a Bedouin-style dinner under the stars. Day trip to Abu Dhabi for the magnificent Sheikh Zayed Grand Mosque.',
      'Dubai is a city of contrast and ambition — ancient souks alongside the world\'s most futuristic architecture.'
    ],
    highlights: [
      { title: 'Burj Khalifa', desc: 'Visit the world\'s tallest building — observation deck at 124th floor with panoramic views.', icon: 'city' },
      { title: 'Desert Safari', desc: 'Dune bashing, camel riding, and Bedouin camp dinner under the desert sky.', icon: 'desert' },
      { title: 'Gold Souk', desc: 'Wander the dazzling Gold Souk and Spice Souk in old Dubai\'s Deira district.', icon: 'craft' },
      { title: 'Dubai Fountain', desc: 'Watch the world\'s largest choreographed fountain show at the foot of Burj Khalifa.', icon: 'lake' },
      { title: 'Sheikh Zayed Mosque', desc: 'Day trip to Abu Dhabi\'s breathtaking Grand Mosque — one of the world\'s most beautiful.', icon: 'temple' },
      { title: 'Dubai Mall', desc: 'The world\'s largest mall — aquarium, ice rink, and 1,200+ shops.', icon: 'adventure' }
    ],
    itinerary: [
      { day: '01', title: 'Dubai Arrival', desc: 'Arrive in Dubai. Visit Burj Khalifa (At The Top). Evening: Dubai Fountain show and dinner at Dubai Mall.' },
      { day: '02', title: 'Old Dubai', desc: 'Morning: Gold Souk and Spice Souk by abra. Afternoon: Dubai Museum and Al Fahidi Historical Neighbourhood. Evening: dhow cruise dinner.' },
      { day: '03', title: 'Desert Safari', desc: 'Morning: Palm Jumeirah and Atlantis. Afternoon: desert safari — dune bashing, camel ride, BBQ dinner at Bedouin camp.' },
      { day: '04', title: 'Abu Dhabi Day Trip', desc: 'Full-day trip to Abu Dhabi: Sheikh Zayed Grand Mosque, Corniche, and Heritage Village. Return to Dubai.' },
      { day: '05', title: 'Departure', desc: 'Morning: Dubai Marina walk or shopping. Transfer to airport.' }
    ],
    accommodation: [
      { name: 'Beach Hotel (Dubai)', desc: 'A modern hotel near JBR Beach with pool, gym, and easy metro access.' }
    ],
    included: ['All accommodation (4 nights)', 'Daily breakfast', 'Airport transfers', 'Burj Khalifa ticket', 'Desert safari with dinner', 'Abu Dhabi day trip', 'Dedicated travel planner'],
    notIncluded: ['International flights', 'Travel insurance', 'Lunches', 'Personal expenses']
  },
  {
    slug: 'vietnam',
    category: 'international',
    num: '07',
    title: 'Vietnam — Timeless Charm',
    country: 'Vietnam',
    where: 'Hanoi · Ha Long Bay · Hoi An · Ho Chi Minh City',
    img: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1600&q=80',
    duration: '6N/7D',
    durationNights: 6,
    groupSize: 'Max 10',
    difficulty: 'Easy',
    bestSeason: 'Oct — Apr',
    startingLocation: 'Hanoi',
    destination: 'Hanoi · Ha Long Bay · Hoi An · Ho Chi Minh City',
    price: '₹52,000',
    priceNum: 52000,
    shortDesc: 'Ha Long Bay, lantern-lit ancient towns, and incredible street food.',
    intro: 'Vietnam is one of Southeast Asia\'s most captivating destinations — a country of dramatic natural beauty, ancient culture, and some of the best street food on Earth. This seven-day journey from north to south covers Vietnam\'s greatest highlights.',
    about: [
      'Begin in Hanoi, where ancient temples sit beside French colonial architecture and the old quarter buzzes with motorbikes and pho stalls. Cruise through the limestone karsts of Ha Long Bay — a UNESCO World Heritage Site of staggering beauty.',
      'Fly south to Hoi An, a perfectly preserved ancient trading port where lantern-lit streets reflect in the river and tailors create custom clothing in 24 hours.',
      'End in Ho Chi Minh City (Saigon), a dynamic metropolis where the War Remnants Museum, Cu Chi Tunnels, and vibrant markets tell the story of Vietnam\'s remarkable journey.'
    ],
    highlights: [
      { title: 'Ha Long Bay Cruise', desc: 'Overnight cruise through thousands of limestone karsts rising from emerald water.', icon: 'fjord' },
      { title: 'Hoi An Ancient Town', desc: 'Lantern-lit streets, tailor shops, and the iconic Japanese Covered Bridge.', icon: 'city' },
      { title: 'Vietnamese Street Food', desc: 'Pho, banh mi, bun cha — Vietnam\'s street food is among the world\'s best.', icon: 'food' },
      { title: 'Cu Chi Tunnels', desc: 'Crawl through the historic tunnel network used during the Vietnam War.', icon: 'adventure' },
      { title: 'Lantern Festival', desc: 'Release lanterns on the Thu Bon River during Hoi An\'s magical monthly festival.', icon: 'stars' },
      { title: 'French Colonial Heritage', desc: 'Hanoi\'s French Quarter and HCMC\'s colonial architecture tell a fascinating story.', icon: 'fort' }
    ],
    itinerary: [
      { day: '01', title: 'Hanoi', desc: 'Arrive in Hanoi. Explore the Old Quarter and Hoàn Kiếm Lake. Evening: water puppet show and street food tour.' },
      { day: '02', title: 'Ha Long Bay', desc: 'Drive to Ha Long Bay. Board overnight cruise. Kayaking, cave visits, and sunset on the deck.' },
      { day: '03', title: 'Ha Long to Hanoi', desc: 'Morning: Tai Chi on the deck and sunrise over the karsts. Disembark. Return to Hanoi. Evening: train street visit.' },
      { day: '04', title: 'Fly to Da Nang → Hoi An', desc: 'Morning flight to Da Nang. Transfer to Hoi An. Afternoon: ancient town walk. Evening: lantern-lit streets and river dinner.' },
      { day: '05', title: 'Hoi An Exploration', desc: 'Morning: cooking class or bicycle ride through rice paddies. Afternoon: tailoring, beaches, or Cua Dai. Evening: fishing with locals.' },
      { day: '06', title: 'Fly to Ho Chi Minh City', desc: 'Morning flight to HCMC. Afternoon: War Remnants Museum and Reunification Palace. Evening: Bui Vien walking street.' },
      { day: '07', title: 'Cu Chi & Departure', desc: 'Morning: Cu Chi Tunnels excursion. Afternoon: Ben Thanh Market. Transfer to airport.' }
    ],
    accommodation: [
      { name: 'Boutique Hotel (Hanoi)', desc: 'A charming hotel in Hanoi\'s Old Quarter with rooftop bar and lake views.' },
      { name: 'Cruise Cabin (Ha Long Bay)', desc: 'A luxury cabin on an overnight cruise with private balcony and bay views.' },
      { name: 'Riverside Hotel (Hoi An)', desc: 'A boutique hotel on the Thu Bon River with bicycle hire and pool.' }
    ],
    included: ['All accommodation (6 nights)', 'Daily breakfast and 1 dinner', 'All domestic flights', 'Ha Long Bay overnight cruise', 'All transfers', 'Street food tour', 'Dedicated travel planner'],
    notIncluded: ['International flights', 'Travel insurance', 'Lunches', 'Tailoring', 'Personal expenses']
  },
  {
    slug: 'maldives',
    category: 'international',
    num: '08',
    title: 'Maldives — Turquoise Dreams',
    country: 'Maldives',
    where: 'Malé · Resort Island · Water Villa',
    img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80',
    duration: '4N/5D',
    durationNights: 4,
    groupSize: 'Max 4',
    difficulty: 'Easy',
    bestSeason: 'Nov — Apr',
    startingLocation: 'Malé Airport',
    destination: 'Malé · Resort Island · Water Villa',
    price: '₹80,000',
    priceNum: 80000,
    shortDesc: 'Overwater villas, coral reefs, and Indian Ocean paradise.',
    intro: 'The Maldives is the ultimate tropical escape — a chain of 1,190 coral islands scattered across the Indian Ocean like jewels. Overwater villas, turquoise lagoons, and some of the world\'s best diving make this the quintessential luxury beach destination.',
    about: [
      'Arrive in Malé and transfer to your resort island by speedboat or seaplane. Check into an overwater villa where glass floors reveal the ocean below and your private deck leads directly into the warm lagoon.',
      'Spend your days snorkelling among vibrant coral gardens, swimming with manta rays, and enjoying spa treatments overlooking the endless blue. Dine on the beach under a canopy of stars.',
      'The Maldives is pure escapism — a place where the outside world simply melts away.'
    ],
    highlights: [
      { title: 'Water Villa', desc: 'Stay in an overwater villa with glass floor, private deck, and direct ocean access.', icon: 'beach' },
      { title: 'Snorkelling & Diving', desc: 'Explore vibrant coral reefs teeming with tropical fish, manta rays, and turtles.', icon: 'adventure' },
      { title: 'Beach Dining', desc: 'Private sandbank dinner under the stars with the Indian Ocean as your dining room.', icon: 'food' },
      { title: 'Spa Retreat', desc: 'Overwater spa treatments with glass-floor treatment rooms above the reef.', icon: 'spa' },
      { title: 'Sunset Dolphin Cruise', desc: 'Watch dolphins play in the golden light of a Maldivian sunset.', icon: 'lake' },
      { title: 'Island Hopping', desc: 'Visit local islands to experience Maldivian culture, crafts, and cuisine.', icon: 'city' }
    ],
    itinerary: [
      { day: '01', title: 'Arrival & Transfer', desc: 'Arrive in Malé. Speedboat or seaplane transfer to your resort. Settle into your water villa. Sunset cocktails on your deck.' },
      { day: '02', title: 'Ocean Day', desc: 'Morning: guided snorkelling excursion on the house reef. Afternoon: spa treatment or pool time. Evening: beach dinner.' },
      { day: '03', title: 'Adventure Day', desc: 'Morning: dolphin cruise. Afternoon: diving (certified) or snorkelling safari. Evening: private sandbank dinner.' },
      { day: '04', title: 'Relaxation Day', desc: 'Full day at leisure: spa, swimming, reading, and enjoying the overwater villa. Sunset: fishing trip or cultural show.' },
      { day: '05', title: 'Departure', desc: 'Morning: final swim in the lagoon. Transfer to Malé for departure.' }
    ],
    accommodation: [
      { name: 'Overwater Villa (Resort Island)', desc: 'A luxury overwater villa with glass floor, private infinity pool, butler service, and 180° ocean views.' }
    ],
    included: ['All accommodation (4 nights)', 'All meals (full board)', 'Speedboat/seaplane transfers', 'Snorkelling equipment', 'Guided reef excursion', 'Dolphin cruise', 'Dedicated travel planner'],
    notIncluded: ['International flights', 'Travel insurance', 'Diving', 'Premium excursions', 'Personal expenses']
  },
  {
    slug: 'japan',
    category: 'international',
    num: '09',
    title: 'Japan — Land of the Rising Sun',
    country: 'Japan',
    where: 'Tokyo · Kyoto · Osaka · Hakone',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=80',
    duration: '7N/8D',
    durationNights: 7,
    groupSize: 'Max 10',
    difficulty: 'Easy',
    bestSeason: 'Mar — May, Oct — Nov',
    startingLocation: 'Tokyo',
    destination: 'Tokyo · Kyoto · Osaka · Hakone',
    price: '₹1,45,000',
    priceNum: 145000,
    shortDesc: 'Ancient temples, bullet trains, and the art of Japanese living.',
    intro: 'Japan is a country of extraordinary contrasts — ancient temples stand beside neon-lit towers, serene bamboo groves exist alongside bullet trains, and every meal is an art form. This eight-day journey weaves through Japan\'s most iconic cities and hidden corners.',
    about: [
      'Begin in Tokyo, where ancient shrines sit beside the world\'s busiest pedestrian crossing. Visit the serene Meiji Shrine, explore Akihabara\'s tech wonderland, and eat your way through Tsukiji Outer Market.',
      'Take the bullet train to Kyoto — the cultural heart of Japan. Walk through the bamboo groves of Arashiyama, visit thousands of vermilion torii gates at Fushimi Inari, and experience a traditional tea ceremony.',
      'End in Osaka — Japan\'s kitchen — where every street corner offers a new culinary discovery. Hakone provides Mount Fuji views and traditional hot spring soaks.'
    ],
    highlights: [
      { title: 'Bullet Train', desc: 'Experience the Shinkansen — gliding between cities at 300 km/h in supreme comfort.', icon: 'train' },
      { title: 'Kyoto Temples', desc: 'Fushimi Inari\'s thousand gates, Kinkaku-ji golden pavilion, and Arashiyama bamboo.', icon: 'temple' },
      { title: 'Mount Fuji', desc: 'Wake to views of Japan\'s most sacred mountain from your ryokan in Hakone.', icon: 'mountain' },
      { title: 'Japanese Cuisine', desc: 'From Tsukiji sushi to Osaka street food — Japan is a food lover\'s paradise.', icon: 'food' },
      { title: 'Onsen Experience', desc: 'Traditional hot spring bath in a Hakone ryokan — the ultimate Japanese relaxation.', icon: 'spa' },
      { title: 'Cherry Blossoms', desc: 'Timed for peak sakura season (March-April) — parks and temples draped in pink.', icon: 'blossom' }
    ],
    itinerary: [
      { day: '01', title: 'Tokyo Arrival', desc: 'Arrive in Tokyo. Transfer to hotel in Shinjuku. Evening: Omoide Yokocho and Golden Gai.' },
      { day: '02', title: 'Tokyo Exploration', desc: 'Morning: Meiji Shrine and Harajuku. Afternoon: Senso-ji and Asakusa. Evening: Shibuya crossing and dinner.' },
      { day: '03', title: 'Day Trip — Kamakura', desc: 'Day trip to Kamakura: Great Buddha, bamboo groves, and coastal temples. Fresh shirasu lunch by the sea.' },
      { day: '04', title: 'Bullet Train to Kyoto', desc: 'Morning Shinkansen to Kyoto. Afternoon: Arashiyama bamboo grove. Evening: Gion district walk.' },
      { day: '05', title: 'Kyoto Full Day', desc: 'Kinkaku-ji, Ryoan-ji, and Fushimi Inari. Afternoon: traditional tea ceremony. Evening: kaiseki dinner.' },
      { day: '06', title: 'Nara Day Trip', desc: 'Day trip to Nara: sacred deer park, Todai-ji Buddha hall, and moss gardens. Return to Kyoto.' },
      { day: '07', title: 'Hakone & Fuji', desc: 'Travel to Hakone. Ryokan stay with private onsen. Lake Ashi cruise with Mt. Fuji views. Kaiseki dinner.' },
      { day: '08', title: 'Osaka & Departure', desc: 'Morning: train to Osaka. Dotonbori street food. Osaka Castle. Transfer to Kansai Airport.' }
    ],
    accommodation: [
      { name: 'City Hotel (Tokyo)', desc: 'A stylish boutique hotel in Shinjuku with modern Japanese design and easy metro access.' },
      { name: 'Boutique Hotel (Kyoto)', desc: 'A central Kyoto hotel blending modern comfort with traditional Japanese aesthetics.' },
      { name: 'Traditional Ryokan (Hakone)', desc: 'A two-night ryokan stay with tatami rooms, futon beds, private onsen, and kaiseki dinner.' }
    ],
    included: ['All accommodation (7 nights)', 'Daily breakfast and 3 dinners', 'Japan Rail Pass (7-day)', 'Airport transfers', 'All temple entries', 'Tea ceremony', 'Hakone day pass', 'Dedicated travel planner'],
    notIncluded: ['International flights', 'Travel insurance', 'Lunches', 'Optional activities', 'Visa']
  },
  {
    slug: 'switzerland',
    category: 'international',
    num: '10',
    title: 'Switzerland — Alpine Wonderland',
    country: 'Switzerland',
    where: 'Zurich · Lucerne · Interlaken · Zermatt · Geneva',
    img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1600&q=80',
    duration: '6N/7D',
    durationNights: 6,
    groupSize: 'Max 8',
    difficulty: 'Easy',
    bestSeason: 'Jun — Sep, Dec — Mar',
    startingLocation: 'Zurich',
    destination: 'Zurich · Lucerne · Interlaken · Zermatt · Geneva',
    price: '₹1,85,000',
    priceNum: 185000,
    shortDesc: 'Matterhorn views, crystal lakes, and scenic train journeys.',
    intro: 'Switzerland is the gold standard of Alpine beauty — a country of snow-capped peaks, mirror-still lakes, and charming villages that look like they\'ve been lifted from a storybook. This seven-day journey covers the finest Swiss experiences by train, cable car, and boat.',
    about: [
      'Begin in Zurich, Switzerland\'s largest city, where medieval old town meets modern sophistication. Take the scenic train to Lucerne — the gateway to central Switzerland — where the iconic Chapel Bridge spans a lake surrounded by mountains.',
      'Continue to Interlaken, the adventure capital nestled between two lakes with the Jungfrau massif as its backdrop. Ride the Jungfraujoch railway to the "Top of Europe" at 11,332 feet.',
      'End in Zermatt, where the iconic Matterhorn dominates the skyline. The Glacier Express scenic train journey between these towns is one of the world\'s most beautiful rail rides.'
    ],
    highlights: [
      { title: 'Matterhorn', desc: 'The iconic pyramid peak of Zermatt — visible from everywhere in this car-free mountain village.', icon: 'mountain' },
      { title: 'Jungfraujoch', desc: 'Ride the railway to the "Top of Europe" at 11,332 ft with views of the Aletsch Glacier.', icon: 'adventure' },
      { title: 'Scenic Trains', desc: 'Glacier Express and GoldenPass routes — among the world\'s most spectacular rail journeys.', icon: 'train' },
      { title: 'Crystal Lakes', desc: 'Lake Lucerne, Lake Thun, and Lake Geneva — each more stunning than the last.', icon: 'lake' },
      { title: 'Swiss Villages', desc: 'Charming Alpine villages with flower-box windows, cheese factories, and mountain churches.', icon: 'city' },
      { title: 'Swiss Cuisine', desc: 'Fondue, raclette, rösti, and Swiss chocolate — a food journey through the Alps.', icon: 'food' }
    ],
    itinerary: [
      { day: '01', title: 'Zurich', desc: 'Arrive in Zurich. Explore the medieval Old Town, Grossmünster, and Lake Zurich promenade. Swiss chocolate tasting.' },
      { day: '02', title: 'Zurich to Lucerne', desc: 'Train to Lucerne. Visit the Chapel Bridge, Lion Monument, and lake promenade. Afternoon: Mt. Pilatus or Mt. Rigi excursion.' },
      { day: '03', title: 'Lucerne to Interlaken', desc: 'Scenic GoldenPass train to Interlaken. Afternoon: Lake Thun or Lake Brienz cruise. Evening: Alpine village stroll.' },
      { day: '04', title: 'Jungfraujoch', desc: 'Full-day excursion to Jungfraujoch — "Top of Europe." Aletsch Glacier views, ice palace, and snow activities.' },
      { day: '05', title: 'Interlaken to Zermatt', desc: 'Train to Zermatt via the Glacier Express route. Afternoon: explore the car-free village. Matterhorn views.' },
      { day: '06', title: 'Zermatt Exploration', desc: 'Morning: Gornergrat railway for panoramic Matterhorn and Monte Rosa views. Afternoon: village walk and Swiss fondue dinner.' },
      { day: '07', title: 'Zermatt to Geneva & Departure', desc: 'Train to Geneva via Visp. Brief city tour: Jet d\'Eau, Old Town, and Lake Geneva. Transfer to airport.' }
    ],
    accommodation: [
      { name: 'Lakeside Hotel (Lucerne)', desc: 'A premium hotel on Lake Lucerne with mountain views and Swiss hospitality.' },
      { name: 'Mountain Hotel (Interlaken)', desc: 'A boutique hotel with Jungfrau views, garden, and easy access to mountain railways.' },
      { name: 'Chalet Hotel (Zermatt)', desc: 'A charming Alpine chalet-hotel with Matterhorn views and traditional wooden interiors.' }
    ],
    included: ['All accommodation (6 nights)', 'Daily breakfast and 2 dinners', 'Swiss Travel Pass (6-day)', 'All train journeys', 'Jungfraujoch excursion', 'Gornergrat excursion', 'Lake cruise', 'Dedicated travel planner'],
    notIncluded: ['International flights', 'Travel insurance', 'Lunches', 'Premium upgrades', 'Visa']
  }
];

// ── Utility: slugify ──
function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// ── Utility: find journey by slug ──
function findJourney(slug) {
  return allJourneys.find(j => j.slug === slug);
}

// ── External enquiry URL (set this to connect to a real form service later) ──
const TRIP_ENQUIRY_URL = null; // e.g. 'https://forms.example.com/asvtours-enquiry'

// ── Routing ──
function getRoute() {
  // Support both hash-based (#/journeys/goa) and path-based (/journeys/goa)
  const hash = window.location.hash || '';
  if (hash.startsWith('#/')) return hash.replace(/^#/, '');
  // Check path-based routing
  const path = window.location.pathname;
  if (path.startsWith('/journeys/') || path === '/plan-your-trip' || path.startsWith('/plan-your-trip')) {
    return path;
  }
  return '';
}

function navigateTo(path) {
  window.location.hash = path;
}

function handleRoute() {
  const route = getRoute();
  const mainSite = document.getElementById('mainSite');
  const detailPage = document.getElementById('journeyDetailPage');
  const enquiryPage = document.getElementById('enquiryPage');

  // If external enquiry URL is set, redirect there
  if (route === '/plan-your-trip' && TRIP_ENQUIRY_URL) {
    const params = new URLSearchParams(window.location.search || window.location.hash.split('?')[1] || '');
    window.location.href = TRIP_ENQUIRY_URL + (params.toString() ? '?' + params.toString() : '');
    return;
  }

  if (route.startsWith('/journeys/')) {
    const slug = route.replace('/journeys/', '');
    const journey = findJourney(slug);
    if (journey && mainSite && detailPage) {
      mainSite.style.display = 'none';
      if (detailPage) detailPage.style.display = 'block';
      if (enquiryPage) enquiryPage.style.display = 'none';
      renderJourneyDetail(journey);
      window.scrollTo(0, 0);
      document.title = journey.title + ' — ASV TOURS';
    } else {
      window.location.href = '/';
    }
  } else if (route === '/plan-your-trip' || route.startsWith('/plan-your-trip')) {
    if (mainSite) mainSite.style.display = 'none';
    if (detailPage) { detailPage.style.display = 'none'; detailPage.innerHTML = ''; }
    if (enquiryPage) enquiryPage.style.display = 'block';
    // Parse destination from query params or hash params
    let preselectedDest = '';
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('dest')) {
      preselectedDest = urlParams.get('dest');
    } else {
      const hashParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
      if (hashParams.has('dest')) preselectedDest = hashParams.get('dest');
    }
    renderEnquiryPage(preselectedDest);
    window.scrollTo(0, 0);
    document.title = 'Plan Your Trip — ASV TOURS';
  } else {
    if (mainSite) mainSite.style.display = 'block';
    if (detailPage) { detailPage.style.display = 'none'; detailPage.innerHTML = ''; }
    if (enquiryPage) { enquiryPage.style.display = 'none'; enquiryPage.innerHTML = ''; }
    document.title = 'ASV TOURS — Premium Curated Journeys';
    window.scrollTo(0, 0);
  }
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('popstate', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);

// ── Journey Detail Page Renderer ──
function renderJourneyDetail(j) {
  const el = document.getElementById('journeyDetailPage');
  if (!el) return;

  const highlightIcons = {
    glacier: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 22L12 2l10 20H2z"/><path d="M7 22l5-8 5 8"/></svg>',
    aurora: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 20c2-4 6-8 10-8s6 4 10 0"/><path d="M2 16c3-3 7-5 10-5s7 3 10-1"/></svg>',
    ice: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/></svg>',
    circle: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    beach: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21H3M3 21l3-12 5 4 4-8 6 16"/><circle cx="19" cy="5" r="2"/></svg>',
    spring: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/></svg>',
    blossom: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4z"/><path d="M12 10v12M8 14l4 4 4-4"/></svg>',
    mountain: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 22L9 8l5 8 3-4 5 10"/></svg>',
    temple: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 22V10l8-6 8 6v12"/><path d="M9 22v-6h6v6M2 22h20"/></svg>',
    food: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a4 4 0 014 4v4a4 4 0 01-8 0V6a4 4 0 014-4z"/><path d="M4 14c0 4 3.6 8 8 8s8-4 8-8"/></svg>',
    onsen: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 16h16v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4z"/><path d="M6 12c0-2 2-2 2 0M10 12c0-2 2-2 2 0M14 12c0-2 2-2 2 0M18 12c0-2 2-2 2 0"/></svg>',
    train: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="3" width="16" height="14" rx="2"/><path d="M4 11h16M8 21l2-4M16 21l-2-4"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/></svg>',
    desert: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 20c4-4 8-12 10-12s6 8 10 12"/><circle cx="18" cy="6" r="3"/></svg>',
    medina: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 22V8l9-5 9 5v14M9 22V12h6v10"/></svg>',
    riads: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 22V8l9-5 9 5v14M9 22V12h6v10"/><circle cx="12" cy="9" r="2"/></svg>',
    camel: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 18c0-2 2-3 2-5s-1-4 2-5 3 1 4 0 2-3 4-3 3 2 4 4-1 4-1 6 2 3 2 5"/></svg>',
    fjord: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 18l5-6 3 4 4-8 4 6 4-4"/><path d="M2 22h20"/></svg>',
    hike: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 22l4-12 4 4 4-8 4 8"/></svg>',
    adventure: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 22h20L12 2z"/></svg>',
    lake: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/></svg>',
    stars: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z"/></svg>',
    tree: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22V10M8 22h8M6 10c0-4 3-6 6-8 3 2 6 4 6 8"/><path d="M12 10c-3 0-5 2-5 4h10c0-2-2-4-5-4z"/></svg>',
    terrace: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 18h20M4 14h16M6 10h12M8 6h8"/></svg>',
    dance: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="4" r="2"/><path d="M12 6v6l-4 4M12 12l4 4M8 22l4-6 4 6"/></svg>',
    spa: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2c-4 4-8 8-8 12a8 8 0 0016 0c0-4-4-8-8-12z"/></svg>',
    fort: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 22V8l9-6 9 6v14M3 22h18M7 22v-4h4v4M13 22v-4h4v4"/><path d="M7 10h10"/></svg>',
    city: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 22V10l4-3v15M10 22V7l4-3v18M17 22V10l4-3v15"/></svg>',
    haveli: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 22V8l9-6 9 6v14M3 22h18"/><path d="M9 22v-6h6v6"/><circle cx="12" cy="11" r="2"/></svg>',
    craft: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a4 4 0 014 4v4a4 4 0 01-8 0V6a4 4 0 014-4z"/><path d="M8 14l4 8 4-8"/></svg>'
  };

  const contactUrl = '#/plan-your-trip?dest=' + encodeURIComponent(j.slug);

  el.innerHTML = `
    <div class="jd-page">
      <!-- Header -->
      <header class="jd-header">
        <div class="jd-header-inner">
          <div class="jd-header-left">
            <a href="/" class="jd-back-link">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M13 7H1m0 0l6-6M1 7l6 6" stroke="currentColor" stroke-width="1.5"/></svg>
              Back to Journeys
            </a>
            <a href="/">
              <img src="/assets/asv-tours-logo.png" alt="ASV TOURS" class="jd-header-logo">
            </a>
          </div>
          <nav class="jd-header-nav" id="jdNav">
            <a href="/destinations">Destinations</a>
            <a href="/packages">Packages</a>
            <a href="/contact">Contact</a>
            <a href="${contactUrl}" class="jd-header-cta">Plan a Trip</a>
          </nav>
          <button class="jd-menu-toggle" id="jdMenuToggle" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <!-- Hero -->
      <section class="jd-hero">
        <div class="jd-hero-img" style="background-image: url('${j.img}')"></div>
        <div class="jd-hero-overlay"></div>
        <div class="jd-hero-content">
          <div class="jd-hero-eyebrow"><span class="dot"></span> ${j.country}</div>
          <h1 class="jd-hero-title">${j.title}</h1>
          <p class="jd-hero-subtitle">${j.intro}</p>
          <div class="jd-hero-meta">
            <div class="jd-hero-meta-item">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="2.5" width="11" height="10" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M1.5 5.5h11M4 1v3M10 1v3" stroke="currentColor" stroke-width="1.5"/></svg>
              ${j.duration}
            </div>
            <div class="jd-hero-meta-item">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"/><path d="M2 12.5c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5" stroke="currentColor" stroke-width="1.5"/></svg>
              ${j.groupSize}
            </div>
            <div class="jd-hero-meta-item">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="6" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M7 13s5-4 5-7a5 5 0 10-10 0c0 3 5 7 5 7z" stroke="currentColor" stroke-width="1.5"/></svg>
              ${j.destination}
            </div>
          </div>
          <div class="jd-hero-price">From ${j.price}<small> INR / per person</small></div>
          <a href="${contactUrl}" class="jd-hero-cta">
            Plan This Journey
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" stroke-width="1.5"/></svg>
          </a>
        </div>
      </section>

      <!-- Overview -->
      <section class="jd-overview">
        <div class="container">
          <div class="jd-overview-grid">
            <div class="jd-overview-item">
              <div class="jd-overview-label">Duration</div>
              <div class="jd-overview-value">${j.duration}</div>
            </div>
            <div class="jd-overview-item">
              <div class="jd-overview-label">Group Size</div>
              <div class="jd-overview-value">${j.groupSize}</div>
            </div>
            <div class="jd-overview-item">
              <div class="jd-overview-label">Difficulty</div>
              <div class="jd-overview-value">${j.difficulty}</div>
            </div>
            <div class="jd-overview-item">
              <div class="jd-overview-label">Best Season</div>
              <div class="jd-overview-value">${j.bestSeason}</div>
            </div>
            <div class="jd-overview-item">
              <div class="jd-overview-label">Start</div>
              <div class="jd-overview-value">${j.startingLocation}</div>
            </div>
            <div class="jd-overview-item">
              <div class="jd-overview-label">Route</div>
              <div class="jd-overview-value" style="font-size:14px;">${j.destination}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- About -->
      <section class="jd-section">
        <div class="container">
          <h2 class="jd-section-title">About this <em>journey</em></h2>
          <div class="jd-section-text">
            ${j.about.map(p => `<p>${p}</p>`).join('')}
          </div>
        </div>
      </section>

      <!-- Highlights -->
      <section class="jd-section" style="background: var(--c-bg-alt);">
        <div class="container">
          <h2 class="jd-section-title">Journey <em>highlights</em></h2>
          <div class="jd-highlights-grid">
            ${j.highlights.map(h => `
              <div class="jd-highlight-card">
                <div class="jd-highlight-icon">${highlightIcons[h.icon] || highlightIcons.mountain}</div>
                <div class="jd-highlight-title">${h.title}</div>
                <div class="jd-highlight-desc">${h.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Itinerary -->
      <section class="jd-section jd-itinerary">
        <div class="container">
          <h2 class="jd-section-title">Day-by-day <em>itinerary</em></h2>
          <div class="jd-itinerary-list">
            ${j.itinerary.map(d => `
              <div class="jd-itinerary-day">
                <div class="jd-day-num">DAY ${d.day}</div>
                <div>
                  <div class="jd-day-title">${d.title}</div>
                  <div class="jd-day-desc">${d.desc}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Accommodation -->
      <section class="jd-section jd-accommodation">
        <div class="container">
          <h2 class="jd-section-title">Where you'll <em>stay</em></h2>
          <div class="jd-accommodation-grid">
            ${j.accommodation.map(a => `
              <div class="jd-accommodation-card">
                <div class="jd-accommodation-card-title">${a.name}</div>
                <div class="jd-accommodation-card-desc">${a.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Inclusions -->
      <section class="jd-section">
        <div class="container">
          <h2 class="jd-section-title">What's <em>included</em></h2>
          <div class="jd-inclusions">
            <div>
              <div class="jd-inclusion-group-title">Included</div>
              ${j.included.map(item => `
                <div class="jd-inclusion-item">
                  <div class="jd-inclusion-icon included">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  ${item}
                </div>
              `).join('')}
            </div>
            <div>
              <div class="jd-inclusion-group-title">Not Included</div>
              ${j.notIncluded.map(item => `
                <div class="jd-inclusion-item">
                  <div class="jd-inclusion-icon excluded">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </div>
                  ${item}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing -->
      <section class="jd-section jd-pricing">
        <div class="container">
          <h2 class="jd-section-title">Investment & <em>booking</em></h2>
          <div class="jd-pricing-card">
            <div class="jd-pricing-info">
              <div class="jd-pricing-price">From ${j.price}<small> INR</small></div>
              <div class="jd-pricing-note">Per person, based on double occupancy. Solo traveler and single-room supplements available. Group discounts for 4+ travelers.<br><em>Prices are approximate and may vary by travel date, hotel category and number of travellers.</em></div>
            </div>
            <a href="${contactUrl}" class="jd-pricing-cta">
              Plan This Journey
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" stroke-width="1.5"/></svg>
            </a>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="jd-footer">
        <div class="jd-footer-inner">
          <div class="jd-footer-grid">
            <div>
              <img src="/assets/asv-tours-logo.png" alt="ASV TOURS" class="jd-footer-logo">
              <p class="jd-footer-desc">Handpicked domestic & international journeys with stays, travel and sightseeing included. Planning trips since 2026.</p>
            </div>
            <div class="jd-footer-col">
              <h6>Explore</h6>
              <ul>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="/packages">Packages</a></li>
                <li><a href="/packages">Honeymoons</a></li>
                <li><a href="/packages">Family Trips</a></li>
              </ul>
            </div>
            <div class="jd-footer-col">
              <h6>Contact</h6>
              <ul>
                <li><a href="${contactUrl}">Plan a Trip</a></li>
                <li><a href="#">hello@asvtours.com</a></li>
                <li><a href="#">+91 90000 00000</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div class="jd-footer-bottom">
            <div>© 2026 ASV TOURS — All rights reserved.</div>
            <div style="font-family: var(--ff-mono); font-size: 11px; letter-spacing: .08em;">CIN · U00000XX2026PTC000000 · PAN · AAAAA0000A</div>
          </div>
        </div>
      </footer>
    </div>
  `;

  // JD mobile menu
  const jdToggle = document.getElementById('jdMenuToggle');
  if (jdToggle) {
    jdToggle.addEventListener('click', () => {
      const nav = document.getElementById('jdNav');
      nav?.classList.toggle('open');
    });
  }
}

// ── Enquiry Page Renderer ──
function renderEnquiryPage(preselectedDest) {
  const el = document.getElementById('enquiryPage');
  if (!el) return;

  // Build destination options
  const allDestOpts = allJourneys.map(j => {
    const selected = (preselectedDest === j.slug) ? ' selected' : '';
    const label = j.category === 'india' ? j.title + ' (India)' : j.title + ' (International)';
    return `<option value="${j.slug}"${selected}>${label}</option>`;
  }).join('');

  el.innerHTML = `
    <div class="enquiry-page">
      <header class="enquiry-header">
        <div class="enquiry-header-inner">
          <div class="enquiry-header-left">
            <a href="/" class="enquiry-back-link">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M13 7H1m0 0l6-6M1 7l6 6" stroke="currentColor" stroke-width="1.5"/></svg>
              Back
            </a>
            <a href="/">
              <img src="/assets/asv-tours-logo.png" alt="ASV TOURS" class="enquiry-header-logo">
            </a>
          </div>
          <nav style="display:flex;align-items:center;gap:24px;">
            <a href="/destinations" style="font-size:13px;font-weight:500;color:var(--c-text-muted);">Destinations</a>
            <a href="/packages" style="font-size:13px;font-weight:500;color:var(--c-text-muted);">Packages</a>
            <a href="/contact" style="font-size:13px;font-weight:500;color:var(--c-text-muted);">Contact</a>
          </nav>
        </div>
      </header>

      <section class="enquiry-hero">
        <div class="container">
          <h1 class="enquiry-hero-title">Plan your <em>journey</em></h1>
          <p class="enquiry-hero-sub">Tell us where you'd like to go and we'll craft a personalised itinerary. No commitment, no pressure — just honest options.</p>
        </div>
      </section>

      <section class="enquiry-body">
        <div class="container">
          <div class="enquiry-grid">
            <div class="enquiry-info">
              <h2 class="enquiry-info-title">Your trip,<br><em>your way.</em></h2>
              <p class="enquiry-info-text">A dedicated travel planner will review your enquiry and respond within 24 hours with a curated set of options tailored to your interests, dates, and budget.</p>
              <div class="enquiry-info-features">
                <div class="enquiry-feature">
                  <div class="enquiry-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a4 4 0 100 8 4 4 0 000-8zM4 22v-3a4 4 0 014-4h8a4 4 0 014 4v3"/></svg>
                  </div>
                  <div class="enquiry-feature-text">
                    <h4>Personalised Itinerary</h4>
                    <p>Every trip is designed around your preferences, not a template.</p>
                  </div>
                </div>
                <div class="enquiry-feature">
                  <div class="enquiry-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div class="enquiry-feature-text">
                    <h4>24-Hour Response</h4>
                    <p>A real human reads your note and writes back with honest options.</p>
                  </div>
                </div>
                <div class="enquiry-feature">
                  <div class="enquiry-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 7h18l-2 13H5L3 7zM8 7V4a4 4 0 018 0v3"/></svg>
                  </div>
                  <div class="enquiry-feature-text">
                    <h4>All-Inclusive Packages</h4>
                    <p>Hotel + travel + sightseeing — no hidden costs, no surprises.</p>
                  </div>
                </div>
                <div class="enquiry-feature">
                  <div class="enquiry-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20l-7-7 7-7M19 12H5"/></svg>
                  </div>
                  <div class="enquiry-feature-text">
                    <h4>No Commitment</h4>
                    <p>Get a free quote with no obligation to book.</p>
                  </div>
                </div>
              </div>
              <div class="enquiry-img">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Travel destination">
              </div>
            </div>

            <form class="enquiry-form-card" id="enquiryForm">
              <div class="enquiry-form-header">
                <h3>Enquiry form</h3>
                <span class="form-num">/ 01</span>
              </div>
              <div class="enquiry-form-grid">
                <div class="enquiry-field">
                  <label>Full Name</label>
                  <input type="text" name="full_name" placeholder="Aanya Sharma" required>
                </div>
                <div class="enquiry-field">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" placeholder="+91 98XXX 12345" required>
                </div>
                <div class="enquiry-field">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="aanya@example.com" required>
                </div>
                <div class="enquiry-field">
                  <label>Destination</label>
                  <select name="destination">
                    <option value="">I'd like recommendations</option>
                    <optgroup label="India">
                      <option value="goa">Goa</option>
                      <option value="kerala">Kerala</option>
                      <option value="himachal">Himachal Pradesh</option>
                      <option value="kashmir">Kashmir</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="uttarakhand">Uttarakhand</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="sikkim-darjeeling">Sikkim / Darjeeling</option>
                      <option value="andaman">Andaman</option>
                      <option value="ladakh">Ladakh</option>
                    </optgroup>
                    <optgroup label="International">
                      <option value="thailand">Thailand</option>
                      <option value="sri-lanka">Sri Lanka</option>
                      <option value="bali">Bali, Indonesia</option>
                      <option value="malaysia">Malaysia</option>
                      <option value="singapore">Singapore</option>
                      <option value="dubai">Dubai, UAE</option>
                      <option value="vietnam">Vietnam</option>
                      <option value="maldives">Maldives</option>
                      <option value="japan">Japan</option>
                      <option value="switzerland">Switzerland</option>
                    </optgroup>
                  </select>
                </div>
                <div class="enquiry-field">
                  <label>Domestic / International</label>
                  <select name="trip_type">
                    <option value="">Select</option>
                    <option value="domestic">Domestic (India)</option>
                    <option value="international">International</option>
                  </select>
                </div>
                <div class="enquiry-field">
                  <label>Preferred Travel Date</label>
                  <input type="date" name="travel_date">
                </div>
                <div class="enquiry-field">
                  <label>Number of Travellers</label>
                  <input type="text" name="travellers" placeholder="e.g. 2 adults, 1 child">
                </div>
                <div class="enquiry-field">
                  <label>Trip Type</label>
                  <select name="trip_category">
                    <option value="">Select</option>
                    <option value="honeymoon">Honeymoon</option>
                    <option value="family">Family Vacation</option>
                    <option value="couple">Couple Getaway</option>
                    <option value="group">Group Trip</option>
                    <option value="solo">Solo Travel</option>
                    <option value="adventure">Adventure</option>
                    <option value="pilgrimage">Pilgrimage</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="enquiry-field">
                  <label>Approximate Budget (per person)</label>
                  <select name="budget">
                    <option value="">Select</option>
                    <option value="6k-15k">₹6,000 — ₹15,000</option>
                    <option value="15k-30k">₹15,000 — ₹30,000</option>
                    <option value="30k-60k">₹30,000 — ₹60,000</option>
                    <option value="60k-1l">₹60,000 — ₹1,00,000</option>
                    <option value="1l+">₹1,00,000+</option>
                  </select>
                </div>
                <div class="enquiry-field full">
                  <label>Additional Requirements</label>
                  <textarea name="requirements" rows="4" placeholder="Any special requests, dietary needs, accessibility requirements, or places you'd like to visit..."></textarea>
                </div>
              </div>
              <button type="submit" class="enquiry-submit-btn" id="enquirySubmitBtn">
                <span>Request My Trip</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" stroke-width="1.5"/></svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer class="enquiry-footer">
        <div class="enquiry-footer-inner">
          <img src="/assets/asv-tours-logo.png" alt="ASV TOURS" class="enquiry-footer-logo">
          <div>© 2026 ASV TOURS — All rights reserved.</div>
        </div>
      </footer>
    </div>
  `;

  // Form submission & pre-selection
  const form = document.getElementById('enquiryForm');
  if (form) {
    // Pre-select destination from query param
    const destSelect = form.querySelector('[name="destination"]');
    if (destSelect && preselectedDest) {
      destSelect.value = preselectedDest;
    }
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('enquirySubmitBtn');
      if (!btn) return;
      const span = btn.querySelector('span');
      const origText = span ? span.textContent : 'Request My Trip';
      btn.disabled = true;
      if (span) span.textContent = 'Sending...';
      try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const res = await fetch('/api/enquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (res.ok) {
          btn.classList.add('success');
          if (span) span.textContent = "Enquiry sent — we'll respond within 24h";
          form.reset();
        } else {
          const err = await res.json().catch(() => ({}));
          alert(err.error || 'Failed to send enquiry. Please try again.');
          if (span) span.textContent = origText;
        }
      } catch (err) {
        alert('Network error. Please check your connection and try again.');
        if (span) span.textContent = origText;
      } finally {
        btn.disabled = false;
        setTimeout(() => {
          btn.classList.remove('success');
          const s = btn.querySelector('span');
          if (s) s.textContent = origText;
        }, 3500);
      }
    });
  }
}


// ═══════════════════════════════════════════════════════════════════════════
// MAIN SITE LOGIC
// ═══════════════════════════════════════════════════════════════════════════


// ── Smooth scroll for nav links ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    // Skip hash-routed links
    if (href.startsWith('#/') || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerHeight = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
      // Close mobile menu if open
      const nav = document.querySelector('.header-nav');
      if (nav?.classList.contains('open')) nav.classList.remove('open');
    }
  });
});

// ── Mobile menu toggle ──
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const nav = document.querySelector('.header-nav');
    nav?.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });
  // Close on click outside
  document.addEventListener('click', (e) => {
    const nav = document.querySelector('.header-nav');
    if (nav?.classList.contains('open') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
      nav.classList.remove('open');
      menuToggle.classList.remove('active');
    }
  });
}

// ── Hero loaded animation ──
// Removed: new hero uses CSS-only animations

// ── Search bar ──
const searchBar = document.getElementById('searchBar');
if (searchBar) {
  searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// ── Destinations (India/International) ──
let currentDestType = 'india';

const _destFallback = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';
let destinationsData = allJourneys.map(j => ({
  type: j.category,
  country: j.country,
  name: j.title,
  img: (j.img && j.img.length > 10) ? j.img : _destFallback,
  dur: j.duration,
  price: j.price,
  priceNum: j.priceNum,
  desc: j.shortDesc,
  slug: j.slug
}));

const destGrid = document.getElementById('destGrid');

function renderDestinations(type = 'india') {
  if (!destGrid) return;
  const filtered = destinationsData.filter(d => d.type === type);
  // Sort by price
  filtered.sort((a, b) => a.priceNum - b.priceNum);

  destGrid.innerHTML = filtered.map((d, i) => `
    <a class="dest-card ${i === 0 ? 'featured' : ''}" href="#/journeys/${d.slug}">
      <div class="dest-card-img" style="background-image: url('${d.img}')" onerror="if(!this.dataset.fb){this.style.backgroundImage='url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80)';this.dataset.fb=1}"></div>
      <div class="dest-card-overlay"></div>
      <span class="dest-card-price">from ${d.price}</span>
      <div class="dest-card-content">
        <div class="dest-card-region">${d.country}</div>
        <h3 class="dest-card-name">${d.name}</h3>
        <p class="dest-card-desc">${d.desc}</p>
        <div class="dest-card-tags">
          <span class="dest-tag">${d.dur}</span>
        </div>
      </div>
      <span class="dest-card-explore">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" stroke-width="1.5"/></svg>
      </span>
    </a>
  `).join('');
}

renderDestinations('india');

// India/International tab switching
document.querySelectorAll('.dest-type-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.dest-type-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentDestType = tab.dataset.type;
    renderDestinations(currentDestType);
  });
});

// ── Packages (featured subset) ──
let featuredPackages = [
  { title: 'Goa Beach Escape', where: 'North Goa · South Goa', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80', details: ['3N/4D', 'Max 10', 'Easy', 'Oct — Mar'], price: '₹6,000', slug: 'goa' },
  { title: 'Kerala Backwater Bliss', where: 'Kochi · Munnar · Alleppey', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', details: ['5N/6D', 'Max 8', 'Easy', 'Sep — Mar'], price: '₹11,000', slug: 'kerala' },
  { title: 'Royal Rajasthan Trail', where: 'Jaipur · Jodhpur · Jaisalmer', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80', details: ['5N/6D', 'Max 8', 'Easy', 'Oct — Mar'], price: '₹18,500', slug: 'rajasthan' },
  { title: 'Thailand — Land of Smiles', where: 'Bangkok · Chiang Mai · Phuket', img: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80', details: ['4N/5D', 'Max 10', 'Easy', 'Nov — Mar'], price: '₹40,000', slug: 'thailand' },
  { title: 'Japan — Rising Sun', where: 'Tokyo · Kyoto · Osaka', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80', details: ['7N/8D', 'Max 10', 'Easy', 'Mar — May'], price: '₹1,45,000', slug: 'japan' },
  { title: 'Maldives — Turquoise Dreams', where: 'Malé · Resort Island', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80', details: ['4N/5D', 'Max 4', 'Easy', 'Nov — Apr'], price: '₹80,000', slug: 'maldives' }
];

const pkgGrid = document.getElementById('pkgGrid');
if (pkgGrid) {
  pkgGrid.innerHTML = featuredPackages.map(p => `
    <article class="pkg-card" onclick="window.location.hash='#/journeys/${p.slug}'" style="cursor:pointer;">
      <div class="pkg-card-img" style="background-image: url('${p.img}')" onerror="if(!this.dataset.fb){this.style.backgroundImage='url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80)';this.dataset.fb=1}"></div>
      <div class="pkg-card-body">
        <h3 class="pkg-card-title"><a href="#/journeys/${p.slug}" style="color:inherit; text-decoration:none;">${p.title}</a></h3>
        <div class="pkg-card-where">${p.where}</div>
        <div class="pkg-card-details">
          ${p.details.map(d => `<span class="pkg-detail">${d}</span>`).join('')}
        </div>
        <div class="pkg-card-foot">
          <div>
            <div class="pkg-price-label">From / per person</div>
            <div class="pkg-price">${p.price}<small> INR</small></div>
          </div>
          <a href="#/journeys/${p.slug}" class="pkg-btn" onclick="event.stopPropagation();">
            View Journey
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" stroke-width="1.5"/></svg>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

// ── Services ──
const services = [
  { icon: '<path d="m12 2 3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Domestic Tours', desc: 'Curated journeys across India\'s most iconic regions, planned end-to-end.' },
  { icon: '<path d="M3 7h18l-2 13H5L3 7zM8 7V4a4 4 0 018 0v3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Holiday Packages', desc: 'Pre-designed itineraries for honeymoons, family breaks, and short escapes.' },
  { icon: '<path d="M3 21V8l9-5 9 5v13M9 21V12h6v9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Hotel Booking', desc: 'Hand-picked stays at our negotiated partner rates across India and abroad.' },
  { icon: '<path d="M3 17h2l1-5h12l1 5h2M5 12V8a3 3 0 013-3h8a3 3 0 013 3v4M7 17v2M17 17v2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Transportation', desc: 'Airport transfers, intercity cabs, and chauffeured cars. Trains and flights coordinated.' },
  { icon: '<path d="M9 11a3 3 0 110-6 3 3 0 010 6zm6 0a3 3 0 110-6 3 3 0 010 6zM3 21v-1a4 4 0 014-4h4a4 4 0 014 4v1m6 0v-1a4 4 0 00-3-3.87" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Group Tours', desc: 'Departures for friends, colleagues, and clubs — one coordinator, one invoice.' },
  { icon: '<path d="M12 20l-7-7 7-7M19 12H5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Family Tours', desc: 'Pace and comfort tuned for kids and grandparents. Nothing rushed, nothing missed.' },
  { icon: '<path d="M12 2a4 4 0 100 8 4 4 0 000-8zM4 22v-3a4 4 0 014-4h8a4 4 0 014 4v3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Custom Planning', desc: 'Tell us your dates, interests, and budget. We build the rest.' }
];

const servicesList = document.getElementById('servicesList');
if (servicesList) {
  servicesList.innerHTML = services.map((s, i) => `
    <div class="service-item">
      <div class="service-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">${s.icon}</svg>
      </div>
      <div>
        <div class="service-title">${s.title}</div>
        <p class="service-desc">${s.desc}</p>
      </div>
      <div class="service-num">/ 0${i + 1}</div>
    </div>
  `).join('');
}

// ── Testimonials ──
const testimonials = [
  { letter: 'A', name: 'Arjun & Sneha Kapoor', where: 'Kashmir · 7 nights · 2026', title: 'Felt like our anniversary, not a tour.', teaser: 'Every detail — down to the shikara breakfast — felt thought through.', quote: "We've travelled with a few agents over the years. None of them came close to what ASV TOURS put together for our anniversary in Kashmir. Every detail — down to the shikara breakfast — felt thought through." },
  { letter: 'R', name: 'Riya Sharma', where: 'Kerala · 6 nights · 2026', title: 'They rearranged our day before we noticed.', teaser: 'When the houseboat was delayed, our planner had already moved everything.', quote: "Our houseboat was delayed by a day in Alleppey. Before we even noticed, our planner had reshuffled the Munnar leg, kept us at a tea estate that night, and refunded the difference. Genuinely zero stress." },
  { letter: 'K', name: 'Kabir Nair', where: 'Rajasthan · 9 nights · 2026', title: "Hotels we'd never have found ourselves.", teaser: 'They knew which haveli, which fort lookout, which evening for the dunes.', quote: "I went into Rajasthan thinking I'd see the same forts everyone sees. ASV TOURS knew exactly which haveli to book in Jodhpur, which fort lookout to reach at sunset, which evening to do the dunes. Hard country, soft landing." }
];

const testiSide = document.getElementById('testiSide');

function renderTestimonials(activeIndex = 0) {
  if (!testiSide) return;
  testiSide.innerHTML = testimonials.map((t, i) => `
    <div class="testi-card ${i === activeIndex ? 'active' : ''}" data-i="${i}">
      <div class="testi-card-top">
        <span class="testi-card-num">/ 0${i + 1}</span>
        <span style="color: var(--c-accent); font-size: 12px;">★★★★★</span>
      </div>
      <div class="testi-card-title">${t.title}</div>
      <p class="testi-card-text">${t.teaser}</p>
    </div>
  `).join('');

  const quoteEl = document.getElementById('testiQuote');
  if (quoteEl) quoteEl.textContent = testimonials[activeIndex].quote;
  const nameEl = document.getElementById('testiName');
  if (nameEl) nameEl.textContent = testimonials[activeIndex].name;
  const whereEl = document.getElementById('testiWhere');
  if (whereEl) whereEl.textContent = testimonials[activeIndex].where;
  const avatarEl = document.getElementById('testiAvatar');
  if (avatarEl) avatarEl.textContent = testimonials[activeIndex].letter;

  testiSide.querySelectorAll('.testi-card').forEach(card => {
    card.addEventListener('click', () => renderTestimonials(Number(card.dataset.i)));
  });
}

renderTestimonials(0);

// ── Contact Form ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    if (!btn) return;
    btn.classList.add('success');
    const span = btn.querySelector('span');
    if (span) span.textContent = "Sent — we'll write back within 24h";
    setTimeout(() => {
      btn.classList.remove('success');
      const s = btn.querySelector('span');
      if (s) s.textContent = 'Send Inquiry';
      contactForm.reset();
    }, 3500);
  });
}

// ── Reveal on scroll ──
function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', setupReveal);

// ═══════════════════════════════════════════════════════════════════════════
// HERO PHOTO — subtle parallax on desktop
// ═══════════════════════════════════════════════════════════════════════════
(function() {
  const photoWrap = document.querySelector('.hero-photo-wrap');
  const photo = document.querySelector('.hero-photo');
  if (!photo || window.innerWidth < 768) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

  document.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  function tick() {
    currentX += (targetX - currentX) * 0.03;
    currentY += (targetY - currentY) * 0.03;
    photo.style.transform = `scale(1.06) translateX(${currentX * -8}px) translateY(${currentY * -5}px)`;
    if (photoWrap) photoWrap.style.transform = `translateX(${currentX * 3}px) translateY(${currentY * 2}px)`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

// ═══════════════════════════════════════════════════════════════════════════
// API INTEGRATION — Fetch data from backend CMS
// ═══════════════════════════════════════════════════════════════════════════
(async function loadFromAPI() {
  try {
    // ── Fetch all packages from API ──
    const apiPackages = await fetch('/api/packages').then(r => r.ok ? r.json() : null);
    if (apiPackages && apiPackages.length > 0) {
      // Replace allJourneys with API data
      allJourneys.length = 0;
      apiPackages.forEach((p, i) => {
        allJourneys.push({
          slug: p.slug,
          category: p.category,
          num: String(i + 1).padStart(2, '0'),
          title: p.title || p.name,
          country: p.country,
          where: p.where,
          img: (p.image_url && p.image_url.length > 10) ? p.image_url : _destFallback,
          duration: p.duration,
          durationNights: p.duration_nights,
          groupSize: p.group_size,
          difficulty: p.difficulty,
          bestSeason: p.best_season,
          startingLocation: p.starting_location,
          destination: p.where,
          price: '₹' + Number(p.price).toLocaleString('en-IN'),
          priceNum: p.price,
          offerPrice: p.offer_price,
          shortDesc: p.short_desc,
          intro: p.intro,
          about: p.about || [],
          highlights: p.highlights || [],
          itinerary: p.itinerary || [],
          accommodation: p.accommodation || [],
          included: p.included || [],
          notIncluded: p.not_included || []
        });
      });

      // Rebuild destinationsData
      destinationsData.length = 0;
      allJourneys.forEach(j => {
        destinationsData.push({
          type: j.category,
          country: j.country,
          name: j.title,
          img: (j.img && j.img.length > 10) ? j.img : _destFallback,
          dur: j.duration,
          price: j.offerPrice ? '₹' + Number(j.offerPrice).toLocaleString('en-IN') : j.price,
          priceNum: j.offerPrice || j.priceNum,
          desc: j.shortDesc,
          slug: j.slug
        });
      });

      // Rebuild featuredPackages (show all active packages)
      featuredPackages.length = 0;
      allJourneys.forEach((j, i) => {
        featuredPackages.push({
          title: j.title,
          where: j.where,
          img: j.img,
          details: [j.duration, j.groupSize, j.difficulty, j.bestSeason],
          price: j.offerPrice ? '₹' + Number(j.offerPrice).toLocaleString('en-IN') : j.price,
          slug: j.slug
        });
      });

      // Re-render
      renderDestinations(currentDestType);

      // Re-render packages grid
      const pkgGrid = document.getElementById('pkgGrid');
      if (pkgGrid) {
        pkgGrid.innerHTML = featuredPackages.map(p => `
          <article class="pkg-card" onclick="window.location.hash='#/journeys/${p.slug}'" style="cursor:pointer;">
            <div class="pkg-card-img" style="background-image: url('${p.img}')" onerror="if(!this.dataset.fb){this.style.backgroundImage='url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80)';this.dataset.fb=1}"></div>
            <div class="pkg-card-body">
              <h3 class="pkg-card-title"><a href="#/journeys/${p.slug}" style="color:inherit; text-decoration:none;">${p.title}</a></h3>
              <div class="pkg-card-where">${p.where}</div>
              <div class="pkg-card-details">
                ${p.details.map(d => `<span class="pkg-detail">${d}</span>`).join('')}
              </div>
              <div class="pkg-card-foot">
                <div>
                  <div class="pkg-price-label">From / per person</div>
                  <div class="pkg-price">${p.price}<small> INR</small></div>
                </div>
                <a href="#/journeys/${p.slug}" class="pkg-btn" onclick="event.stopPropagation();">
                  View Journey
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" stroke-width="1.5"/></svg>
                </a>
              </div>
            </div>
          </article>
        `).join('');
      }

      console.log('✅ Loaded', apiPackages.length, 'packages from API');
    }
  } catch (err) {
    console.log('ℹ Using offline/hardcoded data:', err.message);
  }

  try {
    // ── Fetch settings for offer strip ──
    const settings = await fetch('/api/settings').then(r => r.ok ? r.json() : null);
    if (settings) {
      const minPrice = settings.min_price;
      if (minPrice) {
        const hvPrice = document.querySelector('.hv-price-value');
        if (hvPrice) hvPrice.textContent = '₹' + Number(minPrice).toLocaleString('en-IN');
      }
    }
  } catch (err) {
    // Settings fetch failed — keep defaults
  }
})();
