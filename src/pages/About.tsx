import { Shield, FileText, Heart, RefreshCw } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SEO from '../components/SEO';

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Shield,
      title: t.about.highlights.safety,
      description: t.about.highlights.safetyDesc,
    },
    {
      icon: FileText,
      title: t.about.highlights.transparency,
      description: t.about.highlights.transparencyDesc,
    },
    {
      icon: Heart,
      title: t.about.highlights.personalized,
      description: t.about.highlights.personalizedDesc,
    },
    {
      icon: RefreshCw,
      title: t.about.highlights.followup,
      description: t.about.highlights.followupDesc,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 plum-blossom">
      <SEO page="about" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-800"></div>
              <span className="text-amber-800 text-sm tracking-widest">ABOUT US</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-800"></div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-stone-900 mb-4 text-shadow">
            {t.about.title}
          </h1>
          <p className="text-stone-600 text-lg">关于我们 • 传承中医智慧</p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 border-4 border-stone-300/50">
              <img
                src="/bamai.webp"
                alt="Traditional Chinese Medicine diagnosis and consultation at Pei Kin Ginseng Hall"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 border-4 border-stone-300/50">
              <img
                src="/Herbs.jpg"
                alt="Traditional Chinese medicinal herbs and natural remedies at Pei Kin Ginseng Hall"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 border-4 border-stone-300/50">
              <img
                src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Traditional Chinese herbal medicine preparation and dispensing"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-10 border-t-4 border-amber-700 hover:shadow-3xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-bl-full opacity-20"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-amber-900 mb-4">{t.about.history}</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{t.about.historyText}</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-10 border-t-4 border-orange-700 hover:shadow-3xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-amber-100 rounded-bl-full opacity-20"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-orange-900 mb-4">{t.about.mission}</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{t.about.missionText}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50/80 via-orange-50/60 to-amber-50/80 rounded-2xl shadow-xl p-8 lg:p-12 mb-16 border border-amber-200/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)'}}></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-center text-stone-800">{t.about.proprietor}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border-3 border-amber-300/60">
                  <img
                    src="/physician photo.jpeg"
                    alt="Dr. Tsng Fan Kian - Licensed Traditional Chinese Medicine practitioner at Pei Kin Ginseng Hall"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="md:col-span-2 space-y-5">
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-stone-900">{t.about.proprietorName}</h3>
                  <p className="text-3xl font-bold mb-3 text-amber-700">{t.about.proprietorChinese}</p>
                  <p className="text-base font-medium text-stone-700">{t.about.proprietorTitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white/60 rounded-xl p-4 border border-amber-200/50">
                    <h4 className="text-sm font-bold text-amber-700 mb-2">{t.about.credentials.education}</h4>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      <li>• {t.about.credentials.bachelor}</li>
                      <li>• {t.about.credentials.brainHeart}</li>
                      <li>• {t.about.credentials.neural}</li>
                    </ul>
                  </div>

                  <div className="bg-white/60 rounded-xl p-4 border border-amber-200/50">
                    <h4 className="text-sm font-bold text-amber-700 mb-2">{t.about.credentials.membership}</h4>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      <li>• {t.about.credentials.spinal}</li>
                      <li>• {t.about.credentials.orthopedic}</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/60 rounded-xl p-4 border border-amber-200/50">
                  <h4 className="text-sm font-bold text-amber-700 mb-2">{t.about.credentials.expertise}</h4>
                  <p className="text-xs text-stone-700 leading-relaxed">{t.about.credentials.expertiseText}</p>
                </div>

                <div className="bg-white/60 rounded-xl p-4 border border-amber-200/50">
                  <h4 className="text-sm font-bold text-amber-700 mb-2">{t.about.credentials.internship}</h4>
                  <p className="text-xs text-stone-700">{t.about.credentials.internshipText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-800"></div>
                <span className="text-amber-800 text-sm tracking-widest">OUR VALUES</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-800"></div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-3">
              {t.about.highlights.title}
            </h2>
            <p className="text-stone-600">{t.about.highlights.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-2 border-stone-200 hover:border-amber-600 hover:shadow-2xl transition-all hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-bl-full opacity-30"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-700 to-orange-800 text-white rounded-xl mb-4 shadow-lg">
                    <highlight.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
