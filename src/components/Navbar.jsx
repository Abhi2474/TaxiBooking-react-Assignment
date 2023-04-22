import React from 'react'

const Navbar = () => {
	return (
		<>
			<div className='flex justify-between px-24 items-center my-4 h-20 mt-0 fixed top-0 w-full bg-white z-10 shadow-gray-400 shadow-md'>
				<img src="/maxitaxilogo.PNG" alt="" />
				<ul className='flex justify-evenly w-1/3 items-center text-sm font-bold mx-auto  '>
					<li className='text-md cursor-pointer border-b-4 border-white hover:border-b-4  py-7 hover:border-b-orange-400 transition-all duration-150'>HOME</li>
					<li className='text-md cursor-pointer border-b-4 border-white hover:border-b-4  py-7 hover:border-b-orange-400 transition-all duration-150'>ABOUT</li>
					<li className='text-md cursor-pointer border-b-4 border-white hover:border-b-4  py-7 hover:border-b-orange-400 transition-all duration-150'>OUR SERVICES</li>
					<li className='text-md cursor-pointer border-b-4 border-white hover:border-b-4  py-7 hover:border-b-orange-400 transition-all duration-150'>CONTACT US</li>
				</ul>
				<div className='relative'>
					<div className='z-10 bg-orange-500 text-white font-serif text-sm font-bold text-center py-2 px-8 relative  rounded '>
						<p><a href="tel:+91-99999-99999">+91-99999-99999</a></p>
						<p>Click To Book</p>
					</div>
					<div className='left-0 bottom-0 right-0 top-0 absolute bg-gray-500 border blur-lg animate-pulse'></div>
				</div>
			</div>
		</>
	)
}

export default Navbar