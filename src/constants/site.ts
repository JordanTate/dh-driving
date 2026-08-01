import heroImage from '../assets/background.svg';
import type { SiteIconName } from '../components/Icon.astro';

type HeroUsp = {
  title: string;
  text: string;
  icon?: SiteIconName;
};

type PackageCard = {
  icon?: SiteIconName;
  title: string;
  price: string;
  detail?: string;
  ctaLabel?: string;
  ctaHref?: string;
  featured?: boolean;
};

export const siteBrand = {
  name: 'Driving School',
  logoLabel: 'Driving School',
  logoHref: '/',
} as const;

export const siteContact = {
  phone: {
    label: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  email: {
    label: 'hello@drivingschool.com',
    href: 'mailto:hello@drivingschool.com',
  },
} as const;

export const siteNavigation = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
] as const;

export const heroDefaults = {
  eyebrow: 'Feel Confident',
  title: 'Drive Today',
  titleAccent: 'Confidence Tomorrow',
  description: 'Professional driving lessons tailored to you.',
  ctaLabel: 'Call to Book a Lesson',
  ctaHref: siteContact.phone.href,
  image: {
    src: heroImage.src,
    alt: 'Driving lesson road view',
  },
  usps: [
    {
      title: 'Patient Instructors',
      text: 'Friendly coaching tailored to your pace.',
      icon: 'instructor',
    },
    {
      title: 'High Pass Rate',
      text: 'Focused lessons designed for test-day confidence.',
      icon: 'shield',
    },
    {
      title: 'Flexible Scheduling',
      text: 'Evening and weekend slots that fit your week.',
      icon: 'clock',
    },
  ] as HeroUsp[],
} as const;

export const packageSectionDefaults = {
  eyebrow: 'Lesson Packages',
  title: 'Choose the package that suits you',
  description:
    'Pick a lesson plan that matches your confidence level, schedule, and how quickly you want to get test-ready.',
  packages: [
    {
      icon: 'book-open',
      title: 'Starter',
      price: 'From £149',
      detail:
        'A great first step for new drivers who want a calm introduction behind the wheel.',
      ctaLabel: 'Book Now',
      ctaHref: siteContact.phone.href,
      featured: false,
    },
    {
      icon: 'star',
      title: 'Standard',
      price: 'From £349',
      detail:
        'Our most popular package for building consistency, confidence, and test-day readiness.',
      ctaLabel: 'Book Now',
      ctaHref: siteContact.phone.href,
      featured: true,
    },
    {
      icon: 'car-front',
      title: 'Intensive',
      price: 'From £599',
      detail:
        'A fast-track option for learners who want concentrated lessons over a shorter period.',
      ctaLabel: 'Book Now',
      ctaHref: siteContact.phone.href,
      featured: false,
    },
  ] as PackageCard[],
} as const;
