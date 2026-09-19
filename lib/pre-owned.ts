export interface DeviceColor {
  name: string
  hex: string
}

export interface PreOwnedModel {
  name: string
  slug: string
  series: string
  releaseYear: number
  storage: string[]
  colors: DeviceColor[]
  priceFrom: number
  featured?: boolean
}

export interface PreOwnedBrand {
  slug: string
  name: string
  logo: string
  /** Render the logo on a dark tile when the artwork is light-on-dark */
  logoDark?: boolean
  image: string
  tagline: string
  description: string
  models: PreOwnedModel[]
}

const APPLE_MODELS: PreOwnedModel[] = [
  {
    name: "iPhone 16 Pro Max",
    slug: "iphone-16-pro-max",
    series: "iPhone 16",
    releaseYear: 2024,
    storage: ["256GB", "512GB", "1TB"],
    colors: [
      { name: "Desert Titanium", hex: "#bfa48f" },
      { name: "Natural Titanium", hex: "#c2bcb2" },
      { name: "White Titanium", hex: "#f2f1ec" },
      { name: "Black Titanium", hex: "#3b3b3d" },
    ],
    priceFrom: 949,
    featured: true,
  },
  {
    name: "iPhone 16 Pro",
    slug: "iphone-16-pro",
    series: "iPhone 16",
    releaseYear: 2024,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Desert Titanium", hex: "#bfa48f" },
      { name: "Natural Titanium", hex: "#c2bcb2" },
      { name: "White Titanium", hex: "#f2f1ec" },
      { name: "Black Titanium", hex: "#3b3b3d" },
    ],
    priceFrom: 849,
  },
  {
    name: "iPhone 16 Plus",
    slug: "iphone-16-plus",
    series: "iPhone 16",
    releaseYear: 2024,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Ultramarine", hex: "#7f8fd6" },
      { name: "Teal", hex: "#9fd0c5" },
      { name: "Pink", hex: "#f2c9d3" },
      { name: "White", hex: "#f4f3ef" },
      { name: "Black", hex: "#35373a" },
    ],
    priceFrom: 749,
  },
  {
    name: "iPhone 16",
    slug: "iphone-16",
    series: "iPhone 16",
    releaseYear: 2024,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Ultramarine", hex: "#7f8fd6" },
      { name: "Teal", hex: "#9fd0c5" },
      { name: "Pink", hex: "#f2c9d3" },
      { name: "White", hex: "#f4f3ef" },
      { name: "Black", hex: "#35373a" },
    ],
    priceFrom: 679,
    featured: true,
  },
  {
    name: "iPhone 15 Pro Max",
    slug: "iphone-15-pro-max",
    series: "iPhone 15",
    releaseYear: 2023,
    storage: ["256GB", "512GB", "1TB"],
    colors: [
      { name: "Natural Titanium", hex: "#c2bcb2" },
      { name: "Blue Titanium", hex: "#5f6f7e" },
      { name: "White Titanium", hex: "#f2f1ec" },
      { name: "Black Titanium", hex: "#3b3b3d" },
    ],
    priceFrom: 799,
    featured: true,
  },
  {
    name: "iPhone 15 Pro",
    slug: "iphone-15-pro",
    series: "iPhone 15",
    releaseYear: 2023,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Natural Titanium", hex: "#c2bcb2" },
      { name: "Blue Titanium", hex: "#5f6f7e" },
      { name: "White Titanium", hex: "#f2f1ec" },
      { name: "Black Titanium", hex: "#3b3b3d" },
    ],
    priceFrom: 699,
  },
  {
    name: "iPhone 15 Plus",
    slug: "iphone-15-plus",
    series: "iPhone 15",
    releaseYear: 2023,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Blue", hex: "#cdd6d3" },
      { name: "Pink", hex: "#f4d4d9" },
      { name: "Yellow", hex: "#f2e7c0" },
      { name: "Green", hex: "#d0d8c8" },
      { name: "Black", hex: "#4a4a4c" },
    ],
    priceFrom: 629,
  },
  {
    name: "iPhone 15",
    slug: "iphone-15",
    series: "iPhone 15",
    releaseYear: 2023,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Blue", hex: "#cdd6d3" },
      { name: "Pink", hex: "#f4d4d9" },
      { name: "Yellow", hex: "#f2e7c0" },
      { name: "Green", hex: "#d0d8c8" },
      { name: "Black", hex: "#4a4a4c" },
    ],
    priceFrom: 579,
  },
  {
    name: "iPhone 14 Pro Max",
    slug: "iphone-14-pro-max",
    series: "iPhone 14",
    releaseYear: 2022,
    storage: ["128GB", "256GB", "512GB", "1TB"],
    colors: [
      { name: "Deep Purple", hex: "#5b566b" },
      { name: "Gold", hex: "#e7d9bf" },
      { name: "Silver", hex: "#eef0f0" },
      { name: "Space Black", hex: "#37383a" },
    ],
    priceFrom: 649,
  },
  {
    name: "iPhone 14 Pro",
    slug: "iphone-14-pro",
    series: "iPhone 14",
    releaseYear: 2022,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Deep Purple", hex: "#5b566b" },
      { name: "Gold", hex: "#e7d9bf" },
      { name: "Silver", hex: "#eef0f0" },
      { name: "Space Black", hex: "#37383a" },
    ],
    priceFrom: 579,
  },
  {
    name: "iPhone 14 Plus",
    slug: "iphone-14-plus",
    series: "iPhone 14",
    releaseYear: 2022,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Blue", hex: "#a7c1d9" },
      { name: "Purple", hex: "#e0dbec" },
      { name: "Starlight", hex: "#faf6ef" },
      { name: "Midnight", hex: "#3a3f45" },
      { name: "Red", hex: "#bb2c34" },
    ],
    priceFrom: 519,
  },
  {
    name: "iPhone 14",
    slug: "iphone-14",
    series: "iPhone 14",
    releaseYear: 2022,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Blue", hex: "#a7c1d9" },
      { name: "Purple", hex: "#e0dbec" },
      { name: "Starlight", hex: "#faf6ef" },
      { name: "Midnight", hex: "#3a3f45" },
      { name: "Red", hex: "#bb2c34" },
    ],
    priceFrom: 469,
  },
  {
    name: "iPhone 13 Pro Max",
    slug: "iphone-13-pro-max",
    series: "iPhone 13",
    releaseYear: 2021,
    storage: ["128GB", "256GB", "512GB", "1TB"],
    colors: [
      { name: "Sierra Blue", hex: "#a7c8de" },
      { name: "Gold", hex: "#f2e2c4" },
      { name: "Silver", hex: "#eef0f0" },
      { name: "Graphite", hex: "#54524f" },
    ],
    priceFrom: 519,
  },
  {
    name: "iPhone 13 Pro",
    slug: "iphone-13-pro",
    series: "iPhone 13",
    releaseYear: 2021,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Sierra Blue", hex: "#a7c8de" },
      { name: "Gold", hex: "#f2e2c4" },
      { name: "Silver", hex: "#eef0f0" },
      { name: "Graphite", hex: "#54524f" },
    ],
    priceFrom: 469,
  },
  {
    name: "iPhone 13",
    slug: "iphone-13",
    series: "iPhone 13",
    releaseYear: 2021,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Blue", hex: "#4a6d8c" },
      { name: "Pink", hex: "#f6ddd9" },
      { name: "Starlight", hex: "#faf6ef" },
      { name: "Midnight", hex: "#3a3f45" },
      { name: "Green", hex: "#cdd8cc" },
    ],
    priceFrom: 399,
    featured: true,
  },
  {
    name: "iPhone 13 mini",
    slug: "iphone-13-mini",
    series: "iPhone 13",
    releaseYear: 2021,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Blue", hex: "#4a6d8c" },
      { name: "Pink", hex: "#f6ddd9" },
      { name: "Starlight", hex: "#faf6ef" },
      { name: "Midnight", hex: "#3a3f45" },
      { name: "Green", hex: "#cdd8cc" },
    ],
    priceFrom: 359,
  },
  {
    name: "iPhone 12 Pro Max",
    slug: "iphone-12-pro-max",
    series: "iPhone 12",
    releaseYear: 2020,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Pacific Blue", hex: "#2e4d63" },
      { name: "Gold", hex: "#f2e2c4" },
      { name: "Silver", hex: "#eef0f0" },
      { name: "Graphite", hex: "#54524f" },
    ],
    priceFrom: 419,
  },
  {
    name: "iPhone 12 Pro",
    slug: "iphone-12-pro",
    series: "iPhone 12",
    releaseYear: 2020,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Pacific Blue", hex: "#2e4d63" },
      { name: "Gold", hex: "#f2e2c4" },
      { name: "Silver", hex: "#eef0f0" },
      { name: "Graphite", hex: "#54524f" },
    ],
    priceFrom: 379,
  },
  {
    name: "iPhone 12",
    slug: "iphone-12",
    series: "iPhone 12",
    releaseYear: 2020,
    storage: ["64GB", "128GB", "256GB"],
    colors: [
      { name: "Blue", hex: "#2c4a6e" },
      { name: "Green", hex: "#d6ecd6" },
      { name: "Purple", hex: "#c9c2e8" },
      { name: "White", hex: "#f6f6f4" },
      { name: "Black", hex: "#35373a" },
      { name: "Red", hex: "#bb2c34" },
    ],
    priceFrom: 319,
  },
  {
    name: "iPhone 12 mini",
    slug: "iphone-12-mini",
    series: "iPhone 12",
    releaseYear: 2020,
    storage: ["64GB", "128GB", "256GB"],
    colors: [
      { name: "Blue", hex: "#2c4a6e" },
      { name: "Green", hex: "#d6ecd6" },
      { name: "Purple", hex: "#c9c2e8" },
      { name: "White", hex: "#f6f6f4" },
      { name: "Black", hex: "#35373a" },
      { name: "Red", hex: "#bb2c34" },
    ],
    priceFrom: 289,
  },
  {
    name: "iPhone 11 Pro Max",
    slug: "iphone-11-pro-max",
    series: "iPhone 11",
    releaseYear: 2019,
    storage: ["64GB", "256GB", "512GB"],
    colors: [
      { name: "Midnight Green", hex: "#4e5851" },
      { name: "Gold", hex: "#f4e6c6" },
      { name: "Silver", hex: "#eef0f0" },
      { name: "Space Gray", hex: "#5b5c5e" },
    ],
    priceFrom: 349,
  },
  {
    name: "iPhone 11 Pro",
    slug: "iphone-11-pro",
    series: "iPhone 11",
    releaseYear: 2019,
    storage: ["64GB", "256GB", "512GB"],
    colors: [
      { name: "Midnight Green", hex: "#4e5851" },
      { name: "Gold", hex: "#f4e6c6" },
      { name: "Silver", hex: "#eef0f0" },
      { name: "Space Gray", hex: "#5b5c5e" },
    ],
    priceFrom: 309,
  },
  {
    name: "iPhone 11",
    slug: "iphone-11",
    series: "iPhone 11",
    releaseYear: 2019,
    storage: ["64GB", "128GB", "256GB"],
    colors: [
      { name: "Black", hex: "#35373a" },
      { name: "White", hex: "#f6f6f4" },
      { name: "Purple", hex: "#d6cfe8" },
      { name: "Green", hex: "#d3e6cf" },
      { name: "Yellow", hex: "#f7e59a" },
      { name: "Red", hex: "#bb2c34" },
    ],
    priceFrom: 259,
    featured: true,
  },
]

