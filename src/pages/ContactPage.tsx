import { Calendar, Clock, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import React from 'react';
import ContactForm from '../components/ContactForm';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

const ContactPage: React.FC = () => {
    return (
        <>
            <section className="pt-32 pb-20 bg-gray-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Ready to bridge the gap between service execution and team education? Get in touch with us today.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Contact Information */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-lg mr-4">
                                        <MapPin size={24} className="text-blue-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
                                        <p className="text-gray-700">
                                            123 Business Ave, Suite 200<br />
                                            San Francisco, CA 94107
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-lg mr-4">
                                        <Mail size={24} className="text-blue-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                                        <p className="text-gray-700">
                                            <a href="mailto:info@eService.com" className="hover:text-blue-900 transition-colors">
                                                info@eService.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-lg mr-4">
                                        <Phone size={24} className="text-blue-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                                        <p className="text-gray-700">
                                            <a href="tel:+14155551234" className="hover:text-blue-900 transition-colors">
                                                (415) 555-1234
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-lg mr-4">
                                        <Clock size={24} className="text-blue-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                                        <p className="text-gray-700">
                                            Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                                            Saturday - Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="https://twitter.com" className="bg-blue-50 p-3 rounded-lg text-blue-900 hover:bg-blue-100 transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.03 10.03 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                    <a href="https://linkedin.com" className="bg-blue-50 p-3 rounded-lg text-blue-900 hover:bg-blue-100 transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a href="https://facebook.com" className="bg-blue-50 p-3 rounded-lg text-blue-900 hover:bg-blue-100 transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a href="https://instagram.com" className="bg-blue-50 p-3 rounded-lg text-blue-900 hover:bg-blue-100 transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Discovery Call */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Schedule a Discovery Call</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Ready to explore how eService can help your business? Schedule a free 30-minute discovery call with one of our experts to discuss:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-gray-700">Your business goals and challenges</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-gray-700">How our dual execution-education approach can help</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-gray-700">Potential service packages and next steps</p>
                                </li>
                            </ul>
                            <div className="flex space-x-6">
                                <div className="flex items-center">
                                    <Calendar size={20} className="text-blue-900 mr-2" />
                                    <span className="text-gray-700">30 Minutes</span>
                                </div>
                                <div className="flex items-center">
                                    <MessageSquare size={20} className="text-blue-900 mr-2" />
                                    <span className="text-gray-700">Video Call</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock size={20} className="text-blue-900 mr-2" />
                                    <span className="text-gray-700">Flexible Scheduling</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Book Your Call</h3>

                            {/* Placeholder for calendar integration */}
                            <div className="bg-gray-100 p-8 rounded-md border border-gray-200 text-center">
                                <Calendar size={40} className="text-blue-900 mx-auto mb-4" />
                                <p className="text-gray-700 mb-4">
                                    Select a date and time that works for you using our online calendar.
                                </p>
                                <a
                                    href="https://calendly.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-900 text-white rounded-md font-medium hover:bg-blue-800 transition-colors"
                                >
                                    Schedule Now
                                </a>
                            </div>

                            <div className="mt-6">
                                <p className="text-gray-700 text-sm">
                                    <strong>What to expect:</strong> A friendly, no-pressure conversation to explore if we're a good fit for your needs. After the call, we'll follow up with a summary and suggested next steps.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <Container>
                    <SectionTitle
                        title="Frequently Asked Questions"
                        subtitle="Find answers to common questions about working with eService Solutions."
                        centered
                    />

                    <div className="max-w-3xl mx-auto divide-y divide-gray-200">
                        <div className="py-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                How does your pricing structure work?
                            </h3>
                            <p className="text-gray-700">
                                Our pricing is based on the specific services required and the level of training/knowledge transfer needed. We offer both project-based and retainer pricing models, with transparent pricing and no hidden fees. During our discovery call, we'll discuss your needs and provide a custom quote.
                            </p>
                        </div>
                        <div className="py-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                What industries do you specialize in?
                            </h3>
                            <p className="text-gray-700">
                                We work with clients across various industries, including technology, healthcare, finance, education, and e-commerce. Our approach is adaptable to different business contexts, and we pride ourselves on quickly learning the specifics of your industry.
                            </p>
                        </div>
                        <div className="py-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                How long does a typical project take?
                            </h3>
                            <p className="text-gray-700">
                                Project timelines vary based on scope and complexity. A website redesign might take 8-12 weeks, while a comprehensive digital transformation could span 6+ months. We'll provide a detailed timeline during the proposal phase and keep you updated throughout the project.
                            </p>
                        </div>
                        <div className="py-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                What makes your approach different from traditional agencies?
                            </h3>
                            <p className="text-gray-700">
                                Unlike traditional agencies that focus solely on deliverables, we integrate knowledge transfer and team development into every project. Our goal is to build your internal capabilities while delivering high-quality work, reducing long-term dependency and increasing the value you receive.
                            </p>
                        </div>
                        <div className="py-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                How do you measure success?
                            </h3>
                            <p className="text-gray-700">
                                We measure success through both tangible deliverables (site performance, conversion rates, etc.) and knowledge transfer metrics (team capability assessments, confidence surveys, etc.). We establish clear KPIs at the project start and provide regular reporting on progress.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ContactPage;