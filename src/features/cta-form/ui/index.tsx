import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { IValues } from '../types/cta.interface';
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export const CTA = () => {
    const formSchema = z.object({
        username: z.string().min(3, "The name must contain at least 3 letters"),
        email: z.string().email("Incorrect email"),
        city: z.string()
    })
    type FormValues = z.infer<typeof formSchema>
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            city: ""
        }
    })

    const onSubmit = (data: IValues) => {
        console.log(data);
        form.reset()
    }



    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid max-md:grid-cols-1 grid-cols-2 max-md:gap-4 gap-6">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Username</FormLabel>
                                <FormControl>
                                    <Input

                                        {...field}
                                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Email</FormLabel>
                                <FormControl>
                                    <Input

                                        {...field}
                                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white">City</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 w-full"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                    Submit
                </Button>
            </form>
        </Form>
    )
}


// "use client"


// import { Button } from "@/components/ui/button"
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { zodResolver } from "@hookform/resolvers/zod";

// const FormSchema = z.object({
//     username: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),
// })

// export function InputForm() {
//     const form = useForm<z.infer<typeof FormSchema>>({
//         resolver: zodResolver(FormSchema),
//         defaultValues: {
//             username: "",
//         },
//     })

//     function onSubmit(data: z.infer<typeof FormSchema>) {
//         toast("You submitted the following values", {
//             description: (
//                 <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
//                     <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//                 </pre>
//             ),
//         })
//     }

//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">

//                 <Button type="submit">Submit</Button>
//             </form>
//         </Form>
//     )
// }
