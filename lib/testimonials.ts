export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  rating: 1 | 2 | 3 | 4 | 5;
  projectType?: string;
  verified?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Absolutely blown away by the work OAB Web Agency delivered! They completely revamped our website and the result is exceptional. The new design is modern, clean and perfectly aligned with our brand. They also did a full SEO optimization and we've already seen noticeable improvements in our search rankings. The site is fully mobile responsive and looks stunning on every device.",
    author: "Ben Othman",
    role: "Owner, PeerSoc",
    rating: 5,
    projectType: "Full Redesign & SEO",
    verified: true,
  },
  {
    quote:
      "OAB Web Agency genuinely delivered amazing work that helped my business loads. They over-delivered on the website project and maintained professionalism throughout. Stellar performance all around. Would definitely work with them again.",
    author: "Gerald Winkler",
    role: "Owner, Green and Clean Services",
    rating: 5,
    projectType: "Website Design & Launch",
    verified: true,
  },
];


