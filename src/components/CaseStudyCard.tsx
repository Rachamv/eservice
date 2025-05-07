import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface CaseStudyCardProps {
  title: string;
  description: string;
  imgSrc: string;
  category: string;
  link: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  imgSrc,
  category,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 group hover:shadow-lg transition-shadow">
      <div className="relative h-52 overflow-hidden">
        <img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <span className="absolute bottom-4 left-4 bg-blue-900 text-white text-xs font-medium px-2.5 py-1 rounded">
          {category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        <Link to={link}>
          <Button variant="outline" size="sm">
            View Case Study
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;