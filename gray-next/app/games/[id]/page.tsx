// app/games/[id]/page.tsx
import gamesData from "../data/games.json";

export default function GamePage({ params }: { params: { id: string } }) {
  const game = gamesData.find((game) => game.id === params.id);

  if (!game) {
    return <div className="p-8 text-red-600">Game not found!</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
      <img src={game.image} alt={game.title} className="mb-4" />
      <p className="text-lg">{game.description}</p>
    </div>
  );
}
