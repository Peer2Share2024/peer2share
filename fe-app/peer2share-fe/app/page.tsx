import Image from "next/image";
import { ArrowDownToLine,ArrowUpToLine } from 'lucide-react'
import Link from "next/link";


export default function Home() {
  return (
   <div className="w-full bg-blue-500  h-96 flex flex-col justify-center items-center gap-2">
      
      <p className="font-extrabold text-6xl flex flex-col text-center ">
        <p className="flex flex-wrap">Study your exames with the lecture notes of students </p> 
         who took the same courses
      </p>

      <p className="font-semibold text-2xl">
        Study faster, understand better.
      </p>

    <div className="flex flex-col gap-2 text-lg">
      <div className="flex gap-1">
          <ArrowDownToLine/>  
            Download free online study, revision and lecture notes created by knowledgeable students and teachers. 
        </div>

        <div className="flex gap-1">
          <ArrowUpToLine />
            Upload your own study, revision and lecture notes
        </div>
    </div>

      
   </div>
  );
}