const SAMSUNG_MODELS: PreOwnedModel[] = [
  {
    name: "Galaxy S24 Ultra",
    slug: "galaxy-s24-ultra",
    series: "Galaxy S24",
    releaseYear: 2024,
    storage: ["256GB", "512GB", "1TB"],
    colors: [
      { name: "Titanium Gray", hex: "#8b8b88" },
      { name: "Titanium Black", hex: "#3a3a3c" },
      { name: "Titanium Violet", hex: "#c9c4d6" },
      { name: "Titanium Yellow", hex: "#e8ddb0" },
    ],
    priceFrom: 899,
    featured: true,
  },
  {
    name: "Galaxy S24+",
    slug: "galaxy-s24-plus",
    series: "Galaxy S24",
    releaseYear: 2024,
    storage: ["256GB", "512GB"],
    colors: [
      { name: "Onyx Black", hex: "#3a3a3c" },
      { name: "Marble Gray", hex: "#c8c9c4" },
      { name: "Cobalt Violet", hex: "#b7add9" },
      { name: "Amber Yellow", hex: "#e8ddb0" },
    ],
    priceFrom: 749,
  },
  {
    name: "Galaxy S24",
    slug: "galaxy-s24",
    series: "Galaxy S24",
    releaseYear: 2024,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Onyx Black", hex: "#3a3a3c" },
      { name: "Marble Gray", hex: "#c8c9c4" },
      { name: "Cobalt Violet", hex: "#b7add9" },
      { name: "Amber Yellow", hex: "#e8ddb0" },
    ],
    priceFrom: 649,
    featured: true,
  },
  {
    name: "Galaxy S23 Ultra",
    slug: "galaxy-s23-ultra",
    series: "Galaxy S23",
    releaseYear: 2023,
    storage: ["256GB", "512GB", "1TB"],
    colors: [
      { name: "Phantom Black", hex: "#2f2f31" },
      { name: "Green", hex: "#4f5d4b" },
      { name: "Cream", hex: "#efe7d7" },
      { name: "Lavender", hex: "#cfc6dc" },
    ],
    priceFrom: 699,
  },
  {
    name: "Galaxy S23+",
    slug: "galaxy-s23-plus",
    series: "Galaxy S23",
    releaseYear: 2023,
    storage: ["256GB", "512GB"],
    colors: [
      { name: "Phantom Black", hex: "#2f2f31" },
      { name: "Green", hex: "#4f5d4b" },
      { name: "Cream", hex: "#efe7d7" },
      { name: "Lavender", hex: "#cfc6dc" },
    ],
    priceFrom: 599,
  },
  {
    name: "Galaxy S23",
    slug: "galaxy-s23",
    series: "Galaxy S23",
    releaseYear: 2023,
    storage: ["128GB", "256GB"],
    colors: [
      { name: "Phantom Black", hex: "#2f2f31" },
      { name: "Green", hex: "#4f5d4b" },
      { name: "Cream", hex: "#efe7d7" },
      { name: "Lavender", hex: "#cfc6dc" },
    ],
    priceFrom: 499,
  },
  {
    name: "Galaxy S22 Ultra",
    slug: "galaxy-s22-ultra",
    series: "Galaxy S22",
    releaseYear: 2022,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Phantom Black", hex: "#2f2f31" },
      { name: "Phantom White", hex: "#f1f0ec" },
      { name: "Burgundy", hex: "#6d3540" },
      { name: "Green", hex: "#4f5d4b" },
    ],
    priceFrom: 549,
  },
  {
    name: "Galaxy S22+",
    slug: "galaxy-s22-plus",
    series: "Galaxy S22",
    releaseYear: 2022,
    storage: ["128GB", "256GB"],
    colors: [
      { name: "Phantom Black", hex: "#2f2f31" },
      { name: "Phantom White", hex: "#f1f0ec" },
      { name: "Pink Gold", hex: "#e9cfc4" },
      { name: "Green", hex: "#4f5d4b" },
    ],
    priceFrom: 449,
  },
  {
    name: "Galaxy S22",
    slug: "galaxy-s22",
    series: "Galaxy S22",
    releaseYear: 2022,
    storage: ["128GB", "256GB"],
    colors: [
      { name: "Phantom Black", hex: "#2f2f31" },
      { name: "Phantom White", hex: "#f1f0ec" },
      { name: "Pink Gold", hex: "#e9cfc4" },
      { name: "Green", hex: "#4f5d4b" },
    ],
    priceFrom: 399,
  },
  {
    name: "Galaxy S21 Ultra",
    slug: "galaxy-s21-ultra",
    series: "Galaxy S21",
    releaseYear: 2021,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Phantom Black", hex: "#2f2f31" },
      { name: "Phantom Silver", hex: "#d7d8d6" },
      { name: "Phantom Titanium", hex: "#6f7176" },
      { name: "Phantom Navy", hex: "#31435c" },
    ],
    priceFrom: 449,
  },
  {
    name: "Galaxy S21+",
    slug: "galaxy-s21-plus",
    series: "Galaxy S21",
    releaseYear: 2021,
    storage: ["128GB", "256GB"],
    colors: [
      { name: "Phantom Black", hex: "#2f2f31" },
      { name: "Phantom Silver", hex: "#d7d8d6" },
      { name: "Phantom Violet", hex: "#cbb8d9" },
    ],
    priceFrom: 379,
  },
  {
    name: "Galaxy S21",
    slug: "galaxy-s21",
    series: "Galaxy S21",
    releaseYear: 2021,
    storage: ["128GB", "256GB"],
    colors: [
      { name: "Phantom Gray", hex: "#5b5c5e" },
      { name: "Phantom White", hex: "#f1f0ec" },
      { name: "Phantom Violet", hex: "#cbb8d9" },
      { name: "Phantom Pink", hex: "#e9cfc4" },
    ],
    priceFrom: 329,
    featured: true,
  },
]

