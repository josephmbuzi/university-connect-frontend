"use client";

import Image from "next/image";
import { useState } from "react";

export default function EventsPage() {
    const [filters, setFilters] = useState({
        fullTime: true,
        partTime: true,
        internship: false,
        remote: true,
        contract: false,
        free: false,
    });

    return (
        <div className="bg-gray-50 min-h-screen px-2 md:px-2 lg:px-4 py-4">
            <div className="flex flex-col lg:flex-row gap-6">

                {/* Left Sidebar - Categories */}
                <div className="w-full lg:w-64">
                    <div className="bg-white rounded-2xl p-6">
                        <h3 className="font-bold text-gray-800 mb-4">Categories</h3>

                        {/* Layout change: horizontal on small, vertical on large */}
                        <div className="flex flex-wrap lg:flex-col gap-4 text-sm text-gray-700">

                            {[
                                { label: "Full Time", key: "fullTime" },
                                { label: "Part Time", key: "partTime" },
                                { label: "Internship", key: "internship" },
                                { label: "Remote", key: "remote" },
                                { label: "Contract", key: "contract" },
                                { label: "Free", key: "free" },
                            ].map((item) => (
                                <div key={item.key} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={filters[item.key as keyof typeof filters]}
                                        onChange={() =>
                                            setFilters((prev) => ({
                                                ...prev,
                                                [item.key]: !prev[item.key as keyof typeof filters],
                                            }))
                                        }
                                        className="accent-orange-500 w-4 h-4"
                                    />
                                    <span className="font-medium">{item.label}</span>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>


                {/* Center Main Content - Events List */}
                <div className="flex-1 flex flex-col space-y-6">

                    {/* Event Card 1 */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="flex-1 space-y-2">
                            <h3 className="font-bold text-gray-800 text-lg">
                                UIUX - Crunchbase Company Profile & Funding
                            </h3>
                            <p className="text-gray-400 text-sm">UIHUT • Sylhet, Bangladesh</p>
                            <p className="text-sm text-gray-600">
                                Contact Email mansurul@uiUX.com; Phone +8801777138513. UI UX is a platform for UX/UI designers, developers, and founders.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600">Remote</span>
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600">Part-time</span>
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600">Worldwide</span>
                            </div>
                        </div>
                        {/* Event Date */}
                        <div className="text-center md:pl-4">
                            <div className="border rounded-xl px-3 py-2 text-sm w-16">
                                <div className="font-bold text-blue-600 text-base">FEB</div>
                                <div className="font-bold text-gray-800 text-2xl">7</div>
                            </div>
                        </div>
                    </div>

                    {/* Event Card 2 */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="flex-1 space-y-2">
                            <h3 className="font-bold text-gray-800 text-lg">
                                Design Meetups USA | Dribbble
                            </h3>
                            <p className="text-gray-400 text-sm">Dribbble • Austin, Texas, USA</p>
                            <p className="text-sm text-gray-600">
                                Dribbble Meetups are a chance for designers to socialize, talk shop, and foster their local design communities.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600">Remote</span>
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600">Part-time</span>
                            </div>
                        </div>
                        {/* Event Date */}
                        <div className="text-center md:pl-4">
                            <div className="border rounded-xl px-3 py-2 text-sm w-16">
                                <div className="font-bold text-blue-600 text-base">FEB</div>
                                <div className="font-bold text-gray-800 text-2xl">3</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Sidebar */}
                <div className="w-full lg:w-96 flex flex-col space-y-6">

                    {/* Host a Meetup */}
                    <div className="bg-orange-500 rounded-2xl p-6 text-white flex flex-col gap-4 shadow-sm">
                        <h4 className="text-xl font-bold">Host a Meetup</h4>
                        <p className="text-sm">
                            Find other Hipnoders in your area so you can learn, share, and work together.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-orange-400 text-white py-2 px-4 rounded-lg text-sm font-semibold">
                                Code of Conduct
                            </button>
                            <button className="bg-white text-orange-500 py-2 px-4 rounded-lg text-sm font-semibold">
                                Host a Meetup
                            </button>
                        </div>
                    </div>

                    {/* Podcasts */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-4">Podcasts →</h4>
                        <div className="space-y-4 text-sm text-gray-600">
                            <div className="flex items-center justify-between">
                                <span>Selling a Business and Scaling...</span>
                                <span>→</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Mental health as a founder...</span>
                                <span>→</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Growing to 8.5k MRR...</span>
                                <span>→</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
