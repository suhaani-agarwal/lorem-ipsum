


"use client"

const handleHostEvent = (e) => {
  e.preventDefault();
  hostEvent();
};

import React from 'react'


const page = () => {
  const [eventDetails, setEventDetails] = React.useState({
    event: '',
    date: '',
    time: '',
    organiser: '',
  });

  const [isEventHosted, setIsEventHosted] = React.useState(false);

  const handleInputChange = (e) => {
    setEventDetails({
      ...eventDetails,
      [e.target.name]: e.target.value,
    });
  };

  const hostEvent = () => {
    setIsEventHosted(true);
  };

  return (
    <div className='bg-rose-100 w-screen h-screen'>
      <h1 className='text-5xl font-bold mx-auto py-10 text-center'>Tambola</h1>
      <div className="flex justify-center items-center">
        <form onSubmit={hostEvent} className="flex flex-col gap-4 border border-gray-300 rounded-lg p-10 w-96 bg-white">
          <div className="flex flex-col gap-2">
            <label htmlFor="event" className="text-xl font-semibold">Event:</label>
            <input type="text" id="event" name="event" value={eventDetails.event} onChange={handleInputChange} className="border-2 border-gray-300 bg-white h-12 px-5 pr-16 rounded-lg text-base focus:outline-none" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="date" className="text-xl font-semibold">Date:</label>
            <input type="date" id="date" name="date" value={eventDetails.date} onChange={handleInputChange} className="border-2 border-gray-300 bg-white h-12 px-5 pr-16 rounded-lg text-base focus:outline-none" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="time" className="text-xl font-semibold">Time:</label>
            <input type="time" id="time" name="time" value={eventDetails.time} onChange={handleInputChange} className="border-2 border-gray-300 bg-white h-12 px-5 pr-16 rounded-lg text-base focus:outline-none" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="organiser" className="text-xl font-semibold">Organiser:</label>
            <input type="text" id="organiser" name="organiser" value={eventDetails.organiser} onChange={handleInputChange} className="border-2 border-gray-300 bg-white h-12 px-5 pr-16 rounded-lg text-base focus:outline-none" />
          </div>
          <button type="submit" className="mt-2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300">Host</button>
        </form>
      </div>
      {isEventHosted && (
        <div className="event-card">
          <h2>Event Details</h2>
          <p>Event: {eventDetails.event}</p>
          <p>Date: {eventDetails.date}</p>
          <p>Time: {eventDetails.time}</p>
          <p>Organiser: {eventDetails.organiser}</p>
        </div>
      )}
    </div>
  )
}

export default page
