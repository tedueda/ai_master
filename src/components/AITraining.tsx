import { MessageSquare, Code, TrendingUp } from 'lucide-react';

const aiSkills = [
  {
    icon: MessageSquare,
    title: 'ChatGPT・生成AIの活用法',
    description: 'ChatGPTを使いこなすには、ちょっとした"コツ"があります。専用の講座でそのスキルを身につければ、AIから最適な回答を引き出すことができ、業務の効率化がぐんと進みます。',
    items: ['営業活動サポート', 'プレゼン資料作成', 'チラシデザイン', '社員教育動画制作']
  },
  {
    icon: Code,
    title: 'WEB制作',
    description: '今では、AIエージェントを使えば、誰でも簡単にホームページが作れる時代です。大切なのは、「優れたAIエージェントを選ぶこと」と「適切に使いこなすこと」。',
    items: ['WEB制作の基本', 'AIへの指示出し', '魅力的なサイト制作']
  },
  {
    icon: TrendingUp,
    title: 'SEO対策',
    description: 'AI検索の登場により、これまでのSEO対策は大きく様変わりしました。今や、ブログ記事の作成やキーワード選定、ホームページの最適化まで、AIに任せることで検索順位が劇的に向上します。',
    items: ['ブログ記事作成', 'キーワード選定', 'サイト最適化', 'アクセス数向上']
  }
];

export default function AITraining() {
  return (
    <section id="ai-training" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Core Program
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ビジネスの新しい世界を広げる最適なステップ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            これらのコンテンツを学ぶことで業務効率の改善はさることながら、<br />
            企業の収益を大幅に向上させることができます
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aiSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-green-600 p-8 md:p-12 rounded-2xl shadow-lg text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">ビジネスの新しい世界を広げる最適なステップ</h3>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg leading-relaxed mb-4">
              これらのコンテンツを学ぶことで、業務効率の改善はさることながら、
              企業の収益を大幅に向上させることができます。
            </p>
            <p className="text-lg leading-relaxed mb-4">
              さらにAIの進化は日々加速しており、社会の多様性にも柔軟に
              対応できるため、今すぐに身近な存在にすることが何よりも
              大切な事なのです。
            </p>
            <p className="text-lg leading-relaxed font-semibold">
              これにより、貴社の未来に計り知れない利益と資産を
              もたらすことが期待できます。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">実践型</div>
              <p className="text-white/90">すぐに使える実務スキル</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">最新技術</div>
              <p className="text-white/90">常にアップデートされる教材</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">個別指導</div>
              <p className="text-white/90">マンツーマンサポート</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
