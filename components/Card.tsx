import Image from "next/image";

type CardProps = {
  title: string;
  text: string[];
  imageUrl: string;
  altText: string;
};

const Card = ({ imageUrl, title, text, altText }: CardProps) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <div className="relative h-40 w-full">
        <Image
          src={imageUrl}
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        {text.map((paragraph, index) => (
          <p key={index} className="text-gray-500 text-sm mt-1">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
