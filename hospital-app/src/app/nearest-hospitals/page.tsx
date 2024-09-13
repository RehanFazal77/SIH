'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dailog"
import { ScrollArea } from "@/app/components/ui/scroll-page"

type Hospital = {
  id: string
  name: string
  address: string
  distance: number
}

const mockHospitals: Hospital[] = [
  {
    id: '1',
    name: 'All India Institute Of Medical Sciences Delhi',
    address: 'Sri Aurobindo Marg, Ansari Nagar, New Delhi, Delhi 110029',
    distance: 9.5
  },
  {
    id: '2',
    name: 'Delhi Surgical Centre',
    address: 'Daryaganj, Near Golcha Cinema, New Delhi, Delhi 110002',
    distance: 4.2
  },
  {
    id: '3',
    name: 'AK Institute Of Ophthalmology',
    address: 'E-18, Ground Floor, South Extension I, New Delhi, Delhi 110049',
    distance: 9.0
  },
  {
    id: '4',
    name: 'Medanta The Medicity',
    address: 'Sector 38, Gurugram, Haryana 122001',
    distance: 29.0
  },
  {
    id: '5',
    name: 'VMMC & Safdarjung Hospital',
    address: 'Ring Road, Safdarjung Enclave, New Delhi, Delhi 110029',
    distance: 9.0
  },
  {
    id: '6',
    name: 'Sukhmani Hospital',
    address: 'B-7/115A, Safdarjung Enclave, New Delhi, Delhi 110029',
    distance: 8.8
  }
];

const hospitalServices = [
  "Electronic Health Records",
  "Staff Management",
  "Telemedicine Integration",
  "Queue Management",
  "Bed Availability",
  "Patient Admission",
  "Inventory Management",
  "Hospital Information Systems (HIS)"
]

function NearestHospitalsContent() {
  const searchParams = useSearchParams()
  const state = searchParams.get('state')
  const district = searchParams.get('district')
  const locality = searchParams.get('locality')

  const [hospitals, setHospitals] = useState<Hospital[]>([])

  useEffect(() => {
    // In a real application, you would fetch the hospitals data here
    // based on the state, district, and locality
    setHospitals(mockHospitals)
  }, [state, district, locality])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Nearest Hospitals</h1>
      <p className="mb-4">Showing results for: {state}, {district}, {locality}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hospitals.map((hospital) => (
          <Card key={hospital.id}>
            <CardHeader>
              <CardTitle>{hospital.name}</CardTitle>
              <CardDescription>{hospital.address}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Distance: {hospital.distance} km</p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>View Services</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{hospital.name} Services</DialogTitle>
                    <DialogDescription>Available hospital services</DialogDescription>
                  </DialogHeader>
                  <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                    <ul className="space-y-2">
                      {hospitalServices.map((service, index) => (
                        <li key={index} className="flex items-center">
                          <Button variant="ghost" className="w-full justify-start">
                            {service}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default function NearestHospitals() {
  return (
    <NearestHospitalsContent />
  )
}