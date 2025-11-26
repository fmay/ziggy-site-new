interface PageLayoutProps {
  title: string
  description: string
  children?: React.ReactNode
  image?: string
  video?: string
}

const PageLayout = ({ title, description, children, image, video }: PageLayoutProps) => {
  if(video) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="w-full lg:w-2/3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stripe-navy mb-6">
                {title}
              </h1>
              <p className="text-xl text-stripe-gray">{description}</p>
            </div>
            <div className="w-full lg:w-1/3">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-lg"
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
          {children}
        </div>
      </div>
    )
  }

  return (
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
}

export default PageLayout
