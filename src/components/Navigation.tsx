import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="text-lg md:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              STUDIO Q <span className="text-blue-600 block sm:inline">クリエイター総合塾</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="/#features" className="text-gray-700 hover:text-blue-600 transition-colors">特徴</a>
            <a href="/#ai-training" className="text-gray-700 hover:text-blue-600 transition-colors">AI活用術</a>
            <a href="/#curriculum" className="text-gray-700 hover:text-blue-600 transition-colors">カリキュラム</a>
            <a href="/demo" className="text-gray-700 hover:text-blue-600 transition-colors">デモ動画</a>
            <a href="/#subsidy" className="text-gray-700 hover:text-blue-600 transition-colors">助成金</a>
            <a href="/#instructor" className="text-gray-700 hover:text-blue-600 transition-colors">講師紹介</a>
            <a href="/#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              お問い合わせ
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <a href="/#features" className="block py-2 text-gray-700 hover:text-blue-600">特徴</a>
            <a href="/#ai-training" className="block py-2 text-gray-700 hover:text-blue-600">AI活用術</a>
            <a href="/#curriculum" className="block py-2 text-gray-700 hover:text-blue-600">カリキュラム</a>
            <a href="/demo" className="block py-2 text-gray-700 hover:text-blue-600">デモ動画</a>
            <a href="/#subsidy" className="block py-2 text-gray-700 hover:text-blue-600">助成金</a>
            <a href="/#instructor" className="block py-2 text-gray-700 hover:text-blue-600">講師紹介</a>
            <a href="/#contact" className="block bg-blue-600 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-700">
              お問い合わせ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
