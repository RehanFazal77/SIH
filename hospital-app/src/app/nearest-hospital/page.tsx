'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from "@/app/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dailog"

const hospitals = [
  { id: 1, name: "City General Hospital", address: "123 Main St, Cityville" },
  { id: 2, name: "Community Health Center", address: "456 Oak Ave, Townsburg" },
  { id: 3, name: "St. Mary's Medical Center", address: "789 Elm Rd, Villageton" },
]

const managementOptions = [
  "Electronic Health Records",
  "Staff Management",
  "Telemedicine Integration",
  "Queue Management",
  "Bed Availability",
  "Patient Admission",
  "Inventory Management",
  "Hospital Information Systems (HIS)"
]

export default function NearestHospitals() {
  const searchParams = useSearchParams()
  const state = searchParams.get('state')
  const district = searchParams.get('district')
  const locality = searchParams.get('locality')

  const [selectedHospital, setSelectedHospital] = useState(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nearest Hospitals</h1>
      <p className="mb-4">Showing results for: {state}, {district}, {locality}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hospitals.map((hospital) => (
          <Card key={hospital.id}>
            <CardHeader>
              <CardTitle>{hospital.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{hospital.address}</p>
              <Dialog>
                {/* <DialogTrigger asChild>
                  <Button onClick={() => setSelectedHospital(hospital)}>View Management Options</Button>
                </DialogTrigger> */}
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{hospital.name} - Management Options</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {managementOptions.map((option) => (
                      <Button key={option} variant="outline" className="justify-start">
                        {option}
                      </Button>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}