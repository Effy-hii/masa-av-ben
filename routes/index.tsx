import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { BookOpen, Monitor, Users, Sparkles, Phone, Quote } from "lucide-react";
import heroStudents from "@/assets/hero-students.jpg";
import bookPreview from "@/assets/book-preview.jpg";
import bookSamplePagesPdf from "@/assets/book-sample-pages.pdf";
import parentsKids from "@/assets/parents-kids.jpg";
import epicEvent from "@/assets/epic-event.jpg";
import { PowerUpCard } from "@/components/PowerUpCard";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: 'תוכנית "13" – שנת בר המצווה של רשת אמית | תשפ"ז' },
      {
        name: "description",
        content:
          'תוכנית בר מצווה רשתית של אמית: ספר לימוד בעיצוב גיימינג, מערכי שיעור דיגיטליים, מפגשי הורים ובנים ויום שיא רשתי. רק 50 ש"ח לתלמיד.',
      },
      { property: "og:title", content: 'תוכנית "13" – שנת בר המצווה של רשת אמית' },
      {
        property: "og:description",
        content: "הופכים את התלמידים מצופים לשחקנים. מעטפת פדגוגית שלמה לשנת בר המצווה.",
      },
      { property: "og:image", content: heroStudents },
      { name: "twitter:image", content: heroStudents },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-display">
      <Toaster position="top-center" richColors dir="rtl" />

      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-30">
          <img
            src={heroStudents}
            alt="תלמידי בר מצווה באירוע שיא של רשת אמית"
            className="h-full w-full object-cover"
            width={1536}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        </div>

        {/* candy decorations */}
        <div className="pointer-events-none absolute right-10 top-20 h-24 w-24 rounded-full bg-accent/40 blur-2xl animate-float" />
        <div className="pointer-events-none absolute left-20 bottom-32 h-32 w-32 rounded-full bg-action/30 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-action text-action-foreground font-mono-display text-xl shadow-action">
              13
            </div>
            <div className="text-sm">
              <div className="font-extrabold leading-tight">תוכנית "13"</div>
              <div className="text-xs opacity-70">רשת אמית · תורת חיים</div>
            </div>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-action px-5 py-2.5 text-sm font-bold text-action-foreground shadow-action transition-transform hover:scale-105"
          >
            צרו קשר
          </a>
        </nav>

        <div className="relative mx-auto max-w-7xl px-6 pb-32 pt-16 md:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 animate-slide-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-mono-display text-xs uppercase tracking-wider text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                שנת בר המצווה · תשפ"ז
              </span>

              <h1 className="mt-6 text-5xl font-black leading-[1.05] md:text-7xl">
                הופכים את התלמידים מ
                <span className="relative inline-block px-2">
                  <span className="absolute inset-x-0 bottom-2 h-4 bg-action/70 -z-0" />
                  <span className="relative">"צופים"</span>
                </span>
                <br />
                ל
                <span className="bg-gradient-cyan bg-clip-text text-transparent">"שחקנים"</span>.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
                תוכנית "13" של רשת אמית חוזרת בגרסה משודרגת. מעטפת פדגוגית שלמה, ספר לימוד בעיצוב
                גיימינג מרהיב וחוויית שיא רשתית. כל מה שבית הספר צריך כדי לייצר חיבור, ערכים
                ומשמעות – בחבילה אחת מושלמת.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-action px-8 py-5 text-lg font-extrabold text-action-foreground shadow-action transition-all duration-300 hover:scale-105 hover:shadow-glow"
                >
                  אני רוצה להכניס את הכיתה שלי למשחק
                  <span className="transition-transform group-hover:-translate-x-1">←</span>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border-2 border-accent/50 px-8 py-5 text-lg font-bold text-primary-foreground transition-all hover:bg-accent/10"
                >
                  גלו מה כולל ה-Bundle
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-primary-foreground/70">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent animate-pulse" /> מאות תלמידים בכל הארץ</div>
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-action animate-pulse" /> רק 50 ש"ח לתלמיד</div>
              </div>
            </div>

            {/* Big "13" gaming-style */}
            <div className="lg:col-span-5">
              <div
                className="relative mx-auto aspect-square max-w-md cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="פתח את קובץ עמודי הדוגמה של הספר"
                onClick={() => window.open(bookSamplePagesPdf, "_blank", "noopener,noreferrer")}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    window.open(bookSamplePagesPdf, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-cyan blur-3xl opacity-40 animate-pulse-glow" />
                <div className="relative flex h-full items-center justify-center rounded-[2.5rem] border-2 border-accent/30 bg-primary/40 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="font-mono-display text-[14rem] leading-none tracking-tight text-accent drop-shadow-[0_0_40px_rgba(120,200,255,0.6)]">
                      13
                    </div>
                    <div className="mt-2 font-mono-display text-sm uppercase tracking-[0.4em] text-primary-foreground/70">
                      מסע לימוד משותף לקראת בר המצווה
                    </div>
                  </div>
                </div>
                {/* floating tags */}
                <div className="absolute -right-4 top-10 rounded-2xl bg-action px-4 py-2 font-mono-display text-xs text-action-foreground shadow-action animate-float">
                  ⚡ NEW SEASON
                </div>
                <div className="absolute -left-6 bottom-16 rounded-2xl bg-card px-4 py-2 font-mono-display text-xs text-primary shadow-card-elegant animate-float" style={{ animationDelay: "1s" }}>
                  🎯 LEVEL UP
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="block w-full" preserveAspectRatio="none">
            <path d="M0,40 C320,80 720,0 1440,40 L1440,80 L0,80 Z" fill="oklch(0.99 0.005 240)" />
          </svg>
        </div>
      </header>

      {/* MANAGER PITCH */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="font-mono-display text-xs uppercase tracking-[0.3em] text-accent">
              QUEST · 01
            </div>
            <h2 className="mt-4 text-4xl font-black leading-tight text-foreground md:text-5xl">
              מנהלים, תנו למורים שלכם
              <br />
              את הכלים <span className="text-accent">להצליח.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              שנת בר המצווה היא חלון הזדמנות חד-פעמי לחיבור לזהות יהודית וישראלית. במקום שהמחנכים
              יבזבזו זמן יקר על חיפוש חומרים או בניית מצגות, תוכנית "13" מעניקה להם{" "}
              <strong className="text-foreground">"Turnkey Solution"</strong>: פדגוגיה איכותית, שפה
              צעירה וליווי צמוד.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              זה לא עוד פרויקט – זה הסיפור של המוסד שלכם בתוך{" "}
              <strong className="text-foreground">קהילת אמית הגדולה</strong>.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8">
              <Stat number="100%" label="חומרים מוכנים" />
              <Stat number="0" label="זמן הכנה" />
              <Stat number="∞" label="ערכים" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-cyan opacity-20 blur-2xl" />
            <img
              src={parentsKids}
              alt="הורה ובן לומדים יחד תורה במפגש קח״מ"
              loading="lazy"
              width={1280}
              height={1024}
              className="relative rounded-3xl shadow-card-elegant"
            />
            <div className="absolute -bottom-6 -right-6 max-w-xs rounded-2xl bg-card p-5 shadow-card-elegant border-2 border-accent/30">
              <Quote className="h-6 w-6 text-accent" />
              <p className="mt-2 text-sm font-medium text-foreground">
                "רגע מכונן בחיי הילד – ובחיי בית הספר."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POWER-UPS */}
      <section id="features" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="font-mono-display text-xs uppercase tracking-[0.3em] text-accent">
              ⚡ THE POWER-UPS
            </div>
            <h2 className="mt-4 text-4xl font-black text-foreground md:text-5xl">
              ארבעת עמודי התווך של התוכנית
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              כל "Level" מוסיף שכבה של עומק, חוויה והנעה לתלמיד ולמחנך.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <PowerUpCard
              level="LEVEL 01"
              title='ספר "Be the Player"'
              description="ספר לימוד בפורמט מגזין/קומיקס שילדים לא רוצים להניח מהיד. תוכן עמוק בשפה של דור ה-Z."
              icon={<BookOpen className="h-7 w-7" />}
              color="cyan"
            />
            <PowerUpCard
              level="LEVEL 02"
              title="מעטפת פדגוגית דיגיטלית"
              description="מערכי שיעור מוכנים, סרטונים ודיונים ב-LMS. המורה מגיע לכיתה בראש שקט."
              icon={<Monitor className="h-7 w-7" />}
              color="navy"
            />
            <PowerUpCard
              level="LEVEL 03"
              title="חיבור קהילתי-משפחתי"
              description="תוכניות מובנות למפגשי הורים ובנים (קח״מ) שיוצרות חיבור בין-דורי אמיתי."
              icon={<Users className="h-7 w-7" />}
              color="cyan"
            />
            <PowerUpCard
              level="LEVEL 04"
              title="ה-Epic Quest · אירוע השיא"
              description="יום שיא רשתי עוצמתי עם מאות תלמידים מכל הארץ. תחושת שייכות שאין באף מקום אחר."
              icon={<Sparkles className="h-7 w-7" />}
              color="action"
            />
          </div>
        </div>
      </section>

      {/* PEEK INTO CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <div className="font-mono-display text-xs uppercase tracking-[0.3em] text-accent">
            👀 SNEAK PEEK
          </div>
          <h2 className="mt-4 text-4xl font-black text-foreground md:text-5xl">
            אל תאמינו לנו, <span className="text-accent">תראו בעצמכם.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            פשטות ההפעלה היא שם המשחק. הכל מוכן, הכל נגיש, הכל מעוצב.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <PreviewCard
            tag="הספר"
            title="עיצוב גיימינג, תוכן תורני"
            image={bookPreview}
            alt="הצצה לעמודי הספר בעיצוב מגזין"
          />
          <PreviewCard
            tag="מערכי שיעור"
            title="LMS · שער עצמאות · שער מפגש"
            image={parentsKids}
            alt="דוגמה ממערך שיעור עם דיון פתוח"
          />
          <PreviewCard
            tag="יום השיא"
            title="לו״ז עוצמתי לאירוע רשתי"
            image={epicEvent}
            alt="אירוע שיא רשתי של מאות תלמידי אמית"
          />
        </div>
      </section>

      {/* PRICING + CTA */}
      <section id="contact" className="relative overflow-hidden bg-gradient-hero py-24 text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute right-1/4 top-10 h-64 w-64 rounded-full bg-accent blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-10 left-1/4 h-72 w-72 rounded-full bg-action blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="text-center">
            <div className="font-mono-display text-xs uppercase tracking-[0.3em] text-accent">
              💎 BOTTOM LINE
            </div>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              ההשקעה הקטנה
              <br />
              שתעשה <span className="bg-gradient-cyan bg-clip-text text-transparent">הבדל ענק.</span>
            </h2>

            <div className="mx-auto mt-10 max-w-2xl rounded-3xl border-2 border-accent/40 bg-primary/40 p-8 backdrop-blur-sm">
              <div className="text-sm uppercase tracking-wider text-primary-foreground/70">
                המעטפת המלאה כוללת
              </div>
              <ul className="mt-4 grid gap-2 text-right text-base md:grid-cols-2">
                {[
                  "ספר לימוד בעיצוב גיימינג",
                  "מערכי שיעור מוכנים ב-LMS",
                  "ליווי פדגוגי צמוד",
                  "הצעות לסיורים ומפגשים",
                  "אפשרות ליום שיא רשתי",
                  "תכנים למפגשי הורים ובנים",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-primary text-xs font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-baseline justify-center gap-3">
                <span className="text-sm text-primary-foreground/70">רק</span>
                <span className="font-mono-display text-7xl text-action drop-shadow-[0_0_30px_rgba(255,140,60,0.5)]">
                  50₪
                </span>
                <span className="text-lg font-bold">לתלמיד</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="mt-12 rounded-3xl bg-card p-8 text-foreground shadow-card-elegant md:p-12">
            <h3 className="text-2xl font-black md:text-3xl">
              רוצים לבנות את שנת בר המצווה אצלכם?
            </h3>
            <p className="mt-2 text-muted-foreground">
              השאירו פרטים והרב אמיר דדון או אלעד בר שלום יחזרו אליכם עם כל הפרטים.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          {/* Direct contact */}
          <div className="mt-10 grid gap-4 text-center md:grid-cols-2">
            <ContactBadge name="הרב אמיר דדון" phone="054-4350-895" />
            <ContactBadge name="אלעד בר שלום" phone="050-7953-162" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8 text-center text-sm text-muted-foreground">
        <p>© תשפ"ז · רשת אמית · תורת חיים · בשביל הנשמה</p>
      </footer>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-mono-display text-3xl text-accent">{number}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function PreviewCard({ tag, title, image, alt }: { tag: string; title: string; image: string; alt: string }) {
  return (
    <div className="group overflow-hidden rounded-3xl border-2 border-border bg-card shadow-card-elegant transition-all duration-300 hover:-translate-y-1 hover:border-accent">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="font-mono-display text-xs uppercase tracking-wider text-accent">{tag}</div>
        <div className="mt-2 text-lg font-extrabold text-foreground">{title}</div>
      </div>
    </div>
  );
}

function ContactBadge({ name, phone }: { name: string; phone: string }) {
  return (
    <a
      href={`tel:${phone.replace(/-/g, "")}`}
      className="group flex items-center justify-center gap-3 rounded-2xl border border-accent/30 bg-primary/40 px-6 py-4 backdrop-blur-sm transition-all hover:border-accent hover:bg-primary/60"
    >
      <Phone className="h-5 w-5 text-accent transition-transform group-hover:scale-110" />
      <div className="text-right">
        <div className="text-sm opacity-70">{name}</div>
        <div dir="ltr" className="font-mono-display text-base">{phone}</div>
      </div>
    </a>
  );
}
