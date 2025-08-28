import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { isValidInput } from "@/lib/validation";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
const Contactform = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    message: z
      .string()
      .min(10, "Message should have 10 characters required")
      .max(1000),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res?.status === 200) {
        form.reset();
        setIsDialogOpen(true);
      }
    } catch (error) {
      console.error(error, "error sending email");
    }
  };
  return (
    <section className="container mx-auto px-6 py-16 max-w-2xl">
      <h2 className="text-3xl font-light text-white mb-12 text-center">
        Get In Touch
      </h2>
      <Card className="border border-gray-800 bg-black shadow-none">
        <CardContent className="p-8">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="name" className="text-gray-300">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:border-gray-500"
                          {...field}
                          onChange={(e) => {
                            if (isValidInput(e.target.value)) {
                              field.onChange(e);
                            }
                          }}
                        />
                      </FormControl>
                      <div className="h-5 flex items-start">
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="email" className="text-gray-300">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:border-gray-500"
                          {...field}
                          onChange={(e) => {
                            if (isValidInput(e.target.value)) {
                              field.onChange(e);
                            }
                          }}
                        />
                      </FormControl>
                      <div className="h-5 flex items-start">
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-2 md:col-span-2">
                      <FormLabel htmlFor="message" className="text-gray-300">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Tell me about your project..."
                          className="min-h-[120px] border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:border-gray-500"
                          {...field}
                          onChange={(e) => {
                            if (isValidInput(e.target.value)) {
                              field.onChange(e);
                            }
                          }}
                        />
                      </FormControl>
                      <div className="h-5 flex items-start">
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-white hover:bg-gray-200 text-black transition-colors"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="border border-gray-700 bg-black text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center">
              Thank You! ✨
            </DialogTitle>
            <DialogDescription className="text-gray-300 text-center mt-4">
              Thanks for contacting me! I will get back to you as soon as
              possible.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button
              onClick={() => setIsDialogOpen(false)}
              className="bg-white hover:bg-gray-200 text-black px-8 cursor-pointer"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contactform;
