import { Award, Code, Briefcase, GraduationCap } from 'lucide-react';

export default function Instructor() {
  return (
    <section id="instructor" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            経験豊富な講師陣
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            現場経験豊富なプロフェッショナルが直接指導
          </p>
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
                  スタジオQ 代表講師
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  20年以上のWeb制作・デジタルマーケティング経験を持ち、
                  数百社のデジタル化支援を実施。最新のAI技術を駆使した
                  効率的な制作手法を確立し、実践的な指導を行っています。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="text-blue-600" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900">実績</div>
                      <div className="text-sm text-gray-600">500社以上の支援</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="text-green-600" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900">専門分野</div>
                      <div className="text-sm text-gray-600">AI × Web制作</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
              <Award className="text-blue-600 mb-4" size={40} />
              <h4 className="text-xl font-bold text-gray-900 mb-3">豊富な実務経験</h4>
              <p className="text-gray-600 leading-relaxed">
                大手企業から中小企業まで、幅広い業種でのWeb制作・
                マーケティング支援の実績があります。実務で培った
                ノウハウを惜しみなく伝授します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-green-200 hover:shadow-lg transition-all">
              <Code className="text-green-600 mb-4" size={40} />
              <h4 className="text-xl font-bold text-gray-900 mb-3">最新技術への精通</h4>
              <p className="text-gray-600 leading-relaxed">
                ChatGPT、生成AI、AIエージェントなど最新のAI技術を
                いち早く導入し、効率的な制作フローを確立。
                常に最新の情報を提供します。
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 p-8 rounded-xl text-white text-center">
            <h4 className="text-2xl font-bold mb-3">個別サポート体制</h4>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              受講生一人ひとりのレベルや目標に合わせた
              きめ細かい指導を行います。疑問点はいつでも質問できる
              サポート環境を整えています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
