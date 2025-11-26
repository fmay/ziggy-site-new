const Hero = () => (
  <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    {/* Background Image */}
    {/*<div*/}
    {/*  className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"*/}
    {/*  style={{ backgroundImage: 'url(/hero/hero-home.jpg)' }}*/}
    {/*/>*/}

    {/* Overlay for better text readability */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/90 via-white/80 to-white/90" />

    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-stripe-navy mb-6 leading-tight">
          The new ETL pioneer
        </h1>

        {/* Subheading */}
        <ul className="hero-list">
          <li><span>Ziggy Flows</span> - build blazingly fast integrations and migrations in a fraction of the time</li>
          <li><span>Ziggy Blocks</span> - fabulously easy access to all your platforms and data sources</li>
          <li>
            <span>Ziggy Cluster</span> - scale as much as you need for any load and high availability
          </li>
          <li><span>Security</span> - Ziggy runs on your servers so it's 100% under you control</li>
          <li><span>Cost</span> - low, predictable and not usage based</li>
        </ul>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-stripe-purple text-white font-semibold hover:opacity-90 transition-opacity duration-200">
            Start now
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-stripe-navy text-stripe-navy font-semibold hover:bg-stripe-navy hover:text-white transition-all duration-200">
            Contact sales
          </button>
        </div>

        {/* Email Form */}
        {/*<div className="max-w-md mx-auto">*/}
        {/*  <form className="flex flex-col sm:flex-row gap-3">*/}
        {/*    <input*/}
        {/*      type="email"*/}
        {/*      placeholder="Email address"*/}
        {/*      className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stripe-purple focus:border-transparent"*/}
        {/*    />*/}
        {/*    <button*/}
        {/*      type="submit"*/}
        {/*      className="px-6 py-3 rounded-full bg-stripe-navy text-white font-semibold hover:opacity-90 transition-opacity duration-200">*/}
        {/*      Get started*/}
        {/*    </button>*/}
        {/*  </form>*/}
        {/*</div>*/}
      </div>
    </div>

    {/* Gradient Background Effect */}
    {/*<div className="absolute inset-0 -z-5 overflow-hidden">*/}
    {/*  <div className="absolute top-0 left-1/4 w-96 h-96 opacity-20 rounded-full blur-3xl" />*/}
    {/*  <div className="absolute bottom-0 right-1/4 w-96 h-96 opacity-20 rounded-full blur-3xl" />*/}
    {/*</div>*/}
  </section>
)

export default Hero
