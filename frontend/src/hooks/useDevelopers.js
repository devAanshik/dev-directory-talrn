import { useState, useEffect } from "react";
import { fetchDevelopers, addDeveloper } from "../api/developers";

export default function useDevelopers() {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadDevelopers = async () => {
    try {
      setLoading(true);
      const res = await fetchDevelopers();
      setDevelopers(res.data || []);
    } catch (err) {
      console.error("Failed loading developers:", err);
    } finally {
      setLoading(false);
    }
  };

  const createDeveloper = async (payload) => {
    await addDeveloper(payload);
    await loadDevelopers();
  };

  useEffect(() => {
    loadDevelopers();
  }, []);

  return {
    developers,
    loading,
    createDeveloper,
  };
}
