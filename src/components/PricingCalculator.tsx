
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";

interface PricingOption {
  id: string;
  title: string;
  price: number;
}

const serviceTypes: PricingOption[] = [
  { id: "ege", title: "Подготовка к ЕГЭ", price: 1500 },
  { id: "oge", title: "Подготовка к ОГЭ", price: 1300 },
  { id: "literacy", title: "Повышение грамотности", price: 1100 },
  { id: "advanced", title: "Углубленное изучение", price: 1400 },
  { id: "olympiad", title: "Подготовка к олимпиадам", price: 1700 },
];

const formats: PricingOption[] = [
  { id: "individual", title: "Индивидуальные занятия", price: 1 },
  { id: "group", title: "Мини-группа (2-3 человека)", price: 0.7 },
];

const frequencies: PricingOption[] = [
  { id: "once", title: "Разовое занятие", price: 1, count: 1 },
  { id: "weekly", title: "1 раз в неделю", price: 0.95, count: 4 },
  { id: "twice", title: "2 раза в неделю", price: 0.9, count: 8 },
];

const durations: PricingOption[] = [
  { id: "60", title: "60 минут", price: 1 },
  { id: "90", title: "90 минут", price: 1.4 },
  { id: "120", title: "120 минут", price: 1.8 },
];

interface CalculatorFormValues {
  serviceType: string;
  format: string;
  frequency: string;
  duration: string;
}

const PricingCalculator: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [sessionCount, setSessionCount] = useState<number>(1);

  const form = useForm<CalculatorFormValues>({
    defaultValues: {
      serviceType: "ege",
      format: "individual",
      frequency: "once",
      duration: "60",
    },
  });

  const watchAllFields = form.watch();

  useEffect(() => {
    calculatePrice();
  }, [watchAllFields]);

  const calculatePrice = () => {
    const serviceType = serviceTypes.find(
      (s) => s.id === watchAllFields.serviceType
    );
    const format = formats.find((f) => f.id === watchAllFields.format);
    const frequency = frequencies.find(
      (f) => f.id === watchAllFields.frequency
    );
    const duration = durations.find((d) => d.id === watchAllFields.duration);

    if (serviceType && format && frequency && duration) {
      const basePrice = serviceType.price;
      const formatMultiplier = format.price;
      const frequencyMultiplier = frequency.price;
      const durationMultiplier = duration.price;

      const sessionPrice = Math.round(
        basePrice * formatMultiplier * frequencyMultiplier * durationMultiplier
      );

      const count = (frequency as any).count || 1;
      setSessionCount(count);
      setTotalPrice(sessionPrice * count);
    }
  };

  return (
    <section id="pricing" className="section bg-cream/50 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-gold/5 blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-burgundy/5 blur-3xl"></div>
      </div>

      <div className="container">
        <h2 className="section-title">Рассчитать стоимость</h2>
        <p className="section-subtitle">
          Выберите параметры, чтобы узнать примерную стоимость занятий
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <Card className="border-gold/20 shadow-sm bg-white/80 h-auto">
            <CardContent className="p-6 md:p-8">
              <Form {...form}>
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-medium text-burgundy">
                          Выберите направление
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full border-gold/20 focus-visible:ring-burgundy">
                              <SelectValue placeholder="Выберите направление" />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceTypes.map((service) => (
                                <SelectItem key={service.id} value={service.id}>
                                  {service.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="format"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-medium text-burgundy">
                          Формат занятий
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full border-gold/20 focus-visible:ring-burgundy">
                              <SelectValue placeholder="Выберите формат" />
                            </SelectTrigger>
                            <SelectContent>
                              {formats.map((format) => (
                                <SelectItem key={format.id} value={format.id}>
                                  {format.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="frequency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-medium text-burgundy">
                          Частота занятий
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full border-gold/20 focus-visible:ring-burgundy">
                              <SelectValue placeholder="Выберите частоту" />
                            </SelectTrigger>
                            <SelectContent>
                              {frequencies.map((frequency) => (
                                <SelectItem
                                  key={frequency.id}
                                  value={frequency.id}
                                >
                                  {frequency.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-medium text-burgundy">
                          Продолжительность занятия
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full border-gold/20 focus-visible:ring-burgundy">
                              <SelectValue placeholder="Выберите продолжительность" />
                            </SelectTrigger>
                            <SelectContent>
                              {durations.map((duration) => (
                                <SelectItem
                                  key={duration.id}
                                  value={duration.id}
                                >
                                  {duration.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </Form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-burgundy">
                  Предварительный расчет
                </h3>
                <p className="text-muted-foreground">
                  Расчет ниже приведен для общего ознакомления. Точная стоимость занятий может
                  отличаться и зависит от индивидуальных потребностей и целей обучения.
                </p>
              </div>

              <div className="bg-white/80 rounded-xl p-6 border border-gold/20 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted-foreground">Количество занятий:</span>
                  <span className="font-medium">{sessionCount}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted-foreground">Стоимость за 1 занятие:</span>
                  <span className="font-medium">
                    {Math.round(totalPrice / sessionCount)} ₽
                  </span>
                </div>
                <div className="flex justify-between items-center font-medium text-xl text-burgundy">
                  <span>Итого:</span>
                  <span>{totalPrice} ₽</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gold/10 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Icon name="Info" className="h-5 w-5 text-gold" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Для получения точной стоимости и составления индивидуального учебного плана, 
                  запишитесь на бесплатную консультацию.
                </p>
              </div>

              <Button
                className="w-full bg-burgundy text-cream hover:bg-burgundy/90 py-6"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
