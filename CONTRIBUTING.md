## 🛠️ How to Contribute

Follow these steps to contribute ideas or implementations:

### 1. Fork the Repository

1. Click the **Fork** button on the top-right of this repo.
2. Clone your fork locally:

```bash
git clone https://github.com/<your-username>/open-project-lab.git
cd open-project-lab
```

### 2. Create a New Branch

Always work on a separate branch to keep contributions organized:

```bash
git checkout -b add-idea-<project-name>
```

or

```bash
git checkout -b add-submission-<project-name>
```

### 3. Add Your Contribution

#### **Option A: Add a New Project Idea**

* Open the correct category file in `/categories/` (e.g., `web.md`, `ai-ml.md`, `systems.md`, `game-dev.md`, `misc.md`).
* Add your idea at the **bottom** of the file using the [Project Idea Template](templates/idea-template.md).
* Make sure to include:

  * Name
  * Description
  * Difficulty
  * Tech Stack
  * Optional features, bonus challenges, and references

#### **Option B: Submit a Built Project**

* Open the correct category file in `/submissions/` (e.g., `web.md`, `ai-ml.md`, `systems.md`, `game-dev.md`, `misc.md`).
* Add your project entry using the [Implementation Template](templates/implementation-template.md).
* Include:

  * Project name
  * Your GitHub handle
  * GitHub repo or demo link
  * Idea you implemented
  * Short description and tech stack
  * Optional bonus features

### 4. Commit Your Changes

* Use clear commit messages:

```bash
git add .
git commit -m "Add new idea: <Project Name>"
```

or

```bash
git commit -m "Add submission: <Project Name> by <Your GitHub>"
```

### 5. Push to Your Fork

```bash
git push origin add-idea-<project-name>
```

or

```bash
git push origin add-submission-<project-name>
```

### 6. Open a Pull Request

* Go to your fork on GitHub.
* Click **Compare & pull request**.
* Fill in a meaningful PR title (e.g., `Add new idea: Minimal Reverse Proxy`).
* Describe your contribution in detail.
* Submit the PR for review.

### 7. Review and Merge

* The repository maintainers will review your PR.
* Once approved, your idea or project will be added to the main repository.
* Add the **submission badge** to your project README if it’s an implementation:

```markdown
[![Open Project Lab Submission](https://img.shields.io/badge/Open%20Project%20Lab-Submission-blue?logo=github)](https://github.com/spyder01/open-project-lab)
```

---

✅ **Tips for Hacktoberfest**

* Look for issues labeled `good first issue` or `hacktoberfest`.
* Use descriptive commit messages and PR titles.
* Make contributions beginner-friendly if possible — small steps count!
* You can contribute **both ideas and implementations**.
