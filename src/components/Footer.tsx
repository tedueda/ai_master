import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Studio Q <span className="text-blue-400">Creator総合塾</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              AI時代のクリエイティブスキルを学ぶ総合スクール。
              ChatGPT、生成AI、Web制作、SEO対策など、
              実践的なスキルを習得できます。
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
              <div className="text-sm font-semibold text-white mb-2">運営会社</div>
              <div className="text-sm text-gray-400 mb-1">グローバルインシュアランス株式会社</div>
              <div className="text-xs text-gray-500">TEL: 06-6765-0011</div>
              <div className="text-xs text-gray-500">FAX: 06-6765-0016</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">コース</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#ai-training" className="hover:text-blue-400 transition-colors">AI活用術</a></li>
              <li><a href="#curriculum" className="hover:text-blue-400 transition-colors">Web制作</a></li>
              <li><a href="#curriculum" className="hover:text-blue-400 transition-colors">SEO対策</a></li>
              <li><a href="#curriculum" className="hover:text-blue-400 transition-colors">AIコーディング</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">サポート</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#subsidy" className="hover:text-blue-400 transition-colors">助成金について</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">お問い合わせ</a></li>
              <li><a href="#instructor" className="hover:text-blue-400 transition-colors">講師紹介</a></li>
              <li><a href="https://all.studioq.co.jp" className="hover:text-blue-400 transition-colors">運営会社</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Studio Q Creator総合塾. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">プライバシーポリシー</a>
              <a href="#" className="hover:text-blue-400 transition-colors">特定商取引法</a>
              <a href="#" className="hover:text-blue-400 transition-colors">利用規約</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
