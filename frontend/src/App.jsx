import { useState, useMemo } from "react";
import { Toaster } from "react-hot-toast";

import useDevelopers from "./hooks/useDevelopers";
import AddDeveloperForm from "./components/AddDeveloperForm";
import DeveloperFilters from "./components/DeveloperFilters";
import DeveloperList from "./components/DeveloperList";
import Navbar from "./components/Navbar";

function App() {
  const { developers, loading, createDeveloper } = useDevelopers();

  const [roleFilter, setRoleFilter] = useState("All");
  const [techFilter, setTechFilter] = useState("");

  const filteredDevelopers = useMemo(() => {
    return developers.filter((dev) => {
      const matchesRole = roleFilter === "All" || dev.role === roleFilter;

      const techString = dev.techStack.join(", ").toLowerCase();
      const matchesTech =
        !techFilter.trim() ||
        techString.includes(techFilter.trim().toLowerCase());

      return matchesRole && matchesTech;
    });
  }, [developers, roleFilter, techFilter]);

  return (
    <>
      <Toaster />
      <AddDeveloperForm onSubmit={createDeveloper} />

      <Navbar />
      <main className="max-w-5xl mx-auto space-y-4 px-4">
        <section className="px-4 py-10">
          <h1 className="text-center text-5xl text-accent font-bold">
            Developer Directory
          </h1>
        </section>

        <DeveloperFilters
          roleFilter={roleFilter}
          techFilter={techFilter}
          setRoleFilter={setRoleFilter}
          setTechFilter={setTechFilter}
        />
        {loading ? (
          <p>Loading developers...</p>
        ) : (
          <DeveloperList developers={filteredDevelopers} />
        )}
      </main>
    </>
  );
}

export default App;
