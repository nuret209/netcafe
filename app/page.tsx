import MainPage from "@/components/home/MainPage";
import NavMenu from "@/components/home/NavMenu";


export default function Home() {
  return (
    <div className="h-full md:pl-[104px]">
      <NavMenu activePage={0} />
      <MainPage />
    </div>
  );
}
