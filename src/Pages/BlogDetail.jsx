import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CalendarDays, Clock, ArrowLeft, Share2, MessageSquare, Tag } from 'lucide-react';
import BlogCard from '../Components/BlogCard';
import PageLayout from '../Components/PageLayout';

// Mock data - in a real app, this would come from an API
const blogPosts = [
  {
    id: 'environmental-impact-assessments',
    title: 'Understanding Environmental Impact Assessments',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    date: 'April 25, 2025',
    author: 'Dr. Sarah Johnson',
    authorRole: 'Senior Environmental Consultant',
    authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    readTime: '8 min read',
    category: 'Sustainability',
    tags: ['EIA', 'Compliance', 'Environment'],
    content: [
      {
        type: 'paragraph',
        text: 'Environmental Impact Assessments (EIAs) are a critical tool in sustainable development, helping to identify potential environmental effects of proposed projects before they begin. This process ensures that decision-makers consider environmental consequences before making project decisions.'
      },
      {
        type: 'heading',
        text: 'The Importance of EIAs'
      },
      {
        type: 'paragraph',
        text: 'EIAs serve as a preventive measure against environmental damage, promoting sustainable development by identifying potential negative impacts early in the planning process. They help in making informed decisions that balance economic development with environmental protection.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
        alt: 'Environmental assessment in progress',
        caption: 'Field assessment for environmental impact study'
      },
      {
        type: 'heading',
        text: 'Key Components of an EIA'
      },
      {
        type: 'paragraph',
        text: 'A comprehensive EIA typically includes:\n\n• Screening: Determining if a project requires an EIA\n• Scoping: Identifying key issues and impacts to be considered\n• Impact Analysis: Assessing the significance of impacts\n• Mitigation: Proposing measures to prevent or reduce impacts\n• Reporting: Documenting the findings\n• Review: Evaluating the quality of the EIA report\n• Decision-making: Approving or rejecting the project\n• Monitoring: Ensuring compliance with conditions'
      }
    ],
    relatedPosts: ['sustainable-building-africa', 'ai-environmental-monitoring']
  },
  {
    id: 'sustainable-building-africa',
    title: 'Sustainable Building Practices in Africa',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    date: 'March 12, 2025',
    author: 'James Kariuki',
    authorRole: 'Sustainable Architect',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    readTime: '6 min read',
    category: 'Construction',
    tags: ['Green Building', 'Africa', 'Innovation'],
    content: [
      {
        type: 'paragraph',
        text: 'Sustainable building practices are transforming the African construction landscape, offering innovative solutions that balance development needs with environmental responsibility. Across the continent, architects and builders are adopting green building techniques that reduce environmental impact while creating healthier living spaces.'
      },
      {
        type: 'heading',
        text: 'Key Sustainable Building Techniques'
      },
      {
        type: 'paragraph',
        text: '1. Passive Design: Utilizing natural ventilation, daylighting, and thermal mass to reduce energy consumption.\n2. Local Materials: Sourcing building materials locally to reduce carbon footprint and support local economies.\n3. Water Conservation: Implementing rainwater harvesting and greywater recycling systems.\n4. Renewable Energy: Integrating solar panels and other renewable energy sources.\n5. Green Roofs: Installing vegetation on rooftops to improve insulation and reduce heat absorption.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        alt: 'Sustainable building in Africa',
        caption: 'Eco-friendly architecture in Africa'
      }
    ],
    relatedPosts: ['environmental-impact-assessments', 'ai-environmental-monitoring']
  },
  {
    id: 'ai-environmental-monitoring',
    title: 'How AI Is Revolutionizing Environmental Monitoring',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    date: 'February 8, 2025',
    author: 'Amina Diallo',
    authorRole: 'AI & Environmental Scientist',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    readTime: '7 min read',
    category: 'Technology',
    tags: ['AI', 'Monitoring', 'Innovation'],
    content: [
      {
        type: 'paragraph',
        text: 'Artificial Intelligence is transforming how we monitor and protect our environment. From tracking deforestation to predicting pollution patterns, AI-powered tools are providing unprecedented insights into environmental changes.'
      },
      {
        type: 'heading',
        text: 'AI Applications in Environmental Monitoring'
      },
      {
        type: 'paragraph',
        text: '• Deforestation Detection: AI analyzes satellite imagery to identify illegal logging activities in real-time.\n• Air Quality Prediction: Machine learning models predict air pollution levels based on weather and traffic data.\n• Wildlife Conservation: Computer vision helps track endangered species through camera trap images.\n• Ocean Health: AI processes underwater sounds to monitor marine ecosystems and detect illegal fishing.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        alt: 'AI environmental monitoring',
        caption: 'AI analyzing environmental data'
      }
    ],
    relatedPosts: ['environmental-impact-assessments', 'sustainable-building-africa']
  },
  {
    id: 'renewable-energy-trends',
    title: 'The Future of Renewable Energy in Africa',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    date: 'January 15, 2025',
    author: 'Kwame Osei',
    authorRole: 'Renewable Energy Expert',
    authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    readTime: '5 min read',
    category: 'Energy',
    tags: ['Renewable', 'Solar', 'Wind', 'Africa'],
    content: [
      {
        type: 'paragraph',
        text: 'Africa is at the forefront of the renewable energy revolution, with vast potential for solar, wind, and hydroelectric power. As the continent seeks to meet its growing energy demands sustainably, innovative projects are emerging across the region.'
      },
      {
        type: 'heading',
        text: 'Key Renewable Energy Trends'
      },
      {
        type: 'paragraph',
        text: '1. Solar Power: With abundant sunshine, Africa is seeing a surge in large-scale solar farms and off-grid solutions.\n2. Wind Energy: Countries like Kenya and South Africa are leading in wind power generation.\n3. Mini-Grids: Decentralized energy solutions are bringing power to remote communities.\n4. Battery Storage: Advancements in storage technology are making renewable energy more reliable.\n5. Green Hydrogen: Emerging as a potential export opportunity for sun-rich African nations.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1581092160569-4c6c2f135e0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        alt: 'Solar panels in Africa',
        caption: 'Solar energy farm in Africa'
      }
    ],
    relatedPosts: ['environmental-impact-assessments', 'sustainable-building-africa']
  },
  {
    id: 'biodiversity-conservation',
    title: 'Innovative Approaches to Biodiversity Conservation',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    date: 'November 20, 2024',
    author: 'Dr. Nia Williams',
    authorRole: 'Conservation Biologist',
    authorImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    readTime: '6 min read',
    category: 'Conservation',
    tags: ['Biodiversity', 'Conservation', 'Ecosystems'],
    content: [
      {
        type: 'paragraph',
        text: 'As the world faces unprecedented biodiversity loss, conservationists are turning to innovative approaches to protect and restore ecosystems. These new methods combine traditional knowledge with cutting-edge technology to create more effective conservation strategies.'
      },
      {
        type: 'heading',
        text: 'Emerging Conservation Technologies'
      },
      {
        type: 'paragraph',
        text: '1. Bioacoustic Monitoring: Using AI to analyze animal sounds for species identification and population monitoring.\n2. Environmental DNA (eDNA): Detecting species presence through genetic material in water, soil, or air samples.\n3. Conservation Drones: Deploying drones for anti-poaching patrols and habitat mapping.\n4. Community-Based Conservation: Empowering local communities as stewards of their natural resources.\n5. Rewilding Projects: Restoring ecosystems by reintroducing keystone species and natural processes.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        alt: 'Biodiversity conservation in action',
        caption: 'Field researcher monitoring wildlife in a conservation area'
      },
      {
        type: 'heading',
        text: 'Success Stories'
      },
      {
        type: 'paragraph',
        text: 'From the recovery of the mountain gorilla population in Central Africa to the restoration of marine ecosystems through artificial reefs, innovative conservation approaches are showing promising results. These successes demonstrate that with the right combination of technology, policy, and community engagement, we can reverse biodiversity loss.'
      }
    ],
    relatedPosts: ['ai-environmental-monitoring', 'sustainable-building-africa']
  }
];

