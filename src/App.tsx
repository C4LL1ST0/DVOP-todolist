import { useEffect, useState } from "react";
import Event, { IEvent } from "./components/Event";
import FragmentView from "./components/FragmentView";
import Adder from "./components/Adder";
import { createClient } from "@supabase/supabase-js";

export default function App() {
  const [eventList, setEventsList] = useState<IEvent[]>([]);
  const key = import.meta.env.VITE_SUPABASE_KEY;
  const url = import.meta.env.VITE_APP_SUPABASE_URL;
  if (!key) {
    throw new Error("Supabase key is missing");
  }
  const supabase = createClient(
    url,
    key
  );

  const readF = async () => {
    const { data, error } = await supabase.from("todolist").select("*");

    if (error) {
      console.error("Error fetching data:", error.message);
    } else {
      console.log(data);
      setEventsList(data);
    }
  };

  useEffect(() => {
    readF();
    console.log(import.meta.env.VITE_SUPABASE_KEY);
  }, []);

  const createF = async (event: IEvent) => {
    const { error } = await supabase.from("todolist").insert(event);

    if (error) {
      console.error("Error inserting event:", error.message);
    }
  };

  const deleteF = async (heading: string, goal: string) => {
    const { error } = await supabase
      .from("todolist")
      .delete()
      .eq("heading", heading)
      .eq("goal", goal);

    if (error) {
      console.error("Error deleting event:", error.message);
    }
  };

  const updateF = async (heading: string, goal: string) => {
    const { error } = await supabase
      .from("todolist")
      .update({ done: true })
      .eq("heading", heading)
      .eq("goal", goal);

    if (error) {
      console.error("Error updating: ", error.message);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-10">
      <h1 className="font-extrabold text-3xl m-5">TODOLIST</h1>
      <Adder setEventList={setEventsList} createF={createF} />
      <div className="w-full flex items-start justify-evenly flex-col lg:flex-row">
        <FragmentView
          inputArray={eventList.map((event) => {
            return (
              <Event
                heading={event.heading}
                goal={event.goal}
                setEventList={setEventsList}
                deleteF={deleteF}
                done={event.done}
                updateF={updateF}
              />
            );
          })}
          style="w-3/4"
        />
      </div>
    </div>
  );
}
