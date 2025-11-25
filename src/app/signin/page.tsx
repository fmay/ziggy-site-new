import PageLayout from '@/components/PageLayout'

export default function SignIn() {
  return (
    <PageLayout
      title="Sign In"
      description="Access your account to manage your business."
    >
      <div className="max-w-md mx-auto">
        <form className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-stripe-navy mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stripe-purple focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-stripe-navy mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stripe-purple focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-stripe-purple text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>

            <div className="text-center">
              <a href="#" className="text-stripe-purple hover:underline text-sm">
                Forgot your password?
              </a>
            </div>
          </div>
        </form>

        <p className="text-center mt-6 text-stripe-gray">
          Don&apos;t have an account?{' '}
          <a href="#" className="text-stripe-purple hover:underline font-semibold">
            Sign up
          </a>
        </p>
      </div>
    </PageLayout>
  )
}
