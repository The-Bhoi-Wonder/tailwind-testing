import { BiSolidPyramid } from 'react-icons/bi'
import { AiOutlineCloseCircle} from 'react-icons/ai'
import Link from 'next/link'
import React, {useState} from 'react'
import { useRouter } from 'next/router';

const SideNavigationMobile = () => {
    const [isHamDropdownOpen, setHamDropdownOpen] = useState(false);
    const router = useRouter();

    const handleHamDropdownClick = () => {
        setHamDropdownOpen(!isHamDropdownOpen);
    }

    return(
        
        <div className='border-2 border-purple-700 p-4 max-w-fit h-screen'>
            <div className='flex flex-col items-center gap-2'>
                    <div className='border-2 rounded-lg border-zinc-600 px-4 w-32 text-center'>Close</div>
                    <Link href="/">Home</Link>
                    <Link href="/photos">Photos</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/updates">Updates</Link>
                    <span>The Bhoi Wonder</span>
                    
                </div>        
            </div>
    )
};

export default SideNavigationMobile;