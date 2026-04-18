import { useState } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("הפרטים נשלחו בהצלחה!", {
        description: "הרב אמיר דדון או אלעד בר שלום יחזרו אליכם בהקדם.",
      });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-3">
      <input
        required
        name="name"
        placeholder="שם מלא"
        className="rounded-xl border-2 border-border bg-background px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
      <input
        required
        name="institution"
        placeholder="שם המוסד"
        className="rounded-xl border-2 border-border bg-background px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
      <input
        required
        name="phone"
        type="tel"
        placeholder="טלפון"
        className="rounded-xl border-2 border-border bg-background px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
      <button
        type="submit"
        disabled={loading}
        className="md:col-span-3 rounded-xl bg-gradient-action px-8 py-4 text-lg font-extrabold text-action-foreground shadow-action transition-all duration-300 hover:scale-[1.02] hover:shadow-glow disabled:opacity-60"
      >
        {loading ? "שולח..." : "שלחו לי פרטים נוספים ←"}
      </button>
    </form>
  );
}
