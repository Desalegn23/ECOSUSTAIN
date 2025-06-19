import React from 'react';

const PageLayout = ({ children, title, description, bgColor = 'bg-white' }) => {
  return (
    <main className={`min-h-screen ${bgColor}`}>
      {/* Page Header with lighter green design */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
          {description && (
            <p className="mt-2 text-sm md:text-base text-green-50 max-w-3xl">
              {description}
            </p>
          )}
        </div>
      </div>
      
      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </main>
  );
};

export default PageLayout;
