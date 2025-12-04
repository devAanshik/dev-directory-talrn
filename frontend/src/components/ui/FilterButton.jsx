function FilterButton({ selected, onClick, children }) {
  return (
    <button
      className={`
        px-4 py-1 text-sm rounded-full cursor-pointer transition duration-300 ease-out ring
        ${
          selected
            ? "text-accent ring-accent"
            : "hover:text-neutral-900 hover:ring-neutral-300 ring-transparent"
        }
        `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default FilterButton;
