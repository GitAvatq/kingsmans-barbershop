import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { IValues } from "../types/cta.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner"
import { useProcessContactsMutation } from "../api";

export const CTA = () => {
  const formSchema = z.object({
    username: z.string().min(3, "The name must contain at least 3 letters"),
    email: z.string().email("Incorrect email"),
    city: z.string(),
  });
  type FormValues = z.infer<typeof formSchema>;
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      city: "",
    },
  });

  const [processContact, { isLoading, isError }] = useProcessContactsMutation()

  const onSubmit = (data: IValues) => {
    console.log(data);
    processContact(data)
    form.reset();
  };

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
          className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center"
        >
          Submit
          {isLoading && <Spinner />}
        </Button>
        {isError && <p className="py-5 px-2.5 text-base text-red-400">An error has occurred</p>}
      </form>
    </Form>
  );
};
