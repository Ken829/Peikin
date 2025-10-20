import { Facebook, Phone, MapPin, Mail } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <circle cx="150" cy="450" r="180" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.3"/>
          <circle cx="150" cy="450" r="140" fill="none" stroke="#f59e0b" strokeWidth="0.5" opacity="0.4"/>

          <circle cx="1000" cy="150" r="200" fill="none" stroke="#92400e" strokeWidth="1.5" opacity="0.3"/>
          <circle cx="1000" cy="150" r="160" fill="none" stroke="#b45309" strokeWidth="0.8" opacity="0.4"/>
          <circle cx="1000" cy="150" r="120" fill="none" stroke="#d97706" strokeWidth="0.5" opacity="0.3"/>

          <path d="M 100,500 Q 200,480 300,490 T 500,485 T 700,480 T 900,490"
                stroke="#78350f" strokeWidth="2" fill="none" opacity="0.4"/>
          <path d="M 150,520 Q 250,500 350,510 T 550,505 T 750,500"
                stroke="#92400e" strokeWidth="1.5" fill="none" opacity="0.3"/>

          <circle cx="600" cy="200" r="120" fill="none" stroke="#f59e0b" strokeWidth="0.8" opacity="0.25"/>
          <circle cx="600" cy="200" r="90" fill="none" stroke="#d97706" strokeWidth="0.5" opacity="0.3"/>

          <path d="M 200,300 Q 300,280 400,300 Q 500,320 600,300"
                stroke="#b45309" strokeWidth="1" fill="none" opacity="0.3"/>

          <circle cx="350" cy="100" r="80" fill="none" stroke="#92400e" strokeWidth="0.8" opacity="0.3"/>
          <circle cx="350" cy="100" r="60" fill="none" stroke="#d97706" strokeWidth="0.5" opacity="0.25"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/peikin_logo_refined_letters_smooth.png"
                alt="Pei Kin Logo"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold text-amber-200">
                  {language === 'zh' ? '北京中医诊所' : 'Pei Kin Ginseng Hall'}
                </h3>
                <p className="text-sm text-amber-400/80">
                  {language === 'zh' ? 'Pei Kin Ginseng Hall' : '北京中医诊所'}
                </p>
              </div>
            </div>
            <p className="text-base mb-4 text-stone-300 leading-relaxed max-w-md">
              {t.home.hero.subtitle}
            </p>
            <p className="text-sm text-stone-400 leading-relaxed">
              {t.footer.registration}
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xl font-bold text-amber-200 mb-6 flex items-center">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500 mr-3"></div>
              {t.contact.address}
            </h4>
            <div className="space-y-4">
              <a
                href="https://maps.app.goo.gl/Fv6UjvibdDqaJLNo7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center group-hover:bg-amber-800/60 transition-colors">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
                <p className="text-sm text-stone-300 group-hover:text-amber-300 leading-relaxed transition-colors">{t.footer.address}</p>
              </a>
              <div className="flex items-center space-x-4 group">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center group-hover:bg-amber-800/60 transition-colors">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
                <a href="tel:+60177720153" className="text-sm text-stone-300 hover:text-amber-300 transition-colors">
                  +60 7-772 0153
                </a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center group-hover:bg-amber-800/60 transition-colors">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
                <a href="mailto:peikinginseng@gmail.com" className="text-sm text-stone-300 hover:text-amber-300 transition-colors break-all">
                  peikinginseng@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xl font-bold text-amber-200 mb-6 flex items-center">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500 mr-3"></div>
              Follow Us
            </h4>
            <a
              href="https://www.facebook.com/p/Pei-Kin-Ginseng-Hall-100069332588517/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-5 py-3 rounded-full bg-amber-900/40 hover:bg-amber-800/60 text-stone-300 hover:text-amber-200 transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Facebook className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">Facebook</span>
            </a>
          </div>
        </div>

        <div className="border-t border-stone-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-stone-400 text-center md:text-left">
              {t.footer.copyright}
            </p>
            <div className="flex items-center space-x-2 text-stone-400 text-xs">
              <span>传统中医</span>
              <span className="text-amber-600">•</span>
              <span>Traditional Chinese Medicine</span>
              <span className="text-amber-600">•</span>
              <span>Kedai Ubat Traditional</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="30" cy="50" r="8" fill="#f59e0b"/>
          <circle cx="50" cy="30" r="10" fill="#f59e0b"/>
          <circle cx="70" cy="50" r="8" fill="#f59e0b"/>
          <circle cx="50" cy="70" r="8" fill="#f59e0b"/>
          <circle cx="50" cy="50" r="6" fill="#f59e0b"/>
        </svg>
      </div>
    </footer>
  );
}
