export default function Instructor() {
  return (
    <section id="instructor" className="pt-12 md:pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
            講師紹介と講座について
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="w-48 h-48 rounded-2xl mx-auto overflow-hidden shadow-lg">
                  <img 
                    src="../images/ueda2.jpg" 
                    alt="上田孝久" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="mb-4">
                  <p className="text-lg font-semibold text-gray-600 mb-2">
                    AIクリエイター／講師／AI活用コンサルタント
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    上田孝久
                  </h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  大阪府出身。高校卒業後、アメリカ・カリフォルニア州のPacific Union Collegeにて経営管理の学士号を取得し卒業。
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  1995年より株式会社船井総合研究所に5年間在籍し、船井幸雄の元であらゆるビジネスを学ぶ。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  現在、StudioQにてAIクリエイターとして、AI合成による映像制作に従事しながら、クリエイター総合塾の講師・講座制作を担当。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
