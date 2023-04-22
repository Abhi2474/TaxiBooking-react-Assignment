import React from 'react'

const Modal = ({ onClose, values }) => {

	function generateRandomId() {
		const digits = '0123456789';
		let id = '';
		for (let i = 0; i < 10; i++) {
			id += digits[Math.floor(Math.random() * 10)];
		}
		return id;
	}

	const randomId = generateRandomId();

	return (
		<>
			<div className="fixed z-10 inset-0 overflow-y-auto">
				<div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
					<div className="fixed inset-0 transition-opacity" aria-hidden="true">
						<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
					</div>

					<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

					<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<h3 className="text-2xl leading-6 font-medium text-gray-900 my-3 text-center">Booking Confirmation</h3>
							<hr className='border-green-300' />
							<p className="text-sm my-2"><b>Id: </b>{randomId}</p>
							<p className="text-sm my-2"><b>Name: </b>{values.name}</p>
							<p className="text-sm my-2"><b>Phone: </b>{values.phone}</p>
							<p className="text-sm my-2"><b>Email: </b>{values.email}</p>
							<p className="text-sm my-2"><b>Pickup Location: </b>{values.pickup}</p>
							<p className="text-sm my-2"><b>Total Passengers: </b>{values.passengers}</p>
							<p className="text-sm my-2"><b>Destination: </b>{values.destination}</p>
							<p className="text-sm my-2"><b>Pickup Date: </b>{values.date.toDateString()}</p>
							<p className="text-sm my-2"><b>Pickup Time: </b>{values.time.toTimeString()}</p>
						</div>
						<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center w-11/12 mx-auto" role="alert">
							<span className="block sm:inline mr-2">Your booking is confirmed. </span>
							<strong className="font-bold">Successfully !</strong>
							<span className="absolute top-0 bottom-0 right-0 px-4 py-3">
							</span>
						</div>

						<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
							<button onClick={onClose} type="button" className="bg-orange-500 hover:bg-orange-600 rounded px-6 py-2 text-lg mx-auto text-white font-bold transition-all">
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}

export default Modal