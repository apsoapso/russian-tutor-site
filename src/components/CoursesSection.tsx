import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CourseProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  duration?: string;
  level?: string;
}

const CourseCard: React.FC<CourseProps> = ({
  title,
  description,
  image,
  tags,
  duration = "8 занятий",
  level = "Средний",
}) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg border-gold/20 hover:border-gold/50 bg-white/90">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-serif">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant={tag === "Литература" ? "default" : "secondary"}
              className={tag === "Литература" ? "bg-burgundy/90" : "bg-gold"}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="text-muted-foreground flex-grow">
        <p>{description}</p>

        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <Icon name="Clock" className="h-4 w-4 text-gold" />
            <span className="text-xs">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="BarChart2" className="h-4 w-4 text-gold" />
            <span className="text-xs">Уровень: {level}</span>
          </div>
        </div>
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
          Записаться на курс
        </Button>
      </CardFooter>
    </Card>
  );
};

const CoursesSection: React.FC = () => {
  const courses = [
    {
      title: "А.С. Пушкин «Капитанская дочка»",
      description:
        "Глубокий разбор знаменитого произведения русской литературы. Изучение исторического контекста, анализ характеров героев и художественных приемов автора.",
      image:
        "https://cdn.poehali.dev/files/32f907ae-2572-4e70-87c2-32a6d39b3558.jfif",
      tags: ["Школьная программа", "Литература"],
      duration: "6 занятий",
      level: "Средний",
    },
    {
      title: "Формирование красивого почерка",
      description:
        "Практический курс по развитию красивого, четкого и разборчивого почерка. Мы работаем над постановкой руки, темпом письма и эстетикой оформления текста.",
      image:
        "https://cdn.poehali.dev/files/e76baf78-b4f8-4379-b644-d5bbb75d9746.jpg",
      tags: ["Школьная программа", "Русский язык"],
      duration: "10 занятий",
      level: "Начальный",
    },
    {
      title: "Работа с поэтическим текстом",
      description:
        "Углубленный курс по анализу поэтических произведений. Изучение ритма, рифмы, художественных средств и приемов, используемых в поэзии.",
      image:
        "https://cdn.poehali.dev/files/114358cb-deb7-48b2-9ef6-5ee392cad51d.jfif",
      tags: ["Олимпиады", "Литература"],
      duration: "8 занятий",
      level: "Продвинутый",
    },
    {
      title: "Работа с прозаическим текстом",
      description:
        "Углубленное изучение техник анализа прозаических произведений. Исследование композиции, системы образов, художественного пространства и времени в тексте.",
      image:
        "https://cdn.poehali.dev/files/1ab79ea0-73a7-41c2-ad9b-b7e9dca19a57.jpg",
      tags: ["Олимпиады", "Литература"],
      duration: "8 занятий",
      level: "Продвинутый",
    },
  ];

  return (
    <section
      id="courses"
      className="section bg-cream/50 py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-gold/5 blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-burgundy/5 blur-3xl"></div>
      </div>

      <div className="container">
        <h2 className="section-title">Курсы</h2>
        <p className="section-subtitle">
          Специально разработанные образовательные программы для глубокого
          изучения русского языка и литературы
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-lg">
            Интересует индивидуальная программа? Свяжитесь со мной для
            обсуждения.
          </p>
          <Button
            className="bg-burgundy text-cream hover:bg-burgundy/90 text-lg py-6 px-8"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Связаться
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
