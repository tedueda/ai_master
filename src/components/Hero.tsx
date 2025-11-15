import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/hero04.jpg)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[60%_40%] gap-8 items-center">
          {/* 左カラム：テキストコンテンツ */}
          <div className="text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full mb-8">
              <Sparkles size={24} />
              <span className="text-base md:text-lg font-medium">専門知識は不要。未経験でも成果を出せるAI活用術</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8" style={{ lineHeight: '2' }}>
              「AIを使う」から<br />
              <span className="text-blue-600">「AIを使いこなす」</span>時代へ
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-700 mb-10 leading-loose font-semibold">
              ChatGPT・生成AI・AIエージェントを自在に操る<br />
              AIバイブコーディングで、WEB制作・アプリ開発・SEO対応を実現
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
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
          </div>
          
          {/* 右カラム：空白 */}
          <div></div>
        </div>

        {/* セクション下部：統計情報を4つ横並び */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="text-center p-4 bg-blue-100 rounded-xl border-2 border-blue-200">
            <div className="text-xl font-bold text-blue-600 mb-1">全20講座</div>
            <div className="text-xs text-gray-700">実践カリキュラム</div>
          </div>
          <div className="text-center p-4 bg-blue-100 rounded-xl border-2 border-blue-200">
            <div className="text-xl font-bold text-blue-600 mb-1">ビジネス活用100%</div>
            <div className="text-xs text-gray-700">実践に即活用</div>
          </div>
          <div className="text-center p-4 bg-blue-100 rounded-xl border-2 border-blue-200">
            <div className="text-xl font-bold text-blue-600 mb-1">最新AI技術</div>
            <div className="text-xs text-gray-700">随時アップデート</div>
          </div>
          <div className="text-center p-4 bg-blue-100 rounded-xl border-2 border-blue-200">
            <div className="text-xl font-bold text-blue-600 mb-1">助成金サポート</div>
            <div className="text-xs text-gray-700">費用の75%バック</div>
          </div>
        </div>
      </div>
    </section>
  );
}
