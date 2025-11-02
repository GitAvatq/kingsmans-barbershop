"use client"
import React, { useEffect } from 'react';
import z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from '@/components/ui/spinner';
import { useLoginMutation, useRegisterMutation } from '../api';
import { toast, Toaster } from 'sonner';
import { IForm, ILoginForm } from '../types/auth.interface';
import { ShieldX } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { userActions } from '@/store/user/user.slice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { paths } from '@/shared/routing/paths';

const LoginForm = () => {
    const formSchema = z.object({
        email: z.string().email("Invalid email"),
        password: z
            .string()
            .min(5, "Password must have at least 5 characters")
            .max(10, "Password must be less than 10"),
    })
    type FormValues = z.infer<typeof formSchema>
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const dispatch = useDispatch()
    const route = useRouter()
    const [handleLogin, { isLoading, isError, isSuccess, data }] = useLoginMutation()
    const onSubmit = (values: ILoginForm) => {
        console.log(values);
        handleLogin(values)
        form.reset()
    }

    useEffect(() => {
        if (isSuccess && data) {
            toast.success("Welcome! Your account has been registered")
            dispatch(userActions.setToken(String(data.token)))
            dispatch(userActions.setUser(data.data))
            setTimeout(() => { route.push(paths.home) }, 1500)
        } else if (isError) {
            toast.error("Something went wrong. Please try again")
        }
    }, [isSuccess, isError, data, dispatch, route])
    return (
        <Form {...form}>
            <Toaster theme='dark' position='top-center' icons={{ success: <ShieldCheck />, error: <ShieldX /> }} />
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center cursor-pointer"
                >
                    Submit
                    {isLoading && <Spinner />}
                </Button>
                {isError && <p className="py-5 px-2.5 text-base text-red-400">An error has occurred {!data?.ok ? <>{isError}</> : ""}</p>}
            </form>
        </Form>
    );
};

export default LoginForm;