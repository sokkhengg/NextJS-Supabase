
import Link from "next/link";
import Navigation from "./navigation";

  
  export default function Header() {
    return (
      <header className="flex justify-between md:items-center">
        <div className="flex items-center md:space-x-12 ">
          <div className="hidden md:block" >
            <Link href="/" className="text-xl">Sokheng</Link>
          </div>
          <Navigation/>

        </div>
        <div>
          Dark Toggle
        </div>
        </header>
    )
  }
  