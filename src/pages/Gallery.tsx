
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Gallery = () => {
  // Массив фотографий для галереи, сгруппированный по категориям
  const galleryCategories = [
    {
      title: "Литературный клуб",
      description: "Встречи, обсуждения и творческие моменты нашего литературного клуба",
      images: [
        {
          src: "https://cdn.poehali.dev/files/eab30d74-3d69-42ca-99f5-2413bd6d12b0.jpg",
          alt: "Занятие в Литературном клубе",
          description: "Занятия в канун новогодних праздников с книгами и гитарой"
        },
        {
          src: "https://cdn.poehali.dev/files/176f8145-0540-4f36-99eb-4e78caff1019.jpg",
          alt: "Групповое фото Литературного клуба",
          description: "Участники литературного клуба после творческого вечера"
        },
        {
          src: "https://cdn.poehali.dev/files/7308dcb5-007e-46bf-be57-1ccf8d88bf11.jpg",
          alt: "Встреча Литературного клуба",
          description: "Участники литературного клуба у информационного стенда"
        },
        {
          src: "https://cdn.poehali.dev/files/9533c309-2b29-476b-95d9-2d6c890d61e4.jpg",
          alt: "Занятие Литературного клуба",
          description: "Младшие участники литературного клуба на занятии"
        },
        {
          src: "https://cdn.poehali.dev/files/add1480d-89bd-4668-8982-d1d7c1485651.jpg",
          alt: "Летнее занятие",
          description: "Летняя встреча участников литературного клуба"
        }
      ]
    },
    {
      title: "Занятия по русскому языку",
      description: "Индивидуальные и групповые занятия по русскому языку",
      images: [
        {
          src: "https://cdn.poehali.dev/files/608ef03b-769f-4d50-a6c6-cfaf959d6fc0.jpg",
          alt: "Урок по русскому языку",
          description: "Студенты во время изучения правил русского языка"
        },
        {
          src: "https://cdn.poehali.dev/files/114358cb-deb7-48b2-9ef6-5ee392cad51d.jfif",
          alt: "Работа с поэтическим текстом",
          description: "Разбор поэтических произведений на занятии"
        },
        {
          src: "https://cdn.poehali.dev/files/e76baf78-b4f8-4379-b644-d5bbb75d9746.jpg",
          alt: "Формирование красивого почерка",
          description: "Занятие по развитию красивого и четкого почерка"
        }
      ]
    },
    {
      title: "Подготовка к экзаменам",
      description: "Подготовка к ОГЭ и ЕГЭ по русскому языку и литературе",
      images: [
        {
          src: "https://cdn.poehali.dev/files/1ab79ea0-73a7-41c2-ad9b-b7e9dca19a57.jpg",
          alt: "Подготовка к экзаменам",
          description: "Групповое занятие по подготовке к ЕГЭ"
        },
        {
          src: "https://cdn.poehali.dev/files/32f907ae-2572-4e70-87c2-32a6d39b3558.jfif",
          alt: "Анализ литературных произведений",
          description: "Разбор произведений А.С. Пушкина на занятии"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero section */}
      <section className="pt-32 pb-16 bg-gold/5 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl"></div>
          <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-burgundy/10 blur-3xl"></div>
        </div>
        
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif text-burgundy text-center mb-6">Галерея</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Фотографии с занятий, встреч литературного клуба и других мероприятий
          </p>
        </div>
      </section>
      
      {/* Gallery sections */}
      <div className="py-16">
        <div className="container">
          {galleryCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <h2 className="text-3xl font-serif text-burgundy mb-4">{category.title}</h2>
              <p className="text-muted-foreground mb-8">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, imageIndex) => (
                  <Card key={imageIndex} className="overflow-hidden border-gold/20 hover:border-gold/50 transition-all duration-300 h-full bg-white/80">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="text-muted-foreground text-sm">{image.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
          
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Хотите присоединиться к нашим занятиям или литературному клубу?
            </p>
            <Button 
              className="bg-burgundy text-cream hover:bg-burgundy/90 py-6 px-8"
              onClick={() => window.location.href = "/#contact"}
            >
              <Icon name="MessageSquare" className="mr-2 h-5 w-5" />
              Связаться с наставником
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Gallery;
