"use client"

import { Grid2X2, Heart, LayoutGrid, Moon, Search, ShoppingCart, Sun, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import {useRouter} from "next/navigation"


const Header = () => {

  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if(savedTheme){
        setTheme(savedTheme);
    }
    else if(systemPrefersDark){
        setTheme("dark")
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme)
  }, [theme]);

  function toggleTheme(){
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const [search, setSearch] = useState("");  
  const router = useRouter();

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    if(search.trim()){
        router.push(`/search?q=${search}`)
    }
  }  

  return (
    <header className="flex flex-col md:flex-row space-x-5 items-center bg-[#0171dc] px-9 py-6">
        <Link href="/" className="">
            <Image 
                src="/walmart.png"
                alt="logo"
                width={150}
                height={150}
            />
        </Link>
        <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-full w-full flex-1">
            <input
             value={search} 
             onChange={(e) => setSearch(e.target.value)}
             type="text" placeholder="Search Everything..." className="flex-1 px-3 rounded-l-full outline-none placeholder:text-sm"/>
            <button type="submit" className="bg-transparent">
                <Search className="rounded-full h-9 w-9 px-2 bg-yellow-300 cursor-pointer"/>
            </button>
        </form>

        <div className="flex gap-3 mt-3">
            <Link href="/" className="hidden lg:flex text-white font-bold items-center space-x-2">
                <Grid2X2 size={18}/>
                <p>Department</p>
            </Link>
            <Link href="/" className="hidden lg:flex text-white font-bold items-center space-x-2">
                <LayoutGrid size={18}/>
                <p>Services</p>
            </Link>
            <Link href="/" className=" lg:flex text-white font-bold items-center space-x-2">
                <Heart size={18}/>
                <div>
                    <p className="text-xs font-extralight">Reorder</p>
                    <p>My Items</p>
                </div>
            </Link>
            <Link href="/" className=" lg:flex text-white font-bold items-center space-x-2">
                <User size={18}/>
                <div>
                    <p className="text-xs font-extralight">Sign In</p>
                    <p>Account</p>
                </div>
            </Link>
            <Link href="/basket" className=" lg:flex text-white font-bold items-center space-x-2">
                <ShoppingCart size={18}/>
                <div>
                    <p className="text-xs font-extralight">No Items</p>
                    <p>0.00</p>
                </div>
                
            </Link>
            <button onClick={toggleTheme}>
                {
                    theme === "dark" ? (
                        <span><Sun /></span>
                    ) : (
                        <span><Moon /></span>
                    )
                }
            </button>
        </div>
    </header>
  )
}

export default Header

