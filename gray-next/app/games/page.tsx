// app/games/page.tsx
import Link from "next/link";
import gamesData from "./data/games.json";

export default function GamesPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Games</h1>
      <ul className="space-y-4">
        {gamesData.map((game) => (
          <li key={game.id}>
            <Link href={`/games/${game.id}`}>{game.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
