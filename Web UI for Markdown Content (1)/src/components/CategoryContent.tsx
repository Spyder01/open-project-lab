import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CATEGORIES, CATEGORY_CONTENT } from './categories-data';

interface CategoryContentProps {
  slug: string;
  onBack: () => void;
}

export function CategoryContent({ slug, onBack }: CategoryContentProps) {
  const category = CATEGORIES.find(c => c.slug === slug);
  const ideas = CATEGORY_CONTENT[slug] || [];

  if (!category) {
    return (
      <div className="space-y-6">
        <Button onClick={onBack} variant="ghost" className="gap-2">
          <ArrowLeft className="size-4" />
          Back to Main Page
        </Button>
        <p className="text-destructive">Category not found.</p>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <Button onClick={onBack} variant="ghost" className="gap-2">
        <ArrowLeft className="size-4" />
        Back to Main Page
      </Button>

      <div className="bg-card border rounded-lg p-8 shadow-sm">
        <div className="space-y-6">
          <div>
            <h1 className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{category.icon}</span>
              {category.title} Project Ideas
            </h1>
            <p className="text-muted-foreground">
              A curated list of {category.title.toLowerCase()} project ideas for beginners, intermediates, and advanced developers.
            </p>
          </div>

          <div className="space-y-6">
            <h2>Project Ideas</h2>
            <div className="space-y-6">
              {ideas.map((idea, index) => (
                <Card key={index} className="bg-muted/30">
                  <CardHeader>
                    <CardTitle>{idea.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      <span className="text-foreground">Description:</span> {idea.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className={getDifficultyColor(idea.difficulty)}>
                        Difficulty: {idea.difficulty}
                      </Badge>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                        Tech: {idea.tech}
                      </Badge>
                    </div>
                    {idea.bonus && (
                      <p className="text-sm text-muted-foreground">
                        <span className="text-foreground">Bonus:</span> {idea.bonus}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground italic pt-4 border-t">
            Content path: <code className="bg-muted px-2 py-1 rounded text-xs">{`categories/${slug}.md`}</code>
          </p>
        </div>
      </div>
    </div>
  );
}
