"use client";

import { FaArrowRight, FaBehance, FaDribbble } from "react-icons/fa";
import { SiUplabs } from "react-icons/si";
import Image from "next/image";

export default function SidebarRight() {
  return (
    <div className="hidden lg:block w-96 space-y-6">
      {/* Meetups */}
      <div className="bg-white p-4 rounded-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-700 text-lg">Meetups</h3>
          <FaArrowRight className="text-gray-400 text-sm" />
        </div>

        {/* Meetup 1 */}
        <div className="flex items-start gap-3">
          {/* Date Box */}
          <div className="flex flex-col items-center justify-center w-14 h-14 bg-gray-100 rounded-lg">
            <span className="text-xs text-gray-400 font-bold">FEB</span>
            <span className="text-lg font-bold text-blue-600">7</span>
          </div>

          {/* Meetup Details */}
          <div className="flex-1 space-y-1">
            <h4 className="font-semibold text-gray-700 text-sm leading-tight">
              UIUX - Crunchbase Company Profile...
            </h4>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <SiUplabs className="text-blue-400" />
              <span>UIUX · Sylhet, Bangladesh</span>
            </div>
            {/* Tags */}
            <div className="flex gap-2 flex-wrap pt-1">
              <span className="bg-gray-100 px-2 py-1 rounded-full text-[10px] text-gray-600">Remote</span>
              <span className="bg-gray-100 px-2 py-1 rounded-full text-[10px] text-gray-600">Part-time</span>
              <span className="bg-gray-100 px-2 py-1 rounded-full text-[10px] text-gray-600">Worldwide</span>
            </div>
          </div>
        </div>

        {/* Meetup 2 */}
        <div className="flex items-start gap-3">
          <div className="flex flex-col items-center justify-center w-14 h-14 bg-gray-100 rounded-lg">
            <span className="text-xs text-gray-400 font-bold">FEB</span>
            <span className="text-lg font-bold text-blue-600">3</span>
          </div>

          <div className="flex-1 space-y-1">
            <h4 className="font-semibold text-gray-700 text-sm leading-tight">
              Design Meetups USA | Dribbble
            </h4>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <FaDribbble className="text-pink-400" />
              <span>Dribbble · Austin, Texas, USA</span>
            </div>
            <div className="flex gap-2 flex-wrap pt-1">
              <span className="bg-gray-100 px-2 py-1 rounded-full text-[10px] text-gray-600">Remote</span>
              <span className="bg-gray-100 px-2 py-1 rounded-full text-[10px] text-gray-600">Part-time</span>
            </div>
          </div>
        </div>

        {/* Meetup 3 */}
        <div className="flex items-start gap-3">
          <div className="flex flex-col items-center justify-center w-14 h-14 bg-gray-100 rounded-lg">
            <span className="text-xs text-gray-400 font-bold">FEB</span>
            <span className="text-lg font-bold text-blue-600">5</span>
          </div>

          <div className="flex-1 space-y-1">
            <h4 className="font-semibold text-gray-700 text-sm leading-tight">
              Meetup Brand Identity Design - Behance
            </h4>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <FaBehance className="text-blue-500" />
              <span>Behance · San Jose, California, USA</span>
            </div>
            <div className="flex gap-2 flex-wrap pt-1">
              <span className="bg-gray-100 px-2 py-1 rounded-full text-[10px] text-gray-600">Full Time</span>
              <span className="bg-gray-100 px-2 py-1 rounded-full text-[10px] text-gray-600">Contract</span>
              <span className="bg-gray-100 px-2 py-1 rounded-full text-[10px] text-gray-600">Worldwide</span>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-white p-4 rounded-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-700 text-lg">Podcasts</h3>
          <FaArrowRight className="text-gray-400 text-sm" />
        </div>

        {/* Podcast 1 */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 relative rounded-lg overflow-hidden">
            <Image
              src="/assets/images/post1.webp"
              alt="Podcast 1"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 text-sm leading-tight">
              Selling a Business and Scaling Another Amidst Tragedy.
            </h4>
            <p className="text-xs text-gray-400 mt-1">by Michele Hansen</p>
          </div>

          <FaArrowRight className="text-gray-400 text-sm" />
        </div>

        {/* Podcast 2 */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 relative rounded-lg overflow-hidden">
            <Image
              src="/assets/images/post1.webp"
              alt="Podcast 2"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 text-sm leading-tight">
              Mental health as a founder and the importance of community...
            </h4>
            <p className="text-xs text-gray-400 mt-1">by James McKinven</p>
          </div>

          <FaArrowRight className="text-gray-400 text-sm" />
        </div>

        {/* Podcast 3 */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 relative rounded-lg overflow-hidden">
            <Image
              src="/assets/images/post1.webp"
              alt="Podcast 3"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 text-sm leading-tight">
              Growing to $8.5k MRR in 1 year - Marie Martens, Tally.so
            </h4>
            <p className="text-xs text-gray-400 mt-1">by Mahfuzul Nabil</p>
          </div>

          <FaArrowRight className="text-gray-400 text-sm" />
        </div>

        {/* Podcast 4 */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 relative rounded-lg overflow-hidden">
            <Image
              src="/assets/images/post1.webp"
              alt="Podcast 4"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 text-sm leading-tight">
              Mental Health and Bootstrapping in 2022 with Rob Walling of TinySe
            </h4>
            <p className="text-xs text-gray-400 mt-1">by Dr. Jubed</p>
          </div>

          <FaArrowRight className="text-gray-400 text-sm" />
        </div>

        {/* Podcast 5 */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 relative rounded-lg overflow-hidden">
            <Image
              src="/assets/images/post1.webp"
              alt="Podcast 5"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 text-sm leading-tight">
              Money, Happiness, and Productivity as a Solo Founder with Pieter Levels
            </h4>
            <p className="text-xs text-gray-400 mt-1">by Jesse Hanley</p>
          </div>

          <FaArrowRight className="text-gray-400 text-sm" />
        </div>
      </div>
    </div>
  );
}
