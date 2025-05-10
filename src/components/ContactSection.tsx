
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

// Компонент для поля формы
interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
  rows?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  placeholder,
  type = "text",
  required = false,
  as = "input",
  rows = 3,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label} {required && <span className="text-burgundy">*</span>}
      </label>
      {as === "input" ? (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className="border-gold/20 focus-visible:ring-burgundy"
        />
      ) : (
        <Textarea
          id={id}
          placeholder={placeholder}
          rows={rows}
          className="border-gold/20 focus-visible:ring-burgundy"
        />
      )}
    </div>
  );
};

// Компонент формы обратной связи
const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика отправки формы
  };

  return (
    <Card className="border-gold/20 shadow-sm bg-white/80">
      <CardContent className="p-6 md:p-8">
        <h3 className="text-xl font-medium text-burgundy mb-6">
          Отправить сообщение
        </h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              id="name"
              label="Ваше имя"
              placeholder="Введите ваше имя"
              required
            />
            <FormField
              id="phone"
              label="Телефон"
              placeholder="+7 (___) ___-__-__"
              type="tel"
              required
            />
          </div>

          <FormField
            id="email"
            label="Email"
            placeholder="Ваш email адрес"
            type="email"
          />

          <FormField
            id="message"
            label="Сообщение"
            placeholder="Расскажите о ваших целях или задайте вопрос"
            as="textarea"
            rows={5}
          />

          <Button
            type="submit"
            className="w-full bg-burgundy text-cream hover:bg-burgundy/90"
          >
            Отправить сообщение
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

// Компонент с контактной информацией
interface ContactItemProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, children }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center mt-1">
        <Icon name={icon} className="h-5 w-5 text-burgundy" />
      </div>
      <div>
        <p className="font-medium">{title}</p>
        {children}
      </div>
    </div>
  );
};

// Компонент с социальными сетями
const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: "Вконтакте",
      icon: "MessageCircleMore",
      url: "https://vk.com/stezyapoznaniya?from=groups",
    },
    {
      name: "Telegram",
      icon: "Send",
      url: "https://t.me/stezyapoznaniya",
    },
    {
      name: "WhatsApp",
      icon: "MessageSquare",
      url: "#",
    },
  ];

  return (
    <div className="flex gap-3">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center hover:bg-burgundy hover:text-white transition-all"
          aria-label={link.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name={link.icon} className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

// Компонент с бесплатной консультацией
const FreeConsultation: React.FC = () => {
  return (
    <div className="bg-gold/10 rounded-xl p-6">
      <h3 className="text-lg font-medium text-burgundy mb-4">
        Бесплатная консультация
      </h3>
      <p className="text-muted-foreground mb-4">
        Запишитесь на бесплатную 30-минутную консультацию, чтобы
        обсудить ваши цели и определить оптимальную программу обучения.
      </p>
      <Button className="w-full bg-gold text-black hover:bg-gold/90">
        Записаться на консультацию
      </Button>
    </div>
  );
};

// Компонент с контактной информацией
const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-4">
      <ContactItem icon="Mail" title="Email">
        <a
          href="mailto:abashkina_aa@mail.ru"
          className="text-burgundy hover:underline"
        >
          abashkina_aa@mail.ru
        </a>
      </ContactItem>

      <ContactItem icon="Phone" title="Телефон">
        <a
          href="tel:+79296815742"
          className="text-burgundy hover:underline"
        >
          +7(929)681-57-42
        </a>
      </ContactItem>

      <ContactItem icon="Clock" title="Часы работы">
        <p className="text-muted-foreground">
          Пн-Пт: 10:00 - 20:00
        </p>
        <p className="text-muted-foreground">Сб: 10:00 - 16:00</p>
      </ContactItem>
    </div>
  );
};

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
