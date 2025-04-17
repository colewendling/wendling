// app/page.tsx
import ProjectCards from "@/components/ProjectCards";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    // <div>
    //   <div className="relative z-10 container mx-auto py-20 px-6 md:pl-[20%] md:px-8 text-white min-h-screen flex items-center">
    //     <ProfileCard />
    //   </div>
    //   <div className="w-full bg-thumbnails-bgcolor">
    //     <div className="relative z-10 container mx-auto py-20 px-6 md:pl-[20%] md:px-8 text-white">
    //       <ProjectCards />
    //     </div>
    //   </div>
    // </div>
    <div className="py-20 px-20 space-y-20">
      <ProfileCard />
      <ProjectCards />
    </div>
  );
}
