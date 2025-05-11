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

        <div className="mt-12">
          {/* Новый макет: карточки с горизонтальным расположением */}
          <div className="space-y-8">
            {/* Мини-группы */}
            <Card className="border-gold/20 bg-white/90 shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
                <div className="bg-burgundy/10 p-8 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-burgundy/20 flex items-center justify-center">
                    <Icon name="Users" className="h-10 w-10 text-burgundy" />
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif text-burgundy mb-4">Мини-группы</h3>
                  
                  <p className="mb-4 text-muted-foreground">
                    Мои ученики уже освоили формат совмещения индивидуальных и групповых занятий. 
                    На практике мы вместе доказали, что достижение цели даётся легче и проходит 
                    интереснее, когда появляются единомышленники.
                  </p>
                  
                  <div className="bg-gold/5 p-4 rounded-lg mb-4">
                    <h4 className="font-medium text-burgundy mb-2">📚 Наши мини-группы формируются по видам целей ребят:</h4>
                    <ul className="space-y-1 pl-6 list-disc text-muted-foreground">
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
              </div>
            </Card>
            
            {/* Индивидуальные занятия */}
            <Card className="border-gold/20 bg-white/90 shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
                <div className="bg-burgundy/10 p-8 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-burgundy/20 flex items-center justify-center">
                    <Icon name="UserCircle" className="h-10 w-10 text-burgundy" />
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif text-burgundy mb-4">Индивидуальные занятия</h3>
                  
                  <p className="mb-4 text-muted-foreground">
                    Некоторые направления требуют индивидуального подхода для максимальной 
                    эффективности и учета особенностей каждого ученика.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <div className="p-4 rounded-lg bg-gold/5">
                      <div className="flex items-start gap-2">
                        <div className="shrink-0 mt-1">✏️</div>
                        <h4 className="font-medium text-burgundy">Развитие речи. Творческие сочинения</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Индивидуальная работа над развитием уникального стиля
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-gold/5">
                      <div className="flex items-start gap-2">
                        <div className="shrink-0 mt-1">✏️</div>
                        <h4 className="font-medium text-burgundy">Сочинения ГИА</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Персональная подготовка к экзаменационным сочинениям
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-gold/5">
                      <div className="flex items-start gap-2">
                        <div className="shrink-0 mt-1">🗣️</div>
                        <h4 className="font-medium text-burgundy">Устное собеседование ОГЭ</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Подготовка к устной части с учетом особенностей речи
                      </p>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-muted-foreground">
                    Занятия по этим направлениям проходят <span className="font-medium text-burgundy">ТОЛЬКО в индивидуальном формате</span>, 
                    потому что каждый ученик, его ход мыслей и работа над созданием сочинения или устного высказывания - 
                    индивидуальность, волю которой я и даю на занятиях.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormatSection;
