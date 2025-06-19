import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Clock } from "lucide-react";

function BlogCard({ id, title, summary, image, date, readTime = '5 min read', category }) {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80';
          }}
        />
        {category && (
          <span className="absolute top-3 right-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3 flex-grow">
          {summary}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
          <span className="flex items-center gap-1">
            <CalendarDays className="w-3 h-3" /> {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {readTime}
          </span>
        </div>
        <Link 
          to={`/blog/${id}`}
          className="mt-4 inline-flex items-center text-green-700 hover:text-green-800 font-medium text-sm group-hover:underline"
        >
          Read More <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
