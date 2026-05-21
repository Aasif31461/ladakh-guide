// Leh-Ladakh Full Circuit Bike Expedition 2026
// Started on June 8, 2026 (Updated Dates)

// 1. Data Structures
const itineraryData = [
    {
        day: 1,
        date: "Mon, 8 Jun 2026",
        from: "Delhi",
        to: "Patnitop",
        dist: 630,
        time: "11 hrs",
        startCoord: [28.6139, 77.2090],
        endCoord: [33.0864, 75.3283],
        summary: "Long flat highway ride exiting Delhi. Starting of the climb towards Patnitop in Jammu.",
        schedule: [
            { time: "06:00 AM", desc: "Depart Delhi (make sure fuel tank is filled before starting)", loc: "Delhi" },
            { time: "08:30 AM", desc: "Ambala (~200 km) – Fuel & Breakfast stop", loc: "Ambala" },
            { time: "11:00 AM", desc: "Jalandhar (~400 km) – Quick stretch and hydration break", loc: "Jalandhar" },
            { time: "12:30 PM", desc: "Pathankot (~480 km) – Fuel + Lunch", loc: "Pathankot" },
            { time: "02:30 PM", desc: "Udhampur (~580 km) – Fuel stop (last big town before mountains)", loc: "Udhampur" },
            { time: "04:30 PM", desc: "Patnitop (~630 km) – Arrive & settle at stay", loc: "Patnitop" }
        ],
        fuelStops: "Delhi (fill full) → Ambala → Jalandhar → Pathankot (fill) → Udhampur (fill)",
        stay: "Hotel/Guesthouse in Patnitop (~1,800 m) - Budget ₹600-1200 per room. Camping near Patnitop meadows is also possible under clear skies.",
        food: "Breakfast: Dhaba near Ambala highway. Lunch: Pathankot highway dhabas. Dinner: Patnitop local restaurants or camp cook.",
        roadType: "NH-44 plains till Udhampur (excellent, 4-lane highway), then winding hill ascent to Patnitop.",
        warnings: "Very long day – pace yourself on the highway. Start at 6:00 AM sharp to beat Delhi & Ambala traffic. Don't skip Udhampur fuel.",
        critical: false
    },
    {
        day: 2,
        date: "Tue, 9 Jun 2026",
        from: "Patnitop",
        to: "Srinagar",
        dist: 180,
        time: "5 hrs",
        startCoord: [33.0864, 75.3283],
        endCoord: [34.0837, 74.7973],
        summary: "A short mountain ride through the famous Chenani-Nashri and Banihal Tunnels into Kashmir Valley.",
        schedule: [
            { time: "06:00 AM", desc: "Depart Patnitop", loc: "Patnitop" },
            { time: "07:00 AM", desc: "Ramban (~50 km) – Fuel + quick chai break", loc: "Ramban" },
            { time: "08:30 AM", desc: "Banihal (~90 km) – Transit Banihal Tunnel", loc: "Banihal" },
            { time: "10:00 AM", desc: "Qazigund (~130 km) – Entry into Kashmir Valley", loc: "Qazigund" },
            { time: "11:30 AM", desc: "Srinagar (~180 km) – Arrive, check in and freshen up", loc: "Srinagar" },
            { time: "02:00 PM", desc: "Afternoon sightseeing: Dal Lake Shikara ride, Mughal Gardens, Lal Chowk", loc: "Dal Lake, Srinagar" }
        ],
        fuelStops: "Ramban (top up) → Srinagar (FILL FULL - last reliable pump before Sonamarg)",
        stay: "Houseboat on Dal Lake (~₹1000-2500/night) for an iconic experience, or hotel in Lal Chowk (budget ₹800-1500).",
        food: "Breakfast: Ramban dhaba. Lunch/Dinner: Kashmiri Wazwan in Srinagar (Rogan Josh, Yakhni, Dum Aloo). Try Ahdoos or Mughal Darbar.",
        roadType: "Two-lane mountain highway with tunnels. Road conditions generally good, but watch for landslide detours near Ramban.",
        warnings: "Short riding day. Use the afternoon to rest, check bike systems, and obtain any local gear.",
        critical: false
    },
    {
        day: 3,
        date: "Wed, 10 Jun 2026",
        from: "Srinagar",
        to: "Kargil",
        dist: 205,
        time: "7 hrs",
        startCoord: [34.0837, 74.7973],
        endCoord: [34.5539, 76.1349],
        summary: "Crossing Zoji La, one of the most treacherous passes on the circuit, to enter Dras (coldest inhabited place in India) and Kargil.",
        schedule: [
            { time: "06:00 AM", desc: "Depart Srinagar (Zoji La is best crossed early to avoid traffic jams & slush)", loc: "Srinagar" },
            { time: "07:30 AM", desc: "Sonamarg (~80 km) – Fuel + breakfast. Last petrol pump before Kargil!", loc: "Sonamarg" },
            { time: "09:00 AM", desc: "Zoji La Pass (11,575 ft) – Slow, rocky mud and gravel section", loc: "Zoji La Pass" },
            { time: "10:30 AM", desc: "Drass (~140 km) – Coldest inhabited town in India (−45°C in winters)", loc: "Dras" },
            { time: "11:30 AM", desc: "Kargil War Memorial (~185 km) – 30 min visit to pay respects to heroes", loc: "Kargil War Memorial" },
            { time: "12:30 PM", desc: "Kargil Town (~205 km) – Arrive, check in", loc: "Kargil" }
        ],
        fuelStops: "Sonamarg (FILL FULL - CRITICAL) → Kargil (fill full before Leh). No pump between Sonamarg and Kargil.",
        stay: "Hotel D'Zojila, Hotel Greenland, or Caravan Serai (₹800-1800). Camping: Suru River banks 5 km from town.",
        food: "Breakfast: Sonamarg dhabas. Lunch: Drass dhabas. Dinner: Kargil local restaurants (try Ladakhi Skyu or Thukpa).",
        roadType: "NH-1. Good till Sonamarg. Sonamarg to Dras (Zoji La) is dirt track, slush, and rocks. Dras to Kargil is smooth tar.",
        warnings: "Army convoys have priority at Zoji La. Do not overtake on narrow ledges. Start early to cross before the sun melts the snow, causing water crossings.",
        critical: true
    },
    {
        day: 4,
        date: "Thu, 11 Jun 2026",
        from: "Kargil",
        to: "Leh",
        dist: 220,
        time: "6 hrs",
        startCoord: [34.5539, 76.1349],
        endCoord: [34.1526, 77.5771],
        summary: "Riding through Lamayuru (Moonland) and sightseeing major attractions like Sangam, Magnetic Hill, and Gurudwara Pathar Sahib before reaching Leh.",
        schedule: [
            { time: "06:00 AM", desc: "Depart Kargil (fill full tank at Kargil pump)", loc: "Kargil" },
            { time: "08:00 AM", desc: "Mulbekh (~60 km) – Stop to see the 9th century Maitreya Buddha rock carving", loc: "Mulbekh" },
            { time: "09:30 AM", desc: "Lamayuru (~105 km) – Visit Lamayuru Monastery & Moonland views", loc: "Lamayuru" },
            { time: "11:00 AM", desc: "Nimmu (~155 km) – View the Sangam (confluence of blue Indus and brown Zanskar)", loc: "Sangam, Nimmu" },
            { time: "12:00 PM", desc: "Magnetic Hill (~170 km) & Pathar Sahib Gurudwara – Quick stops", loc: "Magnetic Hill" },
            { time: "01:30 PM", desc: "Leh (~220 km) – Arrive, check in and completely rest", loc: "Leh" }
        ],
        fuelStops: "Kargil (fill full) → Lamayuru (unreliable, top up if open) → Khaltsi (IOCL - reliable) → Leh (Multiple pumps).",
        stay: "Hotel in Leh town near main market or Changspa Road (₹800-2500). Highly recommend comfortable hotel for acclimatization.",
        food: "Breakfast: Kargil hotel. Lunch: Lamayuru dhaba or Nimmu riverside café. Dinner: Leh market (Tibetan Kitchen, Lamayuru Restaurant).",
        roadType: "NH-1. Beautiful smooth tarmac, wide mountain roads. Photogenic straights.",
        warnings: "On reaching Leh (3,524 m), drink 2-3L of water. Acclimatization begins now: EAT LIGHT, NO ALCOHOL, NO heavy physical exertion.",
        critical: false
    },
    {
        day: 5,
        date: "Fri, 12 Jun 2026",
        from: "Leh",
        to: "Leh (Rest Day)",
        dist: 0,
        time: "0 hrs (Rest)",
        startCoord: [34.1526, 77.5771],
        endCoord: [34.1526, 77.5771],
        summary: "Mandatory rest day in Leh to acclimatize to high altitude. Double-check your printed EDF receipt copies.",
        schedule: [
            { time: "09:00 AM", desc: "Acclimatize walk to Leh Market for breakfast", loc: "Leh Main Market" },
            { time: "10:00 AM", desc: "Print Environment and Development Fee (EDF) receipts (paid online at lahdclehpermit.in)", loc: "Leh" },
            { time: "12:00 PM", desc: "Lunch and explore Leh Palace / Hall of Fame Museum", loc: "Leh Palace" },
            { time: "04:30 PM", desc: "Acclimatization walk to Shanti Stupa for sunset panoramic views", loc: "Shanti Stupa, Leh" },
            { time: "05:00 PM", desc: "Finalize local Leh rental bike swap or check vehicle papers (RC/NOC)", loc: "Leh" },
            { time: "06:00 PM", desc: "Thorough bike check: chain lube, tires, clutch, engine oil", loc: "Leh" },
            { time: "07:30 PM", desc: "Acclimatization briefing with the team + light dinner", loc: "Leh" }
        ],
        fuelStops: "Fill all bike tanks to 100% and prepare jerry cans in Leh before Day 6 morning.",
        stay: "Same hotel in Leh.",
        food: "Breakfast: Bon Appetit / Leh market. Lunch: Tibetan Kitchen. Dinner: Penguin Garden Restaurant.",
        roadType: "No riding. Simple walking within Leh town.",
        warnings: "STRICT RULE: Do not bypass this rest day. Acclimatization is key. Also, check Union Rules: if you rented your bike in Delhi, you MUST swap it for a local Leh rental for Nubra/Pangong/Hanle sightseeing today. If it is your own bike, ensure original RC matches your DL or carry notarized NOC.",
        critical: false
    },
    {
        day: 6,
        date: "Sat, 13 Jun 2026",
        from: "Leh",
        to: "Turtuk (via Khardung La)",
        dist: 210,
        time: "9 hrs",
        startCoord: [34.1526, 77.5771],
        endCoord: [34.8453, 76.8338],
        summary: "Ascend Khardung La (17,582 ft) then drop into Nubra Valley to ride past Hunder Sand Dunes up to the Balti village of Turtuk near the Pakistan border.",
        schedule: [
            { time: "06:00 AM", desc: "Depart Leh (ensure tanks are full, printed EDF receipts handy)", loc: "Leh" },
            { time: "07:30 AM", desc: "Khardung La Summit (17,582 ft) – 15 mins max photo stop (do not linger due to low oxygen)", loc: "Khardung La" },
            { time: "09:00 AM", desc: "South Pullu / North Pullu checkposts – Show printed EDF receipt copies", loc: "North Pullu" },
            { time: "10:00 AM", desc: "Diskit (~120 km) – Fuel up, breakfast, and view the giant 32m Maitreya Buddha", loc: "Diskit Monastery" },
            { time: "11:30 AM", desc: "Hunder Sand Dunes (~135 km) – Short stop to see Bactrian double-hump camels", loc: "Hunder Sand Dunes" },
            { time: "03:30 PM", desc: "Turtuk (~210 km) – Arrive, check in at homestay, explore apricot orchards", loc: "Turtuk" }
        ],
        fuelStops: "Leh (fill full - CRITICAL) → Diskit (HP Pump, fill full). No pumps beyond Diskit. Carry 5-10L extra fuel as safety margin.",
        stay: "Turtuk Homestays (Himalayan Homestay / Turtuk Guest House) – ₹600-1200 with home-cooked dinner.",
        food: "Breakfast: Diskit dhabas. Lunch: Hunder dhabas or packed food. Dinner: Homestay host cooks local Balti food.",
        roadType: "Leh to Khardung La is steep climb (dirt/slush near top). Khardung La to Diskit is good. Diskit to Turtuk is a flat road along the Shyok riverbed.",
        warnings: "Do not spend more than 15-20 mins at Khardung La summit. Turtuk is very close to the Line of Control; strictly no photography of military assets.",
        critical: true
    },
    {
        day: 7,
        date: "Sun, 14 Jun 2026",
        from: "Turtuk",
        to: "Pangong Tso (via Shyok Valley)",
        dist: 230,
        time: "9 hrs",
        startCoord: [34.8453, 76.8338],
        endCoord: [33.7291, 78.4418],
        summary: "A thrilling ride along the Shyok River bed, taking the direct route from Nubra to the stunning blue Pangong Lake.",
        schedule: [
            { time: "06:00 AM", desc: "Depart Turtuk", loc: "Turtuk" },
            { time: "07:30 AM", desc: "Diskit (~60 km) – Fuel up at HP pump + breakfast", loc: "Diskit" },
            { time: "09:00 AM", desc: "Shyok Village Junction (~100 km) – Enter the Shyok river valley route", loc: "Shyok" },
            { time: "11:00 AM", desc: "Agham checkpoint", loc: "Agham, Ladakh" },
            { time: "01:30 PM", desc: "Durbuk / Tangtse (~175 km) – Quick hydration break and top up fuel if needed at Tangtse pump", loc: "Tangtse" },
            { time: "03:30 PM", desc: "Spangmik / Pangong Tso (~230 km) – Arrive at the lake, settle in camp", loc: "Pangong Tso" }
        ],
        fuelStops: "Diskit HP Pump (FILL FULL) → Tangtse IOCL pump (reliable backup before Pangong). Carry spare fuel in jerry cans.",
        stay: "Spangmik / Man Village tented camps (Pangong Retreat / Pangong Sarai) – ₹2000-3500 with meals.",
        food: "Breakfast: Diskit dhabas. Lunch: Carry packed lunch from Diskit (no dhabas along Shyok valley for 120 km). Dinner: Camp dinner.",
        roadType: "Shyok route has rough gravel patches, water streams, and sand. Check river water levels before crossing.",
        warnings: "MANDATORY: Pack lunch and carry 3L water. No mobile network. Ensure jerry can fuel is strapped securely.",
        critical: true
    },
    {
        day: 8,
        date: "Mon, 15 Jun 2026",
        from: "Pangong Tso",
        to: "Hanle (via Chushul, Nyoma)",
        dist: 215,
        time: "8 hrs",
        startCoord: [33.7291, 78.4418],
        endCoord: [32.7667, 78.9833],
        summary: "Riding through the remote border route via Chushul and Rezang La War Memorial into the high-altitude stargazing haven of Hanle.",
        schedule: [
            { time: "06:00 AM", desc: "Depart Spangmik (Pangong Tso)", loc: "Spangmik" },
            { time: "07:30 AM", desc: "Chushul (~50 km) – Visit the sacred Rezang La War Memorial (1962 Battle site)", loc: "Rezang La War Memorial" },
            { time: "09:30 AM", desc: "Tsaga La Pass & Nyoma (~130 km) – Permit verification and tea stop", loc: "Nyoma" },
            { time: "11:00 AM", desc: "Loma Bend (~170 km) – Permit checkpoint & Indus River photo stop", loc: "Loma Bend, Ladakh" },
            { time: "01:00 PM", desc: "Hanle (~215 km) – Arrive, check in at homestay", loc: "Hanle" },
            { time: "02:30 PM", desc: "Visit Hanle Monastery & look at the Indian Astronomical Observatory", loc: "Hanle Observatory" },
            { time: "08:00 PM", desc: "Stargazing night – enjoy the incredible Milky Way view!", loc: "Hanle" }
        ],
        fuelStops: "No petrol pumps on this route. Nyoma HP pump is located near the route (can detour/fill if needed). Hanle has no official pump (rely on Jerry cans / black fuel).",
        stay: "Hanle local homestays (₹600-1000 with dinner). Camping near monastery is option but nights are freezing (-5°C). Use -10°C sleeping bag.",
        food: "Breakfast: Cook at Pangong camp or carry. Lunch: Carry packed food. Dinner: Homestay simple Dal-Rice.",
        roadType: "Unpaved dirt tracks, gravel, sandy stretches. Highly remote with minimal traffic.",
        warnings: "Hanle is at 4,360 m (14,300 ft). Extreme cold. Oxygen is thin. Drink plenty of water and wear warm layers before sunset. Stargazing is magical.",
        critical: true
    },
    {
        day: 9,
        date: "Tue, 16 Jun 2026",
        from: "Hanle",
        to: "Umling La & back → Nyoma",
        dist: 160,
        time: "7 hrs",
        startCoord: [32.7667, 78.9833],
        endCoord: [33.1905, 78.6503], // Ends in Nyoma, includes Umling La [32.6980, 79.1671] loop
        summary: "The ultimate peak of the trip: Ascending Umling La (19,024 ft), the highest motorable road in the world, then riding down to Nyoma.",
        schedule: [
            { time: "06:00 AM", desc: "Depart Hanle (top up fuel from jerry cans or local black outlet)", loc: "Hanle" },
            { time: "07:30 AM", desc: "Begin the climb to Umling La Pass via Photi La route", loc: "Photi La" },
            { time: "09:00 AM", desc: "Umling La Summit (19,024 ft) – World's Highest Road. MAX 20 MINS at top. Take photos, keep calm.", loc: "Umling La" },
            { time: "11:00 AM", desc: "Descend back to Hanle (~95 km round trip done) – Lunch stop", loc: "Hanle" },
            { time: "01:30 PM", desc: "Depart Hanle for Nyoma (~65 km)", loc: "Nyoma" },
            { time: "03:30 PM", desc: "Nyoma (~160 km cumulative) – Arrive, set up camp on flat riverbed", loc: "Nyoma" }
        ],
        fuelStops: "Fill up at Nyoma HP Pump (Fully functional 2026) upon arrival in Nyoma. Great backup!",
        stay: "Nyoma flat riverbed camping (near Indus river) or basic guesthouse in Nyoma village (~₹600-1000).",
        food: "Breakfast: Hanle homestay. Lunch: Back in Hanle after descent. Dinner: Camp cook or basic Nyoma dhaba.",
        roadType: "Newly paved blacktop for Umling La, but steep, narrow, wind-swept, and icy sections. Ride slowly.",
        warnings: "Army restricts Umling La summit access after 2:00 PM due to extreme wind chill and medical risk. Reaching summit by 11:00 AM is highly recommended. Carry personal oxygen canister, ORS, and warm thermals. Descend immediately if dizzy.",
        critical: true
    },
    {
        day: 10,
        date: "Wed, 17 Jun 2026",
        from: "Nyoma",
        to: "Tso Moriri (via Mahe)",
        dist: 110,
        time: "4 hrs",
        startCoord: [33.1905, 78.6503],
        endCoord: [32.9667, 78.3167],
        summary: "A short, scenic ride along the Indus River via Mahe Bridge and Sumdo to the turquoise freshwater lake of Tso Moriri.",
        schedule: [
            { time: "06:00 AM", desc: "Depart Nyoma (Fill up 100% at Nyoma HP Pump before starting)", loc: "Nyoma" },
            { time: "07:30 AM", desc: "Mahe Bridge (~50 km) – Cross Indus River, permit check", loc: "Mahe Bridge, Ladakh" },
            { time: "09:00 AM", desc: "Sumdo village (~75 km) – Permit verification checkpoint", loc: "Sumdo, Ladakh" },
            { time: "10:30 AM", desc: "Korzok / Tso Moriri (~110 km) – Arrive at the beautiful high lake", loc: "Korzok" },
            { time: "11:00 AM", desc: "Explore Tso Moriri lake, Korzok Monastery, and look for migratory birds", loc: "Tso Moriri" },
            { time: "04:00 PM", desc: "Settle in designated lakeside tented camps / homestay", loc: "Korzok" }
        ],
        fuelStops: "Nyoma HP Pump (FILL FULL before leaving Nyoma). Ensure you carry enough fuel to span Sarchu and reach Keylong (240 km).",
        stay: "Lakeside camping only in designated zones in Korzok (Tso Moriri is eco-sensitive). Korzok Retreat or homestays (₹600-2000).",
        food: "Breakfast: Camp cook in Nyoma. Lunch: Packed lunch. Dinner: Camp kitchen at Korzok.",
        roadType: "Mix of dirt tracks and average tar. Sumdo to Korzok is unpaved and bumpy.",
        warnings: "Tso Moriri is at 4,522 m. Nights are extremely cold (-2°C to 10°C). Do not litter or throw trash into the lake. Fishing is strictly banned.",
        critical: false
    },
    {
        day: 11,
        date: "Thu, 18 Jun 2026",
        from: "Tso Moriri",
        to: "Sarchu (via Pang, NH-3)",
        dist: 165,
        time: "7 hrs",
        startCoord: [32.9667, 78.3167],
        endCoord: [32.9068, 77.2036],
        summary: "Joining the Leh-Manali Highway (NH-3) via Morey Plains, crossing high passes Nakee La and Lachung La, and riding down the Gata Loops to Sarchu.",
        schedule: [
            { time: "06:00 AM", desc: "Depart Tso Moriri", loc: "Korzok" },
            { time: "07:30 AM", desc: "Sumdo to Pang Junction (~60 km) – Enter Leh-Manali Highway", loc: "Sumdo, Ladakh" },
            { time: "08:30 AM", desc: "Pang (~80 km) – Attempt fuel buy (black market dhabas) & breakfast in tents", loc: "Pang, Ladakh" },
            { time: "10:00 AM", desc: "Morey Plains (~100 km) – Ride across the 40 km flat plateau at 4,500m", loc: "Morey Plains" },
            { time: "11:30 AM", desc: "Nakee La (15,547 ft) and Lachung La (16,616 ft) Pass crossings", loc: "Lachung La" },
            { time: "01:30 PM", desc: "Gata Loops (~130 km) – Descend 21 hair-pin loops", loc: "Gata Loops" },
            { time: "04:00 PM", desc: "Sarchu Plains (~165 km) – Arrive, set up camp on high windswept plains", loc: "Sarchu" }
        ],
        fuelStops: "No petrol pumps between Nyoma and Keylong. Pang and Sarchu have dhabas selling loose fuel in black, but it is expensive and low-quality. Use jerry cans.",
        stay: "Tented camps on Sarchu plains (₹600-1200 per tent) with basic blankets. Heavy wind chill. Sleep in -10°C bag.",
        food: "Breakfast: Korzok camp. Lunch/Snacks: Morey plains dhabas. Dinner: Sarchu tent restaurants.",
        roadType: "NH-3. Excellent tar on Morey Plains. Bumpy passes at Lachung La. Good loops down Gata.",
        warnings: "Sarchu is a high windswept plain at 4,290 m. Freezing temperatures (-5°C). Altitude sickness can strike again due to extreme wind chill. Wear windproof layers.",
        critical: true
    },
    {
        day: 12,
        date: "Fri, 19 Jun 2026",
        from: "Sarchu",
        to: "Manali (via Atal Tunnel)",
        dist: 230,
        time: "8 hrs",
        startCoord: [32.9068, 77.2036],
        endCoord: [32.2432, 77.1892],
        summary: "Cross Baralacha La, ride past Sissu, and enter the historic 8.8 km Atal Tunnel to quickly drop into the lush green valleys of Manali.",
        schedule: [
            { time: "06:00 AM", desc: "Depart Sarchu", loc: "Sarchu" },
            { time: "07:30 AM", desc: "Cross Baralacha La Pass (16,500 ft) – Check for ice crossings", loc: "Baralacha La Pass" },
            { time: "08:30 AM", desc: "Tandi / Keylong (~80 km) – FILL FUEL (CRITICAL reliable pump) & hot breakfast", loc: "Keylong" },
            { time: "10:00 AM", desc: "Sissu / Atal Tunnel North Portal (~130 km) – Enter 8.8 km tunnel", loc: "Atal Tunnel, North Portal" },
            { time: "10:30 AM", desc: "Exit South Portal", loc: "Atal Tunnel, South Portal" },
            { time: "01:30 PM", desc: "Manali (~230 km) – Arrive! Settle in hotel, explore Old Manali cafés", loc: "Manali" }
        ],
        fuelStops: "Tandi BPCL pump / Keylong HPCL pump (FILL FULL - extremely reliable) → Sissu → Manali.",
        stay: "Hotel in Old Manali or Vashisht (₹800-2500). Celebration dinner stay.",
        food: "Breakfast: Keylong proper hot meal. Lunch: Manali cafe. Dinner: Old Manali celebration dinner.",
        roadType: "Baralacha La can have deep water crossings (water streams from melting ice). Sissu to Manali is excellent tarmac.",
        warnings: "Melting snow at Baralacha La can create deep water crossings. Cross early! Bike service is recommended in Manali.",
        critical: true
    },
    {
        day: 13,
        date: "Sat, 20 Jun 2026",
        from: "Manali",
        to: "Delhi",
        dist: 530,
        time: "10 hrs",
        startCoord: [32.2432, 77.1892],
        endCoord: [28.6139, 77.2090],
        summary: "Long highway run back to Delhi. Exiting the Himalayas and riding through Punjab plains back home.",
        schedule: [
            { time: "06:00 AM", desc: "Depart Manali (tanks full)", loc: "Manali" },
            { time: "08:30 AM", desc: "Mandi (~110 km) – Fuel + Punjabi breakfast", loc: "Mandi" },
            { time: "11:30 AM", desc: "Chandigarh outskirts (~270 km) – Fuel + lunch stop", loc: "Chandigarh" },
            { time: "01:30 PM", desc: "Ambala (~340 km) – Hydration stop", loc: "Ambala" },
            { time: "03:00 PM", desc: "Karnal (~400 km) – Brief break", loc: "Karnal" },
            { time: "05:30 PM", desc: "Delhi Outskirts & Home! 🏠 Trip accomplished.", loc: "Delhi" }
        ],
        fuelStops: "Manali (fill full) → Mandi → Kiratpur Sahib → Chandigarh → Ambala → Delhi. Plenty of options.",
        stay: "Home in Delhi.",
        food: "Breakfast: Mandi highway dhaba. Lunch: Chandigarh dhabas. Dinner: Home-cooked meal.",
        roadType: "NH-3 hill roads till Kiratpur Sahib, then flat, excellent 6-lane NH-44 highway to Delhi.",
        warnings: "Start early at 6 AM. Watch out for highway speed limits. Take breaks every 2 hours.",
        critical: false
    }
];

