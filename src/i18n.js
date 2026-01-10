import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      contact: 'Get in touch',
    },
    banner: {
      tagline: 'Welcome',
      title: "Hi, I'm Corentin Mazabrard, a Full-Stack Developer.",
      name: 'CORENTIN MAZABRARD',
      role: 'Full-Stack Developer',
      subtitle: 'I create intuitive and engaging digital experiences for startups, marketing teams, and B2B companies. With over 5 years of experience in web and mobile development, I specialize in building scalable solutions using modern technologies.',
      cta: 'Get in touch',
    },
    skills: {
      title: 'About me',
      description: "I'm a curious and ambitious developer with a passion for learning new technologies. I integrate easily within teams and am respectful of others. Driven by a real desire to build high-quality applications, I specialize in full-stack development using React, TypeScript, Node.js, and various backend technologies.",
      stackTitle: 'Languages & tools',
    },
    experience: {
      title: 'Experience',
      subtitle: "Here's a summary of my professional journey and the roles I've held.",
      items: [
        {
          title: 'Co-Founder / CTO',
          company: 'SnowMate Solution Inc.',
          period: 'September 2024 - December 2025',
          description: 'Oversaw and contributed to a mobile and web prototype. Led company structuring, planning, coordination, and strategic decisions.',
        },
        {
          title: 'Full-Stack Developer (then Product Owner)',
          company: 'Steamulo (Consultant, Lyon)',
          period: 'September 2023 - August 2024',
          description: 'Built and maintained features for INPI’s Guichet Unique platform. Transitioned to Product Owner: task dispatching, progress follow-up, direct client interactions, prioritization, while staying hands-on as a developer.',
        },
        {
          title: 'Full-Stack Developer',
          company: 'Codifrance (food distribution)',
          period: 'March 2022 - July 2022',
          description: 'Delivered new features for the internal platform and deployed to production. Gathered user needs, fixed bugs, handled maintenance, and improved reliability of business integrations.',
        },
        {
          title: 'Web Application Developer',
          company: 'Wedev (Consultant, Lyon)',
          period: 'September 2021 - March 2022',
          description: 'Built an internal web application: gathered requirements, designed, and delivered tailored web solutions.',
        },
      ],
    },
    contact: {
      title: 'Get in touch',
      subtitle: "Have a project or want to collaborate? I'd love to hear from you. Reach out and let's create something amazing together.",
      directContact: 'Direct Contact',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        message: 'Message',
        submit: 'Send',
        success: 'Message sent successfully',
        error: 'Something went wrong, please try again later.',
      },
    },
    footer: {
      rights: '© 2026 Corentin. All rights reserved.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      experience: 'Expérience',
      contact: 'Contact',
    },
    banner: {
      tagline: 'Bienvenue',
      title: "Salut, je suis Corentin Mazabrard, Développeur Full-Stack.",
      name: 'CORENTIN MAZABRARD',
      role: 'Développeur Full-Stack',
      subtitle: "Je conçois des expériences digitales intuitives et engageantes pour des startups, des équipes marketing et des entreprises B2B. Avec plus de 5 ans d'expérience en développement web et mobile, je crée des solutions scalables en utilisant des technologies modernes.",
      cta: 'Me contacter',
    },
    skills: {
      title: 'À propos de moi',
      description: "Je suis un développeur curieux et ambitieux, passionné par l'apprentissage de nouvelles technologies. Je m'intègre facilement dans une équipe tout en respectant chacun. Porté par l'envie de livrer des applications de qualité, je me spécialise en full-stack avec React, TypeScript, Node.js et divers backends.",
      stackTitle: 'Langages et outils',
    },
    experience: {
      title: 'Expérience',
      subtitle: "Voici un aperçu de mon parcours professionnel et des rôles que j'ai occupés.",
      items: [
        {
          title: 'Co-Founder / Directeur technique (CTO)',
          company: 'SnowMate Solution Inc.',
          period: 'Septembre 2024 - Décembre 2025',
          description: "Supervision et participation active au développement d'un prototype mobile et web. Gestion de l’entreprise : structuration du projet, planification, coordination et décisions stratégiques.",
        },
        {
          title: 'Développeur FullStack (puis Product Owner)',
          company: 'Steamulo (Conseiller informatique, Lyon)',
          period: 'Septembre 2023 - Août 2024',
          description: "Développement de fonctionnalités et maintenance pour la plateforme Guichet Unique de l’INPI. Passage en rôle de Product Owner : dispatch des tâches, suivi d’avancement, interaction directe client, priorisation et maintien d’un rôle actif de développeur.",
        },
        {
          title: 'Développeur FullStack',
          company: 'Codifrance (distribution alimentaire)',
          period: 'Mars 2022 - Juillet 2022',
          description: "Développement de nouvelles fonctionnalités pour le site interne et déploiement en production. Recueil des besoins utilisateurs, corrections de bugs, maintenance applicative et fiabilisation des intégrations métier.",
        },
        {
          title: 'Développeur application web',
          company: 'Wedev (Consultant, Lyon)',
          period: 'Septembre 2021 - Mars 2022',
          description: "Réalisation d'une application interne pour une entreprise : compréhension des besoins, conception et mise en œuvre de solutions web adaptées.",
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: "Un projet ou une idée de collaboration ? Discutons-en et construisons quelque chose d'excellent ensemble.",
      directContact: 'Contact Direct',
      form: {
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Adresse e-mail',
        message: 'Message',
        submit: 'Envoyer',
        success: 'Message envoyé avec succès',
        error: 'Un problème est survenu, merci de réessayer plus tard.',
      },
    },
    footer: {
      rights: '© 2026 Corentin. Tous droits réservés.',
    },
  },
};

const LanguageContext = createContext({
  lang: 'fr',
  toggleLanguage: () => {},
  t: (key) => key,
});

const getNested = (obj, path) => path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');

  useEffect(() => {
    const stored = window.localStorage.getItem('lang');
    if (stored === 'en' || stored === 'fr') {
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  const t = useCallback((key) => {
    const value = getNested(translations[lang], key);
    return value !== undefined ? value : key;
  }, [lang]);

  const value = useMemo(() => ({ lang, toggleLanguage, t }), [lang, toggleLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
