"use client"
import {
    Card, CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { GetStaticPaths, GetStaticProps } from "next";

import style from './coursenotes.module.css';
import {
    Table, TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";




export default function NotePage({ notename }: any) {
    console.log(notename)
    console.log("ssss")

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '24px', marginBottom: '40px'}}>

                <Card style={{ width: '30%'}}>
                    <CardHeader>
                        <CardTitle>Sorting Algorithms</CardTitle>
                        
                    </CardHeader>
                    <CardContent>
                        <p>Here is the link for course note</p>
                    </CardContent>
                    <CardFooter>
                        <a>Download</a>
                    </CardFooter>
                </Card>

                <Card style={{ width: '30%'}}>
                    <CardHeader>
                        <CardTitle>Lecture Note Info</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Note Name: Sorting Algorithms</p>
                        <p>Course Name: CMPE223</p>
                        <p>Rating: 9</p>
                    </CardContent>
                    
                </Card>
            </div>

            <Table>
                <TableCaption>Comments on this .pdf file.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">User Commented</TableHead>
                        <TableHead>Likes</TableHead>
                        <TableHead>Comment</TableHead>
                        <TableHead className="text-right">Answer the comment</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Murat Kaan</TableCell>
                        <TableCell>9</TableCell>
                        <TableCell>Very Helpful!! Thank a lot!</TableCell>
                        <TableCell className="text-right">2</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </>
    )
}