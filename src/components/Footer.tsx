import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              STUDIO Q <span className="text-blue-400">クリエイター総合塾</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Chat GPT、AI活用法、WEB制作、SEO対策をマスターして、
              ビジネスの世界を広げましょう。
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-sm">大阪市浪速区恵美須西3-2-4 2階</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-sm">TEL: 06-6978-8122</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-sm">t.ueda@studioq.co.jp</span>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-sm text-gray-400 mb-1">運営会社：グローバルインシュアランス株式会社</div>
              <div className="text-sm text-gray-400 mb-1">TEL 06-6765-0011 FAX 06-6765-0016</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">リンク</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-blue-400 transition-colors">top</a></li>
              <li><a href="/blog" className="hover:text-blue-400 transition-colors">最新情報</a></li>
              <li><a href="/demo-2" className="hover:text-blue-400 transition-colors">デモ動画</a></li>
              <li><a href="https://global-insu.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">運営会社</a></li>
              <li><a href="https://studioq.co.jp" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">スタジオQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">その他</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/tokusho" className="hover:text-blue-400 transition-colors">特定商取引法</a></li>
              <li><a href="/privacy-policy" className="hover:text-blue-400 transition-colors">プライバシーポリシー</a></li>
              <li><a href="/#contact" className="hover:text-blue-400 transition-colors">お問い合わせ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              Copyright © 2024 Global Insurance Co., Ltd. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
