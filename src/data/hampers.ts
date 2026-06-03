export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Hamper {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  details: string[];
  tags: string[];
}

export const categories: Category[] = [
  {
    id: "birthday",
    name: "Birthday",
    description: "Milestone birthday gift trays, artisanal chocolate bouquets, and premium snack curations.",
    image: "./images/pack_and_wrap__1773854526_3855692810805246727_64642012236_1.jpg",
  },
  {
    id: "anniversary",
    name: "Anniversary",
    description: "Couple photo frames, romantic togetherness platters, and luxury anniversary gifts.",
    image: "./images/pack_and_wrap__1751264330_3666193388623424908_64642012236_1.jpg",
  },
  {
    id: "wedding",
    name: "Wedding",
    description: "Luxury wedding invitation favors, celebration platters, and wedding countdown gifts.",
    image: "./images/pack_and_wrap__1732364929_3507653719649514653_64642012236_1.jpg",
  },
  {
    id: "bride-to-be",
    name: "Bride To Be",
    description: "Satin robes, custom mugs, and pampering bridal essentials for the future bride.",
    image: "./images/pack_and_wrap__1740300047_3574218316023845715_64642012236_1.jpg",
  },
  {
    id: "groom-to-be",
    name: "Groom To Be",
    description: "Personalized leather valet accessories and premium grooming trunks for the groom.",
    image: "./images/pack_and_wrap__1758983008_3730942348160582677_64642012236_1.jpeg",
  },
  {
    id: "baby-shower",
    name: "Baby Shower",
    description: "Delightful baby-themed milestone baskets and luxurious mom-to-be pamper crates.",
    image: "./images/pack_and_wrap__1778490084_3894578919500803233_64642012236_1.jpg",
  },
  {
    id: "festival",
    name: "Festival",
    description: "Traditional Raksha Bandhan platters, Sindhara hampers, and custom Diwali curations.",
    image: "./images/pack_and_wrap__1722324345_3423427194016874499_64642012236.webp",
  },
  {
    id: "customized",
    name: "Custom Hampers",
    description: "Bespoke gifting options crafted entirely to your choice, color theme, and budget.",
    image: "./images/pack_and_wrap__1763797795_3771331710198887311_64642012236_1.jpg",
  },
];

