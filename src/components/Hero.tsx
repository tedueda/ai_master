import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Sparkles size={20} />
            <span className="text-sm font-medium">AI時代のクリエイティブスキルを習得</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            未来を創る<br />
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              AI × Web × SEO
            </span>
            <br />総合スクール
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
            ChatGPT・生成AI・AIエージェントを活用した<br />
            次世代のWebクリエイター育成プログラム
          </p>

          <div className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-2xl p-6 mb-10 max-w-2xl mx-auto">
            <p className="text-lg text-gray-800 font-medium mb-3">
              AIなくしては企業の発展は見込めません
            </p>
            <p className="text-gray-700 leading-relaxed">
              AIで何ができるのか？AIがどういう事をしてくれるのか？<br />
              それを知っているだけで、会社の未来が大きく変わってきます。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all flex items-center space-x-2 text-lg font-medium shadow-lg hover:shadow-xl"
            >
              <span>無料相談を予約する</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#curriculum"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 text-lg font-medium"
            >
              カリキュラムを見る
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-sm text-gray-600">実践カリキュラム</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">実務対応スキル</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">AI</div>
              <div className="text-sm text-gray-600">最新技術対応</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">助成金</div>
              <div className="text-sm text-gray-600">申請サポート</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
