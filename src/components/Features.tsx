import { Brain, Code, TrendingUp, Users, Zap, Award, Play } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Brain,
    title: 'AI活用スキル',
    description: 'Chat GPTをはじめとする生成AIをビジネスに利用するための実務的技術が身につきます。',
    color: 'blue'
  },
  {
    icon: Code,
    title: 'Web制作技術',
    description: 'SEO対策が施されたWEBサイトを専門的なプログラム知識なく、AIで制作できるようになります。',
    color: 'green'
  },
  {
    icon: TrendingUp,
    title: 'SEO対策',
    description: 'SEOの基本的な仕組みを学び、AIを使ってホームページやブログ記事を作成する手法を身につけます。',
    color: 'blue'
  },
  {
    icon: Users,
    title: '実務重視',
    description: '実演を行いながらビジネスの現場で利用できる内容に特化した授業内容となっています。',
    color: 'green'
  },
  {
    icon: Zap,
    title: '最新技術',
    description: '更新頻度が早いAIツールの最新情報を反映させるため、定期的にアップデートを行なっています。',
    color: 'blue'
  },
  {
    icon: Award,
    title: '助成金対応',
    description: '人材開発支援助成金（リスキリングコース）の対象講座です。申請から受給までの手続きもサポートいたします。',
    color: 'green'
  }
];

export default function Features() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    const modalVideo = document.getElementById('modal-video') as HTMLVideoElement;
    if (modalVideo) {
      modalVideo.pause();
    }
  };

  return (
    <section id="features" className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* デモ動画セクション */}
        <div className="mb-12 md:mb-16 flex justify-center">
          <a href="/demo-2" className="block group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300" style={{ width: '760px', height: '300px' }}>
              <img 
                src="/images/demo04.png" 
                alt="デモ動画" 
                width="760"
                height="300"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-white text-center group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  <div className="text-2xl md:text-3xl font-bold mb-2">デモ動画を見る</div>
                  <div className="text-sm md:text-base">AIの実践的な活用方法をご紹介</div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* タイトル */}
        <div className="text-left md:text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            法人向けAI研修・生成AI研修
          </h2>
        </div>

        {/* AIなくしては企業の発展は見込めません */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          {/* 左カラム：テキスト */}
          <div className="text-left bg-gradient-to-br from-blue-50 to-white p-4 md:p-8 rounded-2xl shadow-lg">
            <div className="mb-4 md:mb-6">
              <p className="text-lg md:text-2xl text-gray-800 leading-relaxed font-medium">
                AIを仕事でどう使おうか——<br />
                <span className="text-gray-600">多くの人が最初にここで迷います。</span>
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-md mb-4 md:mb-6 border-l-4 border-blue-600">
              <p className="text-base md:text-xl text-gray-700 leading-relaxed">
                しかし、AI活用の第一歩は<br />
                <span className="font-bold text-blue-600 text-lg md:text-2xl">「何に使うか」ではなく<br />「AIで何ができるのか」</span><br />
                を知ることです。
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-md mb-4 md:mb-6">
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-2xl">✓</span>
                  <span className="pt-1">ChatGPTが得意なこと</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-2xl">✓</span>
                  <span className="pt-1">生成AIが生み出す成果</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-2xl">✓</span>
                  <span className="pt-1">AIエージェントが自動化できる範囲</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-2xl">✓</span>
                  <span className="pt-1">Web制作・資料作成・分析・提案がどう変わるか</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* 右カラム：動画 */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video 
              id="feature-video"
              className="w-full h-auto pointer-events-none"
              poster="/images/oberlay_school.jpg"
            >
              <source src="/images/AI_master.mp4" type="video/mp4" />
              お使いのブラウザは動画タグをサポートしていません。
            </video>
            
            {/* クリックでポップアップを開く */}
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/30 transition-colors"
              onClick={openModal}
            >
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-all hover:scale-110">
                <Play size={40} className="text-white ml-1" fill="white" />
              </div>
            </div>
          </div>
        </div>

        {/* 1カラムセクション */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed bg-green-50 p-4 md:p-6 rounded-lg text-left">
              これらを理解すれば、<br />
              <span className="font-bold text-green-700 text-lg md:text-xl">皆様の仕事の中で"使い所"が自然と見えてきます。</span>
            </p>
            
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 md:p-8 rounded-xl shadow-lg">
              <p className="text-lg md:text-2xl font-bold leading-relaxed text-left">
                今後の企業の立ち位置が大きく変わってくるのは、AIを使いこなせるかどうかが全てです。
              </p>
            </div>
          </div>
        </div>

        {/* このスキルを習得する事で企業が得られるメリット */}
        <div className="text-left md:text-center mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            この講座を習得する事で<br className="hidden md:inline" />企業が得られるメリット
          </h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mt-6 md:mt-8 mb-6 md:mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg w-full md:w-auto">
              <div className="text-xl md:text-3xl font-bold mb-1 text-center">生産性の向上</div>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg w-full md:w-auto">
              <div className="text-xl md:text-3xl font-bold mb-1 text-center">収益の大幅な改善</div>
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
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      {/* ポップアップモーダル */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-5xl">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div onClick={(e) => e.stopPropagation()}>
              <video 
                id="modal-video"
                className="w-full h-auto rounded-lg"
                controls
                autoPlay
              >
                <source src="/images/AI_master.mp4" type="video/mp4" />
                お使いのブラウザは動画タグをサポートしていません。
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
