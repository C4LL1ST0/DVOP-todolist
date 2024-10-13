import { ReactElement, useEffect, useState } from 'react';
import Event from './components/Event';
import FragmentView from './components/FragmentView';
import Adder from './components/Adder';

export default function App() {
  const [eventList, setEventsList] = useState<ReactElement[]>([]);
  
  useEffect(() => {
    const event1: ReactElement = <Event setEventList={setEventsList} heading='xd' goal='advjb a oidcn bvda iolnjksbac dahkcbaj ksdfgch vbnlksec lsdkv sdvac acdsf vsvdsca kldnckanl c sdlc d vjl s bcdailcj nddhj kojbjk hbgvha egdjkd cvsfs daca'/>
    const event2: ReactElement = <Event setEventList={setEventsList} heading='xb' goal='bdvjb a oidcn bvda iolnjksbac dahkcbaj ksdfgch vbnlksec lsdkv sdvac acdsf vsvdsca kldnckanl c sdlc d vjl s bcdailcj nddhj kojbjk hbgvha egdjkd cvsfs daca'/>
    const event3: ReactElement = <Event setEventList={setEventsList} heading='xa' goal='cdvjb a oidcn bvda iolnjksbac dahkcbaj ksdfgch vbnlksec lsdkv sdvac acdsf vsvdsca kldnckanl c sdlc d vjl s bcdailcj nddhj kojbjk hbgvha egdjkd cvsfs daca'/>

    setEventsList([event1, event2, event3]);
  }, []);

  return (
    
    <div className='w-full flex flex-col items-center gap-10'>
      <h1 className='font-extrabold text-3xl m-5'>TODOLIST</h1>
      <Adder setEventList={setEventsList}/>
      <div className='w-full flex items-start justify-evenly flex-col lg:flex-row'>
        <FragmentView inputArray={eventList} style="w-3/4" />
      </div>
    </div>
  )
}
