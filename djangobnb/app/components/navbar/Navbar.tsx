import Link from "next/link"
import Image from 'next/image'
import SearchFilters from './SearchFilters'
import UserNav from "./UserNav"
import { getUserId } from "@/app/lib/actions"
import AddPropertyButton from "./AddPropertyButton"


const Navbar = async() => {
    const userId = await getUserId();
    return (
        <nav className="w-full max-h-40 fixed top-0 left-0 py-6 border-b bg-white z-10 border-2 border-red-300">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/" >
                        <Image
                            src="/airbnblogo.jpeg"
                            width={90}
                            height={10}
                            alt="DjangoBnb logo"
                            />  
                             
                    </Link>   


                    <div className="hidden lg:flex  space-x-6 ">
                        <SearchFilters/>
                    </div>

                    <div className="flex items-center space-x-6">
                        <UserNav
                            userId={userId}/>
                    </div>

                     <div className="flex items-center space-x-6">
                        <AddPropertyButton/>
                    </div>
                         



                </div>

            </div>
            
        </nav>
    )
}

export default Navbar;