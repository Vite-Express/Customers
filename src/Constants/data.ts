import { Bike, Building2, UserRound, Utensils } from "lucide-react"

export const menuItems = [
    {
        name: "About Us",
        path: "#about"
    },
    {
        name: "Services",
        path: "#services"
    },
    {
        name: "Our Offices",
        path: "#offices"
    },
    {
        name: "Career",
        path: "#career"
    }
]

export const accountTypes = [
    {
        title: "Personal Account",
        description: "Start making and receiving orders.",
        icon: UserRound,
        path: "https://cito-customer.netlify.app"
    },
    {
        title: "Rider",
        description: "Start earning as you take and deliver orders.",
        icon: Bike,
         path: "https://cito-rider.netlify.app"
    },
    {
        title: "Company",
        description: "Optimize and power your delivery company with cito multi-tenant feature.",
        icon: Building2,
         path: "https://cito-company.netlify.app"
    },
    {
        title: "Restaurant",
        description: "Supply users with your best meals. We will handle the rest.",
        icon: Utensils,
         path: "https://cito-restaurant.netlify.app"
    },
]