// ═══════════════════════════════════════════════════════════════════════════
// ASV TOURS — Script
// ═══════════════════════════════════════════════════════════════════════════

// ── Journey Data Store ──
const allJourneys = [
  {
    slug: 'northern-lights-ice',
    num: '01',
    region: 'europe',
    title: 'Northern Lights & Ice',
    country: 'Iceland',
    where: 'Reykjavik · Vik · Akureyri',
    img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&q=80',
    duration: '7 nights',
    groupSize: 'Max 8',
    difficulty: 'Easy',
    bestSeason: 'Sep — Mar',
    startingLocation: 'Reykjavik',
    destination: 'Reykjavik · Vik · Akureyri',
    price: '₹185,000',
    shortDesc: 'Glaciers, geysers, and the dance of the aurora borealis.',
    intro: 'Iceland in winter is a place where fire meets ice — where volcanic landscapes cloaked in snow give way to the shimmering curtain of the Northern Lights. This seven-night journey takes you deep into the heart of Iceland\'s most dramatic scenery, from the golden circle to the remote north.',
    about: [
      'Begin your journey in Reykjavik, where geothermal pools and a vibrant arts scene set the tone for what lies ahead. As you venture south, the landscape transforms — black sand beaches, towering basalt columns, and massive glaciers dominate the horizon.',
      'The highlight awaits in the north: hunting the aurora borealis from dark sky locations far from city lights, standing inside ice caves that glow an impossible blue, and soaking in natural hot springs while snow falls around you. Every day brings a new wonder.',
      'This is not a checkbox tour. It\'s a slow, immersive experience designed for travelers who want to feel the silence of the Arctic.'
    ],
    highlights: [
      { title: 'Glacier Walk', desc: 'Traverse Vatnajökull, Europe\'s largest glacier, with expert guides who reveal the hidden world beneath the ice.', icon: 'glacier' },
      { title: 'Northern Lights', desc: 'Three dedicated aurora hunting evenings at dark sky locations with local guides who read the forecasts.', icon: 'aurora' },
      { title: 'Ice Cave Exploration', desc: 'Enter crystal blue ice caves deep inside the glacier — a fleeting natural wonder that changes every year.', icon: 'ice' },
      { title: 'Golden Circle', desc: 'Visit Þingvellir, Geysir, and Gullfoss — Iceland\'s iconic trio of geological marvels.', icon: 'circle' },
      { title: 'Black Sand Beaches', desc: 'Walk the dramatic Reynisfjara coast where towering waves meet jet-black volcanic sand.', icon: 'beach' },
      { title: 'Hot Spring Soak', desc: 'End your days in geothermal pools — from the famous Blue Lagoon to hidden local springs.', icon: 'spring' }
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Reykjavik', desc: 'Arrive at Keflavík Airport and transfer to your boutique hotel in the heart of Reykjavik. Evening welcome dinner at a farm-to-table restaurant overlooking the harbor. Optional evening stroll to see the Harpa Concert Hall lit up against the winter sky.' },
      { day: '02', title: 'The Golden Circle', desc: 'Full-day exploration of Iceland\'s most famous route. Walk between tectonic plates at Þingvellir, watch the Strokkur geyser erupt every eight minutes, and feel the mist of Gullfoss waterfall. Evening: first Northern Lights hunt from a dark sky location.' },
      { day: '03', title: 'South Coast Drive', desc: 'Journey along the spectacular south coast. Stop at Seljalandsfoss (walk behind the waterfall), Skógafoss, and the famous black sand beach at Reynisfjara. Overnight in a countryside guesthouse near Vík.' },
      { day: '04', title: 'Glacier Adventure', desc: 'Full-day glacier excursion on Sólheimajökull. Walk across the ice, explore crevasses, and learn about glaciology from your certified guide. Evening: second Northern Lights attempt.' },
      { day: '05', title: 'Ice Cave & Diamond Beach', desc: 'Visit the breathtaking blue ice caves inside Vatnajökull, then drive to Jökulsárlón glacier lagoon and the Diamond Beach where icebergs wash ashore like scattered jewels.' },
      { day: '06', title: 'Fly North to Akureyri', desc: 'Morning flight to Akureyri, the capital of the north. Afternoon whale watching tour from the harbor. Evening free to explore this charming town. Final Northern Lights hunt from the countryside.' },
      { day: '07', title: 'Farewell & Departure', desc: 'Leisurely morning in Akureyri. Optional visit to the botanical garden or local museum. Transfer to airport for departure, carrying memories of a lifetime.' }
    ],
    accommodation: [
      { name: 'Boutique City Hotels', desc: 'Handpicked design hotels in Reykjavik and Akureyri with local character, geothermal heating, and views of the surrounding landscape.' },
      { name: 'Countryside Guesthouses', desc: 'Intimate guesthouses and farm stays along the route, chosen for their warmth, proximity to nature, and genuine Icelandic hospitality.' }
    ],
    included: [
      'All accommodation (7 nights)',
      'Daily breakfast and 3 dinners',
      'Airport transfers and all internal transport',
      'Guided glacier walk with equipment',
      'Ice cave excursion',
      'Golden Circle full-day tour',
      '3 Northern Lights hunting evenings',
      'Whale watching tour',
      'Internal flight Reykjavik — Akureyri',
      'Dedicated travel planner'
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Lunches and remaining dinners',
      'Optional activities (blue lagoon upgrade, etc.)',
      'Visa fees'
    ]
  },
  {
    slug: 'cherry-blossom-trails',
    num: '02',
    region: 'asia',
    title: 'Cherry Blossom Trails',
    country: 'Japan',
    where: 'Tokyo · Kyoto · Hakone · Osaka',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=80',
    duration: '10 nights',
    groupSize: 'Max 10',
    difficulty: 'Easy',
    bestSeason: 'Mar — Apr',
    startingLocation: 'Tokyo',
    destination: 'Tokyo · Kyoto · Hakone · Osaka',
    price: '₹265,000',
    shortDesc: 'Ancient temples under canopies of pink — Japan at its most poetic.',
    intro: 'Japan during cherry blossom season is a country transformed. Every park, temple, and riverside becomes a canvas of delicate pink and white petals. This ten-night journey weaves through Japan\'s most iconic cities and hidden corners, timed perfectly for peak sakura.',
    about: [
      'Start in the electric energy of Tokyo, where ancient shrines sit beside neon-lit towers. As you move west, the pace slows — Kyoto\'s bamboo groves, vermilion torii gates, and centuries-old tea houses invite contemplation.',
      'In Hakone, wake to views of Mount Fuji reflected in still lakes. In Osaka, dive into Japan\'s food capital where every street corner offers a new culinary discovery.',
      'This journey blends urban exploration with rural tranquility, temple visits with hot spring soaks, and Michelin-starred dining with street food adventures.'
    ],
    highlights: [
      { title: 'Sakura Season', desc: 'Timed for peak cherry blossom viewing in the most iconic locations across Japan.', icon: 'blossom' },
      { title: 'Mt. Fuji Views', desc: 'Wake to views of Japan\'s most sacred mountain from your lakeside ryokan in Hakone.', icon: 'mountain' },
      { title: 'Temple Trail', desc: 'Visit over a dozen temples and shrines, from Kinkaku-ji to Fushimi Inari\'s thousand gates.', icon: 'temple' },
      { title: 'Food Capital', desc: 'Osaka is Japan\'s kitchen — takoyaki, okonomiyaki, and Michelin-starred ramen await.', icon: 'food' },
      { title: 'Hot Spring Soak', desc: 'Traditional onsen experiences in Hakone, the spiritual home of Japanese bathing culture.', icon: 'onsen' },
      { title: 'Bullet Train', desc: 'Experience the Shinkansen as you glide between cities at 300 km/h in supreme comfort.', icon: 'train' }
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Tokyo', desc: 'Arrive at Narita/Haneda and transfer to your hotel in Shinjuku. Evening exploration of Omoide Yokocho — a narrow lane of tiny yakitori stalls beneath the train tracks.' },
      { day: '02', title: 'Tokyo Temples & Blossoms', desc: 'Morning visit to Meiji Shrine, then Ueno Park for cherry blossom viewing. Afternoon in Asakusa at Senso-ji temple. Evening: Shibuya crossing and dinner in Golden Gai.' },
      { day: '03', title: 'Tsukiji & Harajuku', desc: 'Early morning at Tsukiji Outer Market for the freshest sushi breakfast. Explore Harajuku\'s Takeshita Street and the quiet gardens of Meiji Shrine. Afternoon: teamLab Borderless digital art museum.' },
      { day: '04', title: 'Day Trip to Kamakura', desc: 'Coastal town of Kamakura — visit the Great Buddha, walk through bamboo groves, and explore ancient temples along the forest trails. Lunch of fresh shirasu (whitebait) by the sea.' },
      { day: '05', title: 'Bullet Train to Kyoto', desc: 'Morning Shinkansen to Kyoto. Afternoon: Arashiyama bamboo grove and Tenryu-ji temple. Evening: geisha district walk through Gion, with a chance to spot maiko apprentices.' },
      { day: '06', title: 'Kyoto Full Day', desc: 'Golden Pavilion (Kinkaku-ji), Ryoan-ji rock garden, and Nijo Castle. Afternoon: Fushimi Inari\'a thousand vermillion gates. Evening: traditional kaiseki dinner.' },
      { day: '07', title: 'Nara & Deer Park', desc: 'Day trip to Nara — feed the sacred deer in Nara Park, visit Todai-ji\'s enormous Buddha hall, and wander through the moss gardens of Isuien.' },
      { day: '08', title: 'Hakone & Fuji Views', desc: 'Travel to Hakone via scenic mountain railway. Check into a traditional ryokan with private onsen. Afternoon: Lake Ashi cruise with Mt. Fuji views. Evening: kaiseki ryokan dinner.' },
      { day: '09', title: 'Osaka Food Adventure', desc: 'Move on to Osaka — Japan\'s food capital. Dotonbori street food tour: takoyaki, okonomiyaki, kushikatsu. Evening: Osaka Castle illuminated against the night sky.' },
      { day: '10', title: 'Farewell Osaka', desc: 'Free morning for shopping at Kuromon Market or exploring Shinsekai. Final meal at a local favorite. Transfer to Kansai Airport for departure.' }
    ],
    accommodation: [
      { name: 'City Hotels', desc: 'Stylish boutique hotels in Tokyo\'s Shinjuku and Kyoto\'s central districts, blending modern comfort with Japanese design sensibility.' },
      { name: 'Traditional Ryokan', desc: 'A two-night stay at a traditional Hakone ryokan — tatami rooms, futon beds, private onsen, and multi-course kaiseki dinner included.' }
    ],
    included: [
      'All accommodation (10 nights)',
      'Daily breakfast and 4 dinners (including kaiseki)',
      'Japan Rail Pass (7-day)',
      'Airport transfers and local transport',
      'All temple and attraction entry fees',
      'teamLab Borderless tickets',
      'Hakone day pass and Lake Ashi cruise',
      'Guided food tour in Osaka',
      'Dedicated travel planner'
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Lunches',
      'Optional activities',
      'Visa fees'
    ]
  },
  {
    slug: 'desert-medina',
    num: '03',
    region: 'europe',
    title: 'Desert & Medina',
    country: 'Morocco',
    where: 'Marrakech · Sahara · Fes',
    img: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1600&q=80',
    duration: '9 nights',
    groupSize: 'Max 8',
    difficulty: 'Moderate',
    bestSeason: 'Oct — Apr',
    startingLocation: 'Marrakech',
    destination: 'Marrakech · Sahara · Fes',
    price: '₹142,000',
    shortDesc: 'Saharan dunes, vibrant souks, and timeless riads.',
    intro: 'Morocco is a sensory feast — from the labyrinthine souks of Marrakech to the vast silence of the Sahara. This nine-night journey takes you through Morocco\'s most legendary landscapes and cities, sleeping in centuries-old riads and desert camps under a canopy of stars.',
    about: [
      'Arrive in Marrakech and lose yourself in the Jemaa el-Fnaa square — snake charmers, spice merchants, and the scent of sizzling tagine fill the air. As you travel deeper, the cities give way to the Atlas Mountains and then to the endless dunes of the Sahara.',
      'In Fes, the world\'s largest car-free urban area awaits — a medieval medina where artisans still hammer copper, dye leather in ancient tanneries, and weave carpets on centuries-old looms.',
      'This journey is designed for curious travelers who want to understand Morocco beyond the postcard — its craftsmanship, its cuisine, and its deeply rooted hospitality traditions.'
    ],
    highlights: [
      { title: 'Sahara Camp', desc: 'Spend a night under the stars in a luxury desert camp among the towering dunes of Merzouga.', icon: 'desert' },
      { title: 'Medina Walks', desc: 'Navigate the winding alleys of Marrakech and Fes with expert local guides who reveal hidden gems.', icon: 'medina' },
      { title: 'Atlas Mountains', desc: 'Drive through the dramatic Tizi n\'Tichka pass and stop at Berber villages clinging to the mountainside.', icon: 'mountain' },
      { title: 'Cooking Class', desc: 'Learn to prepare a traditional tagine and Moroccan pastries in a local riad kitchen.', icon: 'food' },
      { title: 'Riad Stays', desc: 'Sleep in beautifully restored riads — traditional courtyard houses with intricate tilework and rooftop terraces.', icon: 'riads' },
      { title: 'Camel Trek', desc: 'Ride camels into the Sahara at sunset as the dunes turn gold, pink, and finally deep purple.', icon: 'camel' }
    ],
    itinerary: [
      { day: '01', title: 'Welcome to Marrakech', desc: 'Arrive in Marrakech and settle into your riad in the medina. Evening: guided walk through Jemaa el-Fnaa square as the food stalls come alive. Dinner at a rooftop restaurant overlooking the square.' },
      { day: '02', title: 'Marrakech Discovery', desc: 'Morning tour of the Bahia Palace, Saadian Tombs, and the Majorelle Garden. Afternoon: explore the souks — leather, spices, textiles, and metalwork. Evening: traditional hammam experience.' },
      { day: '03', title: 'High Atlas & Ait Benhaddou', desc: 'Drive over the Tizi n\'Tichka pass into the High Atlas. Stop at the UNESCO site of Ait Benhaddou — the fortified village used in Gladiator and Game of Thrones. Overnight in a kasbah hotel.' },
      { day: '04', title: 'Valley of Roses & Dades', desc: 'Travel through the Valley of Roses and the dramatic Dades Gorge. Stop at local cooperatives to learn about argan oil and rose water production. Stay in a boutique desert-edge hotel.' },
      { day: '05', title: 'Todra Gorge & Merzouga', desc: 'Morning walk through the towering Todra Gorge (300m high walls). Afternoon arrival at Merzouga on the edge of the Sahara. Camel trek into the Erg Chebbi dunes for sunset.' },
      { day: '06', title: 'Desert Sunrise & Journey North', desc: 'Wake before dawn to watch the sunrise paint the dunes in shades of gold. After breakfast at camp, drive north through the Ziz Valley and the medieval town of Midelt toward Fes.' },
      { day: '07', title: 'Arrival in Fes', desc: 'Settle into your riad in the heart of Fes el-Bali — the world\'s largest car-free urban area. Afternoon: guided walk through the tanneries, brass souk, and the University of al-Qarawiyyin (founded 859 AD).' },
      { day: '08', title: 'Fes Deep Dive', desc: 'Morning cooking class — prepare a tagine and Moroccan pastry. Afternoon: visit the ceramic museum and the royal palace gates. Evening: farewell dinner at a renowned Fassi restaurant.' },
      { day: '09', title: 'Chefchaouen Day Trip', desc: 'Day trip to the "Blue Pearl" — Chefchaouen, the powder-blue mountain town in the Rif. Wander the blue-washed streets, visit the kasbah, and enjoy lunch with mountain views.' },
      { day: '10', title: 'Departure', desc: 'Transfer to Fes airport for departure, carrying the colors, flavors, and warmth of Morocco with you.' }
    ],
    accommodation: [
      { name: 'Heritage Riads', desc: 'Centuries-old courtyard houses in Marrakech and Fes, lovingly restored with traditional zellige tilework, carved plaster, and rooftop terraces.' },
      { name: 'Desert Luxury Camp', desc: 'A night in a Saharan luxury camp with private tents, Moroccan carpets, and a campfire dinner under the Milky Way.' }
    ],
    included: [
      'All accommodation (9 nights)',
      'Daily breakfast and 5 dinners',
      'Airport transfers and all ground transport',
      'Private guide for Marrakech and Fes',
      'Atlas Mountains and desert driver',
      'Camel trek with desert camp night',
      'Cooking class in Fes',
      'Hammam experience',
      'All entrance fees',
      'Dedicated travel planner'
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Lunches',
      'Optional activities',
      'Visa fees'
    ]
  },
  {
    slug: 'fjord-expedition',
    num: '04',
    region: 'europe',
    title: 'Fjord Expedition',
    country: 'Norway',
    where: 'Bergen · Geiranger · Tromsø',
    img: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=1600&q=80',
    duration: '5 nights',
    groupSize: 'Max 8',
    difficulty: 'Moderate',
    bestSeason: 'Jun — Sep',
    startingLocation: 'Bergen',
    destination: 'Bergen · Geiranger · Tromsø',
    price: '₹168,000',
    shortDesc: 'Dramatic fjords, midnight sun, and untouched wilderness.',
    intro: 'Norway\'s fjords are among the most dramatic landscapes on Earth — sheer cliffs rising from mirror-still waters, waterfalls plunging hundreds of meters, and villages clinging to the edges of impossible terrain. This five-night expedition takes you deep into the heart of western Norway.',
    about: [
      'Begin in Bergen, the gateway to the fjords, where colorful wooden houses line the harbor and a funicular carries you to panoramic mountain views. Then venture into the Geirangerfjord — a UNESCO World Heritage site where waterfalls cascade down thousand-meter cliffs.',
      'The midnight sun illuminates Norway\'s wild coastline throughout summer, giving you endless hours to explore. From kayaking between fjord walls to hiking above the treeline, every moment here is saturated with beauty.',
      'This journey is for travelers who crave raw, untamed nature — and who appreciate the comfort of well-chosen lodges and expert local guides along the way.'
    ],
    highlights: [
      { title: 'Geirangerfjord', desc: 'Cruise through Norway\'s most spectacular fjord, flanked by the famous Seven Sisters waterfall and abandoned mountain farms.', icon: 'fjord' },
      { title: 'Midnight Sun', desc: 'Experience the surreal phenomenon of a sun that never sets, painting the landscape in golden light around the clock.', icon: 'stars' },
      { title: 'Bergen Harbor', desc: 'Explore the UNESCO-listed Bryggen wharf — colorful wooden buildings dating back to the Hanseatic era.', icon: 'city' },
      { title: 'Fjord Kayaking', desc: 'Paddle through crystal-clear waters surrounded by towering cliff walls — an intimate way to experience the fjords.', icon: 'hike' },
      { title: 'Mountain Trails', desc: 'Hike above the treeline with panoramic views of fjords, glaciers, and snow-capped peaks stretching to the horizon.', icon: 'mountain' },
      { title: 'Coastal Villages', desc: 'Visit charming fishing villages where traditional red wooden cabins (rorbuer) perch on stilts above the water.', icon: 'lake' }
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Bergen', desc: 'Arrive in Bergen and settle into your harbor-side hotel. Afternoon: ride the Fløibanen funicular to Mount Fløyen for panoramic views. Evening: seafood dinner at the Fish Market with fjord views.' },
      { day: '02', title: 'Bryggen & Fjord Cruise', desc: 'Morning: explore the UNESCO-listed Bryggen wharf and visit the Hanseatic Museum. Afternoon: scenic boat cruise through the Byfjorden. Evening: free to explore Bergen\'s vibrant restaurant scene.' },
      { day: '03', title: 'Drive to Geiranger', desc: 'Epic drive from Bergen to Geiranger via the scenic route — stop at the Stegastein viewpoint for jaw-dropping fjord views. Afternoon: settle into your hotel overlooking the fjord.' },
      { day: '04', title: 'Geirangerfjord Exploration', desc: 'Full day exploring the Geirangerfjord. Morning: guided fjord cruise past the Seven Sisters and Suitor waterfalls. Afternoon: hike to the abandoned mountain farm of Skageflå. Evening: dinner at a fjord-edge restaurant.' },
      { day: '05', title: 'Departure', desc: 'Morning: optional kayaking on the fjord or visit to the Norwegian Fjord Centre. Transfer to Ålesund airport for departure.' }
    ],
    accommodation: [
      { name: 'Harbor Hotel (Bergen)', desc: 'A boutique hotel on Bergen\'s historic harbor with views of the Bryggen wharf and the surrounding mountains.' },
      { name: 'Fjord Lodge (Geiranger)', desc: 'A modern lodge perched above the Geirangerfjord with floor-to-ceiling windows framing one of the world\'s most spectacular views.' }
    ],
    included: [
      'All accommodation (5 nights)',
      'Daily breakfast and 2 dinners',
      'Airport transfers and all ground transport',
      'Bergen funicular ticket',
      'Geirangerfjord cruise',
      'Guided hikes',
      'All entrance fees',
      'Dedicated travel planner'
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Lunches',
      'Optional activities (kayaking upgrade, etc.)',
      'Visa fees'
    ]
  },
  {
    slug: 'southern-alps-adventure',
    num: '04',
    region: 'oceania',
    title: 'Southern Alps Adventure',
    country: 'New Zealand',
    where: 'Queenstown · Milford · Mt Cook · Wanaka',
    img: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=1600&q=80',
    duration: '10 nights',
    groupSize: 'Max 8',
    difficulty: 'Moderate',
    bestSeason: 'Nov — Apr',
    startingLocation: 'Queenstown',
    destination: 'Queenstown · Milford · Mt Cook · Wanaka',
    price: '₹232,000',
    shortDesc: 'Untamed landscapes and breathtaking mountain vistas.',
    intro: 'New Zealand\'s South Island is a landscape painter\'s fever dream — mirror-still lakes reflecting snow-capped peaks, ancient rainforests, and fjords carved by glaciers over millennia. This ten-night adventure takes you through the most dramatic scenery on Earth.',
    about: [
      'Queenstown, the adventure capital, is your base for the first leg. From here, cruise the haunting Milford Sound, bungee at the birthplace of the commercial jump, and hike tracks that reveal hidden alpine lakes.',
      'Moving north, Mt Cook — Aoraki, the cloud piercer — dominates the skyline. Walk the Hooker Valley track with its swing bridges and glacier-fed lakes. In Wanaka, find the famous lone tree, lavender fields, and a slower pace.',
      'This journey is for active travelers who want to experience New Zealand\'s great outdoors without sacrificing comfort. Every day brings a new landscape, a new adventure, and a new reason to return.'
    ],
    highlights: [
      { title: 'Milford Sound', desc: 'Cruise through New Zealand\'s most spectacular fjord, flanked by thousand-meter cliffs and cascading waterfalls.', icon: 'fjord' },
      { title: 'Hooker Valley Track', desc: 'Walk the iconic trail to Hooker Lake with views of Mt Cook reflected in glacial water.', icon: 'hike' },
      { title: 'Queenstown', desc: 'The adventure capital — optional bungee, jet boat, or skydive for the thrill-seekers.', icon: 'adventure' },
      { title: 'Lake Tekapo', desc: 'Turquoise glacial lake surrounded by lupins in spring, with the Church of the Good Shepherd.', icon: 'lake' },
      { title: 'Stargazing', desc: 'Mt Cook is an International Dark Sky Reserve — some of the clearest stargazing on the planet.', icon: 'stars' },
      { title: 'Wanaka', desc: 'A quieter lakeside town with the famous lone tree, lavender fields, and stunning mountain walks.', icon: 'tree' }
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Queenstown', desc: 'Arrive in Queenstown, the adventure capital of the world. Transfer to your lakeside hotel. Evening: optional jet boat ride on the Shotover River, followed by dinner at a waterfront restaurant.' },
      { day: '02', title: 'Milford Sound Cruise', desc: 'Full-day excursion to Milford Sound via the scenic road through the Hollyford Valley. Cruise the fjord past Mitre Peak, waterfalls, and fur seal colonies. Packed lunch included.' },
      { day: '03', title: 'Queenstown自由日', desc: 'Free day in Queenstown. Options include: bungee jumping at Kawarau Bridge, jet boating, luge rides at Skyline, or a gentle walk around the lake. Evening: wine tasting at a nearby Central Otago winery.' },
      { day: '04', title: 'Arrowtown & Gibbston Valley', desc: 'Morning in Arrowtown — a charming gold-rush village. Visit the Chinese Settlement and local galleries. Afternoon: wine tasting in the Gibbston Valley, New Zealand\'s most celebrated wine region.' },
      { day: '05', title: 'Drive to Lake Tekapo', desc: 'Scenic drive north through the Lindis Pass to Lake Tekapo. Afternoon: visit the Church of the Good Shepherd and the Mt John Observatory. Evening: stargazing at the Dark Sky Reserve.' },
      { day: '06', title: 'Mt Cook & Hooker Valley', desc: 'Drive to Aoraki/Mt Cook National Park. Afternoon: Hooker Valley Track — three swing bridges, alpine meadows, and views of the Hooker Glacier reflected in its terminal lake. Evening: alpine lodge dinner.' },
      { day: '07', title: 'Tasman Glacier & Lake Pukaki', desc: 'Morning: Tasman Glacier boat tour among icebergs on the terminal lake. Afternoon: drive past the turquoise waters of Lake Pukaki toward Wanaka. Overnight in Wanaka.' },
      { day: '08', title: 'Wanaka Exploration', desc: 'Full day in Wanaka: walk to the famous lone tree, explore Rob Roy Glacier track (moderate), or take a scenic flight over Mt Cook. Afternoon: lavender farm and craft breweries.' },
      { day: '09', title: 'Wanaka to Queenstown', desc: 'Leisurely morning in Wanaka. Afternoon drive back to Queenstown via the Cardrona Valley. Farewell dinner at a restaurant with views over Lake Wakatipu and The Remarkables.' },
      { day: '10', title: 'Departure', desc: 'Transfer to Queenstown Airport for departure. If time permits, visit the Kiwi Birdlife Park to see New Zealand\'s iconic flightless bird before you fly.' }
    ],
    accommodation: [
      { name: 'Boutique Lodges', desc: 'Handpicked lakeside and mountain lodges with panoramic views, local design touches, and restaurants serving New Zealand\'s finest produce and wines.' },
      { name: 'Alpine Hotel', desc: 'A luxury hotel at the foot of Mt Cook — wake to views of the glacier from your bed and fall asleep to the sound of the Tasman River.' }
    ],
    included: [
      'All accommodation (10 nights)',
      'Daily breakfast and 3 dinners',
      'Airport transfers and all ground transport',
      'Milford Sound cruise',
      'Tasman Glacier boat tour',
      'Hooker Valley guided walk',
      'Wine tasting experience',
      'Stargazing tour at Lake Tekapo',
      'All national park entry fees',
      'Dedicated travel planner'
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Lunches and remaining dinners',
      'Optional adventure activities (bungee, skydive, etc.)',
      'Visa fees'
    ]
  },
  {
    slug: 'bali-zen-retreat',
    num: '05',
    region: 'asia',
    title: 'Bali Zen Retreat',
    country: 'Indonesia',
    where: 'Ubud · Seminyak · Uluwatu',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80',
    duration: '8 nights',
    groupSize: 'Max 10',
    difficulty: 'Easy',
    bestSeason: 'Apr — Oct',
    startingLocation: 'Ubud',
    destination: 'Ubud · Seminyak · Uluwatu',
    price: '₹128,000',
    shortDesc: 'Ancient temples, emerald terraces, and the art of slow travel.',
    intro: 'Bali is more than a beach destination — it\'s a spiritual landscape of tiered rice paddies, ancient water temples, and a living culture that infuses every aspect of daily life. This eight-night retreat balances cultural immersion with pure relaxation.',
    about: [
      'Begin in Ubud, the cultural heart of Bali. Walk through emerald rice terraces at dawn, visit ancient water temples blessed by Hindu priests, and take a traditional Balinese cooking class in a village compound.',
      'Move to the coast where Uluwatu\'s clifftop temple and Seminyak\'s beach clubs offer a different rhythm. Watch the Kecak fire dance at sunset, surf gentle waves, and dine at some of Southeast Asia\'s most celebrated restaurants.',
      'This journey is for travelers seeking balance — culture and comfort, adventure and stillness, activity and rest. Every experience is designed to help you slow down and truly connect with this magical island.'
    ],
    highlights: [
      { title: 'Rice Terraces', desc: 'Walk the Tegallalang rice terraces at dawn, when the morning light transforms the paddies into emerald staircases.', icon: 'terrace' },
      { title: 'Water Temples', desc: 'Visit Tirta Empul and Tanah Lot — sacred water temples where Balinese Hindus have worshipped for centuries.', icon: 'temple' },
      { title: 'Kecak Dance', desc: 'Witness the hypnotic Kecak fire dance performed at Uluwatu Temple as the sun sets over the Indian Ocean.', icon: 'dance' },
      { title: 'Cooking Class', desc: 'Learn traditional Balinese recipes in a village kitchen — from base genep spice paste to lawar salad.', icon: 'food' },
      { title: 'Beach Clubs', desc: 'Relax at Seminyak\'s iconic beach clubs with infinity pools, sunset cocktails, and live DJs.', icon: 'beach' },
      { title: 'Spa & Wellness', desc: 'Daily access to traditional Balinese massage and spa treatments at every hotel along the journey.', icon: 'spa' }
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Ubud', desc: 'Arrive in Bali and transfer to your boutique hotel overlooking the Ayung River valley. Afternoon: gentle walking tour of Ubud\'s art galleries and the Sacred Monkey Forest. Evening: welcome dinner with live gamelan music.' },
      { day: '02', title: 'Rice Terraces & Temples', desc: 'Dawn walk through the Tegallalang rice terraces. Visit the Tirta Empul water temple for a purification ceremony. Afternoon: traditional Balinese cooking class in a family compound.' },
      { day: '03', title: 'Ubud Culture Day', desc: 'Morning visit to the Ubud Royal Palace and traditional art market. Afternoon: attend a Legong dance performance or visit a local silver workshop. Evening: free to explore Ubud\'s vibrant restaurant scene.' },
      { day: '04', title: 'Tegenungan Waterfall & Volcano Views', desc: 'Visit Tegenungan Waterfall, then drive to Kintamani for views of the active Mt. Batur volcano and its crater lake. Lunch at a volcano-edge restaurant. Afternoon: coffee plantation tour.' },
      { day: '05', title: 'Transfer to Uluwatu', desc: 'Morning drive south to the Bukit Peninsula. Afternoon: surf lesson at Padang Padang Beach or relax at the hotel pool. Sunset: Kecak fire dance at Uluwatu Temple — a mesmerizing performance of 100 chanting men around a fire.' },
      { day: '06', title: 'Uluwatu & Beach Day', desc: 'Morning: snorkeling or diving at Nusa Dua reef. Afternoon: free time at Thomas Beach or Balangan Beach. Evening: seafood dinner on the sand at Jimbaran Bay as the sun goes down.' },
      { day: '07', title: 'Seminyak Exploration', desc: 'Transfer to Seminyak. Afternoon: explore boutique shopping, visit a local gallery, and relax at a beach club. Evening: dinner at one of Bali\'s top restaurants — options include fine dining Indonesian or modern fusion.' },
      { day: '08', title: 'Farewell Bali', desc: 'Free morning for last-minute shopping, spa treatment, or a sunrise yoga session. Afternoon: transfer to airport for departure, carrying the peace of Bali with you.' }
    ],
    accommodation: [
      { name: 'River Valley Resort (Ubud)', desc: 'A boutique resort perched above the Ayung River valley with private villas, infinity pool, and daily spa access surrounded by tropical jungle.' },
      { name: 'Clifftop Hotel (Uluwatu)', desc: 'A modern luxury hotel on the cliffs of Uluwatu with panoramic ocean views, rooftop bar, and direct access to Padang Padang Beach.' },
      { name: 'Beachfront Suite (Seminyak)', desc: 'A stylish beachfront property in Seminyak with pool access, walking distance to boutiques, restaurants, and the famous Ku De Ta beach club.' }
    ],
    included: [
      'All accommodation (8 nights)',
      'Daily breakfast and 2 dinners',
      'Airport transfers and all ground transport',
      'Rice terrace guided walk',
      'Water temple visit and purification ceremony',
      'Balinese cooking class',
      'Kecak fire dance tickets',
      'Daily spa treatment',
      'All entrance fees',
      'Dedicated travel planner'
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Lunches and remaining dinners',
      'Optional activities (surf lessons, diving, etc.)',
      'Visa fees'
    ]
  },
  {
    slug: 'royal-heritage-trail',
    num: '06',
    region: 'asia',
    title: 'Royal Heritage Trail',
    country: 'India',
    where: 'Jaipur · Jodhpur · Udaipur · Jaisalmer',
    img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80',
    duration: '7 nights',
    groupSize: 'Max 8',
    difficulty: 'Easy',
    bestSeason: 'Oct — Mar',
    startingLocation: 'Jaipur',
    destination: 'Jaipur · Jodhpur · Udaipur · Jaisalmer',
    price: '₹98,000',
    shortDesc: 'Magnificent palaces, golden deserts, and royal hospitality.',
    intro: 'Rajasthan is India\'s most romantic state — a land of maharajas\' palaces, golden desert fortresses, and lakes reflecting centuries of royal grandeur. This seven-night journey through Rajasthan\'s most iconic cities immerses you in the opulence and warmth of Rajasthani hospitality.',
    about: [
      'Start in the Pink City of Jaipur, where the Hawa Mahal and Amber Fort stand as testaments to Rajput engineering and aesthetics. Move on to Jodhpur, the Blue City, where a massive fort rises above a maze of indigo-washed houses.',
      'In Jaisalmer, a golden sandstone fortress rises from the Thar Desert like a mirage. Spend a night in a desert camp, riding camels as the sun sets over the dunes. End in Udaipur, the Venice of the East, where white marble palaces float on serene lakes.',
      'This journey is designed for travelers who want to experience Rajasthan\'s royal heritage without the tourist traps — with carefully chosen havelis, expert local guides, and authentic cultural encounters at every turn.'
    ],
    highlights: [
      { title: 'Amber Fort', desc: 'Explore the magnificent Amber Fort near Jaipur — a masterpiece of Rajput architecture with mirror palaces and sprawling courtyards.', icon: 'fort' },
      { title: 'Blue City', desc: 'Wander the indigo-washed lanes of Jodhpur beneath the towering Mehrangarh Fort.', icon: 'city' },
      { title: 'Desert Camp', desc: 'A night in the Thar Desert — camel ride, Rajasthani folk music, and a campfire dinner under the stars.', icon: 'desert' },
      { title: 'Lake Pichola', desc: 'Sunset boat ride on Lake Pichola in Udaipur, gliding past the Lake Palace and Jag Mandir.', icon: 'lake' },
      { title: 'Haveli Stays', desc: 'Sleep in restored heritage havelis — ornately carved mansions that were once the homes of merchant princes.', icon: 'haveli' },
      { title: 'Local Craft', desc: 'Visit artisan workshops — block printing, blue pottery, and gemstone cutting in Jaipur\'s old city.', icon: 'craft' }
    ],
    itinerary: [
      { day: '01', title: 'Arrival in Jaipur', desc: 'Arrive in Jaipur and settle into your heritage haveli hotel. Evening: visit the illuminated Hawa Mahal (Palace of Winds) from a rooftop café. Welcome dinner of traditional Rajasthani thali.' },
      { day: '02', title: 'Amber Fort & Jaipur', desc: 'Morning: guided tour of Amber Fort — the Sheesh Mahal (Mirror Palace), Ganesh Pol, and stunning views over Maota Lake. Afternoon: City Palace, Jantar Mantar observatory, and a block printing workshop in the old city.' },
      { day: '03', title: 'Jaipur to Jodhpur', desc: 'Scenic drive to Jodhpur (5 hours). Afternoon: explore the bustling Sardar Market and clock tower. Evening: rooftop dinner overlooking Mehrangarh Fort as it\'s illuminated against the night sky.' },
      { day: '04', title: 'Mehrangarh Fort & Blue City', desc: 'Morning: comprehensive tour of Mehrangarh Fort — one of India\'s most magnificent fortresses with a world-class museum. Afternoon: walking tour through the Blue City\'s winding lanes, visiting local homes and the Toorji Ka Jhalra stepwell.' },
      { day: '05', title: 'Jodhpur to Jaisalmer', desc: 'Drive to Jaisalmer through the desert landscape. Afternoon: explore the golden Jaisalmer Fort — a living fort where thousands still reside. Evening: walk through the haveli quarter with their intricate stone carvings.' },
      { day: '06', title: 'Desert Safari', desc: 'Morning: visit Kuldhara, the abandoned village. Afternoon: camel safari into the Sam Sand Dunes. Sunset: watch the desert turn gold and crimson. Evening: traditional campfire dinner with Rajasthani folk music and dance under the stars.' },
      { day: '07', title: 'Jaisalmer to Udaipur', desc: 'Transfer to the airport and fly to Udaipur. Afternoon: settle into your lake-view hotel. Evening: sunset boat ride on Lake Pichola past the Lake Palace and Jag Mandir. Farewell dinner at a rooftop restaurant.' },
      { day: '08', title: 'Departure from Udaipur', desc: 'Morning: visit the City Palace and the Jagdish Temple. Optional: explore the miniature painting galleries. Transfer to airport for departure.' }
    ],
    accommodation: [
      { name: 'Heritage Havelis', desc: 'Restored merchant mansions in Jaipur and Jaisalmer with carved sandstone facades, inner courtyards, and rooftop dining with fort views.' },
      { name: 'Desert Camp', desc: 'A luxury desert camp in the Sam Sand Dunes with spacious tents, private bathrooms, and a communal campfire under the Saharan sky.' },
      { name: 'Lake View Hotel', desc: 'A heritage property on the banks of Lake Pichola in Udaipur, with views of the Lake Palace and City Palace from every room.' }
    ],
    included: [
      'All accommodation (7 nights)',
      'Daily breakfast and 4 dinners',
      'Airport transfers and all ground transport',
      'Private guide for all city tours',
      'Amber Fort elephant/jeep ride',
      'Mehrangarh Fort entry and guide',
      'Camel safari and desert camp night',
      'Lake Pichola boat ride',
      'Block printing workshop',
      'All entrance fees',
      'Dedicated travel planner'
    ],
    notIncluded: [
      'Domestic flights (Jaisalmer—Udaipur)',
      'Travel insurance',
      'Lunches',
      'Optional activities',
      'Visa fees'
    ]
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

// ── Routing ──
function getRoute() {
  const hash = window.location.hash || '';
  return hash.replace(/^#/, '');
}

function navigateTo(path) {
  window.location.hash = path;
}

function handleRoute() {
  const route = getRoute();
  const mainSite = document.getElementById('mainSite');
  const detailPage = document.getElementById('journeyDetailPage');

  if (route.startsWith('/journeys/')) {
    const slug = route.replace('/journeys/', '');
    const journey = findJourney(slug);
    if (journey && mainSite && detailPage) {
      mainSite.style.display = 'none';
      detailPage.style.display = 'block';
      renderJourneyDetail(journey);
      window.scrollTo(0, 0);
      document.title = journey.title + ' — ASV TOURS';
    } else {
      // Unknown journey — show home
      navigateTo('');
    }
  } else {
    if (mainSite) mainSite.style.display = 'block';
    if (detailPage) {
      detailPage.style.display = 'none';
      detailPage.innerHTML = '';
    }
    document.title = 'ASV TOURS — Premium Curated Journeys';
    window.scrollTo(0, 0);
  }
}

window.addEventListener('hashchange', handleRoute);
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

  const contactUrl = '#contact';

  el.innerHTML = `
    <div class="jd-page">
      <!-- Header -->
      <header class="jd-header">
        <div class="jd-header-inner">
          <div class="jd-header-left">
            <a href="#" class="jd-back-link" onclick="window.location.hash=''; return false;">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M13 7H1m0 0l6-6M1 7l6 6" stroke="currentColor" stroke-width="1.5"/></svg>
              Back to Journeys
            </a>
            <a href="#" onclick="window.location.hash=''; return false;">
              <img src="assets/asv-tours-logo.png" alt="ASV TOURS" class="jd-header-logo">
            </a>
          </div>
          <nav class="jd-header-nav" id="jdNav">
            <a href="#" onclick="window.location.hash=''; return false;">Destinations</a>
            <a href="#" onclick="window.location.hash=''; return false;">Journeys</a>
            <a href="#" onclick="window.location.hash='#contact'; return false;">Contact</a>
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
          <div class="jd-hero-price">${j.price}<small> INR / per person</small></div>
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
              <div class="jd-pricing-price">${j.price}<small> INR</small></div>
              <div class="jd-pricing-note">Per person, based on double occupancy. Solo traveler and single-room supplements available. Group discounts for 4+ travelers.</div>
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
              <img src="assets/asv-tours-logo.png" alt="ASV TOURS" class="jd-footer-logo">
              <p class="jd-footer-desc">Thoughtfully curated journeys for travelers who'd rather remember a meal than a checklist. Designing trips since 2026.</p>
            </div>
            <div class="jd-footer-col">
              <h6>Explore</h6>
              <ul>
                <li><a href="#" onclick="window.location.hash=''; return false;">Destinations</a></li>
                <li><a href="#" onclick="window.location.hash=''; return false;">Signature Journeys</a></li>
                <li><a href="#" onclick="window.location.hash=''; return false;">Honeymoons</a></li>
                <li><a href="#" onclick="window.location.hash=''; return false;">Family Trips</a></li>
                <li><a href="#" onclick="window.location.hash=''; return false;">Group Travel</a></li>
              </ul>
            </div>
            <div class="jd-footer-col">
              <h6>Contact</h6>
              <ul>
                <li><a href="${contactUrl}">Plan a Trip</a></li>
                <li><a href="#">hello@example.com</a></li>
                <li><a href="#">+91 90000 00000</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cancellation</a></li>
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


// ═══════════════════════════════════════════════════════════════════════════
// MAIN SITE LOGIC (below only runs when main site is visible)
// ═══════════════════════════════════════════════════════════════════════════

// ── Header scroll effect ──
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ── Mobile menu toggle ──
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const nav = document.querySelector('.header-nav');
    nav?.classList.toggle('open');
  });
}

// ── Hero loaded animation ──
window.addEventListener('load', () => {
  document.getElementById('hero')?.classList.add('loaded');
});

// ── Search bar ──
const searchBar = document.getElementById('searchBar');
if (searchBar) {
  searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// ── Destinations ──
const destinations = [
  { region: 'europe', country: 'Iceland', name: 'Northern Lights & Ice', featured: true, img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&q=80', dur: '7 nights', price: '₹185,000', desc: 'Glaciers, geysers, and the dance of the aurora borealis.', slug: 'northern-lights-ice' },
  { region: 'asia', country: 'Bali', name: 'Sacred Temples & Rice Terraces', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80', dur: '8 nights', price: '₹128,000', desc: 'Ancient temples, emerald terraces, and the art of slow travel.', slug: 'bali-zen-retreat' },
  { region: 'europe', country: 'Morocco', name: 'Desert & Medina', img: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80', dur: '9 nights', price: '₹142,000', desc: 'Saharan dunes, vibrant souks, and timeless riads.', slug: 'desert-medina' },
  { region: 'europe', country: 'Norway', name: 'Fjord Expedition', img: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=1200&q=80', dur: '5 nights', price: '₹168,000', desc: 'Dramatic fjords, midnight sun, and untouched wilderness.', slug: 'fjord-expedition' },
  { region: 'oceania', country: 'New Zealand', name: 'Southern Alps Adventure', img: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=1200&q=80', dur: '10 nights', price: '₹232,000', desc: 'Untamed landscapes and breathtaking mountain vistas.', slug: 'southern-alps-adventure' },
  { region: 'asia', country: 'Rajasthan', name: 'Royal Heritage Trail', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80', dur: '7 nights', price: '₹98,000', desc: 'Magnificent palaces, golden deserts, and royal hospitality.', slug: 'royal-heritage-trail' },
];

const destGrid = document.getElementById('destGrid');

function renderDestinations(region = 'all') {
  if (!destGrid) return;
  const filtered = region === 'all' ? destinations : destinations.filter(d => d.region === region);
  destGrid.innerHTML = filtered.map((d, i) => `
    <a class="dest-card ${i === 0 && region === 'all' ? 'featured' : ''}" href="#/journeys/${d.slug}">
      <div class="dest-card-img" style="background-image: url('${d.img}')"></div>
      <div class="dest-card-overlay"></div>
      <span class="dest-card-price">from ${d.price}</span>
      <div class="dest-card-content">
        <div class="dest-card-region">${d.country}</div>
        <h3 class="dest-card-name">${d.name}</h3>
        <p class="dest-card-desc">${d.desc}</p>
        <div class="dest-card-tags">
          <span class="dest-tag">${d.dur}</span>
          <span class="dest-tag">Private guide</span>
        </div>
      </div>
      <span class="dest-card-explore">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" stroke-width="1.5"/></svg>
      </span>
    </a>
  `).join('');
}

renderDestinations();

document.querySelectorAll('.dest-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.dest-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderDestinations(tab.dataset.tab);
  });
});

// ── Packages ──
const packages = [
  {
    num: '01',
    title: 'Nordic Wilderness',
    where: 'Reykjavik · Vik · Akureyri',
    img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    details: ['7 nights', 'Max 8', 'Easy', 'Jun — Sep'],
    price: '₹185,000',
    slug: 'northern-lights-ice'
  },
  {
    num: '02',
    title: 'Bali Zen Retreat',
    where: 'Ubud · Seminyak · Uluwatu',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    details: ['8 nights', 'Max 10', 'Easy', 'Apr — Oct'],
    price: '₹128,000',
    slug: 'bali-zen-retreat'
  },
  {
    num: '03',
    title: 'Moroccan Odyssey',
    where: 'Marrakech · Sahara · Fes',
    img: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    details: ['9 nights', 'Max 8', 'Moderate', 'Oct — Apr'],
    price: '₹142,000',
    slug: 'desert-medina'
  }
];

const pkgGrid = document.getElementById('pkgGrid');
if (pkgGrid) {
  pkgGrid.innerHTML = packages.map(p => `
    <article class="pkg-card" onclick="window.location.hash='#/journeys/${p.slug}'" style="cursor:pointer;">
      <div class="pkg-card-img" style="background-image: url('${p.img}')"></div>
      <div class="pkg-card-body">
        <div class="pkg-card-num">/ ${p.num}</div>
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
  { icon: '<path d="m12 2 3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Domestic Tours', desc: 'Curated journeys across India\'s most iconic regions, planned end-to-end so you only have to pack a bag.' },
  { icon: '<path d="M3 7h18l-2 13H5L3 7zM8 7V4a4 4 0 018 0v3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Holiday Packages', desc: 'Pre-designed itineraries for honeymoons, family breaks, and short escapes — book in minutes, not weeks.' },
  { icon: '<path d="M3 21V8l9-5 9 5v13M9 21V12h6v9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Hotel Booking', desc: 'Hand-picked stays — heritage havelis, hill resorts, beach villas — at our negotiated partner rates.' },
  { icon: '<path d="M3 17h2l1-5h12l1 5h2M5 12V8a3 3 0 013-3h8a3 3 0 013 3v4M7 17v2M17 17v2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Transportation', desc: 'Airport transfers, intercity cabs, and chauffeured cars across India. Trains and flights coordinated end-to-end.' },
  { icon: '<path d="M9 11a3 3 0 110-6 3 3 0 010 6zm6 0a3 3 0 110-6 3 3 0 010 6zM3 21v-1a4 4 0 014-4h4a4 4 0 014 4v1m6 0v-1a4 4 0 00-3-3.87" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Group Tours', desc: 'Departures for friends, colleagues, and clubs — one coordinator, one invoice, every detail handled.' },
  { icon: '<path d="M12 20l-7-7 7-7M19 12H5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Family Tours', desc: 'Pace and comfort tuned for kids and grandparents. Nothing rushed, nothing missed, nothing left to chance.' },
  { icon: '<path d="M12 2a4 4 0 100 8 4 4 0 000-8zM4 22v-3a4 4 0 014-4h8a4 4 0 014 4v3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Custom Planning', desc: 'Tell us your dates, your interests, your budget. We\'ll build the rest — from the first sunrise to the last train home.' }
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
  {
    letter: 'A',
    name: 'Arjun & Sneha Kapoor',
    where: 'Kashmir · 7 nights · 2026',
    title: 'Felt like our anniversary, not a tour.',
    teaser: 'Every detail — down to the shikara breakfast — felt thought through.',
    quote: "We've travelled with a few agents over the years. None of them came close to what ASV TOURS put together for our anniversary in Kashmir. Every detail — down to the shikara breakfast — felt thought through."
  },
  {
    letter: 'R',
    name: 'Riya Sharma',
    where: 'Kerala · 6 nights · 2026',
    title: 'They rearranged our day before we noticed.',
    teaser: 'When the houseboat was delayed, our planner had already moved everything.',
    quote: "Our houseboat was delayed by a day in Alleppey. Before we even noticed, our planner had reshuffled the Munnar leg, kept us at a tea estate that night, and refunded the difference. Genuinely zero stress."
  },
  {
    letter: 'K',
    name: 'Kabir Nair',
    where: 'Rajasthan · 9 nights · 2026',
    title: "Hotels we'd never have found ourselves.",
    teaser: 'They knew which haveli, which fort lookout, which evening for the dunes.',
    quote: "I went into Rajasthan thinking I'd see the same forts everyone sees. ASV TOURS knew exactly which haveli to book in Jodhpur, which fort lookout to reach at sunset, which evening to do the dunes. Hard country, soft landing."
  }
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
