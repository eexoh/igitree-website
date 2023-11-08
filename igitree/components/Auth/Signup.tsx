"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "../Header/ThemeToggler";
import Telescop from "../svg/telescop";
import Message from "../svg/message";
import { Button } from "../ui/button";
import Google from "../svg/google";
import Facebook from "../svg/facebook";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { signinSchema, signupSchema } from "@/app/Schemas/zodSchemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "../ui/input";

const Signup = () => {

   //form definition
   const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      useremail: "",
      password: "",
      passwordConfirm: ""
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
      {/* <!-- ===== SignUp Form Start ===== --> */}
      <section className="bg-[#e4ebedf5] h-screen w-full flex dark:bg-black">
        <div className="w-[50%]  h-full bg-[url('/images/signup/familly.png')] bg-no-repeat bg-cover md:flex items-center gap-64 relative flex-col">
          <div className="w-[80%] h-[12%] flex items-center justify-between">
            <Image
                src="/images/logo/logo_v2.png"
                width={100}
                height={100}
                alt="Igitree logo"
                className="width-[182px] height-[90px]"
              />
              <div className="text-white bg-white flex justify-center items-center rounded-full w-8 h-8">
                  <ThemeToggler/>
              </div>
          </div>
          <div className="w-[80%] h-auto flex flex-col">
           <div className="relative p-4 w-[190px] h-[120px] bg-opacity-50 rounded-[14.317px] bg-black bg-opacity-14 backdrop-blur-[21.4754px]">
            <p className="w-[47.709px] h-[43.236px] rounded-[7.158px] bg-gray-900 backdrop-blur-[21.4754px]"></p>
            <p className="mt-[-20px] absolute z-1 left-2"><Telescop /></p>
            <p className="text-white font-roboto text-base font-normal leading-[122.187%] mt-2">Be reunited with your beloved ones</p>
           </div>
           <div className="inline-flex h-63 px-2 py-1 items-center flex-shrink-0 rounded-[49.69px] bg-gray-500 gap-2 self-end mr-20">
            <p className="w-47.915 h-47.915 flex-shrink-0">
              <Message />
            </p>
            <p className="text-white font-poppins text-[18.945px] font-normal leading-[23.155px]">Family Tree</p>
           </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full h-full">
        <div className="relative z-1 w-full h-full flex justify-center items-center">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top rounded-2xl bg-white dark:bg-[#e4ebedf5] w-[80%] h-auto"
          >
            <div className="dark:bg-[#e4ebedf5] h-auto w-full flex rounded-2xl p-4 flex-col items-center gap-4">
              <p className="text-sm font-light leading-[14.5px]">
                <span className="text-black">
                  have an account?
                </span>
                <Link href='/auth/signin' className="text-[#26B1FF] underline text-sm font-medium leading-[14.5px]"> Sign in!</Link>
                </p>
              <div className=" flex flex-col gap-4">
                <div className="flex flex-col">
              <h1 className="text-black text-xl font-semibold">Get Started With iGiTREE</h1>
              <p className="text-gray-500 text-[12px] font-normal leading-[10.9px] text-center">Getting started is easy</p>
              </div>
              <div className="flex justify-center items-center gap-4 w-full">
          <div className="w-[70%] flex gap-4">
          <Button type="submit" className="w-full bg-white hover:bg-gray-50 font-martel-sans md:text-lg text-[12px] border-[#26B1FF] border">
            <Google />
          </Button>
          <Button type="submit" className="w-full border-[#26B1FF] bg-white hover:bg-gray-50 font-martel-sans md:text-lg text-[12px] border">
            <Facebook />
            </Button>
            </div>
        </div>
        <div className="flex justify-center items-center gap-1">
              <p className="h-[1px] w-10 border-t border-gray-500"></p>
              <p className="text-black text-[12px] font-normal leading-[14.5px]">Or continue with</p>
              <p className="h-[1px] w-10 border-t border-gray-500"></p>
        </div>
      </div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormControl>
                <Input placeholder="full name" {...field} className="text-gray-400 font-martel-sans text-sm text-[12px] md:text-sm bg-white"/>
              </FormControl>
              <FormMessage className="text-red-400"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="useremail"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormControl>
                <Input placeholder="enter email" {...field} className="text-gray-400 font-martel-sans text-sm text-[12px] md:text-sm bg-white"/>
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
              <FormControl>
                <Input type="password" placeholder="password" {...field} className="text-gray-400 font-martel-sans text-[12px] md:text-sm font-normal bg-white"/>
              </FormControl>
              <FormMessage className="text-red-400"/>
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormControl>
                <Input type="password" placeholder="confirm password" {...field} className="text-gray-400 font-martel-sans text-[12px] md:text-sm font-normal bg-white"/>
              </FormControl>
              <FormMessage className="text-red-400"/>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-[#26B1FF] hover:bg-[rgb(38,177,255)] text-white font-martel-sans text-[12px] md:text-lg font-semibold">Create an account</Button>
        <p className="text-gray-500 font-poppins text-[12px] font-light leading-[14.5px]">By continuing you indicate that you read and agreed to the Terms of Use</p>
      </form>
    </Form>
    </div>
          </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== SignUp Form End ===== --> */}
    </>
  );
};

export default Signup;
