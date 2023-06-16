import { BsArrowUpRight } from 'react-icons/bs'

const Main = () => {
  return (
    <>
      <div className=" container max-w-w my-[100px]">
        <h1 className=" text-[48px] font-bold leading-[62px] max-w-[387px] mb-4">
          PaymentOS for DAOs
        </h1>
        <p className="text-[#9998A4] font-normal text-sm leading-6 mb-[50px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="flex space-x-5 mb-[100px] justify-center sm:justify-start">
          <button className=" py-3 px-6 bg-[#2962EF] text-white flex items-center rounded-sm">
            Open App <BsArrowUpRight className=" ml-2" />
          </button>
          <button className="py-3 px-6 text-blue-500">Watch Demo</button>
        </div>
        <p className="text-[#9998A4] font-normal text-sm leading-6 mb-6 uppercase sm:text-left text-center">
          Lorem Ipsum is simply dummy
        </p>
        {/* <div className="flex space-x-20 sm:flex-col"> */}
        {/* <div className="sm:flex-col text-center flex-row sm:space-x-4 sb:block sm:items-center"> */}
        <div className="text-center sm:flex sm:space-x-6">
          <div className="mb-3">
            <h1 className="text-4xl mb-3  ">200+</h1>
            <p className="text-[#5E5C6C] text ">DAO'S</p>
          </div>
          <div className="mb-3">
            <h1 className="text-4xl mb-3">$35M+</h1>
            <p className="text-[#5E5C6C] text ">DISBURSED</p>
          </div>
          <div className="mb-3">
            <h1 className="text-4xl mb-3">2500+</h1>
            <p className="text-[#5E5C6C] text ">CONTRIBUUTORS</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
