import { CATEGORIES } from './categories-data';

interface CategoryGridProps {
  onCategoryClick: (slug: string) => void;
}

export function CategoryGrid({ onCategoryClick }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {CATEGORIES.map((category) => (
        <button
          key={category.slug}
          onClick={() => onCategoryClick(category.slug)}
          className={`${category.color} text-white p-6 rounded-lg shadow-md transition transform hover:scale-105 duration-300 cursor-pointer`}
        >
          <div className="text-3xl mb-2">{category.icon}</div>
          <div className="text-center">{category.title}</div>
        </button>
      ))}
    </div>
  );
}
