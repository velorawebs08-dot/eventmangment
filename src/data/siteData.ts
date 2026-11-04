export interface ProcessStep {
  number: string;
  title: string;
  text: string;
  image: string;
}

export interface SiteData {
  brand: {
    name: string;
    logo: string;
  };
  nav: string[];
  hero: {
    titleItalic: string;
    titleRegular: string;
    subtitle: string;
    devanagari: string;
    bgImage: string;
    portraitImage: string;
  };
  about: {
    label: string;
    text: string;
    image: string;
  };
  process: ProcessStep[];
  testimonial: {
    quote: string;
    author: string;
    bgImage: string;
  };
  contact: {
    bgImage: string;
    eventTypes: string[];
  };
  footer: {
    stripImage: string;
    phone: string;
    email: string;
    address: string;
    whatsapp: string;
    facebook: string;
    instagram: string;
  };
}

export const siteData: SiteData = {
  brand: {
    name: "Shubh Utsav Events",
    logo: "Shubh Utsav"
  },
  nav: ["Home", "About", "Our Services", "Contact Us"],
  hero: {
    titleItalic: "Unforgettable",
    titleRegular: "Indian Celebrations",
    subtitle: "Weddings, Sangeet, Mehendi, Birthdays & Corporate Events — Planned Beautifully",
    devanagari: "शुभ उत्सव",
    bgImage: "/images/hero-bg.jpg",
    portraitImage: "/images/hero-portrait.jpg",
  },
  about: {
    label: "About",
    text: "At Shubh Utsav Events, we turn your special day into a beautiful memory. From mandap decoration to sangeet night, from food to photography, we take care of everything — so you can enjoy every moment with your family.",
    image: "/images/about.jpg"
  },
  process: [
    {
      number: "01",
      title: "Meeting",
      text: "We meet you and your family, listen to your ideas, budget and dates, and understand exactly what you want.",
      image: "/images/step-1.jpg"
    },
    {
      number: "02",
      title: "Planning",
      text: "We plan everything with care — venue, decoration, catering, music, photographers and more — all within your budget.",
      image: "/images/step-2.jpg"
    },
    {
      number: "03",
      title: "Celebration",
      text: "On the big day, our team handles everything. You just smile, dance and enjoy with your loved ones.",
      image: "/images/step-3.jpg"
    },
  ],
  testimonial: {
    quote: "Shubh Utsav made our wedding feel like a dream. Everything was perfect and our whole family was so happy!",
    author: "Priya & Rohan Deshmukh, Pune",
    bgImage: "/images/testimonial-bg.jpg"
  },
  contact: {
    bgImage: "/images/contact-bg.jpg",
    eventTypes: [
      "Wedding",
      "Sangeet",
      "Mehendi",
      "Haldi",
      "Engagement",
      "Birthday",
      "Corporate Event",
      "Other"
    ]
  },
  footer: {
    stripImage: "/images/footer-strip.jpg",
    phone: "+91 98765 43210",
    email: "hello@shubhutsav.in",
    address: "Shop No. 12, Laxmi Road, Pune, Maharashtra 411030",
    whatsapp: "919876543210",
    facebook: "#",
    instagram: "#",
  },
};
