import MainPage from "@/components/home/MainPage";
import NavMenu from "@/components/home/NavMenu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop - wagmigg",
  description: "An app",
  icons: ["/images/favicon.ico"]
};
export default function Home() {
  return (
    <div className="h-full md:pl-[104px] p-2">
      <NavMenu activePage={0} />
      <MainPage />
    </div>
  );
}
