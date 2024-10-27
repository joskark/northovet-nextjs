import Card from "./Card";

interface Card {
  title: string;
  text: string[];
  imageUrl: string;
  altText: string;
  readMoreLink?: string;
}

interface CardGridProps {
  cards: Card[];
}

const CardGrid = ({ cards }: CardGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          text={card.text}
          imageUrl={card.imageUrl}
          altText={card.altText}
          readMoreLink={card.readMoreLink}
        />
      ))}
    </div>
  );
};

export default CardGrid;
