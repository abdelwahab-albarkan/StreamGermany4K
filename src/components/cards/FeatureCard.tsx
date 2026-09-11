import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="group glass p-8 rounded-2xl hover:bg-brand-card transition-all duration-300 hover:-translate-y-2 border border-brand-gray/50 hover:border-brand-accent/50 hover:shadow-[0_10px_30px_rgba(0, 217, 255,0.1)]">
      <div className="w-14 h-14 rounded-full bg-brand-gray/50 group-hover:bg-brand-accent/20 flex items-center justify-center mb-6 transition-colors">
        <Icon className="w-7 h-7 text-white group-hover:text-brand-accent transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">{title}</h3>
      <p className="text-brand-text leading-relaxed">
        {description}
      </p>
    </div>
  );
}
