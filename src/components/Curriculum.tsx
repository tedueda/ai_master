import { Check } from 'lucide-react';

const curriculumItems = [
  { category: 'AI基礎', items: ['ChatGPT活用術', 'プロンプトエンジニアリング', 'AI業務効率化'] },
  { category: '生成AI', items: ['画像生成AI（Midjourney/DALL-E）', '動画生成AI', '音声合成AI'] },
  { category: 'AIエージェント', items: ['自動化ワークフロー', 'API連携', 'カスタムGPT構築'] },
  { category: 'Web制作', items: ['HTML/CSS基礎', 'レスポンシブデザイン', 'JavaScript入門'] },
  { category: 'SEO対策', items: ['キーワード戦略', 'コンテンツSEO', 'テクニカルSEO'] },
  { category: 'AIコーディング', items: ['GitHub Copilot', 'Claude Code活用', 'AI支援開発'] },
  { category: 'デザイン', items: ['Figma基礎', 'UIデザイン原則', 'カラー理論'] },
  { category: '実践演習', items: ['Webサイト制作', 'AI活用プロジェクト', 'ポートフォリオ作成'] }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            充実のカリキュラム
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            基礎から実践まで、体系的に学べる20以上のプログラム
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {curriculumItems.map((curriculum, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {curriculum.category}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
              </div>
              <ul className="space-y-3">
                {curriculum.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 p-8 md:p-12 rounded-2xl text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">学習の流れ</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-5xl font-bold mb-2">01</div>
                <h4 className="text-xl font-semibold mb-2">基礎学習</h4>
                <p className="text-sm text-white/90">動画教材とテキストで基礎を習得</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-5xl font-bold mb-2">02</div>
                <h4 className="text-xl font-semibold mb-2">実践演習</h4>
                <p className="text-sm text-white/90">課題に取り組み実践スキルを磨く</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-5xl font-bold mb-2">03</div>
                <h4 className="text-xl font-semibold mb-2">成果発表</h4>
                <p className="text-sm text-white/90">ポートフォリオを作成し卒業</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