function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Post not found</h1>
            <Link to="/blog" className="text-green-600 hover:underline inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to all posts
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  const renderContent = () => {
    if (!post.content || post.content.length === 0) {
      return (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>Content coming soon. Please check back later.</p>
          </div>
        </div>
      );
    }
    
    return post.content.map((item, index) => {
      switch (item.type) {
        case 'heading':
          return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-10 mb-4">{item.text}</h2>;
        case 'paragraph':
          return <p key={index} className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">{item.text}</p>;
        case 'image':
          return (
            <figure key={index} className="my-8">
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
              {item.caption && (
                <figcaption className="text-center text-sm text-gray-500 mt-2">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          );
        default:
          return null;
      }
    });
  };

  return (
    <PageLayout>
      {/* Article Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-green-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to all posts
          </Link>
          
          <div className="mb-4">
            <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-green-100">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-600 overflow-hidden mr-3">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-medium text-white">{post.author}</p>
                <p className="text-xs">{post.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center">
              <CalendarDays className="w-4 h-4 mr-1" /> {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" /> {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose lg:prose-lg max-w-none">
            {renderContent()}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-3">TAGS</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                    >
                      <Tag className="w-3 h-3 mr-1" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-500 mb-3">SHARE THIS POST</h3>
              <div className="flex space-x-4">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-500 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-700 hover:text-white transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent(post.title)}&body=Check out this article: ${encodeURIComponent(window.location.href)}`}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  aria-label="Share via Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-5 h-5 text-gray-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Comments</h3>
                <span className="ml-2 bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">0</span>
              </div>
              
              <div className="text-center py-8 border border-dashed border-gray-200 rounded-lg">
                <p className="text-gray-500">Be the first to comment</p>
                <button className="mt-4 px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors">
                  Leave a comment
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-4 md:mb-0 md:mr-6">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-900">{post.author}</h3>
                <p className="text-green-600 text-sm mb-2">{post.authorRole}</p>
                <p className="text-gray-600">
                  {post.author} is a leading expert in environmental impact assessments with over 10 years of experience 
                  in sustainable development projects across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">You might also like</h2>
              <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {post.relatedPosts
                .map(id => blogPosts.find(p => p.id === id))
                .filter(Boolean)
                .map((relatedPost) => (
                  <div key={relatedPost.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {relatedPost.category && (
                        <span className="absolute top-3 right-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                          {relatedPost.category}
                        </span>
                      )}
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        {relatedPost.summary || relatedPost.content?.[0]?.text?.substring(0, 150) + '...'}
                      </p>
                      <Link 
                        to={`/blog/${relatedPost.id}`}
                        className="mt-auto inline-flex items-center text-green-700 hover:text-green-800 font-medium text-sm"
                      >
                        Read More <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}

export default BlogDetail;