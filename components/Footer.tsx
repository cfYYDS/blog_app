import Link from "next/link"
import React from "react"

export default function FooterThreeCols() {
  return (
    <>
      {/*    <!-- Component: Three Columns Footer --> */}
      <footer className="w-full text-slate-500">
        {/*      <!-- Main footer --> */}
        <div className="pt-16 pb-12 text-sm border-t border-slate-200 bg-slate-100">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-4"
                aria-labelledby="footer-product-3"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-product-3"
                >
                  Product
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Features
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Customers
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Why us?
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-4"
                aria-labelledby="footer-about-3"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-about-3"
                >
                  About us
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Leadership
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Events
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-4"
                aria-labelledby="footer-get-in-touch-3"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-get-in-touch-3"
                >
                  Get in touch
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Support
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Partners
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Join research
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      {/*    <!-- End Three Columns Footer --> */}
    </>
  )
}