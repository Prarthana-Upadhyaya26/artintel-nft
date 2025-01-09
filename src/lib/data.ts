export type NFT = {
  id: number;
  title: string;
  collection: string;
  image: string;
  description: string;
  price: string;
  currency: string;
  verified: boolean;
  category: string;
  contractAddress: string;
  tokenId: number;
  tokenStandard: string;
  chain: string;
  lastUpdated: string;
  creatorEarnings: string;
  views: number;
};

export const nfts: NFT[] = [
  {
    id: 1,
    title: "Mountain Solitude",
    collection: "Cath Simard Editions",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-07%20141706-HndsLYWVtjpR0WRFwcLSms09Wehywc.png",
    description: "A lone figure stands before a majestic snow-capped mountain range under a starry night sky, capturing the essence of solitude and nature's grandeur.",
    price: "0.2",
    currency: "ETH",
    verified: true,
    category: "Photography",
    contractAddress: "0x91a5...a2f1",
    tokenId: 1042,
    tokenStandard: "ERC-721",
    chain: "Ethereum",
    lastUpdated: "2 years ago",
    creatorEarnings: "7.5%",
    views: 15,
  },
  {
    id: 2,
    title: "Waves of Blue",
    collection: "ANOMALY AI ART",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-07%20141859-nvkztmwGY1NkNd9rAqFmmCnERkW4BU.png",
    description: "An abstract pattern of undulating blue and white lines, creating a mesmerizing sense of depth and movement.",
    price: "0.01",
    currency: "ETH",
    verified: true,
    category: "Art",
    contractAddress: "0x92b6...b3e2",
    tokenId: 2033,
    tokenStandard: "ERC-721",
    chain: "Ethereum",
    lastUpdated: "1 year ago",
    creatorEarnings: "5%",
    views: 22,
  },
  {
    id: 3,
    title: "Bridge of Seasons",
    collection: "REFLECTIONS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-07%20141945-el9bksXwGRViaObobois3TYb4ejcza.png",
    description: "A surreal landscape featuring a circular bridge connecting two contrasting environments: a snowy forest and a lush green forest, with a vibrant sunset sky reflected in the water below.",
    price: "0.05",
    currency: "ETH",
    verified: true,
    category: "Art",
    contractAddress: "0x93c7...c4f3",
    tokenId: 3024,
    tokenStandard: "ERC-721",
    chain: "Ethereum",
    lastUpdated: "6 months ago",
    creatorEarnings: "10%",
    views: 35,
  },
  {
    id: 4,
    title: "Winter Reflection",
    collection: "Auf Reisen 2023",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-07%20142015-DGeiY4qhRAlCOt42eeZAuwl9N9XQNy.png",
    description: "A serene winter scene with a person standing on a wooden dock overlooking a partially frozen lake, surrounded by snow-covered pine trees.",
    price: "0.01",
    currency: "ETH",
    verified: true,
    category: "Photography",
    contractAddress: "0x94d8...d5g4",
    tokenId: 4015,
    tokenStandard: "ERC-721",
    chain: "Ethereum",
    lastUpdated: "3 months ago",
    creatorEarnings: "2.5%",
    views: 18,
  },
  {
    id: 5,
    title: "Urban Winter",
    collection: "City Scenes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-07%20142101-xgIvEmKDWCCGPzLEDgnurSpvqtnR3s.png",
    description: "A snowy urban street scene featuring a vintage car covered in snow parked in front of a 'Natural Health' store, with falling snow visible.",
    price: "0.03",
    currency: "ETH",
    verified: true,
    category: "Photography",
    contractAddress: "0x95e9...e6h5",
    tokenId: 5077,
    tokenStandard: "ERC-721",
    chain: "Ethereum",
    lastUpdated: "1 month ago",
    creatorEarnings: "5%",
    views: 28,
  },
];

