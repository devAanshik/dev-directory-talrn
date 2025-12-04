export default function DeveloperCard({ dev }) {
  return (
    <article className="py-6 px-5 min-w-2xs max-w-xs flex-1 rounded-lg ring ring-neutral-200 hover:ring-neutral-300">
      <div className="grid gap-5">
        <div className="grid gap-2">
          <div className="flex items-end justify-between">
            <h5 className="text-2xl text-neutral-900">{dev.name}</h5>
            <span
              title={`${dev.experience} years Experience`}
              className="cursor-default"
            >
              {dev.experience}y
            </span>
          </div>

          <p className="text-sm font-medium">{dev.role} Developer</p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {dev.techStack.map((skill) => (
            <span
              key={skill}
              className="bg-neutral-200/50 hover:bg-neutral-200 text-xs text-neutral-900 font-semibold px-2.5 py-1.5 rounded-sm cursor-default transition ease-out duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
