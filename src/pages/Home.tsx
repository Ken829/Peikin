import { Award, Heart, Users, GraduationCap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SEO from '../components/SEO';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t.home.features.experience,
      description: t.home.features.experienceDesc,
    },
    {
      icon: Heart,
      title: t.home.features.safe,
      description: t.home.features.safeDesc,
    },
    {
      icon: Users,
      title: t.home.features.individualized,
      description: t.home.features.individualizedDesc,
    },
    {
      icon: GraduationCap,
      title: t.home.features.expert,
      description: t.home.features.expertDesc,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO page="home" />
      <section className="relative bg-gradient-to-br from-stone-100 via-amber-50 to-stone-50 py-20 px-4 sm:px-6 lg:px-8 mountain-pattern ink-wash">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="mb-8">
                <div className="inline-block bg-gradient-to-r from-stone-800 to-amber-900 px-6 py-2 rounded-full mb-4">
                  <span className="text-amber-100 text-sm font-medium tracking-wider">传统中医 • Traditional Chinese Medicine</span>
                </div>
              </div>
              {language === 'zh' ? (
                <>
                  <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 text-shadow">
                    {t.home.hero.title}
                  </h1>
                  <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 bg-clip-text text-transparent mb-6">
                    {t.home.hero.chineseTitle}
                  </h2>
                </>
              ) : (
                <>
                  <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 text-shadow">
                    {t.home.hero.title}
                  </h1>
                  <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 bg-clip-text text-transparent mb-6">
                    {t.home.hero.chineseTitle}
                  </h2>
                </>
              )}
              <p className="text-xl text-stone-800 font-semibold mb-6">
                {t.home.hero.subtitle}
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed max-w-xl">
                {t.home.hero.description}
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-amber-800 to-orange-800 text-white px-10 py-4 rounded-full font-semibold hover:from-amber-900 hover:to-orange-900 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t.home.hero.cta}
              </button>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden h-96 border-4 border-amber-800/30">
                <img
                  src="/zhongyibingfang.jpg"
                  alt="Pei Kin Ginseng Hall - Traditional Chinese Medicine clinic interior in Kluang, Johor"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900/75 via-amber-900/70 to-orange-900/75 flex items-center justify-center">
                  <div className="text-center text-white p-8 relative">
                    <div className="absolute inset-0 bg-black/20 blur-xl"></div>
                    <div className="relative z-10">
                      <h3 className="text-3xl md:text-4xl font-bold mb-3 text-shadow-dark">Pei Kin Ginseng Hall</h3>
                      <h4 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-dark bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">北京中医诊所</h4>
                      <p className="text-lg md:text-xl opacity-95 text-amber-100">Kedai Ubat Dan Tabib Traditional</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-amber-800">
                  <circle cx="30" cy="50" r="8"/>
                  <circle cx="50" cy="30" r="10"/>
                  <circle cx="70" cy="50" r="8"/>
                  <circle cx="50" cy="70" r="8"/>
                  <circle cx="50" cy="50" r="6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 to-amber-50/50 plum-blossom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-800"></div>
                <span className="text-amber-800 text-sm tracking-widest">WHY CHOOSE US</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-800"></div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-center text-stone-900 mb-3">
              {t.home.features.title}
            </h2>
            <p className="text-stone-600 text-center max-w-2xl mx-auto mb-12">传统中医 • 规范诊疗 • 以人为本</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-stone-200 hover:border-amber-600 hover:shadow-2xl transition-all hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-bl-full opacity-30"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-700 to-orange-800 text-white rounded-full mb-4 shadow-lg">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-stone-50 to-amber-50/30">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,119,87,0.08),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(180,83,9,0.06),transparent_50%)]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-stone-200 p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
                <circle cx="50" cy="50" r="100" fill="#d97757" opacity="0.1"/>
                <circle cx="350" cy="350" r="120" fill="#b45309" opacity="0.08"/>
                <path d="M0,200 Q100,150 200,200 T400,200" stroke="#92400e" strokeWidth="1" fill="none" opacity="0.1"/>
              </svg>
            </div>

            <div className="relative z-10 text-center">
              <div className="mb-8">
                <div className="inline-block mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-600 to-amber-800"></div>
                    <span className="text-amber-900 text-sm font-semibold tracking-widest">预约咨询 • BOOK APPOINTMENT</span>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent via-amber-600 to-amber-800"></div>
                  </div>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900">{t.home.cta.title}</h2>
              <p className="text-xl mb-10 text-stone-700 max-w-2xl mx-auto leading-relaxed">{t.home.cta.subtitle}</p>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-700 to-orange-700 text-white px-12 py-4 rounded-full font-semibold hover:from-amber-800 hover:to-orange-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                {t.home.cta.button}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="mt-12 pt-8 border-t border-stone-300">
                <p className="text-stone-600 text-sm">
                  {t.home.cta.hours}
                </p>
                <p className="text-stone-500 text-sm mt-2 italic">
                  午休 Lunch Break: 1:00pm - 2:00pm
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-40 h-40 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="30" cy="50" r="8" fill="#d97757"/>
                <circle cx="50" cy="30" r="10" fill="#d97757"/>
                <circle cx="70" cy="50" r="8" fill="#d97757"/>
                <circle cx="50" cy="70" r="8" fill="#d97757"/>
                <circle cx="50" cy="50" r="6" fill="#d97757"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
