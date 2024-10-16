import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4">
        <h1>Hello word</h1>
        <p>This is a content to make our page longer</p>
        <div className="w-full h-screen bg-teal-300"></div>
        <p>Lorem Ipsum is simply dummy text ...</p>
      </div>
    </>
  );
}
