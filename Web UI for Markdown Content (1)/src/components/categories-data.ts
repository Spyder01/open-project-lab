export interface Category {
  title: string;
  slug: string;
  color: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  { title: 'Web Development', slug: 'web-dev', color: 'bg-blue-500', icon: '🌐' },
  { title: 'AI / ML', slug: 'ai-ml', color: 'bg-indigo-500', icon: '🤖' },
  { title: 'Systems & Tools', slug: 'systems-tools', color: 'bg-green-500', icon: '⚙️' },
  { title: 'Games', slug: 'games', color: 'bg-pink-500', icon: '🎮' },
  { title: 'Miscellaneous', slug: 'miscellaneous', color: 'bg-gray-500', icon: '🧩' },
];

export interface ProjectIdea {
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tech: string;
  bonus?: string;
}

export const CATEGORY_CONTENT: Record<string, ProjectIdea[]> = {
  'web-dev': [
    {
      name: 'Tiny State Management Tool',
      description: 'Create a minimal, easy-to-use state management library for frontend apps.',
      difficulty: 'Intermediate',
      tech: 'JavaScript/TypeScript, works with React, Vue, or vanilla JS',
      bonus: 'Add devtools integration, time-travel debugging, or middleware support.'
    },
    {
      name: 'URL Shortener',
      description: 'Create a service that shortens long URLs and tracks click analytics.',
      difficulty: 'Beginner',
      tech: 'Go, Node.js, Python Flask, or any backend framework, SQLite or MongoDB',
      bonus: 'Add a dashboard showing top-clicked URLs and user analytics.'
    },
    {
      name: 'Real-time Chat App',
      description: 'Build a chat app with rooms and private messaging.',
      difficulty: 'Intermediate',
      tech: 'Go + WebSockets, Node.js + Socket.io, or Django Channels (or any backend supporting WebSockets), React/Vue frontend',
      bonus: 'Add emoji support, typing indicators, and file sharing.'
    },
    {
      name: 'E-commerce Store',
      description: 'Build a simple online store with product listings, a shopping cart, and checkout functionality.',
      difficulty: 'Intermediate',
      tech: 'Go, Node.js + Express, or Django/Flask backend, MongoDB/PostgreSQL, Stripe/PayPal for payments',
      bonus: 'Add search, filters, and user reviews.'
    }
  ],
  'ai-ml': [
    {
      name: 'Sentiment Analysis API',
      description: 'Build an API that analyzes text (tweets, reviews, comments) and predicts sentiment (positive, neutral, negative).',
      difficulty: 'Beginner',
      tech: 'Python, FastAPI, scikit-learn, Pandas',
      bonus: 'Add emoji or sarcasm detection.'
    },
    {
      name: 'Handwritten Digit Recognizer',
      description: 'Recognize handwritten digits using the MNIST dataset.',
      difficulty: 'Beginner',
      tech: 'Python, TensorFlow, Keras',
      bonus: 'Deploy as a web app for real-time input.'
    },
    {
      name: 'Emotion Detection from Text',
      description: 'Detect emotions (joy, anger, sadness, etc.) from text messages.',
      difficulty: 'Beginner',
      tech: 'Python, scikit-learn, NLP libraries',
      bonus: 'Build a Slack/Discord bot that detects emotions in chats.'
    },
    {
      name: 'Image Caption Generator',
      description: 'Generate natural language captions for input images using deep learning models.',
      difficulty: 'Intermediate',
      tech: 'Python, PyTorch, TensorFlow, Transformers',
      bonus: 'Support multiple languages for captions.'
    },
    {
      name: 'Fake News Detection',
      description: 'Classify news articles as real or fake using NLP techniques.',
      difficulty: 'Intermediate',
      tech: 'Python, scikit-learn, NLTK, Pandas',
      bonus: 'Build a browser plugin to flag fake news.'
    },
    {
      name: 'Chatbot with Memory',
      description: 'Build a chatbot that remembers previous interactions to provide contextual responses.',
      difficulty: 'Intermediate',
      tech: 'Python, Rasa, Hugging Face Transformers',
      bonus: 'Integrate with Slack or Discord.'
    },
    {
      name: 'Music Genre Classifier',
      description: 'Classify audio files into different music genres using feature extraction.',
      difficulty: 'Intermediate',
      tech: 'Python, Librosa, scikit-learn',
      bonus: 'Build a real-time streaming classifier.'
    },
    {
      name: 'Personalized Movie Recommender',
      description: 'Recommend movies based on user preferences and past ratings.',
      difficulty: 'Intermediate',
      tech: 'Python, Pandas, scikit-learn, Surprise',
      bonus: 'Add collaborative filtering with content-based suggestions.'
    },
    {
      name: 'Language Translation Tool',
      description: 'Translate text between languages using transformers or seq2seq models.',
      difficulty: 'Intermediate',
      tech: 'Python, Hugging Face Transformers',
      bonus: 'Add speech-to-text input and text-to-speech output.'
    },
    {
      name: 'Face Recognition Login System',
      description: 'Build a secure login system using facial recognition.',
      difficulty: 'Intermediate',
      tech: 'Python, OpenCV, face_recognition library',
      bonus: 'Add multi-factor authentication with OTP.'
    },
    {
      name: 'Traffic Sign Recognition',
      description: 'Classify traffic signs from images for autonomous driving applications.',
      difficulty: 'Intermediate',
      tech: 'Python, TensorFlow, Keras, OpenCV',
      bonus: 'Integrate with a real-time camera for detection.'
    },
    {
      name: 'Image Style Transfer',
      description: 'Apply the style of one image to another using neural networks.',
      difficulty: 'Intermediate',
      tech: 'Python, PyTorch, TensorFlow',
      bonus: 'Turn it into a web app for user uploads.'
    },
    {
      name: 'Stock Price Predictor',
      description: 'Predict future stock prices using historical data with regression or LSTM models.',
      difficulty: 'Advanced',
      tech: 'Python, Pandas, TensorFlow/Keras',
      bonus: 'Implement portfolio suggestions based on predictions.'
    },
    {
      name: 'Object Detection System',
      description: 'Detect objects in images or video streams using YOLO or SSD models.',
      difficulty: 'Advanced',
      tech: 'Python, OpenCV, PyTorch',
      bonus: 'Integrate with a live camera feed.'
    },
    {
      name: 'AI-Powered Resume Screener',
      description: 'Automatically analyze resumes and rank candidates based on skills and experience.',
      difficulty: 'Advanced',
      tech: 'Python, NLP, scikit-learn, Pandas',
      bonus: 'Build a web dashboard for HR managers.'
    }
  ],
  'systems-tools': [
    {
      name: 'Command-Line Todo App',
      description: 'Build a CLI tool to manage tasks with add, remove, and list functionality.',
      difficulty: 'Beginner',
      tech: 'Go, Rust, Python, or any language/framework suitable for CLI tools',
      bonus: 'Add tagging, due dates, and search.'
    },
    {
      name: 'File Organizer',
      description: 'Create a utility to automatically organize files into folders based on type, date, or pattern.',
      difficulty: 'Beginner',
      tech: 'Go, Rust, Python, Node.js, or any scripting language',
      bonus: 'Add custom rules and dry-run mode.'
    },
    {
      name: 'Markdown to HTML Converter',
      description: 'CLI tool or library to convert Markdown files to HTML.',
      difficulty: 'Intermediate',
      tech: 'Go, Rust, Python, Node.js, or any scripting language',
      bonus: 'Add support for custom templates and CSS styling.'
    },
    {
      name: 'Local Web Server',
      description: 'Build a simple HTTP server to serve static files or APIs locally.',
      difficulty: 'Intermediate',
      tech: 'Go, Node.js, Rust, Python, or any backend framework',
      bonus: 'Add live reload and logging.'
    },
    {
      name: 'URL Monitor / Uptime Checker',
      description: 'Monitor website URLs and notify when they go down.',
      difficulty: 'Intermediate',
      tech: 'Go, Rust, Node.js, Python, or any backend framework',
      bonus: 'Add email or Slack notifications and dashboard analytics.'
    },
    {
      name: 'Log Analyzer',
      description: 'Create a tool that parses log files, filters entries, and summarizes metrics.',
      difficulty: 'Intermediate',
      tech: 'Go, Rust, Python, or any scripting language',
      bonus: 'Generate visual reports or alerts.'
    },
    {
      name: 'System Resource Monitor',
      description: 'Monitor CPU, memory, disk, and network usage with a CLI or web dashboard.',
      difficulty: 'Intermediate',
      tech: 'Go, Rust, Python, Node.js, or any suitable backend',
      bonus: 'Add historical data tracking and alerting.'
    },
    {
      name: 'Minimal Reverse Proxy',
      description: 'Build a fast reverse proxy with caching, route handling, and graceful shutdown.',
      difficulty: 'Advanced',
      tech: 'Go, Node.js, or any language/framework suitable for networking',
      bonus: 'Add rate-limiting and request deduplication.'
    },
    {
      name: 'Lightweight Task Scheduler',
      description: 'Build a cron-like scheduler for running commands at specified intervals.',
      difficulty: 'Advanced',
      tech: 'Go, Rust, Python, or any backend language/framework',
      bonus: 'Add persistent job storage, logging, and retries.'
    },
    {
      name: 'Custom Package Manager',
      description: 'Build a small package manager to install and manage dependencies for a project or system.',
      difficulty: 'Advanced',
      tech: 'Go, Rust, or any language with filesystem and networking support',
      bonus: 'Support versioning, caching, and dependency resolution.'
    },
    {
      name: 'ORM for Databases',
      description: 'Design and implement an Object-Relational Mapper (ORM) that abstracts SQL queries into language-native data structures and methods.',
      difficulty: 'Advanced',
      tech: 'Go, Rust, Python, or JavaScript',
      bonus: 'Support multiple database backends (PostgreSQL, MySQL, SQLite) and include query optimization or migration support.'
    }
  ],
  'games': [
    {
      name: 'Puzzle Game (Tetris, Match-3, Sudoku)',
      description: 'Implement a logic-based or physics-based puzzle game (like Sudoku, Tetris, or Match-3).',
      difficulty: 'Beginner',
      tech: 'Web (HTML/CSS/JS), Raylib (any language), Unity, Godot, or your favorite framework',
      bonus: 'Add a timer, levels, and hints system.'
    },
    {
      name: 'Card Game Simulator',
      description: 'Create a card game (like Poker, Uno, or Solitaire) with AI or multiplayer support.',
      difficulty: 'Intermediate',
      tech: 'Web (HTML/CSS/JS), Unity, Godot, Raylib, or any engine/framework',
      bonus: 'Include AI players or online multiplayer support.'
    },
    {
      name: '2D Platformer Game',
      description: 'Build a side-scrolling platformer with a player character, enemies, and collectibles.',
      difficulty: 'Intermediate',
      tech: 'Web (HTML/CSS/JS + Canvas), Raylib (any language), Unity, Godot, or any engine/framework you prefer',
      bonus: 'Add multiple levels, power-ups, and boss fights.'
    },
    {
      name: 'Top-Down Shooter',
      description: 'Create a top-down shooter where players fight waves of enemies.',
      difficulty: 'Intermediate',
      tech: 'Web (Canvas/Phaser), Raylib, Unity, Godot, or any engine/framework',
      bonus: 'Add weapons, upgrade system, and score tracking.'
    },
    {
      name: 'Endless Runner',
      description: 'Build a side-scrolling endless runner where the player avoids obstacles and collects coins.',
      difficulty: 'Intermediate',
      tech: 'Web (Canvas/JS), Raylib, Unity, Godot, or any engine',
      bonus: 'Add power-ups, high scores, and procedurally generated levels.'
    },
    {
      name: 'Platformer Level Editor',
      description: 'Build a tool that allows users to design, save, and play custom platformer levels.',
      difficulty: 'Intermediate',
      tech: 'Web (HTML/JS), Unity, Godot, or any engine/framework with level editing support',
      bonus: 'Share levels online and rate other users\' creations.'
    },
    {
      name: 'Physics-Based Game',
      description: 'Implement a game using realistic physics (like Angry Birds or a marble maze).',
      difficulty: 'Intermediate',
      tech: 'Web (Canvas/JS + matter.js), Raylib (any language), Unity, Godot, or any physics engine/framework',
      bonus: 'Add multiple levels and special obstacles.'
    },
    {
      name: 'Rhythm / Music Game',
      description: 'Implement a game where players press keys in rhythm with music.',
      difficulty: 'Intermediate',
      tech: 'Web (Canvas/JS), Raylib (any language), Unity, Godot, or any engine',
      bonus: 'Add multiple songs, difficulty levels, and scoring system.'
    },
    {
      name: 'Multiplayer Arena Game',
      description: 'Create a simple multiplayer battle arena (top-down or side-view) supporting multiple players online.',
      difficulty: 'Advanced',
      tech: 'Web (Socket.io + Canvas/Three.js), Raylib, Unity, Godot, or any engine/framework supporting networking',
      bonus: 'Add matchmaking, chat, and power-ups.'
    },
    {
      name: '3D Adventure Game',
      description: 'Build a 3D exploration game with a character navigating an environment.',
      difficulty: 'Advanced',
      tech: 'Unity, Godot, Unreal Engine, or Web (Three.js / Babylon.js)',
      bonus: 'Add collectibles, quests, and an inventory system.'
    }
  ],
  'miscellaneous': [
    {
      name: 'Digital Habit Tracker',
      description: 'Build a tool to track habits, visualize streaks, and set reminders.',
      difficulty: 'Beginner',
      tech: 'Web (React/Vue/Angular), Go, Python, Node.js, or any backend/frontend stack',
      bonus: 'Add notifications, streak rewards, and analytics dashboard.'
    },
    {
      name: 'Random Idea Generator',
      description: 'Generate random creative prompts or coding challenges.',
      difficulty: 'Beginner',
      tech: 'Web (JS/HTML/CSS), Go, Python, or any language',
      bonus: 'Add categories, difficulty levels, and user-contributed prompts.'
    },
    {
      name: 'Custom CLI Tools Collection',
      description: 'Develop a suite of small utilities for productivity, file management, or system monitoring.',
      difficulty: 'Intermediate',
      tech: 'Go, Rust, Python, or Node.js',
      bonus: 'Pack as a single installable tool with documentation.'
    },
    {
      name: 'Personal Knowledge Base',
      description: 'Create an app to store notes, articles, links, and code snippets with tagging and search.',
      difficulty: 'Intermediate',
      tech: 'Go, Node.js, Django, Flask, or any backend; optional frontend with React/Vue',
      bonus: 'Markdown support, offline mode, and cross-device sync.'
    },
    {
      name: 'AI-Powered Journal',
      description: 'A journaling app that summarizes entries, detects mood trends, or suggests writing prompts.',
      difficulty: 'Intermediate',
      tech: 'Python (with NLP libraries), Go, Node.js, or any backend; optional frontend',
      bonus: 'Sentiment analysis and mood tracking over time.'
    },
    {
      name: 'Habit-Forming Game',
      description: 'Gamify daily habits, chores, or tasks with rewards, levels, and challenges.',
      difficulty: 'Intermediate',
      tech: 'Web, mobile (Flutter/React Native), or game engine (Unity, Godot, Raylib)',
      bonus: 'Multiplayer or social features for sharing progress.'
    },
    {
      name: 'Interactive Story Engine',
      description: 'Build a platform for creating interactive fiction where users make choices that affect the story.',
      difficulty: 'Intermediate',
      tech: 'Web (JS/HTML/CSS), Go, Python, or any backend/framework',
      bonus: 'Save progress, randomize story events, and add multimedia content.'
    },
    {
      name: 'Virtual Whiteboard',
      description: 'Collaborative whiteboard for drawing, writing, and brainstorming in real-time.',
      difficulty: 'Advanced',
      tech: 'Web (Canvas + WebSockets), Go, Node.js, Python; optional desktop app',
      bonus: 'Multiple rooms, undo/redo, and image export.'
    },
    {
      name: 'Collaborative Mind Map',
      description: 'Web app for creating mind maps collaboratively in real-time.',
      difficulty: 'Advanced',
      tech: 'Web (Canvas + WebSockets), Go, Node.js, Python, or any backend',
      bonus: 'Drag-and-drop nodes, export to PDF, and shareable links.'
    },
    {
      name: 'Life Dashboard',
      description: 'Build a personal dashboard combining weather, calendar, tasks, notes, and fitness data.',
      difficulty: 'Advanced',
      tech: 'Web frontend (React/Vue), Go, Python, Node.js, or any backend',
      bonus: 'API integrations (Google Calendar, fitness apps) and custom widgets.'
    },
    {
      name: 'HTTP/1 Protocol Implementation',
      description: 'Implement the HTTP/1 protocol from scratch — handling request parsing, response formatting, persistent connections, and chunked transfer encoding.',
      difficulty: 'Advanced',
      tech: 'C, Rust, Go, or any systems programming language',
      bonus: 'Add a minimal HTTP server and client implementation to test interoperability and performance.'
    }
  ]
};
