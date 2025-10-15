import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';

interface SubmissionsIndexProps {
  onBack: () => void;
  onContributingClick: () => void;
}

export function SubmissionsIndex({ onBack, onContributingClick }: SubmissionsIndexProps) {
  return (
    <div className="space-y-6">
      <Button onClick={onBack} variant="ghost" className="gap-2">
        <ArrowLeft className="size-4" />
        Back to Main Page
      </Button>

      <div className="bg-card border rounded-lg p-8 shadow-sm">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 pb-6 border-b">
            <h1>🧩 Open Project Lab — Submissions</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Welcome to the Submissions Hub! 🎉
            </p>
            <p>
              Here you'll find all the real-world implementations built from ideas in the Open Project Lab.
              Every project here was made by a contributor who turned an idea into working code — and you can too!
            </p>
          </div>

          {/* How to Submit Section */}
          <div className="space-y-4">
            <h2>🚀 How to Submit Your Project</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>Fork this repository.</li>
              <li>
                Navigate to the <code className="bg-muted px-2 py-1 rounded text-sm">submissions/</code> folder and choose the correct category file:
                <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                  <li><code className="bg-muted px-2 py-1 rounded text-sm">web.md</code></li>
                  <li><code className="bg-muted px-2 py-1 rounded text-sm">ai-ml.md</code></li>
                  <li><code className="bg-muted px-2 py-1 rounded text-sm">systems.md</code></li>
                  <li><code className="bg-muted px-2 py-1 rounded text-sm">game-dev.md</code></li>
                  <li><code className="bg-muted px-2 py-1 rounded text-sm">misc.md</code></li>
                </ul>
              </li>
              <li>
                Add your project entry using the implementation template:
                <div className="mt-2 text-muted-foreground">
                  <p>Follow the format in <code className="bg-muted px-2 py-1 rounded text-sm">implementation-template.md</code>:</p>
                  <div className="bg-muted p-4 rounded-lg mt-2 overflow-x-auto">
                    <pre className="text-sm"><code>{`### 🚀 Project Name
- **Author:** [Your Name](https://github.com/spyder01)
- **Idea:** [Idea Title](../categories/<category>.md#idea-anchor)
- **Repo / Demo:** [GitHub Repo](https://github.com/spyder01/open-project-lab)
- **Description:** A short summary of your project, the technologies used, and unique features.`}</code></pre>
                  </div>
                </div>
              </li>
              <li>Commit your changes and open a Pull Request (PR).</li>
              <li>Once approved, your project will be listed here with your submission badge 🏅</li>
            </ol>
          </div>

          {/* Submission Badge */}
          <div className="space-y-4">
            <h2>🏅 Submission Badge</h2>
            <p>Add this badge to your project's README to show your participation:</p>
            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm"><code>{`[![Open Project Lab Submission](https://img.shields.io/badge/Open%20Project%20Lab-Submission-blue?logo=github)](https://github.com/spyder01/open-project-lab)`}</code></pre>
            </div>
            <div className="flex justify-center pt-2">
              <img 
                src="https://img.shields.io/badge/Open%20Project%20Lab-Submission-blue?logo=github" 
                alt="Open Project Lab Submission Badge"
              />
            </div>
          </div>

          {/* Browse Submissions Table */}
          <div className="space-y-4">
            <h2>📚 Browse Submissions by Category</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Category</th>
                    <th className="text-left p-3">Description</th>
                    <th className="text-left p-3">File</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-3">🌐 Web Development</td>
                    <td className="p-3 text-muted-foreground">Websites, APIs, frontends, full-stack apps.</td>
                    <td className="p-3">
                      <a 
                        href="https://github.com/Spyder01/open-project-lab/blob/main/submissions/web.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        View Submissions
                        <ExternalLink className="size-3" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-3">🤖 AI / ML</td>
                    <td className="p-3 text-muted-foreground">Models, LLM tools, chatbots, and AI projects.</td>
                    <td className="p-3">
                      <a 
                        href="https://github.com/Spyder01/open-project-lab/blob/main/submissions/ai-ml.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        View Submissions
                        <ExternalLink className="size-3" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-3">⚙️ Systems & Tools</td>
                    <td className="p-3 text-muted-foreground">Low-level systems, utilities, CLI tools, and backend infrastructure.</td>
                    <td className="p-3">
                      <a 
                        href="https://github.com/Spyder01/open-project-lab/blob/main/submissions/systems.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        View Submissions
                        <ExternalLink className="size-3" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-3">🎮 Game Development</td>
                    <td className="p-3 text-muted-foreground">2D / 3D games, engines, and experiments.</td>
                    <td className="p-3">
                      <a 
                        href="https://github.com/Spyder01/open-project-lab/blob/main/submissions/game-dev.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        View Submissions
                        <ExternalLink className="size-3" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-3">🧩 Miscellaneous</td>
                    <td className="p-3 text-muted-foreground">Creative, experimental, or hybrid ideas.</td>
                    <td className="p-3">
                      <a 
                        href="https://github.com/Spyder01/open-project-lab/blob/main/submissions/misc.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        View Submissions
                        <ExternalLink className="size-3" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Notes Section */}
          <Alert>
            <AlertDescription>
              <h3 className="mb-3">💬 Notes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Submissions should be original work created by the contributor.</li>
                <li>Each entry must be linked to an idea listed in the relevant <code className="bg-muted px-2 py-1 rounded text-xs">categories/</code> section.</li>
                <li>Multiple projects can be submitted by the same contributor.</li>
                <li>The best submissions may be featured in the Showcase section of the main README.</li>
              </ul>
            </AlertDescription>
          </Alert>

          {/* Footer Message */}
          <div className="text-center py-6 border-t">
            <p className="text-muted-foreground italic">
              🧠 Turn ideas into code. Inspire others. Join the lab!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