const checklistCategories = {
    gear: [
        { name: "Helmet", desc: "Visor clear rakho.", checked: false },
        { name: "Riding Gloves", desc: "Heavy winter waterproof gloves + 1 pair of summer gloves (Savi will see).", checked: false },
        { name: "Knee & Elbow Guards", desc: "Agar riding jacket/pants me inbuilt nahi hai.", checked: false },
        { name: "Riding Jacket", desc: "Waterproof, armor wali agar possible.", checked: false },
        { name: "Riding Boots", desc: "With ankle protection.", checked: false },
        { name: "Raincoat (Full Set)", desc: "Top, bottom, and bike rain cover.", checked: false }
    ],
    clothing: [
        { name: "Undergarments (3–4 pairs)", desc: "Dry-fit wale, jaldi sukh jaate hain.", checked: false },
        { name: "Thermal Inner Set (1 woolen)", desc: "Top + bottom, thermal type.", checked: false },
        { name: "Jeans/Joggers (2 pairs)", desc: "Comfortable wale, tight mat rakhna.", checked: false },
        { name: "Lower + Shorts (1 pair each)", desc: "Shorts sirf stay/room me relax ke liye.", checked: false },
        { name: "T-shirts (3–4)", desc: "Isme 2 full-sleeve must, dust/tanning/thand ke liye.", checked: false },
        { name: "Jackets (2)", desc: "1 warm jacket (puffer/fleece) and 1 windproof/waterproof riding jacket.", checked: false },
        { name: "Riding Time Outfit", desc: "Dry-fit T-shirt + jogger/lower + riding jacket.", checked: false },
        { name: "Shoes (2 pairs)", desc: "1 riding/ankle-length sports shoes + 1 normal sports shoes/floaters (stay/walk).", checked: false },
        { name: "Rain Cover for Shoes", desc: "Ordered.", checked: false },
        { name: "Riding Gloves (Half-finger + Full)", desc: "Half-finger dust ke liye + full-finger winter gloves thand ke liye.", checked: false },
        { name: "Woolen cap / balaclava / neck gaiter", desc: "Wind aur cold se bachne ke liye.", checked: false },
        { name: "Rain Coat", desc: "Waterproof top and bottom.", checked: false },
        { name: "Socks (3–4 pairs)", desc: "1–2 woolen bhi lo.", checked: false },
        { name: "Chappals", desc: "For stay/rooms.", checked: false }
    ],
    essentials: [
        { name: "Sunglasses", desc: "UV400 wale, Ladakh ki dhoop kaafi tez hoti hai.", checked: false },
        { name: "Sunscreen SPF 50+", desc: "Warna tan + burn ho jayega.", checked: false },
        { name: "Lip Balm", desc: "Vaseline type, hawa dry hoti hai.", checked: false },
        { name: "Moisturizer", desc: "Face & hand ke liye.", checked: false },
        { name: "Water Bottle / Hydration Bag", desc: "Keep hydrated to prevent AMS.", checked: false },
        { name: "Powerbank", desc: "Network weak hoga, charging limited milegi.", checked: false },
        { name: "Torch / Headlamp", desc: "Night stay/camps ke liye.", checked: false },
        { name: "Camera / GoPro", desc: "Agar vlog banana hai to 😎.", checked: false },
        { name: "Offline Map", desc: "Offline Map - Arpit/Kamal.", checked: false },
        { name: "ID Cards", desc: "Aadhar, DL – har checkpost me kaam aayenge.", checked: false },
        { name: "Some Cash", desc: "Everywhere UPI kaam nahi karega, remote Ladakh villages me. Keep ₹10K-15K.", checked: false },
        { name: "Permit", desc: "Not done yet, needs to be done 2 days before.", checked: false }
    ],
    spares: [
        { name: "Bike Papers", desc: "RC, insurance, DL, PUC – sab original + xerox (Xerox Remaining).", checked: false },
        { name: "Basic Bike Tool Kit", desc: "Jo saath aata hai + puncture repair kit + foot pump.", checked: false },
        { name: "Bungee Cords / Rope", desc: "Luggage tight karne ke liye (Kamal - rope).", checked: false },
        { name: "Saddle Bag / Tank Bag", desc: "Backpack avoid karo, thak jaoge.", checked: false },
        { name: "Engine Oil (½ Litre Extra)", desc: "To top up in case of minor leaks/consumption.", checked: false },
        { name: "Gel Seats", desc: "For long ride comfort.", checked: false },
        { name: "Chain Lube & Cleaner", desc: "Kamal/Arpit.", checked: false }
    ],
    food: [
        { name: "Dry Fruits / Energy Bars / Biscuits", desc: "Road pe helpful (Savi, Energy Bar -> Arpit).", checked: false },
        { name: "ORS / Glucon-D", desc: "Hydration ke liye (Savi).", checked: false },
        { name: "Maggie / Canned Food / Tea Items", desc: "Maggie / Canned food / Chai patti / Chalni / Sugar / Elaichi / Adrak (Arpit).", checked: false },
        { name: "Lighter / Matches / Tea Cup / Massager", desc: "Massager - Aasif.", checked: false }
    ],
    medical: [
        { name: "AMS Meds (Diamox)", desc: "Acetazolamide – prevents and treats altitude sickness. Dexamethasone for extreme rescue emergencies.", checked: false },
        { name: "Pain, Fever, Inflammation Meds", desc: "Paracetamol (fever/mild pain), Ibuprofen/Diclofenac (muscle/joint pain).", checked: false },
        { name: "Stomach and Digestive Meds", desc: "ORS, Loperamide (diarrhea), Antacids (Gelusil/Digene/Rantac/Omeprazole), Probiotics.", checked: false },
        { name: "Cold, Cough and Allergy Meds", desc: "Antihistamines (Cetirizine/Loratadine), Cough Syrup, Decongestant (Otrivin nasal drops).", checked: false },
        { name: "Infections Meds", desc: "Broad-spectrum Antibiotic (Azithromycin/Amoxicillin), Antifungal/Antiseptic cream, Antiseptic Solution (Dettol/Savlon).", checked: false },
        { name: "Skin and Sun Protection", desc: "Sunscreen (SPF 30–50+), Lip balm with SPF, Moisturizer/Cold cream, Burn cream.", checked: false },
        { name: "Motion Sickness Meds", desc: "Dimenhydrinate / Domperidone, Melatonin (sleep cycle).", checked: false },
        { name: "First Aid Kit", desc: "Band-aids, Gauze, Cotton, Crepe bandage, Pain relief spray/ointment (Volini/Moov), Thermometer (Arpit), Scissors, tweezers, safety pins.", checked: false }
    ],
    camping: [
        { name: "Tents", desc: "Sleeping and toilet tent.", checked: false },
        { name: "Sleeping Bag (0-5°C)", desc: "Cold weather rating.", checked: false },
        { name: "Extra Blanket", desc: "Light and less storage taking blanket.", checked: false },
        { name: "Lights", desc: "One key chain light for camping.", checked: false },
        { name: "Stove and Gas", desc: "3 gas canisters.", checked: false },
        { name: "Toiletries", desc: "Brush, toothpaste, paper soap, shampoo, soap, facewash, hair oil, comb, mirror (Kamal).", checked: false },
        { name: "Cooking Set", desc: "Fork, spoon, tea cup, chalni and some utensils.", checked: false }
    ],
    communication: [
        { name: "Intercom", desc: "For rider-to-rider communication.", checked: false },
        { name: "Mobile Keypad", desc: "Backup phone.", checked: false },
        { name: "Postpaid SIM", desc: "BSNL/Jio/Airtel Postpaid (prepaid doesn't work).", checked: false },
        { name: "Walkie Talkie", desc: "Backup communication.", checked: false }
    ]
};

