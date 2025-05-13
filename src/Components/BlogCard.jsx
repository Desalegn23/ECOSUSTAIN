import React from "react";
import { CalendarDays } from "lucide-react";

function BlogCard({ title, summary, image, date, link }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{summary}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" /> {date}
          </span>
        </div>
        <a
          href={link}
          className="text-green-700 font-medium hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
