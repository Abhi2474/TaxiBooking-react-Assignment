import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from './Modal'

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	phone: Yup.string()
		.matches(/^\d+$/, 'Phone number must be a number')
		.min(10, 'Phone number must be at least 10 digits')
		.max(15, 'Phone number must be at most 15 digits')
		.required('Phone number is required'),
	email: Yup.string().email('Invalid email address').required('Email is required'),
	date: Yup.date().required("Date is required").min(new Date(), "Date cannot be in the past"),
	time: Yup.string().required('Time is required'),
	destination: Yup.string().required('Drop-off Location is required'),
	pickup: Yup.string().required('Pick Up Location is required'),
	passengers: Yup.number().required('No. of Passengers is required')
});

const initialValues = {
	name: '',
	phone: '',
	email: '',
	pickup: '',
	destination: '',
	passengers: '',
	date: '',
	time: ''
};

const MyForm = () => {

	const [isSubmitting, setSubmitting] = useState(true);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [formValues, setFormValues] = useState(null);

	const handleSubmit = (values, { setSubmitting }) => {
		console.log(values);
		setFormValues(values)
		setFormSubmitted(true);
		setSubmitting(false);
	};

	const onClose = () => {
		setFormSubmitted(false)
	}

	return (
		<>
			<div className='bg-orange-400 py-16'>


				<h1 className='text-4xl text-white w-10/12 mx-auto'>Book a Taxi: </h1>

				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>

					{({ isSubmitting, setFieldValue, values, errors, touched }) => (

						<Form className='w-10/12 mx-auto flex flex-wrap'>

							<div className='flex flex-col w-1/3  pl-2 py-2'>
								<label className='text-white font-bold' htmlFor="name">Name:</label>
								<Field className={`focus:outline-none rounded-sm py-2 px-4  ${touched.name && errors.name ? 'border-4 border-red-700 rounded-lg' : 'border-b border-gray-400 border'} `} type="text" id="name" name="name" placeholder='Name' />
								<ErrorMessage name="name" />
							</div>

							<div className='flex flex-col w-1/3  pl-2 py-2'>
								<label className='text-white font-bold' htmlFor="phone">Phone:</label>
								<Field className={`focus:outline-none rounded-sm py-2 px-4  ${touched.phone && errors.phone ? 'border-4 border-red-700 rounded-lg' : 'border-b border-gray-400 border'} `} type="tel" id="phone" name="phone" placeholder='Phone Number' />
								<ErrorMessage name="phone" />
							</div>

							<div className='flex flex-col w-1/3  pl-2 py-2'>
								<label className='text-white font-bold' htmlFor="email">Email:</label>
								<Field className={`focus:outline-none rounded-sm py-2 px-4  ${touched.email && errors.email ? 'border-4 border-red-700 rounded-lg' : 'border-b border-gray-400 border'} `} type="email" id="email" name="email" placeholder='Email' />
								<ErrorMessage name="email" />
							</div>


							<div className='flex flex-col w-1/5  pl-2 py-2'>
								<label className='text-white font-bold' htmlFor="pickup">Pick up Location</label>
								<Field className={`focus:outline-none rounded-sm py-2 px-4  ${touched.pickup && errors.pickup ? 'border-4 border-red-700 rounded-lg' : 'border-b border-gray-400 border'} `} type="text" id="pickup" name="pickup" placeholder='Pickup Location' />
								<ErrorMessage name="pickup" />
							</div>

							<div className='flex flex-col w-1/5  pl-2 py-2'>
								<label className='text-white font-bold' htmlFor="destination">Drop Location</label>
								<Field className={`focus:outline-none rounded-sm py-2 px-4  ${touched.destination && errors.destination ? 'border-4 border-red-700 rounded-lg' : 'border-b border-gray-400 border'} `} type="text" id="destination" name="destination" placeholder='Destination' />
								<ErrorMessage name="destination" />
							</div>

							<div className='flex flex-col w-1/5  pl-2 py-2'>
								<label className='text-white font-bold' htmlFor="date">Pickup Date</label>
								<DatePicker
									className={`focus:outline-none rounded-sm py-2 px-4  ${touched.date && errors.date ? 'border-4 border-red-700 rounded-lg' : 'border-b border-gray-400 border'} `}
									id="date"
									name="date"
									selected={values.date}
									onChange={(date) => setFieldValue('date', date)}
									dateFormat="dd/MM/yyyy"
									showYearDropdown
									scrollableYearDropdown
									yearDropdownItemNumber={50}
									placeholderText="Select Pickup Date"
								/>
								<ErrorMessage name="date" />
							</div>

							<div className='flex flex-col w-1/5  pl-2 py-2'>
								<label className='text-white font-bold' htmlFor="time">Pickup Time</label>
								<DatePicker
									className={`focus:outline-none rounded-sm py-2 px-4  ${touched.time && errors.time ? 'border-4 border-red-700 rounded-lg' : 'border-b border-gray-400 border'} `}
									startDate={new Date()}
									showTimeSelect
									showTimeSelectOnly
									timeIntervals={15}
									timeCaption="Time"
									dateFormat="h:mm aa"
									onChange={(time) => setFieldValue('time', time)}
									selected={values.time}
									placeholderText='Select Pickup Time'
								/>
								<ErrorMessage name="time" />
							</div>

							<div className='flex flex-col w-1/5  pl-2 py-2'>
								<label className='text-white font-bold' htmlFor="passengers">Passengers</label>
								<Field className={`focus:outline-none rounded-sm py-2 px-4  ${touched.passengers && errors.passengers ? 'border-4 border-red-700 rounded-lg' : 'border-b border-gray-400 border'} `} type="number" id="passengers" name="passengers" placeholder='No. of passengers' />
								<ErrorMessage name="passengers" />
							</div>

							<div className='flex w-1/3 mx-auto justify-evenly pl-2 py-2 mt-2'>
								<button className='bg-black text-white my-2 rounded py-3 w-32 font-serif hover:bg-gray-900 transition all duration-150' type='submit' disabled={isSubmitting}>Book</button>
								<button className='bg-black text-white my-2 rounded py-3 w-32 font-serif hover:bg-gray-900 transition all duration-150' type='reset'>Cancel</button>
							</div>

						</Form>
					)}
				</Formik>
			</div>
			{formSubmitted && <Modal values={formValues} onClose={onClose} />}
		</>
	);
};

export default MyForm;
