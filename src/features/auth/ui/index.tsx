"use client"
import React from 'react';
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IAuth } from '../types/auth.interface';
import { useForm } from 'react-hook-form';

const AuthForm = () => {
    const formSchema = z.object({
        name: z.string().min(4, "The name must contain at least 4 length"),
        email: z.email(),
        password: z.string().min(5, "The password must be more than 5")
    })
    type FormValues = z.infer<typeof formSchema>
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    })

    const onSubmit = (values: IAuth) => {
        console.log(values);

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
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

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white">Password</FormLabel>
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
    );
};

export default AuthForm;