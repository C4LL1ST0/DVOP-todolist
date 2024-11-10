import { useState } from "react";
import { IEvent } from "./Event";

export default function Adder(props: {
  setEventList: any;
  createF(event: IEvent): void;
}) {
  const [heading, setHeading] = useState<string>("");
  const [goal, setGoal] = useState<string>("");

  const handleAddEvent = () => {
    if (heading && goal) {
      const newEvent: IEvent = {
        heading: heading,
        goal: goal,
        done: false,
      };
      props.setEventList((prevEventList: IEvent[]) => [
        ...prevEventList,
        newEvent,
      ]);
      props.createF(newEvent);

      setHeading("");
      setGoal("");
    }
  };

  return (
    <div className="p-10 bg-[#257180] rounded-xl flex gap-5">
      <input
        id="heading"
        type="text"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        placeholder="Heading"
        className="border rounded p-1"
      />
      <input
        id="goal"
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Goal"
        className="border rounded p-1"
      />
      <button
        onClick={handleAddEvent}
        className="border-2 rounded-xl border-black p-1 bg-green-500"
      >
        Add
      </button>
    </div>
  );
}
