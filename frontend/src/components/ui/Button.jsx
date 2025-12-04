function Button({ variant, type = "button", className, onClick, children }) {
  const styles = {
    base: "px-6 py-2 rounded-full transition duration-300 ease-out cursor-pointer",
    primary: "bg-accent hover:bg-accent-dark text-white shadow-md",
    secondary: "",
    default: "bg-neutral-200",
  };

  return (
    <button
      type={type}
      className={`${styles.base} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
