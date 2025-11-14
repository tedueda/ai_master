import { Brain, Code, TrendingUp, Users, Zap, Award } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI活用スキル',
    description: 'ChatGPT、生成AI、AIエージェントを業務に活用できる実践スキルを習得',
    color: 'blue'
  },
  {
    icon: Code,
    title: 'Web制作技術',
    description: 'SEO対応のWebサイト制作からAIライブコーディングまで幅広く対応',
    color: 'green'
  },
  {
    icon: TrendingUp,
    title: 'SEO対策',
    description: '検索エンジン最適化の最新手法を学び、集客力を高める',
    color: 'blue'
  },
  {
    icon: Users,
    title: '実務重視',
    description: '現場で即戦力となる実践的なカリキュラムとサポート体制',
    color: 'green'
  },
  {
    icon: Zap,
    title: '最新技術',
    description: '常に更新される最新のAI技術とツールに対応した学習環境',
    color: 'blue'
  },
  {
    icon: Award,
    title: '助成金対応',
    description: '人材開発支援助成金の申請をサポート、費用負担を軽減',
    color: 'green'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            このスキルを習得する事で<br />企業が得られるメリット
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8 mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-1">生産性の向上</div>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-1">収益の大幅な改善</div>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI時代に対応した総合的なスキルを、実践的なカリキュラムで習得できます
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClass = feature.color === 'blue'
              ? 'bg-blue-100 text-blue-600'
              : 'bg-green-100 text-green-600';
            const borderClass = feature.color === 'blue'
              ? 'border-blue-200 hover:border-blue-300'
              : 'border-green-200 hover:border-green-300';

            return (
              <div
                key={index}
                className={`group p-8 border-2 ${borderClass} rounded-2xl hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-14 h-14 ${colorClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
