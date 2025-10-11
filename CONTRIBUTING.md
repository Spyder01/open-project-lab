# 🤝 Contributing to Open Project Lab

Thank you for your interest in contributing! 🌟  
This project thrives on community participation — from sharing ideas to full implementations.

---

## 🧩 Contribution Types

You can contribute in two main ways:

### 1. 💡 Add a New Project Idea
- Pick the right category in `/categories/` (e.g., `web.md`, `systems.md`, `ai-ml.md`, `game-dev.md`, `misc.md`).  
- Use the [Project Idea Template](templates/idea-template.md).  
- Add your idea at the bottom of the file.  
- Open a PR titled: `Add new idea: <Project Name>`.  

### 2. 🛠️ Submit a Built Project
- If you implemented one of the ideas, add it to the correct category file in `/submissions/`.  
- Use the [Implementation Template](templates/implementation-template.md).  
- Include:
  - Project name  
  - GitHub link (and demo if available)  
  - Your GitHub handle  
  - The idea you implemented  
  - Short description and tech stack  
  - Optional bonus features  
- Open a PR titled: `Add submission: <Project Name> by <Your GitHub>`.

---

## 🛠️ Step-by-Step Contribution Guide

### 1. Fork the Repository
1. Click the **Fork** button on the top-right.  
2. Clone your fork locally:

```bash
git clone https://github.com/<your-username>/open-project-lab.git
cd open-project-lab
````

### 2. Create a New Branch

```bash
git checkout -b add-idea-<project-name>
```

or

```bash
git checkout -b add-submission-<project-name>
```

### 3. Add Your Contribution

* **New Idea:** Add to `/categories/<category>.md` using the template.
* **Implementation:** Add to `/submissions/<category>.md` using the template.

### 4. Commit Your Changes

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
* Fill in a meaningful PR title and description.
* Submit the PR for review.

### 7. Review and Merge

* Repository maintainers will review your PR.
* Once approved, your idea or project will be merged.
* For submissions, add the **submission badge** to your project README:

```markdown
[![Open Project Lab Submission](https://img.shields.io/badge/Open%20Project%20Lab-Submission-blue?logo=github)](https://github.com/spyder01/open-project-lab)
```

---

## ✅ Tips for Hacktoberfest

* Use descriptive commit messages and PR titles.
* Beginner-friendly contributions are encouraged — small steps count!
* You can contribute **both ideas and implementations**.
* Share your work with the community and inspire others to build!

---

*Turn ideas into code. Inspire others. Join the lab!*
