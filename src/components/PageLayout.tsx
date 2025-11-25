interface PageLayoutProps {
  title: string
  description: string
  children?: React.ReactNode
}

const PageLayout = ({ title, description, children }: PageLayoutProps) => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stripe-navy mb-6">
          {title}
        </h1>
        <p className="text-xl text-stripe-gray max-w-3xl mx-auto">{description}</p>
      </div>
      {children}
    </div>
  </div>
)

export default PageLayout
