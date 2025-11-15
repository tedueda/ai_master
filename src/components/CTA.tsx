import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            今すぐ学びを始めましょう
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            STUDIO Q クリエイター総合塾は、人材開発支援助成金の対象となっており、<br />
            助成金を活用することで受講料が75%OFFになります。<br />
            さらに、スキルアップにより人件費の削減も期待できます。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-green-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせ方法</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">電話でのお問い合わせ</div>
                      <div className="text-gray-600">TEL: 06-6978-8122</div>
                      <div className="text-gray-600 text-sm">FAX: 06-6978-8123</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">所在地</div>
                      <div className="text-gray-600 text-sm">〒556-0003</div>
                      <div className="text-gray-600 text-sm">大阪市浪速区恵美須西3-2-4 2階</div>
                      <div className="text-gray-600 text-sm">Studio Q内</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white rounded-xl border-2 border-blue-200">
                  <div className="text-sm text-gray-600 mb-2">こんな方におすすめ</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• AI活用スキルを身につけたい</li>
                    <li>• Web制作を学びたい</li>
                    <li>• 助成金について知りたい</li>
                    <li>• 社員教育を検討している</li>
                  </ul>
                </div>
              </div>

              <div className="p-8 md:p-12 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせフォーム</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="山田 太郎"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="090-1234-5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      お問い合わせ内容
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="ご質問やご相談内容をご記入ください"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2 font-semibold text-lg"
                  >
                    <span>送信する</span>
                    <ArrowRight size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-white/90 text-sm">
            <p>お問い合わせ後、2営業日以内にご連絡いたします</p>
          </div>
        </div>
      </div>
    </section>
  );
}
