
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FormatSection: React.FC = () => {
  return (
    <section id="format" className="section bg-gold/5 py-20">
      <div className="container">
        <h2 className="section-title">Формат занятий</h2>
        <p className="section-subtitle">
          Выберите наиболее удобный для вас формат обучения
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Мини-группы */}
          <Card className="border-gold/20 bg-white/90 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-burgundy/10 flex items-center justify-center">
                  <Icon name="Users" className="h-8 w-8 text-burgundy" />
                </div>
              </div>
              
              <h3 className="text-2xl font-serif text-burgundy text-center mb-6">Мини-группы</h3>
              
              <p className="mb-6 text-muted-foreground">
                Мои ученики уже освоили формат совмещения индивидуальных и групповых занятий. 
                На практике мы вместе доказали, что достижение цели даётся легче и проходит 
                интереснее, когда появляются единомышленники.
              </p>
              
              <div className="bg-gold/5 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-burgundy mb-3">📚 Наши мини-группы формируются по видам целей ребят:</h4>
                <ul className="space-y-2 pl-6 list-disc text-muted-foreground">
                  <li>олимпиадная группа</li>
                  <li>группа ГИА (отдельно ОГЭ и ЕГЭ)</li>
                  <li>группа школьной программы</li>
                </ul>
              </div>
              
              <p className="text-muted-foreground">
                У каждого моего ученика свой уникальный путь развития, однако, порой очень важно 
                на этом пути встретить единомышленников, при общении с которыми могут зародиться 
                новые важные размышления и выводы.
              </p>
            </CardContent>
          </Card>
          
          {/* Индивидуальные занятия */}
          <Card className="border-gold/20 bg-white/90 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-burgundy/10 flex items-center justify-center">
                  <Icon name="UserCircle" className="h-8 w-8 text-burgundy" />
                </div>
              </div>
              
              <h3 className="text-2xl font-serif text-burgundy text-center mb-6">Индивидуальные занятия</h3>
              
              <p className="mb-6 text-muted-foreground">
                Некоторые направления требуют индивидуального подхода для максимальной 
                эффективности и учета особенностей каждого ученика.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gold/5">
                  <div className="shrink-0 mt-1">✏️</div>
                  <div>
                    <h4 className="font-medium text-burgundy">Развитие речи. Творческие сочинения</h4>
                    <p className="text-sm text-muted-foreground">
                      Индивидуальная работа над развитием уникального стиля и способностей к самовыражению
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gold/5">
                  <div className="shrink-0 mt-1">✏️</div>
                  <div>
                    <h4 className="font-medium text-burgundy">Сочинения ГИА</h4>
                    <p className="text-sm text-muted-foreground">
                      Персональная подготовка к написанию сочинений для успешной сдачи экзаменов
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gold/5">
                  <div className="shrink-0 mt-1">🗣️</div>
                  <div>
                    <h4 className="font-medium text-burgundy">Устное собеседование ОГЭ</h4>
                    <p className="text-sm text-muted-foreground">
                      Специализированная подготовка к устной части экзамена с учетом индивидуальных особенностей речи
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="mt-6 text-muted-foreground">
                Занятия по этим направлениям проходят <span className="font-medium text-burgundy">ТОЛЬКО в индивидуальном формате</span>, 
                потому что каждый ученик, его ход мыслей и работа над созданием сочинения или устного высказывания - 
                индивидуальность, волю которой я и даю на занятиях.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FormatSection;
