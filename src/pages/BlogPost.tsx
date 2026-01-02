import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import YouTubeEmbed from '../components/YouTubeEmbed';
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

          {post.videoId ? (
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
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-8 prose-h1:pb-4 prose-h1:border-b-2 prose-h1:border-blue-600
              prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:font-bold
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-5 prose-h3:text-blue-600
              prose-p:text-gray-700 prose-p:leading-[2] prose-p:mb-8 prose-p:text-lg
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:my-8 prose-ul:space-y-3
              prose-ol:my-8 prose-ol:space-y-4
              prose-li:text-gray-700 prose-li:leading-relaxed
              [&_.lead-paragraph]:text-xl [&_.lead-paragraph]:font-normal [&_.lead-paragraph]:mb-12 [&_.lead-paragraph]:leading-[2]
              [&_.cta-box]:bg-blue-50 [&_.cta-box]:border-2 [&_.cta-box]:border-blue-200 
              [&_.cta-box]:rounded-lg [&_.cta-box]:p-6 [&_.cta-box]:mt-12 [&_.cta-box]:mb-8
              [&_.cta-link]:text-xl [&_.cta-link]:font-bold [&_.cta-link]:text-blue-600 
              [&_.cta-link]:hover:text-blue-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

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
