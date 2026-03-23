import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID   = "service_78gb8sn";
const EMAILJS_TEMPLATE_ID  = "template_le7wr9a";
const EMAILJS_AUTOREPLY_ID = "template_g9d7zwf";
const EMAILJS_PUBLIC_KEY   = "mkAY6iaiwFs1b4ljN";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
});

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      await emailjs.send(
        EMAILJS_SERVICE_ID, EMAILJS_AUTOREPLY_ID,
        {
          name:  formRef.current.querySelector('[name="name"]').value,
          email: formRef.current.querySelector('[name="email"]').value,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Left */}
        <motion.div
          className="lg:col-span-5 space-y-12"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }} variants={fadeUp(0)}
        >
          <div className="space-y-4">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">
              {t("contact.label")}
            </span>
            <h2 className="font-headline italic text-5xl md:text-6xl text-primary mt-2 leading-tight">
              {t("contact.title")}
            </h2>
            <div className="w-16 h-px bg-secondary mt-3" />
            <p className="text-on-surface-variant text-lg max-w-md leading-relaxed pt-3">
              {t("contact.description")}
            </p>
          </div>

          <div className="space-y-6">
            <p className="font-label text-xs uppercase tracking-widest text-outline">{t("contact.find_me")}</p>
            <div className="flex flex-col gap-4">
              {[
                { href: "https://linkedin.com/in/arantxa-ordoyo", icon: "link", label: "LinkedIn" },
                { href: "https://github.com/arianxa", icon: "code", label: "GitHub" },
                { href: "mailto:pro.arantxa.ordoyo@gmail.com", icon: "mail", label: "pro.arantxa.ordoyo@gmail.com" },
              ].map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-[#ede8e3] transition-colors">
                    <span className="material-symbols-outlined text-sm">{link.icon}</span>
                  </span>
                  <span className="font-label text-sm tracking-wide">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          className="lg:col-span-7"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }} variants={fadeUp(0.15)}
        >
          <div className="bg-surface-container-low p-8 md:p-12 rounded-xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-outline ml-1" htmlFor="name">
                    {t("contact.name")}
                  </label>
                  <input id="name" name="name" type="text" placeholder={t("contact.name_placeholder")} required
                    className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-outline-variant/60 outline-none font-body text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-outline ml-1" htmlFor="email">
                    {t("contact.email")}
                  </label>
                  <input id="email" name="email" type="email" placeholder={t("contact.email_placeholder")} required
                    className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-outline-variant/60 outline-none font-body text-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-outline ml-1" htmlFor="message">
                  {t("contact.message")}
                </label>
                <textarea id="message" name="message" rows="6" required
                  placeholder={t("contact.message_placeholder")}
                  className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-outline-variant/60 resize-none outline-none font-body text-sm" />
              </div>

              <button type="submit" disabled={status === "sending"}
                className="group relative w-full md:w-auto px-10 py-4 bg-primary text-on-primary rounded-lg font-label text-xs uppercase tracking-widest transition-all hover:opacity-85 active:scale-95 disabled:opacity-50">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === "sending" ? t("contact.sending") : t("contact.send")}
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">send</span>
                </span>
              </button>

              {status === "success" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-[#eef0e8] border border-[#535845]/20 rounded-lg px-5 py-4">
                  <span className="material-symbols-outlined text-[#535845] text-lg">check_circle</span>
                  <p className="font-label text-xs uppercase tracking-widest text-[#535845]">{t("contact.success")}</p>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg px-5 py-4">
                  <span className="material-symbols-outlined text-red-600 text-lg">error</span>
                  <p className="font-label text-xs uppercase tracking-widest text-red-600">{t("contact.error")}</p>
                </motion.div>
              )}

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;