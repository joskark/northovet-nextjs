import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  text: string[];
  imageUrl: string;
  altText: string;
  readMoreLink?: string;
};

const Card = ({ imageUrl, title, text, altText, readMoreLink }: CardProps) => {
  return (
    <div className="flex flex-col max-w-xs w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 h-full">
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
      {readMoreLink && (
        <div className="mt-auto p-4">
          <Link
            href={readMoreLink}
            className="text-blue-500 hover:underline font-semibold"
            rel="noopener noreferrer"
          >
            Διαβάστε περισσότερα →
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
