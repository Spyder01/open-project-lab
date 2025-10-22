import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Code, Lightbulb, Rocket, Users, Star, GitPullRequest } from "lucide-react";
import { CategoryGrid } from "./CategoryGrid";
import { Button } from "./ui/button";

interface MarkdownContentProps {
  onCategoryClick: (slug: string) => void;
  onContributingClick: () => void;
  onSubmissionsClick: () => void;
}

export function MarkdownContent({ onCategoryClick, onContributingClick, onSubmissionsClick }: MarkdownContentProps) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 pb-8 border-b">
        <h1 className="flex items-center justify-center gap-2">
          🧩 Open Project Lab
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          A curated collection of project ideas for developers of all levels — from beginner scripts to full-scale systems.
        </p>
        <p>
          💡 Contribute your own ideas or implement one to learn, build, and share!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          <Badge variant="secondary">Hacktoberfest</Badge>
          <Badge variant="secondary">Contributions Welcome</Badge>
          <Badge variant="secondary">Submissions</Badge>
        </div>
      </div>

      {/* Hacktoberfest Section */}
      <Alert className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-900">
        <span className="text-2xl">🎃</span>
        <AlertTitle>Hacktoberfest 2025</AlertTitle>
        <AlertDescription>
          <p className="mb-2">Welcome, open-source hackers! 🕸️</p>
          <p>This repository is Hacktoberfest-friendly — meaning your quality PRs can count toward your event goals.</p>
        </AlertDescription>
      </Alert>

      {/* How to Contribute Section */}
      <section className="space-y-4">
        <h2 className="flex items-center gap-2">
          <GitPullRequest className="size-6" />
          How You Can Contribute
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="size-5" />
                Add Ideas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                💡 Add a new project idea under the relevant category in <code>/categories</code>.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                asChild
              >
                <a 
                  href="https://github.com/Spyder01/open-project-lab/tree/main/categories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  View Categories
                  <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="size-5" />
                Implement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                🛠️ Implement one of the existing ideas and submit it to <code>/submissions</code>.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={onSubmissionsClick}
              >
                Learn How to Submit
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="size-5" />
                Improve
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                📖 Improve documentation, templates, or organization.
              </p>
            </CardContent>
          </Card>
        </div>
        <Alert>
          <Star className="size-4" />
          <AlertDescription>
            Only substantial contributions will be marked as <code>hacktoberfest-accepted</code>.
            (Read more in{' '}
            <button 
              onClick={onContributingClick}
              className="text-primary hover:underline"
            >
              CONTRIBUTING.md
            </button>
            )
          </AlertDescription>
        </Alert>
      </section>

      {/* Categories Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2">
            <Rocket className="size-6" />
            Project Ideas by Category
          </h2>
          <a 
            href="https://github.com/Spyder01/open-project-lab/tree/main/categories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm inline-flex items-center gap-1"
          >
            View on GitHub
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        <p className="text-muted-foreground">Click any category below to explore detailed project ideas:</p>
        <CategoryGrid onCategoryClick={onCategoryClick} />
      </section>

      {/* Example Idea */}
      <section className="space-y-4">
        <h2>🧠 Example Idea</h2>
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle>Minimal Reverse Proxy</CardTitle>
            <CardDescription>
              Build a blazing-fast reverse proxy with route caching, YAML config, and graceful shutdown.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <span className="font-medium">Difficulty:</span> <Badge>Intermediate</Badge>
            </div>
            <div>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Tech:</span> Go/Rust or any decently fast language with networking capabilities.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Community Submissions */}
      <section className="space-y-4">
        <h2>🌱 Community Submissions</h2>
        <p>Showcase your creations built from these ideas!</p>
        <p>
          <button 
            onClick={onSubmissionsClick}
            className="text-primary hover:underline"
          >
            Click here to view the Submissions Index
          </button>
          {' '}to see what others have made — or to add your own 🚀
        </p>
      </section>

      {/* Contributing Overview */}
      <section className="space-y-4">
        <h2>🤝 Contributing</h2>
        <p>We welcome developers of all experience levels!</p>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quick Start</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>There are two main ways to contribute:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Add Ideas:</strong> Share new project concepts in <code>/categories</code></li>
                <li><strong className="text-foreground">Submit Projects:</strong> Show off your implementations in <code>/submissions</code></li>
              </ul>
              <div className="pt-2">
                <Button onClick={onContributingClick} variant="outline">
                  View Full Contribution Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* License */}
      <section className="space-y-4">
        <h2>🌍 License</h2>
        <p>Distributed under the MIT License.</p>
      </section>

      {/* Star the Repo */}
      <Alert className="bg-primary/5 border-primary/20">
        <Star className="size-4" />
        <AlertTitle>Don't forget to Star the Repo!</AlertTitle>
        <AlertDescription>
          If you find this useful or inspiring, give it a ⭐ and help others discover it!
        </AlertDescription>
      </Alert>

      {/* Closing Message */}
      <div className="text-center py-8 border-t">
        <p className="text-muted-foreground italic">
          Turn ideas into code. Inspire others. Join the lab!
        </p>
      </div>
    </div>
  );
}
