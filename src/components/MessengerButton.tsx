import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function MessengerButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const messengerUrl = 'https://m.me/515627901887226';

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-lg shadow-2xl p-4 w-80 animate-fade-in">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {language === 'zh' ? '培勤参茸行' : 'Pei Kin Ginseng Hall'}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {language === 'zh' ? '通常会在几分钟内回复' : 'Typically replies within minutes'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              {language === 'zh'
                ? '您好！有什么可以帮助您的吗？点击下方按钮在 Messenger 上与我们聊天。'
                : 'Hello! How can we help you? Click the button below to chat with us on Messenger.'}
            </p>
            <a
              href={messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
            >
              {language === 'zh' ? '在 Messenger 上聊天' : 'Chat on Messenger'}
            </a>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-14 h-14 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Open Messenger chat"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-7 h-7 group-hover:animate-bounce" />
          )}
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
