import { inspirationWebsites } from '../../data/websiteShowcase'
import WebsiteCard from '../common/WebsiteCard'

const InspirationGrid = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-12 uppercase tracking-wide">
          LATEST WEBSITE INSPIRATION
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {inspirationWebsites.map((website) => (
            <WebsiteCard
              key={website.id}
              title={website.title}
              category={website.category}
              imageUrl={website.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default InspirationGrid


