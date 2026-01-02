import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center lg:bg-right bg-[url('/images/hero_mb02.jpg')] lg:bg-[url('/images/hero04.jpg')]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[60%_40%] gap-8 items-center">
          {/* 左カラム：テキストコンテンツ */}
          <div className="text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8">
              <Sparkles size={20} className="md:w-6 md:h-6 flex-shrink-0" />
              <span className="text-sm md:text-base lg:text-lg font-medium">法人向けAI研修・DX人材育成プログラム</span>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight md:leading-relaxed">
              企業向けAI研修・<br />
              <span className="text-white md:text-blue-600">生成AI実務活用プログラム</span>
            </h1>

            <h2 className="text-sm md:text-lg lg:text-2xl text-gray-700 mb-8 md:mb-10 leading-relaxed md:leading-loose font-semibold w-[64%] md:w-[70%] lg:w-auto">
              ChatGPTを活用した業務効率化・社内AI内製化を実現。<br className="hidden lg:block" />
              補助金対応で企業のDX推進を全面支援
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#contact"
                className="group bg-blue-600 text-white px-5 py-2 md:px-8 md:py-4 rounded-lg hover:bg-blue-700 transition-all flex items-center space-x-2 text-sm md:text-lg font-medium shadow-lg hover:shadow-xl"
              >
                <span>無料相談を予約する</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform md:w-5 md:h-5" size={16} />
              </a>
              <a
                href="#curriculum"
                className="bg-white text-gray-900 px-5 py-2 md:px-8 md:py-4 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 text-sm md:text-lg font-medium"
              >
                カリキュラムを見る
              </a>
            </div>
          </div>
          
          {/* 右カラム：空白（背景画像を表示） */}
          <div className="hidden md:block"></div>
        </div>

        {/* セクション下部：統計情報を4つ横並び */}
        <div className="mt-12 md:mt-24 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          <div className="text-center p-3 md:p-4 bg-blue-100 rounded-xl border-2 border-blue-200">
            <div className="text-base md:text-xl font-bold text-blue-600 mb-1">全20講座</div>
            <div className="text-xs text-gray-700">実践カリキュラム</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-blue-100 rounded-xl border-2 border-blue-200">
            <div className="text-base md:text-xl font-bold text-blue-600 mb-1">ビジネス活用100%</div>
            <div className="text-xs text-gray-700">実践に即活用</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-blue-100 rounded-xl border-2 border-blue-200">
            <div className="text-base md:text-xl font-bold text-blue-600 mb-1">最新AI技術</div>
            <div className="text-xs text-gray-700">随時アップデート</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-blue-100 rounded-xl border-2 border-blue-200">
            <div className="text-base md:text-xl font-bold text-blue-600 mb-1">助成金サポート</div>
            <div className="text-xs text-gray-700">費用の75%バック</div>
          </div>
        </div>
      </div>
    </section>
  );
}
