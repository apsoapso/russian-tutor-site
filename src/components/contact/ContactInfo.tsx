import React from "react";
import Icon from "@/components/ui/icon";

// Компонент с контактной информацией
interface ContactItemProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, children }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mt-1">
        <Icon name={icon} className="h-5 w-5 text-gold" />
      </div>
      <div>
        <h4 className="font-medium text-lg text-burgundy">{title}</h4>
        {children}
      </div>
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
        <a href="tel:+79296815742" className="text-burgundy hover:underline">
          +7(929)681-57-42
        </a>
      </ContactItem>

      <ContactItem icon="Clock" title="Часы работы">
        <p className="text-muted-foreground">Пн-Пт: 10:00 - 22:00</p>
        <p className="text-muted-foreground">Сб-Вс: 10:00 - 20:00</p>
      </ContactItem>
    </div>
  );
};

export default ContactInfo;
export { ContactItem };