const petrolPumps = [
    { name: "Sonamarg BPCL Pump", lat: 34.3013, lng: 75.2974, severity: "low", notes: "Very reliable BPCL pump. Last petrol station before crossing Zoji La Pass." },
    { name: "Dras Petrol Pump", lat: 34.4286, lng: 75.7667, severity: "low", notes: "Reliable IOCL station right on the highway after crossing Zoji La." },
    { name: "Kargil HPCL/BPCL Pumps", lat: 34.5539, lng: 76.1349, severity: "low", notes: "Multiple pumps available. Always fill 100% here before moving to Leh." },
    { name: "Khaltsi IOCL Pump", lat: 34.3211, lng: 76.8837, severity: "low", notes: "Highly reliable IOCL station on Srinagar-Leh highway, about 95 km before Leh." },
    { name: "Leh HPCL/BPCL Town Pumps", lat: 34.1526, lng: 77.5771, severity: "low", notes: "Multiple large, fully functional fuel stations. Fill up 100% and top up jerry cans." },
    { name: "Karu HPCL Pump", lat: 33.9189, lng: 77.7289, severity: "low", notes: "Extremely reliable pump 35 km before Leh. Serves as key checkpoint on Manali-Leh road." },
    { name: "Diskit HPCL Pump (Nubra)", lat: 34.5458, lng: 77.5508, severity: "med", notes: "Generally reliable but sometimes has queues or limited hours. Crucial before riding to Turtuk." },
    { name: "Tangtse IOCL Pump", lat: 34.0201, lng: 78.1585, severity: "low", notes: "Fully functional IOCL pump. Extremely useful for doing Pangong Tso round trips without black fuel." },
    { name: "Nyoma HPCL Pump", lat: 33.1905, lng: 78.6503, severity: "low", notes: "Newly opened, fully functional pump. Vital fuel backup for Tso Moriri and Hanle circuits." },
    { name: "Tandi BPCL Pump", lat: 32.5456, lng: 76.9767, severity: "low", notes: "BPCL pump. Highly reliable. Only fuel pump on highway after Manali for ~323 km." },
    { name: "Keylong HPCL Pump", lat: 32.5737, lng: 77.0185, severity: "low", notes: "Very reliable HPCL pump just before Keylong. Make sure to fill up here." },
    { name: "Hanle Local Distribution Point", lat: 32.7667, lng: 78.9833, severity: "high", notes: "No official petrol pump. Small local distribution outlet with highly irregular stock. Carry jerry cans." },
    { name: "Sarchu Dhabas (Black Market)", lat: 32.9068, lng: 77.2036, severity: "high", notes: "No petrol pump. Loose petrol sold in plastic bottles at highway dhabas at premium price and poor quality." },
    { name: "Pang Dhabas (Black Market)", lat: 33.1257, lng: 77.6329, severity: "high", notes: "No petrol pump. Plastic-bottle black market fuel. Avoid unless emergency." }
];

