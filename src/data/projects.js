// Add a new project by pushing a new object here — never create a new component.
// `title` and `description` are bilingual objects; `technologies` and links
// are language-independent so they're written once.

const projects = [
  {
    id: 1,
    title: {
      en: "Veloura — Hair Products E-Commerce Store",
      ar: "Veloura — متجر منتجات العناية بالشعر",
    },
    description: {
      en: "A full-stack bilingual e-commerce platform for hair care products, featuring product management, authentication, shopping cart, checkout, orders, admin dashboard, Arabic/English support, and light/dark themes.",
      ar: "متجر إلكتروني متكامل ثنائي اللغة لمنتجات العناية بالشعر، يحتوي على إدارة المنتجات، تسجيل الدخول، سلة المشتريات، إتمام الطلبات، لوحة تحكم للإدارة، دعم العربية والإنجليزية، والوضع الليلي والنهاري.",
    },
    image: "/images/projects/veloura.jpg",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Bootstrap",
    ],
    github: "",
    demo: "https://veloura-ofah-pi.vercel.app/",
  },

  {
    id: 2,
    title: {
      en: "Who is My Patient",
      ar: "Who is My Patient — ملف المريض الطبي",
    },
    description: {
      en: "A healthcare concept designed to help authorized medical staff quickly access important patient information such as medical history, previous surgeries, chronic diseases, age, and basic information using the patient's national ID.",
      ar: "مشروع صحي يهدف إلى مساعدة الفريق الطبي المسؤول على الوصول بسرعة إلى المعلومات المهمة عن المريض مثل التاريخ المرضي، العمليات السابقة، الأمراض المزمنة، العمر والبيانات الأساسية باستخدام الرقم القومي للمريض.",
    },
    image: "/images/projects/who-is-my-patient.jpg",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Healthcare",
      "Database",
    ],
    github: "",
    demo: "https://who-is-my-pateint.vercel.app/",
  },

  {
    id: 3,
    title: {
      en: "Free Time — Group Schedule Planner",
      ar: "Free Time — محدد المواعيد المناسب للجميع",
    },
    description: {
      en: "A scheduling tool that helps groups quickly find suitable meeting times. Each person enters their unavailable hours, and the application determines the time slots when everyone is available.",
      ar: "أداة لتنظيم المواعيد تساعد مجموعة من الأشخاص على إيجاد الموعد المناسب للجميع بسرعة. يقوم كل شخص بإدخال الأوقات التي يكون فيها مشغولًا، ثم يحدد الموقع المواعيد التي يكون فيها الجميع متاحين.",
    },
    image: "/images/projects/free-time.jpg",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
    ],
    github: "",
    demo: "https://adham-hero.github.io/free_time/",
  },

  {
    id: 4,
    title: {
      en: "What to Wear — Weather Outfit Assistant",
      ar: "What to Wear — مساعد اختيار الملابس حسب الطقس",
    },
    description: {
      en: "A simple weather-based application that recommends what to wear according to the temperature and changes the background and clothing suggestions based on the weather and selected gender.",
      ar: "تطبيق بسيط يقترح الملابس المناسبة حسب درجة الحرارة، مع تغيير الخلفية واقتراحات الملابس بناءً على حالة الطقس والجنس المحدد.",
    },
    image: "/images/projects/what-to-wear.jpg",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Weather API",
    ],
    github: "",
    demo: "https://adham-hero.github.io/today-cloth/",
  },

  {
    id: 5,
    title: {
      en: "Nursing GPA Calculator — Cairo University",
      ar: "Nursing GPA Calculator — حاسبة GPA لطلاب تمريض القاهرة",
    },
    description: {
      en: "A GPA calculator built specifically for Cairo University Faculty of Nursing students. Students can select their courses, enter their grades, calculate total credit hours, and get their GPA and letter grade.",
      ar: "حاسبة GPA مصممة خصيصًا لطلاب كلية التمريض بجامعة القاهرة. يستطيع الطالب اختيار المقررات التي درسها، إدخال درجاته، حساب إجمالي الساعات المعتمدة، والحصول على الـ GPA والتقدير بالحروف.",
    },
    image: "/images/projects/nursing-gpa.jpg",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Figma",
    ],
    github: "",
    demo: "https://adham-hero.github.io/Calc_Your_GPA/",
  },
];

export default projects;