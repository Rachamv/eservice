import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Container from './Container';

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
  backgroundClass?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundClass = 'bg-blue-900',
}) => {
  return (
    <section className={`py-16 ${backgroundClass}`}>
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg text-blue-50 mb-8 leading-relaxed">{description}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={primaryCTA.link}>
              <Button variant="secondary" size="lg">
                {primaryCTA.text}
              </Button>
            </Link>
            
            {secondaryCTA && (
              <Link to={secondaryCTA.link}>
                <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;