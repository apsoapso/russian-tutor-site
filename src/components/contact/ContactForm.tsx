import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

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

export default ContactForm;
