import { AnimatedBlurBackground } from "@/components/AnimatedBlurBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBlurBackground />
      <div className="relative z-10 container mx-auto py-20 px-6 text-white">
        <h1 className="text-5xl md:text-7xl font-bold">Welcome</h1>
        <p className="mt-4 text-xl md:text-2xl">
          Cole Wendling | Fullstack Software Engineer
        </p>
      </div>
    </div>
  );
}
