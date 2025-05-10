import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 pb-8 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(230, 216, 201, 0.9), rgba(230, 216, 201, 0.95))",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-burgundy/10 blur-3xl"></div>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="flex flex-col space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-serif font-bold leading-tight text-burgundy">
            Любовью
            <br />
            к русской культуре
            <br />
            объединённые!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            Индивидуальные занятия с профессиональным репетитором. Подготовка к
            ЕГЭ и ОГЭ, повышение грамотности и развитие речи для учеников любого
            уровня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-burgundy text-cream hover:bg-burgundy/90 text-lg py-6 px-8">
              Записаться на урок
            </Button>
            <Button
              variant="outline"
              className="border-burgundy text-burgundy hover:bg-burgundy/10 text-lg py-6 px-8"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Узнать программы
            </Button>
          </div>
          <div className="flex items-center gap-6 mt-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#CF9C17"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">5+ лет опыта</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#CF9C17"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Высокие результаты</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#CF9C17"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Индивидуальный подход</span>
            </div>
          </div>
        </div>

        {/* Image Area */}
        <div className="relative h-full flex items-center justify-center pt-8 md:pt-0">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute top-4 left-4 w-full h-full bg-gold/20 rounded-2xl -z-10"></div>
            <div className="w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://cdn.poehali.dev/files/31074c49-ada9-4bac-b216-3ec906a161e0.jpg"
                alt="Книги о русской культуре и литературе"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm font-medium text-muted-foreground mb-2">
          Прокрутите вниз
        </span>
        <div className="w-6 h-10 border-2 border-burgundy rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-burgundy rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
