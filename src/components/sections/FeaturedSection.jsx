import { featuredWebsites } from '../../data/websiteShowcase'
import WebsiteCard from '../common/WebsiteCard'

const FeaturedSection = () => {
  return (
    <section className="relative pt-16 md:pt-20 lg:pt-24" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative -mt-48 md:-mt-56 lg:-mt-64 z-10 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {featuredWebsites.map((website) => (
              <WebsiteCard
                key={website.id}
                title={website.title}
                category={website.category}
                imageUrl={website.imageUrl}
                backgroundColor={website.backgroundColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection

