import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-stripe-light-bg border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Products */}
          <div>
            <h3 className="font-semibold text-stripe-navy mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-stripe-gray hover:text-stripe-navy transition-colors duration-200">
                  Payments
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-stripe-gray hover:text-stripe-navy transition-colors duration-200">
                  Billing
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-stripe-gray hover:text-stripe-navy transition-colors duration-200">
                  Connect
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="font-semibold text-stripe-navy mb-4">Developers</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/developers" className="text-stripe-gray hover:text-stripe-navy transition-colors duration-200">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/developers" className="text-stripe-gray hover:text-stripe-navy transition-colors duration-200">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/developers" className="text-stripe-gray hover:text-stripe-navy transition-colors duration-200">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-stripe-navy mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-stripe-gray hover:text-stripe-navy transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stripe-gray hover:text-stripe-navy transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-stripe-gray hover:text-stripe-navy transition-colors duration-200">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-stripe-navy mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/resources" className="text-stripe-gray hover:text-stripe-navy transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-stripe-gray hover:text-stripe-navy transition-colors duration-200">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-stripe-gray hover:text-stripe-navy transition-colors duration-200">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-stripe-gray text-sm">
            © {new Date().getFullYear()} Ziggy, Inc. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-stripe-gray hover:text-stripe-navy text-sm transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/terms" className="text-stripe-gray hover:text-stripe-navy text-sm transition-colors duration-200">
              Terms
            </Link>
            <Link href="/cookies" className="text-stripe-gray hover:text-stripe-navy text-sm transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
