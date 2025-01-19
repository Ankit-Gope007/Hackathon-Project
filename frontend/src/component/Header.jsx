import React from 'react'
const Header = () => {
    return (
        // <div className='header inline row-auto w-full rounded-lg'>
        //     <div className="top">
        //     <p className='bg-blue-800 font-NunitoSans m-0 p-10 text-4xl text-white'><span ></span></p>
        //     <button className=''>Home</button></div>
            
        // </div>
        <div className="bg-blue-800 text-white">
  <div className="container mx-auto flex items-center justify-between p-4">
    {/* <!-- Logo and Title --> */}
    <div className="flex items-center space-x-4">
      {/* <!-- Logo --> */}
      <div className="w-12 h-12 flex items-center justify-center bg-white rounded">
        <span className="text-blue-800 font-bold text-xl">RD</span>
      </div>
      {/* <!-- Title --> */}
      <div>
        <h1 className="text-lg font-bold">Data sharing for rare diseases</h1>
        <p className="text-sm">National institute of Technology,Durgapur</p>
      </div>
    </div>

  </div>
</div>

    )
}

export default Header