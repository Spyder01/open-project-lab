import { useState } from 'react';
import { MarkdownContent } from "./components/MarkdownContent";
import { CategoryContent } from "./components/CategoryContent";
import { ContributingGuide } from "./components/ContributingGuide";
import { SubmissionsIndex } from "./components/SubmissionsIndex";
import { Button } from "./components/ui/button";
import { Github, ExternalLink } from "lucide-react";

type View = 'readme' | 'category' | 'contributing' | 'submissions';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('readme');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategoryClick = (slug: string) => {
    setSelectedCategory(slug);
    setCurrentView('category');
  };

  const handleBackToReadme = () => {
    setCurrentView('readme');
    setSelectedCategory('');
  };

  const handleContributingClick = () => {
    setCurrentView('contributing');
  };

  const handleSubmissionsClick = () => {
    setCurrentView('submissions');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={handleBackToReadme}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground">OPL</span>
            </div>
            <div>
              <h1>Open Project Lab</h1>
              <p className="text-muted-foreground">Documentation</p>
            </div>
          </button>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <a 
                href="https://github.com/Spyder01/open-project-lab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="size-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb - only show on readme view */}
          {currentView === 'readme' && (
            <div className="flex items-center gap-2 mb-6 text-muted-foreground">
              <a 
                href="https://github.com/Spyder01/open-project-lab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-1"
              >
                Spyder01 / open-project-lab
                <ExternalLink className="size-3" />
              </a>
              <span>/</span>
              <span className="text-foreground">README.md</span>
            </div>
          )}

          {/* Content Views */}
          {currentView === 'readme' && (
            <div className="bg-card border rounded-lg p-8 shadow-sm">
              <MarkdownContent 
                onCategoryClick={handleCategoryClick}
                onContributingClick={handleContributingClick}
                onSubmissionsClick={handleSubmissionsClick}
              />
            </div>
          )}

          {currentView === 'category' && selectedCategory && (
            <CategoryContent 
              slug={selectedCategory}
              onBack={handleBackToReadme}
            />
          )}

          {currentView === 'contributing' && (
            <ContributingGuide onBack={handleBackToReadme} />
          )}

          {currentView === 'submissions' && (
            <SubmissionsIndex 
              onBack={handleBackToReadme}
              onContributingClick={handleContributingClick}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <a 
              href="https://github.com/Spyder01/open-project-lab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub Repository
            </a>
            <span>•</span>
            <span>Open Source Project</span>
            <span>•</span>
            <span>MIT License</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
