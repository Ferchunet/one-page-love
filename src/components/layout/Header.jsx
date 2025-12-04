import { Link } from 'react-router-dom'
import { mainNavigationLinks } from '../../data/navigationLinks'
import SearchBar from '../common/SearchBar'

const Header = () => {
  return (
    <header className="text-white py-3" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#FF4458' }}>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="text-base font-bold">One Page Love</span>
            </Link>
            
            <nav className="hidden lg:flex space-x-8">
              {mainNavigationLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.href}
                  className={`transition-colors ${
                    link.isActive
                      ? 'text-white border-b-2 border-primary pb-1'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <SearchBar />
        </div>
      </div>
    </header>
  )
}

export default Header

