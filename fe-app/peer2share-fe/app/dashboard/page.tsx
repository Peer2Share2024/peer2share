"use client"
import React from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CourseTables } from "@/components/dashboard/courseTable";
import { Button } from "@/components/ui/button";


import { getNotes } from "@/components/services/getAllNotes";




function page() {

    const [notes, setNotes] = React.useState([])


  React.useEffect(() => {
    getNotes().then(data => {
      setNotes(data);
    }).catch(error => {
      console.error('Error fetching items:', error);
    });
  }, []);
  
    return (
        <>
            <Card className="">
                <CardHeader>
                    <CardTitle>Course Notes</CardTitle>
                    <CardDescription>
                        There are {notes} .pdf notes on Peer2Share
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <CourseTables />
                </CardContent>


            </Card>

            <Card className="pb-16">
                <CardHeader>
                    <CardTitle>Files You Uploaded</CardTitle>
                    <CardDescription>
                        You Have uploaded {1905} .pdf files on Peer2Share
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <CourseTables />
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Delete</Button>
                    <Button>Upload .pdf</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default page;