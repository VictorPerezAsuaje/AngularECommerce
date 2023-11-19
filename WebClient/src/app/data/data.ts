import { MegaMenu } from "../components/header/header.component";
import { ProductCategory, ProductType } from "../pages/shop/shop.component";

export interface CartItem {
    id: string,
    name: string,
    price: number,
    totalPrice: number,
    amount: number,
    hasDiscount: boolean,
    discountApplied: number
}

export interface Review {
    username: string,
    email: string,
    rating: number,
    title: string,
    body: string
}

export interface Product {
    id: string
    name: string,
    price: number,
    type: ProductType,
    category: ProductCategory,
    rating: number,
    reviews: Review[],
    inStock: boolean,
    description: string,
    details: string
}

export class SampleData {
    static megaMenus: MegaMenu[] = [
        {
            name: "plants",
            items: [
                {
                    title: "Perennials",
                    description: "Explore our collection of perennial plants that come back year after year, adding beauty to your garden effortlessly.",
                    url: "/shop"
                },
                {
                    title: "Roses",
                    description: "Discover the elegance and fragrance of our rose varieties, perfect for gardens, bouquets, and special occasions.",
                    url: "/shop"
                },
                {
                    title: "Climbers",
                    description: "Find climbing plants that bring vertical interest to your garden, creating stunning natural backdrops.",
                    url: "/shop"
                },
                {
                    title: "Indoor",
                    description: "Enhance your indoor spaces with our selection of houseplants, bringing greenery and freshness to your home.",
                    url: "/shop"
                },
                {
                    title: "Outdoor",
                    description: "Elevate your outdoor areas with our outdoor plant options, making your garden or patio more inviting and beautiful.",
                    url: "/shop"
                },
                {
                    title: "Bedding",
                    description: "Create cozy and colorful garden beds with our bedding plants, transforming your outdoor space.",
                    url: "/shop"
                }
            ]
        },
        {
            name: "bulbs",
            items: [
                {
                    title: "Tulips",
                    description: "Brighten your garden with vibrant tulip varieties, adding a burst of color and charm in the spring.",
                    url: "/shop"
                },
                {
                    title: "Daffodils",
                    description: "Welcome spring with the cheerful blooms of daffodils, a classic and beloved flower for your garden.",
                    url: "/shop"
                },
                {
                    title: "Alliums",
                    description: "Add a touch of elegance to your garden with alliums, known for their unique spherical flower heads.",
                    url: "/shop"
                },
                {
                    title: "Iris",
                    description: "Explore the beauty of iris flowers, available in a wide range of colors, to enhance your garden's appeal.",
                    url: "/shop"
                },
                {
                    title: "Amaryllis",
                    description: "Cultivate stunning amaryllis bulbs, known for their large, striking blooms, as a centerpiece in your garden.",
                    url: "/shop"
                },
                {
                    title: "Muscari",
                    description: "Create a charming atmosphere with muscari flowers, also called grape hyacinths, for a unique garden touch.",
                    url: "/shop"
                }
            ]
        },
        {
            name: "seeds",
            items: []
        },
        {
            name: "materials",
            items: []
        },
        {
            name: "tools",
            items: []
        },
    ]

    static productTypes: ProductType[] = [
        { name: "plants" },
        { name: "bulbs" },
        { name: "seeds" },
        { name: "materials" },
        { name: "tools" }
    ]

    static productCategories: ProductCategory[] = [
        { "name": "Perennials" },
        { "name": "Roses" },
        { "name": "Climbers" },
        { "name": "Indoor" },
        { "name": "Outdoor" },
        { "name": "Bedding" },
        { "name": "Tulips" },
        { "name": "Daffodils" },
        { "name": "Alliums" },
        { "name": "Iris" },
        { "name": "Amaryllis" },
        { "name": "Muscari" }
    ]

