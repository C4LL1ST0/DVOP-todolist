import { ReactElement, useState } from "react";

export interface IEvent {
  heading: string;
  goal: string;
  setEventList: any;
}

export default function Event(props: {
  heading: string;
  goal: string;
  setEventList: any;
}) {

  let [done, setDone]= useState(false);

  const handleOnDel = () => {
    props.setEventList((prevEventList: IEvent[]) =>
      prevEventList.filter(
        (event) =>
          event.goal !== props.goal &&
          event.heading !== props.heading
      )
    );
  };

  const handleOnDone = () => {
    setDone(true);
  }

  if (done) {

    return (
      <div className="w-2/5 border-4 rounded-xl border-black bg-green-500">
        <div className="p-3 flex flex-nowrap flex-col gap-3 items-start justify-evenly">
          <h2 className="text-2xl font-bold">{props.heading}</h2>
          <p className="">{props.goal}</p>
        </div>
      </div>
    );

  } else {

    return (
      <div className="w-2/5 border-4 rounded-xl border-black bg-[#F2E5BF]">
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
            <button onClick={handleOnDone} className="border-2 rounded-xl border-black p-1 bg-green-500">
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }


  
  
}
