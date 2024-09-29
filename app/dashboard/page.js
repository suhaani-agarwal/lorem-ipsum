import React from 'react'
import { IoIosNotifications } from "react-icons/io";

const page = () => {
  return (
    <div className='relative'>
      <nav className='flex absolute top-0 justify-between'>
        <div>
            <button>Name</button>
        </div>
        <div>
            <button>Logout</button>
            <button><IoIosNotifications />
            </button>
        </div>
      </nav>
    </div>
  )
}

export default page
