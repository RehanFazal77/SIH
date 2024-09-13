'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Progress } from "@/app/components/ui/progress"
import { FileText, Users, Video, Clock, Bed, UserPlus, Package, Database } from "lucide-react"
import Link from 'next/link'

export default function Dashboard() {
  const services = [
    {
      title: "Electronic Health Records",
      description: "Securely manage and access patient records from anywhere, anytime.",
      icon: FileText,
      progress: 75,
    },
    {
      title: "Staff Management",
      description: "Efficiently schedule and manage your hospital staff with ease.",
      icon: Users,
      progress: 60,
    },
    {
      title: "Telemedicine Integration",
      description: "Provide remote consultations and improve patient accessibility.",
      icon: Video,
      progress: 40,
    },
    {
      title: "Queue Management",
      description: "Efficiently manage patient flow in OPDs and reduce waiting times.",
      icon: Clock,
      progress: 80,
    },
    {
      title: "Bed Availability",
      description: "Real-time tracking of bed occupancy across all departments.",
      icon: Bed,
      progress: 90,
    },
    {
      title: "Patient Admission",
      description: "Streamline the patient admission process for faster care delivery.",
      icon: UserPlus,
      progress: 70,
    },
    {
      title: "Inventory Management",
      description: "Monitor and manage the dispensation of medicines and consumables.",
      icon: Package,
      progress: 55,
    },
    {
      title: "Hospital Information Systems (HIS)",
      description: "Research existing hospital management systems and their functionalities.",
      icon: Database,
      progress: 30,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Hospital Services Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {service.title}
              </CardTitle>
              <service.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xs">{service.description}</CardDescription>
              <Progress value={service.progress} className="mt-2" />
              <div className="text-xs text-muted-foreground mt-2">
                {service.progress}% implemented
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/detailed-services" className="text-blue-600 hover:underline">
          View Detailed Service Information
        </Link>
      </div>
    </div>
  )
}