export const hampers: Hamper[] = [
  // --- BIRTHDAY HAMPERS (Chocolate bouquets, Birthday gift trays, Birthday snack hampers) ---
  {
    id: "hamper-17",
    title: "Artisanal Chocolate Bouquet Crate",
    description: "A birthday showstopper featuring hand-wrapped chocolate bouquets, gourmet wafer selections, and a premium scented candle.",
    image: "./images/pack_and_wrap__1773854526_3855692860490942897_64642012236_2.jpg",
    category: "birthday",
    details: [
      "Custom Hand-Tied Chocolate Bouquet (Gourmet Ferrero & Milk Truffles)",
      "Scented Lavender Soy Wax Candle Jar",
      "Gourmet Chocolate Wafers Box",
      "Happy Birthday Custom Greeting Scroll",
      "Premium Pine Wood Gift Crate with Satin Bow"
    ],
    tags: ["Chocolate Bouquet", "Birthday Best Seller", "Gourmet Treats"]
  },
  {
    id: "hamper-7",
    title: "Luxury Birthday Celebration Tray",
    description: "A curated birthday gift tray complete with a personalized polaroid photo mug, designer cookies, and fairy light ambiance.",
    image: "./images/pack_and_wrap__1773854526_3855692810805246727_64642012236_1.jpg",
    category: "birthday",
    details: [
      "Gold-Finished Metal Presentation Tray",
      "Customized Polaroid Photo Ceramic Mug",
      "Jar of Gourmet Caramel Popcorn",
      "Handcrafted Scented Wax Melts",
      "LED Fairy Lights Overlay & Calligraphy Card"
    ],
    tags: ["Birthday Gift Tray", "Photo Mug", "Fairy Lights"]
  },
  {
    id: "hamper-20",
    title: "Cozy Birthday Snack & Cocoa Crate",
    description: "A warm birthday snack hamper featuring cocoa mugs, waffle hand towels, and premium snacks for a cozy celebration.",
    image: "./images/pack_and_wrap__1773854526_3855692881814811675_64642012236_3.jpg",
    category: "birthday",
    details: [
      "Rustic Dark-Finish Pinewood Crate",
      "Premium Cocoa Mug",
      "Cozy Waffle-Knit Cotton Hand Towel",
      "Bespoke Vanilla Bean Scented Candle",
      "Gourmet Roasted Salted Cashews & Almond Jars"
    ],
    tags: ["Snack Hamper", "Cozy Vibe", "Warm Gifting"]
  },
  {
    id: "hamper-25",
    title: "Signature Gold-Plated Coffee & Chocolate Box",
    description: "An elegant birthday tray combining single-origin chocolate bars, custom coffee mug, and aromatic mist.",
    image: "./images/pack_and_wrap__1778850311_3897601047321458519_64642012236_1.jpg",
    category: "birthday",
    details: [
      "Sleek Gold-Trimmed Matte Black Gift Box",
      "Assorted Single-Origin Artisanal Chocolate Bars",
      "Custom Gold-Plated Coffee Mug",
      "Organic Jasmine Scented Room & Pillow Mist",
      "Handwritten Calligraphy Birthday Note"
    ],
    tags: ["Chocolate Bar", "Luxury Gift Box", "Coffee Lover"]
  },

  // --- ANNIVERSARY HAMPERS (Couple photo hampers, Celebrating togetherness trays, Anniversary-themed gifts) ---
  {
    id: "hamper-3",
    title: "Rustic Romance Couple Photo Trunk",
    description: "A gorgeous wooden trunk housing a personalized couple photo frame, anniversary polaroids, and premium keepsake items.",
    image: "./images/pack_and_wrap__1751264330_3666193388623424908_64642012236_1.jpg",
    category: "anniversary",
    details: [
      "Handmade Wooden Keepsake Chest with Brass Lock",
      "Personalized Wooden Couple Photo Frame",
      "Instax Polaroid Collage Card",
      "Engraved Couple Anniversary Mug Set",
      "Scented Wax Tablet & Dried Rose Potpourri"
    ],
    tags: ["Couple Photo Hamper", "Wooden Chest", "Keepsake Frame"]
  },
  {
    id: "hamper-13",
    title: "Rose & Champagne Togetherness Tray",
    description: "A premium anniversary celebration tray designed with elegant stemware, luxury chocolates, and romantic rose accents.",
    image: "./images/pack_and_wrap__1751264330_3666193388640327007_64642012236_2.jpg",
    category: "anniversary",
    details: [
      "Chic White & Gold Leatherette Crate",
      "Set of 2 Engraved Champagne Flute Glasses",
      "Premium Artisanal Raspberry Dark Chocolates",
      "Rose-Scented Luxury Cold-Process Soap",
      "Fresh Rose Petals & Red Satin Ribbon Wrappings"
    ],
    tags: ["Togetherness Tray", "Champagne Flutes", "Premium Romance"]
  },
  {
    id: "hamper-9",
    title: "Royal Crimson Velvet Anniversary Trunk",
    description: "An anniversary-themed treasure trunk finished in royal crimson velvet, featuring fine sweets and custom glass items.",
    image: "./images/pack_and_wrap__1723290248_3431529775490620690_64642012236.webp",
    category: "anniversary",
    details: [
      "Royal Crimson Velvet Box with Brass Accents",
      "Gold-Foiled Couple Initials Calligraphy",
      "Assorted Turkish Delights & Baklava Box",
      "Premium Rosewater Scent Diffuser with Reeds",
      "Dried Floral Bundles & Silk Ribbons"
    ],
    tags: ["Anniversary Trunk", "Crimson Velvet", "Luxury Favors"]
  },
  {
    id: "hamper-22",
    title: "Blossom & Grace Engagement Crate",
    description: "A stunning engagement gift hamper with personalized champagne glasses, ring holder, and spa details.",
    image: "./images/pack_and_wrap__1764057099_3773506906905275828_64642012236_1.jpg",
    category: "anniversary",
    details: [
      "Glossy White Hexagonal Gift Box",
      "Custom Engraved Ring Box / Ceremony Holder",
      "Custom Mr & Mrs Toasting Flutes",
      "Rosewater Bath Bombs & Lavender Bath Salts",
      "Warm White LED Fairy Lights String"
    ],
    tags: ["Engagement Crate", "Mr & Mrs", "Engagement Gift"]
  },

  // --- WEDDING HAMPERS (Wedding countdown gifts, invite suites, wedding favors) ---
  {
    id: "hamper-1",
    title: "Celestial Gold Wedding Countdown Crate",
    description: "A luxurious countdown crate featuring elegant wedding elements, invitation card placeholders, and lighting.",
    image: "./images/pack_and_wrap__1732364929_3507653719649514653_64642012236_1.jpg",
    category: "wedding",
    details: [
      "Custom Laser-Cut Monogram Countdown Crate",
      "Handmade Premium Sandalwood Soy Candle",
      "Assorted Gourmet Truffles & Dragees Jar",
      "Personalized Acrylic Countdown / Date Tag",
      "Designer Silk Backdrop Lining & Warm LED String Lights"
    ],
    tags: ["Wedding Countdown", "Invitation Platter", "Luxury Crate"]
  },
  {
    id: "hamper-10",
    title: "Luminous Wedding Invitation Suite Trunk",
    description: "A grand wedding invitation suit trunk with matching glass jars, brass diyas, and premium invites.",
    image: "./images/pack_and_wrap__1732364929_3507653719960014714_64642012236_2.jpg",
    category: "wedding",
    details: [
      "Royal Navy and Gold Foiled Invitation Box",
      "Polished Brass Diya & T-Light Stand",
      "Artisanal Sweets (Saffron Kesar Ladoo box)",
      "Silver-Foil Glass Jars with Premium Almonds & Pistachios",
      "Custom Family Greeting Scroll with gold cord"
    ],
    tags: ["Invitation Trunk", "Royal Theme", "Gold Foiling"]
  },
  {
    id: "hamper-19",
    title: "Gilded Floral Wedding Favor Platter",
    description: "An open metal wedding favor tray decorated with fresh jasmine garlands and gourmet dry fruit jars.",
    image: "./images/pack_and_wrap__1763036207_3764943047814701025_64642012236_1.jpg",
    category: "wedding",
    details: [
      "Lacquered Gold Metal Serving Tray",
      "Freshly Picked Jasmine & Rose Garland Decor",
      "Silver-Capped Glass Jars of Organic Pine Nuts & Almonds",
      "Artisanal Pistachio Truffles box",
      "Subtle Fairy Lights weave"
    ],
    tags: ["Wedding Platter", "Floral Decor", "Dry Fruit Tray"]
  },

  // --- BRIDE TO BE HAMPERS (Satin robes, custom mugs, and pampering bridal essentials) ---
  {
    id: "hamper-2",
    title: "Bridal Bliss Pampering Trunk",
    description: "An elegant self-care trunk containing a satin robe, personalized mug, and organic bath essentials for the future bride.",
    image: "./images/pack_and_wrap__1740300047_3574218316023845715_64642012236_1.jpg",
    category: "bride-to-be",
    details: [
      "Satin 'Bride-to-Be' Robe with Gold Script lettering",
      "Organic Rosewater Face & Body Mist",
      "Handcrafted Pink Himalayan Scented Bath Salts",
      "Custom Ceramic Mug with 'Future Mrs' engraving",
      "Premium Gift Trunk with Satin Bow & Floral Accent"
    ],
    tags: ["Bride-to-be Crate", "Satin Robe", "Bridal Pampering"]
  },
  {
    id: "hamper-12",
    title: "Elegance Pearl Bride-To-Be Box",
    description: "A delicate pearl-white basket packed with custom slippers, bridal accessories, and sweet delights.",
    image: "./images/pack_and_wrap__1740300047_3574218315872778839_64642012236_2.jpg",
    category: "bride-to-be",
    details: [
      "Pearl-Studded White Basket Box",
      "Bespoke Embroidered Bridal Sash & Veil",
      "Handmade Strawberry Scent Bath Fizzers Set",
      "Personalized 'Mrs' Cozy Slippers",
      "Floral Posy & Silk Ribbon detailing"
    ],
    tags: ["Bride Box", "White & Pink Theme", "Bridal Shower"]
  },

  // --- GROOM TO BE HAMPERS (Personalized leather valet accessories and premium grooming trunks) ---
  {
    id: "hamper-4",
    title: "Groom-to-Be Dapper Grooming Crate",
    description: "A sophisticated dark wood valet crate containing a personalized leather wallet, custom eye mask, and premium oils.",
    image: "./images/pack_and_wrap__1758983008_3730942348160582677_64642012236_1.jpeg",
    category: "groom-to-be",
    details: [
      "Premium Custom Engraved Leather Wallet",
      "Bespoke Organic Sandalwood Grooming Oil",
      "Custom 'Groom-to-Be' Silk Eye Mask",
      "Matte Black Grooming Flask & Steel Cufflinks",
      "Charcoal Pine Wood Crate with Satin Bow"
    ],
    tags: ["Groom-to-be Trunk", "Leather Engraving", "Dapper Valet"]
  },
  {
    id: "hamper-14",
    title: "Gentleman's Groom Accessories Chest",
    description: "A luxury leatherette valet chest containing groom formal accessories, cologne, and gourmet treats.",
    image: "./images/pack_and_wrap__1758983008_3730942348168943322_64642012236_2.jpeg",
    category: "groom-to-be",
    details: [
      "Premium Leather Belt & Sleek Cardholder Set",
      "Designer Silk Pocket Square & Gold Tie Pin",
      "Imported Gentleman's Cologne Spray",
      "Gourmet Sea-Salt Almonds in Tin Container",
      "Matte Black Presentation Box with Gold Ribbon"
    ],
    tags: ["Groom Accessories", "Formal Suit Decor", "Luxury Chest"]
  },

  // --- BABY SHOWER HAMPERS (Delightful baby-themed milestone baskets and mom-to-be pamper crates) ---
  {
    id: "hamper-5",
    title: "Pink & White Baby milestone Basket",
    description: "An adorable baby-themed gift basket containing organic cotton rompers, milestone blocks, and plush toys.",
    image: "./images/pack_and_wrap__1778490084_3894578919500803233_64642012236_1.jpg",
    category: "baby-shower",
    details: [
      "Woven Pastel Pink Cotton Basket Crate",
      "Organic Cotton Swaddle and Romper Set",
      "Handmade Crochet Teddy Bear Toy",
      "Hand-Painted Baby Milestone Cards Set (1-12 Months)",
      "Baby-safe Hypoallergenic Body Wash & Lotion set"
    ],
    tags: ["Baby-themed Basket", "Milestone Cards", "Newborn Safe"]
  },
  {
    id: "hamper-15",
    title: "Blue Sky Baby Shower Swaddle Crate",
    description: "A gorgeous mom-to-be pampering hamper with cute baby clothing, organic rattle toys, and milestone journals.",
    image: "./images/pack_and_wrap__1778490084_3894578946059108702_64642012236_2.jpg",
    category: "baby-shower",
    details: [
      "Woven Pastel Blue Cane Crate Basket",
      "Organic Muslin Swaddle Blanket & Cap set",
      "Eco-friendly Hand-Carved Wooden Rattle",
      "Baby's First Memory Keepsake Journal Book",
      "Teddy Bear plush keychain element"
    ],
    tags: ["Mom-to-be Hamper", "Muslin Swaddles", "Memory Journal"]
  },
  {
    id: "hamper-21",
    title: "Baby Steps Cane Storage Crate",
    description: "A baby-themed cane storage basket containing milestone blocks, socks, bibs, and encouragement notes for parents.",
    image: "./images/pack_and_wrap__1778490084_3894578919500803233_64642012236_1.jpg",
    category: "baby-shower",
    details: [
      "Large Handwoven Cane Crate",
      "Hand-carved Wooden Milestone Blocks Set",
      "Soft Muslin Bibs & Pair of Organic Cotton Socks",
      "Personalized New Parent Scroll",
      "Soft cotton storage basket wrapper"
    ],
    tags: ["Baby-themed Gift", "Cane Storage", "Parents Scroll"]
  },
  {
    id: "hamper-26",
    title: "Lavender & Oats Mom-to-Be Spa Box",
    description: "A calming mom-to-be pampering box featuring soothing organic bath blends, body butter, and spa items.",
    image: "./images/pack_and_wrap__1780161379_3908599075461316043_64642012236_1.jpg",
    category: "baby-shower",
    details: [
      "Rustic Pine Wood Gift Crate",
      "Whipped Shea & Lavender Body Butter",
      "Organic Oatmeal Lavender Bath Soak bag",
      "Ultra-soft microfibre facial towel",
      "Scented botanical wax tablet for wardrobe freshness"
    ],
    tags: ["Mom-to-be Hamper", "Spa Lavender", "Self-Care Crate"]
  },

  // --- FESTIVAL HAMPERS (Traditional Raksha Bandhan platters, Sindhara hampers, and custom Diwali curations) ---
  {
    id: "hamper-6",
    title: "Premium Handcrafted Rakhi Platter",
    description: "A gorgeous Raksha Bandhan platter showcasing artisan Rakhis, glass jars of fine dry fruits, and Roli-Chawal containers.",
    image: "./images/pack_and_wrap__1722324345_3423427194016874499_64642012236.webp",
    category: "festival",
    details: [
      "Velvet-Backing Brass Thali Platter",
      "Handmade Gold Zardosi Brother Rakhi & Lumba",
      "Apothecary Glass Jars of Cashews & Pistachios",
      "Mini Glass Bottles of Organic Roli & Chawal",
      "Sibling Custom Message scroll with gold ties"
    ],
    tags: ["Raksha Bandhan", "Brass Platter", "Artisan Rakhi"]
  },
  {
    id: "hamper-11",
    title: "Golden Glow Sindhara Crate",
    description: "A traditional Sindhara festival hamper containing hand-painted terracotta diyas, dry fruits, and traditional sweets.",
    image: "./images/pack_and_wrap__1733245437_3515039958040259154_64642012236_1.webp",
    category: "festival",
    details: [
      "Warm Pinewood Crate Base",
      "Set of 2 Painted Clay Diyas",
      "Premium Kaju Katli Sweet Box",
      "Honey Glazed Dry Fruit Glass Jars",
      "Sindhara greetings label with gold thread"
    ],
    tags: ["Sindhara Hamper", "Traditional Sweets", "Festive Crate"]
  },
  {
    id: "hamper-16",
    title: "Festive Shubh Labh Shringar Hamper",
    description: "A luxury festival gift chest featuring sandalwood incense, designer clay diyas, and traditional treats.",
    image: "./images/pack_and_wrap__1738241529_3556950208372439707_64642012236_1.jpg",
    category: "festival",
    details: [
      "Luxe Foiled Cardboard Presentation Trunk",
      "Hand-Rolled Sandalwood Incense & Ceramic Stand",
      "Assorted Pistachio Sweets Crate",
      "Brass Shubh-Labh Hanging Toran element",
      "Ghee-Wick Clay Diyas Set of 4"
    ],
    tags: ["Festival Hamper", "Shubh Labh", "Traditional Chest"]
  },
  {
    id: "hamper-24",
    title: "Radiant Deepavali Sweets Platter",
    description: "An elegant brass festival tray loaded with dry fruit jars, handmade sweets, and decorative diyas.",
    image: "./images/pack_and_wrap__1777113145_3883028941842277892_64642012236_1.jpg",
    category: "festival",
    details: [
      "Premium Embossed Gold Platter Tray",
      "Set of 4 Hand-painted Clay Diyas",
      "Premium Kesar Katli Sweet Box",
      "Gourmet Rose-Flavored Dry Fruit jar",
      "Marigold Petal decorations"
    ],
    tags: ["Sindhara Hamper", "Diwali Platter", "Traditional Luxury"]
  },

  // --- CUSTOM HAMPERS (Bespoke gifting options crafted entirely to your choice, color theme, and budget) ---
  {
    id: "hamper-8",
    title: "Signature Custom Keepsake Crate",
    description: "A fully bespoke craft hamper built custom to order with personal keepsakes, custom embossing, and silk ribbon wrap.",
    image: "./images/pack_and_wrap__1763797795_3771331710198887311_64642012236_1.jpg",
    category: "customized",
    details: [
      "Bespoke Pinewood Crate / Trunk with Personalized Name Embossing",
      "Custom Selection of Premium Gifts (Tailored to Client)",
      "Handwritten Calligraphy Message Scroll",
      "Premium Silk Ribbon wrapping and dried botanicals styling"
    ],
    tags: ["Custom Hamper", "100% Bespoke", "Personalized Text"]
  },
  {
    id: "hamper-18",
    title: "Aesthetic Floral Custom Journal box",
    description: "A customized journal and self-care hamper with personalized calligraphy and dried botanicals.",
    image: "./images/pack_and_wrap__1763797795_3771331710349900589_64642012236_3.jpg",
    category: "customized",
    details: [
      "Eco-Kraft Gift Box Crate",
      "Lined Kraft Journal with Personalized Name in Calligraphy",
      "Natural Soy Wax Candle in glass jar",
      "Mini Bouquet of dried Lavender and Baby's Breath",
      "Handmade Macrame cup coaster"
    ],
    tags: ["Custom Hamper", "Calligraphy Journal", "Aesthetic Design"]
  },
  {
    id: "hamper-23",
    title: "Earthy Botanical Eco-Friendly Tray",
    description: "A custom eco-friendly hamper featuring upcycled wood, bamboo utensils, and handmade skincare.",
    image: "./images/pack_and_wrap__1765128001_3782490283268281615_64642012236_1.jpg",
    category: "customized",
    details: [
      "Upcycled Wood Serving Platter Tray",
      "Organic Bamboo Straws & Cutlery set",
      "Handmade Cold-Pressed Coconut Oil soap bar",
      "Lavender Essential Oil roller mist",
      "Dried Wild Grasses & Botanicals bouquet"
    ],
    tags: ["Custom Hamper", "Eco-Friendly", "Organic Lifestyle"]
  }
];
