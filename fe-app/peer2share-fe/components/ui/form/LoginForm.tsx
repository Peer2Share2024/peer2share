'use client';

import { Form, FormControl, FormField, FormItem, FormLabel,FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { Input } from "../input";
import { Button } from "../button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const FormSchema = z.object({
    email: z.string().min(5,"email required").email('Invalid email'),
    password:z.string().min(8,'Password must be atleast 8 characters')
  })

  const onSubmit = (values:z.infer<typeof FormSchema>) =>{ 
    console.log(values)
  }

const LoginForm = () => {
    
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

  return (
    <div className="space-y-4 ">
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="mail@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />

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

            <Button className="mt-4 w-full"type="submit">Submit</Button>

          </form>

            <p className="text-center">
                Dont have an account yet?
                <Link className="text-blue-500 hover:underline" href='/sign-up'> Sign up</Link>
            </p>

      </Form>
    </div>
    
  )
}

export default LoginForm