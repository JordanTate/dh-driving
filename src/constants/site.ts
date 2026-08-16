import logoImage from '../assets/logo.png';
import heroImage from '../assets/hero.jpg';
import footerImage from '../assets/footer.png';
import type { SiteIconName } from '../components/Icon.astro';
import galleryImage1 from '../assets/IMG_3421.jpg';
import galleryImage2 from '../assets/IMG_3422.jpg';
import galleryImage3 from '../assets/IMG_4816.jpeg';
import galleryImage4 from '../assets/IMG_4818.jpeg';
import galleryImage5 from '../assets/IMG_4827.jpeg';
import galleryImage6 from '../assets/IMG_4835.jpeg';
const studentPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/students/*.jpeg',
  { eager: true },
);

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

export type ReviewItem = {
  name: string;
  text: string;
  image?: {
    src: string;
    alt: string;
  };
};

type GalleryImage = {
  src: string;
  alt: string;
  aspectClass?: string;
};

export const siteBrand = {
  name: 'DH Driving',
  logoAlt: 'DH Driving School Logo',
  logoHref: '/',
  logoSrc: logoImage.src,
  logoWidth: logoImage.width,
  logoHeight: logoImage.height,
} as const;

export const siteContact = {
  phone: {
    label: '0747 149 5093',
    href: 'tel:+477471495093',
  },
  email: {
    label: 'hello@drivingschool.com',
    href: 'mailto:hello@drivingschool.com',
  },
  whatsapp: {
    label: 'Text on WhatsApp',
    href: '',
  },
} as const;

export const siteNavigation = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
] as const;

export const heroDefaults = {
  title: 'Drive Today',
  titleAccent: 'Confident Tomorrow',
  description:
    'Professional driving lessons tailored to you across all Doncaster areas.',
  ctaLabel: 'Call to Book a Lesson',
  ctaHref: siteContact.phone.href,
  image: {
    src: heroImage.src,
    alt: 'Driving lesson road view',
  },
  usps: [
    {
      title: 'Personalised Approach',
      text: 'Lessons tailored to your needs',
      icon: 'instructor',
    },
    {
      title: 'Pass with Confidence',
      text: 'Focused lessons designed for test-day confidence.',
      icon: 'file-badge',
    },
    {
      title: 'Competitive Pricing',
      text: 'Great value for high-quality lessons',
      icon: 'circle-pound-sterling',
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
      title: 'Beginners First',
      price: '£55',
      detail:
        'Taster lessons for complete beginners, focusing on building confidence and basic skills.',
      ctaLabel: 'Call Now',
      ctaHref: siteContact.phone.href,
      featured: false,
    },
    {
      icon: 'star',
      title: '5 Hour Block',
      price: '£190',
      detail: '5 Hours of driving lessons',
      ctaLabel: 'Call Now',
      ctaHref: siteContact.phone.href,
      featured: true,
    },
    {
      icon: 'car-front',
      title: '10 Hour Block',
      price: '£370',
      detail: '10 Hours of driving lessons',
      ctaLabel: 'Call Now',
      ctaHref: siteContact.phone.href,
      featured: false,
    },
    {
      icon: 'road',
      title: 'Motorway & Refresher',
      detail: 'Motorway and refresher lessons for experienced drivers.',
      ctaLabel: 'Please Inquire',
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
  title: 'What learners say about me',
  description:
    'I focus on practical confidence, and a supportive experience from the first lesson through to the test.',
  reviews: [
    {
      name: 'Matilda Sealey',
      text: 'Dave was very patient and tried to make sure I was a confident driver in all types of conditions and on all types of roads, while being very easy to get on with. He made sure I was comfortable with what we were doing in the lesson and pushing me when I needed it.',
      image: {
        src: studentPhotos['../assets/students/Matilda_Sealey.jpeg'].default
          .src,
        alt: 'Matilda Sealey',
      },
    },
    {
      name: 'Frankie Wileman',
      text: 'Dave is a great driving instructor, I always felt so relaxed and we had a good laugh during our lesson. He was always patient, friendly and made me feel confident behind the wheel. His clear explanations and calm approach really helped me improve my driving skills. I would highly recommend him to anyone looking for a reliable and supportive driving instructor.',
      image: {
        src: studentPhotos['../assets/students/Frankie_Wileman.jpeg'].default
          .src,
        alt: 'Frankie Wileman',
      },
    },
    {
      name: 'Leanne Noble-Clarke',
      text: 'I had bad anxiety about getting behind the wheel, however my lessons with Dave took all the anxiety away. I had a laugh and learnt at the same time. I am so thankful for all he did in helping me to drive, as I then went on to pass my test first time .... Amazing instructor.',
      image: {
        src: studentPhotos['../assets/students/Leanne_Noble-Clarke.jpeg']
          .default.src,
        alt: 'Leanne Noble-Clarke',
      },
    },
    {
      name: 'Georgia Gutteridge',
      text: "I honestly couldn't recommend Dave as a driving instructor more! .. I was learning with him for just under 2 years and throughout my journey he was incredible patient, kind and understanding. I struggled with my confidence and had a lot of worries, when it came to driving, be he never made me feel judged or rushed. He always explained things in a way that made sense to me and adapted his teaching method to suit how I leanred best. His calm and supportive approach helped me become a much more confident driver. I'm so grateful for all the patience, support and encouragement he gave me. If you're looking for an instructor who genuinely cares about helping you succeed and builds your confidence every step of the way, I couldn't recommend him more... thank you for everything!",
      image: {
        src: studentPhotos['../assets/students/Georgia_Gutteridge.jpeg'].default
          .src,
        alt: 'Georgia Gutteridge',
      },
    },
    {
      name: 'Shay Wright',
      text: 'I always felt comfortable on lessons and never got too stressed out, he was very easy to talk to throughout lessons and made learning very straightforward.',
      image: {
        src: studentPhotos['../assets/students/Shay_Wright.jpeg'].default.src,
        alt: 'Shay Wright',
      },
    },
    {
      name: 'Franchesca Horsman',
      text: "Dave is an amazing instructor, and when it came to my lessons and passing my test, I couldn't have asked for more..! Throughout my entire driving journey, Dave was always patient, positive and encouraging, even on the days when I felt nervous and anxious. He always managed to make me laugh and made every lesson enjoyable, which really helped build my confidence behind the wheel.",
      image: {
        src: studentPhotos['../assets/students/Franchesca_Horsman.jpeg'].default
          .src,
        alt: 'Franchesca Horsman',
      },
    },
    {
      name: 'Dylan Cooper',
      text: "For helping me pass first time with minimal faults, I couldn't thank Dave enough. His incredible patience and friendly attitude, meant I felt no stress and had full confidence every time I was behind the wheel. Every lesson felt that I had learnt something new each time, and whenever I couldn't come to graps with something, Dave would find new ways to help me overcome any problems I had.",
      image: {
        src: studentPhotos['../assets/students/Dylan_Cooper.jpeg'].default.src,
        alt: 'Dylan Cooper',
      },
    },
    {
      name: 'Grace Strawbridge',
      text: "Lessons with Dave were not only comfortable, supportive and helpful but also lots of fun! Despite being extremely nervous, Dave made me improve massively and also allowed me to learn to enjoy driving. He's an incredible teacher; I'd recommend Dave to anyone within a heartbeat...!",
    },
    {
      name: 'Melanie Birtles',
      text: "My driving experience with Dave was great, I wasn't just having driving lessons, it felt like I was going on a drive with one of my friends. I was always made to feel comforted and supported even when I doubted myself. Dave was very patient and helpful with any problems and fears I had about leaning to drive, his stories and jokes always made you feel at ease. I would highly recommend and felt very privileged to have had him as my instructor. Good luck to all that book with him, you're going to smash it..!",
      image: {
        src: studentPhotos['../assets/students/Melanie_Birtles.jpeg'].default
          .src,
        alt: 'Melanie Birtles',
      },
    },
    {
      name: 'Corey Parker',
      text: "When I first started lessons, I was very nervous on the road, Dave was incredible at working at my pace and only moving on when I felt I was ready and I was confident to do so. Just a couple of days after I passed, I was confident enough to drive myself to Meadowhall on my own. All thanks to Dave's teaching, he's very professional and highly recommend.",
      image: {
        src: studentPhotos['../assets/students/Corey_Parker.jpeg'].default.src,
        alt: 'Corey Parker',
      },
    },
  ] as ReviewItem[],
} as const;

export const gallerySectionDefaults = {
  eyebrow: 'Gallery',
  title: 'My Vehicle',
  description:
    'Take a quick look below at the car you will be learning in. It is a modern, dual-control vehicle that is safe and comfortable for all learners.',
  images: [
    {
      src: galleryImage6.src,
      alt: 'Angled view of training car',
      aspectClass: 'aspect-[16/9]',
    },
    {
      src: galleryImage1.src,
      alt: 'Driver-side dashboard view of training car',
      aspectClass: 'aspect-[4/5]',
    },
    {
      src: galleryImage2.src,
      alt: 'Interior view of training car',
      aspectClass: 'aspect-[5/4]',
    },
    {
      src: galleryImage3.src,
      alt: 'Passenger-side dashboard view of training car',
      aspectClass: 'aspect-[4/5]',
    },
    {
      src: galleryImage4.src,
      alt: 'Front of training car',
      aspectClass: 'aspect-square',
    },
    {
      src: galleryImage5.src,
      alt: 'Side-view of training car',
      aspectClass: 'aspect-[16/9]',
    },
  ] as GalleryImage[],
} as const;

export const footerDefaults = {
  title: 'Ready to get started?',
  subtitle: 'Book your first lesson today.',
  text: "Available for all Doncaster areas from Armthorpe, Sprotbrough, Edlington, Warmsworth, Balby, Conisbrough and more. Reach out by phone to confirm your area and let's find a lesson slot that fits your schedule.",
  callLabel: 'Call Now',
  callHref: siteContact.phone.href,
  whatsappLabel: siteContact.whatsapp.label,
  whatsappHref: siteContact.whatsapp.href,
  image: { src: footerImage.src, alt: 'DH Driving School' },
} as const;
