import React from 'react';

export interface Dish {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl?: string;
}

export function DishCard({ title, description, price, imageUrl }: Dish) {
  return (
    <div className="bg-brand-surface rounded-lg overflow-hidden shadow-lg border border-brand-wood hover:border-brand-accent transition-colors duration-300">
      <div className="h-48 w-full bg-brand-dark relative overflow-hidden group">
        {imageUrl ? (
          // Using an img tag for placeholder. In Next.js we would normally use next/image
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-brand-wood/50">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-brand-light font-sans">{title}</h3>
          <span className="text-lg font-bold text-brand-accent">{price}</span>
        </div>
        <p className="text-brand-light/70 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
