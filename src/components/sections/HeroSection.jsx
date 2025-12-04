const HeroSection = () => {
  return (
    <section className="text-white pt-12 md:pt-16 lg:pt-20 pb-40 md:pb-48 lg:pb-56" style={{ backgroundColor: '#2a2a2a' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Contenido principal */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-tight mb-4">
              One Page website inspiration,
              <br />
              templates and resources
            </h1>
            
            <p className="text-base md:text-lg text-gray-300 mt-4 max-w-3xl">
              Since 2008, we have curated 8149 Single Page websites. Learn more{' '}
              <a href="#about" className="underline decoration-gray-500 hover:text-white transition-colors">
                about us
              </a>{' '}
              or{' '}
              <a href="#submit" className="underline decoration-gray-500 hover:text-white transition-colors">
                submit
              </a>{' '}
              and get featured to 150k designers, devs & makers each month.
            </p>
          </div>

          {/* Newsletter button */}
          <div className="lg:flex-shrink-0 lg:ml-8 lg:mt-2">
            <p className="text-xs text-gray-400 mb-2 text-center">Get new inspiration to your inbox</p>
            <button className="bg-primary hover:bg-red-600 text-white font-bold text-xs tracking-wider px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center space-x-2 whitespace-nowrap w-full lg:w-auto">
              <span>INSPIRATION NEWSLETTER</span>
              <span>📧</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

