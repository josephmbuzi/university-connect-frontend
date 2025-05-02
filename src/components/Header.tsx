"use client";

import { FaHome, FaCalendarAlt, FaUsers, FaHeadset, FaMicrophone, FaCommentDots, FaBell, FaSearch } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { ME_QUERY } from "../../graphql/queries/me";

export default function Header() {
    const [activeNav, setActiveNav] = useState<string>("home");
    const { data, loading } = useQuery(ME_QUERY);

    const username = data?.me?.name ?? "Loading...";

    return (
        <header className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
            {/* Left: Logo and Nav */}
            <div className="flex items-center gap-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Logo" width={32} height={32} />
                    <span className="text-lg font-bold text-orange-600 hidden sm:inline">Hipnode.</span>
                </div>

                {/* Navigation icons (hide on small screens) */}
                <div className="hidden lg:flex items-center gap-4 ml-8 text-gray-400">
                    <button
                        onClick={() => setActiveNav("home")}
                        className={`p-2 rounded-md text-xl ${activeNav === "home" ? "bg-orange-600 text-white" : "hover:bg-gray-100"}`}
                    >
                        <FaHome />
                    </button>
                    <button
                        onClick={() => setActiveNav("calendar")}
                        className={`p-2 rounded-md text-xl ${activeNav === "calendar" ? "bg-orange-600 text-white" : "hover:bg-gray-100"}`}
                    >
                        <Link href="/events">
                            <FaCalendarAlt />
                        </Link>

                    </button>
                    <button
                        onClick={() => setActiveNav("users")}
                        className={`p-2 rounded-md text-xl ${activeNav === "users" ? "bg-orange-600 text-white" : "hover:bg-gray-100"}`}
                    >
                        <FaUsers />
                    </button>
                    <button
                        onClick={() => setActiveNav("support")}
                        className={`p-2 rounded-md text-xl ${activeNav === "support" ? "bg-orange-600 text-white" : "hover:bg-gray-100"}`}
                    >
                        <FaHeadset />
                    </button>
                    <button
                        onClick={() => setActiveNav("calls")}
                        className={`p-2 rounded-md text-xl ${activeNav === "calls" ? "bg-orange-600 text-white" : "hover:bg-gray-100"}`}
                    >
                        <FaMicrophone />
                    </button>
                </div>
            </div>

            {/* Middle: Search */}
            <div className="flex-1 mx-4">
                {/* Full search input on md+ screens */}
                <div className="relative hidden md:block">
                    <input
                        type="text"
                        placeholder="Type here to search..."
                        className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 text-sm bg-gray-50 placeholder-gray-400"
                    />
                    {/* Search Icon inside input */}
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                        <FaSearch className="h-5 w-5" />
                    </div>
                </div>

                {/* Just the search icon on small screens */}
                <div className="md:hidden flex justify-center">
                    <button className="text-gray-400 text-xl">
                        <FaSearch />
                    </button>
                </div>
            </div>

            {/* Right: Chat, Bell, Profile */}
            <div className="flex items-center gap-4">
                <button className="text-gray-400 text-xl">
                    <FaCommentDots />
                </button>
                <button className="relative text-gray-400 text-xl">
                    <FaBell />
                    {/* Red dot notification */}
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                </button>
                {/* Profile */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="w-8 h-8 relative border-2 border-orange-500 rounded-lg overflow-hidden">
                        <Image
                            src="/assets/images/avatar.heic"
                            alt="Profile Avatar"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Hide username on very small screens */}
                    <span className="font-semibold text-sm text-gray-800 hidden sm:inline">{loading ? "..." : username}</span>
                </div>
            </div>
        </header>
    );
}
