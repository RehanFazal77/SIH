export default function FeaturesPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Features & Benefits</h1>
        <p className="text-base text-gray-700 mb-8">
          Our solution is designed to streamline hospital operations while enhancing patient care. Explore the key features and benefits that make our platform a game-changer in healthcare management.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-300 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Queue Management</h2>
            <p className="text-gray-700 mb-4">
              Efficiently manage patient flow in OPDs with minimal waiting times.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Efficient Queue Management for streamlined patient flow in OPDs.</li>
              <li>Optimizes waiting time</li>
              <li>Improves patient experience</li>
              <li>Enables staff to prioritize cases effectively</li>  
            </ul>
          </div>
  
          <div className="border border-gray-300 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Real-time Bed Availability</h2>
            <p className="text-gray-700 mb-4">
              Always know the bed occupancy status across departments in real time.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Real-time Bed Availability tracking across hospital departments.</li>
              <li>Helps streamline patient admissions</li>
              <li>Improves resource management</li>
              <li>Supports better decision-making</li>
            </ul>
          </div>
  
          <div className="border border-gray-300 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Patient Admission</h2>
            <p className="text-gray-700 mb-4">
              Simplified patient admission process with seamless data entry.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Streamlined Patient Admission process for improved hospital operations.</li>
              <li>Speeds up admissions</li>
              <li>Reduces errors in patient data entry</li>
              <li>Allows hospitals to focus on care, not paperwork</li>
            </ul>
          </div>
  
          <div className="border border-gray-300 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Inventory Management</h2>
            <p className="text-gray-700 mb-4">
              Monitor and manage the usage of medicines and consumables efficiently.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Comprehensive Inventory Management to monitor medical supplies and consumables.</li>
              <li>Prevents stockouts and overstocking</li>
              <li>Optimizes inventory levels</li>
              <li>Ensures continuous supply for patient care</li>
            </ul>
          </div>
          <div className="border border-gray-300 bg-white rounded-lg p-6 shadow-md">
  <h2 className="text-xl font-semibold mb-4">Hospital Information Systems (HIS)</h2>
  <p className="text-gray-700 mb-4">
    Research existing hospital management systems and their functionalities related to bed management and patient admission.
  </p>
  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>Integration with existing Hospital Information Systems (HIS) and city-wide healthcare modules.</li>
    <li>Scalable solution designed to handle multiple hospitals and large volumes of patient data.</li>
  </ul>
</div>

        </div>
      </div>
    );
  }
  