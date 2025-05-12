import React from "react";
import Icon from "@/components/ui/icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  cta,
}) => {
  return (
    <Card className="border-gold/20 hover:border-gold/50 transition-all duration-300 h-full flex flex-col bg-white/80">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
          <Icon name={icon} className="h-6 w-6 text-gold" />
        </div>
        <CardTitle className="text-2xl mb-2">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Icon
                name="Check"
                className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-burgundy text-cream hover:bg-burgundy/90"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {cta}
        </Button>
      </CardFooter>
    </Card>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "GraduationCap",
      title: "Подготовка к ЕГЭ",
      description:
        "Целенаправленная подготовка к успешной сдаче ЕГЭ по русскому языку и литературе",
      features: [
        "Разбор всех типов заданий ЕГЭ",
        "Отработка сочинений",
        "Регулярные тренировочные тесты",
        "Система запоминания правил",
      ],
      cta: "Записаться",
    },
    {
      icon: "BookOpen",
      title: "Подготовка к ОГЭ",
      description:
        "Эффективная подготовка к успешной сдаче ОГЭ по русскому языку и литературе",
      features: [
        "Разбор всех типов заданий ОГЭ",
        "Отработка изложений и сочинений",
        "Систематизация знаний",
        "Работа над ошибками",
      ],
      cta: "Записаться",
    },
    {
      icon: "PencilRuler",
      title: "Повышение грамотности",
      description: "Улучшение общего уровня грамотности и культуры речи",
      features: [
        "Устранение пробелов в знаниях",
        "Отработка правил и исключений",
        "Развитие навыков письменной речи",
        "Расширение словарного запаса",
      ],
      cta: "Записаться",
    },
    {
      icon: "BookMarked",
      title: "Углубленное изучение",
      description:
        "Углубленное изучение русского языка и литературы для увлеченных предметом",
      features: [
        "Анализ художественных произведений",
        "Литературоведческие аспекты",
        "Стилистика и выразительность речи",
        "Исследовательская работа",
      ],
      cta: "Записаться",
    },
  ];

  return (
    <section id="services" className="section bg-cream py-20">
      <div className="container">
        <h2 className="section-title">Наши направления</h2>
        <p className="section-subtitle">
          Предлагаю различные форматы занятий, адаптированные под ваши цели и
          уровень подготовки
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-lg">
            Не нашли подходящий формат? Свяжитесь со мной для обсуждения
            индивидуальной программы
          </p>
          <Button
            className="bg-burgundy text-cream hover:bg-burgundy/90 text-lg py-6 px-8"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
