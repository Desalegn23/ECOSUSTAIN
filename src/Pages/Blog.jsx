import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import PageLayout from "../Components/PageLayout";

const blogPosts = [
  {
    id: 'environmental-impact-assessments',
    title: "Understanding Environmental Impact Assessments",
    summary:
      "Discover the key components of EIA, the importance of compliance, and how it supports sustainable development goals.",
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    date: "April 25, 2025",
    readTime: "5 min read",
    category: "Sustainability"
  },
  {
    id: 'sustainable-building-africa',
    title: "Sustainable Building Practices in Africa",
    summary:
      "Explore how eco-friendly construction is evolving in African nations with innovative technologies and policies.",
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    date: "March 12, 2025",
    readTime: "4 min read",
    category: "Construction"
  },
  {
    id: 'ai-environmental-monitoring',
    title: "How AI Is Revolutionizing Environmental Monitoring",
    summary:
      "AI-powered tools are transforming how we track pollution, deforestation, and biodiversity changes in real-time.",
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    date: "February 8, 2025",
    readTime: "6 min read",
    category: "Technology"
  },
  // Add more blog posts as needed
  {
    id: 'renewable-energy-trends',
    title: "The Future of Renewable Energy in Africa",
    summary:
      "Examining the latest trends and innovations in renewable energy solutions across the African continent.",
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Energy"
  },
  {
    id: 'urban-sustainability',
    title: "Creating Sustainable Cities of the Future",
    summary:
      "How urban planning and smart city technologies are shaping more sustainable and livable urban environments.",
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1544&q=80',
    date: "December 3, 2024",
    readTime: "7 min read",
    category: "Urban Planning"
  },
  {
    id: 'biodiversity-conservation',
    title: "Innovative Approaches to Biodiversity Conservation",
    summary:
      "Exploring new strategies and technologies being used to protect endangered species and ecosystems worldwide.",
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    date: "November 20, 2024",
    readTime: "6 min read",
    category: "Conservation"
  }
];

function BlogPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights & Articles</h1>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Explore our latest articles on sustainability, environmental policy, AI for ecology, and more.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogCard 
                key={index} 
                id={post.id}
                title={post.title}
                summary={post.summary}
                image={post.image}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
              />
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest insights and updates on sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default BlogPage;
