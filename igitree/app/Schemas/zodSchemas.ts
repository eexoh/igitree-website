"use client"
 
import * as z from "zod"
 
export const signinSchema = z.object({
  useremail: z.string().min(12, {
    message: "email must be at least 12 characters.",
  }).max(50, {
    message: "email must be 50 characters max.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }).max(8, {
    message: "Password must be 8 characters max.",
  }),
})

export const signupSchema = z.object({
  useremail: z.string().min(12, {
    message: "Email must be at least 12 characters.",
  }).max(50, {
    message: "Email must be 50 characters max.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).max(50, {
    message: "Username must be 50 characters max.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }).max(8, {
    message: "Password must be 8 characters max.",
  }),
  passwordConfirm: z.string().min(6, {
    message: "Password Confirm must be at least 6 characters.",
  }).max(8, {
    message: "Password confirm must be 8 characters max.",
  }).refine(({value, data}: any) => {
    return value === data?.password;
  }, {
    message: "Passwords must match."
  })
});