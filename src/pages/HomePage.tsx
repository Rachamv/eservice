import { BarChart, Code, Cpu, FileText, Globe, Lightbulb, Palette, Users } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CaseStudyCard from '../components/CaseStudyCard';
import Container from '../components/Container';
import CTASection from '../components/CTASection';
import FeatureCard from '../components/FeatureCard';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection
                title="Expert Digital Services + Skills Development"
                subtitle="We don't just deliver work. We build your team's capabilities."
                imgSrc="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                primaryCTA={{
                    text: "Schedule a Discovery Call",
                    link: "/contact",
                }}
                secondaryCTA={{
                    text: "Explore Our Services",
                    link: "/services",
                }}
            />

            {/* How We're Different */}
            <section className="py-20 bg-white">
                <Container>
                    <SectionTitle
                        title="How We're Different"
                        subtitle="Our unique approach combines expert execution with skill development, ensuring your team grows alongside your business."
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            title="Execute & Educate"
                            description="We deliver expert work while training your team to maintain and extend it."
                            icon={Lightbulb}
                        />
                        <FeatureCard
                            title="Custom Solutions"
                            description="Tailored approaches, not one-size-fits-all templates or frameworks."
                            icon={Users}
                        />
                        <FeatureCard
                            title="Transparent Process"
                            description="Clear communication and visibility into our methodology at every step."
                            icon={BarChart}
                        />
                        <FeatureCard
                            title="Knowledge Transfer"
                            description="Structured documentation and training to build your internal capabilities."
                            icon={Code}
                        />
                    </div>

                    <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-5">
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">The eService Difference</h3>
                                <p className="text-gray-700 mb-6">
                                    Unlike traditional agencies that create dependency or freelancer platforms with inconsistent quality, we build lasting capabilities within your organization.
                                </p>
                                <Link to="/about">
                                    <Button variant="primary">
                                        Learn About Our Approach
                                    </Button>
                                </Link>
                            </div>
                            <div className="lg:col-span-7">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <div className="bg-white p-5 rounded-lg border border-gray-100">
                                        <h4 className="font-semibold text-blue-900 mb-2">eService</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Expert execution</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Skills development</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Builds independence</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg border border-gray-100">
                                        <h4 className="font-semibold text-gray-700 mb-2">Traditional Agency</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Quality execution</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                </svg>
                                                <span>Limited knowledge transfer</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                </svg>
                                                <span>Creates dependency</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg border border-gray-100">
                                        <h4 className="font-semibold text-gray-700 mb-2">Freelancer Platform</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center">
                                                <svg className="w-4 h-4 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9h2v5a1 1 0 11-2 0v-5zm1-3a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                                </svg>
                                                <span>Variable quality</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                </svg>
                                                <span>Minimal training</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-4 h-4 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9h2v5a1 1 0 11-2 0v-5zm1-3a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                                </svg>
                                                <span>Inconsistent process</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Service Overview */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <SectionTitle
                        title="Our Services"
                        subtitle="Comprehensive digital solutions combined with knowledge transfer to build your team's capabilities."
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            title="Web Development"
                            description="Custom websites, web applications, and e-commerce solutions built with clean, maintainable code and knowledge transfer."
                            icon={Globe}
                            link="/services#web-development"
                        />
                        <ServiceCard
                            title="UX Design"
                            description="User research, wireframing, prototyping, and design systems with collaborative workshops to develop your team's design skills."
                            icon={Palette}
                            link="/services#ux-design"
                        />
                        <ServiceCard
                            title="Content Strategy"
                            description="Content creation, strategy development, and SEO optimization while training your team on content best practices."
                            icon={FileText}
                            link="/services#content-strategy"
                        />
                        <ServiceCard
                            title="Digital Marketing"
                            description="Performance marketing, social media management, and analytics with hands-on training for your marketing team."
                            icon={BarChart}
                            link="/services#digital-marketing"
                        />
                        <ServiceCard
                            title="Technology Consulting"
                            description="Technical roadmapping, system architecture, and technology selection with knowledge sharing sessions."
                            icon={Cpu}
                            link="/services#tech-consulting"
                        />
                        <ServiceCard
                            title="Team Development"
                            description="Customized training programs, workshops, and mentorship to build your team's digital capabilities."
                            icon={Users}
                            link="/services#team-development"
                        />
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/services">
                            <Button variant="primary">
                                View All Services
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Client Success Stories */}
            <section className="py-20 bg-white">
                <Container>
                    <SectionTitle
                        title="Client Success Stories"
                        subtitle="Real results delivered to our clients, with measurable improvements in both deliverables and team capabilities."
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <CaseStudyCard
                            title="E-commerce Platform Overhaul"
                            description="Increased conversion rates by 45% while training the internal team on modern e-commerce best practices."
                            imgSrc="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            category="Web Development"
                            link="/resources/case-studies/ecommerce-platform"
                        />
                        <CaseStudyCard
                            title="SaaS Marketing Campaign"
                            description="Generated 200+ qualified leads and built an in-house marketing team capable of running future campaigns."
                            imgSrc="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            category="Digital Marketing"
                            link="/resources/case-studies/saas-marketing"
                        />
                        <CaseStudyCard
                            title="Healthcare App Redesign"
                            description="Improved user satisfaction by 60% and trained the product team on UX research methods and design principles."
                            imgSrc="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            category="UX Design"
                            link="/resources/case-studies/healthcare-app"
                        />
                    </div>

                    <div className="mt-16">
                        <TestimonialCard
                            quote="eService didn't just deliver an amazing website - they taught our team how to maintain and extend it. That knowledge transfer has been invaluable for our continued growth."
                            author="Sarah Johnson"
                            role="Marketing Director"
                            company="TechSolutions Inc."
                            imgSrc="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        />
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
            />
        </>
    );
};

export default HomePage;