import SignUp from "@/components/signup/SignUp"
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "wagmigg - shop",
  description: "The page of wagmigg sign-up",
};
const Page = () => {
  return (
    <>
     <SignUp />
    </>
  );
}

export default Page