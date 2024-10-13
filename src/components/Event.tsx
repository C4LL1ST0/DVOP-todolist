import { ReactElement, useState } from "react";



export default function Event(props: {heading: string, goal: string, setEventList: any}){
    const handleOnDone = () => {
        props.setEventList((prevEventList: ReactElement[]) => prevEventList.filter(event => event.props.goal !== props.goal && event.props.heading !== props.heading));
        setDone(
            <div className="w-2/5 border-4 rounded-xl border-black bg-green-500">
                <div className="p-3 flex flex-nowrap flex-col gap-3 items-start justify-evenly">
                    <h2 className="text-2xl font-bold">{props.heading}</h2>
                    <p className="">{props.goal}</p>
                </div>  
            </div>
        );
        
    };

    const handleOnDel = () => {
        props.setEventList((prevEventList: ReactElement[]) => prevEventList.filter(event => event.props.goal !== props.goal && event.props.heading !== props.heading));
    }
    
    const [done, setDone] = useState(
        <div className="w-2/5 border-4 rounded-xl border-black bg-[#F2E5BF]">
                <div className="p-3 flex flex-nowrap flex-col gap-3 items-start justify-evenly">
                    <h2 className="text-2xl font-bold">{props.heading}</h2>
                    <p className="">{props.goal}</p>
                    <div className="w-full flex justify-evenly">
                        <button onClick={handleOnDone} className="border-2 rounded-xl border-black p-1 bg-green-500">Done</button>                        
                        <button onClick={handleOnDel} className="border-2 rounded-xl border-black p-1 bg-[#CB6040]">Delete</button>
                    </div>
                </div>
        </div>
    );

    return(done);   
}