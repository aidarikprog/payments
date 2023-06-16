import { AiOutlineTwitter } from 'react-icons/ai'

import one from './assets/profiles/1.jpg'
import two from './assets/profiles/2.jpg'
import three from './assets/profiles/3.jpg'
import four from './assets/profiles/4.jpg'
import five from './assets/profiles/5.jpg'
import six from './assets/profiles/6.jpg'
import seven from './assets/profiles/7.jpg'
import eight from './assets/profiles/8.jpg'

const Profiles = () => {
  return (
    <>
      <div className="container max-w-w ">
        <h1 className="font-bold text-[36px] leading-[44px] mb-3">
          We are Backed By
        </h1>
        <p className=" text-[#5E5C6C] text-sm leading-[14px] mb-[45px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className='grid grid-cols-person gap-5 justify-center'>
          <div className="p-5">
            <img src={one} alt="one" className="mb-4 " />
            <h1 className="font-bold mb-2">Dragonfly Capital</h1>
            <div className="flex items-center">
              <AiOutlineTwitter />
              <p className="ml-2 font-bold">In</p>
            </div>
          </div>
          <div className="p-5">
            <img src={two} alt="one" className="mb-4 w-[215px] " />
            <h1 className="font-bold mb-2">Leighton Cusack</h1>
            <div className="flex items-center">
              <AiOutlineTwitter />
              <p className="ml-2 font-bold">In</p>
            </div>
          </div>
          <div className="p-5">
            <img src={three} alt="one" className="mb-4 w-[215px]" />
            <h1 className="font-bold mb-2">Linda Xie</h1>
            <div className="flex items-center">
              <AiOutlineTwitter />
              <p className="ml-2 font-bold">In</p>
            </div>
          </div>
          <div className="p-5">
            <img src={four} alt="one" className="mb-4 w-[215px]" />
            <h1 className="font-bold mb-2">Sandeep Nailwal</h1>
            <div className="flex items-center">
              <AiOutlineTwitter />
              <p className="ml-2 font-bold">In</p>
            </div>
          </div>
          <div className="p-5">
            <img src={five} alt="one" className="mb-4 w-[215px]" />
            <h1 className="font-bold mb-2">Sandeep Nailwal</h1>
            <div className="flex items-center">
              <AiOutlineTwitter />
              <p className="ml-2 font-bold">In</p>
            </div>
          </div>
          <div className="p-5">
            <img src={six} alt="one" className="mb-4 w-[215px]" />
            <h1 className="font-bold mb-2">Sandeep Nailwal</h1>
            <div className="flex items-center">
              <AiOutlineTwitter />
              <p className="ml-2 font-bold">In</p>
            </div>
          </div>
          <div className="p-5">
            <img src={seven} alt="one" className="mb-4 w-[215px]" />
            <h1 className="font-bold mb-2">Sandeep Nailwal</h1>
            <div className="flex items-center">
              <AiOutlineTwitter />
              <p className="ml-2 font-bold">In</p>
            </div>
          </div>
          <div className="p-5">
            <img src={eight} alt="one" className="mb-4 w-[215px]" />
            <h1 className="font-bold mb-2">Sandeep Nailwal</h1>
            <div className="flex items-center">
              <AiOutlineTwitter />
              <p className="ml-2 font-bold">In</p>
            </div>
          </div>
        
        </div>
      </div>
    </>
  )
}

export default Profiles
