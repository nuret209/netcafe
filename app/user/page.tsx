"use client"
import React, { useState } from 'react'
import { getUser } from '@/lib/user'
import { useRouter } from 'next/navigation'
import Loading from '@/components/signup/Loading'
import { SignOutButton } from '@clerk/nextjs'

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("")
  const router = useRouter();
  React.useEffect(() => {
    getUser().then(res => {
      if (res == "undefined" || res == "null") {
        console.log("hesap yok");
        router.push("/sign-up")
      } else {
        setName(`${JSON.parse(res)?.firstName} ${JSON.parse(res)?.lastName}`);
        console.log(`${JSON.parse(res)?.firstName} ${JSON.parse(res)?.lastName}`);

        setLoading(false);
      }
    }
    )
  })

  if (loading)
    return <Loading />
  else
    return (
      <div>
        <div>{name ? name : "loading"}</div>
        <SignOutButton />
      </div>
    )
}

export default Page