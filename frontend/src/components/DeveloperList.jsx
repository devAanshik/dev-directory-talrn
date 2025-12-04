import DeveloperCard from "./DeveloperCard";

export default function DeveloperList({ developers }) {
  if (!developers.length) {
    return (
      <section className="flex gap-4 justify-center flex-wrap max-w-5xl mx-auto py-10 px-4">
        <p>No developers found</p>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto py-6 space-y-6 bg-neutral-50 rounded-xl shadow">
      <h2 className="relative text-xl text-neutral-900 font-semibold px-4 sm:px-6">
        <span className="absolute top-0 left-0 bg-accent w-1 rounded-r-full h-full"></span>
        Developers
      </h2>

      <ul className="flex gap-4 justify-center flex-wrap px-4 sm:px-6">
        {developers.map((dev) => (
          <DeveloperCard key={dev._id} dev={dev} />
        ))}
      </ul>
    </section>
  );
}
