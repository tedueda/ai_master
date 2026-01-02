import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function BlogList() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">ブログ</h1>
            <p className="text-xl text-gray-600">AI活用の最新情報をお届けします</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.videoId 
                      ? `https://img.youtube.com/vi/${post.videoId}/maxresdefault.jpg`
                      : post.image
                    }
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-4 text-blue-600 font-semibold group-hover:text-blue-700">
                    続きを読む →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
