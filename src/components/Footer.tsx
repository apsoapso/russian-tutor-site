import React from "react";
import Icon from "@/components/ui/icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-burgundy text-cream">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <img
              src="https://cdn.poehali.dev/files/63e2aaee-6ae7-4ca9-88a7-1ffaa8f8182f.png"
              alt="Стезя Познания"
              className="h-14 mb-4"
            />
            <p className="text-cream/80">
              Индивидуальные занятия по русскому языку и литературе для учеников
              всех возрастов. Профессиональная подготовка к ЕГЭ, ОГЭ и
              олимпиадам.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://vk.com/stezyapoznaniya?from=groups"
                className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="Вконтакте"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="MessageCircleMore" className="h-4 w-4" />
              </a>
              <a
                href="https://t.me/stezyapoznaniya"
                className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="Send" className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  Обо мне
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  Отзывы
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  Подготовка к ЕГЭ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  Подготовка к ОГЭ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  Повышение грамотности
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  Углубленное изучение литературы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  Подготовка к олимпиадам
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <Icon name="MapPin" className="h-5 w-5 text-gold" />
                <span className="text-cream/80">
                  г. Москва, ул. Примерная, д. 123
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Icon name="Mail" className="h-5 w-5 text-gold" />
                <a
                  href="mailto:info@stezya-poznaniya.ru"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  info@stezya-poznaniya.ru
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Icon name="Phone" className="h-5 w-5 text-gold" />
                <a
                  href="tel:+71234567890"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  +7 (123) 456-78-90
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/70 text-sm">
            © 2025 Стезя Познания. Все права защищены.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-cream/70 text-sm hover:text-cream transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-cream/70 text-sm hover:text-cream transition-colors"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
