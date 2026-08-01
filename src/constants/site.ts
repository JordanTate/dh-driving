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

type UspStripItem = {
  text: string;
  icon?: SiteIconName;
};

type ReviewItem = {
  name: string;
  location: string;
  text: string;
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
  whatsapp: {
    label: 'Text on WhatsApp',
    href: 'https://wa.me/15551234567',
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

export const uspStripDefaults = [
  { text: 'Patient, friendly & professional', icon: 'badge-check' },
  { text: 'Learn in a modern, dual control car', icon: 'badge-check' },
  { text: 'High first-time pass rate', icon: 'badge-check' },
] as UspStripItem[];

export const reviewSectionDefaults = {
  eyebrow: 'Reviews',
  title: 'What learners say about us',
  description:
    'We focus on calm instruction, practical confidence, and a supportive experience from the first lesson through to the test.',
  reviews: [
    {
      name: 'Sophie M.',
      location: 'Automatic lessons',
      text: 'Patient, friendly and professional from day one. I went from nervous to test-ready much faster than I expected.',
    },
    {
      name: 'Daniel P.',
      location: 'Intensive course',
      text: 'The lessons were structured really well and the feedback was always clear. Booking was simple too.',
    },
    {
      name: 'Aisha K.',
      location: 'Weekly lessons',
      text: 'I felt supported the whole way through. The instruction was calm, practical, and easy to follow.',
    },
    {
      name: 'Liam T.',
      location: 'First-time pass',
      text: 'Great communication and a really encouraging approach. I honestly looked forward to each lesson.',
    },
    {
      name: 'Emma R.',
      location: 'Refresher lessons',
      text: 'Everything felt organised and personal. It made getting back into driving feel much less daunting.',
    },
    {
      name: 'Noah S.',
      location: 'Weekend lessons',
      text: 'Flexible scheduling was a huge plus, and the lessons themselves were excellent value for money.',
    },
  ] as ReviewItem[],
} as const;

export const footerDefaults = {
  title: 'Ready to get started?',
  subtitle: 'Book your first lesson today.',
  text: 'Reach out by phone or WhatsApp and we will find a lesson slot that fits your schedule.',
  callLabel: 'Call Now',
  callHref: siteContact.phone.href,
  whatsappLabel: siteContact.whatsapp.label,
  whatsappHref: siteContact.whatsapp.href,
  image: null as { src: string; alt: string } | null,
} as const;
