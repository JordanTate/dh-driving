import heroImage from '../assets/background.svg';

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
  ],
} as const;
