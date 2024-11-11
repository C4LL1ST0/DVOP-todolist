import { useState } from "react";

export interface IEvent {
  heading: string;
  goal: string;
  done: boolean;
}

export default function Event(props: {
  heading: string;
  goal: string;
  setEventList: any;
  deleteF(heading: string, goal: string): void;
  done: boolean;
  updateF(heading: string, goal: string): void;
}) {
  let [done, setDone] = useState(props.done);

  const handleOnDel = () => {
    props.setEventList((prevEventList: IEvent[]) =>
      prevEventList.filter(
        (event) => event.goal !== props.goal && event.heading !== props.heading
      )
    );
    props.deleteF(props.heading, props.goal);
  };

  const handleOnDone = () => {
    setDone(true);
    props.updateF(props.heading, props.goal);
  };

  if (done) {
    return (
      <div className="w-2/5 min-w-20 border-4 rounded-xl border-black bg-green-500">
        <div className="p-3 flex flex-nowrap flex-col gap-3 items-start justify-evenly">
          <h2 className="text-2xl font-bold">{props.heading}</h2>
          <p className="">{props.goal}</p>
          <div className="w-full flex justify-evenly">
            <button
              onClick={handleOnDel}
              className="border-2 rounded-xl border-black p-1 bg-[#CB6040]"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-2/5 min-w-40 border-4 rounded-xl border-black bg-[#F2E5BF]">
        <div className="p-3 flex flex-nowrap flex-col gap-3 items-start justify-evenly">
          <h2 className="text-2xl font-bold">{props.heading}</h2>
          <p className="">{props.goal}</p>
          <div className="w-full flex justify-evenly">
            <button
              onClick={handleOnDel}
              className="border-2 rounded-xl border-black p-1 bg-[#CB6040]"
            >
              Delete
            </button>
            <button
              onClick={handleOnDone}
              className="border-2 rounded-xl border-black p-1 bg-green-500"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }
}
