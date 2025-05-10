
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const LiteraryClubSection: React.FC = () => {
  return (
    <section id="literary-club" className="section py-20 bg-cream/50 relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-gold/5 blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-burgundy/5 blur-3xl"></div>
      </div>

      <div className="container">
        <h2 className="section-title">Литературный клуб</h2>
        <p className="section-subtitle">
          Присоединяйтесь к нашему литературному сообществу, где мы вместе читаем, 
          обсуждаем и анализируем произведения русской и мировой литературы
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Изображение */}
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute top-4 left-4 w-full h-full bg-gold/20 rounded-2xl -z-10"></div>
              <div className="w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://cdn.poehali.dev/files/5260689082349122321"
                  alt="Литературный клуб"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Текстовая информация */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif text-burgundy">
              Пространство для любителей литературы
            </h3>

            <p className="text-lg text-muted-foreground">
              Литературный клуб «Стезя познания» — это место, где встречаются увлеченные 
              литературой люди для обсуждения произведений русских и зарубежных авторов, 
              обмена мнениями и погружения в мир художественного слова.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mt-1">
                  <Icon name="CalendarDays" className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Регулярные встречи</h4>
                  <p className="text-muted-foreground">
                    Еженедельные встречи в дружеской атмосфере с чаем и увлекательными дискуссиями
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mt-1">
                  <Icon name="BookOpen" className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Разнообразная программа</h4>
                  <p className="text-muted-foreground">
                    Классическая литература, современная проза, поэзия и специальные 
                    тематические встречи
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mt-1">
                  <Icon name="Users" className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Для всех возрастов</h4>
                  <p className="text-muted-foreground">
                    Подростковая группа (12-16 лет) и взрослая группа (от 16 лет и старше)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button className="bg-burgundy text-cream hover:bg-burgundy/90">
                Присоединиться к клубу
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiteraryClubSection;
