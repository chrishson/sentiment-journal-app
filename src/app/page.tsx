import Journal from "@/components/features/Journal";

export default async function Home() {

  return (
    <main className="container flex flex-col h-screen md:w-1/4 p-2 pb-16 pt-4">
      <Journal />
    </main>
  );
}
