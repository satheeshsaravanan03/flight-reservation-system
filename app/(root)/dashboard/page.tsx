import Nav from '@/app/components/Nav/nav'
import { HomwBGImage } from '../../utils/constants'
import { IInfoCard } from '@/app/utils/interface'
import { LuMessageCircleQuestion } from "react-icons/lu";
import { GiCommercialAirplane } from "react-icons/gi";
import { CgDollar } from "react-icons/cg";
import InfoCard from '@/app/components/Info-card/InfoCard';

const cardInfo: IInfoCard[] = [
  {
    icon: LuMessageCircleQuestion,
    title: "Customer Support",
    description: "Get 24/7 assistance for all your travel needs."
  },
  {
    icon: GiCommercialAirplane,
    title: "Flight Booking",
    description: "Book flights easily to your favorite destinations."
  },
  {
    icon: CgDollar,
    title: "Best Prices",
    description: "Enjoy competitive prices for all your bookings."
  }
];

const DashBoard = () => {
  return (
    <div>
        <div 
          style={{ backgroundImage:`url(${HomwBGImage})`}}
          className='bg-cover bg-center w-full h-[500px] bg-[#17488D] relative'
        >
            <div className="absolute inset-0 bg-[#17488dd0]">
                <Nav/>
          <div className='h-[300px] w-full flex flex-col  items-center lg:items-start justify-center lg:pl-[10%]'>
           <div className='flex flex-col items-start'>
              <h1 className='text-[2.5rem] font-bold text-white'>A Lifetime of Discounts? It's Genius.</h1>
              <span className='text-md font-medium mb-3 text-white'>Get rewarded for your travels – unlock instant savings of 10% or more with a free Geairinfo.com account</span>
              <button className="
                        px-6
                        py-3
                        rounded-md
                        bg-[#FFA903]
                        text-[#17488D]
                        font-medium
                        text-md
                        tracking-[0.25px]
                        hover:text-[#174ea6]
                        focus:outline-none
                        active:shadow-lg
                        cursor-pointer
                        select-none
                      ">
                        Get Offers
                      </button>

           </div>
          </div>
            </div>
          
        </div>
        <div>
            {
              cardInfo.map((data, index) => (
                <InfoCard key={index} data={data} />
              ))
            }         
        </div>
    </div>
  )
}

export default DashBoard