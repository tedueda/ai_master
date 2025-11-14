import { DollarSign, FileText, CheckCircle, Clock } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: '事前相談',
    description: '助成金制度の説明と申請要件の確認を行います',
    time: '1週間前'
  },
  {
    icon: CheckCircle,
    title: '計画書作成',
    description: '訓練計画書の作成をサポートいたします',
    time: '申請準備'
  },
  {
    icon: DollarSign,
    title: '申請手続き',
    description: '労働局への申請手続きをご支援します',
    time: '1ヶ月前'
  },
  {
    icon: Clock,
    title: '訓練実施',
    description: '承認後、計画に基づき訓練を実施します',
    time: '実施期間'
  }
];

export default function Subsidy() {
  return (
    <section id="subsidy" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            助成金活用で受講料が戻ってきます
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            人材開発支援助成金
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            労働時間内に受講した場合、受講料の75%が助成されます
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">受講料と助成金</h3>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl mb-6">
              <div className="text-center mb-4">
                <div className="text-sm text-gray-600 mb-2">受講料（税込）</div>
                <div className="text-5xl font-bold text-gray-900 mb-4">220,000円</div>
              </div>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <div className="text-green-600 font-semibold">助成金適用後</div>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">実質負担額</div>
                <div className="text-5xl font-bold text-green-600">55,000円</div>
                <div className="text-sm text-gray-500 mt-2">（165,000円が助成されます）</div>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-semibold text-gray-900">経費助成 75%</div>
                  <div className="text-gray-600 text-sm">eラーニング形式で165,000円助成</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-semibold text-gray-900">追加助成あり</div>
                  <div className="text-gray-600 text-sm">同時双方向学習で1時間1,000円追加助成</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-semibold text-gray-900">個別授業対応</div>
                  <div className="text-gray-600 text-sm">差額55,000円で個別指導を受けられます</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">学習方法</h3>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4">eラーニングと個別授業の2本立て</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span>約20日間で完了する学習プログラム</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span>20項目のカリキュラムをeラーニング形式で学習</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span>分からない点は電話やZoomで個別授業</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span>お好きな時間帯に質問可能</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">対象助成金</h4>
                <p className="text-gray-700 mb-3">
                  この講座は「人材開発支援助成金」の対象です。
                  労働時間内に視聴した場合、受講料の75%が助成されます。
                </p>
                <div className="bg-white/70 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>追加助成：</strong>定められた時間内に同時双方向学習を行う場合、
                    別途1時間あたり1,000円の助成が受けられます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">申請の流れ</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={28} className="text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-600 to-green-600"></div>
                    )}
                  </div>
                  <div className="text-sm text-blue-600 font-medium mb-2">{step.time}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
