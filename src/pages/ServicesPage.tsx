import {
    ArrowRight,
    BookOpen,
    CheckCircle,
    Code,
    FileText,
    Globe,
    Palette
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Container from '../components/Container';
import CTASection from '../components/CTASection';
import SectionTitle from '../components/SectionTitle';

const ServicesPage: React.FC = () => {
    return (
        <>
            <section className="pt-32 pb-20 bg-gray-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Expert execution combined with knowledge transfer. We deliver results while building your team's capabilities.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Service Overview */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The eService Approach</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Every service we offer combines expert execution with structured knowledge transfer, ensuring your team develops the skills to maintain and extend the work we deliver.
                            </p>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                Our dual approach includes:
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <Code size={20} className="text-blue-900" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="font-semibold text-gray-900">Expert Execution</h3>
                                        <p className="text-gray-700">Skilled professionals delivering high-quality solutions</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <BookOpen size={20} className="text-blue-900" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="font-semibold text-gray-900">Knowledge Transfer</h3>
                                        <p className="text-gray-700">Training, documentation, and mentorship for your team</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Service Packages</h3>
                            <div className="space-y-6">
                                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-semibold text-blue-900">Execute</h4>
                                        <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded">Entry Level</span>
                                    </div>
                                    <p className="text-gray-700 text-sm mb-3">
                                        We deliver the solution with basic knowledge transfer to ensure smooth handoff.
                                    </p>
                                    <Link to="/services#execute" className="inline-flex items-center text-blue-900 text-sm font-medium hover:text-teal-600 transition-colors">
                                        Learn More
                                        <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-semibold text-blue-900">Execute + Educate</h4>
                                        <span className="text-sm bg-teal-100 text-teal-800 py-1 px-2 rounded">Most Popular</span>
                                    </div>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Complete solution with comprehensive training and documentation for your team.
                                    </p>
                                    <Link to="/services#execute-educate" className="inline-flex items-center text-blue-900 text-sm font-medium hover:text-teal-600 transition-colors">
                                        Learn More
                                        <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-semibold text-blue-900">Empower</h4>
                                        <span className="text-sm bg-amber-100 text-amber-800 py-1 px-2 rounded">Advanced</span>
                                    </div>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Collaborative delivery with extensive skills development and ongoing mentorship.
                                    </p>
                                    <Link to="/services#empower" className="inline-flex items-center text-blue-900 text-sm font-medium hover:text-teal-600 transition-colors">
                                        Learn More
                                        <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-semibold text-blue-900">Enterprise</h4>
                                        <span className="text-sm bg-gray-100 text-gray-800 py-1 px-2 rounded">Custom</span>
                                    </div>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Comprehensive digital transformation with organizational capability building.
                                    </p>
                                    <Link to="/services#enterprise" className="inline-flex items-center text-blue-900 text-sm font-medium hover:text-teal-600 transition-colors">
                                        Learn More
                                        <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Web Development */}
            <section id="web-development" className="py-20 bg-gray-50">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                alt="Web Development"
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                    <Globe size={28} className="text-blue-900" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Web Development</h2>
                            </div>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Custom websites and web applications that not only meet your business needs but also empower your team with the skills to maintain and extend them.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Technical Expertise</h3>
                                        <p className="text-gray-600 text-sm">Full-stack development with modern frameworks and technologies</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Knowledge Transfer</h3>
                                        <p className="text-gray-600 text-sm">Code structure tutorials, development workshops, and maintainability training</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Collaborative Process</h3>
                                        <p className="text-gray-600 text-sm">Regular reviews, pair programming sessions, and comprehensive documentation</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-lg border border-gray-200 mb-8">
                                <h3 className="font-semibold text-gray-900 mb-3">Our Web Development Services Include:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-sm">
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Custom Website Development</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Web Application Development</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>E-commerce Solutions</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>API Development & Integration</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>CMS Implementation</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Frontend Development Training</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Backend Systems Architecture</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Code Reviews & Best Practices</span>
                                    </li>
                                </ul>
                            </div>

                            <Link to="/contact">
                                <Button variant="primary">
                                    Discuss Your Web Project
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* UX Design */}
            <section id="ux-design" className="py-20 bg-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                    <Palette size={28} className="text-blue-900" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">UX Design</h2>
                            </div>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                User-centered design solutions that create exceptional experiences while teaching your team the principles and processes of effective UX design.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Research & Strategy</h3>
                                        <p className="text-gray-600 text-sm">User research, journey mapping, and experience strategy development</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Design System Creation</h3>
                                        <p className="text-gray-600 text-sm">Scalable design systems with component libraries and usage guidelines</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Knowledge Transfer</h3>
                                        <p className="text-gray-600 text-sm">Design workshops, UX principles training, and collaborative design sessions</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-lg border border-gray-200 mb-8">
                                <h3 className="font-semibold text-gray-900 mb-3">Our UX Design Services Include:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-sm">
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>User Research & Testing</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Wireframing & Prototyping</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Visual Design & UI</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Design System Development</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Interaction Design</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Accessibility Optimization</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>UX Workshops & Training</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Design Process Implementation</span>
                                    </li>
                                </ul>
                            </div>

                            <Link to="/contact">
                                <Button variant="primary">
                                    Discuss Your UX Project
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <img
                                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                alt="UX Design"
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Content Strategy */}
            <section id="content-strategy" className="py-20 bg-gray-50">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                alt="Content Strategy"
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                    <FileText size={28} className="text-blue-900" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Content Strategy</h2>
                            </div>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Strategic content development and optimization that drives engagement while teaching your team effective content creation and management skills.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Strategic Development</h3>
                                        <p className="text-gray-600 text-sm">Audience analysis, content planning, and editorial calendar creation</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Content Production</h3>
                                        <p className="text-gray-600 text-sm">Professional copywriting, visual content, and multimedia development</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Team Development</h3>
                                        <p className="text-gray-600 text-sm">Writing workshops, SEO training, and content governance implementation</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-lg border border-gray-200 mb-8">
                                <h3 className="font-semibold text-gray-900 mb-3">Our Content Strategy Services Include:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-sm">
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Content Audit & Analysis</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>SEO Content Creation</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Brand Voice Development</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Editorial Calendar Setup</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Content Governance Systems</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Content Marketing Training</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Content Performance Analysis</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>CMS Strategy & Implementation</span>
                                    </li>
                                </ul>
                            </div>

                            <Link to="/contact">
                                <Button variant="primary">
                                    Discuss Your Content Strategy
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Service Packages */}
            <section id="service-packages" className="py-20 bg-white">
                <Container>
                    <SectionTitle
                        title="Service Packages"
                        subtitle="Choose the right level of execution and education for your business needs and team development goals."
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                        {/* Execute Package */}
                        <div id="execute" className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all hover:shadow-lg">
                            <div className="bg-blue-900 p-6 text-center">
                                <h3 className="text-xl font-bold text-white">Execute</h3>
                                <p className="text-blue-100 text-sm mt-1">Entry Level</p>
                            </div>
                            <div className="p-6">
                                <div className="text-center mb-6">
                                    <span className="text-3xl font-bold text-gray-900">From $5,000</span>
                                    <p className="text-gray-600 text-sm mt-1">One-time project</p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">Expert execution of deliverables</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">Basic documentation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">Handoff training session</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">30 days of support</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-500 text-sm">Custom training sessions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-500 text-sm">Ongoing mentorship</span>
                                    </li>
                                </ul>
                                <Link to="/contact">
                                    <Button variant="outline" fullWidth>
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Execute + Educate Package */}
                        <div id="execute-educate" className="bg-white rounded-xl shadow-md border-2 border-teal-500 overflow-hidden transition-all hover:shadow-lg relative">
                            <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl">
                                POPULAR
                            </div>
                            <div className="bg-teal-600 p-6 text-center">
                                <h3 className="text-xl font-bold text-white">Execute + Educate</h3>
                                <p className="text-teal-100 text-sm mt-1">Most Popular</p>
                            </div>
                            <div className="p-6">
                                <div className="text-center mb-6">
                                    <span className="text-3xl font-bold text-gray-900">From $10,000</span>
                                    <p className="text-gray-600 text-sm mt-1">One-time project</p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">Expert execution of deliverables</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">Comprehensive documentation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">4 custom training sessions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">3 months of support</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">Team training materials</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-500 text-sm">Ongoing mentorship</span>
                                    </li>
                                </ul>
                                <Link to="/contact">
                                    <Button variant="secondary" fullWidth>
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Empower Package */}
                        <div id="empower" className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all hover:shadow-lg">
                            <div className="bg-amber-600 p-6 text-center">
                                <h3 className="text-xl font-bold text-white">Empower</h3>
                                <p className="text-amber-100 text-sm mt-1">Advanced</p>
                            </div>
                            <div className="p-6">
                                <div className="text-center mb-6">
                                    <span className="text-3xl font-bold text-gray-900">From $20,000</span>
                                    <p className="text-gray-600 text-sm mt-1">One-time project</p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">Collaborative execution model</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">Comprehensive documentation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">8 custom training sessions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">6 months of support</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">Complete training curriculum</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">3 months of mentorship</span>
                                    </li>
                                </ul>
                                <Link to="/contact">
                                    <Button variant="outline" fullWidth>
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Enterprise Package */}
                        <div id="enterprise" className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all hover:shadow-lg">
                            <div className="bg-gray-900 p-6 text-center">
                                <h3 className="text-xl font-bold text-white">Enterprise</h3>
                                <p className="text-gray-300 text-sm mt-1">Custom Solution</p>
                            </div>
                            <div className="p-6">
                                <div className="text-center mb-6">
                                    <span className="text-3xl font-bold text-gray-900">Custom</span>
                                    <p className="text-gray-600 text-sm mt-1">Tailored pricing</p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">Customized execution strategy</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">Enterprise documentation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">Unlimited training sessions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">12 months of support</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">Organization-wide training</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">Dedicated success manager</span>
                                    </li>
                                </ul>
                                <Link to="/contact">
                                    <Button variant="outline" fullWidth>
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Call to Action */}
            <CTASection
                title="Ready to bridge the gap?"
                description="Schedule a discovery call to discuss how we can help your business grow while building your team's capabilities."
                primaryCTA={{
                    text: "Schedule a Discovery Call",
                    link: "/contact",
                }}
                secondaryCTA={{
                    text: "Learn More About Us",
                    link: "/about",
                }}
                backgroundClass="bg-gradient-to-r from-blue-900 to-blue-800"
            />
        </>
    );
};

export default ServicesPage;