import DeveloperCard from "./DeveloperCard";

export default function DeveloperList({ developers }) {
  if (!developers.length) {
    return <p className="text-center px-4 sm:px-6">No developers found!</p>;
  }

  return (
    <ul className="flex gap-4 justify-start flex-wrap px-4 sm:px-6">
      {developers.map((dev) => (
        <DeveloperCard key={dev._id} dev={dev} />
      ))}
    </ul>
  );
}
