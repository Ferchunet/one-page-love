import Header from '../components/layout/Header'
import HeroSection from '../components/sections/HeroSection'
import FeaturedSection from '../components/sections/FeaturedSection'
import InspirationGrid from '../components/sections/InspirationGrid'

const Home = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      <Header />
      <HeroSection />
      <FeaturedSection />
      <InspirationGrid />
    </div>
  )
}

export default Home