// Detailed GPS path tracking for realistic polyline renders
const detailedGPSRoute = [
    [28.6139, 77.2090], // Delhi
    [28.7041, 77.1025], // Rohini
    [29.0588, 77.0256], // Sonipat
    [29.3909, 76.9635], // Panipat
    [29.6857, 76.9905], // Karnal
    [29.9695, 76.8242], // Kurukshetra
    [30.3782, 76.7767], // Ambala
    [30.7333, 76.7794], // Chandigarh
    [30.9667, 76.5333], // Rupnagar
    [31.1839, 76.5689], // Kiratpur Sahib
    [31.3256, 76.7589], // Bilaspur
    [31.5364, 76.8911], // Sundarnagar
    [31.7087, 76.9320], // Mandi
    [31.9579, 77.1095], // Kullu
    [32.2432, 77.1892], // Manali
    [32.4131, 77.1633], // Atal Tunnel (South Portal)
    [32.4789, 77.1239], // Sissu
    [32.5456, 76.9767], // Tandi
    [32.5737, 77.0185], // Keylong
    [32.6739, 77.2189], // Darcha
    [32.7167, 77.3833], // Zingzing Bar
    [32.7533, 77.4167], // Baralacha La Pass
    [32.8833, 77.2167], // Killing Sar
    [32.9068, 77.2036], // Sarchu
    [32.9833, 77.5456], // Gata Loops
    [33.0256, 77.5811], // Nakee La
    [33.1039, 77.6189], // Lachung La
    [33.1257, 77.6329], // Pang
    [33.2500, 77.6500], // Morey Plains
    [33.6456, 77.7831], // Tanglang La
    [33.8333, 77.7167], // Upshi
    [33.9189, 77.7289], // Karu
    [34.1526, 77.5771], // Leh
    [34.1661, 77.4439], // Gurudwara Pathar Sahib
    [34.1685, 77.4158], // Magnetic Hill
    [34.1950, 77.3370], // Nimmoo (Sangam)
    [34.2433, 77.1633], // Saspol
    [34.3211, 76.8837], // Khaltsi
    [34.2831, 76.7758], // Lamayuru
    [34.3411, 76.7025], // Fotu La
    [34.3781, 76.5864], // Namika La
    [34.3828, 76.3639], // Mulbekh
    [34.5539, 76.1349], // Kargil
    [34.4286, 75.7667], // Dras
    [34.2798, 75.4802], // Zoji La Pass
    [34.2987, 75.4219], // Baltal
    [34.3013, 75.2974], // Sonamarg
    [34.2694, 74.8967], // Kangan
    [34.2239, 74.7839], // Ganderbal
    [34.0837, 74.7973], // Srinagar
    [33.7311, 75.1481], // Anantnag
    [33.5937, 75.1633], // Qazigund
    [33.4358, 75.2014], // Banihal
    [33.2435, 75.2312], // Ramban
    [33.0864, 75.3283]  // Patnitop
];

