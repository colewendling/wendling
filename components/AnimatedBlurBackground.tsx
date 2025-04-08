import Image from "next/image";
import backgroundImage from "@/public/images/general/background.jpg";

export const AnimatedBlurBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Animated Background"
        fill
        priority
        placeholder="blur"
        className="object-cover opacity-80 animated-background"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
    </div>
  );
};