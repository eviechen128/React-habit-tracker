import { createContext } from "react";

export type Habit = { id: string; name: string; completions: Date[] };

export type HabitContextValue = {
  habits: Habit[];
  addHabit: (name: string) => void;
  deleteHabit: (id: string) => void;
  toggleHabit: (id: string, date: Date) => void;
};

export const HabitContext = createContext<null | HabitContextValue>(null);
