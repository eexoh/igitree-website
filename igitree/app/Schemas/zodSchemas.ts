"use client"
 
import * as z from "zod"
 
export const signinSchema = z.object({
  useremail: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).max(50, {
    message: "Username must be 50 characters max.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }).max(8, {
    message: "Password must be 8 characters max.",
  }),
})