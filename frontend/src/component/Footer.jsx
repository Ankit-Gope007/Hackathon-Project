import React from 'react'

const Footer = () => {
  return (
    <footer className='relative bottom-0 w-full'>
    {/* <!-- Top Section --> */}
    <div className="bg-gray-200 py-4">
      <div className="container mx-auto text-center text-sm">
        <a href="#" className="text-blue-700 hover:underline mx-2">Bookshelf</a>
        <a href="#" className="text-blue-700 hover:underline mx-2">Disclaimer</a>
        <p className="text-gray-600 mt-2">
          The  wordmark and logo are registered trademarks of the DEVCODERS. Unauthorized use of these marks is strictly prohibited.
        </p>
      </div>
    </div>
  
    {/* <!-- Middle Section: Follow Us --> */}
    <div className="bg-blue-600 py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-white font-semibold mb-4">FOLLOW RARE DISEASES ASSOCIATION</h2>
        <div className="flex justify-center space-x-8 text-gray-200 text-3xl">
          <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-white"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-white"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="hover:text-white"><i className="fab fa-github"></i></a>
          <a href="#" className="hover:text-white"><i className="fas fa-rss"></i></a>
        </div>
      </div>
    </div>
  
    {/* <!-- Bottom Section --> */}
    <div className="bg-blue-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 text-center md:text-left gap-4">
        {/* <!-- Column 1 --> */}
        <div>
          <h3 className="font-semibold mb-2">Connect with IMA</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl">
            <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
  
        {/* <!-- Column 2 --> */}
        <div>
          <h3 className="font-semibold mb-2">National institute of Technology</h3>
          <p>Durgapur</p>
          <p>Mahatma Gandhi sarani</p>
        </div>
  
        {/* <!-- Column 3 --> */}
        <div>
          <h3 className="font-semibold mb-2">Policies</h3>
        <a href="#" className="text-gray-300 hover:text-white block">Accessibility</a>
        </div>
      </div>
  
      <div className="text-center mt-6">
        <p>NPCDCS | MoHFW | IMA | NHA</p>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer