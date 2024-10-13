import { ReactElement } from "react";

export default function FragmentView(props: {
  inputArray: ReactElement[];
  style?: string;
}) {
  return (
    <div
      className={
        props.style +
        " flex flex-wrap gap-10 justify-evenly items-center bg-[#257180] rounded-xl p-10"
      }
    >
      {props.inputArray}
    </div>
  );
}
