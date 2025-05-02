"use client";

import { FaBitcoin, FaBolt, FaCode, FaPaintBrush, FaPenFancy, FaPlayCircle, FaSearch, FaStar, FaUserFriends } from "react-icons/fa";

export default function SidebarLeft() {
    return (
        <div className="hidden lg:block w-64 space-y-6">
            <div className="bg-white p-4 rounded-2xl space-y-4">
                {/* Newest and Recent */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 text-green-500 flex items-center justify-center rounded-full text-lg">
                        <FaBolt />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Newest and Recent</h4>
                        <p className="text-xs text-gray-400">Find the latest update</p>
                    </div>
                </div>

                {/* Popular of the day */}
                <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-lg">
                    <div className="w-10 h-10 bg-yellow-100 text-yellow-500 flex items-center justify-center rounded-full text-lg">
                        <FaStar />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Popular of the day</h4>
                        <p className="text-xs text-gray-400">Shots featured today by curators</p>
                    </div>
                </div>

                {/* Following */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 text-orange-500 flex items-center justify-center rounded-full text-lg">
                        <FaUserFriends />
                    </div>
                    <div className="flex items-center gap-2">
                        <div>
                            <h4 className="font-semibold text-gray-800 text-sm">Following</h4>
                            <p className="text-xs text-gray-400">Explore from your favorite person</p>
                        </div>
                        {/* Orange badge */}
                        <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            24
                        </span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 rounded-2xl">
                <h3 className="font-bold mb-4 text-gray-700 text-lg">Popular Tags</h3>

                <ul className="space-y-4 text-sm">
                    {/* Tag: JavaScript */}
                    <li className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-100 text-orange-500 flex items-center justify-center rounded-xl text-lg">
                            <FaCode />
                        </div>
                        <div>
                            <div className="font-semibold text-gray-600 cursor-pointer hover:underline">#javascript</div>
                            <div className="text-gray-400 text-xs">82,645 Posted by this tag</div>
                        </div>
                    </li>

                    {/* Tag: Bitcoin */}
                    <li className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-pink-100 text-pink-500 flex items-center justify-center rounded-xl text-lg">
                            <FaBitcoin />
                        </div>
                        <div>
                            <div className="font-semibold text-gray-600 cursor-pointer hover:underline">#bitcoin</div>
                            <div className="text-gray-400 text-xs">65,523 Posted • Trending</div>
                        </div>
                    </li>

                    {/* Tag: Design */}
                    <li className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-100 text-blue-500 flex items-center justify-center rounded-xl text-lg">
                            <FaPaintBrush />
                        </div>
                        <div>
                            <div className="font-semibold text-gray-600 cursor-pointer hover:underline">#design</div>
                            <div className="text-gray-400 text-xs">51,354 • Trending in Bangladesh</div>
                        </div>
                    </li>

                    {/* Tag: Blogging */}
                    <li className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-yellow-100 text-yellow-500 flex items-center justify-center rounded-xl text-lg">
                            <FaPenFancy />
                        </div>
                        <div>
                            <div className="font-semibold text-gray-600 cursor-pointer hover:underline">#blogging</div>
                            <div className="text-gray-400 text-xs">48,029 Posted by this tag</div>
                        </div>
                    </li>

                    {/* Tag: Tutorial */}
                    <li className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-green-100 text-green-500 flex items-center justify-center rounded-xl text-lg">
                            <FaPlayCircle />
                        </div>
                        <div>
                            <div className="font-semibold text-gray-600 cursor-pointer hover:underline">#tutorial</div>
                            <div className="text-gray-400 text-xs">51,354 • Trending in Bangladesh</div>
                        </div>
                    </li>

                    {/* Tag: SEO */}
                    <li className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-purple-100 text-purple-500 flex items-center justify-center rounded-xl text-lg">
                            <FaSearch />
                        </div>
                        <div>
                            <div className="font-semibold text-gray-600 cursor-pointer hover:underline">#seo</div>
                            <div className="text-gray-400 text-xs">82,645 Posted by this tag</div>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Pinned Groups */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2 text-gray-700">Pinned Groups</h3>
                <ul className="space-y-2 text-sm">
                    <li>#javascript</li>
                    <li>#bitcoin</li>
                    {/* More... */}
                </ul>
            </div>
        </div>
    );
}
