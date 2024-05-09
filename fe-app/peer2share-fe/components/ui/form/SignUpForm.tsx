'use client';

import { Form, FormControl, FormField, FormItem, FormLabel,FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { Input } from "../input";
import { Button } from "../button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
    Select,
  } from "@/components/ui/select";

const formSchema = z.object({
    email: z.string().min(5,"email required").email('Invalid email'),
    universityName: z.string(),
    password:z.string().min(8,'Password must be atleast 8 characters'),
    passwordConfirm:z.string().min(8,),
    accountType: z.enum(["student","teacher"])
}) .refine((data)=>{
    return data.password===data.passwordConfirm
},{
    message:"Passwords must match",
    path:["passwordConfirm"]
})
 
const onSubmit = (values:z.infer<typeof formSchema>) =>{ 
    console.log(values)
}

const SignUpForm = () => {
    //map all of the fields with our formSchema 
   const form = useForm<z.infer<typeof formSchema>>({
    //revalidate data based on the chandes on form
    resolver:zodResolver(formSchema)
   })

  return (
    <div className="space-y-4">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
                
{/*                 <FormField control={form.control} name="email" render={({field})=>{
                    return <FormItem>
                        <FormMessage>
                            <FormLabel>Email</FormLabel>
                            <FormControl> 
                                <Input placeholder="mail@example.com" type="email" {...field}/>
                            
                            </FormControl>
                        </FormMessage>
                    </FormItem>
                }}/>
                

                <FormField control={form.control} name="universityName" render={({field})=>{
                    return <FormItem>
                        <FormMessage>
                            <FormLabel>University Name</FormLabel>
                            <FormControl> 
                                <Input placeholder="TEDU" type="name" {...field}/>
                            </FormControl>
                        </FormMessage>
                    </FormItem>
                }}/>


                <FormField
                    control={form.control}
                    name="accountType"
                    render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel>Email address</FormLabel>
                            <Select onValueChange={field.onChange}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select an account type" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="teacher">Teacher</SelectItem>
                        </SelectContent>
                    </Select>
                        <FormMessage />
                    </FormItem>
                    );
                     }}
                /> */}



                <FormField control={form.control} name="password" render={({field})=>(
                     <FormItem>
                        <FormMessage>
                            <FormLabel>Password</FormLabel>
                            <FormControl> 
                                <Input placeholder="Password" type="password" {...field}/>
                            </FormControl>
                        </FormMessage>
                    </FormItem>
                 )}/>

                <FormField control={form.control} name="passwordConfirm" render={({field})=>(
                     <FormItem>
                        <FormMessage>
                            <FormLabel>Password Confirm</FormLabel>
                            <FormControl> 
                                <Input placeholder="Password Again" type="password" {...field}/>
                            </FormControl>
                        </FormMessage>
                    </FormItem>
                )}/>



                //do like this 
        <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                <Input placeholder="Password" type='password' {...field} />
                </FormControl>

                <FormMessage />
            </FormItem>
            )}
            />


                <Button type="submit" className="w-full">Sign Up</Button>


            </form>
            
            

        </Form>
    </div>
  )
}

export default SignUpForm