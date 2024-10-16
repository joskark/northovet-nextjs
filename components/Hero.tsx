import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-teal-900 text-white">
      {/* Background image */}
      <div className="absolute inset-0 opacity-70">
        <Image
          src="/puppies-on-grass.jpg"
          alt="Puppies on the grass"
          fill={true}
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-24 px-4 text-center md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Καλωσήρθατε στη NorthoVet
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Ο κάθε ασθενής μας είναι μοναδικά ξεχωριστός και ξεχωριστά
          μοναδικός!!!
        </p>
        <div className="flex justify-center space-x-4"></div>
      </div>
    </section>
  );
};

export default Hero;
