import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


function page() {
  return (
    <div>
      <div className=" mb-1 relative  ">
  {/* Background with Radial Gradient Dots */}
  <div
    className="absolute inset-0 bg-gray-100 bg-opacity-20"
    style={{
      backgroundImage: "radial-gradient(#dcdcdc 1.2px, transparent 1.2px)",
      backgroundSize: "16px 16px",
    }}
  ></div>

  {/* Content Container */}
  <div className="relative z-10 px-6 py-10 max-w-7xl mx-auto flex flex-col items-center lg:flex-row">
  {/* Left: Author Profile Image */}
  <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl mb-4 lg:mb-0">
    <img
      src="https://foxiz.io/business/wp-content/uploads/sites/6/2022/03/b4.jpg" // Replace with actual image URL
      alt="Author Image"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right: Author Info */}
  <div className="lg:ml-6 flex flex-col items-center lg:items-start text-center lg:text-left">
    {/* Author Name */}
    <h2 className="text-2xl font-semibold text-gray-900 mb-2 border-b-2 border-dotted border-orange-500">
  Hugh Son
</h2>


    {/* Author Description */}
    <p className="text-lg text-gray-700 mb-2">
      Inspiring the world through Personal Development and Entrepreneurship. Experimenter in life, productivity, and creativity.
    </p>

    {/* Author Role */}
    <p className="text-sm text-gray-500 mb-4">
      Senior Editor
    </p>

    {/* Social Media Icons */}
    <div className="flex gap-4 justify-center lg:justify-start">
      <a href="https://twitter.com" className="text-gray-600 hover:text-blue-500">
        <FaTwitter />
      </a>
      <a href="https://facebook.com" className="text-gray-600 hover:text-blue-700">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com" className="text-gray-600 hover:text-pink-500">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600">
        <FaLinkedinIn />
      </a>
    </div>
  </div>
</div>

</div>
      <div className="container mx-auto px-6 py-10 ">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* Article 1 */}
    <div className="bg-white  overflow-hidden">
      <img
        src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with actual image URL
        alt="Article Image"
        className="w-full h-56 object-cover"
      />
      <div className="pt-2">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          What is the Presidential Records Act, and How Did Thomas Violate It?
        </h3>
        <p className="text-xs text-gray-500">By Hugh Son · 4 years ago</p>
      </div>
    </div>

    {/* Article 2 */}
    <div className="bg-white  overflow-hidden">
      <img
        src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with actual image URL
        alt="Article Image"
        className="w-full h-56 object-cover"
      />
      <div className="pt-2">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Bad Credit Shouldn't Affect Health Insurance, Experts Say
        </h3>
        <p className="text-xs text-gray-500">By Hugh Son · 4 years ago</p>
      </div>
    </div>

    {/* Article 3 */}
    <div className="bg-white  overflow-hidden">
      <img
        src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with actual image URL
        alt="Article Image"
        className="w-full h-56 object-cover"
      />
      <div className="pt-2">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          It's Final: 12 Names on The 2025 Ballot for President, 9 for VP
        </h3>
        <p className="text-xs text-gray-500">By Hugh Son · 4 years ago</p>
      </div>
    </div>

    {/* Article 4 */}
    <div className="bg-white  overflow-hidden">
      <img
        src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with actual image URL
        alt="Article Image"
        className="w-full h-56 object-cover"
      />
      <div className="pt-2p">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          One Day Noticed, Politicians Wary Resignation Timetable
        </h3>
        <p className="text-xs text-gray-500">By Hugh Son · 4 years ago</p>
      </div>
    </div>

    {/* Article 5 */}
    <div className="bg-white  overflow-hidden">
      <img
        src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with actual image URL
        alt="Article Image"
        className="w-full h-56 object-cover"
      />
      <div className="pt-2">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          National Day Rally 2023: Sacrifice, Effort Needed to Preserve Harmony
        </h3>
        <p className="text-xs text-gray-500">By Hugh Son · 4 years ago</p>
      </div>
    </div>

    {/* Article 6 */}
    <div className="bg-white  overflow-hidden">
      <img
        src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b9-330x220.jpg" // Replace with actual image URL
        alt="Article Image"
        className="w-full h-56 object-cover"
      />
      <div className="pt-2">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          New Census Data Will Shake Up Alabama Politics
        </h3>
        <p className="text-xs text-gray-500">By Hugh Son · 4 years ago</p>
      </div>
    </div>

  </div>
</div>



  


    </div>
  )
}

export default page
