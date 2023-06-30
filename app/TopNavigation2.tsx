import { BiSolidPyramid } from 'react-icons/bi'
import { HiOutlineMenu} from 'react-icons/hi'
import { GiMaterialsScience} from 'react-icons/gi'
import { FaPhotoVideo} from 'react-icons/fa'
import { GiSoccerKick} from 'react-icons/gi'
import { GiPokerHand} from 'react-icons/gi'
import MyDropdown from './components/MyDropdown'


const TopNavigation2 = () => {
    return(
        <div className='flex justify-between border-2 border-red-950 p-4 items-center inset-0 h-fit align-middle overflow-x-auto overflow-y-hidden whitespace-nowrap max-h-20'>
            <div className="flex border-[2px] gap-6 rounded-md border-red-950 p-4 max-h-10">
                
                <div className='flex items-center gap-0 flex-nowrap'>
                    <HiOutlineMenu size= {30} className='hidden'/>
                    <MyDropdown/>
                    <BiSolidPyramid size={30} className='flex-nowrap'/>
                    <span>The Bhoi Wonder</span>
                </div>
            </div>
            <div className="border-[2px] rounded-md border-red-950 p-2 max-h-10">Welcome to my website!</div>
            <div className="border-[2px] rounded-md border-red-950 p-2  max-h-10 inline">User Settings</div>
        </div>
    );
    
};

export default TopNavigation2;