    static products: Product[] = [
        {
            id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
            name: "Beautiful Perennial Plant",
            price: 29.99,
            type: SampleData.productTypes[0],
            category: SampleData.productCategories[0],
            rating: 4.5,
            reviews: [
                { username: "Gardener123", email: "gardener@example.com", rating: 5, title: "Lovely Plant", body: "This perennial is a gem in my garden!" },
                { username: "FlowerLover", email: "flower@example.com", rating: 4, title: "Vibrant Colors", body: "The colors are amazing, and it blooms every year." }
            ],
            inStock: true,
            description: "A beautiful perennial plant that adds charm to any garden. Comes back year after year with vibrant blooms.",
            details: "Height: 24 inches | Sunlight: Full sun to partial shade | Watering: Regular watering"
        },
        {
            id: '1e15b490-6e4a-4d98-8a93-698d40c491c5',
            name: "Classic Rose Collection",
            price: 39.99,
            type: SampleData.productTypes[0],
            category: SampleData.productCategories[1],
            rating: 4.8,
            reviews: [
                { username: "RoseEnthusiast", email: "rose@example.com", rating: 5, title: "Timeless Beauty", body: "These roses are the epitome of elegance. Highly recommended!" },
                { username: "GardenDesigner", email: "designer@example.com", rating: 4, title: "Versatile Blooms", body: "Used these roses in various designs. They never disappoint." }
            ],
            inStock: true,
            description: "A curated collection of classic roses, perfect for adding timeless beauty to your garden or special occasions.",
            details: "Varieties: Red Rose, Pink Rose, White Rose | Height: Varies | Sunlight: Full sun | Watering: Moderate"
        },
        {
            id: '6a9c22e4-b90a-4d3c-b7e6-d1c9e8a9e6fe',
            name: "Climbing Vine Sampler",
            price: 45.99,
            type: SampleData.productTypes[0],
            category: SampleData.productCategories[2],
            rating: 4.2,
            reviews: [
                { username: "GardenExplorer", email: "explorer@example.com", rating: 4, title: "Vertical Delight", body: "These climbing vines added a new dimension to my garden. Love them!" },
                { username: "NatureLover", email: "nature@example.com", rating: 4, title: "Natural Backdrops", body: "Creates stunning backdrops against walls and fences. Impressed!" }
            ],
            inStock: true,
            description: "A sampler of climbing vines that bring vertical interest to your garden, creating stunning natural backdrops.",
            details: "Varieties: Ivy, Clematis, Wisteria | Height: Varies | Sunlight: Full sun to partial shade | Watering: Moderate"
        },
        {
            id: '7171e32e-b058-4a07-aad3-dfe2653fbdcf',
            name: "Indoor Oasis Collection",
            price: 34.99,
            type: SampleData.productTypes[0],
            category: SampleData.productCategories[3],
            rating: 4.6,
            reviews: [
                { username: "IndoorGardener", email: "indoor@example.com", rating: 5, title: "Freshness Indoors", body: "This collection transformed my indoor spaces into a green oasis. Love it!" },
                { username: "PlantParent", email: "parent@example.com", rating: 4, title: "Low Maintenance", body: "Perfect for those who want greenery without a lot of fuss. Highly recommend." }
            ],
            inStock: true,
            description: "An indoor plant collection that enhances your indoor spaces, bringing greenery and freshness to your home.",
            details: "Varieties: Peace Lily, Snake Plant, Pothos | Height: Varies | Light: Low to bright indirect light | Watering: Moderate"
        },
        {
            id: 'c9d10399-2677-4f0a-b2b8-aa6474c324c5',
            name: "Outdoor Elegance Set",
            price: 49.99,
            type: SampleData.productTypes[0],
            category: SampleData.productCategories[4],
            rating: 4.7,
            reviews: [
                { username: "OutdoorEntusiast", email: "outdoor@example.com", rating: 5, title: "Elegant Touch", body: "Transformed my outdoor area into an elegant retreat. Absolutely stunning!" },
                { username: "GardenPartyHost", email: "partyhost@example.com", rating: 4, title: "Perfect for Events", body: "Used these plants for outdoor events. Guests were impressed!" }
            ],
            inStock: true,
            description: "An outdoor plant set that elevates your outdoor areas, making your garden or patio more inviting and beautiful.",
            details: "Varieties: Ornamental Grass, Boxwood, Hydrangea | Height: Varies | Sunlight: Full sun to partial shade | Watering: Regular"
        },
        {
            id: '501c7ac2-6f72-4922-b385-0eb040c30346',
            name: "Colorful Bedding Plants",
            price: 27.99,
            type: SampleData.productTypes[0],
            category: SampleData.productCategories[5],
            rating: 4.4,
            reviews: [
                { username: "BeddingDesigner", email: "designer@example.com", rating: 4, title: "Vibrant Beds", body: "These bedding plants created the colorful garden beds I envisioned. So happy with the results!" },
                { username: "OutdoorEnthusiast", email: "outdoor@example.com", rating: 4, title: "Easy to Grow", body: "Perfect for those who want a vibrant garden with minimal effort. Great buy!" }
            ],
            inStock: true,
            description: "A collection of bedding plants that allows you to create cozy and colorful garden beds, transforming your outdoor space.",
            details: "Varieties: Petunias, Marigolds, Zinnias | Height: Varies | Sunlight: Full sun | Watering: Regular"
        },
        {
            id: '754db075-c927-4d1a-9d67-94bc39b9c4ea',
            name: "Tulip Spectacular Mix",
            price: 31.99,
            type: SampleData.productTypes[1],
            category: SampleData.productCategories[6],
            rating: 4.9,
            reviews: [
                { username: "TulipLover", email: "tulip@example.com", rating: 5, title: "Spectacular Blooms", body: "This mix of tulips created a stunning display in my garden. Absolutely breathtaking!" },
                { username: "GardenDesigner", email: "designer@example.com", rating: 4, title: "Vibrant Colors", body: "Used these tulips in various designs. Clients loved them!" }
            ],
            inStock: true,
            description: "A mix of tulips that brightens your garden with vibrant colors, adding a burst of charm in the spring.",
            details: "Varieties: Red Tulip, Yellow Tulip, Pink Tulip | Height: Varies | Sunlight: Full sun | Watering: Regular"
        },
        {
            id: '6a5eab40-25d3-4cb6-96f3-7c3ff665f4b3',
            name: "Daffodil Delight Collection",
            price: 36.99,
            type: SampleData.productTypes[1],
            category: SampleData.productCategories[7],
            rating: 4.6,
            reviews: [
                { username: "DaffodilFanatic", email: "fanatic@example.com", rating: 5, title: "Delightful Blooms", body: "These daffodils are a delight in my garden. Can't wait for spring every year!" },
                { username: "NatureLover", email: "nature@example.com", rating: 4, title: "Low Maintenance", body: "Daffodils are perfect for those who want beautiful blooms without much effort." }
            ],
            inStock: true,
            description: "A collection of daffodils that welcomes spring with delightful blooms, a classic and beloved flower for your garden.",
            details: "Varieties: Large-Cupped Daffodil, Trumpet Daffodil, Small-Cupped Daffodil | Height: Varies | Sunlight: Full sun to partial shade | Watering: Regular"
        },
        {
            id: 'b6d5b2f9-167a-4a6b-bb15-2fc6e396666c',
            name: "Allium Symphony Set",
            price: 42.99,
            type: SampleData.productTypes[1],
            category: SampleData.productCategories[8],
            rating: 4.3,
            reviews: [
                { username: "AlliumAdmirer", email: "admirer@example.com", rating: 4, title: "Symphony of Blooms", body: "This set of alliums created a symphony of blooms in my garden. Stunning and unique!" },
                { username: "GardenArtist", email: "artist@example.com", rating: 4, title: "Artistic Appeal", body: "Used these alliums in my garden art installations. Added an artistic touch!" }
            ],
            inStock: true,
            description: "A set of alliums that adds a touch of elegance to your garden with their unique spherical flower heads.",
            details: "Varieties: Giant Allium, Drumstick Allium, Purple Sensation Allium | Height: Varies | Sunlight: Full sun | Watering: Regular"
        },
        {
            id: 'f6896303-61f4-4aeb-937d-b826883a13e7',
            name: "Iris Rainbow Collection",
            price: 38.99,
            type: SampleData.productTypes[1],
            category: SampleData.productCategories[9],
            rating: 4.7,
            reviews: [
                { username: "IrisEnthusiast", email: "iris@example.com", rating: 5, title: "Rainbow of Colors", body: "The Iris Rainbow Collection brings a burst of colors to my garden. Truly spectacular!" },
                { username: "NatureLover", email: "nature@example.com", rating: 4, title: "Easy to Grow", body: "Iris flowers are easy to grow and add a touch of elegance to any garden." }
            ],
            inStock: true,
            description: "A collection of iris flowers available in a wide range of colors, enhancing your garden's appeal with a vibrant rainbow.",
            details: "Varieties: Bearded Iris, Siberian Iris, Dutch Iris | Height: Varies | Sunlight: Full sun to partial shade | Watering: Regular"
        },
        {
            id: 'a42de844-d6a7-471e-bcd2-2a09a27a7aeb',
            name: "Amaryllis Grandeur Bulb",
            price: 47.99,
            type: SampleData.productTypes[1],
            category: SampleData.productCategories[10],
            rating: 4.8,
            reviews: [
                { username: "AmaryllisLover", email: "amaryllis@example.com", rating: 5, title: "Grand Blooms", body: "The Amaryllis Grandeur Bulb produces grand and striking blooms. A showstopper!" },
                { username: "GardenDesigner", email: "designer@example.com", rating: 4, title: "Versatile Beauty", body: "Used these amaryllis bulbs in various designs. Clients were impressed!" }
            ],
            inStock: true,
            description: "Amaryllis bulbs known for their large and striking blooms, serving as a centerpiece in your garden with grandeur.",
            details: "Varieties: Red Amaryllis, White Amaryllis, Pink Amaryllis | Height: Varies | Sunlight: Full sun | Watering: Moderate"
        },
    ]
}