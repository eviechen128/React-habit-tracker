import { useState, type SubmitEvent } from "react";
import { Button } from "./Button";
import { useHabits } from "../hooks/useHabits";

export function HabitForm() {
  const [name, setName] = useState("");
  const { addHabit } = useHabits();

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    if (name.trim() === "") return;
    setName("");
    addHabit(name);
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 rounded-lg border border-emerald-800/70 bg-emerald-950 px-4 py-2 outline-none placeholder:text-emerald-300/60 focus-visible:ring-2 focus-visible:ring-emerald-300"
        placeholder="New Habit..."
      />
      <Button disabled={name.trim() === ""}>Add Habit</Button>
    </form>
  );
}
