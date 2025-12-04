import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Resources</h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover tools and resources for building amazing one-page websites.
        </p>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 mb-4">Coming soon...</p>
          <Link 
            to="/" 
            className="text-primary hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Resources


