
// Male outfit data with relevant images and extensive recommendations
export const outfitCategories = [
  "Casual",
  "Party",
  "Business",
  "Summer",
  "Winter",
  "Sportswear"
];

// Primary outfit recommendations with male-specific images
export const primaryOutfits = {
  Casual: {
    description: "A relaxed yet stylish look perfect for everyday wear.",
    items: [
      "Light blue Oxford button-down shirt",
      "Dark wash slim fit jeans",
      "Brown leather sneakers",
      "Minimalist watch with brown leather strap"
    ],
    imageUrl: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1974&auto=format&fit=crop"
  },
  Party: {
    description: "An elegant outfit that stands out for evening events.",
    items: [
      "Black fitted dress shirt",
      "Charcoal slim fit trousers",
      "Black leather derby shoes",
      "Minimalist silver watch"
    ],
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
  },
  Business: {
    description: "Professional attire that conveys confidence and competence.",
    items: [
      "Navy blue blazer",
      "Light blue dress shirt",
      "Gray wool trousers",
      "Black cap-toe oxford shoes",
      "Burgundy tie with subtle pattern"
    ],
    imageUrl: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1974&auto=format&fit=crop"
  },
  Summer: {
    description: "Light, breathable fabrics to keep you cool and stylish.",
    items: [
      "White linen shirt",
      "Light beige chino shorts",
      "Brown leather sandals",
      "Straw hat with navy band"
    ],
    imageUrl: "https://images.unsplash.com/photo-1552668693-d0738e00eca8?q=80&w=1974&auto=format&fit=crop"
  },
  Winter: {
    description: "Warm, layered outfit for cold weather without sacrificing style.",
    items: [
      "Charcoal wool overcoat",
      "Burgundy cable-knit sweater",
      "Dark wash jeans",
      "Brown leather boots",
      "Gray wool scarf"
    ],
    imageUrl: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1974&auto=format&fit=crop"
  },
  Sportswear: {
    description: "Performance-focused attire for active lifestyles.",
    items: [
      "Black moisture-wicking t-shirt",
      "Navy running shorts with compression liner",
      "Athletic performance sneakers",
      "Sports watch with heart rate monitor"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1740&auto=format&fit=crop"
  }
};

// Additional outfit recommendations for more variety
export const additionalOutfits = {
  Casual: [
    {
      name: "Weekend Casual",
      description: "Perfect for weekend outings and casual meet-ups.",
      items: [
        "Cream henley shirt",
        "Olive chino pants",
        "White canvas sneakers",
        "Braided leather bracelet"
      ],
      imageUrl: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Smart Casual",
      description: "A step up from basic casual without being formal.",
      items: [
        "Navy polo shirt",
        "Khaki chinos",
        "Brown leather loafers",
        "Leather belt matching shoes"
      ],
      imageUrl: "https://images.unsplash.com/photo-1633280576469-b38f7c007dc9?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Streetwear Casual",
      description: "Urban-inspired look with contemporary elements.",
      items: [
        "Graphic t-shirt with minimal design",
        "Black slim jeans",
        "High-top sneakers",
        "Simple chain necklace"
      ],
      imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842259?q=80&w=1964&auto=format&fit=crop"
    }
  ],
  Party: [
    {
      name: "Cocktail Party",
      description: "Sophisticated look for upscale evening events.",
      items: [
        "Burgundy dress shirt",
        "Black slim fit dress pants",
        "Black leather chelsea boots",
        "Silver minimalist cufflinks"
      ],
      imageUrl: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Casual Party",
      description: "Stylish but relaxed for less formal gatherings.",
      items: [
        "Black fitted t-shirt",
        "Dark blue jeans",
        "Leather jacket",
        "Black ankle boots"
      ],
      imageUrl: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Club Night",
      description: "Bold style for nightlife and club environments.",
      items: [
        "Fitted black button-up with subtle pattern",
        "Slim dark jeans",
        "Statement watch",
        "Leather dress shoes"
      ],
      imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
    }
  ],
  Business: [
    {
      name: "Corporate Executive",
      description: "Refined look for leadership positions and important meetings.",
      items: [
        "Charcoal suit with subtle pinstripe",
        "Crisp white shirt",
        "Burgundy tie",
        "Black oxford shoes",
        "Silver tie clip"
      ],
      imageUrl: "https://images.unsplash.com/photo-1553240799-36214670e3be?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Business Casual",
      description: "Professional but approachable style for modern workplaces.",
      items: [
        "Light blue button-down shirt",
        "Navy chinos",
        "Brown leather belt",
        "Tan brogues",
        "No tie"
      ],
      imageUrl: "https://images.unsplash.com/photo-1583744946564-b52d01a7e152?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Creative Professional",
      description: "Modern business style for creative industries.",
      items: [
        "Knit blazer in navy",
        "Plain white t-shirt",
        "Slim fit dark jeans",
        "Leather sneakers",
        "Minimalist watch"
      ],
      imageUrl: "https://images.unsplash.com/photo-1596609548086-85bbf8ddb6b9?q=80&w=1970&auto=format&fit=crop"
    }
  ],
  Summer: [
    {
      name: "Beach Day",
      description: "Comfortable and practical for beach outings.",
      items: [
        "Pastel short-sleeve button-up",
        "Quick-dry swim shorts",
        "Comfortable flip flops",
        "Polarized sunglasses"
      ],
      imageUrl: "https://images.unsplash.com/photo-1565128939070-37168577d6a8?q=80&w=1972&auto=format&fit=crop"
    },
    {
      name: "Summer BBQ",
      description: "Casual yet put-together look for outdoor gatherings.",
      items: [
        "Light cotton t-shirt",
        "Patterned shorts",
        "Canvas slip-ons",
        "Braided belt"
      ],
      imageUrl: "https://images.unsplash.com/photo-1611937663641-5cef5189d71b?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Summer Evening",
      description: "Light but elegant for warm summer nights.",
      items: [
        "Linen short-sleeve shirt",
        "Light chinos",
        "Suede loafers (no socks)",
        "Minimal leather bracelet"
      ],
      imageUrl: "https://images.unsplash.com/photo-1589992896344-f774d0a84c58?q=80&w=1972&auto=format&fit=crop"
    }
  ],
  Winter: [
    {
      name: "Urban Winter",
      description: "Stylish city look for cold weather.",
      items: [
        "Black pea coat",
        "Gray turtleneck sweater",
        "Black jeans",
        "Leather boots",
        "Black leather gloves"
      ],
      imageUrl: "https://images.unsplash.com/photo-1608236415053-3691791bbffe?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Winter Casual",
      description: "Comfortable yet stylish for everyday winter wear.",
      items: [
        "Quilted jacket in navy",
        "Heavyweight flannel shirt",
        "Thermal henley",
        "Slim jeans",
        "Waterproof boots"
      ],
      imageUrl: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1864&auto=format&fit=crop"
    },
    {
      name: "Winter Sport",
      description: "Functional outfit for winter outdoor activities.",
      items: [
        "Performance base layer",
        "Insulated mid-layer",
        "Waterproof shell jacket",
        "Snow pants",
        "Insulated gloves and beanie"
      ],
      imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1950&auto=format&fit=crop"
    }
  ],
  Sportswear: [
    {
      name: "Running",
      description: "Performance gear for running and cardio workouts.",
      items: [
        "Technical running shirt",
        "Lightweight running shorts",
        "Performance running shoes",
        "Activity tracker watch",
        "Sweat-wicking hat"
      ],
      imageUrl: "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Gym Training",
      description: "Versatile outfit for strength training and gym workouts.",
      items: [
        "Fitted performance t-shirt",
        "Training shorts with liner",
        "Cross-training shoes",
        "Weightlifting gloves",
        "Sweatband"
      ],
      imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1740&auto=format&fit=crop"
    },
    {
      name: "Athleisure",
      description: "Athletic-inspired everyday wear for comfort and style.",
      items: [
        "Technical polo shirt",
        "Performance joggers",
        "Lifestyle sneakers",
        "Sports watch",
        "Lightweight jacket"
      ],
      imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1770&auto=format&fit=crop"
    }
  ]
};

// Skin tone matching colors
export const skinToneColors = {
  Fair: ["Navy", "Burgundy", "Forest Green", "Lavender", "Light Blue", "Gray"],
  Medium: ["Brown", "Olive Green", "Teal", "Burnt Orange", "Mustard", "Royal Blue"],
  Dark: ["White", "Cream", "Light Gray", "Bold Red", "Emerald Green", "Purple"]
};

// Body type recommendations
export const bodyTypeRecommendations = {
  Slim: {
    dos: ["Layered outfits to add volume", "Horizontal stripes", "Textured fabrics"],
    donts: ["Oversized clothes", "Very skinny jeans", "Vertical stripes"]
  },
  Athletic: {
    dos: ["Fitted shirts to highlight shoulders", "Straight leg pants", "V-neck shirts"],
    donts: ["Baggy clothes", "Skinny jeans", "Bulky sweaters"]
  },
  Average: {
    dos: ["Well-fitted clothes", "Classic cuts", "Balanced proportions"],
    donts: ["Extremely loose or tight clothing", "Overly busy patterns"]
  },
  "Plus Size": {
    dos: ["Vertical stripes", "Dark colors", "Structured jackets"],
    donts: ["Horizontal stripes", "Tight-fitting clothes", "Bright all-over patterns"]
  }
};