// 2. Map Management
let map;
let baseRouteLine;
let activeDayRouteHighlight;
let markersMap = {};


function initMap() {
    map = L.map('leaflet-map', {
        zoomControl: true,
        scrollWheelZoom: false
    }).setView([34.1526, 77.5771], 7);

    // Three high-quality tile layers for maximum realism
    const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map); // Default active layer

    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 19,
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    const baseMaps = {
        "Detailed Street Map": osmLayer,
        "Realistic Satellite": satelliteLayer,
        "Topographic Relief": topoLayer
    };

    // Add Layer Control
    L.control.layers(baseMaps, null, { position: 'topright', collapsed: false }).addTo(map);

    // Draw main static background route polyline (connecting detailed GPS points)
    baseRouteLine = L.polyline(detailedGPSRoute, {
        color: '#94a3b8',
        weight: 3,
        opacity: 0.5,
        dashArray: '5, 8'
    }).addTo(map);

    // Add main checkpoints markers
    const checkpoints = [
        { name: "Delhi", coord: [28.6139, 77.2090] },
        { name: "Patnitop", coord: [33.0864, 75.3283] },
        { name: "Srinagar", coord: [34.0837, 74.7973] },
        { name: "Kargil", coord: [34.5539, 76.1349] },
        { name: "Leh", coord: [34.1526, 77.5771] },
        { name: "Khardung La", coord: [34.2787, 77.6047] },
        { name: "Diskit", coord: [34.5457, 77.5508] },
        { name: "Turtuk", coord: [34.8453, 76.8338] },
        { name: "Spangmik (Pangong Tso)", coord: [33.7291, 78.4418] },
        { name: "Chushul", coord: [33.5901, 78.6534] },
        { name: "Hanle", coord: [32.7667, 78.9833] },
        { name: "Umling La", coord: [32.6980, 79.1671] },
        { name: "Nyoma", coord: [33.1905, 78.6503] },
        { name: "Tso Moriri (Korzok)", coord: [32.9667, 78.3167] },
        { name: "Sarchu", coord: [32.9068, 77.2036] },
        { name: "Keylong", coord: [32.5737, 77.0185] },
        { name: "Manali", coord: [32.2432, 77.1892] }
    ];

    checkpoints.forEach((wp, index) => {
        const marker = L.circleMarker(wp.coord, {
            radius: 7,
            fillColor: '#0284c7',
            color: '#fff',
            weight: 2,
            fillOpacity: 1
        }).addTo(map);

        marker.bindPopup(`
            <div class="popup-title">${wp.name}</div>
            <div class="popup-meta">
                <span>Checkpoint #${index + 1}</span>
            </div>
            <div class="popup-desc">Key point on the Ladakh Expedition Circuit.</div>
        `);

        markersMap[wp.name] = marker;
    });

    // Add petrol pump markers
    petrolPumps.forEach(pump => {
        const severityColor = pump.severity === 'high' ? '#dc2626' : (pump.severity === 'med' ? '#ea580c' : '#059669');
        const pumpMarker = L.circleMarker([pump.lat, pump.lng], {
            radius: 8,
            fillColor: severityColor,
            color: '#fff',
            weight: 2,
            fillOpacity: 0.95
        }).addTo(map);

        pumpMarker.bindPopup(`
            <div class="popup-title" style="color:${severityColor}">⛽ ${pump.name}</div>
            <div class="popup-meta">
                <span>Status: <strong style="text-transform:uppercase">${pump.severity === 'low' ? 'Reliable' : (pump.severity === 'med' ? 'Caution' : 'Critical')}</strong></span>
            </div>
            <div class="popup-desc">${pump.notes}</div>
        `);
    });
}

