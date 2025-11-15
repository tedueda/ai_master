import { Award, Code, GraduationCap } from 'lucide-react';

export default function Instructor() {
  return (
    <section id="instructor" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            講師紹介と講座について
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl mx-auto flex items-center justify-center">
                  <GraduationCap size={96} className="text-white" />
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  スタジオQクリエイター総合塾講師 上田孝久
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  大阪府出身。高校卒業後、アメリカ・カリフォルニア州のPacific Union Collegeにて経営管理の学士号を取得し卒業。
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  1995年より株式会社船井総合研究所に５年間在籍し、親戚である船井幸雄の元で５年間あらゆるビジネスを学ぶ。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl border-2 border-blue-200 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">講座について</h4>
            <ul className="space-y-4 text-gray-700 max-w-3xl mx-auto">
              <li className="flex items-start space-x-3">
                <Award className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <span>この講座は約1ヶ月で学んで頂けます。</span>
              </li>
              <li className="flex items-start space-x-3">
                <Code className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <span>約20項目（約15時間）のカリキュラムをeラーニング形式と同時双方向で習得できる内容になっております。</span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <span>「人材開発支援助成金」の対象になっており、労働時間内に視聴した場合、受講料の約75％が助成されます。</span>
              </li>
              <li className="flex items-start space-x-3">
                <Code className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <span>Zoomでの同時双方向学習を行なった場合、１時間あたり1000円の賃金助成も受けられます。（※労働時間内で受講できるスケジュールを提出する必要があります）</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
