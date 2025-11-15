import { Brain, Code, TrendingUp, Users, Zap, Award, Play } from 'lucide-react';
import { useState } from 'react';

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
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    const video = document.getElementById('feature-video') as HTMLVideoElement;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            AIなくしては企業の発展は見込めません
          </h2>
        </div>

        {/* AIなくしては企業の発展は見込めません */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          {/* 左カラム：テキスト */}
          <div className="text-left">
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              AIを仕事でどう使おうか—— 多くの人が最初にここで迷います。
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              しかし、AI活用の第一歩は <span className="font-bold text-blue-600">「何に使うか」ではなく「AIで何ができるのか」</span> を知ることです。
            </p>
            <ul className="space-y-3 mb-6 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>ChatGPTが得意なこと</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>生成AIが生み出す成果</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>AIエージェントが自動化できる範囲</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Web制作・資料作成・分析・提案がどう変わるか</span>
              </li>
            </ul>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              これらを理解すれば、 <span className="font-bold">皆様の仕事の中で"使い所"が自然と見えてきます。</span>
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              AIを総合的にマスターできる講座は他にはございません。
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-semibold">
              今後の企業の立ち位置が大きく変わってくるのは、AIを使いこなせるかどうかが全てです。
            </p>
          </div>
          
          {/* 右カラム：動画 */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video 
              id="feature-video"
              className="w-full h-auto"
              controls
              poster="/images/oberlay_school.jpg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="https://all.studioq.co.jp/wp-content/uploads/2024/12/school.mp4" type="video/mp4" />
              お使いのブラウザは動画タグをサポートしていません。
            </video>
            
            {/* カスタム再生ボタン */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/30 transition-colors"
                onClick={handlePlayClick}
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-all hover:scale-110">
                  <Play size={40} className="text-white ml-1" fill="white" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* このスキルを習得する事で企業が得られるメリット */}
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

        {/* 労働者人口減少への対策は急務 */}
        <div className="mt-20 bg-gradient-to-br from-blue-50 to-green-50 p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            労働者人口減少への対策は急務
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-gray-700 leading-relaxed">
            <p>
              政府の試算によると、日本の就業人口は少子高齢化の影響を受け、2025年から約5年後の2030年にかけて、約200万人の減少が見込まれ、人手不足が深刻化すると予測されています。このため、企業は賃金を引き上げざるを得ず、コストが増加することが予想されています。
            </p>
            <p>
              この状況を打破するためには少人精鋭で社員のスキル向上を図る必要があります。WEB制作やSEO対策に精通し、かつ生成AIを活用できる社員を育成することで、業務効率を大幅に改善し、コスト削減が期待できます。
            </p>
            <p className="text-sm text-gray-600 mt-6">
              参考：「労働力調査年報」総務省<br />
              参考：「日本の将来推計人口」国立社会保障・人口問題研究所
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
