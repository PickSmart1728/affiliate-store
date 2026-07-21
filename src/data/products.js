const products = [
  {
    id: 1,
    name: "Laptop Backpack",
    category: "Bags & Travel",
    // Primary thumbnail fallback (used in search suggestions)
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
    id: 15,
    name: "Wall Spice Rack",
    category: "Kitchen Essentials",



    featured: false,
    image: "https://m.media-amazon.com/images/I/61X82eDEWpL._SL1024_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/61X82eDEWpL._SL1024_.jpg", alt: "Wall Spice Rack — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/715ZCGTN3PL._SL1024_.jpg", alt: "Wall Spice Rack — installed" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71+3XIu359L._SL1500_.jpg", alt: "Wall Spice Rack — dimensions" },
    ],
    description: "Maximize your kitchen space with this sleek, wall-mounted spice rack organizer. Keeps all your essential seasonings visible and easy to access.",
    affiliate: "https://link.amazon/B0c8NDE5N",
    specs: [
      { label: "Mounting", value: "Wall mounted (screws/adhesive)" },
      { label: "Material", value: "Rustproof metal" },
      { label: "Capacity", value: "Holds 24+ spice jars" },
    ]
  },
  {
    id: 16,
    name: "Selfie Stick Phone Case",
    category: "Mobile Accessories",



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
    name: "Tech Vault Organizer",
    category: "Tech Accessories",



    featured: true,
    image: "https://m.media-amazon.com/images/I/814GTqb4fEL._SL1500_.jpg",
    gallery: [
      { type: "image", src: "https://m.media-amazon.com/images/I/814GTqb4fEL._SL1500_.jpg", alt: "Tech Vault Organizer — main" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71Mcs25-EQL._SL1254_.jpg", alt: "Tech Vault Organizer — open" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71wJsNTSYpL._SL1254_.jpg", alt: "Tech Vault Organizer — detail" },
      { type: "image", src: "https://m.media-amazon.com/images/I/71aKvltYMjL._SL1297_.jpg", alt: "Tech Vault Organizer — extra" },
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
  }
];

export default products;
