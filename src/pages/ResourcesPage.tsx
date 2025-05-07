import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import CaseStudyCard from '../components/CaseStudyCard';
import Button from '../components/Button';
import { Search, ArrowRight, FileText, BookOpen, Video } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Resources</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Insights, guides, and case studies to help you bridge the gap between service execution and team education.
            </p>
          </div>
          <div className="max-w-xl mx-auto mt-10">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="w-full px-5 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-900 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle
            title="Featured Resources"
            subtitle="Our most popular guides, case studies, and insights to help build your team's capabilities."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-shadow hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Building Digital Teams" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-blue-900 text-white text-xs font-medium px-2.5 py-1 rounded">
                  Guide
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Building Digital Teams That Last</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to developing sustainable internal capabilities for the digital age.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-900 font-medium hover:text-teal-600 transition-colors"
                >
                  Read Guide
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-shadow hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7367/startup-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Case Study" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-medium px-2.5 py-1 rounded">
                  Case Study
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">TechStartup: From Agency Dependence to Self-Sufficiency</h3>
                <p className="text-gray-600 mb-4">
                  How a growing tech company built their internal capabilities while executing a major platform launch.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-900 font-medium hover:text-teal-600 transition-colors"
                >
                  Read Case Study
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-shadow hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Webinar" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-medium px-2.5 py-1 rounded">
                  Webinar
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">The Execution-Education Balance: A Framework</h3>
                <p className="text-gray-600 mb-4">
                  Watch our popular webinar on balancing immediate deliverables with long-term team development.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-900 font-medium hover:text-teal-600 transition-colors"
                >
                  Watch Webinar
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionTitle
            title="Case Studies"
            subtitle="Real stories of how we've helped clients achieve tangible results while building their teams' capabilities."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
            <CaseStudyCard
              title="Content Strategy for EdTech"
              description="Developed a comprehensive content strategy and trained the marketing team on content creation and optimization."
              imgSrc="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              category="Content Strategy"
              link="/resources/case-studies/edtech-content"
            />
            <CaseStudyCard
              title="FinTech Platform Migration"
              description="Successfully migrated a legacy system while building the internal team's technical capabilities."
              imgSrc="https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              category="Technology Consulting"
              link="/resources/case-studies/fintech-migration"
            />
            <CaseStudyCard
              title="Manufacturing Digital Transformation"
              description="Implemented digital systems and trained staff, resulting in 30% efficiency improvements."
              imgSrc="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              category="Team Development"
              link="/resources/case-studies/manufacturing-transformation"
            />
          </div>

          <div className="text-center mt-12">
            <Button variant="outline">
              View All Case Studies
            </Button>
          </div>
        </Container>
      </section>

      {/* Free Resources */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle
            title="Free Resources"
            subtitle="Guides, templates, and tools to help you implement best practices in your organization."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <FileText size={24} className="text-blue-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Digital Team Skills Assessment</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive framework to evaluate your team's current digital capabilities and identify areas for development.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-blue-900 font-medium hover:text-teal-600 transition-colors"
              >
                Download Template
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-blue-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Knowledge Transfer Playbook</h3>
              <p className="text-gray-600 mb-4">
                A step-by-step guide to effective knowledge transfer between external experts and your internal team.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-blue-900 font-medium hover:text-teal-600 transition-colors"
              >
                Download Guide
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Video size={24} className="text-blue-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Digital Training Video Series</h3>
              <p className="text-gray-600 mb-4">
                A collection of introductory videos on key digital concepts, designed for team upskilling and onboarding.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-blue-900 font-medium hover:text-teal-600 transition-colors"
              >
                Access Videos
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <FileText size={24} className="text-blue-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Digital Vendor Evaluation Matrix</h3>
              <p className="text-gray-600 mb-4">
                A framework for evaluating digital agencies and vendors based on execution quality and knowledge transfer capabilities.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-blue-900 font-medium hover:text-teal-600 transition-colors"
              >
                Download Template
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-blue-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Technical Documentation Template</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive template for creating developer-friendly technical documentation that facilitates knowledge transfer.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-blue-900 font-medium hover:text-teal-600 transition-colors"
              >
                Download Template
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Video size={24} className="text-blue-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Agile for Digital Teams Workshop</h3>
              <p className="text-gray-600 mb-4">
                A ready-to-use workshop format for introducing agile methodologies to teams new to digital project management.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-blue-900 font-medium hover:text-teal-600 transition-colors"
              >
                Download Materials
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline">
              View All Resources
            </Button>
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-blue-50">
        <Container>
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get the latest insights on bridging the gap between service execution and team education, delivered straight to your inbox.
              </p>
            </div>
            
            <form className="max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
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

export default ResourcesPage;