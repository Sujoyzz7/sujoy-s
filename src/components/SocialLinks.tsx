import { Github, Linkedin, Twitter, Youtube, Mail, LucideIcon } from "lucide-react";
import { socialsData } from "@/data/socials";

const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
};

interface SocialLinksProps {
  size?: number;
  className?: string;
}

const SocialLinks = ({ size = 20, className = "" }: SocialLinksProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialsData.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
            aria-label={social.name}
          >
            {Icon && <Icon size={size} />}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
