import {
    ArrowRight,
    Award,
    BarChart,
    BookOpen,
    Calendar,
    CheckCircle,
    Code,
    Palette,
    Target,
    Users
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Container from '../components/Container';
import CTASection from '../components/CTASection';
import SectionTitle from '../components/SectionTitle';

const EducationPage: React.FC = () => {
    return (
        <>
            <section className="pt-32 pb-20 bg-gray-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">Learning & Education</h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Building your team's capabilities through structured knowledge transfer and hands-on training.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Education Philosophy */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Education Philosophy</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                We believe that true digital transformation requires not just excellent execution, but the internal capability to maintain, extend, and evolve digital assets over time.
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Our approach to education is built on these core principles:
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1 bg-blue-50 p-1.5 rounded-full">
                                        <Target size={18} className="text-blue-900" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="font-semibold text-gray-900">Practical Application</h3>
                                        <p className="text-gray-700 text-sm">Learning by doing, not just theoretical knowledge</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1 bg-blue-50 p-1.5 rounded-full">
                                        <Users size={18} className="text-blue-900" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="font-semibold text-gray-900">Personalized Learning</h3>
                                        <p className="text-gray-700 text-sm">Tailored to your team's specific needs and existing skills</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1 bg-blue-50 p-1.5 rounded-full">
                                        <BarChart size={18} className="text-blue-900" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="font-semibold text-gray-900">Measurable Progress</h3>
                                        <p className="text-gray-700 text-sm">Clear goals and metrics to track capability development</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1 bg-blue-50 p-1.5 rounded-full">
                                        <BookOpen size={18} className="text-blue-900" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="font-semibold text-gray-900">Continuous Learning</h3>
                                        <p className="text-gray-700 text-sm">Building a sustainable culture of ongoing skill development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Our Learning Methodology</h3>

                            <div className="space-y-8">
                                <div className="flex">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        1
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-gray-900 mb-1">Assessment</h4>
                                        <p className="text-gray-700 text-sm">
                                            We evaluate your team's current capabilities, identify gaps, and establish learning objectives.
                                        </p>
                                    </div>
                                </div>

                                <div className="border-l-2 border-blue-200 ml-6 pl-6">
                                    <div className="flex">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-lg -ml-12">
                                            2
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-900 mb-1">Curriculum Design</h4>
                                            <p className="text-gray-700 text-sm">
                                                We create customized learning paths focused on practical skills and real-world application.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-l-2 border-blue-200 ml-6 pl-6">
                                    <div className="flex">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-lg -ml-12">
                                            3
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-900 mb-1">Hands-On Training</h4>
                                            <p className="text-gray-700 text-sm">
                                                We deliver interactive workshops, pair programming, and collaborative projects alongside your team.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-l-2 border-blue-200 ml-6 pl-6">
                                    <div className="flex">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg -ml-12">
                                            4
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-900 mb-1">Documentation</h4>
                                            <p className="text-gray-700 text-sm">
                                                We create comprehensive, accessible documentation and reference materials for ongoing learning.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-l-2 border-blue-200 ml-6 pl-6">
                                    <div className="flex">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg -ml-12">
                                            5
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-900 mb-1">Evaluation & Reinforcement</h4>
                                            <p className="text-gray-700 text-sm">
                                                We measure progress, provide ongoing support, and adjust training to ensure sustainable skill development.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Training Offerings */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <SectionTitle
                        title="Training Offerings"
                        subtitle="Flexible education options designed to meet your team's specific needs and learning objectives."
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-shadow hover:shadow-lg">
                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                                <Code size={28} className="text-blue-900" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Technical Skills Training</h3>
                            <p className="text-gray-600 mb-5">
                                Practical training on coding, development frameworks, DevOps, and technical best practices customized to your team's needs.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Frontend development workshops</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Backend architecture training</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Code review & best practices</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">DevOps & deployment processes</span>
                                </li>
                            </ul>
                            <Link to="/contact">
                                <Button variant="outline" size="sm" fullWidth>
                                    Learn More
                                </Button>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-shadow hover:shadow-lg">
                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                                <Palette size={28} className="text-blue-900" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Design & UX Training</h3>
                            <p className="text-gray-600 mb-5">
                                Training on user experience principles, design systems, prototyping, and visual design fundamentals.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">User research methodologies</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Design systems implementation</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Wireframing & prototyping</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">UI design principles & tools</span>
                                </li>
                            </ul>
                            <Link to="/contact">
                                <Button variant="outline" size="sm" fullWidth>
                                    Learn More
                                </Button>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-shadow hover:shadow-lg">
                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                                <BarChart size={28} className="text-blue-900" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Digital Marketing Training</h3>
                            <p className="text-gray-600 mb-5">
                                Training on digital marketing strategy, SEO, content creation, analytics, and campaign management.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">SEO & content optimization</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Analytics & data interpretation</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Campaign planning & execution</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Performance marketing tactics</span>
                                </li>
                            </ul>
                            <Link to="/contact">
                                <Button variant="outline" size="sm" fullWidth>
                                    Learn More
                                </Button>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-shadow hover:shadow-lg">
                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                                <Target size={28} className="text-blue-900" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Product Management Training</h3>
                            <p className="text-gray-600 mb-5">
                                Training on digital product management, roadmapping, agile methodologies, and user-centered development.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Agile & Scrum methodologies</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Product roadmap creation</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Prioritization frameworks</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">User story development</span>
                                </li>
                            </ul>
                            <Link to="/contact">
                                <Button variant="outline" size="sm" fullWidth>
                                    Learn More
                                </Button>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-shadow hover:shadow-lg">
                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                                <BookOpen size={28} className="text-blue-900" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Content Strategy Training</h3>
                            <p className="text-gray-600 mb-5">
                                Training on content planning, creation, governance, and optimization for digital platforms.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Content planning & calendars</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">SEO content development</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Content governance systems</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Content performance analysis</span>
                                </li>
                            </ul>
                            <Link to="/contact">
                                <Button variant="outline" size="sm" fullWidth>
                                    Learn More
                                </Button>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-shadow hover:shadow-lg">
                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                                <Users size={28} className="text-blue-900" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Leadership & Process Training</h3>
                            <p className="text-gray-600 mb-5">
                                Training for digital leaders on managing teams, processes, and digital transformation initiatives.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Digital transformation leadership</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Agile team management</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Digital project governance</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">Process optimization</span>
                                </li>
                            </ul>
                            <Link to="/contact">
                                <Button variant="outline" size="sm" fullWidth>
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Training Formats */}
            <section className="py-20 bg-white">
                <Container>
                    <SectionTitle
                        title="Training Formats"
                        subtitle="Flexible learning approaches designed to fit your team's workflow and learning preferences."
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                            <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center mb-5">
                                <Users size={24} className="text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Workshop Series</h3>
                            <p className="text-gray-700 mb-5">
                                Structured, hands-on workshops delivered in a series format to progressively build skills and knowledge.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start">
                                    <div className="mt-1">
                                        <CheckCircle size={16} className="text-green-500" />
                                    </div>
                                    <p className="ml-2 text-gray-600 text-sm">4-8 week programs with weekly sessions</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="mt-1">
                                        <CheckCircle size={16} className="text-green-500" />
                                    </div>
                                    <p className="ml-2 text-gray-600 text-sm">Hands-on exercises and projects</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="mt-1">
                                        <CheckCircle size={16} className="text-green-500" />
                                    </div>
                                    <p className="ml-2 text-gray-600 text-sm">Homework and practice assignments</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="mt-1">
                                        <CheckCircle size={16} className="text-green-500" />
                                    </div>
                                    <p className="ml-2 text-gray-600 text-sm">Group-based learning environment</p>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="inline-flex items-center text-blue-900 font-medium hover:text-teal-600 transition-colors"
                            >
                                Learn More
                                <ArrowRight size={16} className="ml-1" />
                            </a>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                            <div className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center mb-5">
                                <Users size={24} className="text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Embedded Training</h3>
                            <p className="text-gray-700 mb-5">
                                On-the-job training delivered alongside active project work, integrating learning with immediate application.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start">
                                    <div className="mt-1">
                                        <CheckCircle size={16} className="text-green-500" />
                                    </div>
                                    <p className="ml-2 text-gray-600 text-sm">Learn while working on real projects</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="mt-1">
                                        <CheckCircle size={16} className="text-green-500" />
                                    </div>
                                    <p className="ml-2 text-gray-600 text-sm">Pair programming and shadowing</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="mt-1">
                                        <CheckCircle size={16} className="text-green-500" />
                                    </div>
                                    <p className="ml-2 text-gray-600 text-sm">Just-in-time learning approach</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="mt-1">
                                        <CheckCircle size={16} className="text-green-500" />
                                    </div>
                                    <p className="ml-2 text-gray-600 text-sm">Immediate practical application</p>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="inline-flex items-center text-blue-900 font-medium hover:text-teal-600 transition-colors"
                            >
                                Learn More
                                <ArrowRight size={16} className="ml-1" />
                            </a>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                            <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center mb-5">
                                <Calendar size={24} className="text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Custom Curriculum</h3>
                            <p className="text-gray-700 mb-5">
                                Fully customized training programs designed specifically for your organization's unique needs and goals.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start">
                                    <div className="mt-1">
                                        <CheckCircle size={16} className="text-green-500" />
                                    </div>
                                    <p className="ml-2 text-gray-600 text-sm">Tailored to your specific needs</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="mt-1">
                                        <CheckCircle size={16} className="text-green-500" />
                                    </div>
                                    <p className="ml-2 text-gray-600 text-sm">Mix of formats and approaches</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="mt-1">
                                        <CheckCircle size={16} className="text-green-500" />
                                    </div>
                                    <p className="ml-2 text-gray-600 text-sm">Custom exercises and materials</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="mt-1">
                                        <CheckCircle size={16} className="text-green-500" />
                                    </div>
                                    <p className="ml-2 text-gray-600 text-sm">Flexible scheduling and delivery</p>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="inline-flex items-center text-blue-900 font-medium hover:text-teal-600 transition-colors"
                            >
                                Learn More
                                <ArrowRight size={16} className="ml-1" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-8 rounded-xl mt-16 border border-blue-100">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
                                    <Award size={32} className="text-white" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Skills Assessment</h3>
                                <p className="text-gray-700">
                                    Not sure where to start? Our comprehensive skills assessment process evaluates your team's current capabilities and identifies the most impactful areas for training and development.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <Link to="/contact">
                                    <Button variant="primary">
                                        Request Assessment
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <SectionTitle
                        title="Learning Success Stories"
                        subtitle="See how our training and education programs have helped teams build lasting capabilities."
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                            <div className="flex items-center mb-6">
                                <img
                                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    alt="John Davis"
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">John Davis</h4>
                                    <p className="text-sm text-gray-600">CTO, TechInnovate</p>
                                </div>
                            </div>
                            <svg className="h-8 w-8 text-blue-900 opacity-20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                            <p className="text-gray-700 mb-4 italic">
                                "eService didn't just deliver our new web platform – they built our team's capabilities through embedded training and knowledge transfer. Our developers now confidently maintain and extend the platform themselves."
                            </p>
                            <div className="border-t border-gray-100 pt-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center">
                                        <span className="text-sm font-medium text-gray-900 mr-2">Skills Developed:</span>
                                        <span className="text-sm text-gray-600">Modern Web Development, CI/CD, Architecture</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                            <div className="flex items-center mb-6">
                                <img
                                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    alt="Sarah Wilson"
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Sarah Wilson</h4>
                                    <p className="text-sm text-gray-600">Marketing Director, GrowthBrand</p>
                                </div>
                            </div>
                            <svg className="h-8 w-8 text-blue-900 opacity-20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                            <p className="text-gray-700 mb-4 italic">
                                "The content strategy training completely transformed how our marketing team approaches content creation. We've implemented a sustainable process and no longer need to rely on outside agencies for our content needs."
                            </p>
                            <div className="border-t border-gray-100 pt-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center">
                                        <span className="text-sm font-medium text-gray-900 mr-2">Skills Developed:</span>
                                        <span className="text-sm text-gray-600">Content Strategy, SEO, Analytics, Production</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Call to Action */}
            <CTASection
                title="Ready to build your team's capabilities?"
                description="Schedule a discovery call to discuss your training needs and explore our education options."
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

export default EducationPage;