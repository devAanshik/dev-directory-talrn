import FilterButton from "./ui/FilterButton";

export default function DeveloperFilters({
  roleFilter,
  techFilter,
  setRoleFilter,
  setTechFilter,
}) {
  return (
    <section className="max-w-5xl mx-auto py-6 px-4 sm:px-6 rounded-xl bg-neutral-50 shadow">
      <div className="flex items-center sm:justify-between justify-center flex-wrap gap-6">
        <ul className="flex gap-2 items-center justify-center flex-wrap">
          {["All", "Frontend", "Backend", "Full-Stack"].map((option) => (
            <FilterButton
              key={option}
              selected={option === roleFilter}
              onClick={() => setRoleFilter(option)}
            >
              {option}
            </FilterButton>
          ))}
        </ul>

        <input
          className="px-2 py-2 text-sm min-w-3xs text-neutral-900 ring ring-neutral-300 focus:ring-neutral-700 outline-0 rounded-sm transition duration-300 ease-out"
          placeholder="Search by tech"
          value={techFilter}
          onChange={(e) => setTechFilter(e.target.value)}
        />
      </div>
    </section>
  );
}