function highlightDayRoute(day) {
    if (!map) return;

    // Clear previous highlight
    if (activeDayRouteHighlight) {
        map.removeLayer(activeDayRouteHighlight);
    }

    const dayInfo = itineraryData.find(d => d.day === day);
    if (!dayInfo || dayInfo.dist === 0) return;

    // Zoom map to fit both start and end coordinates
    const bounds = L.latLngBounds([dayInfo.startCoord, dayInfo.endCoord]);
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 10 });

    // Draw active highlight path connecting detailed GPS coordinates
    let points = [dayInfo.startCoord, dayInfo.endCoord];

    // Day-specific detailed tracks using coordinate subsets
    if (day === 1) { // Delhi to Patnitop
        points = detailedGPSRoute.slice(0, 15).concat([[33.0864, 75.3283]]);
    } else if (day === 2) { // Patnitop to Srinagar
        points = [[33.0864, 75.3283], [33.2435, 75.2312], [33.4358, 75.2014], [33.5937, 75.1633], [34.0837, 74.7973]];
    } else if (day === 3) { // Srinagar to Kargil
        points = [[34.0837, 74.7973], [34.2239, 74.7839], [34.2694, 74.8967], [34.3013, 75.2974], [34.2798, 75.4802], [34.4286, 75.7667], [34.5539, 76.1349]];
    } else if (day === 4) { // Kargil to Leh
        points = [[34.5539, 76.1349], [34.3828, 76.3639], [34.2831, 76.7758], [34.3211, 76.8837], [34.1950, 77.3370], [34.1526, 77.5771]];
    } else if (day === 6) { // Leh -> Khardung La -> Hunder -> Turtuk
        points = [[34.1526, 77.5771], [34.2787, 77.6047], [34.5457, 77.5508], [34.5761, 77.4789], [34.8453, 76.8338]];
    } else if (day === 7) { // Turtuk -> Diskit -> Agham -> Shyok -> Pangong
        points = [[34.8453, 76.8338], [34.5457, 77.5508], [34.4839, 77.8931], [34.3444, 78.1189], [33.7291, 78.4418]];
    } else if (day === 8) { // Pangong -> Chushul -> Loma -> Hanle
        points = [[33.7291, 78.4418], [33.5901, 78.6534], [33.1673, 78.7997], [32.7667, 78.9833]];
    } else if (day === 9) { // Hanle -> Umling La -> Hanle -> Nyoma
        points = [[32.7667, 78.9833], [32.8122, 79.0256], [32.6980, 79.1671], [32.7667, 78.9833], [33.1905, 78.6503]];
    } else if (day === 10) { // Nyoma -> Mahe -> Sumdo -> Tso Moriri
        points = [[33.1905, 78.6503], [33.1764, 78.4311], [33.0939, 78.3370], [32.9667, 78.3167]];
    } else if (day === 11) { // Tso Moriri -> Sumdo -> Pang -> Sarchu
        points = [[32.9667, 78.3167], [33.0939, 78.3370], [33.1257, 77.6329], [32.9068, 77.2036]];
    } else if (day === 12) { // Sarchu -> Baralacha La -> Keylong -> Atal Tunnel -> Manali
        points = [[32.9068, 77.2036], [32.7533, 77.4167], [32.5737, 77.0185], [32.4131, 77.1633], [32.2432, 77.1892]];
    } else if (day === 13) { // Manali -> Mandi -> Chandigarh -> Delhi
        points = [[32.2432, 77.1892], [31.7087, 76.9320], [30.7333, 76.7794], [28.6139, 77.2090]];
    }

    activeDayRouteHighlight = L.polyline(points, {
        color: dayInfo.critical ? '#dc2626' : '#059669',
        weight: 6,
        opacity: 0.9,
        lineCap: 'round',
        lineJoin: 'round'
    }).addTo(map);

    // Open popups for endpoints (more robust matching)
    const endPointName = dayInfo.to.toLowerCase();
    let markerKey = Object.keys(markersMap).find(key =>
        endPointName.includes(key.toLowerCase()) ||
        key.toLowerCase().includes(endPointName.split(" ")[0])
    );
    const marker = markerKey ? markersMap[markerKey] : null;
    if (marker) {
        marker.openPopup();
    }
}

