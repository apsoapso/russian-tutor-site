import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

// Компонент для отображения преимущества клуба
interface ClubBenefitProps {
  icon: string;
  children: React.ReactNode;
}

const ClubBenefit: React.FC<ClubBenefitProps> = ({ icon, children }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mt-1">
        <Icon name={icon} className="h-5 w-5 text-gold" />
      </div>
      <div>
        <p className="text-muted-foreground">{children}</p>
      </div>
    </div>
  );
};

// Компонент для отображения изображения в галерее
interface GalleryImageProps {
  src: string;
  alt: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt }) => {
  return (
    <div className="overflow-hidden rounded-lg h-64 shadow-md transition-all duration-300 hover:shadow-xl">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

// Компонент для отображения главного изображения клуба
const ClubMainImage: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute top-4 left-4 w-full h-full bg-burgundy/20 rounded-2xl -z-10"></div>
      <div className="w-full aspect-[4/3] bg-[#EEC414] rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://cdn.poehali.dev/files/b3f3a83b-e2d1-4738-84d5-f3fc59fd5c81.jpg"
          alt="Литературный клуб"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

// Компонент для отображения галереи изображений
const ClubGallery: React.FC = () => {
  const galleryImages = [
    {
      src: "https://cdn.poehali.dev/files/eab30d74-3d69-42ca-99f5-2413bd6d12b0.jpg",
      alt: "Фото 1",
    },
    {
      src: "https://cdn.poehali.dev/files/176f8145-0540-4f36-99eb-4e78caff1019.jpg",
      alt: "Фото 2",
    },
    {
      src: "https://cdn.poehali.dev/files/7308dcb5-007e-46bf-be57-1ccf8d88bf11.jpg",
      alt: "Фото 3",
    },
    {
      src: "https://cdn.poehali.dev/files/9533c309-2b29-476b-95d9-2d6c890d61e4.jpg",
      alt: "Фото 4",
    },
  ];

  return (
    <div className="mt-20">
      <h3 className="text-2xl font-serif text-burgundy mb-8 text-center">
        Галерея
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <GalleryImage key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

// Компонент с информацией о целевой аудитории клуба
const ClubAudienceInfo: React.FC = () => {
  const benefits = [
    {
      icon: "BookOpen",
      text: (
        <>
          Тем, кто <span className="font-medium text-burgundy">любит</span> или
          хочет полюбить{" "}
          <span className="font-medium text-burgundy">русскую литературу</span>
        </>
      ),
    },
    {
      icon: "Eye",
      text: (
        <>
          Тем, кто хочет научиться{" "}
          <span className="font-medium text-burgundy">
            видеть тексты по-новому
          </span>
        </>
      ),
    },
    {
      icon: "MessageSquare",
      text: (
        <>
          Тем, кто хочет обогатить свою устную и письменную{" "}
          <span className="font-medium text-burgundy">речь</span>
        </>
      ),
    },
    {
      icon: "Users",
      text: (
        <>
          Тем, кто ищет{" "}
          <span className="font-medium text-burgundy">друзей</span> и
          единомышленников
        </>
      ),
    },
    {
      icon: "Brain",
      text: (
        <>
          Тем, кто хочет духовного и интеллектуального{" "}
          <span className="font-medium text-burgundy">развития</span>
        </>
      ),
    },
    {
      icon: "GraduationCap",
      text: (
        <>
          <span className="font-medium text-burgundy">
            Олимпиадникам и выпускникам 9-11 классов
          </span>
        </>
      ),
    },
    {
      icon: "Mic",
      text: (
        <>
          Тем, <span className="font-medium text-burgundy">кому есть что сказать</span>,
          и тем,{" "}
          <span className="font-medium text-burgundy">кто хочет быть услышанным</span>
        </>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-serif text-burgundy">
        Кому подходят встречи Литературного Клуба?
      </h3>

      <div className="space-y-4 bg-gold/10 p-6 rounded-xl">
        {benefits.map((benefit, index) => (
          <ClubBenefit key={index} icon={benefit.icon}>
            {benefit.text}
          </ClubBenefit>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-6 mt-4">
        <div className="bg-gold/20 px-4 py-2 rounded-lg">
          <p className="font-medium text-burgundy">
            Возраст участников:{" "}
            <span className="font-bold text-xl">11+</span>
          </p>
        </div>
        <Button
          className="bg-burgundy text-cream hover:bg-burgundy/90"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Присоединиться к клубу
        </Button>
      </div>
    </div>
  );
};

// Основной компонент раздела литературного клуба
const LiteraryClubSection: React.FC = () => {
  return (
    <section
      id="literary-club"
      className="section py-20 bg-cream/50 relative overflow-hidden"
    >
      {/* Фоновые декоративные элементы */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-gold/5 blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-burgundy/5 blur-3xl"></div>
      </div>

      <div className="container">
        <h2 className="section-title">Литературный клуб</h2>
        <p className="section-subtitle">
          Присоединяйтесь к нашему литературному сообществу, где мы вместе
          читаем, обсуждаем и анализируем произведения русской литературы
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Изображение литературного клуба */}
          <ClubMainImage />

          {/* Информация о целевой аудитории */}
          <ClubAudienceInfo />
        </div>

        {/* Галерея фотографий */}
        <ClubGallery />
      </div>
    </section>
  );
};

export default LiteraryClubSection;
