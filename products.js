const PRODUCTS = [
  {
    "id": 1,
    "name": "Gymnastics Bar Equipment",
    "category": "Training Equipment",
    "price": 32000,
    "desc": "Adjustable iron gymnastics bar for home and club training.",
    "details": "Material: Iron. Catalogue dimensions: 51.2 × 51.9 × 39–62 inches (maximum)."
  },
  {
    "id": 2,
    "name": "Gymnastics Mats",
    "category": "Mats & Landing",
    "price": 8000,
    "desc": "Everyday training mats for gymnastics and movement activities.",
    "details": "Size: 2m × 1m. Thickness: 5cm."
  },
  {
    "id": 3,
    "name": "Three-Fold Sports Mat",
    "category": "Mats & Landing",
    "price": 22000,
    "desc": "A practical folding mat for training, stretching and floor activities.",
    "details": "Size: 180 × 60 × 5cm. Material: PVC + EPE."
  },
  {
    "id": 4,
    "name": "5-Fold Gymnastics Tumbling Mat",
    "category": "Mats & Landing",
    "price": 26000,
    "desc": "Foldable tumbling mat with a durable cover and foam filling.",
    "details": "Size: 300 × 120 × 5cm. Leather cover with mesh; EPE foam filling."
  },
  {
    "id": 5,
    "name": "Gymnastics Chalk",
    "category": "Accessories",
    "price": 500,
    "desc": "Gymnastics chalk for grip during training.",
    "details": "1 block."
  },
  {
    "id": 6,
    "name": "Kids Girls Gymnastics Leotard",
    "category": "Leotards & Apparel",
    "price": 3000,
    "desc": "Kids' gymnastics athletic outfit for training and practice.",
    "details": "Catalogue age range: 6–14 years."
  },
  {
    "id": 7,
    "name": "Crash Landing Gymnastics Mat",
    "category": "Mats & Landing",
    "price": 16000,
    "desc": "Cushioned landing mat for gymnastics practice.",
    "details": "Size: 100 × 200 × 10cm."
  },
  {
    "id": 8,
    "name": "Folding Balance Beam",
    "category": "Balance & Training",
    "price": 12000,
    "desc": "Foldable balance beam available in different colours.",
    "details": "Length: 7ft. Width: 10cm. Thickness: 6cm."
  },
  {
    "id": 9,
    "name": "Gymnastics Block Mat",
    "category": "Mats & Landing",
    "price": 28000,
    "desc": "Foam block mat for gymnastics training and skill development.",
    "details": "Size: 76 × 76 × 91cm. Vinyl cover, nylon zippers, foam filling and handles."
  },
  {
    "id": 10,
    "name": "Cylindrical Gymnastics Roller",
    "category": "Training Equipment",
    "price": null,
    "desc": "Foam roller for movement, balance and gymnastics training.",
    "details": "Height: 120cm. Diameter: 60cm. PVC leather with mesh and high-density sponge. Large KSh 17,000 · Medium KSh 12,000 · Small KSh 8,000."
  },
  {
    "id": 11,
    "name": "Multi-Function Mat",
    "category": "Mats & Landing",
    "price": 96000,
    "desc": "Multi-section mat set for structured gymnastics training.",
    "details": "High-density foam. Size: 120 × 120 × 90 × 40cm. 4 sections per set."
  },
  {
    "id": 12,
    "name": "Cheese Mat",
    "category": "Mats & Landing",
    "price": null,
    "desc": "Inclined training mat for rolls, movement and skill progressions.",
    "details": "Small KSh 5,000 · Medium KSh 9,000 · Large KSh 14,000."
  },
  {
    "id": 13,
    "name": "Exercise Ball",
    "category": "Accessories",
    "price": 8000,
    "desc": "Inflatable exercise ball for movement and fitness activities.",
    "details": "Sizes: Small, Medium and Large. Explosion-proof, thickened, sanding feature as stated in catalogue."
  },
  {
    "id": 14,
    "name": "Kids Gymnastics Hand Grips with Wristbands",
    "category": "Accessories",
    "price": 1800,
    "desc": "Hand grips supplied with wristbands for gymnastics training.",
    "details": "Sizes: Small, Medium and Large."
  },
  {
    "id": 15,
    "name": "Training Cone",
    "category": "Accessories",
    "price": 250,
    "unit": "per piece",
    "desc": "Training cone for drills, coordination and activity stations.",
    "details": "Sold per piece."
  },
  {
    "id": 16,
    "name": "Roll Over Back Handspring Wheel",
    "category": "Training Equipment",
    "price": 16000,
    "desc": "Training aid for gymnastics movement and back handspring progressions.",
    "details": "Catalogue size: 183 × 91 × 41–5cm (please confirm exact final dimension before ordering)."
  },
  {
    "id": 17,
    "name": "3-Step Children Ladder Mat",
    "category": "Soft Play & Foam",
    "price": 9000,
    "desc": "Soft play ladder steps for children's movement activities.",
    "details": "3-step children ladder mat."
  },
  {
    "id": 18,
    "name": "2-Step Soft Stairs",
    "category": "Soft Play & Foam",
    "price": 4000,
    "desc": "Soft stairs for beginner movement and soft-play setups.",
    "details": "1 piece."
  },
  {
    "id": 19,
    "name": "Soft Low Balance Beam",
    "category": "Balance & Training",
    "price": 9000,
    "desc": "Soft low beam for balance practice and beginner training.",
    "details": "Length: 8ft."
  },
  {
    "id": 20,
    "name": "Low Balance Beam",
    "category": "Balance & Training",
    "price": 9000,
    "desc": "Low balance beam for gymnastics balance exercises.",
    "details": "Length: 8ft."
  },
  {
    "id": 21,
    "name": "Circular Gymnastics Foam Ring",
    "category": "Soft Play & Foam",
    "price": 24000,
    "desc": "Foam ring for movement, rolling and gymnastics activities.",
    "details": "Outer diameter: 140 × 140 × 45cm. Inner diameter: 60cm. PVC leather + high-density sponge."
  },
  {
    "id": 22,
    "name": "Long Block & U-Shape Mat Set",
    "category": "Mats & Landing",
    "price": 12000,
    "desc": "Long block and double U-shape mat set for training layouts.",
    "details": "Long block: 120 × 30 × 30cm. Double U-shape mat: 60 × 30 × 60cm."
  },
  {
    "id": 23,
    "name": "Outdoor Trampoline",
    "category": "Trampolines",
    "price": 28000,
    "desc": "Outdoor trampoline for recreational jumping and activity.",
    "details": "Materials listed: stainless steel, PVC, polypropylene (PP) and PE."
  },
  {
    "id": 24,
    "name": "Gymnastics Foam Block",
    "category": "Soft Play & Foam",
    "price": 6000,
    "desc": "High-density foam block for gymnastics and movement activities.",
    "details": "Size: 60 × 40 × 45cm."
  }
];
