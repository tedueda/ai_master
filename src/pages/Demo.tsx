import { Play } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Demo() {
  const demos = [
    {
      id: 1,
      title: 'デモ1 複数のキャラクターで議論をさせる（Chat GPT)',
      videoUrl: 'https://vimeo.com/1114598014/685ed58d55',
    },
    {
      id: 2,
      title: 'デモ2  営業先の提案とリスト作成(Chat GPT)',
      videoUrl: 'https://vimeo.com/1114598308/8933e145fe',
    },
    {
      id: 3,
      title: 'デモ3. AIによるSEO対策が施されたHPの作成',
      videoUrl: 'https://vimeo.com/1114598935/6a964610eb',
    },
    {
      id: 4,
      title: 'デモ4  既存のホームページにSEO対策を施す方法',
      videoUrl: 'https://vimeo.com/1114599306/56fe992c62',
    },
    {
      id: 5,
      title: 'デモ5.  AIを使ってSEO対策されたブログを自動化する方法',
      videoUrl: 'https://vimeo.com/1114599673/4dd63a9120',
    },
    {
      id: 6,
      title: 'デモ6.  AIでホームページの修正・リニューアルする方法',
      videoUrl: 'https://vimeo.com/1114600169/c9af3ed7a4',
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

        {/* デモ動画グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* 動画プレースホルダー */}
              <div className="relative aspect-video bg-black">
                {demo.videoUrl ? (
                  <iframe
                    src={`https://player.vimeo.com/video/${demo.videoUrl.split('/')[3]}?h=${demo.videoUrl.split('/')[4]}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={demo.title}
                  ></iframe>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Play className="w-10 h-10 text-blue-600" />
                      </div>
                      <p className="text-gray-600 font-medium">動画準備中</p>
                    </div>
                  </div>
                )}
              </div>

              {/* タイトル */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 leading-relaxed">
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
