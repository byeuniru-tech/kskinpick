export type TreatmentFaq = {
  question: string;
  answer: string;
};

export type Treatment = {
  slug: string;
  name: string;
  category: string;
  image: string;

  shortDescription: string;
  overview: string;
  quickAnswer: string;

  bestFor: string[];
  notIdealFor: string[];

  benefits: string[];
  downtime: string;
  sessionPlan: string;
  beforeBooking: string[];

  faqs: TreatmentFaq[];

  relatedClinicSpecialties: string[];
};

export const treatments: Treatment[] = [
  {
    slug: "rejuran",
    name: "Rejuran",
    category: "Skin Booster",
    image: "/treatments/rejuran.jpg",

    shortDescription:
      "A popular Korean skin booster used for hydration, skin texture, elasticity, and gradual skin quality improvement.",

    overview:
      "Rejuran is one of the most recognized skin booster treatments in Korea. It is commonly chosen by visitors who want healthier-looking skin rather than facial volume or dramatic reshaping. Korean clinics often recommend it for dry, thin, tired-looking, or sensitive-looking skin. It is usually planned as a gradual skin quality treatment, often over multiple sessions.",

    quickAnswer:
      "Rejuran may be suitable if you want subtle skin quality improvement, hydration, and texture refinement. It is not a filler and should not be expected to create instant lifting or volume.",

    bestFor: [
      "Dry or tired-looking skin",
      "Fine texture concerns",
      "Thin-looking or dull skin",
      "Skin barrier support",
      "Subtle anti-aging care",
      "Visitors interested in Korean skin boosters",
    ],

    notIdealFor: [
      "Patients expecting immediate lifting",
      "People looking for filler-like volume",
      "Visitors with important photos right after treatment",
      "Anyone with active skin infection or uncontrolled inflammation",
      "Patients who cannot accept temporary injection marks",
    ],

    benefits: [
      "May improve overall skin quality over time",
      "Often used for hydration and texture concerns",
      "Can be combined with laser, RF, or other skin treatments",
      "Popular among visitors seeking natural-looking skin rejuvenation",
    ],

    downtime:
      "Temporary redness, swelling, small bumps, bruising, or needle marks may appear after treatment. These effects usually improve gradually, but downtime varies by skin condition, injection technique, and treatment area.",

    sessionPlan:
      "Many Korean clinics recommend a series of sessions for visible skin quality improvement. If you are visiting Korea for a short trip, ask whether one session is meaningful for your goal or whether a treatment series is more appropriate.",

    beforeBooking: [
      "Ask what product will be used and whether it is genuine.",
      "Confirm who performs the injections.",
      "Ask how visible bumps or needle marks may be after treatment.",
      "Check whether English consultation is available.",
      "Avoid booking right before important photos or events.",
      "Do not choose only by the cheapest advertised price.",
    ],

    faqs: [
      {
        question: "Is Rejuran the same as filler?",
        answer:
          "No. Rejuran is generally used as a skin booster, while fillers are mainly used to add or restore volume.",
      },
      {
        question: "Does Rejuran lift the face?",
        answer:
          "Rejuran is not primarily a lifting treatment. If lifting is your main concern, ultrasound lifting, RF lifting, threads, or other options may be discussed.",
      },
      {
        question: "Is one Rejuran session enough?",
        answer:
          "One session may be helpful for some patients, but many clinics recommend multiple sessions for more visible skin quality improvement.",
      },
    ],

    relatedClinicSpecialties: [
      "Skin boosters",
      "Skin rejuvenation",
      "Anti-aging care",
      "Texture improvement",
      "Hydration care",
    ],
  },

  {
    slug: "juvelook",
    name: "Juvelook",
    category: "Skin Booster",
    image: "/treatments/juvelook.jpg",

    shortDescription:
      "A collagen-stimulating skin booster in Korea often used for pores, acne scars, skin texture, and fine lines.",

    overview:
      "Juvelook is a collagen-stimulating injectable treatment frequently discussed in Korean dermatology clinics. It is often chosen for enlarged pores, acne scars, uneven texture, and gradual skin quality improvement. Unlike standard fillers, Juvelook is usually selected for collagen support rather than immediate volume. Some clinics may also offer Juvelook Volume, so visitors should confirm the exact product and purpose before booking.",

    quickAnswer:
      "Juvelook may be suitable if your main concerns are pores, acne scars, uneven texture, or gradual collagen improvement. It is usually not the right choice if you want instant filler-like volume.",

    bestFor: [
      "Enlarged pores",
      "Acne scar texture",
      "Uneven skin surface",
      "Fine lines",
      "Collagen stimulation",
      "Visitors comparing Korean skin boosters",
    ],

    notIdealFor: [
      "Immediate facial volume",
      "Severe sagging",
      "Patients avoiding injections",
      "Important events immediately after treatment",
      "Active skin infection or uncontrolled acne flare",
    ],

    benefits: [
      "Popular for pores and acne scar texture",
      "Supports gradual collagen-related improvement",
      "Often combined with RF microneedling or laser treatments",
      "Can be customized by area and concern",
    ],

    downtime:
      "Temporary swelling, redness, bruising, needle marks, or small bumps may occur. Downtime depends on the injection area, amount, technique, and individual skin response.",

    sessionPlan:
      "Juvelook is often recommended as a series, especially for pores and acne scar concerns. Visitors should ask whether one session is enough or whether multiple sessions are needed for their skin goal.",

    beforeBooking: [
      "Ask whether Juvelook or Juvelook Volume will be used.",
      "Confirm whether the goal is pores, scars, fine lines, or volume-like improvement.",
      "Ask whether it will be injected manually or with a device.",
      "Check expected swelling and bump duration.",
      "Ask if it should be combined with Potenza, laser, or subcision.",
      "Confirm aftercare before travel or photos.",
    ],

    faqs: [
      {
        question: "Is Juvelook good for acne scars?",
        answer:
          "Juvelook may be recommended for certain acne scar and texture concerns, often as part of a combination plan.",
      },
      {
        question: "Is Juvelook instant?",
        answer:
          "Juvelook results are generally gradual because the treatment is commonly used for collagen-related improvement.",
      },
      {
        question: "What is the difference between Juvelook and filler?",
        answer:
          "Filler is mainly used for volume and contour. Juvelook is usually discussed for skin quality, pores, texture, and collagen support.",
      },
    ],

    relatedClinicSpecialties: [
      "Juvelook",
      "Acne scars",
      "Pores",
      "Skin boosters",
      "Collagen care",
    ],
  },

  {
    slug: "lenisna",
    name: "Lenisna",
    category: "Skin Booster",
    image: "/treatments/lenisna.jpg",

    shortDescription:
      "A collagen-focused injectable treatment often considered for skin firmness, aging concerns, and gradual rejuvenation.",

    overview:
      "Lenisna is a collagen-stimulating injectable treatment offered by some Korean aesthetic clinics. It is often discussed for facial firmness, skin aging, and gradual rejuvenation rather than instant shape change. Visitors comparing Korean skin boosters may see Lenisna recommended for collagen support and subtle anti-aging plans. The exact treatment design depends on facial condition, injection area, and clinic protocol.",

    quickAnswer:
      "Lenisna may be suitable if you want gradual firmness and collagen support. It should not be approached as a simple instant filler treatment.",

    bestFor: [
      "Facial firmness concerns",
      "Early aging signs",
      "Collagen support",
      "Subtle skin rejuvenation",
      "Visitors interested in non-surgical anti-aging",
    ],

    notIdealFor: [
      "Immediate dramatic volume",
      "One-day transformation",
      "Severe sagging",
      "Patients with active infection",
      "People who cannot accept swelling or bruising risk",
    ],

    benefits: [
      "Supports collagen-focused improvement",
      "Often used in anti-aging treatment plans",
      "Can help improve firmness gradually",
      "May be combined with lifting or skin booster programs",
    ],

    downtime:
      "Temporary swelling, tenderness, bruising, injection marks, or unevenness may occur. Downtime depends on the injected area and treatment amount.",

    sessionPlan:
      "A series may be recommended depending on skin aging, laxity, and treatment goals. Ask the clinic how long results may take to appear and whether maintenance is needed.",

    beforeBooking: [
      "Ask how Lenisna differs from filler or Juvelook.",
      "Confirm the treatment area and injection depth.",
      "Ask when results are expected to appear.",
      "Discuss swelling and bruising risk.",
      "Confirm whether the treatment suits your face shape and skin thickness.",
    ],

    faqs: [
      {
        question: "Is Lenisna a filler?",
        answer:
          "Lenisna is usually discussed as a collagen-stimulating injectable, not a standard hyaluronic acid filler.",
      },
      {
        question: "Does Lenisna give immediate results?",
        answer:
          "Some swelling may be visible early, but collagen-related improvement is generally gradual.",
      },
      {
        question: "Who is Lenisna best for?",
        answer:
          "It may be considered for patients seeking gradual firmness and anti-aging support after consultation.",
      },
    ],

    relatedClinicSpecialties: [
      "Collagen stimulation",
      "Anti-aging care",
      "Skin rejuvenation",
      "Injectables",
    ],
  },

  {
    slug: "chanel-injection",
    name: "Chanel Injection",
    category: "Skin Booster",
    image: "/treatments/chanel-injection.jpg",

    shortDescription:
      "A popular glow and hydration skin booster treatment in Korea often searched by international visitors.",

    overview:
      "Chanel Injection is a popular visitor-friendly name used in Korea for glow and hydration-focused skin booster treatments. The exact product or formula may vary by clinic, so it is important to confirm what will actually be used. It is commonly discussed for dull skin, tired-looking skin, dry skin, and pre-event glow. The treatment is usually selected for skin appearance rather than lifting or facial contouring.",

    quickAnswer:
      "Chanel Injection may be suitable if you want glow, hydration, and a refreshed skin appearance. Because the name can be used differently by clinics, always confirm the exact product.",

    bestFor: [
      "Dull skin",
      "Dry-looking skin",
      "Pre-event glow",
      "Tired-looking skin",
      "Visitors wanting a quick skin booster",
    ],

    notIdealFor: [
      "Deep wrinkles",
      "Severe acne scars",
      "Facial lifting",
      "Large volume correction",
      "Patients who do not know the exact product being used",
    ],

    benefits: [
      "Popular glow-focused treatment",
      "Often quick and visitor-friendly",
      "Can support hydration and refreshed appearance",
      "May be combined with basic skin care or laser programs",
    ],

    downtime:
      "Mild redness, swelling, small bumps, bruising, or injection marks may occur depending on the technique and product used.",

    sessionPlan:
      "Some visitors choose one session before an event, while others receive it as part of a repeated skin care program. Ask whether the expected result fits your travel schedule.",

    beforeBooking: [
      "Ask the exact product name and ingredients.",
      "Confirm whether it is injected or applied with a device.",
      "Ask how long bumps or redness may last.",
      "Check if it is safe before photos or travel.",
      "Avoid booking only because of the nickname.",
    ],

    faqs: [
      {
        question: "Why is it called Chanel Injection?",
        answer:
          "It is a popular nickname used for certain glow and hydration treatments. The exact product may vary by clinic.",
      },
      {
        question: "Is Chanel Injection good before an event?",
        answer:
          "It may be considered for glow, but injection marks or redness can occur. Ask the clinic about timing.",
      },
      {
        question: "Is it the same at every clinic?",
        answer:
          "No. Clinics may use different products or protocols, so confirmation is important.",
      },
    ],

    relatedClinicSpecialties: [
      "Glow treatment",
      "Hydration care",
      "Skin boosters",
      "Pre-event skin care",
    ],
  },

  {
    slug: "exosome",
    name: "Exosome",
    category: "Skin Booster",
    image: "/treatments/exosome.jpg",

    shortDescription:
      "A regenerative skin treatment in Korea often used with lasers, microneedling, or recovery-focused skin programs.",

    overview:
      "Exosome treatments are offered by some Korean clinics as part of regenerative skin care programs. They are often discussed for skin recovery, texture, post-laser care, and sensitive-looking skin. Application methods vary widely, including topical application after laser, microneedling-assisted delivery, or other clinic-specific protocols. Visitors should be careful to confirm the product source, application method, and whether it is appropriate for their skin concern.",

    quickAnswer:
      "Exosome may be suitable if you are interested in regenerative skin recovery or post-treatment skin support. Product quality and clinic protocol matter greatly.",

    bestFor: [
      "Post-laser recovery support",
      "Skin texture concerns",
      "Sensitive-looking skin",
      "Regenerative skin care",
      "Visitors considering premium skin programs",
    ],

    notIdealFor: [
      "Instant lifting",
      "Guaranteed scar removal",
      "Simple facial contouring",
      "Unverified products",
      "Patients expecting one-session transformation",
    ],

    benefits: [
      "Often used with laser or RF treatments",
      "May support recovery-focused skin programs",
      "Popular in premium Korean skin care packages",
      "Can be customized with other procedures",
    ],

    downtime:
      "Downtime depends on the paired treatment. Exosome applied after laser or microneedling may involve redness, dryness, peeling, or sensitivity from the main procedure.",

    sessionPlan:
      "Exosome is often planned as part of a combination program rather than a standalone treatment. Ask whether it is necessary for your concern or mainly an add-on.",

    beforeBooking: [
      "Confirm the product source and brand.",
      "Ask how the exosome treatment will be applied.",
      "Check whether it is combined with laser, RF, or microneedling.",
      "Ask what result is realistic after one session.",
      "Confirm downtime from the main paired treatment.",
    ],

    faqs: [
      {
        question: "Is Exosome always injected?",
        answer:
          "No. Application methods vary by clinic and treatment plan.",
      },
      {
        question: "Is Exosome good after laser?",
        answer:
          "Some clinics use it as part of post-laser recovery care, but the benefit depends on the product and protocol.",
      },
      {
        question: "Should I add Exosome to my treatment?",
        answer:
          "Ask whether it directly supports your concern or is simply an optional upgrade.",
      },
    ],

    relatedClinicSpecialties: [
      "Regenerative care",
      "Post-laser care",
      "Skin recovery",
      "Premium skin programs",
    ],
  },

  {
    slug: "skin-botox",
    name: "Skin Botox",
    category: "Skin Booster",
    image: "/treatments/skin-botox.jpg",

    shortDescription:
      "A micro Botox treatment in Korea used for pores, oiliness, fine lines, and smoother-looking skin.",

    overview:
      "Skin Botox uses small amounts of botulinum toxin placed superficially across the skin. In Korean clinics, it is often recommended for enlarged pores, oily skin, fine lines, and a smoother-looking surface. It is different from standard Botox used to relax larger facial muscles. The treatment can be customized by area, dose, and technique.",

    quickAnswer:
      "Skin Botox may be suitable for pores, oiliness, and fine texture concerns. It is not the same as jaw Botox or wrinkle Botox.",

    bestFor: [
      "Large pores",
      "Oily skin",
      "Fine lines",
      "Smoother-looking skin",
      "Pre-event skin refinement",
    ],

    notIdealFor: [
      "Deep wrinkles",
      "Facial volume loss",
      "Severe sagging",
      "Patients avoiding injection marks",
      "Pregnancy or breastfeeding without medical clearance",
    ],

    benefits: [
      "Quick procedure time",
      "Often used for pores and oil control",
      "Can create a smoother skin appearance",
      "Usually lighter downtime than aggressive laser treatments",
    ],

    downtime:
      "Mild redness, small bumps, bruising, tightness, or needle marks may occur temporarily.",

    sessionPlan:
      "Effects are temporary and maintenance may be needed. Ask how long results usually last for the treated area and dose.",

    beforeBooking: [
      "Ask whether it is full-face or area-based.",
      "Confirm the botulinum toxin brand.",
      "Ask about dilution and injection technique.",
      "Discuss risk of facial stiffness or expression change.",
      "Avoid scheduling immediately before important photos.",
    ],

    faqs: [
      {
        question: "Is Skin Botox the same as Botox?",
        answer:
          "It uses botulinum toxin, but the technique and purpose are different from standard muscle Botox.",
      },
      {
        question: "Can Skin Botox reduce pores?",
        answer:
          "It may improve the appearance of pores and oiliness for some patients, but results vary.",
      },
      {
        question: "Will Skin Botox affect facial expressions?",
        answer:
          "It is usually placed superficially, but expression changes can still happen depending on dose and technique.",
      },
    ],

    relatedClinicSpecialties: [
      "Skin Botox",
      "Pores",
      "Oil control",
      "Fine lines",
    ],
  },

  {
    slug: "botox",
    name: "Botox",
    category: "Injectable",
    image: "/treatments/botox.jpg",

    shortDescription:
      "A common injectable treatment in Korea for expression lines, jaw slimming, shoulder lines, and muscle-related concerns.",

    overview:
      "Botox is one of the most frequently performed aesthetic treatments in Korean clinics. It is used for expression-related wrinkles such as forehead lines, frown lines, and crow’s feet. It is also commonly used for jaw muscle slimming, shoulder Botox, calf Botox, and other muscle-related concerns. The final result depends on product type, dose, injection area, and facial anatomy.",

    quickAnswer:
      "Botox may be suitable if your concern is expression lines or muscle-related facial shape. It does not add volume and does not replace filler, lifting, or skin texture treatments.",

    bestFor: [
      "Forehead lines",
      "Frown lines",
      "Crow’s feet",
      "Jaw muscle slimming",
      "Shoulder line concerns",
      "Quick non-surgical treatment",
    ],

    notIdealFor: [
      "Facial volume loss",
      "Deep folds caused by sagging",
      "Skin texture concerns",
      "Pregnancy or breastfeeding without medical clearance",
      "Patients with certain neuromuscular conditions",
    ],

    benefits: [
      "Short procedure time",
      "Usually minimal visible downtime",
      "Can be customized by area and dose",
      "Popular and widely available in Korea",
    ],

    downtime:
      "Downtime is usually limited, but mild redness, swelling, tenderness, bruising, or temporary heaviness may occur.",

    sessionPlan:
      "Botox results are temporary. Maintenance timing depends on product, area, dose, muscle strength, and individual response.",

    beforeBooking: [
      "Ask which product brand will be used.",
      "Confirm the treatment area and expected dose.",
      "Discuss previous Botox history.",
      "Ask about aftercare such as avoiding pressure or massage.",
      "Do not choose only by the lowest price.",
    ],

    faqs: [
      {
        question: "How fast does Botox work?",
        answer:
          "Results usually appear gradually rather than immediately. Timing varies by area and individual response.",
      },
      {
        question: "Is Botox the same as filler?",
        answer:
          "No. Botox relaxes muscle activity, while filler adds or restores volume.",
      },
      {
        question: "Can Botox change my face shape?",
        answer:
          "Jaw Botox may reduce the appearance of strong masseter muscles over time, but results depend on anatomy and muscle size.",
      },
    ],

    relatedClinicSpecialties: [
      "Botox",
      "Injectables",
      "Wrinkle care",
      "Jawline slimming",
    ],
  },

  {
    slug: "filler",
    name: "Filler",
    category: "Injectable",
    image: "/treatments/filler.jpg",

    shortDescription:
      "An injectable volume treatment in Korea for lips, chin, forehead, cheeks, under-eye hollows, and facial contouring.",

    overview:
      "Filler treatments in Korea are commonly used for facial contouring, volume restoration, and feature enhancement. Popular areas include lips, chin, forehead, cheeks, nasolabial folds, temples, and under-eye hollows. The most common fillers are hyaluronic acid-based, but product selection varies by clinic. Injector skill is especially important because the same amount of filler can look very different depending on facial design and technique.",

    quickAnswer:
      "Filler may be suitable if you want volume, contour, or facial balance improvement. It is not mainly for skin texture, pores, or lifting loose skin.",

    bestFor: [
      "Facial volume loss",
      "Lip volume",
      "Chin projection",
      "Forehead contour",
      "Under-eye hollow concerns",
      "Non-surgical facial balancing",
    ],

    notIdealFor: [
      "Skin texture concerns only",
      "Severe sagging",
      "Patients wanting permanent change",
      "Unrealistic facial shape goals",
      "Active infection near the injection area",
    ],

    benefits: [
      "Immediate visible contour change",
      "Customizable by area and product",
      "Can improve facial balance without surgery",
      "Some HA fillers may be dissolvable if medically appropriate",
    ],

    downtime:
      "Swelling, bruising, tenderness, temporary asymmetry, or lumpiness can occur. Some areas, such as lips and under-eye, may swell more noticeably.",

    sessionPlan:
      "Filler is often performed in one session, but touch-up may be discussed after swelling settles. Maintenance depends on product type, area, and metabolism.",

    beforeBooking: [
      "Ask the product brand and type.",
      "Confirm injector experience with your target area.",
      "Discuss dissolving options for HA filler.",
      "Ask about vascular risk and safety protocol.",
      "Avoid overfilling for trend-based facial shapes.",
      "Check whether follow-up is available.",
    ],

    faqs: [
      {
        question: "Can filler be dissolved?",
        answer:
          "Many hyaluronic acid fillers can be dissolved, but this depends on the product and medical evaluation.",
      },
      {
        question: "Is Korean filler cheaper?",
        answer:
          "Pricing can be more accessible than in some countries, but product, injector skill, and safety should matter more than price alone.",
      },
      {
        question: "Does filler hurt?",
        answer:
          "Pain varies by area. Lips and under-eye areas may feel more sensitive than other regions.",
      },
    ],

    relatedClinicSpecialties: [
      "Fillers",
      "Facial contouring",
      "Volume design",
      "Injectables",
    ],
  },

  {
    slug: "lip-filler",
    name: "Lip Filler",
    category: "Injectable",
    image: "/treatments/lip-filler.jpg",

    shortDescription:
      "A popular Korean filler treatment for lip volume, definition, symmetry, and softer facial balance.",

    overview:
      "Lip filler is commonly chosen by visitors who want fuller lips, improved shape, better symmetry, or a more defined lip border. Korean clinics may design lips differently depending on whether the patient wants a natural, soft, doll-like, or more defined style. Because lips swell easily, timing is important for travelers. Product type, injection amount, and design taste should be discussed clearly before treatment.",

    quickAnswer:
      "Lip filler may be suitable if you want more lip volume, shape, or balance. Swelling is common, so avoid booking immediately before photos or important plans.",

    bestFor: [
      "Thin lips",
      "Lip asymmetry",
      "Lip border definition",
      "Natural volume enhancement",
      "Soft facial impression",
    ],

    notIdealFor: [
      "Active cold sores or infection",
      "Important photos right after treatment",
      "Unrealistic large-volume goals",
      "Patients who cannot accept swelling",
      "Poorly controlled allergy history without consultation",
    ],

    benefits: [
      "Immediate lip shape improvement",
      "Customizable volume and definition",
      "Can balance facial proportions",
      "Often performed quickly",
    ],

    downtime:
      "Swelling and bruising are common for several days. Lips may look larger than expected at first before settling.",

    sessionPlan:
      "Usually performed in one session. Touch-up may be discussed after swelling decreases, depending on symmetry and desired volume.",

    beforeBooking: [
      "Bring reference photos for lip style.",
      "Ask about swelling timeline.",
      "Discuss natural versus defined design.",
      "Tell the clinic if you have cold sore history.",
      "Confirm product brand and dissolving options.",
    ],

    faqs: [
      {
        question: "Will lip filler look unnatural?",
        answer:
          "It depends on design, product amount, and injector technique. Clear communication is important.",
      },
      {
        question: "How long does lip swelling last?",
        answer:
          "Swelling is usually most noticeable early, but the exact timeline varies by patient and product.",
      },
      {
        question: "Can I get lip filler during a short Korea trip?",
        answer:
          "Yes, but plan around swelling and possible bruising, especially if you have photos or events.",
      },
    ],

    relatedClinicSpecialties: [
      "Lip filler",
      "Filler design",
      "Facial balance",
      "Injectables",
    ],
  },

  {
    slug: "chin-filler",
    name: "Chin Filler",
    category: "Injectable",
    image: "/treatments/chin-filler.jpg",

    shortDescription:
      "A non-surgical filler option in Korea for chin projection, lower-face balance, and side profile improvement.",

    overview:
      "Chin filler is frequently used in Korean aesthetic clinics to improve facial proportion and side profile without surgery. It may help create a more balanced lower face, especially when the chin looks short or recessed. The result depends on skeletal structure, filler amount, and injector design. It should be planned carefully because over-projection can look unnatural from the side or front.",

    quickAnswer:
      "Chin filler may be suitable for mild chin projection or facial balance concerns. It is not a replacement for jaw surgery or permanent skeletal correction.",

    bestFor: [
      "Short chin appearance",
      "Side profile balance",
      "Lower-face proportion",
      "Mild chin projection",
      "Non-surgical contouring",
    ],

    notIdealFor: [
      "Severe skeletal concerns",
      "Major asymmetry",
      "Patients wanting permanent correction",
      "Active infection near the chin",
      "Unrealistic V-line expectations",
    ],

    benefits: [
      "Immediate contour improvement",
      "Can improve side profile balance",
      "Non-surgical option",
      "Often completed quickly",
    ],

    downtime:
      "Swelling, bruising, tenderness, temporary unevenness, or pressure sensation may occur after treatment.",

    sessionPlan:
      "Usually performed in one session. Maintenance depends on filler product, amount, facial movement, and metabolism.",

    beforeBooking: [
      "Ask which filler product and firmness will be used.",
      "Check both front and side profile design.",
      "Discuss natural versus sharper chin shape.",
      "Avoid excessive projection.",
      "Ask about dissolving options for HA filler.",
    ],

    faqs: [
      {
        question: "Is chin filler good for V-line?",
        answer:
          "It may support lower-face balance, but V-line results depend on jaw structure, muscle, fat, and overall facial anatomy.",
      },
      {
        question: "Can chin filler look unnatural?",
        answer:
          "Yes, especially if too much product is used or the design does not match the face.",
      },
      {
        question: "Is chin filler painful?",
        answer:
          "Discomfort varies, but many clinics use numbing or products containing anesthetic.",
      },
    ],

    relatedClinicSpecialties: [
      "Chin filler",
      "Profile design",
      "Facial contouring",
      "Injectables",
    ],
  },

  {
    slug: "ultherapy",
    name: "Ultherapy",
    category: "Lifting",
    image: "/treatments/ultherapy.jpg",

    shortDescription:
      "A premium ultrasound lifting treatment in Korea for mild sagging, jawline tightening, and non-surgical anti-aging.",

    overview:
      "Ultherapy is an ultrasound-based lifting treatment commonly offered by Korean dermatology and aesthetic clinics. It is often selected for mild skin laxity, jawline definition, and lower-face tightening. The treatment targets deeper layers than many surface skin treatments, but it is still non-surgical and results are generally gradual. Shot count, treatment area, pain control, and device authenticity should be confirmed before booking.",

    quickAnswer:
      "Ultherapy may be suitable for mild sagging and gradual tightening. It is not a replacement for facelift surgery and may not be ideal for severe laxity.",

    bestFor: [
      "Mild facial sagging",
      "Jawline tightening",
      "Lower-face lifting",
      "Non-surgical anti-aging",
      "Visitors seeking premium lifting",
    ],

    notIdealFor: [
      "Severe sagging",
      "Surgical-level lifting expectations",
      "Very low pain tolerance",
      "Very thin faces needing volume",
      "Patients expecting guaranteed instant results",
    ],

    benefits: [
      "Non-surgical lifting approach",
      "Often used for jawline and lower-face concerns",
      "Gradual tightening effect",
      "Usually no major surface wound",
    ],

    downtime:
      "Visible downtime is often limited, but tenderness, swelling, temporary redness, sensitivity, or soreness can occur.",

    sessionPlan:
      "Many patients receive Ultherapy as a single session with possible maintenance later. The plan depends on laxity, shot count, age, facial structure, and treatment area.",

    beforeBooking: [
      "Ask how many shots are included.",
      "Confirm which areas will be treated.",
      "Ask whether the device is authentic Ultherapy.",
      "Discuss pain control options.",
      "Ask whether Ultherapy or another lifting device better fits your concern.",
    ],

    faqs: [
      {
        question: "Is Ultherapy painful?",
        answer:
          "Pain level varies. Ask about numbing, pain control, and whether the clinic adjusts intensity by area.",
      },
      {
        question: "Is Ultherapy instant?",
        answer:
          "Some people notice early tightness, but lifting-related results are usually discussed as gradual.",
      },
      {
        question: "Is Ultherapy good for severe sagging?",
        answer:
          "It is usually better for mild to moderate concerns. Severe sagging may require other treatments or surgical consultation.",
      },
    ],

    relatedClinicSpecialties: [
      "Ultrasound lifting",
      "Jawline care",
      "Anti-aging care",
      "Premium lifting",
    ],
  },

  {
    slug: "thermage",
    name: "Thermage",
    category: "Lifting",
    image: "/treatments/thermage.jpg",

    shortDescription:
      "A premium radiofrequency tightening treatment in Korea for skin firmness, elasticity, and anti-aging maintenance.",

    overview:
      "Thermage is a premium RF tightening treatment often chosen for skin firmness, elasticity, and anti-aging maintenance. In Korean clinics, it is commonly discussed for patients who want tighter, firmer-looking skin without surgery. It is different from ultrasound lifting treatments such as Ultherapy, which are often discussed for deeper lifting. Thermage planning usually depends on shot count, treatment area, skin thickness, and aging pattern.",

    quickAnswer:
      "Thermage may be suitable if your main concern is skin firmness and elasticity. It is not mainly for fat reduction, facial volume, or severe sagging.",

    bestFor: [
      "Skin firmness",
      "Elasticity concerns",
      "Fine laxity",
      "Anti-aging maintenance",
      "Patients wanting premium RF tightening",
    ],

    notIdealFor: [
      "Severe sagging",
      "Immediate dramatic lift",
      "Deep volume loss",
      "Major fat reduction goals",
      "Patients expecting surgical-level results",
    ],

    benefits: [
      "Premium RF-based tightening",
      "Often minimal visible downtime",
      "Popular for anti-aging maintenance",
      "Can be used on face and selected body areas depending on clinic",
    ],

    downtime:
      "Mild redness, swelling, warmth, or tenderness may occur temporarily. Most patients do not experience aggressive surface wounds.",

    sessionPlan:
      "Thermage is often performed as a single premium session with maintenance later. Ask how long results may take and whether repeat sessions are recommended.",

    beforeBooking: [
      "Ask how many shots are included.",
      "Confirm authentic device and tip use.",
      "Compare Thermage with Ultherapy or Oligio for your concern.",
      "Discuss pain level and comfort options.",
      "Ask whether your face needs tightening, lifting, or volume support.",
    ],

    faqs: [
      {
        question: "Thermage or Ultherapy?",
        answer:
          "Thermage is often discussed for firmness and elasticity, while Ultherapy is often discussed for deeper lifting.",
      },
      {
        question: "Does Thermage reduce fat?",
        answer:
          "Thermage is generally selected for tightening, not as a primary fat reduction treatment.",
      },
      {
        question: "Is Thermage worth it in Korea?",
        answer:
          "It can be worth considering if you want premium RF tightening, but shot count, device authenticity, and clinic experience matter.",
      },
    ],

    relatedClinicSpecialties: [
      "Thermage",
      "RF lifting",
      "Skin tightening",
      "Anti-aging care",
    ],
  },

  {
    slug: "oligio",
    name: "Oligio",
    category: "Lifting",
    image: "/treatments/oligio.jpg",

    shortDescription:
      "A Korean RF lifting treatment popular for firmness, elasticity, and non-surgical facial tightening.",

    overview:
      "Oligio is a Korean radiofrequency lifting device commonly offered for facial tightening and elasticity improvement. It is often compared with Thermage because both are RF-based, but pricing, protocol, device characteristics, and patient experience can differ. Oligio is popular among patients looking for a Korean RF option with relatively accessible pricing. It is usually selected for mild laxity, firmness, and maintenance care.",

    quickAnswer:
      "Oligio may be suitable if you want Korean RF tightening for mild laxity or elasticity concerns. It is not usually selected for severe sagging or major contour change.",

    bestFor: [
      "Mild skin laxity",
      "Elasticity concerns",
      "Facial firmness",
      "Preventive anti-aging",
      "Visitors comparing Korean lifting devices",
    ],

    notIdealFor: [
      "Severe sagging",
      "Surgical-level lifting",
      "Major fat reduction",
      "Very loose skin",
      "Patients expecting instant dramatic change",
    ],

    benefits: [
      "Popular Korean RF tightening option",
      "Often more accessible than premium imported devices",
      "Usually quick recovery",
      "Good for maintenance-style skin tightening",
    ],

    downtime:
      "Mild redness, warmth, tenderness, or temporary swelling may occur after treatment.",

    sessionPlan:
      "Oligio may be performed once or repeated depending on age, laxity, and clinic protocol. Maintenance sessions may be discussed for ongoing firmness.",

    beforeBooking: [
      "Ask how many shots are included.",
      "Confirm target areas.",
      "Compare Oligio with Thermage or Ultherapy.",
      "Ask about pain level and numbing.",
      "Discuss whether your concern is firmness, lifting, or fat.",
    ],

    faqs: [
      {
        question: "Is Oligio similar to Thermage?",
        answer:
          "Both are RF-based tightening options, but device, protocol, pricing, and treatment feel may differ.",
      },
      {
        question: "Is Oligio popular in Korea?",
        answer:
          "Yes, it is commonly offered as a Korean RF lifting and tightening option.",
      },
      {
        question: "Does Oligio have downtime?",
        answer:
          "Downtime is usually mild, but redness, warmth, or tenderness can occur.",
      },
    ],

    relatedClinicSpecialties: [
      "Oligio",
      "RF lifting",
      "Skin tightening",
      "Korean lifting",
    ],
  },

  {
    slug: "shurink",
    name: "Shurink",
    category: "Lifting",
    image: "/treatments/shurink.jpg",

    shortDescription:
      "A widely available Korean ultrasound lifting treatment often used for V-line, jawline, and lower-face tightening.",

    overview:
      "Shurink is a popular Korean ultrasound lifting treatment commonly offered at aesthetic clinics. It is often selected for lower-face tightening, jawline care, and V-line concerns. Compared with premium ultrasound devices, Shurink is often positioned as a more accessible option, but results depend heavily on shot count, treatment depth, and technique. It should be planned carefully for thin faces because excessive tightening or volume loss concerns may occur.",

    quickAnswer:
      "Shurink may be suitable if you want a Korean ultrasound lifting option for mild sagging or jawline care. It is not a guaranteed instant V-line treatment.",

    bestFor: [
      "Lower-face tightening",
      "Jawline care",
      "Mild sagging",
      "V-line concerns",
      "Visitors seeking accessible Korean lifting",
    ],

    notIdealFor: [
      "Severe skin laxity",
      "Guaranteed instant lifting expectations",
      "Very thin faces needing volume",
      "Patients with very low pain tolerance",
      "People wanting surgical-level results",
    ],

    benefits: [
      "Widely available in Korea",
      "Often more accessible pricing",
      "Can target lower face and jawline",
      "Quick non-surgical procedure",
    ],

    downtime:
      "Temporary tenderness, redness, swelling, or soreness may occur. Some patients may feel tightness or sensitivity after treatment.",

    sessionPlan:
      "Shurink is often repeated or maintained depending on shot count and treatment strength. Ask whether one session is enough for your concern.",

    beforeBooking: [
      "Ask how many shots are included.",
      "Confirm treatment depth and cartridges.",
      "Discuss whether your face is suitable for ultrasound lifting.",
      "Avoid excessive treatment on thin or hollow areas.",
      "Ask about pain control options.",
    ],

    faqs: [
      {
        question: "Is Shurink cheaper than Ultherapy?",
        answer:
          "It is often positioned as a more accessible ultrasound lifting option, but pricing varies by clinic and shot count.",
      },
      {
        question: "Is Shurink good for V-line?",
        answer:
          "It may help with lower-face tightening, but V-line results depend on fat, muscle, bone structure, and skin laxity.",
      },
      {
        question: "Does Shurink hurt?",
        answer:
          "Discomfort varies by intensity, area, and pain tolerance.",
      },
    ],

    relatedClinicSpecialties: [
      "Shurink",
      "Korean lifting",
      "V-line care",
      "Ultrasound lifting",
    ],
  },

  {
    slug: "inmode",
    name: "InMode",
    category: "Lifting",
    image: "/treatments/inmode.jpg",

    shortDescription:
      "A contouring and tightening treatment in Korea commonly used for lower face, jawline, and double chin concerns.",

    overview:
      "InMode is a popular treatment in Korea for facial contouring, tightening, and lower-face fat-related concerns. It is commonly discussed for double chin, jawline definition, lower-face heaviness, and mild laxity. Some modes may create bruising or swelling, especially when higher intensity is used. Visitors should ask which InMode mode will be used and whether their face type is suitable.",

    quickAnswer:
      "InMode may be suitable if your concern is lower-face contour, double chin, or jawline definition. It may cause bruising, so timing matters for travelers.",

    bestFor: [
      "Double chin",
      "Lower-face heaviness",
      "Jawline definition",
      "Mild fat and laxity",
      "Facial contour maintenance",
    ],

    notIdealFor: [
      "Very thin faces",
      "No downtime tolerance",
      "Severe sagging",
      "Patients expecting bone-structure change",
      "Important events immediately after treatment",
    ],

    benefits: [
      "Targets contour and firmness",
      "Popular for jawline and double chin care",
      "Can be combined with lifting programs",
      "Non-surgical option for selected lower-face concerns",
    ],

    downtime:
      "Redness, swelling, tenderness, warmth, or bruising may occur. Bruising risk should be discussed before booking.",

    sessionPlan:
      "InMode is often planned as multiple sessions depending on fat, laxity, and treatment intensity. Maintenance may be recommended.",

    beforeBooking: [
      "Ask which InMode mode will be used.",
      "Discuss bruising risk clearly.",
      "Confirm the target area.",
      "Ask whether your face is too thin for the treatment.",
      "Avoid booking right before photos or meetings.",
    ],

    faqs: [
      {
        question: "Can InMode cause bruising?",
        answer:
          "Yes. Bruising can occur depending on the mode, intensity, and treated area.",
      },
      {
        question: "Is InMode good for double chin?",
        answer:
          "It may be considered for selected double chin and lower-face contour concerns after consultation.",
      },
      {
        question: "Is InMode a lifting treatment?",
        answer:
          "It is often used for contouring and tightening, but it is not the same as surgical lifting.",
      },
    ],

    relatedClinicSpecialties: [
      "InMode",
      "Double chin",
      "Jawline contour",
      "Facial tightening",
    ],
  },

  {
    slug: "thread-lift",
    name: "Thread Lift",
    category: "Lifting",
    image: "/treatments/thread-lift.jpg",

    shortDescription:
      "A non-surgical lifting treatment in Korea using threads for facial repositioning, jawline support, and sagging concerns.",

    overview:
      "Thread lift is a non-surgical lifting option used for selected sagging concerns. In Korean clinics, it may be recommended for lower-face sagging, jawline support, cheek repositioning, or facial contour improvement. Compared with device lifting, thread lift can create a more direct lifting effect, but it also has more visible recovery considerations. Doctor experience, thread type, thread number, and facial anatomy are especially important.",

    quickAnswer:
      "Thread lift may be suitable if you want more visible lifting than device treatments without surgery. It requires careful planning because swelling, bruising, dimpling, or asymmetry can occur.",

    bestFor: [
      "Lower-face sagging",
      "Jawline support",
      "Cheek repositioning",
      "Non-surgical facial lifting",
      "Patients wanting more visible lift than devices",
    ],

    notIdealFor: [
      "Severe skin laxity requiring surgery",
      "Very thin skin",
      "Patients avoiding swelling or bruising",
      "Unrealistic lifting expectations",
      "Active infection or poor healing condition",
    ],

    benefits: [
      "Can create a more direct lifting effect",
      "Non-surgical option",
      "Can support jawline and cheek contour",
      "Often combined with fillers or skin tightening when appropriate",
    ],

    downtime:
      "Swelling, bruising, dimpling, tightness, tenderness, asymmetry, or discomfort may occur. Recovery varies more than with simple device treatments.",

    sessionPlan:
      "Thread lift is usually performed as one procedure, with maintenance depending on thread type, facial movement, aging, and individual response.",

    beforeBooking: [
      "Ask thread type and number.",
      "Confirm doctor experience with thread lifting.",
      "Discuss asymmetry, dimpling, and recovery risks.",
      "Ask how long swelling may last.",
      "Avoid booking right before travel photos or events.",
      "Ask whether device lifting would be safer for your concern.",
    ],

    faqs: [
      {
        question: "Is thread lift permanent?",
        answer:
          "No. Results are temporary and vary by thread type, technique, and individual response.",
      },
      {
        question: "Is thread lift better than Ultherapy?",
        answer:
          "Thread lift and Ultherapy work differently. Threads may provide more direct repositioning, while Ultherapy is a device-based tightening treatment.",
      },
      {
        question: "Can thread lift look unnatural?",
        answer:
          "It can if overdone or poorly planned. Facial anatomy and doctor technique are important.",
      },
    ],

    relatedClinicSpecialties: [
      "Thread lifting",
      "Facial lifting",
      "Jawline care",
      "Anti-aging care",
    ],
  },

  {
    slug: "potenza",
    name: "Potenza",
    category: "Acne & Pores",
    image: "/treatments/potenza.jpg",

    shortDescription:
      "A popular RF microneedling treatment in Korea for acne scars, pores, skin texture, and mild tightening.",

    overview:
      "Potenza is one of the most searched RF microneedling treatments in Korean dermatology clinics. It is commonly used for enlarged pores, acne scars, uneven texture, oiliness, and mild skin tightening. Different tips and settings may be used depending on the concern. Potenza is often combined with skin boosters, regenerative treatments, or acne scar programs.",

    quickAnswer:
      "Potenza may be suitable if your main concerns are pores, acne scars, texture, or mild tightening. Expect redness and possible downtime depending on intensity.",

    bestFor: [
      "Acne scars",
      "Large pores",
      "Uneven texture",
      "Oily skin",
      "Mild skin tightening",
      "Combination skin programs",
    ],

    notIdealFor: [
      "Active severe acne flare",
      "No downtime before events",
      "Very sensitive uncontrolled skin",
      "Patients expecting one-session scar removal",
      "Active infection or open wounds",
    ],

    benefits: [
      "Popular pore and texture treatment",
      "Can support acne scar improvement over time",
      "Customizable by tip and depth",
      "Often combined with boosters for stronger programs",
    ],

    downtime:
      "Redness, swelling, dryness, peeling, pinpoint marks, or temporary sensitivity may occur. Downtime increases with stronger settings.",

    sessionPlan:
      "Potenza is usually recommended as a series for scars, pores, or texture. The number of sessions depends on scar depth, pore size, and skin response.",

    beforeBooking: [
      "Ask which tip will be used.",
      "Confirm depth and intensity.",
      "Ask whether skin booster is included.",
      "Discuss downtime before travel.",
      "Check whether active acne should be treated first.",
      "Ask if Potenza or Sylfirm X better fits your concern.",
    ],

    faqs: [
      {
        question: "Is Potenza good for acne scars?",
        answer:
          "It is commonly used for acne scar and texture concerns, often over multiple sessions.",
      },
      {
        question: "Does Potenza hurt?",
        answer:
          "Discomfort varies by depth and intensity. Numbing is commonly used.",
      },
      {
        question: "Can Potenza be combined with Juvelook?",
        answer:
          "Some clinics combine RF microneedling with skin boosters, but the plan should be customized.",
      },
    ],

    relatedClinicSpecialties: [
      "Potenza",
      "Acne scars",
      "Pores",
      "RF microneedling",
    ],
  },

  {
    slug: "sylfirm-x",
    name: "Sylfirm X",
    category: "Acne & Pores",
    image: "/treatments/sylfirm-x.jpg",

    shortDescription:
      "An RF microneedling treatment in Korea used for pores, redness-prone skin, texture, and skin rejuvenation.",

    overview:
      "Sylfirm X is an RF microneedling device used in Korean clinics for pores, texture, redness-prone skin, and skin rejuvenation programs. It is often compared with Potenza, but clinics may choose one over the other depending on skin sensitivity, redness, pore type, and treatment goal. It can be combined with topical or injectable skin boosters depending on protocol. A proper diagnosis is important because redness, acne, pigmentation, and barrier damage require different treatment plans.",

    quickAnswer:
      "Sylfirm X may be suitable for pores, texture, and redness-prone skin after consultation. It is not a simple brightening laser or instant scar solution.",

    bestFor: [
      "Large pores",
      "Redness-prone skin",
      "Uneven texture",
      "Skin rejuvenation",
      "Mild acne scar support",
    ],

    notIdealFor: [
      "No downtime tolerance",
      "Active infection",
      "Severe active acne flare",
      "Immediate brightening only",
      "Patients expecting complete scar removal",
    ],

    benefits: [
      "RF microneedling option for pores and texture",
      "Often discussed for redness-prone skin",
      "Can be combined with booster programs",
      "Customizable by depth and intensity",
    ],

    downtime:
      "Redness, swelling, dryness, small marks, or temporary sensitivity may occur after treatment.",

    sessionPlan:
      "Sylfirm X is often planned as a series depending on redness, pores, and texture concerns. Combination care may be recommended.",

    beforeBooking: [
      "Ask why Sylfirm X is chosen over Potenza.",
      "Confirm downtime and aftercare.",
      "Discuss skin sensitivity and redness history.",
      "Ask whether booster is included.",
      "Avoid strong exfoliation before treatment.",
    ],

    faqs: [
      {
        question: "Sylfirm X or Potenza?",
        answer:
          "Both are RF microneedling options. The better choice depends on skin concern, sensitivity, and clinic protocol.",
      },
      {
        question: "Is Sylfirm X good for redness?",
        answer:
          "It may be considered for redness-prone skin, but the cause of redness should be diagnosed first.",
      },
      {
        question: "How many sessions are needed?",
        answer:
          "Multiple sessions are often recommended for pores, texture, and redness-related concerns.",
      },
    ],

    relatedClinicSpecialties: [
      "Sylfirm X",
      "RF microneedling",
      "Redness care",
      "Pores",
    ],
  },

  {
    slug: "pico-fractional",
    name: "Pico Fractional",
    category: "Acne & Pores",
    image: "/treatments/pico-fractional.jpg",

    shortDescription:
      "A fractional laser treatment in Korea for pores, uneven texture, acne scar support, and skin remodeling.",

    overview:
      "Pico Fractional is a laser approach used for surface texture, pores, acne scar support, and skin remodeling. It is different from gentle pico toning used mainly for pigmentation or tone. Korean clinics may recommend Pico Fractional when the goal is improving uneven texture or shallow acne scar appearance. Downtime and intensity can vary significantly depending on settings.",

    quickAnswer:
      "Pico Fractional may be suitable for pores and texture concerns. It usually requires downtime and repeated sessions for scar-related improvement.",

    bestFor: [
      "Uneven skin texture",
      "Large pores",
      "Shallow acne scar support",
      "Skin remodeling",
      "Dull rough surface",
    ],

    notIdealFor: [
      "No redness tolerance",
      "Active infection",
      "Deep scars needing subcision",
      "Recently tanned skin",
      "Patients expecting instant smooth skin",
    ],

    benefits: [
      "Targets surface texture more directly than simple toning",
      "Can support pore and scar programs",
      "Often paired with regenerative care",
      "Customizable by intensity",
    ],

    downtime:
      "Redness, dryness, peeling, roughness, temporary darkening, or sensitivity can occur depending on settings.",

    sessionPlan:
      "Multiple sessions are commonly needed for pores and scars. Deeper acne scars may require combination treatment rather than Pico Fractional alone.",

    beforeBooking: [
      "Ask expected downtime by intensity.",
      "Confirm whether it is fractional mode or simple pico toning.",
      "Discuss pigmentation risk.",
      "Ask whether your scar type needs subcision or RF microneedling.",
      "Plan sun protection carefully after treatment.",
    ],

    faqs: [
      {
        question: "Is Pico Fractional the same as Pico Laser?",
        answer:
          "It is a fractional approach often used for texture, while standard Pico Laser may be used for pigmentation or toning.",
      },
      {
        question: "Can Pico Fractional remove acne scars?",
        answer:
          "It may improve texture and shallow scars, but deeper scars usually need combination treatment.",
      },
      {
        question: "Is there downtime?",
        answer:
          "Yes. Downtime depends on settings and can include redness, dryness, peeling, or sensitivity.",
      },
    ],

    relatedClinicSpecialties: [
      "Pico Fractional",
      "Texture care",
      "Pores",
      "Laser resurfacing",
    ],
  },

  {
    slug: "acne-scar-treatment",
    name: "Acne Scar Treatment",
    category: "Acne & Pores",
    image: "/treatments/acne-scar-treatment.jpg",

    shortDescription:
      "Customized Korean acne scar treatment plans using lasers, RF microneedling, subcision, boosters, and regenerative care.",

    overview:
      "Acne scar treatment in Korea is usually not a single treatment. Clinics often combine RF microneedling, fractional lasers, subcision, skin boosters, regenerative products, and acne control depending on scar type. Rolling scars, boxcar scars, ice pick scars, post-acne redness, and post-inflammatory pigmentation all require different strategies. International visitors should be cautious with one-size-fits-all packages and ask for a scar type diagnosis.",

    quickAnswer:
      "Acne scar treatment may be suitable if you want a customized plan for pitted scars, pores, and uneven texture. One session is rarely enough for deeper scars.",

    bestFor: [
      "Pitted acne scars",
      "Rolling scars",
      "Boxcar scars",
      "Large pores",
      "Uneven texture",
      "Post-acne skin concerns",
    ],

    notIdealFor: [
      "Active uncontrolled acne",
      "Expecting complete scar removal",
      "Short trips with no downtime",
      "Patients seeking one universal treatment",
      "Skin that is currently infected or severely irritated",
    ],

    benefits: [
      "Can target scar depth and texture together",
      "Allows combination treatment planning",
      "May improve pores and surface irregularity",
      "Can be customized by scar type",
    ],

    downtime:
      "Downtime varies widely depending on treatment combination. Redness, swelling, bruising, scabbing, dryness, peeling, or temporary darkening may occur.",

    sessionPlan:
      "Acne scar improvement usually requires multiple sessions. The number of sessions depends on scar type, scar depth, skin type, acne activity, and downtime tolerance.",

    beforeBooking: [
      "Ask what type of acne scars you have.",
      "Confirm the exact treatment combination.",
      "Ask whether active acne should be treated first.",
      "Check downtime carefully before travel.",
      "Avoid packages that promise complete scar removal.",
      "Ask whether subcision is needed for deeper scars.",
    ],

    faqs: [
      {
        question: "Can acne scars disappear completely?",
        answer:
          "Complete removal is uncommon. The goal is usually visible improvement over multiple sessions.",
      },
      {
        question: "What is the best acne scar treatment in Korea?",
        answer:
          "There is no single best treatment. The right plan depends on scar type, depth, skin condition, and downtime tolerance.",
      },
      {
        question: "Is one session enough for acne scars?",
        answer:
          "For deeper scars, one session is rarely enough. Multiple treatments are usually needed.",
      },
    ],

    relatedClinicSpecialties: [
      "Acne scars",
      "Subcision",
      "RF microneedling",
      "Laser resurfacing",
      "Pore care",
    ],
  },

  {
    slug: "pico-laser",
    name: "Pico Laser",
    category: "Pigmentation",
    image: "/treatments/pico-laser.jpg",

    shortDescription:
      "A popular Korean laser treatment for pigmentation, freckles, dull tone, melasma support, and selected tattoo removal.",

    overview:
      "Pico Laser is widely used in Korean dermatology clinics for pigmentation, freckles, dull skin tone, and selected tattoo removal cases. It can be used in different modes, including toning-style treatments and more targeted pigment approaches. For melasma-prone skin, careful diagnosis and conservative settings are important because aggressive treatment may worsen pigmentation. Visitors should ask whether the goal is brightening, spot treatment, melasma care, or tattoo removal.",

    quickAnswer:
      "Pico Laser may be suitable for pigmentation, freckles, and uneven tone. Multiple sessions are usually needed, and melasma requires careful planning.",

    bestFor: [
      "Pigmentation",
      "Freckles",
      "Dull skin tone",
      "Uneven tone",
      "Melasma support after diagnosis",
      "Tattoo removal consultation",
    ],

    notIdealFor: [
      "Instant full pigment clearance",
      "Uncontrolled melasma",
      "Recently tanned skin",
      "No sun protection habits",
      "Active irritation or infection",
    ],

    benefits: [
      "Popular pigment laser in Korea",
      "Can be used for tone or spot concerns",
      "Short treatment time in many cases",
      "Often part of brightening programs",
    ],

    downtime:
      "Mild redness, dryness, temporary darkening, sensitivity, or small scabs may occur depending on settings and pigment type.",

    sessionPlan:
      "Pigmentation and tone concerns usually require repeated sessions. The interval and number of sessions depend on pigment depth, diagnosis, and skin reaction.",

    beforeBooking: [
      "Ask whether the treatment is toning or spot-focused.",
      "Discuss melasma risk before starting.",
      "Confirm expected number of sessions.",
      "Use strict sun protection before and after treatment.",
      "Ask whether IPL, Excel V, or other lasers are more suitable.",
    ],

    faqs: [
      {
        question: "Is Pico Laser good for melasma?",
        answer:
          "It may be considered, but melasma needs careful diagnosis and conservative planning.",
      },
      {
        question: "How many Pico Laser sessions are needed?",
        answer:
          "Multiple sessions are usually needed for pigmentation and tone improvement.",
      },
      {
        question: "Is Pico Laser painful?",
        answer:
          "Discomfort is usually tolerable for many patients, but it depends on mode, area, and settings.",
      },
    ],

    relatedClinicSpecialties: [
      "Pico Laser",
      "Pigmentation",
      "Brightening",
      "Laser care",
    ],
  },

  {
    slug: "laser-toning",
    name: "Laser Toning",
    category: "Pigmentation",
    image: "/treatments/laser-toning.jpg",

    shortDescription:
      "A gentle Korean laser treatment approach for gradual skin tone improvement, pigmentation care, and brightening maintenance.",

    overview:
      "Laser toning is a common treatment category in Korean skin clinics for gradual tone improvement and pigmentation support. It is often used for dullness, mild pigmentation, uneven tone, and maintenance brightening. Unlike aggressive resurfacing lasers, toning is usually planned as a repeated low-downtime treatment. However, not every pigmentation concern responds the same way, so diagnosis is still important.",

    quickAnswer:
      "Laser toning may be suitable for gradual brightening and mild pigmentation concerns. It usually requires repeated sessions rather than one dramatic treatment.",

    bestFor: [
      "Dull skin tone",
      "Mild pigmentation",
      "Uneven tone",
      "Maintenance brightening",
      "Visitors wanting low-downtime laser care",
    ],

    notIdealFor: [
      "Deep pigmentation expecting instant result",
      "No repeat sessions",
      "Uncontrolled melasma",
      "Recently tanned skin",
      "Patients wanting texture resurfacing",
    ],

    benefits: [
      "Usually low downtime",
      "Commonly available in Korean clinics",
      "Can support gradual brightening",
      "Often included in maintenance skin programs",
    ],

    downtime:
      "Mild redness, dryness, warmth, or temporary sensitivity may occur, but downtime is often lighter than stronger laser treatments.",

    sessionPlan:
      "Laser toning is usually performed repeatedly over several sessions. Ask whether the clinic recommends weekly, biweekly, or monthly intervals.",

    beforeBooking: [
      "Ask what laser device will be used.",
      "Confirm number of sessions recommended.",
      "Discuss whether your pigmentation is suitable for toning.",
      "Ask about sunscreen and aftercare.",
      "Avoid expecting instant whitening from one session.",
    ],

    faqs: [
      {
        question: "Is laser toning enough for pigmentation?",
        answer:
          "It depends on pigment type. Some cases need combination treatment or a different laser approach.",
      },
      {
        question: "Is laser toning good for foreigners visiting Korea?",
        answer:
          "It can be convenient because downtime is usually low, but multiple sessions may be needed.",
      },
      {
        question: "Can laser toning make pigmentation worse?",
        answer:
          "If melasma or sensitive skin is treated too aggressively, pigmentation may worsen. Proper diagnosis matters.",
      },
    ],

    relatedClinicSpecialties: [
      "Laser toning",
      "Brightening",
      "Pigmentation care",
      "Low-downtime laser",
    ],
  },

  {
    slug: "ipl",
    name: "IPL",
    category: "Pigmentation",
    image: "/treatments/ipl.jpg",

    shortDescription:
      "A light-based treatment in Korea used for selected pigmentation, redness, sun spots, and overall tone improvement.",

    overview:
      "IPL is a light-based treatment used for broad skin tone concerns, selected pigmentation, redness, and sun-related spots. It is different from a single-wavelength laser and may treat a wider surface area. Korean clinics may recommend IPL for patients with mixed tone and redness concerns, but it is not suitable for every skin type or pigment condition. Recently tanned or highly sensitive skin should be evaluated carefully.",

    quickAnswer:
      "IPL may be suitable for broad tone, sun spots, and redness concerns after diagnosis. It is not always ideal for deep melasma or darker, recently tanned skin.",

    bestFor: [
      "Sun spots",
      "Diffuse redness",
      "Uneven tone",
      "Mild pigmentation",
      "General brightening",
    ],

    notIdealFor: [
      "Deep melasma",
      "Recently tanned skin",
      "Very sensitive irritated skin",
      "Patients expecting spot-perfect clearance",
      "Texture scars or deep acne scars",
    ],

    benefits: [
      "Covers broader skin tone concerns",
      "Can target redness and pigmentation together",
      "Often quick treatment time",
      "May be used in brightening programs",
    ],

    downtime:
      "Redness, warmth, dryness, temporary darkening of spots, or mild peeling may occur after treatment.",

    sessionPlan:
      "IPL is usually performed in a series depending on pigmentation, redness, and skin tone goals.",

    beforeBooking: [
      "Ask whether IPL fits your skin type.",
      "Avoid tanning before treatment.",
      "Confirm whether your concern is pigment, redness, or both.",
      "Ask about temporary darkening of spots.",
      "Follow sunscreen instructions carefully.",
    ],

    faqs: [
      {
        question: "Is IPL a laser?",
        answer:
          "IPL is light-based but different from a single-wavelength laser.",
      },
      {
        question: "Is IPL good for pigmentation?",
        answer:
          "It may help selected pigment concerns, but deep melasma or certain pigment types may need other treatments.",
      },
      {
        question: "Does IPL have downtime?",
        answer:
          "Downtime is usually mild, but redness, warmth, dryness, or darkening of spots can occur.",
      },
    ],

    relatedClinicSpecialties: [
      "IPL",
      "Redness",
      "Pigmentation",
      "Brightening care",
    ],
  },

  {
    slug: "excel-v",
    name: "Excel V",
    category: "Pigmentation",
    image: "/treatments/excel-v.jpg",

    shortDescription:
      "A vascular laser treatment in Korea commonly used for facial redness, visible vessels, flushing, and rosacea-like skin concerns.",

    overview:
      "Excel V is a vascular laser treatment often offered at Korean dermatology clinics for redness-related skin concerns. It is commonly considered for visible capillaries, facial flushing, post-acne redness, rosacea-like redness, and uneven tone caused by vascular issues. Unlike general brightening lasers, Excel V is usually selected when the main concern is redness or visible vessels rather than simple pigmentation. For international visitors, proper diagnosis is important because redness can come from sensitivity, inflammation, acne, pigmentation, or vascular changes.",

    quickAnswer:
      "Excel V may be suitable if your main concern is facial redness, visible capillaries, flushing, or post-acne redness. It is not usually the first choice for deep acne scars, volume loss, or simple brightening without vascular concerns.",

    bestFor: [
      "Facial redness",
      "Visible capillaries or broken vessels",
      "Post-acne redness",
      "Rosacea-like redness",
      "Flushing-prone skin",
      "Uneven tone related to vascular concerns",
    ],

    notIdealFor: [
      "Deep acne scars",
      "Volume loss or facial contour concerns",
      "Pigmentation without redness or vascular issues",
      "Patients expecting instant full redness removal",
      "Recently tanned or irritated skin without consultation",
    ],

    benefits: [
      "Targets redness and visible vessels more directly than general toning lasers",
      "Often used for sensitive-looking or flushing-prone skin",
      "Can be part of a redness, acne mark, or tone correction program",
      "Usually does not require long recovery compared with aggressive resurfacing lasers",
    ],

    downtime:
      "Downtime is usually mild, but temporary redness, warmth, swelling, sensitivity, or darkening of treated vessels can occur. Some patients may look more red immediately after treatment.",

    sessionPlan:
      "Many patients need multiple sessions because redness and vascular concerns usually improve gradually. The number of sessions depends on redness depth, vessel visibility, skin sensitivity, and whether Excel V is combined with other treatments.",

    beforeBooking: [
      "Ask whether your redness is vascular, inflammatory, acne-related, or pigmentation-related.",
      "Confirm whether Excel V is the main treatment or part of a combination plan.",
      "Tell the clinic if you have rosacea, very sensitive skin, recent laser history, or frequent flushing.",
      "Avoid strong exfoliation, tanning, or irritating skin care before treatment.",
      "Check whether you should avoid heat, sauna, alcohol, or intense exercise after treatment.",
      "If you are traveling, ask how red your skin may look for the next few days.",
    ],

    faqs: [
      {
        question: "Is Excel V for pigmentation or redness?",
        answer:
          "Excel V is most commonly discussed for redness and vascular concerns. If your main concern is brown pigmentation, Pico Laser, laser toning, or IPL may be discussed instead.",
      },
      {
        question: "Can Excel V help post-acne redness?",
        answer:
          "It may be considered for post-acne redness, especially when the redness is vascular rather than active acne or brown pigmentation.",
      },
      {
        question: "How many Excel V sessions do I need in Korea?",
        answer:
          "The number of sessions varies. Visible vessels, flushing-prone skin, or rosacea-like concerns often require repeated treatment and maintenance.",
      },
    ],

    relatedClinicSpecialties: [
      "Redness care",
      "Vascular laser",
      "Post-acne redness",
      "Rosacea-like skin",
      "Sensitive skin programs",
    ],
  },
];

export const treatmentCategories = [
  "Skin Booster",
  "Injectable",
  "Lifting",
  "Acne & Pores",
  "Pigmentation",
];

export function getTreatmentBySlug(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}

export function getTreatmentsByCategory(category: string) {
  return treatments.filter((treatment) => treatment.category === category);
}

export const featuredTreatments = treatments.slice(0, 6);