import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-800 text-white py-10 px-4 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 md:gap-8">
        {/* Ecosustain Section */}
        <div className="footer-section">
          <h3 className="text-lg font-bold mb-2">Ecosustain</h3>
          <p className="text-sm">
            Promoting sustainability through green tech and eco-friendly solutions.
          </p>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-2">Services</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/eco-friendly-consulting" className="hover:underline">Consulting</Link></li>
            <li><Link to="/green-technology-solutions" className="hover:underline">Green Tech</Link></li>
            <li><Link to="/environmental-impact-assessments" className="hover:underline">Assessments</Link></li>
            <li><Link to="/iso-certification-support" className="hover:underline">ISO Certification</Link></li>
            <li><Link to="/esg-integration-reporting" className="hover:underline">ESG Reporting</Link></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <ul className="space-y-1 text-sm">
            <li>Email: <a href="mailto:info@ecosustain.com" className="hover:underline">info@ecosustain.com</a></li>
            <li>Phone: <a href="tel:+251921755965" className="hover:underline">+251 921 755 965</a></li>
            <li>Location: Addis Ababa, Ethiopia</li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-2">Socials</h3>
          <ul className="space-y-1 text-sm">
            {/* <li>
              <a href="https://facebook.com/ecosustain" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Facebook
              </a>
            </li> */}
            {/* <li>
              <a href="https://twitter.com/ecosustain" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Twitter
              </a>
            </li> */}
            <li>
              <a href="https://www.linkedin.com/company/ecosustain-solutions/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </li>
            {/* <li>
              <a href="https://youtube.com/ecosustain" target="_blank" rel="noopener noreferrer" className="hover:underline">
                YouTube
              </a>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 mt-10">
        &copy; {currentYear} Ecosustain Solutions. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;