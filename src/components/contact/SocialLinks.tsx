import React from "react";
import Icon from "@/components/ui/icon";

// Компонент с социальными сетями
const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: "Вконтакте",
      icon: "Github", // используем Github как визуальный заменитель иконки ВКонтакте
      url: "https://vk.com/stezyapoznaniya?from=groups",
    },
    {
      name: "Telegram",
      icon: "Send",
      url: "https://t.me/stezyapoznaniya",
    },
    {
      name: "WhatsApp",
      icon: "MessageSquare",
      url: "#",
    },
  ];

  return (
    <div className="flex gap-3">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center hover:bg-burgundy hover:text-white transition-all"
          aria-label={link.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name={link.icon} className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
