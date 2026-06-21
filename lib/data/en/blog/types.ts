export type BlogCategory =
  | "Treatment Guide"
  | "Clinic Comparison"
  | "Cost Guide"
  | "Clinic Guide"  
  | "Travel Tip";

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  readingTime: string;
  content: {
    heading: string;
    body: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};