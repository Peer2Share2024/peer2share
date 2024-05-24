import Image from "next/image";
import { ArrowDownToLine, ArrowUpToLine } from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div>
        <div className="w-full bg-blue-500 h-[26rem] md:h-[30rem] flex flex-col justify-center items-center gap-6 p-10">
          <div className="font-bold md:font-extrabold text-3xl text-center md:text-[2rem] lg:text-[2.5rem] xl:text-6xl">
            <span>Study your exams with the lecture notes of students </span> 
            <span>who took the same courses</span>
          </div>

          <p className="font-semibold text-2xl mb-4">
            Study faster, understand better.
          </p>

          <div className="flex flex-col gap-2 text-lg mx-auto">
            <div className="flex gap-1 font-medium">
              <ArrowDownToLine color="#0cc40f"/>  
              <span>Download free online study, revision and lecture notes created by knowledgeable students and teachers.</span>
            </div>

            <div className="flex gap-1 font-medium">
              <ArrowUpToLine color="#eb0a2a"/>
              <span>Upload your own study, revision and lecture notes.</span>
            </div>
          </div>
        </div>

        <div className="w-full bg-yellow-50 max-h-[70rem] p-8">
          <img className="h-32 w-32 left-20 relative mb-2" src="/notebook.png" alt="people"></img>
          <div className="flex gap-4 justify-center items-center mx-auto border-4">
            <img className="h-[30rem] w-[36rem] sm:h-[20rem] sm:w-[22rem] md:w-3/4 md:h-3/4 rounded-md" src="/junge.jpg" alt="people"></img>
            <p className="font-extrabold sm:text-xl md:text-4xl lg:text-6xl break-words align-middle">90% of students improve their exam results with proven Peer2Share lecture notes.</p>
          </div>
        </div>

        <div className="w-full h-72 font-extrabold text-3xl flex flex-col justify-center items-center gap-4">
          <p>Study faster, understand better.</p> 
          <Button type="submit" className="w-[12rem]">Sign Up</Button>
        </div>

      </div>

    </div>
    
  );
}
