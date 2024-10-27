import Image from "next/image";

type TextImageProps = {
  title: string;
  text: string[];
  imageUrl: string;
  altText: string;
  reverse?: boolean;
};

const TextImage = ({
  title,
  text,
  imageUrl,
  altText,
  reverse = false,
}: TextImageProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center md:justify-between p-6 md:p-12 max-w-6xl mx-auto`}
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0 text-left">
        {/* Title styling */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {title}
        </h1>

        {/* Map over the text array to create paragraphs */}
        {text.map((paragraph, index) => (
          <p
            key={index}
            className="text-lg md:text-xl font-medium text-gray-800 mb-4"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={imageUrl}
          alt={altText}
          className="max-w-full h-auto rounded-lg shadow-lg"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default TextImage;
