export default function TechStackPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Technology Stack</h1>
        <p className="text-base text-gray-700 mb-8">
          Our platform is built on a modern and robust technology stack, ensuring scalability, performance, and ease of use.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-300 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Frontend</h2>
            <p className="text-gray-700 mb-4">
              Designed for a seamless user experience with a focus on performance and accessibility.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>React.js for dynamic UI</li>
              <li>Tailwind CSS for styling</li>
              <li>Next.js for SSR and performance optimization</li>
            </ul>
          </div>
  
          <div className="border border-gray-300 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Backend</h2>
            <p className="text-gray-700 mb-4">
              A robust backend that ensures reliable data management and real-time processing.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Node.js and Express for server-side logic</li>
              <li>MongoDB for NoSQL database</li>
              <li>WebSockets for real-time updates</li>
            </ul>
          </div>
  
          <div className="border border-gray-300 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">APIs</h2>
            <p className="text-gray-700 mb-4">
              Secure and scalable APIs for smooth data exchange and integration with external systems.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>RESTful APIs for communication</li>
              <li>GraphQL for optimized queries</li>
              <li>JSON Web Tokens (JWT) for security</li>
            </ul>
          </div>
  
          <div className="border border-gray-300 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Deployment</h2>
            <p className="text-gray-700 mb-4">
              A scalable, cloud-based infrastructure designed for high availability and performance.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Docker for containerization</li>
              <li>Kubernetes for orchestration</li>
              <li>AWS for cloud hosting</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  