import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Tokusho() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <span className="text-4xl mr-3">📄</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              特定商取引法に基づく表記
            </h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-12"></div>

          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ 運営事業者名</h2>
              <p className="text-gray-700">グローバルインシュアランス株式会社</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ 運営責任者</h2>
              <p className="text-gray-700">上田 孝久</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ 所在地</h2>
              <p className="text-gray-700">〒545-0003</p>
              <p className="text-gray-700">大阪府大阪市浪速区恵美須西3-2-4 201 スタジオQ内</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ 電話番号</h2>
              <p className="text-gray-700 mb-2">TEL：06-6978-8122</p>
              <p className="text-gray-600 text-sm">※お問い合わせはメールまたはフォームからも可能です。</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ メールアドレス</h2>
              <p className="text-gray-700">t.ueda@studioq.co.jp</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ 販売URL</h2>
              <a href="https://all.studioq.co.jp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                https://all.studioq.co.jp
              </a>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ 販売価格</h2>
              <p className="text-gray-700">220,000円（税込）</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ 受講料以外の必要金額</h2>
              <p className="text-gray-700 mb-1">銀行振込の場合：振込手数料</p>
              <p className="text-gray-700">インターネット接続にかかる通信費（受講者負担）</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ 申込方法</h2>
              <p className="text-gray-700">Webサイト内の申込フォームよりお申し込みください。</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ お支払い方法</h2>
              <p className="text-gray-700 mb-1">銀行振込</p>
              <p className="text-gray-700">クレジットカード決済</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ お支払期限</h2>
              <p className="text-gray-700">請求書受領後１週間以内</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ サービス提供（受講開始）時期</h2>
              <p className="text-gray-700 mb-2">受講料の入金確認後、受講情報（URL、ユーザー名、パスワード）をメールで送付します。</p>
              <p className="text-gray-700">助成金利用の場合は、助成金申請日より１ヶ月後となります。</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ 返品・キャンセルについて</h2>
              <p className="text-gray-700 mb-3">デジタルコンテンツの性質上、受講開始後の返品・返金には対応しておりません。</p>
              <p className="text-gray-700 mb-2">ただし、以下の場合はキャンセル可能です：</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>受講開始前でかつ決済後7日以内 → 全額返金</li>
                <li>助成金不支給が決定した場合 → 個別相談の上、対応いたします。</li>
              </ul>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ 中途解約について</h2>
              <p className="text-gray-700 mb-2">講座途中での解約は可能ですが、返金不可となります。</p>
              <p className="text-gray-700">（助成金利用の場合は中途解約不可）</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ 動作環境</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>PCまたはタブレット</li>
                <li>インターネット環境</li>
                <li>最新のWebブラウザ（Chrome推奨）</li>
                <li>動画視聴が可能な回線速度</li>
              </ul>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ 特記事項</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>講座内容・教材の無断転載・共有は固く禁止しています。</li>
                <li>講座で使用するAIツールには、各サービスの利用規約が適用されます。</li>
                <li>助成金利用は、厚生労働省の審査に基づくため、確約できるものではありません。</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">■ 個人情報の取り扱い</h2>
              <p className="text-gray-700 mb-2">当社のプライバシーポリシーに基づき、適切に管理します。</p>
              <a 
                href="/privacy-policy" 
                className="inline-flex items-center text-blue-600 hover:underline font-semibold"
              >
                → プライバシーポリシーページへ
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all font-semibold"
            >
              <span>トップページに戻る</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
