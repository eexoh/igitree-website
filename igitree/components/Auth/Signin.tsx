"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { signinSchema } from "@/app/Schemas/zodSchemas";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Divide } from "lucide-react";
import Google from "../svg/google";
import Facebook from "../svg/facebook";

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //form definition
  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      useremail: "",
      password: "",
    },
  })

// submit handler
  function onSubmit(values: z.infer<typeof signinSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <>
      {/* <!-- ===== SignIn Form Start ===== --> */}
      <section className="h-screen flex justify-center items-center bg-[url('/images/signin/tree.png')] bg-no-repeat bg-cover">
       <div className="flex flex-col justify-center items-center h-full min-[320px]:h-[550px] w-ful md:w-[550px] border-2 border-[#286d82] bg-[#2e7b93] rounded-none min-[330px]:rounded-3xl bg-opacity-70 border-opacity-49 backdrop-blur-sm shadow-inner-xl px-4 py-2 gap-1">
         <div className="w-[100%] h-[10%]">
         <Image
            src="/images/logo/logo-igitree.png"
            width={100}
            height={100}
            alt="Igitree logo"
          />
         </div>
         <div className="h-[90%] w-[80%] flex flex-col gap-4">
          <h1 className="text-white font-sans font-bold md:font-bold text-md md:text-3xl">Login</h1>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="useremail"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white font-martel-sans text-[12px] md:text-base font-normal">User Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} className="text-gray-400 font-martel-sans text-sm text-[12px] md:text-sm"/>
              </FormControl>
              <FormMessage className="text-red-400"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white font-martel-sans font-normal text-[12px] md:text-base">password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} className="text-gray-400 font-martel-sans text-[12px] md:text-sm font-normal"/>
              </FormControl>
              <FormMessage className="text-red-400"/>
            </FormItem>
          )}
        />
        <Link href={``} className="text-white font-martel-sans text-xs font-normal">Forgot Password?</Link>
        <Button type="submit" className="w-full bg-[#26B1FF] hover:bg-[rgb(38,177,255)] text-white font-martel-sans text-[12px] md:text-lg font-semibold">Sign in</Button>

        <p className="text-white font-martel-sans text-[12px] md:text-sm font-normal text-center">or continue with</p>

        <div className="flex justify-center items-center gap-4 w-full">
          <div className="w-[70%] flex gap-4">
          <Button type="submit" className="w-full bg-white hover:bg-gray-50 font-martel-sans md:text-lg text-[12px]">
            <Google />
          </Button>
          <Button type="submit" className="w-full bg-white hover:bg-gray-50 font-martel-sans md:text-lg text-[12px]">
            <Facebook />
            </Button>
            </div>
        </div>
        <p className="text-white font-martel-sans md:text-sm text-[12px] font-normal text-center">Don’t have an account yet? <Link href="/" className="text-white font-martel-sans md:text-sm text-[12px] font-semibold">Register for free</Link></p>
      </form>
    </Form>
         </div>
       </div>
      </section>
      {/* <!-- ===== SignIn Form End ===== --> */}
    </>
  );
};

export default Signin;
