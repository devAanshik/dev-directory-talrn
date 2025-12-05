import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "./ui/Button";
import { useFormContext } from "../context/FormContext";
import { BsX } from "react-icons/bs";

function AddDeveloperForm({ onSubmit }) {
  const { register, handleSubmit, reset } = useForm();
  const { isFormOpen, closeForm } = useFormContext();

  if (!isFormOpen) return null;

  const handleForm = async (form) => {
    if (!form.name || !form.role || !form.techStack || !form.experience) {
      toast.error("All fields are required");
      return;
    }

    if (isNaN(form.experience) || Number(form.experience) < 0) {
      toast.error("Experience must be a positive number");
      return;
    }

    try {
      await onSubmit(form);
      toast.success("Developer added");
      reset();
      closeForm();
    } catch (err) {
      toast.error("Failed to add developer");
    }
  };

  const inputStyles =
    "px-2 py-2 text-sm min-w-3xs bg-neutral-50 text-neutral-900 inset-shadow-sm inset-shadow-neutral-900/10 ring ring-neutral-300 focus:ring-neutral-700 outline-0 rounded-sm transition duration-300 ease-out";

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center px-4 py-4 bg-neutral-200/30 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit(handleForm)}
        className="grid grid-cols-1 gap-6 rounded-lg bg-neutral-100 px-4 min-[23rem]:px-10 py-12 shadow-lg"
      >
        <div className="flex items-center justify-between">
          <h4 className="text-neutral-900 text-xl leading-none">Add Details</h4>

          <Button className="hover:bg-neutral-200 p-0.5!" onClick={closeForm}>
            <BsX className="text-2xl" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-y-5 items-baseline">
          <fieldset className="space-y-2">
            <legend className="text-xs font-semibold">Name</legend>

            <input
              className={inputStyles}
              placeholder="Name"
              {...register("name")}
            />
          </fieldset>

          <select {...register("role")} className={inputStyles}>
            <option value="">Select role</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Full-Stack">Full-Stack</option>
          </select>

          <fieldset className="space-y-2">
            <legend className="text-xs font-semibold">
              Tech stack (comma seperated)
            </legend>

            <input
              className={inputStyles}
              placeholder="Tech stack"
              {...register("techStack")}
            />
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="text-xs font-semibold">
              Experience (in years)
            </legend>

            <input
              className={inputStyles}
              type="number"
              placeholder="Experience"
              {...register("experience")}
            />
          </fieldset>
        </div>

        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          <Button type="submit" variant="primary">
            Add Dev
          </Button>

          <Button
            variant="default"
            className="hover:bg-red-600 hover:text-white shadow-md"
            onClick={closeForm}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddDeveloperForm;
