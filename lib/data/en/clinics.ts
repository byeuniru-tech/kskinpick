export type ClinicFaq = {
  question: string;
  answer: string;
};

export type Clinic = {
  slug: string;
  name: string;
  district: string;
  city: string;

  imageBase: string;
  coverImage: string;

  tagline: string;
  shortDescription: string;
  overview: string;

  specialties: string[];
  treatmentKeywords: string[];

  foreignerSupport: string[];

  address: string;

  bestFor: string[];
  highlights: string[];

  quickAnswer: string;

  faq: ClinicFaq[];
};

export const clinics: Clinic[] = [
  {
    slug: "arskin-hongdae",
    name: "Arskin Hongdae",
    district: "Hongdae",
    city: "Seoul",

    imageBase: "/clinics/arskin-hongdae",
    coverImage: "/clinics/arskin-hongdae/cover.jpg",

    tagline: "Specialized in Personalized Skin Boosters and Lifting Treatments",
    shortDescription: "Arskin Hongdae is a skin clinic near Hongdae Entrance Station, suitable for visitors interested in personalized skin boosters and lifting treatments.",
    overview: "Through detailed one-on-one consultations, the clinic carefully evaluates each patient’s skin condition and recommends tailored treatment plans. By adhering strictly to the use of authentic products and precise dosages, the focus remains on delivering safe, natural-looking aesthetic improvements that enhance the skin without overcorrection.",

    specialties: [
      "Botox & wrinkle care",
      "Lifting & tightening",
      "Skin boosters"
    ],
    treatmentKeywords: [
      "botox",
      "lifting",
      "skin booster"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Hongdae.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Hongdae, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Hongdae or nearby Seoul neighborhoods.",
      "Patients interested in specialized in personalized skin boosters and lifting treatments.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Hongdae",
      "Near Hongdae Entrance Station",
      "Botox & wrinkle care"
    ],

    quickAnswer: "Arskin Hongdae may be a good option if you are looking for specialized in personalized skin boosters and lifting treatments around Hongdae. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Arskin Hongdae located?",
        answer: "Arskin Hongdae is listed around Hongdae, Seoul, near Hongdae Entrance Station.",
      },
      {
        question: "What is Arskin Hongdae known for?",
        answer: "It is described as a clinic focused on specialized in personalized skin boosters and lifting treatments.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "cellable153-nonhyeon",
    name: "Cellable 153",
    district: "Nonhyeon",
    city: "Seoul",

    imageBase: "/clinics/cellable153-nonhyeon",
    coverImage: "/clinics/cellable153-nonhyeon/cover.jpg",

    tagline: "Premium Anti-Aging and Regenerative Medicine Clinic",
    shortDescription: "Cellable 153 is a Nonhyeon-based clinic near Nonhyeon Station, suitable for visitors looking for premium anti-aging and regenerative medicine clinic.",
    overview: "Integrating advanced stem cell–based biotechnology into comprehensive skin rejuvenation programs, the clinic offers refined medical care in a private and comfortable setting. The goal is not temporary change, but long-term revitalization that supports healthy, youthful skin at its foundation.",

    specialties: [
      "Lifting & tightening",
      "Botox & wrinkle care",
      "Filler treatments",
      "Laser treatments"
    ],
    treatmentKeywords: [
      "lifting",
      "botox",
      "filler",
      "laser"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Nonhyeon.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Nonhyeon, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Nonhyeon or nearby Seoul neighborhoods.",
      "Patients interested in premium anti-aging and regenerative medicine clinic.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Nonhyeon",
      "Near Nonhyeon Station",
      "Lifting & tightening"
    ],

    quickAnswer: "Cellable 153 may be a good option if you are looking for premium anti-aging and regenerative medicine clinic around Nonhyeon. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Cellable 153 located?",
        answer: "Cellable 153 is listed around Nonhyeon, Seoul, near Nonhyeon Station.",
      },
      {
        question: "What is Cellable 153 known for?",
        answer: "It is described as a clinic focused on premium anti-aging and regenerative medicine clinic.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "sy-apgujeong",
    name: "SY Dermatology",
    district: "Apgujeong",
    city: "Seoul",

    imageBase: "/clinics/sy-apgujeong",
    coverImage: "/clinics/sy-apgujeong/cover.jpg",

    tagline: "Non-Surgical Body Contouring and Fat-Dissolving Injection Specialist",
    shortDescription: "SY Dermatology is a Apgujeong-based clinic near Apgujeong Station, suitable for visitors looking for non-surgical body contouring and fat-dissolving injection specialist.",
    overview: "Known for steroid-free, safety-focused fat-dissolving treatments, the clinic combines extensive clinical experience with techniques designed to minimize discomfort. By reducing the need for anesthesia and downtime, patients can achieve a slimmer, more defined body line in a controlled and medically supervised environment.",

    specialties: [
      "Laser treatments",
      "Skin boosters",
      "Botox & wrinkle care"
    ],
    treatmentKeywords: [
      "laser",
      "skinbooster",
      "botox"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Apgujeong.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Apgujeong, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Apgujeong or nearby Seoul neighborhoods.",
      "Patients interested in non-surgical body contouring and fat-dissolving injection specialist.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Apgujeong",
      "Near Apgujeong Station",
      "Laser treatments"
    ],

    quickAnswer: "SY Dermatology may be a good option if you are looking for non-surgical body contouring and fat-dissolving injection specialist around Apgujeong. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is SY Dermatology located?",
        answer: "SY Dermatology is listed around Apgujeong, Seoul, near Apgujeong Station.",
      },
      {
        question: "What is SY Dermatology known for?",
        answer: "It is described as a clinic focused on non-surgical body contouring and fat-dissolving injection specialist.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "shineu-nonhyeon",
    name: "Shine U",
    district: "Nonhyeon",
    city: "Seoul",

    imageBase: "/clinics/shineu-nonhyeon",
    coverImage: "/clinics/shineu-nonhyeon/cover.jpg",

    tagline: "Network Focused on Natural, Subtle Aesthetic Enhancements",
    shortDescription: "Shine U is a Nonhyeon-based clinic near Nonhyeon Station, suitable for visitors looking for network focused on natural, subtle aesthetic enhancements.",
    overview: "Offering accessible treatments such as Botox, fillers, and lifting procedures at reasonable pricing, the clinic emphasizes harmony over exaggeration. Each design-oriented approach is tailored to enhance the patient’s inherent features, ensuring balanced, refined results rather than dramatic alterations.",

    specialties: [
      "Lifting & tightening",
      "Collagenbooster",
      "Bodycontour"
    ],
    treatmentKeywords: [
      "lifting",
      "collagenbooster",
      "bodycontour"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Nonhyeon.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Nonhyeon, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Nonhyeon or nearby Seoul neighborhoods.",
      "Patients interested in network focused on natural, subtle aesthetic enhancements.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Nonhyeon",
      "Near Nonhyeon Station",
      "Lifting & tightening"
    ],

    quickAnswer: "Shine U may be a good option if you are looking for network focused on natural, subtle aesthetic enhancements around Nonhyeon. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Shine U located?",
        answer: "Shine U is listed around Nonhyeon, Seoul, near Nonhyeon Station.",
      },
      {
        question: "What is Shine U known for?",
        answer: "It is described as a clinic focused on network focused on natural, subtle aesthetic enhancements.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "baid-apgujeong",
    name: "Baid",
    district: "Apgujeong",
    city: "Seoul",

    imageBase: "/clinics/baid-apgujeong",
    coverImage: "/clinics/baid-apgujeong/cover.jpg",

    tagline: "Refined Facial Design and Advanced Lifting Solutions",
    shortDescription: "Baid is a Apgujeong-based clinic near Apgujeong Station, suitable for visitors looking for refined facial design and advanced lifting solutions.",
    overview: "With a strong sense of aesthetic balance, the medical team considers overall facial harmony when planning each procedure. Utilizing the latest laser technologies, treatments are structured to minimize discomfort while maximizing visible improvement, delivering results that look both elegant and natural.",

    specialties: [
      "Lifting & tightening",
      "Laser treatments",
      "Skin boosters"
    ],
    treatmentKeywords: [
      "lifting",
      "laser",
      "skinbooster"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Apgujeong.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Apgujeong, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Apgujeong or nearby Seoul neighborhoods.",
      "Patients interested in refined facial design and advanced lifting solutions.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Apgujeong",
      "Near Apgujeong Station",
      "Lifting & tightening"
    ],

    quickAnswer: "Baid may be a good option if you are looking for refined facial design and advanced lifting solutions around Apgujeong. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Baid located?",
        answer: "Baid is listed around Apgujeong, Seoul, near Apgujeong Station.",
      },
      {
        question: "What is Baid known for?",
        answer: "It is described as a clinic focused on refined facial design and advanced lifting solutions.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "cnp-myeongdong",
    name: "C&P Myeongdong",
    district: "Myeongdong",
    city: "Seoul",

    imageBase: "/clinics/cnp-myeongdong",
    coverImage: "/clinics/cnp-myeongdong/cover.jpg",

    tagline: "Board-Certified Dermatology Clinic in Myeongdong",
    shortDescription: "C&P Myeongdong is a Myeongdong-based clinic near Myeongdong Station, suitable for visitors looking for board-certified dermatology clinic in myeongdong.",
    overview: "From acne and scarring to complex pigmentation concerns, treatments are directly managed by dermatology specialists. Drawing on years of clinical expertise and established medical protocols, the clinic focuses on restoring skin health at its core while ensuring safe and precise aesthetic care.",

    specialties: [
      "Acne care",
      "Scar",
      "Pigmentation care",
      "Laser treatments",
      "Botox & wrinkle care",
      "Filler treatments",
      "Skincare"
    ],
    treatmentKeywords: [
      "acne",
      "scar",
      "pigmentation",
      "laser",
      "botox",
      "filler",
      "skincare"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Myeongdong.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Myeongdong, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Myeongdong or nearby Seoul neighborhoods.",
      "Patients interested in board-certified dermatology clinic in myeongdong.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Myeongdong",
      "Near Myeongdong Station",
      "Acne care"
    ],

    quickAnswer: "C&P Myeongdong may be a good option if you are looking for board-certified dermatology clinic in myeongdong around Myeongdong. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is C&P Myeongdong located?",
        answer: "C&P Myeongdong is listed around Myeongdong, Seoul, near Myeongdong Station.",
      },
      {
        question: "What is C&P Myeongdong known for?",
        answer: "It is described as a clinic focused on board-certified dermatology clinic in myeongdong.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "remind-yangjae",
    name: "Remind",
    district: "Yangjae",
    city: "Seoul",

    imageBase: "/clinics/remind-yangjae",
    coverImage: "/clinics/remind-yangjae/cover.jpg",

    tagline: "Holistic Healing Clinic for Skin and Well-Being",
    shortDescription: "Remind is a Yangjae-based clinic near Yangjae Station, suitable for visitors looking for holistic healing clinic for skin and well-being.",
    overview: "Combining professional psychological consultation with dermatological care in a calm, supportive environment, the clinic addresses both emotional stress and skin health. Its differentiated programs are designed to help patients restore balance, promoting visible skin improvement alongside overall well-being.",

    specialties: [
      "Lifting & tightening",
      "Toning",
      "Acne care",
      "Scar",
      "Botox & wrinkle care",
      "Filler treatments"
    ],
    treatmentKeywords: [
      "lifting",
      "toning",
      "acne",
      "scar",
      "botox",
      "filler"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Yangjae.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Yangjae, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Yangjae or nearby Seoul neighborhoods.",
      "Patients interested in holistic healing clinic for skin and well-being.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Yangjae",
      "Near Yangjae Station",
      "Lifting & tightening"
    ],

    quickAnswer: "Remind may be a good option if you are looking for holistic healing clinic for skin and well-being around Yangjae. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Remind located?",
        answer: "Remind is listed around Yangjae, Seoul, near Yangjae Station.",
      },
      {
        question: "What is Remind known for?",
        answer: "It is described as a clinic focused on holistic healing clinic for skin and well-being.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "bloomy-euljiro",
    name: "Bloomy",
    district: "Euljiro",
    city: "Seoul",

    imageBase: "/clinics/bloomy-euljiro",
    coverImage: "/clinics/bloomy-euljiro/cover.jpg",

    tagline: "Skin Care Specialist for Radiant and Revitalized Complexion",
    shortDescription: "Bloomy is a Euljiro-based clinic near Euljiro Station, suitable for visitors looking for skin care specialist for radiant and revitalized complexion.",
    overview: "With particular strengths in skin boosters and brightening treatments, the clinic carefully refines each procedural step to improve dull or uneven skin tone. The objective is to achieve clearer, more luminous skin while maintaining natural texture and balance.",

    specialties: [
      "Collagenbooster",
      "Lifting & tightening",
      "Fatdissolving",
      "Hairremoval"
    ],
    treatmentKeywords: [
      "collagenbooster",
      "lifting",
      "fatdissolving",
      "hairremoval"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Euljiro.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Euljiro, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Euljiro or nearby Seoul neighborhoods.",
      "Patients interested in skin care specialist for radiant and revitalized complexion.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Euljiro",
      "Near Euljiro Station",
      "Collagenbooster"
    ],

    quickAnswer: "Bloomy may be a good option if you are looking for skin care specialist for radiant and revitalized complexion around Euljiro. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Bloomy located?",
        answer: "Bloomy is listed around Euljiro, Seoul, near Euljiro Station.",
      },
      {
        question: "What is Bloomy known for?",
        answer: "It is described as a clinic focused on skin care specialist for radiant and revitalized complexion.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "laleine-gangnam",
    name: "Laleine Gangnam",
    district: "Gangnam",
    city: "Seoul",

    imageBase: "/clinics/laleine-gangnam",
    coverImage: "/clinics/laleine-gangnam/cover.jpg",

    tagline: "Petite Aesthetic and Hair Removal Center Near Gangnam Station",
    shortDescription: "Laleine Gangnam is a Gangnam-based clinic near Gangnam Station, suitable for visitors looking for petite aesthetic and hair removal center near gangnam station.",
    overview: "Conveniently located with an efficient treatment system, the clinic offers a wide range of beauty solutions—from laser hair removal to dermal fillers—at accessible pricing. Its streamlined processes allow patients to receive professional care with minimal waiting time and predictable outcomes.",

    specialties: [
      "Lifting & tightening",
      "Skin boosters",
      "Toning"
    ],
    treatmentKeywords: [
      "lifting",
      "skinbooster",
      "toning"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Gangnam.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Gangnam, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Gangnam or nearby Seoul neighborhoods.",
      "Patients interested in petite aesthetic and hair removal center near gangnam station.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Gangnam",
      "Near Gangnam Station",
      "Lifting & tightening"
    ],

    quickAnswer: "Laleine Gangnam may be a good option if you are looking for petite aesthetic and hair removal center near gangnam station around Gangnam. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Laleine Gangnam located?",
        answer: "Laleine Gangnam is listed around Gangnam, Seoul, near Gangnam Station.",
      },
      {
        question: "What is Laleine Gangnam known for?",
        answer: "It is described as a clinic focused on petite aesthetic and hair removal center near gangnam station.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "somsei-dunchon",
    name: "Somsei",
    district: "Dunchon",
    city: "Seoul",

    imageBase: "/clinics/somsei-dunchon",
    coverImage: "/clinics/somsei-dunchon/cover.jpg",

    tagline: "Detail-Oriented Aesthetic Clinic Focused on Precision",
    shortDescription: "Somsei is a Dunchon-based clinic near Dunchon Station, suitable for visitors looking for detail-oriented aesthetic clinic focused on precision.",
    overview: "Each patient’s facial proportions and features are meticulously analyzed to determine optimal angles and balance. The clinic places strong emphasis on subtle refinements, paying close attention to even the smallest differences before and after treatment to ensure refined and natural results.",

    specialties: [
      "Acne care",
      "Lifting & tightening",
      "Pigmentation care",
      "Hairremoval",
      "Filler treatments"
    ],
    treatmentKeywords: [
      "acne",
      "lifting",
      "pigmentation",
      "hairremoval",
      "filler"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Dunchon.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Dunchon, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Dunchon or nearby Seoul neighborhoods.",
      "Patients interested in detail-oriented aesthetic clinic focused on precision.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Dunchon",
      "Near Dunchon Station",
      "Acne care"
    ],

    quickAnswer: "Somsei may be a good option if you are looking for detail-oriented aesthetic clinic focused on precision around Dunchon. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Somsei located?",
        answer: "Somsei is listed around Dunchon, Seoul, near Dunchon Station.",
      },
      {
        question: "What is Somsei known for?",
        answer: "It is described as a clinic focused on detail-oriented aesthetic clinic focused on precision.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "giveme-gangnam",
    name: "Give Me",
    district: "Gangnam",
    city: "Seoul",

    imageBase: "/clinics/giveme-gangnam",
    coverImage: "/clinics/giveme-gangnam/cover.jpg",

    tagline: "Clinic Committed to Honest Practice and Precise Dosage Standards",
    shortDescription: "Give Me is a Gangnam-based clinic near Gangnam Station, suitable for visitors looking for clinic committed to honest practice and precise dosage standards.",
    overview: "Operating under transparent pricing policies and strict dosage principles, the clinic prioritizes patient trust above all. Treatments are delivered in a comfortable setting, ensuring accessible aesthetic care without unnecessary procedures or exaggerated recommendations.",

    specialties: [
      "Botox & wrinkle care",
      "Filler treatments",
      "Lifting & tightening",
      "Skin boosters",
      "Laser treatments"
    ],
    treatmentKeywords: [
      "botox",
      "filler",
      "lifting",
      "skinbooster",
      "laser"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Gangnam.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Gangnam, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Gangnam or nearby Seoul neighborhoods.",
      "Patients interested in clinic committed to honest practice and precise dosage standards.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Gangnam",
      "Near Gangnam Station",
      "Botox & wrinkle care"
    ],

    quickAnswer: "Give Me may be a good option if you are looking for clinic committed to honest practice and precise dosage standards around Gangnam. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Give Me located?",
        answer: "Give Me is listed around Gangnam, Seoul, near Gangnam Station.",
      },
      {
        question: "What is Give Me known for?",
        answer: "It is described as a clinic focused on clinic committed to honest practice and precise dosage standards.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "liol-sinsa",
    name: "Liol",
    district: "Sinsa",
    city: "Seoul",

    imageBase: "/clinics/liol-sinsa",
    coverImage: "/clinics/liol-sinsa/cover.jpg",

    tagline: "Private One-on-One Customized Plastic Surgery Center",
    shortDescription: "Liol is a Sinsa-based clinic near Sinsa Station, suitable for visitors looking for private one-on-one customized plastic surgery center.",
    overview: "From consultation to post-procedure care, every step is conducted in a private, single-room system designed to protect patient confidentiality. Advanced equipment and meticulous surgical techniques are combined to achieve refined outcomes in a discreet environment.",

    specialties: [
      "Lifting & tightening",
      "Skin boosters",
      "Botox & wrinkle care",
      "Filler treatments",
      "Scar",
      "Pore"
    ],
    treatmentKeywords: [
      "lifting",
      "skinbooster",
      "botox",
      "filler",
      "scar",
      "pore"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Sinsa.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Sinsa, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Sinsa or nearby Seoul neighborhoods.",
      "Patients interested in private one-on-one customized plastic surgery center.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Sinsa",
      "Near Sinsa Station",
      "Lifting & tightening"
    ],

    quickAnswer: "Liol may be a good option if you are looking for private one-on-one customized plastic surgery center around Sinsa. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Liol located?",
        answer: "Liol is listed around Sinsa, Seoul, near Sinsa Station.",
      },
      {
        question: "What is Liol known for?",
        answer: "It is described as a clinic focused on private one-on-one customized plastic surgery center.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "baylor-sinsa",
    name: "Baylor",
    district: "Sinsa",
    city: "Seoul",

    imageBase: "/clinics/baylor-sinsa",
    coverImage: "/clinics/baylor-sinsa/cover.jpg",

    tagline: "Advanced Beauty Solutions with State-of-the-Art Equipment",
    shortDescription: "Baylor is a Sinsa-based clinic near Sinsa Station, suitable for visitors looking for advanced beauty solutions with state-of-the-art equipment.",
    overview: "Benchmarking systems modeled after major U.S. university hospitals, the clinic emphasizes safety and technical precision. With particular expertise in lifting and anti-aging procedures, experienced medical professionals deliver carefully planned treatments supported by advanced infrastructure.",

    specialties: [
      "Botox & wrinkle care",
      "Filler treatments",
      "Lifting & tightening",
      "Skin boosters",
      "Laser treatments"
    ],
    treatmentKeywords: [
      "botox",
      "filler",
      "lifting",
      "skinbooster",
      "laser"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Sinsa.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Sinsa, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Sinsa or nearby Seoul neighborhoods.",
      "Patients interested in advanced beauty solutions with state-of-the-art equipment.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Sinsa",
      "Near Sinsa Station",
      "Botox & wrinkle care"
    ],

    quickAnswer: "Baylor may be a good option if you are looking for advanced beauty solutions with state-of-the-art equipment around Sinsa. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Baylor located?",
        answer: "Baylor is listed around Sinsa, Seoul, near Sinsa Station.",
      },
      {
        question: "What is Baylor known for?",
        answer: "It is described as a clinic focused on advanced beauty solutions with state-of-the-art equipment.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "jd-sinsa",
    name: "JD",
    district: "Sinsa",
    city: "Seoul",

    imageBase: "/clinics/jd-sinsa",
    coverImage: "/clinics/jd-sinsa/cover.jpg",

    tagline: "Natural Design-Focused Petite Aesthetic Clinic",
    shortDescription: "JD is a Sinsa-based clinic near Sinsa Station, suitable for visitors looking for natural design-focused petite aesthetic clinic.",
    overview: "Specializing in volume-enhancing filler techniques and elasticity-focused lifting procedures, the clinic practices a conservative approach—recommending only necessary treatments. The philosophy centers on achieving dimensional yet subtle results that enhance natural facial balance.",

    specialties: [
      "Lifting & tightening",
      "Skin boosters",
      "Botox & wrinkle care",
      "Filler treatments",
      "Laser treatments"
    ],
    treatmentKeywords: [
      "lifting",
      "skinbooster",
      "botox",
      "filler",
      "laser"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Sinsa.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Sinsa, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Sinsa or nearby Seoul neighborhoods.",
      "Patients interested in natural design-focused petite aesthetic clinic.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Sinsa",
      "Near Sinsa Station",
      "Lifting & tightening"
    ],

    quickAnswer: "JD may be a good option if you are looking for natural design-focused petite aesthetic clinic around Sinsa. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is JD located?",
        answer: "JD is listed around Sinsa, Seoul, near Sinsa Station.",
      },
      {
        question: "What is JD known for?",
        answer: "It is described as a clinic focused on natural design-focused petite aesthetic clinic.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "planew-gangnam",
    name: "PlanU",
    district: "Gangnam",
    city: "Seoul",

    imageBase: "/clinics/planew-gangnam",
    coverImage: "/clinics/planew-gangnam/cover.jpg",

    tagline: "Comprehensive Skin Health Planning and Management System",
    shortDescription: "PlanU is a Gangnam-based clinic near Gangnam Station, suitable for visitors looking for comprehensive skin health planning and management system.",
    overview: "Rather than offering one-time procedures, the clinic establishes long-term skin health strategies. Through advanced diagnostic equipment and structured treatment planning, patients receive care aimed at improving skin quality from within.",

    specialties: [
      "Dermatology",
      "Acne care",
      "Scar",
      "Pigmentation care",
      "Antiaging",
      "Skincare"
    ],
    treatmentKeywords: [
      "dermatology",
      "acne",
      "scar",
      "pigmentation",
      "antiaging",
      "skincare"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Gangnam.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Gangnam, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Gangnam or nearby Seoul neighborhoods.",
      "Patients interested in comprehensive skin health planning and management system.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Gangnam",
      "Near Gangnam Station",
      "Dermatology"
    ],

    quickAnswer: "PlanU may be a good option if you are looking for comprehensive skin health planning and management system around Gangnam. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is PlanU located?",
        answer: "PlanU is listed around Gangnam, Seoul, near Gangnam Station.",
      },
      {
        question: "What is PlanU known for?",
        answer: "It is described as a clinic focused on comprehensive skin health planning and management system.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "cnp-apgujeong",
    name: "C&P Apgujeong",
    district: "Apgujeong",
    city: "Seoul",

    imageBase: "/clinics/cnp-apgujeong",
    coverImage: "/clinics/cnp-apgujeong/cover.jpg",

    tagline: "Premium Dermatology Specialist in Apgujeong",
    shortDescription: "C&P Apgujeong is a Apgujeong-based clinic near Apgujeong Station, suitable for visitors looking for premium dermatology specialist in apgujeong.",
    overview: "Responding to evolving aesthetic trends while maintaining medical rigor, board-certified dermatologists perform the latest skin treatments with experienced precision. The clinic blends established clinical knowledge with contemporary techniques in a safety-focused framework.",

    specialties: [
      "Botox & wrinkle care",
      "Filler treatments",
      "Lifting & tightening",
      "Hairremoval",
      "Skin boosters"
    ],
    treatmentKeywords: [
      "botox",
      "filler",
      "lifting",
      "hairremoval",
      "skinbooster"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Apgujeong.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Apgujeong, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Apgujeong or nearby Seoul neighborhoods.",
      "Patients interested in premium dermatology specialist in apgujeong.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Apgujeong",
      "Near Apgujeong Station",
      "Botox & wrinkle care"
    ],

    quickAnswer: "C&P Apgujeong may be a good option if you are looking for premium dermatology specialist in apgujeong around Apgujeong. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is C&P Apgujeong located?",
        answer: "C&P Apgujeong is listed around Apgujeong, Seoul, near Apgujeong Station.",
      },
      {
        question: "What is C&P Apgujeong known for?",
        answer: "It is described as a clinic focused on premium dermatology specialist in apgujeong.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "youni-sinnonhyeon",
    name: "YOU&I Sinnonhyeon",
    district: "Sinnonhyeon",
    city: "Seoul",

    imageBase: "/clinics/youni-sinnonhyeon",
    coverImage: "/clinics/youni-sinnonhyeon/cover.jpg",

    tagline: "Youth-Oriented Beauty Landmark Near University District",
    shortDescription: "YOU&I Sinnonhyeon is a Sinnonhyeon-based clinic near Sinnonhyeon Station, suitable for visitors looking for youth-oriented beauty landmark near university district.",
    overview: "Located in a vibrant academic area, the clinic offers thoughtfully structured treatment packages suitable for younger demographics. Trend-conscious interiors and attentive service contribute to a welcoming and accessible aesthetic experience.",

    specialties: [
      "Botox & wrinkle care",
      "Filler treatments",
      "Lifting & tightening",
      "Laser treatments",
      "Petite_Surgery"
    ],
    treatmentKeywords: [
      "botox",
      "filler",
      "lifting",
      "laser",
      "petite_surgery"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Sinnonhyeon.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Sinnonhyeon, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Sinnonhyeon or nearby Seoul neighborhoods.",
      "Patients interested in youth-oriented beauty landmark near university district.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Sinnonhyeon",
      "Near Sinnonhyeon Station",
      "Botox & wrinkle care"
    ],

    quickAnswer: "YOU&I Sinnonhyeon may be a good option if you are looking for youth-oriented beauty landmark near university district around Sinnonhyeon. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is YOU&I Sinnonhyeon located?",
        answer: "YOU&I Sinnonhyeon is listed around Sinnonhyeon, Seoul, near Sinnonhyeon Station.",
      },
      {
        question: "What is YOU&I Sinnonhyeon known for?",
        answer: "It is described as a clinic focused on youth-oriented beauty landmark near university district.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "dna-apgujeong",
    name: "D&A Apgujeong",
    district: "Apgujeong",
    city: "Seoul",

    imageBase: "/clinics/dna-apgujeong",
    coverImage: "/clinics/dna-apgujeong/cover.jpg",

    tagline: "Hospital Pursuing Harmony Between Art and Detail",
    shortDescription: "D&A Apgujeong is a Apgujeong-based clinic near Apgujeong Station, suitable for visitors looking for hospital pursuing harmony between art and detail.",
    overview: "Demonstrating refined aesthetic sensitivity in facial contour lifting and filler design, the clinic approaches each case with full-face balance in mind. Subtle shaping techniques are applied to achieve proportional and naturally dimensional outcomes.",

    specialties: [
      "Lifting & tightening",
      "Facialcontour",
      "Collagenbooster"
    ],
    treatmentKeywords: [
      "lifting",
      "facialcontour",
      "collagenbooster"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Apgujeong.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Apgujeong, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Apgujeong or nearby Seoul neighborhoods.",
      "Patients interested in hospital pursuing harmony between art and detail.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Apgujeong",
      "Near Apgujeong Station",
      "Lifting & tightening"
    ],

    quickAnswer: "D&A Apgujeong may be a good option if you are looking for hospital pursuing harmony between art and detail around Apgujeong. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is D&A Apgujeong located?",
        answer: "D&A Apgujeong is listed around Apgujeong, Seoul, near Apgujeong Station.",
      },
      {
        question: "What is D&A Apgujeong known for?",
        answer: "It is described as a clinic focused on hospital pursuing harmony between art and detail.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "pp-apgujeong",
    name: "PangPang",
    district: "Apgujeong",
    city: "Seoul",

    imageBase: "/clinics/pp-apgujeong",
    coverImage: "/clinics/pp-apgujeong/cover.jpg",

    tagline: "Lifting-Focused Clinic Specializing in Skin Firmness Restoration",
    shortDescription: "PangPang is a Apgujeong-based clinic near Apgujeong Station, suitable for visitors looking for lifting-focused clinic specializing in skin firmness restoration.",
    overview: "With expertise in thread lifting and laser-based tightening procedures, the clinic addresses age-related skin laxity through structured treatment planning. The focus lies in restoring elasticity while maintaining natural facial movement.",

    specialties: [
      "Lifting & tightening",
      "Pigmentation care",
      "Toning",
      "Botox & wrinkle care",
      "Filler treatments"
    ],
    treatmentKeywords: [
      "lifting",
      "pigmentation",
      "toning",
      "botox",
      "filler"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Apgujeong.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Apgujeong, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Apgujeong or nearby Seoul neighborhoods.",
      "Patients interested in lifting-focused clinic specializing in skin firmness restoration.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Apgujeong",
      "Near Apgujeong Station",
      "Lifting & tightening"
    ],

    quickAnswer: "PangPang may be a good option if you are looking for lifting-focused clinic specializing in skin firmness restoration around Apgujeong. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is PangPang located?",
        answer: "PangPang is listed around Apgujeong, Seoul, near Apgujeong Station.",
      },
      {
        question: "What is PangPang known for?",
        answer: "It is described as a clinic focused on lifting-focused clinic specializing in skin firmness restoration.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "skinique-sinnonhyeon",
    name: "Skinique",
    district: "Sinnonhyeon",
    city: "Seoul",

    imageBase: "/clinics/skinique-sinnonhyeon",
    coverImage: "/clinics/skinique-sinnonhyeon/cover.jpg",

    tagline: "Body Contouring Clinic Integrating Weight and Skin Elasticity Care",
    shortDescription: "Skinique is a Sinnonhyeon-based clinic near Sinnonhyeon Station, suitable for visitors looking for body contouring clinic integrating weight and skin elasticity care.",
    overview: "Beyond simple weight reduction, the clinic emphasizes sculpted body lines achieved through medically supervised contouring treatments. Programs are designed to maintain skin firmness while gradually refining overall proportions.",

    specialties: [
      "Slimming_Injection",
      "Botox & wrinkle care",
      "Filler treatments",
      "Lifting & tightening",
      "Skin boosters"
    ],
    treatmentKeywords: [
      "slimming_injection",
      "botox",
      "filler",
      "lifting",
      "skinbooster"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Sinnonhyeon.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Sinnonhyeon, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Sinnonhyeon or nearby Seoul neighborhoods.",
      "Patients interested in body contouring clinic integrating weight and skin elasticity care.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Sinnonhyeon",
      "Near Sinnonhyeon Station",
      "Slimming_Injection"
    ],

    quickAnswer: "Skinique may be a good option if you are looking for body contouring clinic integrating weight and skin elasticity care around Sinnonhyeon. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Skinique located?",
        answer: "Skinique is listed around Sinnonhyeon, Seoul, near Sinnonhyeon Station.",
      },
      {
        question: "What is Skinique known for?",
        answer: "It is described as a clinic focused on body contouring clinic integrating weight and skin elasticity care.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "bello-sinsa",
    name: "Bello",
    district: "Sinsa",
    city: "Seoul",

    imageBase: "/clinics/bello-sinsa",
    coverImage: "/clinics/bello-sinsa/cover.jpg",

    tagline: "Elegant and Natural Aesthetic Care Center",
    shortDescription: "Bello is a Sinsa-based clinic near Sinsa Station, suitable for visitors looking for elegant and natural aesthetic care center.",
    overview: "Prioritizing subtle refinement over dramatic transformation, the clinic enhances each patient’s inherent features. Treatments are performed with advanced technical control to ensure improvements remain harmonious and understated.",

    specialties: [
      "Nose",
      "Lifting & tightening",
      "Laser treatments",
      "Botox & wrinkle care",
      "Filler treatments"
    ],
    treatmentKeywords: [
      "nose",
      "lifting",
      "laser",
      "botox",
      "filler"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Sinsa.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Sinsa, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Sinsa or nearby Seoul neighborhoods.",
      "Patients interested in elegant and natural aesthetic care center.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Sinsa",
      "Near Sinsa Station",
      "Nose"
    ],

    quickAnswer: "Bello may be a good option if you are looking for elegant and natural aesthetic care center around Sinsa. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Bello located?",
        answer: "Bello is listed around Sinsa, Seoul, near Sinsa Station.",
      },
      {
        question: "What is Bello known for?",
        answer: "It is described as a clinic focused on elegant and natural aesthetic care center.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "ol-nonhyeon",
    name: "OL",
    district: "Nonhyeon",
    city: "Seoul",

    imageBase: "/clinics/ol-nonhyeon",
    coverImage: "/clinics/ol-nonhyeon/cover.jpg",

    tagline: "Personalized Lifetime Beauty Care System",
    shortDescription: "OL is a Nonhyeon-based clinic near Nonhyeon Station, suitable for visitors looking for personalized lifetime beauty care system.",
    overview: "By considering lifestyle factors alongside medical evaluation, the clinic proposes customized treatment strategies tailored to long-term goals. Strict hygiene standards and the exclusive use of authentic products reinforce patient confidence.",

    specialties: [
      "Laser treatments",
      "Acne care",
      "Scar",
      "Pigmentation care",
      "Botox & wrinkle care",
      "Filler treatments"
    ],
    treatmentKeywords: [
      "laser",
      "acne",
      "scar",
      "pigmentation",
      "botox",
      "filler"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Nonhyeon.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Nonhyeon, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Nonhyeon or nearby Seoul neighborhoods.",
      "Patients interested in personalized lifetime beauty care system.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Nonhyeon",
      "Near Nonhyeon Station",
      "Laser treatments"
    ],

    quickAnswer: "OL may be a good option if you are looking for personalized lifetime beauty care system around Nonhyeon. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is OL located?",
        answer: "OL is listed around Nonhyeon, Seoul, near Nonhyeon Station.",
      },
      {
        question: "What is OL known for?",
        answer: "It is described as a clinic focused on personalized lifetime beauty care system.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "oracle-seonjeongneung",
    name: "Oracle",
    district: "Seonjeongneung",
    city: "Seoul",

    imageBase: "/clinics/oracle-seonjeongneung",
    coverImage: "/clinics/oracle-seonjeongneung/cover.jpg",

    tagline: "Established Dermatology Brand with Nationwide Network",
    shortDescription: "Oracle is a Seonjeongneung-based clinic near Seonjeongneung Station, suitable for visitors looking for established dermatology brand with nationwide network.",
    overview: "Supported by extensive clinical data and standardized medical protocols, the clinic delivers consistent, high-quality dermatological services. Patients can expect reliable treatment standards across all affiliated locations.",

    specialties: [
      "Nose",
      "Eye",
      "Revision"
    ],
    treatmentKeywords: [
      "nose",
      "eye",
      "revision"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Seonjeongneung.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Seonjeongneung, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Seonjeongneung or nearby Seoul neighborhoods.",
      "Patients interested in established dermatology brand with nationwide network.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Seonjeongneung",
      "Near Seonjeongneung Station",
      "Nose"
    ],

    quickAnswer: "Oracle may be a good option if you are looking for established dermatology brand with nationwide network around Seonjeongneung. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Oracle located?",
        answer: "Oracle is listed around Seonjeongneung, Seoul, near Seonjeongneung Station.",
      },
      {
        question: "What is Oracle known for?",
        answer: "It is described as a clinic focused on established dermatology brand with nationwide network.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "theplus-sinsa",
    name: "The Plus",
    district: "Sinsa",
    city: "Seoul",

    imageBase: "/clinics/theplus-sinsa",
    coverImage: "/clinics/theplus-sinsa/cover.jpg",

    tagline: "Renowned Plastic Surgery Center Specializing in Rhinoplasty and Revision",
    shortDescription: "The Plus is a Sinsa-based clinic near Sinsa Station, suitable for visitors looking for renowned plastic surgery center specializing in rhinoplasty and revision.",
    overview: "With deep expertise in both aesthetic and functional nasal surgery, the clinic is recognized for advanced rhinoplasty techniques. The approach integrates structural improvement with refined design to achieve balanced and lasting outcomes.",

    specialties: [
      "Facialcontour",
      "Breast",
      "Eye",
      "Nose",
      "Antiaging"
    ],
    treatmentKeywords: [
      "facialcontour",
      "breast",
      "eye",
      "nose",
      "antiaging"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Sinsa.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Sinsa, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Sinsa or nearby Seoul neighborhoods.",
      "Patients interested in renowned plastic surgery center specializing in rhinoplasty and revision.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Sinsa",
      "Near Sinsa Station",
      "Facialcontour"
    ],

    quickAnswer: "The Plus may be a good option if you are looking for renowned plastic surgery center specializing in rhinoplasty and revision around Sinsa. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is The Plus located?",
        answer: "The Plus is listed around Sinsa, Seoul, near Sinsa Station.",
      },
      {
        question: "What is The Plus known for?",
        answer: "It is described as a clinic focused on renowned plastic surgery center specializing in rhinoplasty and revision.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "jk-apgujeong",
    name: "JK",
    district: "Apgujeong",
    city: "Seoul",

    imageBase: "/clinics/jk-apgujeong",
    coverImage: "/clinics/jk-apgujeong/cover.jpg",

    tagline: "Global Medical Tourism Leader in Safe Surgical Practice",
    shortDescription: "JK is a Apgujeong-based clinic near Apgujeong Station, suitable for visitors looking for global medical tourism leader in safe surgical practice.",
    overview: "Equipped with safety systems comparable to major hospitals and backed by over two decades of incident-free experience, the clinic offers comprehensive procedures—from facial contouring to body surgery—under rigorous safety standards.",

    specialties: [
      "Jaw",
      "Facialcontour",
      "Breast",
      "Eye",
      "Nose",
      "Liposuction"
    ],
    treatmentKeywords: [
      "jaw",
      "facialcontour",
      "breast",
      "eye",
      "nose",
      "liposuction"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Apgujeong.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Apgujeong, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Apgujeong or nearby Seoul neighborhoods.",
      "Patients interested in global medical tourism leader in safe surgical practice.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Apgujeong",
      "Near Apgujeong Station",
      "Jaw"
    ],

    quickAnswer: "JK may be a good option if you are looking for global medical tourism leader in safe surgical practice around Apgujeong. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is JK located?",
        answer: "JK is listed around Apgujeong, Seoul, near Apgujeong Station.",
      },
      {
        question: "What is JK known for?",
        answer: "It is described as a clinic focused on global medical tourism leader in safe surgical practice.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "bnbg-yuksam",
    name: "Banobagi",
    district: "Yuksam",
    city: "Seoul",

    imageBase: "/clinics/bnbg-yuksam",
    coverImage: "/clinics/bnbg-yuksam/cover.jpg",

    tagline: "Total Care System with Dedicated Specialists by Field",
    shortDescription: "Banobagi is a Yuksam-based clinic near Yeoksam Station, suitable for visitors looking for total care system with dedicated specialists by field.",
    overview: "Rather than focusing solely on physical change, the clinic aims to restore confidence through coordinated specialist care. Structured departmental systems ensure each patient receives focused expertise in their specific treatment area.",

    specialties: [
      "Breast",
      "Jaw",
      "Facialcontour",
      "Eye",
      "Nose",
      "Bodycontour"
    ],
    treatmentKeywords: [
      "breast",
      "jaw",
      "facialcontour",
      "eye",
      "nose",
      "bodycontour"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Yuksam.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Yuksam, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Yuksam or nearby Seoul neighborhoods.",
      "Patients interested in total care system with dedicated specialists by field.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Yuksam",
      "Near Yeoksam Station",
      "Breast"
    ],

    quickAnswer: "Banobagi may be a good option if you are looking for total care system with dedicated specialists by field around Yuksam. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Banobagi located?",
        answer: "Banobagi is listed around Yuksam, Seoul, near Yeoksam Station.",
      },
      {
        question: "What is Banobagi known for?",
        answer: "It is described as a clinic focused on total care system with dedicated specialists by field.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "view-sinnonhyeon",
    name: "View",
    district: "Sinnonhyeon",
    city: "Seoul",

    imageBase: "/clinics/view-sinnonhyeon",
    coverImage: "/clinics/view-sinnonhyeon/cover.jpg",

    tagline: "Large-Scale Surgical Center Prioritizing Safety",
    shortDescription: "View is a Sinnonhyeon-based clinic near Sinnonhyeon Station, suitable for visitors looking for large-scale surgical center prioritizing safety.",
    overview: "With named-surgeon accountability and one-on-one anesthesia management, safety protocols are reinforced at every stage. The clinic holds strong recognition particularly in breast and facial contouring procedures.",

    specialties: [
      "Jaw",
      "Facialcontour",
      "Nose",
      "Eye",
      "Lifting & tightening"
    ],
    treatmentKeywords: [
      "jaw",
      "facialcontour",
      "nose",
      "eye",
      "lifting"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Sinnonhyeon.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Sinnonhyeon, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Sinnonhyeon or nearby Seoul neighborhoods.",
      "Patients interested in large-scale surgical center prioritizing safety.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Sinnonhyeon",
      "Near Sinnonhyeon Station",
      "Jaw"
    ],

    quickAnswer: "View may be a good option if you are looking for large-scale surgical center prioritizing safety around Sinnonhyeon. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is View located?",
        answer: "View is listed around Sinnonhyeon, Seoul, near Sinnonhyeon Station.",
      },
      {
        question: "What is View known for?",
        answer: "It is described as a clinic focused on large-scale surgical center prioritizing safety.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "id-sinsa",
    name: "ID",
    district: "Sinsa",
    city: "Seoul",

    imageBase: "/clinics/id-sinsa",
    coverImage: "/clinics/id-sinsa/cover.jpg",

    tagline: "Leading Center for Facial Bone Surgery and Anti-Aging",
    shortDescription: "ID is a Sinsa-based clinic near Sinsa Station, suitable for visitors looking for leading center for facial bone surgery and anti-aging.",
    overview: "Possessing extensive surgical case experience in orthognathic and facial contour procedures, the center operates through interdisciplinary collaboration between plastic surgery, dentistry, and dermatology to optimize facial balance.",

    specialties: [
      "Rhinoplasty_Functional",
      "Revision",
      "Facialcontour"
    ],
    treatmentKeywords: [
      "rhinoplasty_functional",
      "revision",
      "facialcontour"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Sinsa.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Sinsa, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Sinsa or nearby Seoul neighborhoods.",
      "Patients interested in leading center for facial bone surgery and anti-aging.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Sinsa",
      "Near Sinsa Station",
      "Rhinoplasty_Functional"
    ],

    quickAnswer: "ID may be a good option if you are looking for leading center for facial bone surgery and anti-aging around Sinsa. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is ID located?",
        answer: "ID is listed around Sinsa, Seoul, near Sinsa Station.",
      },
      {
        question: "What is ID known for?",
        answer: "It is described as a clinic focused on leading center for facial bone surgery and anti-aging.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "gng-seonjeongneung",
    name: "GNG",
    district: "Seonjeongneung",
    city: "Seoul",

    imageBase: "/clinics/gng-seonjeongneung",
    coverImage: "/clinics/gng-seonjeongneung/cover.jpg",

    tagline: "Specialized Medical Building for Aesthetic and Functional Rhinoplasty",
    shortDescription: "GNG is a Seonjeongneung-based clinic near Seonjeongneung Station, suitable for visitors looking for specialized medical building for aesthetic and functional rhinoplasty.",
    overview: "Through collaboration between otolaryngology and plastic surgery specialists, both nasal obstruction treatment and cosmetic refinement are addressed simultaneously. Dedicated recovery facilities further enhance patient comfort post-surgery.",

    specialties: [
      "Facialcontour",
      "Eye",
      "Nose",
      "Breast",
      "Lifting & tightening"
    ],
    treatmentKeywords: [
      "facialcontour",
      "eye",
      "nose",
      "breast",
      "lifting"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Seonjeongneung.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Seonjeongneung, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Seonjeongneung or nearby Seoul neighborhoods.",
      "Patients interested in specialized medical building for aesthetic and functional rhinoplasty.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Seonjeongneung",
      "Near Seonjeongneung Station",
      "Facialcontour"
    ],

    quickAnswer: "GNG may be a good option if you are looking for specialized medical building for aesthetic and functional rhinoplasty around Seonjeongneung. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is GNG located?",
        answer: "GNG is listed around Seonjeongneung, Seoul, near Seonjeongneung Station.",
      },
      {
        question: "What is GNG known for?",
        answer: "It is described as a clinic focused on specialized medical building for aesthetic and functional rhinoplasty.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "regen-sinnonhyeon",
    name: "Regen",
    district: "Sinnonhyeon",
    city: "Seoul",

    imageBase: "/clinics/regen-sinnonhyeon",
    coverImage: "/clinics/regen-sinnonhyeon/cover.jpg",

    tagline: "Collaborative Surgery Center Focused on Proportional Aesthetics",
    shortDescription: "Regen is a Sinnonhyeon-based clinic near Sinnonhyeon Station, suitable for visitors looking for collaborative surgery center focused on proportional aesthetics.",
    overview: "Each procedure begins with a comprehensive facial analysis to ensure harmony and proportion. A responsibility-based care system and structured aftercare strengthen long-term patient trust.",

    specialties: [
      "Eye",
      "Nose",
      "Facialcontour",
      "Breast",
      "Petite_Surgery"
    ],
    treatmentKeywords: [
      "eye",
      "nose",
      "facialcontour",
      "breast",
      "petite_surgery"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Sinnonhyeon.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Sinnonhyeon, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Sinnonhyeon or nearby Seoul neighborhoods.",
      "Patients interested in collaborative surgery center focused on proportional aesthetics.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Sinnonhyeon",
      "Near Sinnonhyeon Station",
      "Eye"
    ],

    quickAnswer: "Regen may be a good option if you are looking for collaborative surgery center focused on proportional aesthetics around Sinnonhyeon. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Regen located?",
        answer: "Regen is listed around Sinnonhyeon, Seoul, near Sinnonhyeon Station.",
      },
      {
        question: "What is Regen known for?",
        answer: "It is described as a clinic focused on collaborative surgery center focused on proportional aesthetics.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "bk-sinsa",
    name: "BK",
    district: "Sinsa",
    city: "Seoul",

    imageBase: "/clinics/bk-sinsa",
    coverImage: "/clinics/bk-sinsa/cover.jpg",

    tagline: "Long-Established Plastic Surgery Clinic in Gangnam",
    shortDescription: "BK is a Sinsa-based clinic near Sinsa Station, suitable for visitors looking for long-established plastic surgery clinic in gangnam.",
    overview: "With tens of thousands of accumulated surgical cases spanning eye, nose, and body contour procedures, the clinic offers multilingual services and optimized systems tailored to international patients.",

    specialties: [
      "Eye",
      "Nose",
      "Facialcontour",
      "Breast",
      "Liposuction"
    ],
    treatmentKeywords: [
      "eye",
      "nose",
      "facialcontour",
      "breast",
      "liposuction"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Sinsa.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Sinsa, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Sinsa or nearby Seoul neighborhoods.",
      "Patients interested in long-established plastic surgery clinic in gangnam.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Sinsa",
      "Near Sinsa Station",
      "Eye"
    ],

    quickAnswer: "BK may be a good option if you are looking for long-established plastic surgery clinic in gangnam around Sinsa. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is BK located?",
        answer: "BK is listed around Sinsa, Seoul, near Sinsa Station.",
      },
      {
        question: "What is BK known for?",
        answer: "It is described as a clinic focused on long-established plastic surgery clinic in gangnam.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "opera-gangnam",
    name: "Opera",
    district: "Gangnam",
    city: "Seoul",

    imageBase: "/clinics/opera-gangnam",
    coverImage: "/clinics/opera-gangnam/cover.jpg",

    tagline: "Results-Oriented Clinic Upholding a No-Accident Principle",
    shortDescription: "Opera is a Gangnam-based clinic near Gangnam Station, suitable for visitors looking for results-oriented clinic upholding a no-accident principle.",
    overview: "An in-house anesthesiology specialist ensures 24-hour medical readiness. Rather than relying on aggressive marketing, the clinic emphasizes measurable surgical outcomes and patient satisfaction.",

    specialties: [
      "Eye",
      "Nose",
      "Facialcontour",
      "Breast"
    ],
    treatmentKeywords: [
      "eye",
      "nose",
      "facialcontour",
      "breast"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Gangnam.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Gangnam, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Gangnam or nearby Seoul neighborhoods.",
      "Patients interested in results-oriented clinic upholding a no-accident principle.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Gangnam",
      "Near Gangnam Station",
      "Eye"
    ],

    quickAnswer: "Opera may be a good option if you are looking for results-oriented clinic upholding a no-accident principle around Gangnam. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Opera located?",
        answer: "Opera is listed around Gangnam, Seoul, near Gangnam Station.",
      },
      {
        question: "What is Opera known for?",
        answer: "It is described as a clinic focused on results-oriented clinic upholding a no-accident principle.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "grand-sinsa",
    name: "Grand",
    district: "Sinsa",
    city: "Seoul",

    imageBase: "/clinics/grand-sinsa",
    coverImage: "/clinics/grand-sinsa/cover.jpg",

    tagline: "Large-Scale Plastic Surgery Center with University-Hospital-Level System",
    shortDescription: "Grand is a Sinsa-based clinic near Sinsa Station, suitable for visitors looking for large-scale plastic surgery center with university-hospital-level system.",
    overview: "More than 30 medical specialists conduct area-specific treatments supported by advanced emergency equipment and precision diagnostic systems, prioritizing safety and surgical completeness.",

    specialties: [
      "Petite_Surgery",
      "Botox & wrinkle care",
      "Filler treatments",
      "Hairremoval",
      "Lifting & tightening"
    ],
    treatmentKeywords: [
      "petite_surgery",
      "botox",
      "filler",
      "hairremoval",
      "lifting"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Sinsa.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Sinsa, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Sinsa or nearby Seoul neighborhoods.",
      "Patients interested in large-scale plastic surgery center with university-hospital-level system.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Sinsa",
      "Near Sinsa Station",
      "Petite_Surgery"
    ],

    quickAnswer: "Grand may be a good option if you are looking for large-scale plastic surgery center with university-hospital-level system around Sinsa. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Grand located?",
        answer: "Grand is listed around Sinsa, Seoul, near Sinsa Station.",
      },
      {
        question: "What is Grand known for?",
        answer: "It is described as a clinic focused on large-scale plastic surgery center with university-hospital-level system.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "ppeum-sinnonhyeon",
    name: "Bbeum",
    district: "Sinnonhyeon",
    city: "Seoul",

    imageBase: "/clinics/ppeum-sinnonhyeon",
    coverImage: "/clinics/ppeum-sinnonhyeon/cover.jpg",

    tagline: "Balanced Approach Between Trend Sensibility and Reasonable Pricing",
    shortDescription: "Bbeum is a Sinnonhyeon-based clinic near Sinnonhyeon Station, suitable for visitors looking for balanced approach between trend sensibility and reasonable pricing.",
    overview: "Designed to provide a pleasant and refined treatment environment, the clinic offers popular procedures such as lifting and skin boosters at accessible rates without compromising medical standards.",

    specialties: [
      "Botox & wrinkle care",
      "Filler treatments",
      "Hairremoval",
      "Lifting & tightening",
      "Toning"
    ],
    treatmentKeywords: [
      "botox",
      "filler",
      "hairremoval",
      "lifting",
      "toning"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Sinnonhyeon.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Sinnonhyeon, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Sinnonhyeon or nearby Seoul neighborhoods.",
      "Patients interested in balanced approach between trend sensibility and reasonable pricing.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Sinnonhyeon",
      "Near Sinnonhyeon Station",
      "Botox & wrinkle care"
    ],

    quickAnswer: "Bbeum may be a good option if you are looking for balanced approach between trend sensibility and reasonable pricing around Sinnonhyeon. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Bbeum located?",
        answer: "Bbeum is listed around Sinnonhyeon, Seoul, near Sinnonhyeon Station.",
      },
      {
        question: "What is Bbeum known for?",
        answer: "It is described as a clinic focused on balanced approach between trend sensibility and reasonable pricing.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "muse-gangnam",
    name: "Muse",
    district: "Gangnam",
    city: "Seoul",

    imageBase: "/clinics/muse-gangnam",
    coverImage: "/clinics/muse-gangnam/cover.jpg",

    tagline: "Transparent Pricing-Based Beauty Clinic",
    shortDescription: "Muse is a Gangnam-based clinic near Gangnam Station, suitable for visitors looking for transparent pricing-based beauty clinic.",
    overview: "With openly disclosed monthly packages and streamlined treatment processes, the clinic delivers efficient yet attentive care tailored to busy modern lifestyles.",

    specialties: [
      "Bodycontour",
      "Lifting & tightening",
      "Petite_Surgery"
    ],
    treatmentKeywords: [
      "bodycontour",
      "lifting",
      "petite_surgery"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Gangnam.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Gangnam, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Gangnam or nearby Seoul neighborhoods.",
      "Patients interested in transparent pricing-based beauty clinic.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Gangnam",
      "Near Gangnam Station",
      "Bodycontour"
    ],

    quickAnswer: "Muse may be a good option if you are looking for transparent pricing-based beauty clinic around Gangnam. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Muse located?",
        answer: "Muse is listed around Gangnam, Seoul, near Gangnam Station.",
      },
      {
        question: "What is Muse known for?",
        answer: "It is described as a clinic focused on transparent pricing-based beauty clinic.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "vs-sinsa",
    name: "VS Line",
    district: "Sinsa",
    city: "Seoul",

    imageBase: "/clinics/vs-sinsa",
    coverImage: "/clinics/vs-sinsa/cover.jpg",

    tagline: "Contour-Focused Clinic for Slim and Defined Facial Lines",
    shortDescription: "VS Line is a Sinsa-based clinic near Sinsa Station, suitable for visitors looking for contour-focused clinic for slim and defined facial lines.",
    overview: "Specializing in contour injections and thread lifting, the clinic demonstrates strong design sensibility in facial line refinement. Treatments are adapted to each patient’s bone structure for individualized precision.",

    specialties: [
      "Permanent_Makeup",
      "Botox & wrinkle care",
      "Filler treatments",
      "Lifting & tightening",
      "Petite_Surgery"
    ],
    treatmentKeywords: [
      "permanent_makeup",
      "botox",
      "filler",
      "lifting",
      "petite_surgery"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Sinsa.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Sinsa, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Sinsa or nearby Seoul neighborhoods.",
      "Patients interested in contour-focused clinic for slim and defined facial lines.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Sinsa",
      "Near Sinsa Station",
      "Permanent_Makeup"
    ],

    quickAnswer: "VS Line may be a good option if you are looking for contour-focused clinic for slim and defined facial lines around Sinsa. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is VS Line located?",
        answer: "VS Line is listed around Sinsa, Seoul, near Sinsa Station.",
      },
      {
        question: "What is VS Line known for?",
        answer: "It is described as a clinic focused on contour-focused clinic for slim and defined facial lines.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "lienjang-gangnam",
    name: "Lienjang",
    district: "Gangnam",
    city: "Seoul",

    imageBase: "/clinics/lienjang-gangnam",
    coverImage: "/clinics/lienjang-gangnam/cover.jpg",

    tagline: "Premium Petite Procedure Hub for Global Patients",
    shortDescription: "Lienjang is a Gangnam-based clinic near Gangnam Station, suitable for visitors looking for premium petite procedure hub for global patients.",
    overview: "Recognized for consistent use of authentic products and experienced medical teams, the clinic balances affordability with quality. A structured large-scale network system enhances reliability and follow-up care.",

    specialties: [
      "Botox & wrinkle care",
      "Filler treatments",
      "Contour_Injection",
      "Hairremoval",
      "Skin boosters"
    ],
    treatmentKeywords: [
      "botox",
      "filler",
      "contour_injection",
      "hairremoval",
      "skinbooster"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Gangnam.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Gangnam, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Gangnam or nearby Seoul neighborhoods.",
      "Patients interested in premium petite procedure hub for global patients.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Gangnam",
      "Near Gangnam Station",
      "Botox & wrinkle care"
    ],

    quickAnswer: "Lienjang may be a good option if you are looking for premium petite procedure hub for global patients around Gangnam. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Lienjang located?",
        answer: "Lienjang is listed around Gangnam, Seoul, near Gangnam Station.",
      },
      {
        question: "What is Lienjang known for?",
        answer: "It is described as a clinic focused on premium petite procedure hub for global patients.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "toxnfill-gangnam",
    name: "Toxnfill",
    district: "Gangnam",
    city: "Seoul",

    imageBase: "/clinics/toxnfill-gangnam",
    coverImage: "/clinics/toxnfill-gangnam/cover.jpg",

    tagline: "Leading Brand in Botox and Filler Standardization",
    shortDescription: "Toxnfill is a Gangnam-based clinic near Gangnam Station, suitable for visitors looking for leading brand in botox and filler standardization.",
    overview: "With one of the largest national branch networks, the clinic delivers standardized treatment quality supported by continuous medical staff training to maintain safety and up-to-date techniques.",

    specialties: [
      "Hairremoval",
      "Botox & wrinkle care",
      "Filler treatments",
      "Skincare",
      "Lifting & tightening"
    ],
    treatmentKeywords: [
      "hairremoval",
      "botox",
      "filler",
      "skincare",
      "lifting"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Gangnam.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Gangnam, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Gangnam or nearby Seoul neighborhoods.",
      "Patients interested in leading brand in botox and filler standardization.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Gangnam",
      "Near Gangnam Station",
      "Hairremoval"
    ],

    quickAnswer: "Toxnfill may be a good option if you are looking for leading brand in botox and filler standardization around Gangnam. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Toxnfill located?",
        answer: "Toxnfill is listed around Gangnam, Seoul, near Gangnam Station.",
      },
      {
        question: "What is Toxnfill known for?",
        answer: "It is described as a clinic focused on leading brand in botox and filler standardization.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "abijou-gangnam",
    name: "Abijou",
    district: "Gangnam",
    city: "Seoul",

    imageBase: "/clinics/abijou-gangnam",
    coverImage: "/clinics/abijou-gangnam/cover.jpg",

    tagline: "Dermatology Clinic Offering Refined Service and Structured Care",
    shortDescription: "Abijou is a Gangnam-based clinic near Gangnam Station, suitable for visitors looking for dermatology clinic offering refined service and structured care.",
    overview: "Featuring a premium interior environment and attentive patient service, the clinic provides systematic treatment plans ranging from laser hair removal to advanced skin rejuvenation programs.",

    specialties: [
      "Filler treatments",
      "Botox & wrinkle care",
      "Lifting & tightening",
      "Laser treatments",
      "Skincare"
    ],
    treatmentKeywords: [
      "filler",
      "botox",
      "lifting",
      "laser",
      "skincare"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Gangnam.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Gangnam, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Gangnam or nearby Seoul neighborhoods.",
      "Patients interested in dermatology clinic offering refined service and structured care.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Gangnam",
      "Near Gangnam Station",
      "Filler treatments"
    ],

    quickAnswer: "Abijou may be a good option if you are looking for dermatology clinic offering refined service and structured care around Gangnam. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Abijou located?",
        answer: "Abijou is listed around Gangnam, Seoul, near Gangnam Station.",
      },
      {
        question: "What is Abijou known for?",
        answer: "It is described as a clinic focused on dermatology clinic offering refined service and structured care.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "jfeel-hongdae",
    name: "Jfeel",
    district: "Hongdae",
    city: "Seoul",

    imageBase: "/clinics/jfeel-hongdae",
    coverImage: "/clinics/jfeel-hongdae/cover.jpg",

    tagline: "Filler and Lifting Specialist for Natural Volume Enhancement",
    shortDescription: "Jfeel is a Hongdae-based clinic near Hongdae Entrance Station, suitable for visitors looking for filler and lifting specialist for natural volume enhancement.",
    overview: "With strong design capability in optimizing facial proportions, treatments aim to reduce bruising and swelling while promoting quicker recovery, allowing patients to return to daily activities promptly.",

    specialties: [
      "Dermatology",
      "Pigmentation care",
      "Botox & wrinkle care"
    ],
    treatmentKeywords: [
      "dermatology",
      "pigmentation",
      "botox"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Hongdae.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Hongdae, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Hongdae or nearby Seoul neighborhoods.",
      "Patients interested in filler and lifting specialist for natural volume enhancement.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Hongdae",
      "Near Hongdae Entrance Station",
      "Dermatology"
    ],

    quickAnswer: "Jfeel may be a good option if you are looking for filler and lifting specialist for natural volume enhancement around Hongdae. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Jfeel located?",
        answer: "Jfeel is listed around Hongdae, Seoul, near Hongdae Entrance Station.",
      },
      {
        question: "What is Jfeel known for?",
        answer: "It is described as a clinic focused on filler and lifting specialist for natural volume enhancement.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "lime-gangnam",
    name: "Lime",
    district: "Gangnam",
    city: "Seoul",

    imageBase: "/clinics/lime-gangnam",
    coverImage: "/clinics/lime-gangnam/cover.jpg",

    tagline: "Customized Skin Clinic Focused on Vital and Balanced Complexion",
    shortDescription: "Lime is a Gangnam-based clinic near Gangnam Station, suitable for visitors looking for customized skin clinic focused on vital and balanced complexion.",
    overview: "Emphasizing fundamental skin tone correction and texture refinement, the clinic combines selective treatment planning with detailed one-on-one consultation to ensure only necessary procedures are performed.",

    specialties: [
      "Scar",
      "Laser treatments",
      "Dermatology",
      "Lifting & tightening"
    ],
    treatmentKeywords: [
      "scar",
      "laser",
      "dermatology",
      "lifting"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Gangnam.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Gangnam, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Gangnam or nearby Seoul neighborhoods.",
      "Patients interested in customized skin clinic focused on vital and balanced complexion.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Gangnam",
      "Near Gangnam Station",
      "Scar"
    ],

    quickAnswer: "Lime may be a good option if you are looking for customized skin clinic focused on vital and balanced complexion around Gangnam. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Lime located?",
        answer: "Lime is listed around Gangnam, Seoul, near Gangnam Station.",
      },
      {
        question: "What is Lime known for?",
        answer: "It is described as a clinic focused on customized skin clinic focused on vital and balanced complexion.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "renewme-hwagok",
    name: "Renewme",
    district: "Hwagok",
    city: "Seoul",

    imageBase: "/clinics/renewme-hwagok",
    coverImage: "/clinics/renewme-hwagok/cover.jpg",

    tagline: "Traditional Dermatology Clinic with Board-Certified Specialists",
    shortDescription: "Renewme is a Hwagok-based clinic near Hwagok Station, suitable for visitors looking for traditional dermatology clinic with board-certified specialists.",
    overview: "Equipped with advanced laser technologies for complex pigmentation and scar treatment, procedures are performed under precise specialist diagnosis to ensure safe and medically sound aesthetic care.",

    specialties: [
      "Eye",
      "Nose",
      "Facelift"
    ],
    treatmentKeywords: [
      "eye",
      "nose",
      "facelift"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Hwagok.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Hwagok, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Hwagok or nearby Seoul neighborhoods.",
      "Patients interested in traditional dermatology clinic with board-certified specialists.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Hwagok",
      "Near Hwagok Station",
      "Eye"
    ],

    quickAnswer: "Renewme may be a good option if you are looking for traditional dermatology clinic with board-certified specialists around Hwagok. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Renewme located?",
        answer: "Renewme is listed around Hwagok, Seoul, near Hwagok Station.",
      },
      {
        question: "What is Renewme known for?",
        answer: "It is described as a clinic focused on traditional dermatology clinic with board-certified specialists.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "hugo-apgujeong",
    name: "Hugo",
    district: "Apgujeong",
    city: "Seoul",

    imageBase: "/clinics/hugo-apgujeong",
    coverImage: "/clinics/hugo-apgujeong/cover.jpg",

    tagline: "Customized Plastic Surgery Emphasizing Individual Features",
    shortDescription: "Hugo is a Apgujeong-based clinic near Apgujeong Station, suitable for visitors looking for customized plastic surgery emphasizing individual features.",
    overview: "Favoring enhancement over excessive alteration, the clinic highlights each patient’s natural strengths. The chief surgeon personally oversees the process from consultation through post-operative care.",

    specialties: [
      "Eye",
      "Nose",
      "Facialcontour",
      "Stemcell"
    ],
    treatmentKeywords: [
      "eye",
      "nose",
      "facialcontour",
      "stemcell"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Apgujeong.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Apgujeong, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Apgujeong or nearby Seoul neighborhoods.",
      "Patients interested in customized plastic surgery emphasizing individual features.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Apgujeong",
      "Near Apgujeong Station",
      "Eye"
    ],

    quickAnswer: "Hugo may be a good option if you are looking for customized plastic surgery emphasizing individual features around Apgujeong. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Hugo located?",
        answer: "Hugo is listed around Apgujeong, Seoul, near Apgujeong Station.",
      },
      {
        question: "What is Hugo known for?",
        answer: "It is described as a clinic focused on customized plastic surgery emphasizing individual features.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "braun-sinsa",
    name: "Braun",
    district: "Sinsa",
    city: "Seoul",

    imageBase: "/clinics/braun-sinsa",
    coverImage: "/clinics/braun-sinsa/cover.jpg",

    tagline: "Aesthetic Center Specializing in Eyes, Nose, and Lifting",
    shortDescription: "Braun is a Sinsa-based clinic near Sinsa Station, suitable for visitors looking for aesthetic center specializing in eyes, nose, and lifting.",
    overview: "Grounded in anatomical expertise, the clinic creates refined and natural contours. It is particularly recognized for revision rhinoplasty and complex thread lifting procedures.",

    specialties: [
      "Breast",
      "Bodycontour",
      "Eye",
      "Nose",
      "Lifting & tightening"
    ],
    treatmentKeywords: [
      "breast",
      "bodycontour",
      "eye",
      "nose",
      "lifting"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Sinsa.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Sinsa, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Sinsa or nearby Seoul neighborhoods.",
      "Patients interested in aesthetic center specializing in eyes, nose, and lifting.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Sinsa",
      "Near Sinsa Station",
      "Breast"
    ],

    quickAnswer: "Braun may be a good option if you are looking for aesthetic center specializing in eyes, nose, and lifting around Sinsa. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Braun located?",
        answer: "Braun is listed around Sinsa, Seoul, near Sinsa Station.",
      },
      {
        question: "What is Braun known for?",
        answer: "It is described as a clinic focused on aesthetic center specializing in eyes, nose, and lifting.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "nana-nonhyeon",
    name: "Nana",
    district: "Nonhyeon",
    city: "Seoul",

    imageBase: "/clinics/nana-nonhyeon",
    coverImage: "/clinics/nana-nonhyeon/cover.jpg",

    tagline: "Trend-Conscious Plastic Surgery with Collaborative Specialist System",
    shortDescription: "Nana is a Nonhyeon-based clinic near Nonhyeon Station, suitable for visitors looking for trend-conscious plastic surgery with collaborative specialist system.",
    overview: "Specialists in each surgical field collaborate to apply updated techniques. Patient reassurance systems—including operating room monitoring—reinforce safety transparency.",

    specialties: [
      "Eye",
      "Nose",
      "Facialcontour",
      "Breast",
      "Antiaging"
    ],
    treatmentKeywords: [
      "eye",
      "nose",
      "facialcontour",
      "breast",
      "antiaging"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Nonhyeon.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Nonhyeon, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Nonhyeon or nearby Seoul neighborhoods.",
      "Patients interested in trend-conscious plastic surgery with collaborative specialist system.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Nonhyeon",
      "Near Nonhyeon Station",
      "Eye"
    ],

    quickAnswer: "Nana may be a good option if you are looking for trend-conscious plastic surgery with collaborative specialist system around Nonhyeon. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Nana located?",
        answer: "Nana is listed around Nonhyeon, Seoul, near Nonhyeon Station.",
      },
      {
        question: "What is Nana known for?",
        answer: "It is described as a clinic focused on trend-conscious plastic surgery with collaborative specialist system.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "ab-gangnam",
    name: "AB",
    district: "Gangnam",
    city: "Seoul",

    imageBase: "/clinics/ab-gangnam",
    coverImage: "/clinics/ab-gangnam/cover.jpg",

    tagline: "Premium Surgical Solutions Defined by Detail",
    shortDescription: "AB is a Gangnam-based clinic near Gangnam Station, suitable for visitors looking for premium surgical solutions defined by detail.",
    overview: "By carefully analyzing each patient’s goals, the clinic delivers measurable results supported by thorough pre-surgical evaluations and structured scar management programs.",

    specialties: [
      "Eye",
      "Nose",
      "Petite_Surgery"
    ],
    treatmentKeywords: [
      "eye",
      "nose",
      "petite_surgery"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Gangnam.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Gangnam, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Gangnam or nearby Seoul neighborhoods.",
      "Patients interested in premium surgical solutions defined by detail.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Gangnam",
      "Near Gangnam Station",
      "Eye"
    ],

    quickAnswer: "AB may be a good option if you are looking for premium surgical solutions defined by detail around Gangnam. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is AB located?",
        answer: "AB is listed around Gangnam, Seoul, near Gangnam Station.",
      },
      {
        question: "What is AB known for?",
        answer: "It is described as a clinic focused on premium surgical solutions defined by detail.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "pop-apgujeong",
    name: "Pop",
    district: "Apgujeong",
    city: "Seoul",

    imageBase: "/clinics/pop-apgujeong",
    coverImage: "/clinics/pop-apgujeong/cover.jpg",

    tagline: "One-on-One Customized Design Surgery Specialist",
    shortDescription: "Pop is a Apgujeong-based clinic near Apgujeong Station, suitable for visitors looking for one-on-one customized design surgery specialist.",
    overview: "With particular strengths in eye surgery and lifting procedures, the clinic tailors outcomes according to age group and aesthetic preference, ensuring results that align naturally with individual identity.",

    specialties: [
      "Breast",
      "Eye",
      "Nose",
      "Lifting & tightening"
    ],
    treatmentKeywords: [
      "breast",
      "eye",
      "nose",
      "lifting"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Apgujeong.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Apgujeong, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Apgujeong or nearby Seoul neighborhoods.",
      "Patients interested in one-on-one customized design surgery specialist.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Apgujeong",
      "Near Apgujeong Station",
      "Breast"
    ],

    quickAnswer: "Pop may be a good option if you are looking for one-on-one customized design surgery specialist around Apgujeong. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Pop located?",
        answer: "Pop is listed around Apgujeong, Seoul, near Apgujeong Station.",
      },
      {
        question: "What is Pop known for?",
        answer: "It is described as a clinic focused on one-on-one customized design surgery specialist.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "w-gangnam",
    name: "W",
    district: "Gangnam",
    city: "Seoul",

    imageBase: "/clinics/w-gangnam",
    coverImage: "/clinics/w-gangnam/cover.jpg",

    tagline: "Delicate Breast and Body Contouring Surgery Center",
    shortDescription: "W is a Gangnam-based clinic near Gangnam Station, suitable for visitors looking for delicate breast and body contouring surgery center.",
    overview: "Led by a female director known for precise design, the clinic provides private spaces and structured management systems that prioritize patient comfort and discretion.",

    specialties: [
      "Stemcell",
      "Breast",
      "Lifting & tightening",
      "Eye",
      "Nose"
    ],
    treatmentKeywords: [
      "stemcell",
      "breast",
      "lifting",
      "eye",
      "nose"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Gangnam.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Gangnam, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Gangnam or nearby Seoul neighborhoods.",
      "Patients interested in delicate breast and body contouring surgery center.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Gangnam",
      "Near Gangnam Station",
      "Stemcell"
    ],

    quickAnswer: "W may be a good option if you are looking for delicate breast and body contouring surgery center around Gangnam. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is W located?",
        answer: "W is listed around Gangnam, Seoul, near Gangnam Station.",
      },
      {
        question: "What is W known for?",
        answer: "It is described as a clinic focused on delicate breast and body contouring surgery center.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "hershe-sinsa",
    name: "Hershe",
    district: "sinsa",
    city: "Seoul",

    imageBase: "/clinics/hershe-sinsa",
    coverImage: "/clinics/hershe-sinsa/cover.jpg",

    tagline: "Established Center for Anti-Aging and Aesthetic Surgery",
    shortDescription: "Hershe is a sinsa-based clinic near Sinsa Station, suitable for visitors looking for established center for anti-aging and aesthetic surgery.",
    overview: "Backed by over 20 years of experience, the medical team adheres strictly to proven surgical methods, delivering reliable outcomes with long-term patient satisfaction.",

    specialties: [
      "Facelift",
      "Lifting & tightening",
      "Eye",
      "Nose",
      "Facialcontour"
    ],
    treatmentKeywords: [
      "facelift",
      "lifting",
      "eye",
      "nose",
      "facialcontour"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around sinsa.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "sinsa, Seoul, South Korea",

    bestFor: [
      "Visitors staying near sinsa or nearby Seoul neighborhoods.",
      "Patients interested in established center for anti-aging and aesthetic surgery.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around sinsa",
      "Near Sinsa Station",
      "Facelift"
    ],

    quickAnswer: "Hershe may be a good option if you are looking for established center for anti-aging and aesthetic surgery around sinsa. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Hershe located?",
        answer: "Hershe is listed around sinsa, Seoul, near Sinsa Station.",
      },
      {
        question: "What is Hershe known for?",
        answer: "It is described as a clinic focused on established center for anti-aging and aesthetic surgery.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "madeyoung-gangnam",
    name: "Made Young",
    district: "Gangnam",
    city: "Seoul",

    imageBase: "/clinics/madeyoung-gangnam",
    coverImage: "/clinics/madeyoung-gangnam/cover.jpg",

    tagline: "Facelift and Lifting Specialist Focused on Youth Restoration",
    shortDescription: "Made Young is a Gangnam-based clinic near Gangnam Station, suitable for visitors looking for facelift and lifting specialist focused on youth restoration.",
    overview: "With advanced expertise in surgical lifting techniques addressing age-related sagging, the clinic prioritizes natural rejuvenation results that restore firmness without excessive tension.",

    specialties: [
      "Skincare",
      "Lifting & tightening",
      "Petite_Surgery"
    ],
    treatmentKeywords: [
      "skincare",
      "lifting",
      "petite_surgery"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Gangnam.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Gangnam, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Gangnam or nearby Seoul neighborhoods.",
      "Patients interested in facelift and lifting specialist focused on youth restoration.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Gangnam",
      "Near Gangnam Station",
      "Skincare"
    ],

    quickAnswer: "Made Young may be a good option if you are looking for facelift and lifting specialist focused on youth restoration around Gangnam. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Made Young located?",
        answer: "Made Young is listed around Gangnam, Seoul, near Gangnam Station.",
      },
      {
        question: "What is Made Young known for?",
        answer: "It is described as a clinic focused on facelift and lifting specialist focused on youth restoration.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "cdu-sinsa",
    name: "CDU",
    district: "Sinsa",
    city: "Seoul",

    imageBase: "/clinics/cdu-sinsa",
    coverImage: "/clinics/cdu-sinsa/cover.jpg",

    tagline: "Data-Driven Skin Diagnosis and Treatment Clinic",
    shortDescription: "CDU is a Sinsa-based clinic near Sinsa Station, suitable for visitors looking for data-driven skin diagnosis and treatment clinic.",
    overview: "Using advanced diagnostic equipment to objectively assess skin conditions, the clinic establishes personalized treatment plans grounded in measurable data and long-term management strategies.",

    specialties: [
      "Hairtransplant"
    ],
    treatmentKeywords: [
      "hairtransplant"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Sinsa.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Sinsa, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Sinsa or nearby Seoul neighborhoods.",
      "Patients interested in data-driven skin diagnosis and treatment clinic.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Sinsa",
      "Near Sinsa Station",
      "Hairtransplant"
    ],

    quickAnswer: "CDU may be a good option if you are looking for data-driven skin diagnosis and treatment clinic around Sinsa. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is CDU located?",
        answer: "CDU is listed around Sinsa, Seoul, near Sinsa Station.",
      },
      {
        question: "What is CDU known for?",
        answer: "It is described as a clinic focused on data-driven skin diagnosis and treatment clinic.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "maxwell-gangnam",
    name: "Maxwell",
    district: "Gangnam",
    city: "Seoul",

    imageBase: "/clinics/maxwell-gangnam",
    coverImage: "/clinics/maxwell-gangnam/cover.jpg",

    tagline: "Comprehensive Hair Loss Treatment and Transplant Center",
    shortDescription: "Maxwell is a Gangnam-based clinic near Gangnam Station, suitable for visitors looking for comprehensive hair loss treatment and transplant center.",
    overview: "As one of the largest specialized hair restoration clinics in Korea, the center provides structured scalp care systems and extensive clinical experience to address various stages of hair loss.",

    specialties: [
      "Antiaging",
      "Toning",
      "Skincare"
    ],
    treatmentKeywords: [
      "antiaging",
      "toning",
      "skincare"
    ],

    foreignerSupport: [
      "International visitors should confirm available language support before booking.",
      "Convenient for visitors looking for clinics around Gangnam.",
      "Consultation details and treatment suitability may vary by individual skin condition."
    ],

    address: "Gangnam, Seoul, South Korea",

    bestFor: [
      "Visitors staying near Gangnam or nearby Seoul neighborhoods.",
      "Patients interested in comprehensive hair loss treatment and transplant center.",
      "People who prefer a curated clinic profile before making an inquiry."
    ],

    highlights: [
      "Located around Gangnam",
      "Near Gangnam Station",
      "Antiaging"
    ],

    quickAnswer: "Maxwell may be a good option if you are looking for comprehensive hair loss treatment and transplant center around Gangnam. Confirm consultation availability and language support before booking.",

    faq: [
      {
        question: "Where is Maxwell located?",
        answer: "Maxwell is listed around Gangnam, Seoul, near Gangnam Station.",
      },
      {
        question: "What is Maxwell known for?",
        answer: "It is described as a clinic focused on comprehensive hair loss treatment and transplant center.",
      },
      {
        question: "Should international visitors confirm details before booking?",
        answer: "Yes. Language support, consultation availability, and treatment suitability should be confirmed before visiting.",
      },
    ],
  }
];

export function getClinicBySlug(slug: string) {
  return clinics.find((clinic) => clinic.slug === slug);
}

export const featuredClinics = clinics.slice(0, 6);
