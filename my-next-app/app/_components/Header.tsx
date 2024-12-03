import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
   <>
   <header className='bg-teal-500 h-16 w-full justify-left flex place-items-center '>
    <div className='mx-[5%]'>

<Link href="../main/">


<h1 className='text-left text-2xl capitalize text-cyan-900 font-extrabold  '>Weather Updates</h1>
</Link>

    </div>

   </header>
   
   </>
  )
}

export default Header