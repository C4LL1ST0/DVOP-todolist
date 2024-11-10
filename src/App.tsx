import { useState } from "react";
import Event, { IEvent } from "./components/Event";
import FragmentView from "./components/FragmentView";
import Adder from "./components/Adder";

export default function App() {
  const [eventList, setEventsList] = useState<IEvent[]>([]);

  return (
    <div className="w-full flex flex-col items-center gap-10">
      <h1 className="font-extrabold text-3xl m-5">TODOLIST</h1>
      <Adder setEventList={setEventsList} />
      <div className="w-full flex items-start justify-evenly flex-col lg:flex-row">
        <FragmentView inputArray={eventList.map((event) => {
          return <Event heading={event.heading} goal={event.goal} setEventList={setEventsList}/>;
        })} style="w-3/4" />
      </div>
    </div>
  );
}
