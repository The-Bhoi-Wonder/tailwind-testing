import { BiSolidPyramid } from 'react-icons/bi'
import { HiOutlineMenu} from 'react-icons/hi'
import { GiMaterialsScience} from 'react-icons/gi'
import { FaPhotoVideo} from 'react-icons/fa'
import { GiSoccerKick} from 'react-icons/gi'
import { GiPokerHand} from 'react-icons/gi'


const TopNavigation = () => {
    return(
        <div className='flex justify-between border-2 border-red-900 p-4 items-center inset-0 h-fit align-middle overflow-x-auto overflow-y-hidden whitespace-nowrap max-h-20'>
            <div className="flex border-[1px] gap-6 rounded-md border-red-900 p-4 max-h-14">
                
                <div className='flex items-center gap-2'>
                    <HiOutlineMenu size= {30} className='lg:hidden'/>
                    <BiSolidPyramid size={30}/>
                    <span>The Bhoi Wonder</span>
                </div>
            </div>
            <div className="border-[1px] rounded-md border-red-900 p-4 max-h-14">Welcome to my website!</div>
            <div className="border-[1px] rounded-md border-red-900 p-4  max-h-14 inline">User Settings</div>
        </div>
    );
    
};

export default TopNavigation;