import { BiSolidPyramid } from 'react-icons/bi'
import { HiOutlineMenu} from 'react-icons/hi'

const TopNavigation = () => {
    return(
        <div className='flex justify-between border-2 border-red-900 p-4 items-center'>
            <div className="flex border-2 gap-6 rounded-md border-red-900 p-4">
                <HiOutlineMenu size= {30}/>
                <div className='flex items-center gap-2'>
                    <BiSolidPyramid size={30}/>
                    <span>The Bhoi Wonder</span>
                </div>
            </div>
            <div className="border-2 rounded-md border-red-900 p-4">SEARCH/STATUS</div>
            <div className="border-2 rounded-md border-red-900 p-2">USER</div>
        </div>
    );
    
};

export default TopNavigation;