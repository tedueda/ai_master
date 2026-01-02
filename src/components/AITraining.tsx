export default function AITraining() {
  return (
    <section id="ai-training" className="pt-12 md:pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="text-left">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              生成AI (ChatGPT・Gemini)を活用した業務効率の改善
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600">
              これらのコンテンツを学ぶことで、業務効率の改善はさることながら、企業の収益を大幅に向上させることができます。<br />
              さらにAIの進化は日々加速しており、社会の多様性にも柔軟に対応できるため、今すぐに身近な存在にすることが何よりも大切な事なのです。<br />
              これにより、貴社の未来に計り知れない利益と資産をもたらすことが期待できます。
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="../images/business_ai.png" 
              alt="Business AI" 
              className="rounded-2xl shadow-2xl animate-fade-in-scale"
            />
          </div>
        </div>

        {/* 新しいセクション: なぜ今"AIを使いこなす力"が必要なのか */}
        <div 
          className="relative rounded-3xl shadow-2xl overflow-hidden"
          style={{
            backgroundImage: 'url(../images/hero01.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* コンテンツ */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 左カラム: テキスト（白地背景） */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
                <div className="mb-4 md:mb-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                    社内AI内製化・導入支援
                  </h3>
                  <p className="text-lg md:text-xl text-blue-600 font-semibold">
                    企業のDX推進を実現するAI人材育成プログラム
                  </p>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start gap-2 md:gap-3">
                    <span className="text-xl md:text-2xl flex-shrink-0">✅</span>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      AI利用者でなく、<span className="font-bold text-blue-600">「AIを自在に操る人」</span>が求められている
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">✅</span>
                    <p className="text-base text-gray-700 leading-relaxed">
                      作業の9割はAIが担当、人は判断と創造に集中
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">✅</span>
                    <p className="text-base text-gray-700 leading-relaxed">
                      生産性は3倍以上に上昇
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">✅</span>
                    <p className="text-base text-gray-700 leading-relaxed">
                      AIの回答にビジネスチャンスのヒントが満載
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">✅</span>
                    <p className="text-base text-gray-700 leading-relaxed">
                      アイデア次第で新規事業の立ち上げも可能に‼️
                    </p>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 p-4 md:p-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl">
                  <p className="text-base md:text-lg lg:text-xl font-bold text-white leading-relaxed text-center">
                    "AIを使いこなす側"に回った人から、<br className="hidden md:inline" />チャンスを掴んでいます。
                  </p>
                </div>
              </div>

              {/* 右カラム: 空白（背景画像を見せる） */}
              <div className="hidden md:block"></div>
            </div>
          </div>
        </div>

        {/* こんな企業が取り組んでいます */}
        <div className="mt-12 md:mt-16 bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-left md:text-center">
            導入事例・活用シーン（BtoB）
          </h3>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                '飲食業',
                '製造業',
                '保育事業',
                '宝石卸業',
                '医療機器メーカー',
                '食品販売業',
                '不動産業',
                '介護事業',
                '福祉事業',
                '衛生事業',
                '弁護士事務所',
                '税理士事務所',
                '小売業',
                '運送業',
                '通信販売業',
                '教育事業'
              ].map((industry, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <p className="text-gray-800 font-semibold">{industry}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 font-medium">ほか多数</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
