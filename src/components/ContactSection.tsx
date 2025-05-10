import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import SocialLinks from "@/components/contact/SocialLinks";
import FreeConsultation from "@/components/contact/FreeConsultation";

// Основной компонент раздела контактов
const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container">
        <h2 className="section-title">Связаться со мной</h2>
        <p className="section-subtitle">
          Есть вопросы или готовы начать обучение? Свяжитесь со мной любым
          удобным способом
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact form */}
          <ContactForm />

          {/* Contact info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-burgundy">
                Контактная информация
              </h3>

              <ContactInfo />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-burgundy">
                Социальные сети
              </h3>
              <SocialLinks />
            </div>

            <FreeConsultation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
