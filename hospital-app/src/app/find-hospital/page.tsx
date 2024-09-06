'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/app/components/ui/card"

const backgroundImages = [
  "/14.jpg",
  "/15.jpg",
  "/16.jpg",
  "/17.jpg",
  "/18.jpg",
  "/19.jpg",
  "/20.jpg",
  "/21.jpg",
  "/22.jpg",
  "/23.jpg",
]


export default function FindHospital() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  const [state, setState] = useState('')
  const [district, setDistrict] = useState('')
  const [locality, setLocality] = useState('')

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex)
        setNextImageIndex((nextImageIndex + 1) % backgroundImages.length)
        setIsTransitioning(false)
      }, 1000)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [nextImageIndex])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend or API
    console.log({ state, district, locality })
    // For now, we'll just log it
    alert('Form submitted! Check console for details.')
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out z-0"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          opacity: 1,
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out z-10"
        style={{
          backgroundImage: `url(${backgroundImages[nextImageIndex]})`,
          opacity: isTransitioning ? 1 : 0,
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
      <Card className="max-w-md w-full mx-auto z-30 bg-white bg-opacity-90 backdrop-blur-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-blue-600">Find your nearest hospital</CardTitle>
          <CardDescription>Enter your location details to find hospitals near you.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="state" className="text-sm font-medium text-gray-700">State</Label>
              <Input
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="district" className="text-sm font-medium text-gray-700">District</Label>
              <Input
                id="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="locality" className="text-sm font-medium text-gray-700">Locality/Current Location</Label>
              <Input
                id="locality"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Find Hospitals
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500 w-full text-center">
            Email used: {email || 'Not provided'}
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}