import { CheckCircle } from 'lucide-react';

export default function Subsidy() {
  return (
    <section id="subsidy" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
            補助金対応AI研修（法人向け）
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
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

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">受講料と助成金</h3>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl mb-6">
              <div className="text-center mb-4">
                <div className="text-sm text-gray-600 mb-2">受講料（税込）</div>
                <div className="text-4xl font-bold text-gray-900 mb-4">220,000円</div>
              </div>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <div className="text-green-600 font-semibold">助成金適用後</div>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">実質負担額</div>
                <div className="text-4xl font-bold text-green-600">55,000円</div>
                <div className="text-sm text-gray-500 mt-2">（165,000円が助成されます）</div>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-semibold text-gray-900">経費助成 75%</div>
                  <div className="text-gray-600 text-sm">受講料22万円（税込）✕ 75% = 165,000円が助成されます。</div>
                </div>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm text-gray-700 mb-2">※助成金は雇用保険に加入している社員が対象です。</p>
              <p className="text-sm text-gray-700">※講座は就業時間中に受講する必要があります。</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-left md:text-center">助成金申請から受領までの流れ</h3>
          <div className="overflow-x-auto">
            <div className="flex gap-4 min-w-max pb-4">
              {[
                { step: '1', title: '書類記入' },
                { step: '2', title: '労働局へ申請' },
                { step: '3', title: '審査約3～5日' },
                { step: '4', title: '受講料前払い' },
                { step: '5', title: '申請１ヶ月後に受講' },
                { step: '6', title: '修了後、助成金申請' },
                { step: '7', title: '助成金受領' }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <span className="text-white text-2xl font-bold">{item.step}</span>
                    </div>
                    <p className="text-center text-sm font-semibold text-gray-900 whitespace-nowrap">
                      {item.title}
                    </p>
                  </div>
                  {index < 6 && (
                    <div className="mx-2 mb-8">
                      <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10 L30 10 L25 5 M30 10 L25 15" stroke="#3B82F6" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
