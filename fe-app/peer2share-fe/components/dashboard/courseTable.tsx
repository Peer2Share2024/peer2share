"use client"

import * as React from "react"
import {
    ColumnDef
} from "@tanstack/react-table"

import { DataTable } from "@/components/ui/data-table"
import { Courses } from '@/types/type'


const data: Courses[] = [

    {
        notename: "Sorting Algorithms",
        coursename: "CMPE223",
        university: "TEDU",
        faculity: "Computer Engineering",
        numberoflikes: 1905

    },
    {
        notename: "Supervised ML",
        coursename: "Intro to ML",
        university: "TEDU",
        faculity: "Computer Engineering",
        numberoflikes: 1905

    }
]


export const columns: ColumnDef<Courses>[] = [
    {
        accessorKey:"notename",
        header:"Note Name"
      },
      {
        accessorKey:"coursename",
        header:"Course Name"
      },
      {
        accessorKey:"university",
        header:"University"
      },
      {
        accessorKey:"faculity",
        header:"Faculity"
      },
      {
        accessorKey:"numberoflikes",
        header:"Num Of Likes"
      }
]


export function CourseTables(){
    return (
        <div className="w-full">
          <DataTable data={data} columns={columns} ></DataTable>
        </div>
      )
    
}