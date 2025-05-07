import { Grid as Bridge, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between">
                    <NavLink to="/" className="flex items-center">
                        <Bridge size={32} className="text-blue-900 mr-2" />
                        <span className="text-xl font-bold text-blue-900">
                            eService <span className="text-teal-600">Solutions</span>
                        </span>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors hover:text-teal-600 ${isActive ? 'text-teal-600' : 'text-gray-700'
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors hover:text-teal-600 ${isActive ? 'text-teal-600' : 'text-gray-700'
                                }`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors hover:text-teal-600 ${isActive ? 'text-teal-600' : 'text-gray-700'
                                }`
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/education"
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors hover:text-teal-600 ${isActive ? 'text-teal-600' : 'text-gray-700'
                                }`
                            }
                        >
                            Education
                        </NavLink>
                        <NavLink
                            to="/resources"
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors hover:text-teal-600 ${isActive ? 'text-teal-600' : 'text-gray-700'
                                }`
                            }
                        >
                            Resources
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="px-5 py-2.5 rounded-md bg-blue-900 text-white text-sm font-medium transition-colors hover:bg-blue-800"
                        >
                            Contact Us
                        </NavLink>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 hover:text-teal-600 transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `px-4 py-2 text-sm font-medium transition-colors hover:text-teal-600 ${isActive ? 'text-teal-600' : 'text-gray-700'
                                }`
                            }
                            onClick={closeMenu}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `px-4 py-2 text-sm font-medium transition-colors hover:text-teal-600 ${isActive ? 'text-teal-600' : 'text-gray-700'
                                }`
                            }
                            onClick={closeMenu}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `px-4 py-2 text-sm font-medium transition-colors hover:text-teal-600 ${isActive ? 'text-teal-600' : 'text-gray-700'
                                }`
                            }
                            onClick={closeMenu}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/education"
                            className={({ isActive }) =>
                                `px-4 py-2 text-sm font-medium transition-colors hover:text-teal-600 ${isActive ? 'text-teal-600' : 'text-gray-700'
                                }`
                            }
                            onClick={closeMenu}
                        >
                            Education
                        </NavLink>
                        <NavLink
                            to="/resources"
                            className={({ isActive }) =>
                                `px-4 py-2 text-sm font-medium transition-colors hover:text-teal-600 ${isActive ? 'text-teal-600' : 'text-gray-700'
                                }`
                            }
                            onClick={closeMenu}
                        >
                            Resources
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="px-4 py-2.5 rounded-md bg-blue-900 text-white text-sm font-medium transition-colors hover:bg-blue-800 text-center"
                            onClick={closeMenu}
                        >
                            Contact Us
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;