import Link from "next/link";
import { tools } from "./data/tools";

export default function ToolsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Tools</h1>
      <ul className="space-y-4">
        {tools.map((tool) => (
          <li key={tool.id}>
            <Link href={`/tools/${tool.id}`}>{tool.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