// 3. Checklist Engine
let checklistItems = {};

function initChecklist() {
    // Load from local storage or set defaults
    const stored = localStorage.getItem('ladakh_checklist');
    let needsReset = false;

    if (stored) {
        try {
            checklistItems = JSON.parse(stored);
            // Verify that all keys in checklistCategories exist in checklistItems
            Object.keys(checklistCategories).forEach(cat => {
                if (!checklistItems[cat]) {
                    needsReset = true;
                }
            });
        } catch (e) {
            needsReset = true;
        }
    }

    if (!stored || needsReset) {
        checklistItems = JSON.parse(JSON.stringify(checklistCategories));
        localStorage.setItem('ladakh_checklist', JSON.stringify(checklistItems));
    }
    renderChecklist('all');
    updateOverallProgress();
}

function renderChecklist(category = 'all') {
    const listContainer = document.getElementById('checklist-list');
    listContainer.innerHTML = '';

    Object.keys(checklistItems).forEach(cat => {
        if (category !== 'all' && category !== cat) return;

        checklistItems[cat].forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = `checklist-item ${item.checked ? 'checked' : ''}`;
            itemElement.dataset.category = cat;
            itemElement.dataset.index = index;

            itemElement.innerHTML = `
                <input type="checkbox" ${item.checked ? 'checked' : ''}>
                <div class="custom-checkbox"></div>
                <div class="item-text-wrapper">
                    <span class="item-name">${item.name}</span>
                    <span class="item-desc">${item.desc}</span>
                </div>
            `;

            itemElement.addEventListener('click', () => toggleChecklistItem(cat, index));
            listContainer.appendChild(itemElement);
        });
    });
}

function toggleChecklistItem(category, index) {
    checklistItems[category][index].checked = !checklistItems[category][index].checked;
    localStorage.setItem('ladakh_checklist', JSON.stringify(checklistItems));

    // Rerender active view
    const activeTab = document.querySelector('.chk-tab.active');
    const activeCategory = activeTab ? activeTab.dataset.cat : 'all';
    renderChecklist(activeCategory);
    updateOverallProgress();
}

function updateOverallProgress() {
    let totalItems = 0;
    let checkedItems = 0;

    Object.keys(checklistItems).forEach(cat => {
        // Update individual category headers with counters in tab buttons
        let catTotal = 0;
        let catChecked = 0;

        checklistItems[cat].forEach(item => {
            totalItems++;
            catTotal++;
            if (item.checked) {
                checkedItems++;
                catChecked++;
            }
        });

        const tabBtn = document.querySelector(`.chk-tab[data-cat="${cat}"]`);
        if (tabBtn) {
            const baseText = cat.charAt(0).toUpperCase() + cat.slice(1);
            const labelText = cat === 'gear' ? 'Riding Gear' : (cat === 'spares' ? 'Tool/Spares' : (cat === 'medical' ? 'Med Kit' : baseText));
            tabBtn.innerText = `${labelText} (${catChecked}/${catTotal})`;
        }
    });

    const percent = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;
    document.getElementById('checklist-progress-text').innerText = `${percent}% Ready (${checkedItems}/${totalItems} Items)`;
    document.getElementById('checklist-progress-fill').style.width = `${percent}%`;
}

// 4. Day-by-Day Timeline Render
function selectDay(dayNum) {
    // Update active tab buttons
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.day) === dayNum) {
            btn.classList.add('active');
        }
    });

    const dayData = itineraryData.find(d => d.day === dayNum);
    if (!dayData) return;

    // Render general day metadata
    document.getElementById('itinerary-day-title').innerHTML = `Day ${dayData.day} <span style="font-size: 14px; font-weight: normal; color: var(--text-secondary);">(${dayData.date})</span>`;

    // Build route headers without Google Maps location badges
    document.getElementById('itinerary-day-route').innerHTML = `
        <span>${dayData.from}</span>
        <span style="margin: 0 8px; color: var(--text-muted);">➔</span>
        <span>${dayData.to}</span>
    `;

    document.getElementById('itinerary-day-dist').innerText = `${dayData.dist} km`;
    document.getElementById('itinerary-day-time').innerText = dayData.time;
    document.getElementById('itinerary-day-summary').innerText = dayData.summary;

    const summaryCard = document.querySelector('.day-summary-card');
    if (dayData.critical) {
        summaryCard.classList.add('critical-day');
    } else {
        summaryCard.classList.remove('critical-day');
    }

    // Render schedule timeline flow
    const flowContainer = document.getElementById('schedule-flow');
    flowContainer.innerHTML = '';
    dayData.schedule.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'schedule-item';

        itemDiv.innerHTML = `
            <div class="schedule-time">${item.time}</div>
            <div class="schedule-desc">${item.desc}</div>
        `;
        flowContainer.appendChild(itemDiv);
    });

    // Render side details panels
    document.getElementById('itinerary-day-stay').innerText = dayData.stay;
    document.getElementById('itinerary-day-food').innerText = dayData.food;
    document.getElementById('itinerary-day-road').innerText = dayData.roadType;
    document.getElementById('itinerary-day-warnings').innerText = dayData.warnings;

    // Map highlight call
    highlightDayRoute(dayNum);
}

