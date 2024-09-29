"use client";
import React from "react";
import NavbarAfterLogin from "@/components/navbarAfterLogin";

const UpdateComponent = ({ title, description, imageUrl }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 animate-fade-in">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const HobbiesBox = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
        <h3 className="text-2xl font-semibold mb-4 animate-slide-in-right">Rediscover Your Childhood Hobbies</h3>
        <p className="text-gray-600 mb-4">Remember those activities that brought you joy as a child? It's time to revisit them and add some excitement to your daily routine!</p>
        <div className="space-y-4">
            <input type="text" placeholder="Enter a childhood hobby" className="w-full p-2 border rounded" />
            <button className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition">Add Hobby</button>
        </div>
        <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Your Hobby List:</h4>
            <ul className="list-disc list-inside text-gray-600">
                <li>Drawing</li>
                <li>Playing an instrument</li>
                <li>Collecting stamps</li>
            </ul>
        </div>
        <div className="mt-8 space-y-6">
            <div className="bg-rose-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Post What You've Learnt</h4>
                <textarea className="w-full p-2 border rounded" placeholder="Share your hobby experiences..."></textarea>
                <button className="mt-2 bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition">Post</button>
            </div>
            <div className="bg-rose-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Take Workshops</h4>
                <p className="text-gray-600 mb-2">Enhance your skills with our online workshops.</p>
                <button className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition">Browse Workshops</button>
            </div>
            <div className="bg-rose-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Attend Workshops</h4>
                <p className="text-gray-600 mb-2">Join local workshops and meet fellow enthusiasts.</p>
                <button className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition">Find Local Workshops</button>
            </div>
        </div>
    </div>
);

const Page = () => {
    const updates = [
        {
            title: "Current Affairs",
            description: "Stay informed about the latest news and events shaping our world.",
            imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=3540&auto=format&fit=crop"
        },
        {
            title: "Fashion Trends",
            description: "Discover the latest styles and fashion tips for the modern housewife.",
            imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=3540&auto=format&fit=crop"
        },
        {
            title: "Communication Skills",
            description: "Enhance your interpersonal skills and build stronger relationships.",
            imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=3540&auto=format&fit=crop"
        },
        {
            title: "Home Management",
            description: "Learn efficient techniques for managing your household with ease.",
            imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=3540&auto=format&fit=crop"
        },
        {
            title: "Healthy Living",
            description: "Explore tips and strategies for maintaining a healthy lifestyle for you and your family.",
            imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=3540&auto=format&fit=crop"
        },
        {
            title: "Financial Planning",
            description: "Learn about budgeting, saving, and investing to secure your family's financial future.",
            imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=3540&auto=format&fit=crop"
        },
        {
            title: "Personal Growth",
            description: "Discover resources and techniques for continuous self-improvement and personal development.",
            imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=3540&auto=format&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen py-20 w-full bg-rose-100">
            
            <NavbarAfterLogin/>
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-neutral-800 mb-4 animate-bounce">
                    Stay in the Loop: Keep Up with the Updates
                </h1>
                <p className="text-center text-neutral-600 text-sm mb-24">
                    Keep up with the newest trends and be confident whenever you step out of the house. Stay in sync with the crowd!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {updates.map((update, index) => (
                        <UpdateComponent key={index} {...update} />
                    ))}
                </div>
                <div className="mt-12">
                    <HobbiesBox />
                </div>
            </div>
        </div>
    );
};

export default Page;
