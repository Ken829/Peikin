import { useState } from 'react';
import { MapPin, Phone, Clock, Facebook } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SEO from '../components/SEO';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Send email directly
      const emailApiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-feedback-email`;

      const response = await fetch(emailApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error('Failed to send email');

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const hours = [
    { day: t.contact.hoursTable.sunday, time: '9:30am - 4:00pm' },
    { day: t.contact.hoursTable.monday, time: '9:30am - 5:00pm' },
    { day: t.contact.hoursTable.tuesday, time: '9:30am - 5:00pm' },
    { day: t.contact.hoursTable.wednesday, time: t.contact.hoursTable.closed },
    { day: t.contact.hoursTable.thursday, time: '9:30am - 5:00pm' },
    { day: t.contact.hoursTable.friday, time: '9:30am - 5:00pm' },
    { day: t.contact.hoursTable.saturday, time: '9:30am - 5:00pm' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 plum-blossom">
      <SEO page="contact" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-800"></div>
              <span className="text-amber-800 text-sm tracking-widest">CONTACT US</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-800"></div>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-stone-900 text-shadow">{t.contact.title}</h1>
          <p className="text-2xl text-amber-900 mb-2">{t.contact.subtitle}</p>
          <p className="text-stone-600">联系我们 • 预约咨询</p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 h-80 border-4 border-stone-300/50">
          <img
            src="/zhongyi.jpg"
            alt="Contact Pei Kin Ginseng Hall - Traditional Chinese Medicine clinic in Kluang, Johor"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-amber-900/75 to-orange-900/70"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-t-4 border-amber-700 hover:shadow-2xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-bl-full opacity-20"></div>
              <div className="flex items-start space-x-4 relative z-10">
                <MapPin className="w-6 h-6 text-amber-800 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t.contact.address}
                  </h3>
                  <p className="text-gray-600">{t.contact.addressText}</p>
                  <a
                    href="https://maps.app.goo.gl/Fv6UjvibdDqaJLNo7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-800 hover:text-amber-900 font-semibold mt-2 inline-block"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-t-4 border-orange-700 hover:shadow-2xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-amber-100 rounded-bl-full opacity-20"></div>
              <div className="flex items-start space-x-4 relative z-10">
                <Phone className="w-6 h-6 text-orange-800 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t.contact.phone}
                  </h3>
                  <a
                    href="tel:+60772053"
                    className="text-gray-600 hover:text-orange-800 text-lg"
                  >
                    +60 7-772 0153
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-t-4 border-amber-700 hover:shadow-2xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-bl-full opacity-20"></div>
              <div className="flex items-start space-x-4 relative z-10">
                <Facebook className="w-6 h-6 text-amber-800 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Facebook</h3>
                  <a
                    href="https://www.facebook.com/p/Pei-Kin-Ginseng-Hall-100069332588517/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-amber-800"
                  >
                    Visit our Facebook Page →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-t-4 border-orange-700 hover:shadow-2xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-amber-100 rounded-bl-full opacity-20"></div>
              <div className="flex items-start space-x-4 relative z-10">
                <Clock className="w-6 h-6 text-orange-800 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t.contact.hours}
                  </h3>
                  <div className="space-y-2">
                    {hours.map((hour, index) => (
                      <div key={index} className="py-2 border-b border-gray-100 last:border-0">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">{hour.day}</span>
                          <span
                            className={`${
                              hour.time === t.contact.hoursTable.closed
                                ? 'text-amber-900 font-semibold'
                                : 'text-gray-600'
                            }`}
                          >
                            {hour.time}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 italic">
                        午休 Lunch Break: 1:00pm - 2:00pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-t-4 border-amber-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-bl-full opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-stone-900 mb-2">
                {t.contact.form.title}
              </h3>
              <p className="text-gray-600 mb-6">{t.contact.form.subtitle}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  />
                </div>

                {status === 'success' && (
                  <div className="bg-green-50 text-green-700 p-4 rounded-lg">
                    {t.contact.form.success}
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                    {t.contact.form.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-amber-700 to-orange-700 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-800 hover:to-orange-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {status === 'loading' ? 'Sending...' : t.contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-4 border-stone-300/50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.2687584923747!2d103.31908!3d2.02578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f0d0d0d0d0d0%3A0x0!2sPei%20Kin%20Ginseng%20Hall!5e0!3m2!1sen!2smy!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pei Kin Ginseng Hall Location"
          />
        </div>
      </div>
    </div>
  );
}
