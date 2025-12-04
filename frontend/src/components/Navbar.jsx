import Button from "./ui/Button";
import { useFormContext } from "../context/FormContext";

function Navbar() {
  const { openForm } = useFormContext();

  return (
    <header className="sticky top-0 bg-neutral-100/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto py-2 px-4 flex items-center justify-between">
        <a href="https://www.talrn.com">
          <img src="newlogo.png" alt="talrn logo" className="max-w-30" />
        </a>

        <ul className="flex items-center gap-2">
          <li>
            <Button variant="primary" onClick={openForm}>
              Add Dev
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
