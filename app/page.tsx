"use client"
import MainPage from "@/components/home/MainPage";
import NavMenu from "@/components/home/NavMenu";
import { getCafes } from "@/lib/getCafe";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    const cafes = getCafes();
    cafes.then(res => console.log(res))
  })

  return (
    <div className="h-full md:pl-[104px]">
      <NavMenu activePage={0} />
      <MainPage />
    </div>
  );
}
