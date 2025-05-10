
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
                  src="https://cdn.poehali.dev/files/608ef03b-769f-4d50-a6c6-cfaf959d6fc0.jpg"
                  alt="Литературный клуб"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Текстовая информация */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif text-burgundy">
              Кому подходят встречи Литературного Клуба?
            </h3>

            <div className="space-y-4 bg-gold/10 p-6 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mt-1">
                  <Icon name="BookOpen" className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-muted-foreground">
                    Тем, кто <span className="font-medium text-burgundy">любит</span> или хочет полюбить <span className="font-medium text-burgundy">русскую литературу</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mt-1">
                  <Icon name="Eye" className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-muted-foreground">
                    Тем, кто хочет научиться <span className="font-medium text-burgundy">видеть тексты по-новому</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mt-1">
                  <Icon name="MessageSquare" className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-muted-foreground">
                    Тем, кто хочет обогатить свою устную и письменную <span className="font-medium text-burgundy">речь</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mt-1">
                  <Icon name="Users" className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-muted-foreground">
                    Тем, кто ищет <span className="font-medium text-burgundy">друзей</span> и единомышленников для занимательной беседы и интересного досуга
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mt-1">
                  <Icon name="Brain" className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-muted-foreground">
                    Тем, кто хочет духовного и интеллектуального <span className="font-medium text-burgundy">развития</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mt-1">
                  <Icon name="GraduationCap" className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-burgundy">Олимпиадникам и выпускникам 9-11 классов</span>, которые готовятся к конкурсным и экзаменационным испытаниям по русскому языку и литературе
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mt-1">
                  <Icon name="Mic" className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-muted-foreground">
                    Тем, <span className="font-medium text-burgundy">кому есть что сказать</span>, и тем, <span className="font-medium text-burgundy">кто хочет быть услышанным</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-4">
              <div className="bg-gold/20 px-4 py-2 rounded-lg">
                <p className="font-medium text-burgundy">Возраст участников: <span className="font-bold text-xl">11+</span></p>
              </div>
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
