export interface CityData {
  name: string;
  description: string;
  outfits: string[];
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  image: string;
}

export interface CartContentProps {
  initialItems: CartItem[];
}
export interface CartItemProps {
  id: number;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  image: string;
  onUpdateQuantity: (id: number, newQuantity: number) => void;
  onRemove: (id: number) => void;
}

export interface PackItem {
  name: string;
  icon: string;
}

export interface PackSuggestion {
  title: string;
  items: PackItem[];
}

export const sampleData = {
  cityData: {
    paris: {
      name: "Paris",
      description: "The City of Light",
      outfits: ["Chic casual", "Evening glamour", "Parisian street style"],
    },
    tokyo: {
      name: "Tokyo",
      description: "The bustling metropolis",
      outfits: ["Harajuku fashion", "Business formal", "Casual cool"],
    },
    "new-york": {
      name: "New York",
      description: "The Big Apple",
      outfits: ["Manhattan chic", "Brooklyn hipster", "Broadway glam"],
    },
    london: {
      name: "London",
      description: "The historic capital",
      outfits: ["British classic", "Punk rock", "Royal inspired"],
    },
    sydney: {
      name: "Sydney",
      description: "The harbor city",
      outfits: ["Beach casual", "Opera night", "Aussie outdoor"],
    },
    dubai: {
      name: "Dubai",
      description: "The luxury oasis",
      outfits: ["Desert chic", "Luxury evening wear", "Modern modest"],
    },
  },
  items: [1, 2, 3, 4],
  tripPackingList: ["Essentials", "Clothes", "Accessories", "Electronics"],
  activities: ["Hiking", "Beach", "City Exploring", "Skiing"],
  weatherInPlace: ["Summer in Paris", "Winter in NYC", "Spring in Tokyo"],
  navItems: [
    { name: "explore", path: "/explore" },
    { name: "Create", path: "/explore/create" },
    { name: "Plan", path: "/explore/plan" },
    { name: "Pack", path: "/explore/pack" },
    { name: "Share", path: "/explore/share" },
  ],
  cities: [
    { name: "Paris", slug: "paris" },
    { name: "Tokyo", slug: "tokyo" },
    { name: "New York", slug: "new-york" },
    { name: "London", slug: "london" },
    { name: "Sydney", slug: "sydney" },
    { name: "Dubai", slug: "dubai" },
  ],
  cartItems: [
    {
      id: 1,
      name: "Women's Lasting Tank Style User",
      price: 89.0,
      color: "Cream",
      size: "M",
      quantity: 1,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Women's High-Support Sports Bra",
      price: 99.0,
      color: "Gray",
      size: "M",
      quantity: 1,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Women's Running Capri Plus Base",
      price: 99.0,
      color: "Beige",
      size: "M",
      quantity: 1,
      image: "/placeholder.svg",
    },
  ],
  products: [
    {
      id: "1",
      name: "Women's Lasting Tank Style User",
      price: 89.0,
      description:
        "Elevate your workout wardrobe with our Women's Lasting Tank. Crafted from a breathable, moisture-wicking fabric, this tank offers both style and functionality for your active lifestyle.",
      colors: ["Cream", "Black", "Navy"],
      sizes: ["XS", "S", "M", "L", "XL"],
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ],
    },
    {
      id: "2",
      name: "Women's Lasting Tank Style User",
      price: 89.0,
      description:
        "Elevate your workout wardrobe with our Women's Lasting Tank. Crafted from a breathable, moisture-wicking fabric, this tank offers both style and functionality for your active lifestyle.",
      colors: ["Cream", "Black", "Navy"],
      sizes: ["XS", "S", "M", "L", "XL"],
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ],
    },
    {
      id: "3",
      name: "Women's Lasting Tank Style User",
      price: 89.0,
      description:
        "Elevate your workout wardrobe with our Women's Lasting Tank. Crafted from a breathable, moisture-wicking fabric, this tank offers both style and functionality for your active lifestyle.",
      colors: ["Cream", "Black", "Navy"],
      sizes: ["XS", "S", "M", "L", "XL"],
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ],
    },
  ],
  recentProducts: [
    {
      id: 1,
      name: "Women's Lasting Tank Style User",
      image: "/images/store.png",
    },
    {
      id: 2,
      name: "Women's High-Support Sports Bra The Best",
      image: "/images/store.png",
    },
    {
      id: 3,
      name: "Women's Running Capri Plus Base",
      image: "/images/store.png",
    },
  ],
  activityProducts: [
    {
      id: 4,
      name: "Men's Running Shorts",
      image: "/images/store.png",
    },
    {
      id: 5,
      name: "Men's Running Tights",
      image: "/images/store.png",
    },
    {
      id: 6,
      name: "Men's Running Top",
      image: "/images/store.png",
    },
  ],
  topPicks: [
    {
      id: 7,
      name: "Women's Running Jacket",
      image: "/images/store.png",
    },
    {
      id: 8,
      name: "Women's Running Tights",
      image: "/images/store.png",
    },
    {
      id: 9,
      name: "Women's Running Top",
      image: "/images/store.png",
    },
  ],
  tips: [
    {
      id: 1,
      title: "Packing Essentials",
      content: "Learn how to pack efficiently for any trip.",
    },
    {
      id: 2,
      title: "Budget Travel",
      content: "Tips for traveling on a shoestring budget.",
    },
    {
      id: 3,
      title: "Solo Travel Safety",
      content: "Stay safe while exploring the world on your own.",
    },
    {
      id: 4,
      title: "Local Cuisine Guide",
      content: "How to find and enjoy authentic local food.",
    },
  ],
  tip: {
    id: 1,
    title: "Packing Essentials",
    content: `
    <p>Packing efficiently is crucial for a smooth travel experience. Here are some essential tips:</p>
    <ol>
      <li><strong>Make a packing list:</strong> Start by creating a comprehensive list of items you need to bring.</li>
      <li><strong>Choose versatile clothing:</strong> Pack clothes that can be mixed and matched to create multiple outfits.</li>
      <li><strong>Roll your clothes:</strong> This technique saves space and minimizes wrinkles.</li>
      <li><strong>Use packing cubes:</strong> These help organize your suitcase and make it easier to find items.</li>
      <li><strong>Pack travel-sized toiletries:</strong> Save space and comply with airline regulations by using small containers.</li>
      <li><strong>Bring a portable charger:</strong> Keep your devices powered up on the go.</li>
      <li><strong>Don't forget essentials:</strong> Always pack important items like medications, travel documents, and a change of clothes in your carry-on.</li>
    </ol>
    <p>Remember, the key to efficient packing is to bring only what you need and to make the most of the space you have.</p>
  `,
    author: "Jane Doe",
    publishDate: "2023-05-15",
  },
  destinations: [
    {
      id: 1,
      name: "Paris",
      image: "paris.jpg",
      description: "The City of Light",
    },
    {
      id: 2,
      name: "Tokyo",
      image: "tokyo.jpg",
      description: "A blend of the ultramodern and the traditional",
    },
    {
      id: 3,
      name: "New York",
      image: "newyork.jpg",
      description: "The Big Apple",
    },
    {
      id: 4,
      name: "Sydney",
      image: "sydney.jpg",
      description: "Harbor city with iconic landmarks",
    },
  ],
  preferredActivities: [
    { id: "sightseeing", label: "Sightseeing", icon: "🏛️" },
    { id: "outdoor-adventure", label: "Outdoor adventure", icon: "🏔️" },
    { id: "food-explore", label: "Food explore", icon: "🍽️" },
    { id: "relaxation", label: "Relaxation", icon: "🌅" },
    { id: "sports", label: "Sports", icon: "⚽" },
    { id: "shopping", label: "Shopping", icon: "🛍️" },
    { id: "nightlife", label: "Nightlife", icon: "🌙" },
  ],
  days: ["Today", "Tomorrow", "Saturday", "Sunday"],
  packSuggestions: [
    {
      title: "Beach Vacation",
      items: [
        { name: "Swimsuit", icon: "🩱" },
        { name: "Sunscreen", icon: "🧴" },
        { name: "Beach Towel", icon: "🏖️" },
        { name: "Sunglasses", icon: "🕶️" },
        { name: "Flip Flops", icon: "🩴" },
      ],
    },
    {
      title: "City Break",
      items: [
        { name: "Comfortable Shoes", icon: "👟" },
        { name: "City Map", icon: "🗺️" },
        { name: "Camera", icon: "📷" },
        { name: "Portable Charger", icon: "🔋" },
        { name: "Light Jacket", icon: "🧥" },
      ],
    },
    {
      title: "Skiing Trip",
      items: [
        { name: "Ski Jacket", icon: "🧥" },
        { name: "Ski Goggles", icon: "🥽" },
        { name: "Gloves", icon: "🧤" },
        { name: "Thermal Underwear", icon: "🩲" },
        { name: "Ski Socks", icon: "🧦" },
      ],
    },
  ],
};