const GOOGLE_MODELS: PreOwnedModel[] = [
  {
    name: "Pixel 9 Pro XL",
    slug: "pixel-9-pro-xl",
    series: "Pixel 9",
    releaseYear: 2024,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Obsidian", hex: "#33343a" },
      { name: "Porcelain", hex: "#efece5" },
      { name: "Hazel", hex: "#7c7a6e" },
      { name: "Rose Quartz", hex: "#f2d6d3" },
    ],
    priceFrom: 799,
    featured: true,
  },
  {
    name: "Pixel 9 Pro",
    slug: "pixel-9-pro",
    series: "Pixel 9",
    releaseYear: 2024,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Obsidian", hex: "#33343a" },
      { name: "Porcelain", hex: "#efece5" },
      { name: "Hazel", hex: "#7c7a6e" },
      { name: "Rose Quartz", hex: "#f2d6d3" },
    ],
    priceFrom: 699,
  },
  {
    name: "Pixel 9",
    slug: "pixel-9",
    series: "Pixel 9",
    releaseYear: 2024,
    storage: ["128GB", "256GB"],
    colors: [
      { name: "Obsidian", hex: "#33343a" },
      { name: "Porcelain", hex: "#efece5" },
      { name: "Wintergreen", hex: "#cfe0d2" },
      { name: "Peony", hex: "#f2c9d3" },
    ],
    priceFrom: 599,
    featured: true,
  },
  {
    name: "Pixel 8 Pro",
    slug: "pixel-8-pro",
    series: "Pixel 8",
    releaseYear: 2023,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Obsidian", hex: "#33343a" },
      { name: "Porcelain", hex: "#efece5" },
      { name: "Bay", hex: "#a9c2d9" },
    ],
    priceFrom: 549,
  },
  {
    name: "Pixel 8",
    slug: "pixel-8",
    series: "Pixel 8",
    releaseYear: 2023,
    storage: ["128GB", "256GB"],
    colors: [
      { name: "Obsidian", hex: "#33343a" },
      { name: "Hazel", hex: "#7c7a6e" },
      { name: "Rose", hex: "#f2d0cf" },
    ],
    priceFrom: 449,
  },
  {
    name: "Pixel 8a",
    slug: "pixel-8a",
    series: "Pixel 8",
    releaseYear: 2024,
    storage: ["128GB", "256GB"],
    colors: [
      { name: "Obsidian", hex: "#33343a" },
      { name: "Porcelain", hex: "#efece5" },
      { name: "Bay", hex: "#a9c2d9" },
      { name: "Aloe", hex: "#c7d6b0" },
    ],
    priceFrom: 379,
  },
  {
    name: "Pixel 7 Pro",
    slug: "pixel-7-pro",
    series: "Pixel 7",
    releaseYear: 2022,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Obsidian", hex: "#33343a" },
      { name: "Snow", hex: "#f1f0ec" },
      { name: "Hazel", hex: "#7c7a6e" },
    ],
    priceFrom: 419,
  },
  {
    name: "Pixel 7",
    slug: "pixel-7",
    series: "Pixel 7",
    releaseYear: 2022,
    storage: ["128GB", "256GB"],
    colors: [
      { name: "Obsidian", hex: "#33343a" },
      { name: "Snow", hex: "#f1f0ec" },
      { name: "Lemongrass", hex: "#dbe0b0" },
    ],
    priceFrom: 349,
  },
  {
    name: "Pixel 7a",
    slug: "pixel-7a",
    series: "Pixel 7",
    releaseYear: 2023,
    storage: ["128GB"],
    colors: [
      { name: "Charcoal", hex: "#3a3b3d" },
      { name: "Snow", hex: "#f1f0ec" },
      { name: "Sea", hex: "#b7c9cf" },
      { name: "Coral", hex: "#f2a58f" },
    ],
    priceFrom: 299,
  },
  {
    name: "Pixel 6 Pro",
    slug: "pixel-6-pro",
    series: "Pixel 6",
    releaseYear: 2021,
    storage: ["128GB", "256GB", "512GB"],
    colors: [
      { name: "Stormy Black", hex: "#33343a" },
      { name: "Cloudy White", hex: "#f1f0ec" },
      { name: "Sorta Sunny", hex: "#f2d79a" },
    ],
    priceFrom: 329,
  },
  {
    name: "Pixel 6",
    slug: "pixel-6",
    series: "Pixel 6",
    releaseYear: 2021,
    storage: ["128GB", "256GB"],
    colors: [
      { name: "Stormy Black", hex: "#33343a" },
      { name: "Sorta Seafoam", hex: "#cfe0d2" },
      { name: "Kinda Coral", hex: "#f2a58f" },
    ],
    priceFrom: 279,
    featured: true,
  },
]

