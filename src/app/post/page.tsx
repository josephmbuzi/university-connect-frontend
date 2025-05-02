"use client";

import Image from "next/image";
import { FaHeart, FaCommentDots, FaShare, FaFlag } from "react-icons/fa";

export default function PostDetailsPage() {
    return (
        <div className="bg-gray-50 min-h-screen px-4 md:px-10 py-4">
            {/* Top 3 Column Layout */}
            <div className="flex flex-col md:flex-row gap-6">

                {/* Left Sidebar */}
                <div className=" gap-4 hidden md:block">
                    <div className="bg-white rounded-2xl p-5 flex flex-col items-start gap-4 w-64">
                        {/* Heart */}
                        <div className="flex items-center gap-3">
                            <div className="bg-red-100 text-red-500 p-2 rounded-xl">
                                <FaHeart className="text-xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-900 text-sm">24,056 Heart</span>
                            </div>
                        </div>

                        {/* Comments */}
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-100 text-gray-400 p-2 rounded-xl">
                                <FaCommentDots className="text-xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-gray-600 text-sm">3086 Comments</span>
                            </div>
                        </div>

                        {/* Share */}
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-100 text-gray-400 p-2 rounded-xl">
                                <FaShare className="text-xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-gray-600 text-sm">84 Share</span>
                            </div>
                        </div>

                        {/* Report */}
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-100 text-gray-400 p-2 rounded-xl">
                                <FaFlag className="text-xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-gray-600 text-sm">Report</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Center Main Post Image */}
                <div className="flex-1 flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm">

                    {/* Post Image */}
                    <div className="w-full h-60 md:h-[400px] relative">
                        <Image
                            src="/assets/images/post1.webp"
                            alt="Post Cover"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Stats Section */}
                    <div className="flex items-center justify-between px-6 py-4 bg-white border-t">
                        {/* Likes */}
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <FaHeart className="text-red-500" />
                            <span>24,056 Likes</span>
                        </div>

                        {/* Comments */}
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <FaCommentDots className="text-gray-400" />
                            <span>3,086 Comments</span>
                        </div>

                        {/* Shares */}
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <FaShare className="text-gray-400" />
                            <span>84 Shares</span>
                        </div>

                        {/* Report */}
                        <button className="flex items-center gap-2 text-gray-400 text-sm hover:text-red-500">
                            <FaFlag />
                            <span>Report</span>
                        </button>
                    </div>

                </div>


                {/* Right Sidebar (Author Card) */}
                <div className="hidden md:block">
                    <div className="bg-white rounded-2xl p-6 text-center flex flex-col items-center gap-4 shadow-sm w-64">

                        {/* Avatar with soft background */}
                        <div className="w-24 h-24 rounded-full bg-indigo-50 flex items-center justify-center overflow-hidden">
                            <Image
                                src="/assets/images/avatar.heic"
                                alt="Author Avatar"
                                width={80}
                                height={80}
                                className="object-cover"
                            />
                        </div>

                        {/* Author Info */}
                        <div className="flex flex-col items-center">
                            <h4 className="font-bold text-gray-800 text-lg">Mansurul Haque</h4>
                            <p className="text-sm text-gray-400">Web Developer</p>
                        </div>

                        {/* Follow Button */}
                        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-6 py-2 rounded-lg font-semibold w-full">
                            Follow
                        </button>

                        {/* Joined Info */}
                        <p className="text-xs text-gray-400">joined 6 months ago</p>

                    </div>
                </div>


            </div>

            {/* Below: Rest of Post Details (Title, Tags, Content) */}
            <div className="mt-4 space-y-6 max-w-4xl mx-auto">

                {/* Post Title */}
                <h1 className="text-xl md:text-4xl font-bold text-gray-800 leading-snug">
                    Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women...
                </h1>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600">finance</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600">bitcoin</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600">crypto</span>
                </div>

                {/* Post Content */}
                <div className="prose prose-gray max-w-none text-gray-700 text-[15px] leading-relaxed">
                    <p>
                        Bitcoin has faced a massive correction in recent weeks, dropping from its record high
                        after three wise men and women commented on speculative excess in crypto markets...
                    </p>
                    <p>
                        Experts predict more volatility in the coming months as market conditions shift...
                    </p>
                </div>

                {/* Comments Section */}
                <div className="mt-10 space-y-8 max-w-3xl mx-auto mb-3">

                    {/* Comment Input Box */}
                    <div className="flex items-start gap-3">
                        {/* User Avatar */}
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image
                                src="/assets/images/avatar.heic"
                                alt="User Avatar"
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>

                        {/* Input Field */}
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Say something nice..."
                                className="w-full border rounded-full  px-5 py-2 bg-gray-50 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Emoji Button (Optional) */}
                        <button className="text-2xl">😃</button>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-6">

                        {/* Single Comment */}
                        <div className="flex items-start gap-4">

                            {/* Comment User Avatar */}
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <Image
                                    src="/assets/images/avatar.heic" // another user
                                    alt="Comment User Avatar"
                                    width={40}
                                    height={40}
                                    className="object-cover"
                                />
                            </div>

                            {/* Comment Body */}
                            <div className="flex-1 space-y-2">
                                {/* Username and Date */}
                                <div className="text-sm">
                                    <span className="font-bold text-gray-800">Mishacreatrix</span> • <span className="text-gray-400">Feb 01 • Edited on Feb 01</span>
                                </div>

                                {/* Comment Text */}
                                <div className="border border-gray-400 rounded-xl p-4 bg-gray-50 text-gray-700 text-[15px] leading-relaxed">
                                    As an ex-dev, I believed nocode to be only useful for small prototypes or landing pages.
                                    After tinkering around with Bubble, I now see that you can indeed build full apps!
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-6 text-gray-400 text-sm pt-2">
                                    <button className="flex items-center gap-1 hover:text-red-500">
                                        ❤️ Like
                                    </button>
                                    <button className="flex items-center gap-1 hover:text-blue-500">
                                        💬 Reply
                                    </button>
                                    <button className="flex items-center gap-1 hover:text-gray-600">
                                        ⋯ More
                                    </button>
                                </div>

                                {/* Reply (Nested) */}
                                <div className="flex items-start gap-3 pl-10 pt-4">

                                    {/* Reply User Avatar */}
                                    <div className="w-8 h-8 rounded-full overflow-hidden">
                                        <Image
                                            src="/assets/images/avatar.heic"
                                            alt="Reply User Avatar"
                                            width={32}
                                            height={32}
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Reply Body */}
                                    <div className="flex-1 space-y-2">
                                        <div className="text-sm">
                                            <span className="font-bold text-gray-800">PB, Delwar</span> • <span className="text-gray-400">Feb 01</span>
                                        </div>

                                        <div className="border rounded-xl p-3 bg-gray-50 text-gray-700 text-[14px] leading-relaxed">
                                            Yep 100% agreed! Nocode tools are getting really powerful!
                                        </div>

                                        {/* Reply Actions */}
                                        <div className="flex items-center gap-6 text-gray-400 text-sm pt-2">
                                            <button className="flex items-center gap-1 hover:text-red-500">
                                                ❤️ Like
                                            </button>
                                            <button className="flex items-center gap-1 hover:text-blue-500">
                                                💬 Reply
                                            </button>
                                            <button className="flex items-center gap-1 hover:text-gray-600">
                                                ⋯ More
                                            </button>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}
