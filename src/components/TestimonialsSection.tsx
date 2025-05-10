
import React, { useState } from 'react';
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
      content: "Благодаря занятиям я смогла повысить свой балл ЕГЭ по русскому языку с 65 до 92! Преподаватель объясняет материал очень понятно и всегда отвечает на все вопросы. Я очень благодарна за профессионализм и индивидуальный подход.",
      author: "Анна К.",
      role: "Выпускница, 2024 год",
      rating: 5
    },
    {
      content: "Мой сын никогда не любил русский язык, но после занятий со Стезей Познания его отношение кардинально изменилось. Он не только улучшил оценки в школе, но и стал интересоваться литературой. Для нас это настоящее чудо!",
      author: "Ольга М.",
      role: "Мама ученика 8 класса",
      rating: 5
    },
    {
      content: "Подготовка к ОГЭ оказалась гораздо интереснее, чем я ожидала. Каждое занятие было насыщенным и увлекательным. Результат — 5 по русскому языку и уверенность в своих знаниях. Теперь готовлюсь к ЕГЭ только с этим преподавателем!",
      author: "Дмитрий С.",
      role: "Ученик 10 класса",
      rating: 5
    },
    {
      content: "Я обратилась за помощью в подготовке к творческому конкурсу в театральный вуз. Работа над сочинениями, анализом текстов и выразительностью речи дала отличные результаты — я поступила! Спасибо за профессионализм и вдохновение.",
      author: "Екатерина В.",
      role: "Студентка театрального вуза",
      rating: 5
    }
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
                      <p className="font-semibold">{testimonials[active].author}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[active].role}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i}
                        name="Star" 
                        className={cn(
                          "h-5 w-5",
                          i < testimonials[active].rating ? "text-gold fill-gold" : "text-gray-300"
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
                  active === index ? "bg-burgundy w-6" : "bg-burgundy/20 hover:bg-burgundy/40"
                )}
                onClick={() => setActive(index)}
                aria-label={`Показать отзыв ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <p className="text-3xl font-bold text-burgundy mb-2">100+</p>
            <p className="text-muted-foreground">Довольных учеников</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <p className="text-3xl font-bold text-burgundy mb-2">95%</p>
            <p className="text-muted-foreground">Сдали на 80+ баллов</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <p className="text-3xl font-bold text-burgundy mb-2">10+</p>
            <p className="text-muted-foreground">Лет опыта</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <p className="text-3xl font-bold text-burgundy mb-2">15</p>
            <p className="text-muted-foreground">Призеров олимпиад</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