const MOTOROLA_MODELS: PreOwnedModel[] = [
  {
    name: "Razr+ (2024)",
    slug: "razr-plus-2024",
    series: "Razr",
    releaseYear: 2024,
    storage: ["256GB"],
    colors: [
      { name: "Hot Pink", hex: "#d64f86" },
      { name: "Spring Green", hex: "#9fbf8a" },
      { name: "Midnight Blue", hex: "#2f3a52" },
    ],
    priceFrom: 649,
    featured: true,
  },
  {
    name: "Razr (2024)",
    slug: "razr-2024",
    series: "Razr",
    releaseYear: 2024,
    storage: ["128GB", "256GB"],
    colors: [
      { name: "Beach Sand", hex: "#e5d7c3" },
      { name: "Koala Gray", hex: "#8b8b88" },
      { name: "Spritz Orange", hex: "#e07b3a" },
    ],
    priceFrom: 499,
  },
  {
    name: "Edge+ (2023)",
    slug: "edge-plus-2023",
    series: "Edge",
    releaseYear: 2023,
    storage: ["512GB"],
    colors: [
      { name: "Interstellar Black", hex: "#2f3033" },
    ],
    priceFrom: 469,
  },
  {
    name: "Edge (2023)",
    slug: "edge-2023",
    series: "Edge",
    releaseYear: 2023,
    storage: ["256GB"],
    colors: [
      { name: "Eclipse Black", hex: "#2f3033" },
    ],
    priceFrom: 349,
    featured: true,
  },
  {
    name: "Edge 40 Pro",
    slug: "edge-40-pro",
    series: "Edge",
    releaseYear: 2023,
    storage: ["256GB"],
    colors: [
      { name: "Interstellar Black", hex: "#2f3033" },
      { name: "Lunar Blue", hex: "#4a6d8c" },
    ],
    priceFrom: 399,
  },
  {
    name: "Razr+ (2023)",
    slug: "razr-plus-2023",
    series: "Razr",
    releaseYear: 2023,
    storage: ["256GB"],
    colors: [
      { name: "Infinite Black", hex: "#2f3033" },
      { name: "Glacier Blue", hex: "#aac4d9" },
      { name: "Viva Magenta", hex: "#a6335a" },
    ],
    priceFrom: 429,
  },
  {
    name: "Moto G Stylus 5G (2023)",
    slug: "moto-g-stylus-5g-2023",
    series: "Moto G",
    releaseYear: 2023,
    storage: ["128GB", "256GB"],
    colors: [
      { name: "Cosmic Black", hex: "#2f3033" },
    ],
    priceFrom: 199,
  },
  {
    name: "Moto G Power 5G (2023)",
    slug: "moto-g-power-5g-2023",
    series: "Moto G",
    releaseYear: 2023,
    storage: ["128GB", "256GB"],
    colors: [
      { name: "Mineral Black", hex: "#2f3033" },
      { name: "Bright White", hex: "#f1f0ec" },
    ],
    priceFrom: 169,
    featured: true,
  },
]

