// 03036330010
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Brain,
  Bone,
  Activity,
  Shield,
  Heart,
  Users,
  ChevronDown,
  Eye,
  Baby,
  Stethoscope,
  Hospital,
  CheckCircle,
  Lock,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import heroImage from "@/assets/hero-mri.jpg";
import buildingImage from "@/assets/building.webp";

const Navbar = () => (
  <nav className="fixed top-0 right-0 left-0 z-50 bg-card/80 backdrop-blur-md border-b border-border ">
    <div className="container mx-auto px-4 py-px  flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <Activity className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-md md:text-lg text-foreground leading-normal">
            پنجاب اوپن ایم آر آئی
          </h1>
          <p className="text-[12px] text-muted-foreground">بہاولنگر</p>
        </div>
      </div>
      <a
        href="tel:03036330010"
        className="flex items-center gap-2 bg-primary text-primary-foreground px-3.5 py-2 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity"
      >
        <Phone className="w-4 h-4" />
        <span>ابھی کال کریں</span>
      </a>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20">
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="ایم آر آئی مشین"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-foreground/90 via-foreground/75 to-foreground/50" />
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground px-4 py-2 rounded-full text-sm mb-6 animate-fade-in-up">
          <Star className="w-4 h-4 text-accent" />
          <span>گوگل پر 5.0 ریٹنگ</span>
        </div>

        <p
          className="text-lg md:text-xl text-accent font-bold mb-3 animate-fade-in-up"
          style={{ animationDelay: "0.05s" }}
        >
          ضلع بہاولنگر کا پہلا جدید ایم آر آئی سینٹر
        </p>

        <h2
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s", lineHeight: "1.6" }}
        >
          <Hospital className="inline-block w-12 h-12 md:w-16 md:h-16 ml-3 text-accent" />
          پنجاب اوپن
          <br />
          ایم آر آئی سینٹر
        </h2>

        <p
          className="text-xl md:text-2xl text-primary-foreground/90 mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          جدید تشخیصی سہولیات — آپ کی صحت ہماری ترجیح
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.25s" }}
        >
          {[
            {
              icon: Sparkles,
              text: "جدید  جاپان سے درآمدشدہ ایم آر آئی مشین",
            },
            { icon: ShieldCheck, text: "FCPS کنسلٹنٹ ریڈیالوجسٹ کی زیرنگرانی" },
            {
              icon: Heart,
              text: "اوپن ایم آر آئی — مریض کو گھبراہٹ نہیں ہوتی",
            },
            { icon: Zap, text: "ایم آر آئی مشین کی کوئی مضر شعاعیں نہیں" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-primary-foreground/85 text-sm bg-primary-foreground/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary-foreground/10"
            >
              <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="tel:03048359994"
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-all shadow-medical"
          >
            <Phone className="w-5 h-5" />
            اپائنٹمنٹ بک کریں
          </a>
          <a
            href="#services"
            className="flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-foreground/10 transition-all"
          >
            خدمات دیکھیں
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>

        <div
          className="flex flex-wrap gap-6 mt-8 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: MapPin, text: "بہاولنگر" },
            { icon: Clock, text: "رات 11 بجے تک" },
            { icon: Phone, text: "0303-6330010" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-primary-foreground/80 text-sm py-4"
            >
              <item.icon className="w-4 h-4 text-accent" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-medical">
          <img
            src={buildingImage}
            alt="پنجاب اوپن ایم آر آئی سینٹر بلڈنگ"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="text-center md:text-right">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            ہمارے بارے میں
          </h3>
          <p className="text-lg text-muted-foreground leading-loose">
            پنجاب اوپن ایم آر آئی سینٹر بہاولنگر کا ایک جدید میڈیکل ڈائیگناسٹک
            سینٹر ہے جہاں جدید مشینری اور تجربہ کار ریڈیالوجسٹ کی نگرانی میں ایم
            آر آئی اسکین کی سہولت فراہم کی جاتی ہے۔ ہمارا مقصد مریضوں کو درست،
            بروقت اور معیاری تشخیص فراہم کرنا ہے تاکہ علاج میں آسانی ہو۔
          </p>
          <p className="text-primary font-bold mt-4 text-lg">
            ہم مریضوں کے آرام، رازداری اور سہولت کو اولین ترجیح دیتے ہیں۔
          </p>
        </div>
      </div>
    </div>
  </section>
);

const services = [
  { icon: Brain, title: "دماغ کا ایم آر آئی", desc: "Brain MRI" },
  { icon: Bone, title: "ریڑھ کی ہڈی کا ایم آر آئی", desc: "Spine MRI" },
  {
    icon: Activity,
    title: "جوڑوں اور گھٹنوں کا ایم آر آئی",
    desc: "Joint & Knee MRI",
  },
  {
    icon: Shield,
    title: "کمر اور گردن کا ایم آر آئی",
    desc: "Back & Neck MRI",
  },
  { icon: Heart, title: "پیٹ اور دیگر اعضاء", desc: "Abdomen & Organ Scan" },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h3 className="text-3xl font-bold text-foreground text-center mb-4">
        ہماری خدمات
      </h3>
      <p className="text-muted-foreground text-center mb-12 text-lg">
        اوپن ایم آر آئی اسکین کی مکمل سہولیات
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-card rounded-xl p-6 shadow-medical hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-1">
              {s.title}
            </h4>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const features = [
  "آرام دہ اور صاف ماحول",
  "جدید اور محفوظ مشینری",
  "خواتین اور بزرگ مریضوں کے لیے خصوصی سہولت",
  "مناسب فیس",
  "دوستانہ اور تربیت یافتہ عملہ",
  "تیز اور درست رپورٹ",
];

const ultrasoundServices = [
  {
    col1: "خواتین کا مکمل اندرونی الٹراساؤنڈ",
    col2: "حاملہ خواتین کا انولی الٹراساؤنڈ",
  },
  {
    col1: "پیٹ کا مکمل الٹراساؤنڈ",
    col2: "حاملہ خواتین کا کلرڈوپلر الٹراساؤنڈ",
  },
  {
    col1: "گردن کا الٹراساؤنڈ",
    col2: "حاملہ خواتین اور بچے کا تفصیلی الٹراساؤنڈ",
  },
  {
    col1: "گردوں، مثانے اور یوریٹرز تفصیلی الٹراساؤنڈ",
    col2: "تھائی رائیڈ کا الٹراساؤنڈ",
  },
  { col1: "پتے، لبلبے اور اپینڈکس کا الٹراساؤنڈ", col2: "کیروٹڈ ڈوپلر" },
  {
    col1: "بازوں اور ٹانگوں کا کلرڈوپلر الٹراساؤنڈ",
    col2: "آنکھ کا مکمل تفصیلی الٹراساؤنڈ",
  },
  { col1: "بچوں کے پیٹ کا مکمل الٹراساؤنڈ", col2: "پھیپھڑوں کا الٹراساؤنڈ" },
  {
    col1: "گھٹنے (Knee)، گھٹے (Ankle) اور کندھے (Shoulder) کا الٹراساؤنڈ",
    col2: "کولہے (Hip) کا الٹراساؤنڈ",
  },
];

const UltrasoundSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Stethoscope className="w-8 h-8 text-primary" />
        <h3 className="text-3xl font-bold text-foreground text-center">
          الٹراساؤنڈ کی سہولیات
        </h3>
      </div>
      <p className="text-muted-foreground text-center mb-10 text-lg">
        جدید الٹراساؤنڈ مشینری کے ذریعے مکمل تشخیص
      </p>
      <div className="max-w-5xl mx-auto space-y-3">
        {ultrasoundServices.map((row, i) => (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-secondary rounded-xl px-5 py-4 flex items-center gap-3 hover:shadow-medical transition-shadow">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-foreground font-bold">{row.col1}</span>
            </div>
            <div className="bg-secondary rounded-xl px-5 py-4 flex items-center gap-3 hover:shadow-medical transition-shadow">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-foreground font-bold">{row.col2}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-primary/10 border border-primary/20 rounded-xl p-5 max-w-3xl mx-auto text-center">
        <p className="text-foreground font-bold text-lg flex items-center justify-center gap-2">
          <Lock className="w-5 h-5 text-primary" />
          خواتین کیلئے خاص پردے کا انتظام
        </p>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <h3 className="text-3xl font-bold text-foreground text-center mb-12">
        ہماری خصوصیات
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-secondary rounded-xl px-5 py-4"
          >
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <Star className="w-4 h-4 text-accent-foreground" />
            </div>
            <span className="text-foreground font-bold">{f}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const whyUs = [
  "جدید اوپن ایم آر آئی سہولت",
  "مستند اور تجربہ کار ڈاکٹرز",
  "فوری اور قابل اعتماد نتائج",
  "بہاولنگر میں مرکزی مقام",
];

const WhyUsSection = () => (
  <section className="py-20 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-3xl font-bold mb-10">
        کیوں منتخب کریں پنجاب اوپن ایم آر آئی؟
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {whyUs.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-6 py-5 border border-primary-foreground/20"
          >
            <CheckCircle className="w-6 h-6 text-accent" />
            <span className="font-bold text-lg">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-3xl font-bold text-foreground mb-6">
        مریضوں کے تاثرات
      </h3>
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-8 h-8 text-accent fill-accent" />
        ))}
      </div>
      <p className="text-2xl font-bold text-foreground mb-2">5.0</p>
      <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-loose">
        الحمدللہ، ہمیں گوگل ریویوز پر 5.0 کی بہترین ریٹنگ حاصل ہے۔ مریض ہماری
        تیز رفتار، پروفیشنل سروس اور خوش اخلاق عملے کی تعریف کرتے ہیں۔
      </p>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <h3 className="text-3xl font-bold text-foreground text-center mb-12">
        رابطہ کریں
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {[
          {
            icon: MapPin,
            title: "پتہ",
            text: "جہانگیر، ڈی سی آفس روڈ، جہانگیر گارڈن، بہاولنگر، 62300",
          },
          {
            icon: Phone,
            title: "فون",
            text: "0304-8359994",
            href: "tel:03036330010",
          },
          {
            icon: Clock,
            title: "اوقات کار",
            text: "روزانہ صبح سے رات 11 بجے تک",
          },
        ].map((item, i) => (
          <div key={i} className="text-center bg-secondary rounded-xl p-8">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">
              {item.title}
            </h4>
            {item.href ? (
              <a
                href={item.href}
                className="text-primary font-bold text-lg hover:underline"
              >
                {item.text}
              </a>
            ) : (
              <p className="text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-foreground text-background py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="text-background/70 text-sm">
        © 2025 پنجاب اوپن ایم آر آئی سینٹر — بہاولنگر — تمام حقوق محفوظ ہیں
      </p>
    </div>
  </footer>
);

const Index = () => (
  <main>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <UltrasoundSection />
    <FeaturesSection />
    <WhyUsSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
