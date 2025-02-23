import Tiles from "@/components/tiles";

export default function Home() {
  return (
    <div className="bg-gradient-diagonal from-theme-start to-theme-end min-h-screen flex flex-col items-center justify-around text-white text-2xl">
      <div className="flex flex-col items-center justify-center">
        <h1>Memory Game</h1>
        <p>
          Click on a card to flip it over. Find the matching card to score a
          point!
        </p>
      </div>
      <div>
        <Tiles />
      </div>
    </div>
  );
}
