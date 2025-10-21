import { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  page?: 'home' | 'about' | 'services' | 'contact';
}

export default function SEO({ title, description, page = 'home' }: SEOProps) {
  const { language } = useLanguage();

  const seoData = {
    home: {
      en: {
        title: 'Pei Kin Ginseng Hall - Traditional Chinese Medicine in Kluang, Johor',
        description: 'Expert Traditional Chinese Medicine clinic in Kluang since 1999. Licensed TCM practitioners offering acupuncture, herbal remedies, tuina massage, and holistic treatments.',
      },
      zh: {
        title: '北京中医诊所 - 居銮传统中医药 | Pei Kin Ginseng Hall',
        description: '自1999年以来为居銮提供专业中医服务。注册中医师提供针灸、中药、推拿按摩等全面中医治疗。',
      },
      ms: {
        title: 'Pei Kin Ginseng Hall - Perubatan Tradisional Cina di Kluang, Johor',
        description: 'Klinik Perubatan Tradisional Cina pakar di Kluang sejak 1999. Pakar TCM berlesen menawarkan akupunktur, ubat herba, urutan tuina, dan rawatan holistik.',
      },
    },
    about: {
      en: {
        title: 'About Us - Pei Kin Ginseng Hall | Expert TCM Practitioners',
        description: 'Learn about our experienced TCM practitioners and our commitment to traditional Chinese medicine excellence in Kluang since 1999.',
      },
      zh: {
        title: '关于我们 - 北京中医诊所 | 专业中医团队',
        description: '了解我们经验丰富的中医师团队和自1999年以来对传统中医药的专业承诺。',
      },
      ms: {
        title: 'Tentang Kami - Pei Kin Ginseng Hall | Pakar TCM Berpengalaman',
        description: 'Ketahui tentang pakar TCM berpengalaman kami dan komitmen kami terhadap kecemerlangan perubatan tradisional Cina di Kluang sejak 1999.',
      },
    },
    services: {
      en: {
        title: 'TCM Services - Acupuncture, Herbal Medicine, Tuina | Pei Kin Ginseng Hall',
        description: 'Comprehensive Traditional Chinese Medicine services including acupuncture, herbal remedies, tuina massage, cupping, and customized treatment plans.',
      },
      zh: {
        title: '中医服务 - 针灸、中药、推拿 | 北京中医诊所',
        description: '全面的中医服务包括针灸、中草药、推拿按摩、拔罐和个性化治疗方案。',
      },
      ms: {
        title: 'Perkhidmatan TCM - Akupunktur, Ubat Herba, Tuina | Pei Kin Ginseng Hall',
        description: 'Perkhidmatan Perubatan Tradisional Cina komprehensif termasuk akupunktur, ubat herba, urutan tuina, bekam, dan pelan rawatan tersuai.',
      },
    },
    contact: {
      en: {
        title: 'Contact Us - Book Appointment | Pei Kin Ginseng Hall Kluang',
        description: 'Schedule your TCM consultation in Kluang. Open Mon-Sat 9:30am-5pm, Sun 9:30am-4pm. Visit us at 509 Jalan Mersing, Kluang Baru.',
      },
      zh: {
        title: '联系我们 - 预约咨询 | 北京中医诊所居銮',
        description: '预约您的中医咨询。营业时间：周一至周六 9:30am-5pm，周日 9:30am-4pm。地址：509 Jalan Mersing, Kluang Baru。',
      },
      ms: {
        title: 'Hubungi Kami - Tempah Temujanji | Pei Kin Ginseng Hall Kluang',
        description: 'Jadualkan perundingan TCM anda di Kluang. Buka Isnin-Sabtu 9:30am-5pm, Ahad 9:30am-4pm. Lawati kami di 509 Jalan Mersing, Kluang Baru.',
      },
    },
  };

  const currentSEO = seoData[page][language];
  const pageTitle = title || currentSEO.title;
  const pageDescription = description || currentSEO.description;

  useEffect(() => {
    document.title = pageTitle;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', pageDescription);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', pageTitle);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', pageDescription);

    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', window.location.href);

    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', 'summary_large_image');
  }, [pageTitle, pageDescription]);

  useEffect(() => {
    let structuredData = document.getElementById('structured-data');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'structured-data';
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }

    const businessData = {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: language === 'zh' ? '北京中医诊所' : 'Pei Kin Ginseng Hall',
      alternateName: 'Pei Kin Ginseng Hall - 北京中医诊所',
      description: language === 'zh'
        ? '提供专业的传统中医服务，包括针灸、中药、推拿按摩等治疗'
        : language === 'ms'
        ? 'Klinik Perubatan Tradisional Cina profesional menawarkan akupunktur, ubat herba, dan rawatan holistik'
        : 'Professional Traditional Chinese Medicine clinic offering acupuncture, herbal medicine, and holistic treatments',
      url: window.location.origin,
      telephone: '+60-7-771-5018',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '509, Jalan Mersing, Kluang Baru',
        addressLocality: 'Kluang',
        addressRegion: 'Johor',
        postalCode: '86000',
        addressCountry: 'MY',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 2.0308,
        longitude: 103.3183,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:30',
          closes: '17:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '09:30',
          closes: '16:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Wednesday',
          opens: '00:00',
          closes: '00:00',
          description: 'Closed',
        },
      ],
      medicalSpecialty: 'Traditional Chinese Medicine',
      availableService: [
        {
          '@type': 'MedicalTherapy',
          name: language === 'zh' ? '针灸治疗' : language === 'ms' ? 'Terapi Akupunktur' : 'Acupuncture Therapy',
        },
        {
          '@type': 'MedicalTherapy',
          name: language === 'zh' ? '中药配方' : language === 'ms' ? 'Ubat Herba' : 'Herbal Medicine',
        },
        {
          '@type': 'MedicalTherapy',
          name: language === 'zh' ? '推拿按摩' : language === 'ms' ? 'Urutan Tuina' : 'Tuina Massage',
        },
        {
          '@type': 'MedicalTherapy',
          name: language === 'zh' ? '拔罐疗法' : language === 'ms' ? 'Terapi Bekam' : 'Cupping Therapy',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '150',
      },
    };

    structuredData.textContent = JSON.stringify(businessData);
  }, [language]);

  return null;
}
