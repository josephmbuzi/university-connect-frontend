import SidebarLeft from "@/components/SidebarLeft";
import CreatePostInput from "@/components/CreatePostInput";
import FeedPostCard from "@/components/FeedPostCard";
import SidebarRight from "@/components/SidebarRight";

export default function Home() {
  return (
    <div className="min-h-screen">
      

      <main className="flex bg-gray-50 justify-between mx-auto px-2 py-6 space-x-3">
        {/* Left Sidebar */}
        <SidebarLeft />

        {/* Middle Content */}
        <div className="flex-1 space-y-6">
          <CreatePostInput />
          <FeedPostCard />
          {/* Later you can map posts dynamically */}
        </div>

        {/* Right Sidebar */}
        <SidebarRight />
      </main>
    </div>
  );
}
