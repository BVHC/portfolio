import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";



export default function Layout() {
  return (
    <div className="flex min-h-screen bg-white text-dark">
      <Sidebar />
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        <Header />

        <div className="flex-1 p-10 lg:p-16 xl:px-24">
          <Outlet /> 
        </div>

        <Footer />

      </main>
    </div>
  )
}