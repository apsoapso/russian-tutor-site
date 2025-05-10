import React from "react";
import Icon from "@/components/ui/icon";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container">
        <h2 className="section-title">О наставнике</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Image column */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-2xl"></div>
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://cdn.poehali.dev/files/148e37ea-b9b3-4851-b762-33cc93420896.jpg"
                alt="Портрет преподавателя"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center">
                  <Icon name="Award" className="h-6 w-6 text-burgundy" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Опыт работы</p>
                  <p className="font-semibold text-burgundy">Более 5 лет</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif text-burgundy">
              Анна Алексеевна Абашкина
            </h3>

            <p className="text-lg text-muted-foreground">
              Я преподаватель русского языка и литературы с более чем 5-летним
              опытом работы. Моя миссия — помочь каждому ученику раскрыть свой
              потенциал и влюбиться в русский язык и литературу.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mt-1">
                  <Icon name="GraduationCap" className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Образование</h4>
                  <p className="text-muted-foreground">
                    Филологический факультет МГУ им. М.В. Ломоносова,
                    специальность «Русский язык и литература»
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mt-1">
                  <Icon name="Trophy" className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Достижения</h4>
                  <p className="text-muted-foreground">
                    Мои ученики получают высокие баллы за прохождение ГИА (ОГЭ и
                    ЕГЭ), становятся призерами олимпиад и поступают в ведущие
                    вузы страны.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mt-1">
                  <Icon name="BookOpen" className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Подход к обучению</h4>
                  <p className="text-muted-foreground">
                    В своей работе я использую индивидуальный подход к каждому
                    ученику, современные методики и авторские разработки,
                    помогающие эффективно осваивать материал.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
