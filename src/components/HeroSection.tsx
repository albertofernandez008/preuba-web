import { motion } from "framer-motion";

const brandCurve = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://via.placeholder.com/1200x800"
          alt="Plato de pulpo servido en cerámica artesanal"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* logo, texto y botón como antes */}
      </div>
    </section>
  );
};

export default HeroSection;