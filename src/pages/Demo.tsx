import { useState } from 'react';
import { X } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Demo() {
  const [selectedDemo, setSelectedDemo] = useState<number | null>(null);

  const demos = [
    {
      id: 1,
      title: 'デモ１ AIエージェント',
      videoUrl: 'https://youtu.be/VYHuZi6bdtU',
    },
    {
      id: 2,
      title: 'デモ2 生成AI',
      videoUrl: 'https://youtu.be/rFETkMUQs-o',
    },
    {
      id: 3,
      title: 'デモ３ ChatGPT・Gemini',
      videoUrl: 'https://youtu.be/BQUh-lfgSZw',
    },
  ];

  const openModal = (id: number) => {
    setSelectedDemo(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedDemo(null);
    document.body.style.overflow = 'auto';
  };

  const selectedDemoData = demos.find(d => d.id === selectedDemo);

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
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => openModal(demo.id)}
            >
              {/* 動画プレビュー */}
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${demo.videoUrl.includes('youtu.be') ? demo.videoUrl.split('/').pop()?.split('?')[0] : demo.videoUrl.split('v=')[1]?.split('&')[0]}`}
                  className="w-full h-full pointer-events-none"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={demo.title}
                ></iframe>
              </div>

              {/* タイトル */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 leading-relaxed group-hover:text-blue-600 transition-colors">
                  {demo.title}
                </h2>
                <p className="text-sm text-gray-500 mt-2">クリックして拡大表示</p>
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

      {/* モーダル */}
      {selectedDemo && selectedDemoData && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeModal}
        >
          <div 
            className="relative w-full h-full sm:h-auto sm:max-w-6xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 閉じるボタン */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:-top-12 sm:right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="閉じる"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* タイトル */}
            <h2 className="text-white text-lg sm:text-2xl font-bold mb-2 sm:mb-4 px-2 sm:px-0">
              {selectedDemoData.title}
            </h2>

            {/* 動画 */}
            <div className="relative flex-1 sm:flex-none sm:aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${selectedDemoData.videoUrl.includes('youtu.be') ? selectedDemoData.videoUrl.split('/').pop()?.split('?')[0] : selectedDemoData.videoUrl.split('v=')[1]?.split('&')[0]}?autoplay=1`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selectedDemoData.title}
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