// 5. Directories and Search Filters
function renderPetrolPumpTable(searchQuery = '') {
    const tableBody = document.getElementById('petrol-table-body');
    tableBody.innerHTML = '';

    const filtered = petrolPumps.filter(pump =>
        pump.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pump.notes.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filtered.forEach(pump => {
        const tr = document.createElement('tr');
        const severityClass = pump.severity === 'high' ? 'severity-high' : (pump.severity === 'med' ? 'severity-med' : 'severity-low');

        tr.innerHTML = `
            <td style="font-weight:600; color: var(--text-primary);">
                <div class="table-loc-wrapper">
                    <span>⛽ ${pump.name}</span>
                    <a href="https://www.google.com/maps/search/?api=1&query=${pump.lat},${pump.lng}" target="_blank" rel="noopener" class="timeline-map-btn" title="Open in Google Maps"><i class="fa-solid fa-map-location-dot"></i> Map</a>
                </div>
            </td>
            <td><span class="${severityClass}">${pump.severity === 'high' ? 'CRITICAL' : (pump.severity === 'med' ? 'CAUTION' : 'RELIABLE')}</span></td>
            <td>${pump.notes}</td>
        `;
        tableBody.appendChild(tr);
    });
}

function handleTableSearch(e) {
    const query = e.target.value;
    renderPetrolPumpTable(query);
}

// 6. View Tabs
function switchMainTab(tabName) {
    document.querySelectorAll('.view-tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        }
    });

    // Toggle corresponding panels
    document.querySelectorAll('.directory-view-panel').forEach(panel => {
        panel.style.display = 'none';
    });
    document.getElementById(`${tabName}-panel`).style.display = 'block';
}

// 7. Initial Countdown
function initCountdown() {
    const targetDate = new Date("June 8, 2026 06:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff < 0) {
            document.getElementById('countdown-timer').innerText = "RIDE IS ACTIVE! 🏍";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('countdown-timer').innerText = `${days}d ${hours}h ${mins}m`;
    }

    updateCountdown();
    setInterval(updateCountdown, 60000); // update every minute
}

// Dom Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initMap();
    initChecklist();

    // Day Selection listeners
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const dayNum = parseInt(btn.dataset.day);
            selectDay(dayNum);

            // Add custom active styles for critical timeline buttons
            document.querySelectorAll('.day-btn').forEach(b => {
                b.classList.remove('critical-active');
            });
            if (btn.classList.contains('critical')) {
                btn.classList.add('critical-active');
            }
        });
    });

    // Checklist tab listeners
    document.querySelectorAll('.chk-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.chk-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderChecklist(tab.dataset.cat);
        });
    });

    // Reset Checklist Button
    document.getElementById('reset-checklist-btn').addEventListener('click', () => {
        if (confirm("Are you sure you want to reset your packing checklist?")) {
            localStorage.removeItem('ladakh_checklist');
            initChecklist();
        }
    });

    // Search bar for petrol directory
    document.getElementById('petrol-search').addEventListener('input', handleTableSearch);

    // Main directory tabs switcher
    document.querySelectorAll('.view-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchMainTab(btn.dataset.tab);
        });
    });

    // Initialize Default Day & Table views
    selectDay(1);
    renderPetrolPumpTable();
    switchMainTab('petrol');
    initInteractiveMapImage();
});

// Interactive zoom-and-pan for top route map
function initInteractiveMapImage() {
    const viewport = document.getElementById('map-viewport');
    const img = document.getElementById('interactive-route-map');
    const btnIn = document.getElementById('btn-zoom-in');
    const btnOut = document.getElementById('btn-zoom-out');
    const btnReset = document.getElementById('btn-zoom-reset');

    // fix by kamal start

    const mapImg = document.getElementById("interactive-route-map");

    let zoomLevel = 1;

    function activateInteractiveMode() {
        mapImg.classList.add("interacted");
    }

    document.getElementById("btn-zoom-in").addEventListener("click", () => {
        activateInteractiveMode();
    });

    document.getElementById("btn-zoom-out").addEventListener("click", () => {
        activateInteractiveMode();
    });

    document.getElementById("btn-zoom-reset").addEventListener("click", () => {
        /* optional: go back to cover mode */
        mapImg.classList.remove("interacted");
    });

    // fix by kamal end

    if (!viewport || !img) return;

    let zoom = 1;
    const minZoom = 1;
    const maxZoom = 4;
    const zoomStep = 0.5;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let translateX = 0;
    let translateY = 0;
    let currentX = 0;
    let currentY = 0;

    function updateTransform(animate = true) {
        img.style.transition = animate ? 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)' : 'none';
        if (zoom === 1) {
            translateX = 0;
            translateY = 0;
            currentX = 0;
            currentY = 0;
        } else {
            const maxOffsetW = Math.max(0, (img.clientWidth * zoom - viewport.clientWidth) / 2);
            const maxOffsetH = Math.max(0, (img.clientHeight * zoom - viewport.clientHeight) / 2);
            translateX = Math.max(-maxOffsetW, Math.min(maxOffsetW, translateX));
            translateY = Math.max(-maxOffsetH, Math.min(maxOffsetH, translateY));
            currentX = translateX;
            currentY = translateY;
        }
        img.style.transform = `translate(-50%, -50%) translate(${translateX}px, ${translateY}px) scale(${zoom})`;
    }

    viewport.addEventListener('dblclick', (e) => {
        if (zoom > 1) {
            zoom = 1;
            translateX = 0;
            translateY = 0;
        } else {
            zoom = 2.5;
            const rect = viewport.getBoundingClientRect();
            const clickX = e.clientX - rect.left - rect.width / 2;
            const clickY = e.clientY - rect.top - rect.height / 2;
            translateX = -clickX * (zoom - 1);
            translateY = -clickY * (zoom - 1);
        }
        updateTransform(true);
    });

    viewport.addEventListener('mousedown', (e) => {
        if (zoom === 1) return;
        isDragging = true;
        startX = e.clientX - currentX;
        startY = e.clientY - currentY;
        viewport.style.cursor = 'grabbing';
        e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        updateTransform(false);
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            currentX = translateX;
            currentY = translateY;
            viewport.style.cursor = 'grab';
            updateTransform(true);
        }
    });

    viewport.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            currentX = translateX;
            currentY = translateY;
            viewport.style.cursor = 'grab';
            updateTransform(true);
        }
    });

    // Touch support for dragging zoomed map on mobile
    let isTouchDragging = false;
    viewport.addEventListener('touchstart', (e) => {
        if (zoom === 1 || e.touches.length !== 1) return;
        isTouchDragging = true;
        startX = e.touches[0].clientX - currentX;
        startY = e.touches[0].clientY - currentY;
        e.preventDefault();
    }, { passive: false });

    viewport.addEventListener('touchmove', (e) => {
        if (!isTouchDragging || e.touches.length !== 1) return;
        translateX = e.touches[0].clientX - startX;
        translateY = e.touches[0].clientY - startY;
        updateTransform(false);
        e.preventDefault();
    }, { passive: false });

    viewport.addEventListener('touchend', () => {
        if (isTouchDragging) {
            isTouchDragging = false;
            currentX = translateX;
            currentY = translateY;
            updateTransform(true);
        }
    });

    btnIn.addEventListener('click', () => {
        if (zoom < maxZoom) {
            zoom += zoomStep;
            updateTransform(true);
        }
    });

    btnOut.addEventListener('click', () => {
        if (zoom > minZoom) {
            zoom -= zoomStep;
            updateTransform(true);
        }
    });

    btnReset.addEventListener('click', () => {
        zoom = 1;
        translateX = 0;
        translateY = 0;
        updateTransform(true);
    });
}