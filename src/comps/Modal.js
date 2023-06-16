import './modal.css'

const Modal = ({ modal, setModal }) => {
  // if (!modal) return null
  return (
    <>
      <div className={!modal? 'hidden': 'h-full fixed w-full top-0'} onClick={()=>setModal(false)}>
      {/* <div className='bg-slate-300 h-full w-full' onClick={()=>setModal(false)}> */}
        <div className="login-box " onClick={(e)=>e.stopPropagation()}>
          <form>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <center className='flex justify-center space-x-3'>
              <a href="#">
                SEND
                <span></span>
              </a>
              <a href="#" onClick={()=>setModal(false)}>
                CLOSE
                <span></span>
              </a>
            </center>
          </form>
        </div>
      </div>
    </>
  )
}

export default Modal
