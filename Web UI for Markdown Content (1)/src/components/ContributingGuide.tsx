import { ArrowLeft, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

interface ContributingGuideProps {
  onBack: () => void;
}

export function ContributingGuide({ onBack }: ContributingGuideProps) {
  return (
    <div className="space-y-6">
      <Button onClick={onBack} variant="ghost" className="gap-2">
        <ArrowLeft className="size-4" />
        Back to Project Lab
      </Button>

      <div className="bg-card border rounded-lg p-8 shadow-sm">
        <div className="space-y-8">
          <div>
            <h1 className="mb-4">🤝 Detailed Contribution Guide</h1>
            <p className="text-muted-foreground">
              Thank you for your interest in contributing! 🌟 This project thrives on community participation — from sharing ideas to full implementations.
            </p>
          </div>

          <div className="space-y-4">
            <h2>🧩 Contribution Types</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>1. 💡 Add a New Project Idea</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>Pick the right category in <code className="bg-muted px-2 py-1 rounded text-xs">/categories/</code> (e.g., web.md, systems.md, ai-ml.md, game-dev.md, misc.md).</p>
                <p>Use the Project Idea Template.</p>
                <p>Add your idea at the bottom of the file.</p>
                <p className="bg-muted p-3 rounded">
                  Open a PR titled: <code className="text-foreground">{`Add new idea: <Project Name>`}</code>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. 🛠️ Submit a Built Project</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>If you implemented one of the ideas, add it to the correct category file in <code className="bg-muted px-2 py-1 rounded text-xs">/submissions/</code>.</p>
                <p>Use the Implementation Template and include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Project name</li>
                  <li>GitHub link (and demo if available)</li>
                  <li>Your GitHub handle</li>
                  <li>The idea you implemented</li>
                  <li>Short description and tech stack</li>
                  <li>Optional bonus features</li>
                </ul>
                <p className="bg-muted p-3 rounded">
                  Open a PR titled: <code className="text-foreground">{`Add submission: <Project Name> by <Your GitHub>`}</code>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h2>🛠️ Step-by-Step Contribution Guide</h2>
            
            <div className="space-y-6">
              <div>
                <h3>1. Fork the Repository</h3>
                <p className="text-muted-foreground mb-2">
                  Click the Fork button on the top-right. Clone your fork locally:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="overflow-x-auto text-sm"><code>{`git clone https://github.com/<your-username>/open-project-lab.git\ncd open-project-lab`}</code></pre>
                </div>
              </div>

              <div>
                <h3>2. Create a New Branch</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="overflow-x-auto text-sm"><code>{`git checkout -b add-idea-<project-name>`}</code></pre>
                </div>
                <p className="text-muted-foreground mt-2">or</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="overflow-x-auto text-sm"><code>{`git checkout -b add-submission-<project-name>`}</code></pre>
                </div>
              </div>

              <div>
                <h3>3. Add Your Contribution</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">New Idea:</strong> Add to <code className="bg-muted px-2 py-1 rounded text-xs">{`/categories/<category>.md`}</code> using the template</li>
                  <li><strong className="text-foreground">Implementation:</strong> Add to <code className="bg-muted px-2 py-1 rounded text-xs">{`/submissions/<category>.md`}</code> using the template</li>
                </ul>
              </div>

              <div>
                <h3>4. Commit Your Changes</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="overflow-x-auto text-sm"><code>{`git add .\ngit commit -m "Add new idea: <Project Name>"`}</code></pre>
                </div>
              </div>

              <div>
                <h3>5. Push to Your Fork</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="overflow-x-auto text-sm"><code>{`git push origin add-idea-<project-name>`}</code></pre>
                </div>
              </div>

              <div>
                <h3>6. Open a Pull Request</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Go to your fork on GitHub</li>
                  <li>Click Compare & pull request</li>
                  <li>Fill in a meaningful PR title and description</li>
                  <li>Submit the PR for review</li>
                </ul>
              </div>

              <div>
                <h3>7. Review and Merge</h3>
                <p className="text-muted-foreground mb-2">
                  Repository maintainers will review your PR. Once approved, your idea or project will be merged.
                </p>
                <p className="text-muted-foreground">For submissions, add the submission badge to your project README:</p>
                <div className="bg-muted p-4 rounded-lg mt-2">
                  <pre className="overflow-x-auto text-sm"><code>{`[![Open Project Lab Submission](https://img.shields.io/badge/Open%20Project%20Lab-Submission-blue?logo=github)](https://github.com/spyder01/open-project-lab)`}</code></pre>
                </div>
              </div>
            </div>
          </div>

          <Alert>
            <Star className="size-4" />
            <AlertTitle>Tips for Hacktoberfest</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Use descriptive commit messages and PR titles</li>
                <li>Beginner-friendly contributions are encouraged — small steps count!</li>
                <li>You can contribute both ideas and implementations</li>
                <li>Share your work with the community and inspire others to build!</li>
              </ul>
            </AlertDescription>
          </Alert>

          <p className="text-center text-muted-foreground italic pt-4 border-t">
            Turn ideas into code. Inspire others. Join the lab!
          </p>
        </div>
      </div>
    </div>
  );
}
