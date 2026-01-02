import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

export default function Thanks() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12 md:p-16">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-white" size={48} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                送信完了
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-2xl font-semibold text-gray-800">
                お問い合わせありがとうございます
              </p>
              <p className="text-xl text-gray-600">
                2営業日以内にご連絡いたします
              </p>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  お急ぎの場合は、お電話でもお問い合わせいただけます
                </p>
                <p className="text-lg font-semibold text-gray-900 mt-2">
                  TEL: 06-6978-8122
                </p>
              </div>
            </div>

            <div className="mt-12">
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
