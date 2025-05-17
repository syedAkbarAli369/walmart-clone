// lib/data.ts

export type GridCategory =
  | "Sweet gifts for less"
  | "Shop Toys"
  | "Shop Electronics"
  | "Shop Wardrobe"
  | "Shop Home"
  | "All you need for Match Day"
  | "Shop Gadgets"
  | "Shop Beauty"
  | "Shop Sports"
  | "Enjoy Free Shipping"
  | "Flash Deals"
// Add more keys as you use them

export type GridItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export const gridData: Record<GridCategory, GridItem[]> = {
  "Sweet gifts for less": [
    {
      id: 1,
      name: "Chocolate Box",
      price: 10,
      description: "Delicious assorted chocolates.",
      image: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Teddy Bear",
      price: 20,
      description: "Soft and cuddly plush bear.",
      image: "https://images.pexels.com/photos/869517/pexels-photo-869517.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Flower Bouquet",
      price: 15,
      description: "Fresh mixed flower bouquet.",
      image: "https://images.pexels.com/photos/1488310/pexels-photo-1488310.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ],
  "Shop Toys": [
    {
      id: 1,
      name: "Lego Set",
      price: 30,
      description: "Creative building blocks to inspire imagination.\nPerfect for kids who love to build and explore.",
      image: "https://images.pexels.com/photos/19916221/pexels-photo-19916221/free-photo-of-redhead-girl-while-playing.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "RC Car",
      price: 45,
      description: "Remote-controlled car with high speed and durability.\nIdeal for outdoor racing fun and adventure.",
      image: "https://images.pexels.com/photos/13047784/pexels-photo-13047784.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Puzzle Game",
      price: 15,
      description: "Brain-boosting puzzle set with colorful pieces.\nGreat for improving problem-solving skills and focus.",
      image: "https://images.pexels.com/photos/1586950/pexels-photo-1586950.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ],
  "Shop Electronics": [
    {
      id: 1,
      name: "iPhone 15",
      price: 999,
      description: "Latest Apple iPhone.",
      image: "https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 1299,
      description: "Lightweight powerful laptop.",
      image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: 249,
      description: "Noise-cancelling wireless earbuds.",
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ],
  "Shop Wardrobe": [
    {
      id: 1,
      name: "Denim Jacket",
      price: 59,
      description: "Stylish and durable denim jacket.\nPerfect for casual wear and layering.",
      image: "https://images.pexels.com/photos/983497/pexels-photo-983497.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Classic White Sneakers",
      price: 75,
      description: "Comfortable and trendy white sneakers.\nIdeal for everyday use with any outfit.",
      image: "https://images.pexels.com/photos/7588163/pexels-photo-7588163.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Formal Blazer",
      price: 120,
      description: "Elegant black blazer for formal occasions.\nTailored fit to enhance your look.",
      image: "https://images.pexels.com/photos/7680153/pexels-photo-7680153.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ],
  "Shop Home": [
    {
      id: 1,
      name: "Cozy Sofa",
      price: 899,
      description: "Soft and spacious 3-seater sofa.\nPerfect for lounging and movie nights.",
      image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Dining Table Set",
      price: 499,
      description: "Modern wooden dining table with 4 chairs.\nBlends easily with any home interior.",
      image: "https://images.pexels.com/photos/3285193/pexels-photo-3285193.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Bedside Lamp",
      price: 45,
      description: "Warm LED lamp with elegant design.\nGreat for reading or soft bedroom lighting.",
      image: "https://images.pexels.com/photos/15667602/pexels-photo-15667602/free-photo-of-bedside-lamps-and-pillows-on-a-bed.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ],

  "All you need for Match Day": [
    {
      id: 1,
      name: "Team Jersey",
      price: 39,
      description: "Official replica jersey of your favorite team.\nStay stylish while cheering on match day.",
      image: "https://images.pexels.com/photos/2209/people-men-grass-sport.jpg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Portable Cooler",
      price: 65,
      description: "Keep your drinks cold during the game.\nLightweight and easy to carry anywhere.",
      image: "https://images.pexels.com/photos/8980720/pexels-photo-8980720.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 45,
      description: "Enjoy music and commentary loudly and clearly.\nPerfect for outdoor or home watch parties.",
      image: "https://images.pexels.com/photos/7493991/pexels-photo-7493991.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ],

  "Shop Gadgets": [
    {
      id: 1,
      name: "Smartwatch",
      price: 199,
      description: "Track health, get notifications, and more.\nCompact and stylish for daily use.",
      image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Wireless Charger",
      price: 29,
      description: "Fast and convenient charging for your devices.\nSay goodbye to messy cables.",
      image: "https://images.pexels.com/photos/4132535/pexels-photo-4132535.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Smart Home Plug",
      price: 22,
      description: "Control appliances remotely with voice or app.\nEasy setup and energy-saving features.",
      image: "https://images.pexels.com/photos/27523002/pexels-photo-27523002/free-photo-of-smart-home-devices.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ],

  "Shop Beauty": [
    {
      id: 1,
      name: "Facial Cleanser",
      price: 19,
      description: "Gentle face wash for daily use.\nLeaves skin feeling fresh and smooth.",
      image: "https://images.pexels.com/photos/27272550/pexels-photo-27272550/free-photo-of-a-tube-of-yoyo-s-body-wash-on-a-red-surface.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Lipstick Set",
      price: 35,
      description: "Includes 5 bold, long-lasting colors.\nPerfect for parties and daily wear.",
      image: "https://images.pexels.com/photos/7290715/pexels-photo-7290715.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Makeup Brush Kit",
      price: 25,
      description: "Complete brush set for all beauty needs.\nSoft bristles and premium handles.",
      image: "https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ],

  "Shop Sports": [
    {
      id: 1,
      name: "Football",
      price: 29,
      description: "Durable and weather-resistant ball.\nIdeal for street or field play.",
      image: "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Yoga Mat",
      price: 20,
      description: "Non-slip mat with perfect cushioning.\nGreat for workouts and meditation.",
      image: "https://images.pexels.com/photos/8173554/pexels-photo-8173554.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Dumbbell Set",
      price: 59,
      description: "Adjustable weights for strength training.\nCompact and easy to store at home.",
      image: "https://images.pexels.com/photos/669580/pexels-photo-669580.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ],

  "Enjoy Free Shipping": [
    {
      id: 1,
      name: "Phone Stand",
      price: 12,
      description: "Foldable phone stand for desk or bed.\nShips fast and free to your door.",
      image: "https://images.pexels.com/photos/7243218/pexels-photo-7243218.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Notebook Pack",
      price: 14,
      description: "Set of 3 colorful A5 notebooks.\nPerfect for journaling or planning.",
      image: "https://images.pexels.com/photos/942872/pexels-photo-942872.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Coffee Mug",
      price: 9,
      description: "Ceramic mug with motivational print.\nEnjoy your drink with free delivery.",
      image: "https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ],

  "Flash Deals": [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 15,
      description: "Ergonomic mouse at a discounted price.\nLimited stock available — act fast!",
      image: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "LED Light Strip",
      price: 18,
      description: "Color-changing strip for home décor.\nFlash deal with free shipping today.",
      image: "https://images.pexels.com/photos/10482375/pexels-photo-10482375.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Power Bank",
      price: 25,
      description: "Fast-charging 10000mAh power bank.\nGreat for travel and emergency use.",
      image: "https://images.pexels.com/photos/518530/pexels-photo-518530.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ],


};
