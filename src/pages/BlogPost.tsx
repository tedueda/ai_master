import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import YouTubeEmbed from '../components/YouTubeEmbed';
import VimeoEmbed from '../components/VimeoEmbed';
import { useEffect } from 'react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">記事が見つかりません</h1>
            <Link to="/blog" className="text-blue-600 hover:text-blue-700">
              ブログ一覧に戻る
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            ブログ一覧に戻る
          </Link>

          {post.vimeoUrl ? (
            <VimeoEmbed videoUrl={post.vimeoUrl} title={post.title} />
          ) : post.videoId ? (
            <YouTubeEmbed videoId={post.videoId} title={post.title} />
          ) : (
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}

          <div className="flex items-center text-gray-500 mb-4">
            <Calendar className="w-5 h-5 mr-2" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>

          <div 
            className="prose prose-lg max-w-none"
            style={{
              fontSize: '1.125rem',
              lineHeight: '3',
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <style>{`
            .prose p {
              color: #374151;
              font-size: 1.125rem;
              line-height: 1.8;
              margin-bottom: 2.5rem;
            }
            .prose .lead-paragraph {
              font-size: 1.25rem;
              line-height: 1.8;
              margin-bottom: 2.5rem;
            }
            .prose h2 {
              font-size: 1.5rem;
              font-weight: bold;
              margin-top: 3rem;
              margin-bottom: 1.5rem;
              color: #111827;
            }
            .prose strong {
              color: #111827;
              font-weight: 600;
            }
            .prose .cta-box {
              background-color: #eff6ff;
              border: 2px solid #bfdbfe;
              border-radius: 0.5rem;
              padding: 2rem;
              margin-top: 3rem;
              margin-bottom: 2rem;
            }
            .prose .cta-link {
              font-size: 1.25rem;
              font-weight: bold;
              color: #2563eb;
            }
            .prose .cta-link:hover {
              color: #1d4ed8;
            }
          `}</style>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              ブログ一覧に戻る
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
