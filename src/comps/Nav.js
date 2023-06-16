import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'

import { AiOutlineTwitter } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import { useState } from 'react'

import Modal from './Modal'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(false)
  return (
    <>
      <div className=" container max-w-w  ">
        <div className="flex justify-between items-center py-4">
          <div>LOGO</div>
          <ul className="sm:flex space-x-[50px] items-center hidden">
            <li>
              <a className="" href="#">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className=" flex items-center">
                <AiOutlineTwitter className="mr-2 " />
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <BsDiscord className=" mr-2 " />
                Discord
              </a>
            </li>
            <button
              className=" py-3 px-5 bg-[#2962EF] text-white rounded "
              onClick={() => setModal(!modal)}
            >
              Open App
            </button>
          </ul>
          <div className="sm:hidden" onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </div>
        </div>

        <ul
          className={!open ? 'hidden' : 'w-full text-center space-y-3 h-full'}
        >
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#" className=" flex items-center justify-center">
              <AiOutlineTwitter className="mr-2 " />
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center">
              <BsDiscord className=" mr-2 " />
              Discord
            </a>
          </li>
          <button className=" py-3 px-[40px] sm:px-5 bg-[#2962EF] text-white rounded ">
            Open App
          </button>
        </ul>
      </div>
      <div className=' '>
        <Modal modal={modal} setModal={setModal} />
      </div>
    </>
  )
}
export default Nav
