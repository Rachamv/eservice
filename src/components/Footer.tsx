import { Grid as Bridge, Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <Link to="/" className="flex items-center mb-4">
                            <Bridge size={32} className="text-teal-500 mr-2" />
                            <span className="text-xl font-bold text-white">
                                eService <span className="text-teal-500">Solutions</span>
                            </span>
                        </Link>
                        <p className="mb-4 text-sm leading-relaxed">
                            Expert digital services combined with skills development. We don't just deliver work. We build your team's capabilities.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com" className="text-gray-400 hover:text-teal-500 transition-colors" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="https://linkedin.com" className="text-gray-400 hover:text-teal-500 transition-colors" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://facebook.com" className="text-gray-400 hover:text-teal-500 transition-colors" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="text-sm hover:text-teal-500 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-sm hover:text-teal-500 transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link to="/education" className="text-sm hover:text-teal-500 transition-colors">Education</Link>
                            </li>
                            <li>
                                <Link to="/resources" className="text-sm hover:text-teal-500 transition-colors">Resources</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-sm hover:text-teal-500 transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/services#web-development" className="text-sm hover:text-teal-500 transition-colors">Web Development</Link>
                            </li>
                            <li>
                                <Link to="/services#digital-marketing" className="text-sm hover:text-teal-500 transition-colors">Digital Marketing</Link>
                            </li>
                            <li>
                                <Link to="/services#ux-design" className="text-sm hover:text-teal-500 transition-colors">UX Design</Link>
                            </li>
                            <li>
                                <Link to="/services#content-strategy" className="text-sm hover:text-teal-500 transition-colors">Content Strategy</Link>
                            </li>
                            <li>
                                <Link to="/services#tech-consulting" className="text-sm hover:text-teal-500 transition-colors">Technology Consulting</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin size={20} className="text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">123 Business Ave, Suite 200, San Francisco, CA 94107</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="text-teal-500 mr-2 flex-shrink-0" />
                                <a href="tel:+14155551234" className="text-sm hover:text-teal-500 transition-colors">
                                    (415) 555-1234
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail size={20} className="text-teal-500 mr-2 flex-shrink-0" />
                                <a href="mailto:info@eService.com" className="text-sm hover:text-teal-500 transition-colors">
                                    info@eService.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-gray-700 my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {currentYear} eService Solutions. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-teal-500 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-teal-500 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;