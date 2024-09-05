"use client";
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Activity, Clipboard, Users, Phone, Clock, Bed, UserPlus, Package, Database, Layers } from "lucide-react"
import { useState, useEffect } from "react"
import Link from 'next/link'

const backgroundImages = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/9.jpg",
  "/10.jpg",
  "/11.jpg",
  "/12.jpg",
  "/13.jpg",  
]

export default function LandingPage() {
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
      }, 1000) // Duration of the crossfade effect
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(intervalId)
  }, [nextImageIndex])

  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <Activity className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">MediCare</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/features" className="text-sm font-medium hover:underline underline-offset-4">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </header> */}
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
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
          <div className="relative z-30 container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Streamline Your Hospital Management
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Efficient, secure, and user-friendly solutions for modern healthcare institutions.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className=" text-white px-4 py-2 rounded-md hover:bg-blue-700"><strong>Get Started</strong></Button>
                </form>
                <p className="text-xs text-white ">
                  Start your free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Clipboard className="h-10 w-10 text-blue-600" />
                <h2 className="text-xl font-bold">Electronic Health Records</h2>
                <p className="text-sm text-gray-500">
                  Securely manage and access patient records from anywhere, anytime.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-10 w-10 text-blue-600" />
                <h2 className="text-xl font-bold">Staff Management</h2>
                <p className="text-sm text-gray-500">
                  Efficiently schedule and manage your hospital staff with ease.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Phone className="h-10 w-10 text-blue-600" />
                <h2 className="text-xl font-bold">Telemedicine Integration</h2>
                <p className="text-sm text-gray-500">
                  Provide remote consultations and improve patient accessibility.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Clock className="h-10 w-10 text-blue-600" />
                <h2 className="text-xl font-bold">Queue Management</h2>
                <p className="text-sm text-gray-500">
                  Efficiently manage patient flow in OPDs and reduce waiting times.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Bed className="h-10 w-10 text-blue-600" />
                <h2 className="text-xl font-bold">Bed Availability</h2>
                <p className="text-sm text-gray-500">
                  Real-time tracking of bed occupancy across all departments.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <UserPlus className="h-10 w-10 text-blue-600" />
                <h2 className="text-xl font-bold">Patient Admission</h2>
                <p className="text-sm text-gray-500">
                  Streamline the patient admission process for faster care delivery.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Package className="h-10 w-10 text-blue-600" />
                <h2 className="text-xl font-bold">Inventory Management</h2>
                <p className="text-sm text-gray-500">
                  Monitor and manage the dispensation of medicines and consumables.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Database className="h-10 w-10 text-blue-600" />
                <h2 className="text-xl font-bold">Hospital Information Systems (HIS)</h2>
                <p className="text-sm text-gray-500">
                  Research existing hospital management systems and their functionalities related to bed management and patient admission.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <footer className="bg-gray-100 text-gray-600 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-blue-600">Careers</Link></li>
                <li><Link href="/press" className="hover:text-blue-600">Press</Link></li>
                <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="hover:text-blue-600">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-blue-600">Pricing</Link></li>
                <li><Link href="/security" className="hover:text-blue-600">Security</Link></li>
                <li><Link href="/integrations" className="hover:text-blue-600">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/documentation" className="hover:text-blue-600">Documentation</Link></li>
                <li><Link href="/support" className="hover:text-blue-600">Support</Link></li>
                <li><Link href="/api" className="hover:text-blue-600">API</Link></li>
                <li><Link href="/community" className="hover:text-blue-600">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-blue-600">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-blue-600">Cookie Policy</Link></li>
                <li><Link href="/gdpr" className="hover:text-blue-600">GDPR Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <p>© 2023 MediCare. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  )
}