export const preOwnedBrands: PreOwnedBrand[] = [
  {
    slug: "apple",
    name: "Apple",
    logo: "/pre-owned/apple-logo.png",
    image: "/pre-owned/apple-device.png",
    tagline: "Certified pre-owned iPhone, unlocked and ready to go",
    description:
      "Every certified pre-owned iPhone is fully unlocked, never repaired, and backed by our 60-day warranty. Choose from iPhone 11 all the way up to the latest iPhone 16 Pro Max.",
    models: APPLE_MODELS,
  },
  {
    slug: "samsung",
    name: "Samsung",
    logo: "/pre-owned/samsung-logo.png",
    logoDark: true,
    image: "/pre-owned/samsung-device.png",
    tagline: "Certified pre-owned Galaxy, unlocked and ready to go",
    description:
      "Certified pre-owned Galaxy phones from the S21 series and up — fully unlocked, never repaired, and covered by our 60-day warranty.",
    models: SAMSUNG_MODELS,
  },
  {
    slug: "google",
    name: "Google",
    logo: "/pre-owned/google-logo.png",
    image: "/pre-owned/google-device.png",
    tagline: "Certified pre-owned Pixel, unlocked and ready to go",
    description:
      "Certified pre-owned Google Pixel phones from the Pixel 6 series and up — fully unlocked, never repaired, and covered by our 60-day warranty.",
    models: GOOGLE_MODELS,
  },
  {
    slug: "motorola",
    name: "Motorola",
    logo: "/pre-owned/motorola-logo.png",
    image: "/pre-owned/motorola-device.png",
    tagline: "Certified pre-owned Motorola, unlocked and ready to go",
    description:
      "Certified pre-owned Motorola phones — from the flagship Edge and Razr lineups to the value Moto G series. Fully unlocked, never repaired, and covered by our 60-day warranty.",
    models: MOTOROLA_MODELS,
  },
]

export function getPreOwnedBrand(slug: string): PreOwnedBrand | undefined {
  return preOwnedBrands.find((b) => b.slug === slug)
}

/** Group a brand's models by their series, preserving list order. */
export function groupModelsBySeries(models: PreOwnedModel[]): { series: string; models: PreOwnedModel[] }[] {
  const groups: { series: string; models: PreOwnedModel[] }[] = []
  for (const model of models) {
    const existing = groups.find((g) => g.series === model.series)
    if (existing) existing.models.push(model)
    else groups.push({ series: model.series, models: [model] })
  }
  return groups
}
