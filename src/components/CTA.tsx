import { Mail, Phone, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function CTA() {
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!agreed) {
      e.preventDefault();
      alert('プライバシーポリシーに同意してください。');
      return;
    }
    
    setIsSubmitting(true);
    // Netlify Formsが自動的に処理するため、フォーム送信を続行
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-left md:text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
            今すぐ学びを始めましょう
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl md:mx-auto">
            まずはお気軽にお問い合わせください。<br />
            授業内容や助成金のご相談は<br />
            電話・Zoom・メールにて随時承っております。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-green-50">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">お問い合わせ方法</h3>
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
                  <div className="text-lg font-bold text-gray-900 mb-3">こんな方におすすめ</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• AIのトレンドに乗っておきたい</li>
                    <li>• 自社にAIを導入して何ができるか確かめたい</li>
                    <li>• 社内のDX化を図りたい</li>
                    <li>• 自社でホームページの修正・変更に対応したい</li>
                    <li>• SEO対策を施して問い合わせを増やしたい</li>
                    <li>• 新規事業を検討している</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-12 bg-white">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">お問い合わせフォーム</h3>
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/thanks"
                  className="space-y-4" 
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div style={{ display: 'none' }}>
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
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
                      name="email"
                      required
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
                      name="phone"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="090-1234-5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Zoomで希望
                    </label>
                    <input
                      type="text"
                      name="zoom_date"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="希望日時を入力してください（例：2025年11月25日 14:00）"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      お問い合わせ内容
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="ご質問やご相談内容をご記入ください"
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <input
                      type="checkbox"
                      id="privacy-agree"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="privacy-agree" className="text-sm text-gray-700">
                      <a 
                        href="/privacy-policy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        プライバシーポリシー
                      </a>
                      に同意します <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!agreed || isSubmitting}
                    className={`w-full px-6 py-4 rounded-lg transition-all flex items-center justify-center space-x-2 font-semibold text-lg ${
                      !agreed || isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-green-600 hover:shadow-lg'
                    } text-white`}
                  >
                    <span>{isSubmitting ? '送信中...' : '送信する'}</span>
                    {!isSubmitting && <ArrowRight size={20} />}
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
