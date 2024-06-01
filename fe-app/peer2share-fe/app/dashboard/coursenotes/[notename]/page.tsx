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
                        <CardTitle>Card Title1 {notename}</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content1</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer1</p>
                    </CardFooter>
                </Card>

                <Card style={{ width: '30%'}}>
                    <CardHeader>
                        <CardTitle>Card Title2 {notename}</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content2</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer2</p>
                    </CardFooter>
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
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </>
    )
}