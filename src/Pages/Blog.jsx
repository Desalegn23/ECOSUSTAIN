import React from "react";
import BlogCard from "../Components/BlogCard"; 
const blogPosts = [
  {
    title: "Understanding Environmental Impact Assessments",
    summary:
      "Discover the key components of EIA, the importance of compliance, and how it supports sustainable development goals.",
    image: "/images/blog1.jpg",
    date: "April 25, 2025",
    link: "/blog/environmental-impact-assessments",
  },
  {
    title: "Sustainable Building Practices in Africa",
    summary:
      "Explore how eco-friendly construction is evolving in African nations with innovative technologies and policies.",
    image: "/images/blog2.jpg",
    date: "March 12, 2025",
    link: "/blog/sustainable-building-africa",
  },
  {
    title: "How AI Is Revolutionizing Environmental Monitoring",
    summary:
      "AI-powered tools are transforming how we track pollution, deforestation, and biodiversity changes in real-time.",
    image: "/images/blog3.jpg",
    date: "February 8, 2025",
    link: "/blog/ai-environmental-monitoring",
  },
];

function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">📚 Insights & Articles</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our latest articles on sustainability, environmental policy, AI for ecology, and more.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
