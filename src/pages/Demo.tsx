import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Demo() {
  const demos = [
    {
      id: 1,
      title: 'デモ１ AIエージェント',
      videoUrl: 'https://vimeo.com/1162980629/0f6829d721',
    },
    {
      id: 2,
      title: 'デモ2 生成AI',
      videoUrl: 'https://vimeo.com/1162367868/b1e3960dea',
    },
    {
      id: 3,
      title: 'デモ３ ChatGPT・Gemini',
      videoUrl: 'https://vimeo.com/1161266126/85fc6a01a6',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      {/* メインコンテンツ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* ページタイトル */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            デモ動画
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* デモ動画リスト（ワンカラム） */}
        <div className="max-w-5xl mx-auto space-y-12">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* 動画 */}
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`https://player.vimeo.com/video/${demo.videoUrl.split('/')[3]}?h=${demo.videoUrl.split('/')[4]}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={demo.title}
                ></iframe>
              </div>

              {/* タイトル */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 leading-relaxed">
                  {demo.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* 補足情報 */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              実践的なAI活用方法を学べます
            </h3>
            <p className="text-gray-700 leading-relaxed">
              これらのデモ動画では、ChatGPTやAIツールを使った実践的な活用方法をご紹介しています。
              ビジネスシーンで即座に活用できるテクニックを学ぶことができます。
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
