import { BiSolidPyramid } from 'react-icons/bi'
import { HiOutlineMenu} from 'react-icons/hi'

const TopNavigation = () => {
    return(
        <div className='flex justify-between border-2 border-red-900 p-4 items-center inset-0 h-fit align-middle'>
            <div className="flex border-[1px] gap-6 rounded-md border-red-900 p-4 h-full">
                <HiOutlineMenu size= {30}/>
                <div className='flex items-center gap-2'>
                    <BiSolidPyramid size={30}/>
                    <span>The Bhoi Wonder</span>
                </div>
            </div>
            <div className="border-[1px] rounded-md border-red-900 p-4 ">Welcome to my website!</div>
            <div className="border-[1px] rounded-md border-red-900 p-4 h-full">User Settings</div>
        </div>
    );
    
};

export default TopNavigation;