import { createContext, useContext, useState } from "react";

const FormContext = createContext(null);

export function FormProvider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  const toggleForm = () => setIsFormOpen((p) => !p);

  return (
    <FormContext.Provider
      value={{
        isFormOpen,
        openForm,
        closeForm,
        toggleForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useFormContext must be used inside FormProvider");
  return ctx;
}
