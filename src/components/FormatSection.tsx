
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
          {/* Здесь будет размещено содержимое раздела в будущем */}
          <div className="bg-white/80 rounded-xl p-8 text-center">
            <Icon name="Clock" className="h-12 w-12 text-burgundy/70 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-burgundy mb-4">Содержание раздела обновляется</h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Информация о форматах занятий будет добавлена в ближайшее время. Следите за обновлениями!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormatSection;
