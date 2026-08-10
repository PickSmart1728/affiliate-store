const products = [
  {
    id: 1,
    name: "Laptop Backpack",
    category: "Bags & Travel",
    heroSlide: true,
    image: "https://m.media-amazon.com/images/I/51DVNSbWIRL._SX679_.jpg",
    gallery: [
      {
        type: "image",
        src: "https://m.media-amazon.com/images/I/51DVNSbWIRL._SX679_.jpg",
        alt: "Secure Laptop Backpack — front view"
      },
      {
        type: "image", src: "https://m.media-amazon.com/images/I/41x8MUfXfqL.jpg", alt: "Back view"
      },
      {
        type: "image", src: "https://m.media-amazon.com/images/I/4175ow1XGBL.jpg", alt: "Side view"
      },

      // Paste more image or video URLs below in the chat and we'll add them here.
      // Example:
      // { type: "image", src: "https://...", alt: "Side view" },
      // { type: "video", src: "https://www.youtube.com/embed/VIDEO_ID", alt: "Product demo" },
    ],
    description: "A durable and secure laptop backpack designed for everyday commutes and travel. Features anti-theft hidden pockets, padded laptop compartment, USB charging port, and water-resistant fabric — perfect for professionals and students on the go.",
    affiliate: "https://link.amazon/B08gSAHz4",
    specs: [
      { label: "Laptop Fit", value: "Up to 15.6 inch" },
      { label: "Pockets", value: "Anti-theft hidden pocket" },
      { label: "Charging", value: "Built-in USB charging port" },
      { label: "Material", value: "Water-resistant fabric" },
      { label: "Ideal For", value: "Travel, office & college" },
    ]
  },
  {
    id: 2,
    name: "Clip-On Reading Light",
    category: "Books & Reading",
    heroSlide: true,
    image: "https://m.media-amazon.com/images/I/61KDpa+vM6L._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61KDpa+vM6L._SL1500_.jpg", alt: "Clip-On Reading Light — main view" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71AR58GLKnL._SL1500_.jpg", alt: "Clip-On Reading Light — in use" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71g41p-Nf1L._SL1500_.jpg", alt: "Clip-On Reading Light — detail" },
    ],
    description: "A flexible clip-on reading light perfect for books, e-readers, and tablets. Lightweight and portable with adjustable brightness levels, making it ideal for late-night reading without disturbing others.",
    affiliate: "https://link.amazon/B0j9cEYR8",
    specs: [
      { label: "Mounting", value: "Clip-on, hands-free" },
      { label: "Brightness", value: "Adjustable levels" },
      { label: "Power", value: "USB rechargeable / battery" },
      { label: "Neck", value: "Flexible gooseneck" },
      { label: "Ideal For", value: "Books, e-readers, tablets" },
    ]
  },
  {
    id: 3,
    name: "Wireless Gaming Mouse",
    category: "Computer Accessories",
    heroSlide: true,
    featured: true,
    image: "https://m.media-amazon.com/images/I/51TlcbLtEwL._SL1024_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/51TlcbLtEwL._SL1024_.jpg", alt: "Wireless Gaming Mouse — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/51NLfQ07DPL._SL1024_.jpg", alt: "Wireless Gaming Mouse — side profile" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61ySAbSrmWL._SL1024_.jpg", alt: "Wireless Gaming Mouse — RGB lighting" },
    ],
    description: "High-performance wireless gaming mouse with ultra-low latency, customizable RGB lighting, and programmable buttons. Ergonomic design ensures comfort during long gaming sessions.",
    affiliate: "https://link.amazon/B00fVxBw2",
    specs: [
      { label: "Connectivity", value: "2.4GHz Wireless / Bluetooth" },
      { label: "DPI", value: "Up to 16,000 adjustable" },
      { label: "Buttons", value: "6 Programmable" },
      { label: "Lighting", value: "Customizable RGB" },
    ]
  },
  {
    id: 4,
    name: "Panda Glow Lamp",
    category: "Decor & Shine",
    heroSlide: true,
    featured: true,
    image: "https://m.media-amazon.com/images/I/61lza9VEV9L._SL1254_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61lza9VEV9L._SL1254_.jpg", alt: "Panda Glow Lamp — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71nr9at85ZL._SL1254_.jpg", alt: "Panda Glow Lamp — lifestyle" },
      { type: "image", src: "https://m.media-amazon.com/images/I/717wEAaaqvL._SL1254_.jpg", alt: "Panda Glow Lamp — close-up" },
    ],
    description: "An adorable, soft silicone panda lamp that emits a warm, soothing glow. Perfect as a night light for kids' rooms or a cute desk accessory.",
    affiliate: "https://link.amazon/B06xtc7km",
    specs: [
      { label: "Material", value: "BPA-free Silicone" },
      { label: "Power", value: "USB Rechargeable" },
      { label: "Lighting", value: "Warm White LED" },
      { label: "Control", value: "Tap to dim" },
    ]
  },
  {
    id: 5,
    name: "Kitchen Magnet Set",
    category: "Decor & Shine",
    featured: false,
    image: "https://m.media-amazon.com/images/I/71jcYuYYcRL._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/71jcYuYYcRL._SL1500_.jpg", alt: "Kitchen Magnet Set — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71+6Nc3yJkL._SL1500_.jpg", alt: "Kitchen Magnet Set — in use" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71mr99GjJUL._SL1500_.jpg", alt: "Kitchen Magnet Set — variety" },
    ],
    description: "A fun and quirky set of decorative magnets for your fridge or magnetic board. Strong enough to hold up photos, notes, and recipes while adding a splash of personality to your kitchen.",
    affiliate: "https://link.amazon/B01oU0mF6",
    specs: [
      { label: "Quantity", value: "Set of assorted magnets" },
      { label: "Strength", value: "Strong neodymium base" },
      { label: "Use", value: "Fridge, whiteboards, lockers" },
    ]
  },
  {
    id: 6,
    name: "Eyewear Organizer Case",
    category: "Fashion Accessories",
    heroSlide: true,
    featured: true,
    image: "https://m.media-amazon.com/images/I/71u+teVfA-L._SX679_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/71u+teVfA-L._SX679_.jpg", alt: "Eyewear Organizer Case — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71voAANhVdL._SX679_.jpg", alt: "Eyewear Organizer Case — open" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71gu7xjczoL._SX679_.jpg", alt: "Eyewear Organizer Case — folded" },
    ],
    description: "Keep your sunglasses and reading glasses safe and organized with this multi-slot foldable eyewear case. Perfect for travel and space-saving storage.",
    affiliate: "https://link.amazon/B05iXgGWE",
    specs: [
      { label: "Material", value: "PU Leather exterior" },
      { label: "Capacity", value: "Multiple slots" },
      { label: "Design", value: "Foldable, hanging loop" },
    ]
  },
  {
    id: 7,
    name: "Mini Storage Trolley",
    category: "Fashion Accessories",
    featured: false,
    image: "https://m.media-amazon.com/images/I/71jQer0Dc4L._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/71jQer0Dc4L._SL1500_.jpg", alt: "Mini Storage Trolley — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/413CfBQx5rL._SL1000_.jpg", alt: "Mini Storage Trolley — side" },
      { type: "image", src: "https://m.media-amazon.com/images/I/717Q2sGIR2L._SL1500_.jpg", alt: "Mini Storage Trolley — detail" },
    ],
    description: "A cute and functional mini storage trolley. Great for organizing small fashion accessories, jewelry, or desk items.",
    affiliate: "https://link.amazon/B01YJSyWv",
    specs: [
      { label: "Type", value: "Desktop Organizer" },
      { label: "Feature", value: "Rolling wheels" },
    ]
  },
  {
    id: 8,
    name: "Garment Steamer",
    category: "Home Essentials",
    heroSlide: true,
    featured: true,
    image: "https://m.media-amazon.com/images/I/51X1+BH-HyL._SL1024_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/51X1+BH-HyL._SL1024_.jpg", alt: "Travel Garment Steamer — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/515ERr1YppL.jpg", alt: "Travel Garment Steamer — in use" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61eOnx07dhL.jpg", alt: "Travel Garment Steamer — features" },
    ],
    description: "Compact and powerful portable garment steamer. Quickly removes wrinkles from clothes, making it a must-have for home and travel.",
    affiliate: "https://link.amazon/B0cusVnrN",
    specs: [
      { label: "Type", value: "Handheld Steamer" },
      { label: "Warm-up", value: "Fast heating" },
      { label: "Use", value: "Home & Travel" },
    ]
  },
  {
    id: 9,
    name: "Appliance Roller Pads",
    category: "Home Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/71c2YlMZg6L._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/71c2YlMZg6L._SL1500_.jpg", alt: "Appliance Roller Pads — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61xV8VR1EyL._SL1500_.jpg", alt: "Appliance Roller Pads — under washer" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61yc7m-KicL._SL1500_.jpg", alt: "Appliance Roller Pads — dimensions" },
    ],
    description: "Heavy-duty adjustable appliance rollers with brakes. Easily move heavy furniture, washing machines, or refrigerators for cleaning.",
    affiliate: "https://link.amazon/B03acnkUU",
    specs: [
      { label: "Capacity", value: "Heavy duty support" },
      { label: "Feature", value: "Locking brakes" },
      { label: "Adjustable", value: "Extends to fit" },
    ]
  },
  {
    id: 10,
    name: "Astronaut Galaxy Projector",
    category: "Kids & Toys",
    heroSlide: true,
    featured: true,
    image: "https://m.media-amazon.com/images/I/71R2SxbDV5L._SL1254_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/71R2SxbDV5L._SL1254_.jpg", alt: "Astronaut Galaxy Projector — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71OSgZ0Gy1L._SL1254_.jpg", alt: "Astronaut Galaxy Projector — projection" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71EEw-w89PL._SL1254_.jpg", alt: "Astronaut Galaxy Projector — remote" },
    ],
    description: "Transform any room into a starry galaxy with this astronaut-shaped night light projector. Features a 360-degree adjustable head and remote control.",
    affiliate: "https://link.amazon/B0gHX99OR",
    specs: [
      { label: "Projection", value: "Nebula & Stars" },
      { label: "Control", value: "Remote included" },
      { label: "Design", value: "Magnetic astronaut head" },
    ]
  },
  {
    id: 11,
    name: "Kids Learning Phone",
    category: "Kids & Toys",
    featured: false,
    image: "https://m.media-amazon.com/images/I/61MenUa6psL._SL1024_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61MenUa6psL._SL1024_.jpg", alt: "Kids Learning Phone — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61REPJkS0tL._SL1500_.jpg", alt: "Kids Learning Phone — features" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71UJ+wN62ZL._SL1024_.jpg", alt: "Kids Learning Phone — lifestyle" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71LmYl8+KBL._SL1500_.jpg", alt: "Kids Learning Phone — side" },
    ],
    description: "An interactive educational toy phone for toddlers. Helps with early learning, numbers, and music, providing screen-free entertainment.",
    affiliate: "https://link.amazon/B09xWsmDB",
    specs: [
      { label: "Age Group", value: "Toddlers" },
      { label: "Features", value: "Music, Numbers, Lights" },
      { label: "Power", value: "Battery operated" },
    ]
  },
  {
    id: 12,
    name: "Cutlery Set",
    category: "Kitchen Essentials",
    heroSlide: true,
    featured: true,
    image: "https://m.media-amazon.com/images/I/61FTVXzjP6L._SL1098_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61FTVXzjP6L._SL1098_.jpg", alt: "Cutlery Set — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61gr+7WH5eL._SL1090_.jpg", alt: "Cutlery Set — in box" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61imn+NL5bS._SL1100_.jpg", alt: "Cutlery Set — lifestyle" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61VKwjPMP+S._SL1000_.jpg", alt: "Cutlery Set — components" },
      { type: "image", src: "https://m.media-amazon.com/images/I/612BK4HT48S._SL1000_.jpg", alt: "Cutlery Set — detail" },
    ],
    description: "A compact, eco-friendly cutlery set complete with a carrying case. Perfect for camping, office lunches, and reducing single-use plastics.",
    affiliate: "https://link.amazon/B00u4EGJ0",
    specs: [
      { label: "Material", value: "Stainless Steel / Wheat Straw" },
      { label: "Includes", value: "Spoon, Fork, Knife, Case" },
      { label: "Design", value: "Portable and reusable" },
    ]
  },
  {
    id: 13,
    name: "Snack Finger Tongs",
    category: "Kitchen Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/6145zhuly2L._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/6145zhuly2L._SL1500_.jpg", alt: "Snack Finger Tongs — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61HAky92OBL._SL1500_.jpg", alt: "Snack Finger Tongs — in use" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71SZ9+jkGIL._SL1000_.jpg", alt: "Snack Finger Tongs — colors" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71ShtiF17aL._SL1500_.jpg", alt: "Snack Finger Tongs — detail" },
    ],
    description: "Keep your fingers clean while eating snacks, chips, or gaming! These clever finger tongs are a fun and practical addition to any snack time.",
    affiliate: "https://link.amazon/B0041qnw8",
    specs: [
      { label: "Material", value: "Food-grade plastic" },
      { label: "Feature", value: "Keeps hands clean" },
      { label: "Use", value: "Gaming, reading, working" },
    ]
  },
  {
    id: 14,
    name: "Electric Lunch Box",
    category: "Kitchen Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/51ji4zqLlJL._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/51ji4zqLlJL._SL1500_.jpg", alt: "Electric Lunch Box — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61wXobm3G3L._SL1500_.jpg", alt: "Electric Lunch Box — open" },
      { type: "image", src: "https://m.media-amazon.com/images/I/51FvTFBHPDL._SL1500_.jpg", alt: "Electric Lunch Box — features" },
    ],
    description: "Enjoy hot meals anywhere with this portable electric heating lunch box. Plugs right into your car or office outlet to warm up your food perfectly.",
    affiliate: "https://link.amazon/B0fkFemp2",
    specs: [
      { label: "Power", value: "110V/12V/24V compatible" },
      { label: "Material", value: "Stainless steel interior" },
      { label: "Feature", value: "Fast heating system" },
    ]
  },

  {
    id: 16,
    name: "Selfie Stick Phone Case",
    category: "Mobile Accessories",
    heroSlide: true,
    featured: true,
    image: "https://m.media-amazon.com/images/I/917YEWgTzDL._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/917YEWgTzDL._SL1500_.jpg", alt: "Selfie Stick Phone Case — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/81Geh1h8L1L._SL1500_.jpg", alt: "Selfie Stick Phone Case — extended" },
      { type: "image", src: "https://m.media-amazon.com/images/I/81C5DD4HJjL._SL1500_.jpg", alt: "Selfie Stick Phone Case — back" },
    ],
    description: "An innovative phone case with a built-in selfie stick. Never worry about forgetting your selfie stick again!",
    affiliate: "https://link.amazon/B01Ln6pb9",
    specs: [
      { label: "Material", value: "Durable TPU/PC" },
      { label: "Extension", value: "Up to 28 inches" },
      { label: "Compatibility", value: "Select iPhone models" },
    ]
  },
  {
    id: 17,
    name: "Desk Organizer",
    category: "Office & Stationery",
    heroSlide: true,
    featured: true,
    image: "https://m.media-amazon.com/images/I/71GlziE2jdL._SL1280_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/71GlziE2jdL._SL1280_.jpg", alt: "Desk Organizer — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61EKCHXSeKL._SL1280_.jpg", alt: "Desk Organizer — side" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71myFeVfh4L._SL1280_.jpg", alt: "Desk Organizer — detail" },
    ],
    description: "Keep your workspace tidy with this sleek and modern desk organizer. Perfect for pens, notes, and small office supplies.",
    affiliate: "https://link.amazon/B09LAAFnv",
    specs: [
      { label: "Material", value: "Premium Acrylic/Wood" },
      { label: "Compartments", value: "Multiple sections" },
      { label: "Design", value: "Minimalist" },
    ]
  },
  {
    id: 18,
    name: "Mini Pocket Printer",
    category: "Kids & Toys",
    featured: false,
    image: "https://m.media-amazon.com/images/I/61s951fyMTL._SL1024_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61s951fyMTL._SL1024_.jpg", alt: "Mini Pocket Printer — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71yuJfUTu7L._SL1024_.jpg", alt: "Mini Pocket Printer — in use" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61tCMXUqLtL._SL1200_.jpg", alt: "Mini Pocket Printer — printing" },
    ],
    description: "Print photos, labels, and notes on the go with this compact wireless pocket printer. No ink required!",
    affiliate: "https://link.amazon/B07NxTZ5t",
    specs: [
      { label: "Technology", value: "Thermal printing" },
      { label: "Connectivity", value: "Bluetooth" },
      { label: "Compatibility", value: "iOS & Android" },
    ]
  },
  {
    id: 19,
    name: "Tech Pouch Organizer",
    category: "Tech Accessories",
    heroSlide: true,
    featured: true,
    image: "https://m.media-amazon.com/images/I/814GTqb4fEL._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/814GTqb4fEL._SL1500_.jpg", alt: "Tech Pouch Organizer — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71aKvltYMjL._SL1297_.jpg", alt: "Tech Pouch Organizer — open" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71Mcs25-EQL._SL1254_.jpg", alt: "Tech Pouch Organizer — detail" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71wJsNTSYpL._SL1254_.jpg", alt: "Tech Pouch Organizer — extra" },
    ],
    description: "A rugged and spacious organizer for all your tech accessories. Protects cables, chargers, and gadgets while traveling.",
    affiliate: "https://link.amazon/B0gId3lJJ",
    specs: [
      { label: "Material", value: "Water-resistant exterior" },
      { label: "Interior", value: "Customizable dividers" },
      { label: "Protection", value: "Hard shell" },
    ]
  },
  {
    id: 20,
    name: "7-in-1 Tech Cleaner",
    category: "Tech Accessories",
    featured: false,
    image: "https://m.media-amazon.com/images/I/61e7QPVSXBL._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61e7QPVSXBL._SL1500_.jpg", alt: "7-in-1 Tech Cleaner — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71omsnmyh4L._SL1500_.jpg", alt: "7-in-1 Tech Cleaner — tools" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61sYcR6BS2L._SL1500_.jpg", alt: "7-in-1 Tech Cleaner — in use" },
    ],
    description: "Keep your devices spotless with this comprehensive 7-in-1 cleaning kit. Perfect for keyboards, screens, and earbuds.",
    affiliate: "https://link.amazon/B0ePSayUD",
    specs: [
      { label: "Includes", value: "Brush, screen wipe, key puller" },
      { label: "Design", value: "Compact and portable" },
      { label: "Use", value: "Laptops, phones, earphones" },
    ]
  },
  // ── Kitchen Essentials ──────────────────────────────────────────────────────
  {
    id: 21,
    name: "Portable Smoothie Blender",
    category: "Kitchen Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/71bAiszv2JL._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/71bAiszv2JL._SL1500_.jpg", alt: "Portable Smoothie Blender — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71nLBO81E5L._SL1500_.jpg", alt: "Portable Smoothie Blender — in use" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71NEiVKXJfL._SL1500_.jpg", alt: "Portable Smoothie Blender — detail" },
    ],
    description: "Blend fresh smoothies, shakes, and juices on the go with this compact portable blender. USB rechargeable and travel-friendly, it's perfect for the gym, office, or outdoor adventures.",
    affiliate: "https://link.amazon/B0eGP7e4M",
    specs: [
      { label: "Capacity", value: "Personal size bottle" },
      { label: "Power", value: "USB rechargeable" },
      { label: "Blades", value: "Stainless steel" },
      { label: "Ideal For", value: "Gym, travel & office" },
    ]
  },
  {
    id: 22,
    name: "Manual Vegetable Chopper",
    category: "Kitchen Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/81RmRbFp85L._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/81RmRbFp85L._SL1500_.jpg", alt: "Manual Vegetable Chopper — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61CdFaHv2CL._SL1500_.jpg", alt: "Manual Vegetable Chopper — in use" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71f8HIsXfmL._SL1500_.jpg", alt: "Manual Vegetable Chopper — detail" },
      { type: "image", src: "https://m.media-amazon.com/images/I/712JxCHh2LL._SL1500_.jpg", alt: "Manual Vegetable Chopper — components" },
    ],
    description: "Chop onions, garlic, herbs, and vegetables in seconds with this easy-to-use manual chopper. No electricity needed — just pull the cord and get perfectly chopped veggies every time.",
    affiliate: "https://link.amazon/B0eUDONxF",
    specs: [
      { label: "Operation", value: "Manual pull-cord" },
      { label: "Material", value: "BPA-free food-grade plastic" },
      { label: "Blades", value: "Stainless steel" },
      { label: "Dishwasher Safe", value: "Yes" },
    ]
  },
  {
    id: 23,
    name: "Masala Chai Maker",
    category: "Kitchen Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/71Bck1aaujL._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/71Bck1aaujL._SL1500_.jpg", alt: "Masala Chai Maker — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/712cXRPMouL._SL1500_.jpg", alt: "Masala Chai Maker — brewing" },
      { type: "image", src: "https://m.media-amazon.com/images/I/714jCfnVRRL._SL1500_.jpg", alt: "Masala Chai Maker — detail" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71OmUojwYuL._SL1500_.jpg", alt: "Masala Chai Maker — lifestyle" },
    ],
    description: "Brew the perfect cup of masala chai at home with this dedicated electric chai maker. Boil, brew, and froth milk effortlessly for an authentic tea-stall experience in your own kitchen.",
    affiliate: "https://link.amazon/B07rJlojn",
    specs: [
      { label: "Capacity", value: "Multiple cups per brew" },
      { label: "Function", value: "Boil, brew & froth" },
      { label: "Power", value: "Electric" },
      { label: "Material", value: "Food-grade stainless steel" },
    ]
  },
  {
    id: 24,
    name: "3D Animal Water Bottle",
    category: "Kitchen Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/61nkCtMxV7L._SL1332_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61nkCtMxV7L._SL1332_.jpg", alt: "3D Animal Water Bottle — main" },
    ],
    description: "Stay hydrated in style with this adorable 3D animal-shaped water bottle. Great for kids and adults alike, it makes drinking water fun and keeps beverages fresh for hours.",
    affiliate: "https://link.amazon/B065XU8zy",
    specs: [
      { label: "Design", value: "3D animal shape" },
      { label: "Material", value: "BPA-free plastic" },
      { label: "Ideal For", value: "Kids & adults" },
      { label: "Feature", value: "Leak-proof lid" },
    ]
  },
  // ── Home Essentials ─────────────────────────────────────────────────────────
  {
    id: 25,
    name: "Portable Air Cooler",
    category: "Home Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/61z6QTwsnCL._SL1080_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61z6QTwsnCL._SL1080_.jpg", alt: "Portable Air Cooler — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71uoVwNA7uL._SL1500_.jpg", alt: "Portable Air Cooler — side view" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71NA4EJxotL._SL1500_.jpg", alt: "Portable Air Cooler — features" },
    ],
    description: "Beat the heat with this compact portable air cooler. Combines cooling, humidifying, and purifying functions in one device. USB-powered and whisper-quiet — perfect for your desk or bedroom.",
    affiliate: "https://link.amazon/B06tzBJhG",
    specs: [
      { label: "Function", value: "Cool, humidify & purify" },
      { label: "Power", value: "USB powered" },
      { label: "Noise Level", value: "Ultra-quiet operation" },
      { label: "Ideal For", value: "Desk, bedroom, travel" },
    ]
  },
  {
    id: 26,
    name: "Penguin Wall Organizer",
    category: "Home Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/61p8R7iB0ML._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61p8R7iB0ML._SL1500_.jpg", alt: "Penguin Wall Organizer — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61RFfK-u-UL._SL1500_.jpg", alt: "Penguin Wall Organizer — mounted" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61h64UjGzIL._SL1500_.jpg", alt: "Penguin Wall Organizer — detail" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61k2hAeAyfL._SL1500_.jpg", alt: "Penguin Wall Organizer — lifestyle" },
    ],
    description: "Add a quirky touch to your space with this adorable penguin-shaped wall organizer. Perfect for storing keys, mail, sunglasses, and small essentials by your front door or in any room.",
    affiliate: "https://link.amazon/B04dUBj3h",
    specs: [
      { label: "Design", value: "Cute penguin shape" },
      { label: "Mounting", value: "Wall-mounted" },
      { label: "Compartments", value: "Multiple pockets/hooks" },
      { label: "Material", value: "Durable resin/plastic" },
    ]
  },
  {
    id: 27,
    name: "Smart Curtain Robot",
    category: "Home Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/71VDLHHfMkL._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/71VDLHHfMkL._SL1500_.jpg", alt: "Smart Curtain Robot — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71fSnKQehaL._SL1500_.jpg", alt: "Smart Curtain Robot — on rail" },
      { type: "image", src: "https://m.media-amazon.com/images/I/715R5J4nh+L._SL1500_.jpg", alt: "Smart Curtain Robot — detail" },
    ],
    description: "Automate your curtains with this smart curtain robot. Clips onto any curtain rod and can be controlled via app or voice commands. Schedule your curtains to open and close automatically.",
    affiliate: "https://link.amazon/B06ZFWVc3",
    specs: [
      { label: "Control", value: "App & voice control" },
      { label: "Compatibility", value: "Most curtain rods" },
      { label: "Power", value: "Rechargeable battery" },
      { label: "Feature", value: "Programmable scheduling" },
    ]
  },
  {
    id: 28,
    name: "Foldable Laundry Basket",
    category: "Home Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/71-sLX5QrEL._SL1100_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/71-sLX5QrEL._SL1100_.jpg", alt: "Foldable Laundry Basket — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71eWDqYKisL._SL1100_.jpg", alt: "Foldable Laundry Basket — folded" },
      { type: "image", src: "https://m.media-amazon.com/images/I/713DsEddGHL._SL1500_.jpg", alt: "Foldable Laundry Basket — in use" },
    ],
    description: "A large-capacity foldable laundry basket that collapses flat for easy storage. Lightweight yet sturdy with handles for easy carrying — an essential for any bedroom, dorm, or laundry room.",
    affiliate: "https://link.amazon/B08mdjlxU",
    specs: [
      { label: "Capacity", value: "Large size" },
      { label: "Feature", value: "Foldable & collapsible" },
      { label: "Handles", value: "Reinforced carry handles" },
      { label: "Material", value: "Durable fabric" },
    ]
  },
  {
    id: 29,
    name: "Adjustable Shoe Organizer",
    category: "Home Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/61r5mz6oZWS._SL1100_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61r5mz6oZWS._SL1100_.jpg", alt: "Adjustable Shoe Organizer — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/517rXaiQJdL.jpg", alt: "Adjustable Shoe Organizer — side view" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71hqkP8nltL._SL1500_.jpg", alt: "Adjustable Shoe Organizer — in use" },
    ],
    description: "Keep your footwear neatly arranged with this adjustable shoe organizer rack. Expands to hold multiple pairs and works for all shoe sizes — ideal for closets, entryways, and small spaces.",
    affiliate: "https://link.amazon/B04zRqQ3j",
    specs: [
      { label: "Adjustable", value: "Expandable width" },
      { label: "Capacity", value: "Multiple pairs" },
      { label: "Material", value: "Sturdy steel frame" },
      { label: "Ideal For", value: "Closets & entryways" },
    ]
  },
  // ── Kids & Toys ─────────────────────────────────────────────────────────────
  {
    id: 30,
    name: "Kids ATM Piggy Bank",
    category: "Kids & Toys",
    featured: false,
    image: "https://m.media-amazon.com/images/I/81y-giXbx7L._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/81y-giXbx7L._SL1500_.jpg", alt: "Kids ATM Piggy Bank — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/81jwNTJ05GL._SL1500_.jpg", alt: "Kids ATM Piggy Bank — keypad" },
      { type: "image", src: "https://m.media-amazon.com/images/I/81OvIRlAzEL._SL1500_.jpg", alt: "Kids ATM Piggy Bank — features" },
      { type: "image", src: "https://m.media-amazon.com/images/I/81XSk7fjfpL._SL1500_.jpg", alt: "Kids ATM Piggy Bank — lifestyle" },
    ],
    description: "Teach kids about saving money in a fun way with this interactive ATM-style piggy bank. Features a PIN code, digital balance display, and card slot — just like a real bank machine!",
    affiliate: "https://link.amazon/B04YFHq81",
    specs: [
      { label: "Feature", value: "PIN code security" },
      { label: "Display", value: "Digital balance screen" },
      { label: "Power", value: "Battery operated" },
      { label: "Age Group", value: "3+ years" },
    ]
  },
  // ── Health, Household & Personal Care ───────────────────────────────────────
  {
    id: 31,
    name: "Toilet Gel Stamp",
    category: "Health, Household & Personal Care",
    heroSlide: true,
    featured: false,
    image: "https://m.media-amazon.com/images/I/51FvM-YlylL.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/51FvM-YlylL.jpg", alt: "Toilet Gel Stamp — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/3134ewGa3hL.jpg", alt: "Toilet Gel Stamp — application" },
      { type: "image", src: "https://m.media-amazon.com/images/I/51k7vnMNsTL.jpg", alt: "Toilet Gel Stamp — in toilet" },
    ],
    description: "Keep your toilet fresh and clean with this convenient gel stamp cleaner. Simply stamp the gel inside the bowl for long-lasting fragrance and effective cleaning with every flush.",
    affiliate: "https://link.amazon/B00x3FEgD",
    specs: [
      { label: "Application", value: "Stamp-on gel" },
      { label: "Duration", value: "Lasts up to 4 weeks" },
      { label: "Function", value: "Clean & deodorize" },
      { label: "Use", value: "Toilet bowl" },
    ]
  },
  {
    id: 32,
    name: "Disposable Shoe Covers",
    category: "Health, Household & Personal Care",
    featured: false,
    image: "https://m.media-amazon.com/images/I/51gsfi2gjgL.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/51gsfi2gjgL.jpg", alt: "Disposable Shoe Covers — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61aSl0vFQXL.jpg", alt: "Disposable Shoe Covers — in use" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71AFc-XSrWL._SL1500_.jpg", alt: "Disposable Shoe Covers — pack" },
    ],
    description: "Protect floors and maintain hygiene with these waterproof disposable shoe covers. Non-slip sole ensures safety on smooth surfaces — perfect for home, hospitals, labs, and construction sites.",
    affiliate: "https://link.amazon/B0cJF2EIW",
    specs: [
      { label: "Material", value: "Non-woven / PE waterproof" },
      { label: "Sole", value: "Non-slip" },
      { label: "Size", value: "One size fits most" },
      { label: "Use", value: "Home, medical & industrial" },
    ]
  },
  {
    id: 33,
    name: "Cartoon Kids Toothbrush",
    category: "Health, Household & Personal Care",
    featured: false,
    image: "https://m.media-amazon.com/images/I/61rdRSWVLtL._SL1254_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61rdRSWVLtL._SL1254_.jpg", alt: "Cartoon Kids Toothbrush — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71h4At7wmXL._SL1254_.jpg", alt: "Cartoon Kids Toothbrush — colors" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71hNdvp0miL._SL1254_.jpg", alt: "Cartoon Kids Toothbrush — detail" },
    ],
    description: "Make brushing fun with these adorable cartoon character toothbrushes for kids. Soft bristles protect delicate gums while the fun design encourages good oral hygiene habits from an early age.",
    affiliate: "https://link.amazon/B02PXhdFU",
    specs: [
      { label: "Bristles", value: "Extra soft" },
      { label: "Design", value: "Fun cartoon characters" },
      { label: "Age Group", value: "Children 3–12 years" },
      { label: "Pack", value: "Set of multiple brushes" },
    ]
  },
  {
    id: 34,
    name: "2 in 1 Ice Cube Water Bottle",
    category: "Kitchen Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/61NQt2hza8L._SL1254_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61NQt2hza8L._SL1254_.jpg", alt: "2 in 1 Ice Cube Water Bottle — main view" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61jbd8pMUmL._SL1254_.jpg", alt: "2 in 1 Ice Cube Water Bottle — ice tray view" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61OqO19P0CL._SL1254_.jpg", alt: "2 in 1 Ice Cube Water Bottle — in use" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71LtvtQblbL._SL1254_.jpg", alt: "2 in 1 Ice Cube Water Bottle — detail" },
    ],
    description: "The ultimate 2-in-1 water bottle with a built-in ice cube tray — freeze water directly in the bottle lid and enjoy chilled drinks anytime, anywhere. No more hunting for ice trays or separate containers. Perfect for outdoor adventures, gym sessions, and everyday hydration.",
    affiliate: "https://link.amazon/B0f5HtfQj",
    specs: [
      { label: "Design", value: "2-in-1 bottle + ice tray" },
      { label: "Function", value: "Built-in ice cube maker" },
      { label: "Ideal For", value: "Gym, outdoors & daily use" },
      { label: "Material", value: "Food-safe BPA-free plastic" },
      { label: "Convenience", value: "No separate ice tray needed" },
    ]
  },
  {
    id: 35,
    name: "Transparent Wireless Mouse",
    category: "Tech Accessories",
    featured: false,
    image: "https://m.media-amazon.com/images/I/61eiM4vykhL._SL1200_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61eiM4vykhL._SL1200_.jpg", alt: "Transparent Wireless Mouse — main view" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61+WppxOpdL.jpg", alt: "Transparent Wireless Mouse — top view" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71oUFlTW3UL._SL1200_.jpg", alt: "Transparent Wireless Mouse — side view" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61jUzTfXiEL._SL1200_.jpg", alt: "Transparent Wireless Mouse — feature view" },
    ],
    description: "Sleek and modern transparent wireless mouse featuring quiet clicks, adjustable DPI settings, and dual-mode Bluetooth & 2.4GHz wireless connectivity. The unique clear shell showcases the internal components and dynamic RGB lighting, making it a stunning addition to any workspace or gaming setup.",
    affiliate: "https://link.amazon/B02t4ud7K",
    specs: [
      { label: "Connectivity", value: "Bluetooth 5.0 / 2.4GHz Wireless" },
      { label: "Charging", value: "Type-C Rechargeable" },
      { label: "DPI", value: "800 - 1200 - 1600 - 2400 Adjustable" },
      { label: "Features", value: "Dynamic RGB Backlight, Silent Clicks, Transparent Shell" },
      { label: "Compatibility", value: "Windows, macOS, iPadOS, Android" },
    ]
  },
  {
    id: 36,
    name: "8-in-1 Laptop Hub",
    category: "Tech Accessories",
    featured: false,
    image: "https://m.media-amazon.com/images/I/71LWYz3q5PL._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/71LWYz3q5PL._SL1500_.jpg", alt: "8-in-1 Laptop Hub — ports" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71O4ut-u7DL._SL1500_.jpg", alt: "8-in-1 Laptop Hub — in use" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71bzJSI78OL._SL1500_.jpg", alt: "8-in-1 Laptop Hub — detail" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71+UIkyFgpL._SL1500_.jpg", alt: "8-in-1 Laptop Hub — packaging" },
    ],
    description: "Versatile 8-in-1 USB-C hub designed to expand your laptop's connectivity. Features multiple USB ports, an HDMI output supporting 4K resolution, SD/microSD card readers, and USB-C Power Delivery charging. Perfect for expanding your workstation at home, in the office, or on the go.",
    affiliate: "https://link.amazon/B05gi3UID",
    specs: [
      { label: "Ports", value: "1x HDMI (4K @ 30Hz), 1x USB-C PD, 3x USB 3.0, 1x USB-C Data, 1x SD, 1x TF" },
      { label: "Power Delivery", value: "Supports up to 100W PD pass-through" },
      { label: "Material", value: "Premium Aluminum Alloy casing" },
      { label: "Compatibility", value: "MacBook, iPad Pro, Chromebook, and other Type-C devices" },
      { label: "Plug & Play", value: "No drivers required" },
    ]
  },
  {
    id: 37,
    name: "Rotating Food Dispenser",
    category: "Kitchen Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/61WTWY1nrdL.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61WTWY1nrdL.jpg", alt: "Rotating Food Dispenser — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/612g89exTGL._SL1080_.jpg", alt: "Rotating Food Dispenser — details" },
      { type: "image", src: "https://m.media-amazon.com/images/I/712KhAVABvL._SL1413_.jpg", alt: "Rotating Food Dispenser — features" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61NxpT6QFNL.jpg", alt: "Rotating Food Dispenser — storage" },
    ],
    description: "A convenient 360-degree rotating dry food and cereal dispenser with multiple compartments. Designed to keep your grains, rice, beans, and cereal organized, fresh, and easy to dispense with a simple button press. Clear panels allow you to monitor food levels at a glance.",
    affiliate: "https://link.amazon/B02lXxznz",
    specs: [
      { label: "Rotation", value: "360-degree rotating base" },
      { label: "Compartments", value: "6 independent storage sections" },
      { label: "Dispensing", value: "One-button press design" },
      { label: "Material", value: "BPA-free food-grade PP plastic" },
      { label: "Ideal For", value: "Rice, grains, beans, cereal, small nuts" },
    ]
  },
  {
    id: 38,
    name: "Automatic Jar Opener",
    category: "Kitchen Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/6186OG+Xc+L._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/6186OG+Xc+L._SL1500_.jpg", alt: "Automatic Jar Opener — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71yCj08MuiL._SL1500_.jpg", alt: "Automatic Jar Opener — in use" },
      { type: "image", src: "https://m.media-amazon.com/images/I/615HdCtotDL._SL1500_.jpg", alt: "Automatic Jar Opener — features" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61H8KSzOimL._SL1500_.jpg", alt: "Automatic Jar Opener — design" },
    ],
    description: "Hands-free automatic jar opener that opens stubborn jar lids with a single touch. Perfect for seniors, individuals with arthritis, or anyone looking for a convenient kitchen helper. Fits most standard jar sizes and grips tightly to twist open effortlessly.",
    affiliate: "https://link.amazon/B0gOFZrZ3",
    specs: [
      { label: "Operation", value: "One-touch automatic hands-free" },
      { label: "Power", value: "2x AA Batteries (not included)" },
      { label: "Size Compatibility", value: "Fits jars of various shapes and sizes" },
      { label: "Ideal For", value: "Seniors, arthritis patients, home chefs" },
      { label: "Grip Material", value: "Slip-resistant durable grip" },
    ]
  },
  {
    id: 39,
    name: "6-in-1 Salad Spinner",
    category: "Kitchen Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/613u7E68+eL._SL1024_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/613u7E68+eL._SL1024_.jpg", alt: "6-in-1 Salad Spinner — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61-YeaosWoL._SL1122_.jpg", alt: "6-in-1 Salad Spinner — components" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61SE5TZA-uL._SL1021_.jpg", alt: "6-in-1 Salad Spinner — in use" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71Z4q28cZvL._SL1500_.jpg", alt: "6-in-1 Salad Spinner — detail" },
    ],
    description: "Multifunctional 6-in-1 salad spinner, chopper, slicer, and grater. Wash, spin-dry, and prep your greens and vegetables using a single compact bowl. Interchangeable blades allow you to grate, slice, and julienne straight into the bowl, saving time and clean-up.",
    affiliate: "https://link.amazon/B05ZRKEP7",
    specs: [
      { label: "Functions", value: "Spin dry, chop, slice, grate, julienne, serve" },
      { label: "Attachments", value: "5 interchangeable stainless steel blades + grater plate" },
      { label: "Capacity", value: "Large capacity washing & drying bowl" },
      { label: "Safety", value: "Finger guard protector included" },
      { label: "Material", value: "BPA-free durable ABS/PP plastic" },
    ]
  },
  {
    id: 40,
    name: "Mini Packet Sealer",
    category: "Home Improvement",
    featured: false,
    image: "https://m.media-amazon.com/images/I/61GbSnGn5BL._SL1280_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61GbSnGn5BL._SL1280_.jpg", alt: "Mini Packet Sealer — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61tus7u0W+L._SL1500_.jpg", alt: "Mini Packet Sealer — features" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61sQkyvDraL._SL1280_.jpg", alt: "Mini Packet Sealer — details" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71byE1gHw0L._SL1500_.jpg", alt: "Mini Packet Sealer — packaging" },
    ],
    description: "Handheld mini heat bag sealer and cutter. Quickly seal snack bags, chips, and left-over foods to keep them fresh and crispy. Features a built-in sharp cutter to easily reopen sealed bags. Compact, rechargeable, and magnetic for easy storage on your fridge.",
    affiliate: "https://link.amazon/B0gQdQm5M",
    specs: [
      { label: "Functions", value: "2-in-1 Sealer & Cutter" },
      { label: "Power", value: "USB Rechargeable" },
      { label: "Storage", value: "Magnetic back for fridge mounting" },
      { label: "Suitable For", value: "Plastic bags, foil bags, snack bags" },
      { label: "Heating Time", value: "Instant pre-heat" },
    ]
  },
  {
    id: 41,
    name: "Laser Guided Scissors",
    category: "Home Improvement",
    featured: false,
    image: "https://m.media-amazon.com/images/I/41kycyg8kfL.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/41kycyg8kfL.jpg", alt: "Laser Guided Scissors — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/41VF7Tq2DjL.jpg", alt: "Laser Guided Scissors — details" },
      { type: "image", src: "https://m.media-amazon.com/images/I/51zeWjoELeL.jpg", alt: "Laser Guided Scissors — side profile" },
    ],
    description: "Innovative laser-guided scissors designed for perfectly straight cuts every time. Ideal for cutting wrapping paper, fabrics, crafts, and scrapbooking. Easy-to-adjust laser beam ensures precise alignment and clean edges.",
    affiliate: "https://link.amazon/B0ahVDPVJ",
    specs: [
      { label: "Guide", value: "Integrated red laser line" },
      { label: "Blade", value: "Stainless steel blades" },
      { label: "Power", value: "2x LR44 button cell batteries (included)" },
      { label: "Ideal For", value: "Wrapping paper, fabric, crafts, and DIY projects" },
      { label: "Handle", value: "Ergonomic comfort-grip handle" },
    ]
  },
  {
    id: 42,
    name: "HD Car Sun Visor",
    category: "Automotive Essentials",
    featured: false,
    image: "https://m.media-amazon.com/images/I/51sqrjJ4gPL._SL1000_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/51sqrjJ4gPL._SL1000_.jpg", alt: "HD Car Sun Visor — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61bl6Q9o2XL.jpg", alt: "HD Car Sun Visor — installation" },
      { type: "image", src: "https://m.media-amazon.com/images/I/51aqsZKSvnL.jpg", alt: "HD Car Sun Visor — close-up" },
      { type: "image", src: "https://m.media-amazon.com/images/I/6195DOuDoVL._SL1000_.jpg", alt: "HD Car Sun Visor — night mode" },
    ],
    description: "2-in-1 HD car anti-glare sun visor extension. Reduces blinding glare from the sun during the day and filters out harsh headlight glare at night. Simple clip-on design attaches securely to your car's existing sun visor without tools.",
    affiliate: "https://link.amazon/B0gTfdxdB",
    specs: [
      { label: "Panels", value: "Dual panels (Daytime yellow-tinted, Nighttime grey-tinted)" },
      { label: "Material", value: "High-definition shatterproof PMMA acrylic" },
      { label: "Adjustment", value: "360-degree rotation & height adjustable" },
      { label: "Installation", value: "Clip-on, fits most cars & SUVs" },
      { label: "Protection", value: "Filters UV rays and glare" },
    ]
  },
  {
    id: 43,
    name: "Period Cramp Massager",
    category: "Personal Care Appliances",
    featured: false,
    image: "https://m.media-amazon.com/images/I/61gIW4Izb4L._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61gIW4Izb4L._SL1500_.jpg", alt: "Period Cramp Massager — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71YgMReQNFL._SL1500_.jpg", alt: "Period Cramp Massager — lifestyle" },
      { type: "image", src: "https://m.media-amazon.com/images/I/61Wr4NXvQmL._SL1500_.jpg", alt: "Period Cramp Massager — features" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71aLf9JQPCL._SL1500_.jpg", alt: "Period Cramp Massager — package" },
    ],
    description: "Wearable wireless heating pad and vibration massager designed to relieve menstrual cramps and back pain. Features rapid heating technology and multiple massage modes. Lightweight, ultra-thin, and adjustable to wear discreetly under clothing.",
    affiliate: "https://link.amazon/B07fXh8Qb",
    specs: [
      { label: "Heating", value: "3 Temperature levels (e.g. 50°C, 55°C, 60°C)" },
      { label: "Vibration", value: "Multiple speed vibration modes" },
      { label: "Power", value: "USB rechargeable long-lasting battery" },
      { label: "Strap", value: "Adjustable elastic waist strap" },
      { label: "Comfort", value: "Soft velvet/breathable inner lining" },
    ]
  }
];

export default products;
