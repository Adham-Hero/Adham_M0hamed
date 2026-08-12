// Central translation dictionary.
// Add new keys here as new sections are built — never hardcode text in components.
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      langSwitch: "AR",
    },
    hero: {
      greeting: "Hi, I'm Adham Mohamed",
      role: "Programmer & Nursing Student",
      tagline: "Building digital experiences while studying healthcare.",
      description:
        "I write front-end code by day and study patient care at Cairo University — merging logic and empathy into everything I build.",
      ctaProjects: "View Projects",
      ctaAbout: "About Me",
      ctaContact: "Contact Me",
      badgeCode: "Front-End Developer",
      badgeHealth: "Nursing Student — Cairo University",
      scrollHint: "Scroll",
    },
    about: {
      eyebrow: "About Me",
      title: "Where logic meets care",
      bio:
        "I'm Adham Mohamed, a programmer and nursing student at Cairo University. I'm passionate about building modern web applications and exploring AI technologies while developing my academic background in healthcare.",
      educationLabel: "Education",
      educationValue: "B.Sc. Nursing, Cairo University — in progress",
      interestsLabel: "Interests",
      interestsValue: "Web Development, Artificial Intelligence, Healthcare Tech",
      goalLabel: "Career Goal",
      goalValue:
        "Building software that supports healthcare — where clean code meets real patient impact.",
    },
    skills: {
      eyebrow: "Skills",
      title: "Tools I build with",
      subtitle:
        "A steadily growing toolkit — from front-end interfaces to the fundamentals behind them.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Things I've built",
      subtitle:
        "A mix of web apps and interface experiments — each one a step in learning to ship real products.",
      demo: "Live Demo",
      code: "GitHub",
      comingSoon: "Coming Soon",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something",
      subtitle:
        "Have a project, an opportunity, or just want to talk tech and healthcare? My inbox is open.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      elsewhereLabel: "Also find me on",
      formName: "Name",
      formNamePlaceholder: "Your name",
      formEmail: "Email",
      formEmailPlaceholder: "you@example.com",
      formMessage: "Message",
      formMessagePlaceholder: "Tell me a bit about your project or idea...",
      formSend: "Send Message",
      formSending: "Sending...",
      formSuccess: "Thanks! Your message has been noted — this is a demo form with no backend yet, so reach me directly by email for now.",
      formErrorRequired: "Please fill in all fields before sending.",
    },
    footer: {
      rights: "All Rights Reserved.",
      builtWith: "Built with React & Vite.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      projects: "المشاريع",
      skills: "المهارات",
      contact: "تواصل",
      langSwitch: "EN",
    },
    hero: {
      greeting: "مرحبًا، أنا أدهم محمد",
      role: "مبرمج وطالب في كلية التمريض",
      tagline: "أجمع بين البرمجة والتكنولوجيا ودراسة الرعاية الصحية.",
      description:
        "أكتب أكواد الواجهة الأمامية نهارًا، وأدرس رعاية المرضى في جامعة القاهرة — أدمج بين المنطق والتعاطف في كل ما أبنيه.",
      ctaProjects: "عرض المشاريع",
      ctaAbout: "نبذة عني",
      ctaContact: "تواصل معي",
      badgeCode: "مطوّر واجهات أمامية",
      badgeHealth: "طالب تمريض — جامعة القاهرة",
      scrollHint: "مرر لأسفل",
    },
    about: {
      eyebrow: "نبذة عني",
      title: "حيث يلتقي المنطق بالرعاية",
      bio:
        "أنا أدهم محمد، مبرمج وطالب في كلية التمريض بجامعة القاهرة. أهتم ببناء تطبيقات ويب حديثة واستكشاف تقنيات الذكاء الاصطناعي، مع تطوير خبرتي الأكاديمية في مجال الرعاية الصحية.",
      educationLabel: "التعليم",
      educationValue: "بكالوريوس تمريض، جامعة القاهرة — قيد الدراسة",
      interestsLabel: "الاهتمامات",
      interestsValue: "تطوير الويب، الذكاء الاصطناعي، تكنولوجيا الرعاية الصحية",
      goalLabel: "الهدف المهني",
      goalValue:
        "بناء برمجيات تخدم القطاع الصحي — حيث تلتقي جودة الكود بتأثير حقيقي على المرضى.",
    },
    skills: {
      eyebrow: "المهارات",
      title: "الأدوات اللي بشتغل بيها",
      subtitle: "مجموعة أدوات في تطور مستمر — من واجهات المستخدم لحد الأساسيات وراها.",
    },
    projects: {
      eyebrow: "المشاريع",
      title: "أشياء قمت ببنائها",
      subtitle: "مزيج من تطبيقات الويب وتجارب الواجهات — كل مشروع خطوة في تعلّم بناء منتجات حقيقية.",
      demo: "معاينة مباشرة",
      code: "GitHub",
      comingSoon: "قريبًا",
    },
    contact: {
      eyebrow: "تواصل",
      title: "خلينا نبني حاجة سوا",
      subtitle: "عندك مشروع، فرصة عمل، أو حابب تتكلم في التكنولوجيا والرعاية الصحية؟ صندوق رسائلي مفتوح.",
      emailLabel: "البريد الإلكتروني",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      elsewhereLabel: "تجدني أيضًا على",
      formName: "الاسم",
      formNamePlaceholder: "اسمك",
      formEmail: "البريد الإلكتروني",
      formEmailPlaceholder: "you@example.com",
      formMessage: "الرسالة",
      formMessagePlaceholder: "احكيلي شوية عن مشروعك أو فكرتك...",
      formSend: "إرسال الرسالة",
      formSending: "جاري الإرسال...",
      formSuccess: "شكرًا! تم استلام رسالتك — ده نموذج تجريبي من غير Backend لسه، فتقدر تتواصل معايا مباشرة عبر البريد الإلكتروني حاليًا.",
      formErrorRequired: "من فضلك املأ كل الحقول قبل الإرسال.",
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      builtWith: "تم البناء باستخدام React و Vite.",
    },
  },
};

export default translations;
