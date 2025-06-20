import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-800 text-white py-8 px-4 md:py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-6 md:gap-8">
        {/* Ecosustain Section - Full width on mobile */}
        <div className="col-span-2 sm:col-span-1">
          <h3 className="text-lg font-bold mb-3">Ecosustain</h3>
          <p className="text-sm leading-relaxed">
            Promoting sustainability through green tech and eco-friendly solutions.
          </p>
        </div>

        {/* Services Section */}
        <div className="mt-4 sm:mt-0">
          <h3 className="text-base font-semibold mb-2">Services</h3>
          <ul className="space-y-1.5 text-sm">
            <li><Link to="/eco-friendly-consulting" className="hover:underline block py-0.5">Consulting</Link></li>
            <li><Link to="/green-technology-solutions" className="hover:underline block py-0.5">Green Tech</Link></li>
            <li><Link to="/environmental-impact-assessments" className="hover:underline block py-0.5">Assessments</Link></li>
            <li><Link to="/iso-certification-support" className="hover:underline block py-0.5">ISO Certification</Link></li>
            <li><Link to="/esg-integration-reporting" className="hover:underline block py-0.5">ESG Reporting</Link></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="mt-4 sm:mt-0">
          <h3 className="text-base font-semibold mb-2">Company</h3>
          <ul className="space-y-1.5 text-sm">
            <li><Link to="/about" className="hover:underline block py-0.5">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline block py-0.5">Contact</Link></li>
            <li><Link to="/careers" className="hover:underline block py-0.5">Careers</Link></li>
            <li><Link to="/blog" className="hover:underline block py-0.5">Blog</Link></li>
          </ul>
        </div>

        {/* Connect Section - Moves to second row on mobile */}
        <div className="col-span-2 sm:col-span-1 mt-4 sm:mt-0">
          <h3 className="text-base font-semibold mb-2">Connect</h3>
          <ul className="space-y-1.5 text-sm">
            <li className="flex items-start">
              <span className="font-medium mr-1">Email:</span>
              <a href="mailto:info@ecosustain.com" className="hover:underline break-all">info@ecosustain.com</a>
            </li>
            <li className="flex items-center">
              <span className="font-medium mr-1">Phone:</span>
              <a href="tel:+251921755965" className="hover:underline">+251 921 755 965</a>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-1">Location:</span>
              <span>Addis Ababa, Ethiopia</span>
            </li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="col-span-2 sm:col-span-1 mt-4 sm:mt-0">
          <h3 className="text-base font-semibold mb-2">Socials</h3>
          <ul className="space-y-1.5 text-sm">
            <li>
              <a 
                href="https://www.linkedin.com/company/ecosustain-solutions/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline flex items-center py-0.5"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center text-sm text-gray-300 mt-8 pt-6 border-t border-gray-700">
        &copy; {currentYear} Ecosustain Solutions. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;