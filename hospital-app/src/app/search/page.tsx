'use client'

import { useState, useEffect, useRef } from 'react'

const SearchHospital = () => {
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 })
  const [radius, setRadius] = useState(1000) // 1km default radius
  const [hospitals, setHospitals] = useState([])
  const mapRef = useRef(null)
  console.log(userLocation)
  console.log(hospitals)
  console.log(setHospitals)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        },
        () => {
          console.error('Error: The Geolocation service failed.')
        }
      )
    } else {
      console.error('Error: Your browser doesn\'t support geolocation.')
    }
  }, [])

  const searchHospitals = () => {
    if (!mapRef.current) return
    // Here you will place the Google Maps API key and the PlacesService logic later
    console.log("Google Maps API key will be inserted here later")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Search Hospitals</h1>
      <div className="mb-4">
        <label htmlFor="radius" className="block text-sm font-medium text-gray-700">Radius (meters)</label>
        <input
          type="number"
          id="radius"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          className="mt-1 block w-1/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-100"
        />
      </div>
      <button
        onClick={searchHospitals}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Search Hospitals
      </button>
      
      {/* GoogleMap component will not function until you add the API key */}
      <p className="text-red-500">Google Maps will load here after API key is added.</p>

      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">Nearby Hospitals</h2>
        <ul className="list-disc pl-5">
          {/* {hospitals.map((hospital, index) => (
            <li key={index}>{hospital.name}</li>
          ))} */}
        </ul>
      </div>
    </div>
  )
}

export default SearchHospital
