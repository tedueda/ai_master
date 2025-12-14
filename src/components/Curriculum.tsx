import { Clock } from 'lucide-react';

const programs = [
  {
    course: 'ChatGPT',
    id: 'A-1',
    title: 'Chat GPT',
    items: [
      'ChatGPT 5の基本操作を学ぶ',
      'ChatGPT 5でプロンプトを書くコツ',
      'ChatGPT 5のビジネス利用法',
      'ChatGPT５によるディーブリサーチ・AI検索・資料作成',
      'ChatGPT Agentの使い方'
    ],
    duration: '2時間46分12秒'
  },
  {
    course: '生成AI',
    id: 'A-2',
    title: '生成AI',
    items: [
      '生成AIを使ったプレゼンツールの作成',
      '生成AIを使ったSNS動画の作成',
      '生成AI(Canva AI）を使った販促物・画像の作成',
      '生成AIを使った研修・学習動画の作成',
      'Google Gemini3・エージェントの活用'
    ],
    duration: '2時間42分20秒'
  },
  {
    course: 'AIエージェント',
    id: 'B-1',
    title: 'AIエージェントの基本',
    items: [
      'AIエージェントの基本／MCP連携'
    ],
    duration: '28分52秒'
  },
  {
    course: 'AIエージェント',
    id: 'B-2',
    title: 'WEB制作・SEO対策',
    items: [
      'AIエージェントを使ったWEB制作の基礎的な流れ',
      'AIエージェントで新規HPを作成する方法',
      'AIエージェントで既存HPをリニューアルする方法',
      'AIエージェントで作成したHPを公開する方法',
      'AIエージェントを使ったSEO対策の基礎的な流れ',
      'AIエージェントでSEO対策されたHPを作成する方法'
    ],
    duration: '3時間16分27秒'
  },
  {
    course: 'AIエージェント',
    id: 'B-3',
    title: 'アプリ開発',
    items: [
      'AIエージェントを使ったアプリ開発の基礎的な流れ',
      'AIエージェントを使ったた簡単なアプリの作成',
      'AIエージェントを使ったブログ自動化アプリの作成'
    ],
    duration: '1時間37分18秒'
  }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-left md:text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            この講座でAIの全てが学べます。<br />
            それにより貴社のビジネスが大きく変わります。
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            1講座平均30分 × 全20講座。<br />
            最短10〜20日で修了できる効率的な構成です。
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* 上段: A-1, A-2 */}
          <div className="grid md:grid-cols-2 gap-8">
            {programs.slice(0, 2).map((program, index) => (
              <div
                key={program.id}
                className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-blue-100"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {program.id}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {program.title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {program.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 group/item">
                      <span className="text-blue-600 font-bold flex-shrink-0 text-lg group-hover/item:scale-125 transition-transform duration-200">・</span>
                      <span className="text-gray-700 text-sm md:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {program.duration && (
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm pt-4 border-t-2 border-blue-200">
                    <Clock size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span>{program.duration}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 中段: B-1 (全幅) */}
          {programs.slice(2, 3).map((program) => (
            <div
              key={program.id}
              className="group bg-gradient-to-r from-purple-50 via-white to-indigo-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-purple-100"
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {program.id}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    {program.title}
                  </h3>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {program.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 group/item">
                    <span className="text-purple-600 font-bold flex-shrink-0 text-lg group-hover/item:scale-125 transition-transform duration-200">・</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {program.duration && (
                <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm pt-4 border-t-2 border-purple-200">
                  <Clock size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>{program.duration}</span>
                </div>
              )}
            </div>
          ))}

          {/* 下段: B-2, B-3 */}
          <div className="grid md:grid-cols-2 gap-8">
            {programs.slice(3, 5).map((program, index) => (
              <div
                key={program.id}
                className="group bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-green-100"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {program.id}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {program.title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {program.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 group/item">
                      <span className="text-green-600 font-bold flex-shrink-0 text-lg group-hover/item:scale-125 transition-transform duration-200">・</span>
                      <span className="text-gray-700 text-sm md:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {program.duration && (
                  <div className="flex items-center gap-2 text-green-600 font-semibold text-sm pt-4 border-t-2 border-green-200">
                    <Clock size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span>{program.duration}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 注記 */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm">※全10時間13分／2025年11月現在</p>
          </div>
        </div>
      </div>
    </section>
  );
}
