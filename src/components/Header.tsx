import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="https://cdn.poehali.dev/files/63e2aaee-6ae7-4ca9-88a7-1ffaa8f8182f.png"
            alt="Стезя Познания"
            className="h-12 md:h-14"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="font-medium text-burgundy hover:text-burgundy/80 transition-colors"
          >
            Главная
          </a>
          <a
            href="#services"
            className="font-medium text-burgundy hover:text-burgundy/80 transition-colors"
          >
            Услуги
          </a>
          <a
            href="#about"
            className="font-medium text-burgundy hover:text-burgundy/80 transition-colors"
          >
            Обо мне
          </a>
          <a
            href="#testimonials"
            className="font-medium text-burgundy hover:text-burgundy/80 transition-colors"
          >
            Отзывы
          </a>
          <a
            href="#contact"
            className="font-medium text-burgundy hover:text-burgundy/80 transition-colors"
          >
            Контакты
          </a>
        </nav>

        {/* CTA Button */}
        <Button className="hidden md:flex bg-burgundy text-cream hover:bg-burgundy/90">
          Записаться на урок
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon
            name={isMobileMenuOpen ? "X" : "Menu"}
            className="h-6 w-6 text-burgundy"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-cream/95 z-40 pt-20 transition-all duration-300 md:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <nav className="container flex flex-col items-center space-y-6 pt-6">
          <a
            href="#home"
            className="text-lg font-medium text-burgundy"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Главная
          </a>
          <a
            href="#services"
            className="text-lg font-medium text-burgundy"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Услуги
          </a>
          <a
            href="#about"
            className="text-lg font-medium text-burgundy"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Обо мне
          </a>
          <a
            href="#testimonials"
            className="text-lg font-medium text-burgundy"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Отзывы
          </a>
          <a
            href="#contact"
            className="text-lg font-medium text-burgundy"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Контакты
          </a>
          <Button
            className="mt-8 bg-burgundy text-cream hover:bg-burgundy/90 w-full max-w-xs"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Записаться на урок
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
