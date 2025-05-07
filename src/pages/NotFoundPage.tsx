import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';

const NotFoundPage: React.FC = () => {
  return (
    <section className="pt-32 pb-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-blue-900 mb-6">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default NotFoundPage;