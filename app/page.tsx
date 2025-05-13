// app/page.tsx
import ProjectCards from "@/components/ProjectCards";
import ProfileCard from "@/components/ProfileCard";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="">
      <Section variant="animated">
        <ProfileCard />
      </Section>
      <h1 className="text-xl tracking-widest text-white text-right px-10 md:px-20 opacity-70">
        Projects
      </h1>
      <Section variant="solid">
        <ProjectCards />
      </Section>
    </div>
  );
}
