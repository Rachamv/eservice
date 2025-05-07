import {
    Award,
    BarChart,
    CheckCircle,
    Code,
    Palette,
    Target,
    Users
} from 'lucide-react';
import React from 'react';
import Container from '../components/Container';
import CTASection from '../components/CTASection';
import SectionTitle from '../components/SectionTitle';

const AboutPage: React.FC = () => {
    return (
        <>
            <section className="pt-32 pb-20 bg-gray-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">About eService Solutions</h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We help businesses grow by not just delivering expert digital services, but by building their teams' capabilities along the way.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Company Story */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                EService Solutions was founded in 2020 by a team of digital experts who recognized a fundamental problem: businesses were becoming increasingly dependent on external agencies and consultants, without developing the internal capabilities needed for long-term success.
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                We saw that traditional agencies focused solely on deliverables, while educational resources often lacked practical application. The gap between execution and education was creating a cycle of dependency that hindered businesses' ability to grow sustainably.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                EService was created to bridge this gap - providing expert digital services while simultaneously building our clients' internal capabilities through structured knowledge transfer, training, and ongoing support.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-8 border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Core Values</h3>
                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <CheckCircle size={24} className="text-blue-900" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Knowledge Sharing</h4>
                                        <p className="text-gray-700">We believe in empowering our clients through education and transparency.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <CheckCircle size={24} className="text-blue-900" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Excellence in Execution</h4>
                                        <p className="text-gray-700">We deliver high-quality solutions that stand the test of time.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <CheckCircle size={24} className="text-blue-900" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Long-term Partnerships</h4>
                                        <p className="text-gray-700">We focus on building sustainable relationships, not quick transactions.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <CheckCircle size={24} className="text-blue-900" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Continuous Growth</h4>
                                        <p className="text-gray-700">We're committed to evolving our skills and helping our clients do the same.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Our Approach */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <SectionTitle
                        title="Our Approach"
                        subtitle="How we combine expert service delivery with knowledge transfer to build lasting capabilities."
                        centered
                    />

                    <div className="relative mt-16">
                        {/* Process line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-200 z-0 hidden md:block"></div>

                        <div className="space-y-24">
                            {/* Step 1 */}
                            <div className="relative z-10">
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-blue-200 bg-blue-900 text-white font-bold flex items-center justify-center">
                                    1
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="md:text-right">
                                        <div className="inline-block md:hidden w-12 h-12 rounded-full border-4 border-blue-200 bg-blue-900 text-white font-bold flex items-center justify-center mb-4">
                                            1
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery & Assessment</h3>
                                        <p className="text-gray-700">
                                            We start by understanding your business goals, current capabilities, and growth aspirations. This includes evaluating your team's existing skills and identifying areas for development.
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                        <h4 className="font-medium text-blue-900 mb-3">Service Components:</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Business goals workshop</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Technical needs assessment</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Team skills evaluation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Comprehensive roadmap</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative z-10">
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-blue-200 bg-blue-900 text-white font-bold flex items-center justify-center">
                                    2
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="md:order-2 md:text-left">
                                        <div className="inline-block md:hidden w-12 h-12 rounded-full border-4 border-blue-200 bg-blue-900 text-white font-bold flex items-center justify-center mb-4">
                                            2
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Planning & Design</h3>
                                        <p className="text-gray-700">
                                            We create a customized plan that balances immediate deliverables with long-term capability building. This includes setting clear milestones for both service delivery and knowledge transfer.
                                        </p>
                                    </div>
                                    <div className="md:order-1 bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                        <h4 className="font-medium text-blue-900 mb-3">Service Components:</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Project scope definition</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Technology stack selection</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Training curriculum design</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Collaborative prototyping</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative z-10">
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-blue-200 bg-blue-900 text-white font-bold flex items-center justify-center">
                                    3
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="md:text-right">
                                        <div className="inline-block md:hidden w-12 h-12 rounded-full border-4 border-blue-200 bg-blue-900 text-white font-bold flex items-center justify-center mb-4">
                                            3
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Execution & Education</h3>
                                        <p className="text-gray-700">
                                            Our experts implement the solution while simultaneously conducting training sessions, collaborative work, and creating comprehensive documentation for your team.
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                        <h4 className="font-medium text-blue-900 mb-3">Service Components:</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Solution development</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Hands-on training sessions</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Documentation creation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Collaborative sprints</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="relative z-10">
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-blue-200 bg-blue-900 text-white font-bold flex items-center justify-center">
                                    4
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="md:order-2 md:text-left">
                                        <div className="inline-block md:hidden w-12 h-12 rounded-full border-4 border-blue-200 bg-blue-900 text-white font-bold flex items-center justify-center mb-4">
                                            4
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Transition & Ongoing Support</h3>
                                        <p className="text-gray-700">
                                            We gradually transition ownership to your team, providing follow-up support and advanced training to ensure long-term success and independence.
                                        </p>
                                    </div>
                                    <div className="md:order-1 bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                        <h4 className="font-medium text-blue-900 mb-3">Service Components:</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Knowledge transfer sessions</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Ongoing technical support</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Advanced skill development</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Performance review & optimization</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Team Highlights */}
            <section className="py-20 bg-white">
                <Container>
                    <SectionTitle
                        title="Our Team"
                        subtitle="Meet some of the experts who will execute your project and build your team's capabilities."
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-12">
                        {/* Team Member 1 */}
                        <div className="text-center">
                            <div className="relative w-48 h-48 mx-auto mb-5">
                                <img
                                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="John Smith"
                                    className="w-full h-full object-cover rounded-full"
                                />
                                <div className="absolute -bottom-3 -right-3 bg-blue-900 rounded-full p-3">
                                    <Code size={20} className="text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">John Smith</h3>
                            <p className="text-blue-600 font-medium mb-3">Lead Developer</p>
                            <p className="text-gray-600 px-4">
                                Full-stack developer with 12+ years of experience and a passion for knowledge sharing and mentorship.
                            </p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="text-center">
                            <div className="relative w-48 h-48 mx-auto mb-5">
                                <img
                                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="Sarah Williams"
                                    className="w-full h-full object-cover rounded-full"
                                />
                                <div className="absolute -bottom-3 -right-3 bg-blue-900 rounded-full p-3">
                                    <Palette size={20} className="text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">Sarah Williams</h3>
                            <p className="text-blue-600 font-medium mb-3">UX Design Director</p>
                            <p className="text-gray-600 px-4">
                                Award-winning designer who specializes in creating intuitive user experiences and building design systems.
                            </p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="text-center">
                            <div className="relative w-48 h-48 mx-auto mb-5">
                                <img
                                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="David Johnson"
                                    className="w-full h-full object-cover rounded-full"
                                />
                                <div className="absolute -bottom-3 -right-3 bg-blue-900 rounded-full p-3">
                                    <Target size={20} className="text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">David Johnson</h3>
                            <p className="text-blue-600 font-medium mb-3">Digital Strategy Lead</p>
                            <p className="text-gray-600 px-4">
                                Strategic thinker with extensive experience in digital transformation and team capability building.
                            </p>
                        </div>

                        {/* Team Member 4 */}
                        <div className="text-center">
                            <div className="relative w-48 h-48 mx-auto mb-5">
                                <img
                                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="Emily Chen"
                                    className="w-full h-full object-cover rounded-full"
                                />
                                <div className="absolute -bottom-3 -right-3 bg-blue-900 rounded-full p-3">
                                    <Award size={20} className="text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">Emily Chen</h3>
                            <p className="text-blue-600 font-medium mb-3">Learning Experience Designer</p>
                            <p className="text-gray-600 px-4">
                                Education specialist who transforms technical concepts into engaging learning experiences.
                            </p>
                        </div>

                        {/* Team Member 5 */}
                        <div className="text-center">
                            <div className="relative w-48 h-48 mx-auto mb-5">
                                <img
                                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="Michael Roberts"
                                    className="w-full h-full object-cover rounded-full"
                                />
                                <div className="absolute -bottom-3 -right-3 bg-blue-900 rounded-full p-3">
                                    <BarChart size={20} className="text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">Michael Roberts</h3>
                            <p className="text-blue-600 font-medium mb-3">Marketing Strategist</p>
                            <p className="text-gray-600 px-4">
                                Data-driven marketer with a focus on measurable results and marketing team development.
                            </p>
                        </div>

                        {/* Team Member 6 */}
                        <div className="text-center">
                            <div className="relative w-48 h-48 mx-auto mb-5">
                                <img
                                    src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="Lisa Thompson"
                                    className="w-full h-full object-cover rounded-full"
                                />
                                <div className="absolute -bottom-3 -right-3 bg-blue-900 rounded-full p-3">
                                    <Users size={20} className="text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">Lisa Thompson</h3>
                            <p className="text-blue-600 font-medium mb-3">Client Success Director</p>
                            <p className="text-gray-600 px-4">
                                Relationship builder who ensures every client achieves their goals through our integrated approach.
                            </p>
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
                    text: "View Our Services",
                    link: "/services",
                }}
            />
        </>
    );
};

export default AboutPage;