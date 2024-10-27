import Image from "next/image";

type ProfileCardProps = {
  title: string;
  name: string;
  specialization: string;
  skills?: string[];
  imageUrl: string;
  altText: string;
};

const ProfileCard = ({
  title,
  name,
  specialization,
  skills,
  imageUrl,
  altText,
}: ProfileCardProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between p-4 md:p-12 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Image Section (on the left) */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 md:pr-8">
        <Image
          src={imageUrl}
          alt={altText}
          className="max-w-full h-auto rounded-lg shadow-md"
          width={500}
          height={500}
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-xl font-semibold text-gray-700 mt-2">{name}</p>
        <p className="text-md text-gray-600 mt-1">{specialization}</p>

        {/* Skills Section */}
        {skills && skills.length > 0 && (
          <ul className="mt-4 list-disc list-inside">
            {skills.map((skill, index) => (
              <li key={index} className="text-gray-600 text-sm">
                {skill}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
