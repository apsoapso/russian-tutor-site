import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  avatar?: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const [active, setActive] = useState(0);

  const testimonials: Testimonial[] = [
    {
      content:
        "В 2023 году готовилась к ОГЭ, сдала на 5! В этом году уже готовимся к ЕГЭ. Как и любой ученик я волнуюсь, но занятия с Анной Алексеевной дают уверенность в собственных силах! Анна Алексеевна объясняет материал очень понятно и всегда отвечает на все вопросы. Я очень благодарна за профессионализм и индивидуальный подход.",
      author: "Лиза",
      role: "Ученица",
      rating: 5,
    },
    {
      content:
        "Мой сын никогда не любил русский язык, но после занятий с Анной Алексеевной его отношение кардинально изменилось. Он не только улучшил оценки в школе, но и стал интересоваться литературой. Для нас это настоящее чудо!",
      author: "Анна",
      role: "Мама ученика 8 класса",
      rating: 5,
    },
    {
      content:
        "Подготовка к ОГЭ оказалась гораздо интереснее, чем я ожидал. Каждое занятие было насыщенным и увлекательным. Результат — 5 по русскому языку и уверенность в своих знаниях. Теперь готовлюсь к ЕГЭ только с Анной Алексеевной!",
      author: "Тимофей",
      role: "Ученик 10 класса",
      rating: 5,
    },
    {
      content:
        "Я обратился к Анне Алексеевне за помощью при подготовке к экзамену по литературе (ДВИ), который меня ожидал в период поступления в МГУ им. М.В. Ломоносова. Анализ текстов и практические занятия ч Анной Алексеевной мне очень помогли — я поступил! Спасибо за профессионализм и вдохновение.",
      author: "Никита",
      role: "Студент филологического факультета МГУ им. М.В. Ломоносова",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section bg-burgundy/5 py-20">
      <div className="container">
        <h2 className="section-title">Отзывы учеников</h2>
        <p className="section-subtitle">
          Что говорят мои ученики и их родители о нашей совместной работе
        </p>

        <div className="mt-12 relative">
          {/* Large testimonial card */}
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white">
              <Icon name="Quote" className="h-6 w-6" />
            </div>

            <Card className="border-gold/20 bg-white/80 backdrop-blur p-8 md:p-10">
              <CardContent className="px-0 pt-0">
                <p className="text-lg md:text-xl font-medium italic mb-8">
                  "{testimonials[active].content}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center">
                      <Icon name="User" className="h-6 w-6 text-burgundy" />
                    </div>
                    <div>
                      <p className="font-semibold">
                        {testimonials[active].author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[active].role}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className={cn(
                          "h-5 w-5",
                          i < testimonials[active].rating
                            ? "text-gold fill-gold"
                            : "text-gray-300",
                        )}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  active === index
                    ? "bg-burgundy w-6"
                    : "bg-burgundy/20 hover:bg-burgundy/40",
                )}
                onClick={() => setActive(index)}
                aria-label={`Показать отзыв ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
