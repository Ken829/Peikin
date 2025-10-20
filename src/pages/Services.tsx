import { Hand, Droplet, CircleDot, Wind, Leaf, Bone } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SEO from '../components/SEO';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Hand,
      name: t.services.tuina.name,
      description: t.services.tuina.desc,
    },
    {
      icon: Droplet,
      name: t.services.acupuncture.name,
      description: t.services.acupuncture.desc,
    },
    {
      icon: CircleDot,
      name: t.services.cupping.name,
      description: t.services.cupping.desc,
    },
    {
      icon: Wind,
      name: t.services.guasha.name,
      description: t.services.guasha.desc,
    },
    {
      icon: Leaf,
      name: t.services.herbal.name,
      description: t.services.herbal.desc,
    },
    {
      icon: Bone,
      name: t.services.spinal.name,
      description: t.services.spinal.desc,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100">
      <SEO page="services" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 border-4 border-stone-300/50 hover:scale-105 transition-transform">
            <img
              src="/guasa.jpg"
              alt="Gua Sha traditional Chinese medicine scraping therapy treatment"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent flex items-end p-6">
              <span className="text-white text-xl font-bold">刮痧 • Gua Sha</span>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 border-4 border-stone-300/50 hover:scale-105 transition-transform">
            <img
              src="/tuina.jpg"
              alt="Tuina massage - traditional Chinese therapeutic massage technique"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent flex items-end p-6">
              <span className="text-white text-xl font-bold">推拿 • Tuina</span>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 border-4 border-stone-300/50 hover:scale-105 transition-transform">
            <img
              src="/zhenjiu.webp"
              alt="Acupuncture needles - traditional Chinese medicine treatment at Pei Kin Ginseng Hall"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent flex items-end p-6">
              <span className="text-white text-xl font-bold">针灸 • Acupuncture</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-800"></div>
              <span className="text-amber-800 text-sm tracking-widest">OUR SERVICES</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-800"></div>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-3 text-stone-900 text-shadow">{t.services.title}</h1>
          <p className="text-2xl text-amber-900">{t.services.subtitle}</p>
          <p className="text-stone-600 mt-2">{t.services.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-2 border-stone-200 hover:border-amber-600 hover:shadow-2xl transition-all hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-bl-full opacity-20"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-700 to-orange-800 text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4">{service.name}</h3>
                <p className="text-stone-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-2xl shadow-2xl border-4 border-amber-200/40">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100"></div>
          <div className="absolute inset-0 mountain-pattern opacity-5"></div>
          <div className="relative z-10 p-12 text-center">
            <div className="mb-6">
              <div className="inline-block px-6 py-2 bg-amber-100/80 rounded-full border border-amber-300/50">
                <span className="text-amber-800 text-sm tracking-wider">立即预约 • BOOK NOW</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-stone-800">
              {t.home.cta.title}
            </h2>
            <p className="text-lg mb-6 text-stone-700">
              Professional care tailored to your needs
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gradient-to-r from-amber-700 to-orange-700 text-white px-10 py-4 rounded-full font-semibold hover:from-amber-800 hover:to-orange-800 transition-all shadow-xl hover:scale-105"
            >
              {t.home.hero.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
