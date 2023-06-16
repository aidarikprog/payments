import one from './assets/company/1.svg'
import two from './assets/company/2.svg'
import three from './assets/company/3.svg'
import four from './assets/company/4.svg'
import five from './assets/company/5.svg'
import six from './assets/company/6.svg'
import seven from './assets/company/7.svg'
import eight from './assets/company/8.svg'
import nine from './assets/company/9.svg'
import ten from './assets/company/10.svg'

const Company = () => {
  return (
    <>
      <div className="container max-w-w flex mb-[100px] flex-col justify-center">
        <div className="flex  flex-wrap space-x-[65px] justify-center mb-10">
          <div className="flex items-center mb-3">
            <img src={one} alt="one" className="mr-3" />
            <p className="font-semibold text-sm leading-[14px] ">
              Bankless DAO
            </p>
          </div>
          <div className="flex items-center mb-3">
            <img src={two} alt="one" className="mr-3" />
            <p className="font-semibold text-sm leading-[14px] ">Index Coop</p>
          </div>
          <div className="flex items-center mb-3">
            <img src={three} alt="one" className="mr-3" />
            <p className="font-semibold text-sm leading-[14px] ">Index Coop</p>
          </div>
          <div className="flex items-center mb-3">
            <img src={four} alt="one" className="mr-3" />
            <p className="font-semibold text-sm leading-[14px] ">
              Aave Grants DAO
            </p>
          </div>
          <div className="flex items-center mb-3">
            <img src={five} alt="one" className="mr-3" />
          </div>
        </div>


        <div className="flex  flex-wrap space-x-[65px] justify-center space-y-3 text-center">
          <div className="flex items-center ">
            <img src={six} alt="one" className="mr-3" />
            <p className="font-semibold text-sm leading-[14px] ">
              Audio Grants Committee
            </p>
          </div>
          <div className="flex items-center ">
            <img src={seven} alt="one" className="mr-3" />
            <p className="font-semibold text-sm leading-[14px] ">Olympus DAO</p>
          </div>
          <div className="flex items-center ">
            <img src={eight} alt="one" className="mr-3" />
          </div>
          <div className="flex items-center ">
            <img src={nine} alt="one" className="mr-3" />
            <p className="font-semibold text-sm leading-[14px] ">Party DAO</p>
          </div>
          <div className="flex items-center">
            <img src={ten} alt="one" className="mr-3" />
            <p className="font-semibold text-sm leading-[14px] ">Forefront</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Company
