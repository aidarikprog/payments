import one from './assets/cards/1.svg'
import two from './assets/cards/2.svg'
import three from './assets/cards/3.svg'
import four from './assets/cards/4.svg'
import five from './assets/cards/5.svg'

const Cards = () => {
  return (
    <>
      <div className="container max-w-w items-center mb-[100px] grid  grid-cols-auto-full justify-center sm:space-x-5 sm:space-y-12 space-y-8">
        <div className=" max-w-[346px]  ">
          <h1 className="font-bold text-4xl leading-10 mb-4">
            What makes us special 🔥
          </h1>
          <p className="text-[#9998A4] leading-6 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className=" max-w-[346px] p-10 pb-[93px] border-[1px] rounded-sm border-[#EFEFF4]">
          <img src={one} alt="one"  className='mb-[61px] pl-[21px]'/>
          <h1 className="mb-4 font-extrabold text-lg leading-4">Step 1</h1>
          <p className='text-[#9998A4] leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className=" max-w-[346px] p-10 pb-[93px] border-[1px] rounded-sm border-[#EFEFF4]">
          <img src={two} alt="one"  className='mb-[61px] pl-[21px]'/>
          <h1 className="mb-4 font-extrabold text-lg leading-4">Step 1</h1>
          <p className='text-[#9998A4] leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className=" max-w-[346px] p-10 pb-[93px] border-[1px] rounded-sm border-[#EFEFF4]">
          <img src={three} alt="one"  className='mb-[61px] pl-[21px]'/>
          <h1 className="mb-4 font-extrabold text-lg leading-4">Step 1</h1>
          <p className='text-[#9998A4] leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className=" max-w-[346px] p-10 pb-[93px] border-[1px] rounded-sm border-[#EFEFF4]">
          <img src={four} alt="one"  className='mb-[61px] pl-[21px]'/>
          <h1 className="mb-4 font-extrabold text-lg leading-4">Step 1</h1>
          <p className='text-[#9998A4] leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className=" max-w-[346px] p-10 pb-[93px] border-[1px] rounded-sm border-[#EFEFF4]">
          <img src={five} alt="one"  className='mb-[61px] pl-[21px]'/>
          <h1 className="mb-4 font-extrabold text-lg leading-4">Step 1</h1>
          <p className='text-[#9998A4] leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </>
  )
}

export default Cards
