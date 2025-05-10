import React from "react";
import { Button } from "@/components/ui/button";

// Компонент с бесплатной консультацией
const FreeConsultation: React.FC = () => {
  return (
    <div className="bg-gold/10 rounded-xl p-6">
      <h3 className="text-lg font-medium text-burgundy mb-4">
        Бесплатная консультация
      </h3>
      <p className="text-muted-foreground mb-4">
        Запишитесь на бесплатную 30-минутную консультацию, чтобы обсудить ваши
        цели и определить оптимальную программу обучения.
      </p>
      <Button className="w-full bg-burgundy text-cream hover:bg-burgundy/90">
        Записаться на консультацию
      </Button>
    </div>
  );
};

export default FreeConsultation;
