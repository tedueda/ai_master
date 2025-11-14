import { Bot, MessageSquare, Lightbulb, Workflow } from 'lucide-react';

const aiSkills = [
  {
    icon: MessageSquare,
    title: 'ChatGPT活用術',
    description: 'プロンプトエンジニアリングの基礎から応用まで、効果的なAI活用法を習得',
    items: ['プロンプト設計', '業務効率化', 'コンテンツ生成']
  },
  {
    icon: Bot,
    title: '生成AI実践',
    description: '画像・動画・音声など、多様な生成AIツールを業務に活用するスキル',
    items: ['画像生成AI', '動画編集AI', '音声合成AI']
  },
  {
    icon: Workflow,
    title: 'AIエージェント',
    description: 'AI エージェントを構築し、業務プロセスを自動化・最適化する手法',
    items: ['自動化設計', 'ワークフロー構築', 'API連携']
  },
  {
    icon: Lightbulb,
    title: 'AI戦略立案',
    description: 'ビジネスにAIを導入するための戦略的思考と実装計画の立て方',
    items: ['ROI分析', '導入計画', '効果測定']
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
            AI活用術マスタープログラム
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ChatGPT、生成AI、AIエージェントを駆使して、<br />
            業務効率を飛躍的に向上させる実践スキルを習得
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {aiSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
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
