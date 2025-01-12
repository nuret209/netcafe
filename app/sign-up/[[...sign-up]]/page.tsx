import Login_Signup from "@/components/signup/SignUpArea"
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "wagmigg - shop",
  description: "The page of wagmigg sign-up",
};
const Page = () => {
  return (
    <>
     <Login_Signup path="/sign-up" pathName="Sign Up" />
    </>
  );
}

export default Page