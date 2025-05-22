// app/page.tsx
import ProjectCards from "@/components/ProjectCards";
import HomeIntro from "@/components/HomeIntro";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 justify-between">
      <Section variant="animated">
        <HomeIntro />
      </Section>
      <div>
        <h1 className=" text-sm md:text-base tracking-widest text-white text-right opacity-70 px-10">
          Projects
        </h1>
        <Section variant="solid">
          <ProjectCards />
        </Section>
      </div>
    </div>
  );
}
