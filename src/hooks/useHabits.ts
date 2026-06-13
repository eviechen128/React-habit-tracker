import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";

export function useHabits() {
  const habitContext = useContext(HabitContext);
  if (habitContext == null) throw new Error("Null context");

  return habitContext;
}
