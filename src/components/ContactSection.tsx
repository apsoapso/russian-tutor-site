
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container">
        <h2 className="section-title">Связаться со мной</h2>
        <p className="section-subtitle">
          Есть вопросы или готовы начать обучение? Свяжитесь со мной любым удобным способом
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact form */}
          <Card className="border-gold/20 shadow-sm bg-white/80">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-medium text-burgundy mb-6">Отправить сообщение</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ваше имя <span className="text-burgundy">*</span>
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Введите ваше имя" 
                      required 
                      className="border-gold/20 focus-visible:ring-burgundy"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Телефон <span className="text-burgundy">*</span>
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+7 (___) ___-__-__" 
                      required 
                      className="border-gold/20 focus-visible:ring-burgundy"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Ваш email адрес" 
                    className="border-gold/20 focus-visible:ring-burgundy"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о ваших целях или задайте вопрос" 
                    rows={5} 
                    className="border-gold/20 focus-visible:ring-burgundy"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-burgundy text-cream hover:bg-burgundy/90">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-burgundy">Контактная информация</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center mt-1">
                    <Icon name="MapPin" className="h-5 w-5 text-burgundy" />
                  </div>
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center mt-1">
                    <Icon name="Mail" className="h-5 w-5 text-burgundy" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@stezya-poznaniya.ru" className="text-burgundy hover:underline">
                      info@stezya-poznaniya.ru
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center mt-1">
                    <Icon name="Phone" className="h-5 w-5 text-burgundy" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <a href="tel:+71234567890" className="text-burgundy hover:underline">
                      +7 (123) 456-78-90
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center mt-1">
                    <Icon name="Clock" className="h-5 w-5 text-burgundy" />
                  </div>
                  <div>
                    <p className="font-medium">Часы работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 10:00 - 20:00</p>
                    <p className="text-muted-foreground">Сб: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-burgundy">Социальные сети</h3>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center hover:bg-burgundy hover:text-white transition-all"
                  aria-label="Вконтакте"
                >
                  <Icon name="MessageCircleMore" className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center hover:bg-burgundy hover:text-white transition-all"
                  aria-label="Telegram"
                >
                  <Icon name="Send" className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center hover:bg-burgundy hover:text-white transition-all"
                  aria-label="WhatsApp"
                >
                  <Icon name="MessageSquare" className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="bg-gold/10 rounded-xl p-6">
              <h3 className="text-lg font-medium text-burgundy mb-4">
                Бесплатная консультация
              </h3>
              <p className="text-muted-foreground mb-4">
                Запишитесь на бесплатную 30-минутную консультацию, чтобы обсудить ваши цели и определить оптимальную программу обучения.
              </p>
              <Button className="w-full bg-gold text-black hover:bg-gold/90">
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
