"use client"

import * as React from "react"
import {
  ColumnDef
} from "@tanstack/react-table"

import { DataTable } from "@/components/ui/data-table"
import { Notes } from '@/types/type'

import { getNotes } from "../services/getAllNotes"
import { error } from "console"





export const columns: ColumnDef<Notes>[] = [
  {
    accessorKey: "id",
    header: "id"
  },
  {
    accessorKey: "name",
    header: "Course Name"
  },
  {
    accessorKey: "description",
    header: "Description"
  },
  {
    accessorKey: "university",
    header: "University"
  },
  {
    accessorKey: "date",
    header: "createdAt"
  },
  {
    accessorKey: "averageRating",
    header: "Average Rating"
  }
]


export function CourseTables() {

  const [notes, setNotes] = React.useState([])


  React.useEffect(() => {
    getNotes().then(data => {
      setNotes(data);
    }).catch(error => {
      console.error('Error fetching items:', error);
    });
  }, []);


  console.log(notes)
  return (
    <div className="w-full">
      <DataTable data={notes} columns={columns} ></DataTable>
    </div>
  )

}