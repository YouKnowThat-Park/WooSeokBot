# Wooseok Bot
Wooseok Bot is a portfolio-powered AI chatbot built using Next.js, Django, and GPT-4.1-nano  
It introduces developer Wooseok Park and his work by holding natural, LLM-driven conversations.  
This project combines modern frontend UX with AI to create a unique, personalized portfolio experience.
[![Wooseokbot Demo](https://github.com/user-attachments/assets/1a9791f3-85ff-4d73-9d7a-6858b1d5e7b8)](https://wooseokbot.com)
<p align="center"><em>Click the image to visit the official website.</em></p>

## 🤔 Why I Built This
I initially used Notion for my portfolio, but I wanted something more personal and unique — something that truly represented *me*.  
That’s when I thought: why not build a chatbot?  
Combining the concept of a portfolio with AI, I created **Wooseok Bot** — an AI-powered chatbot that introduces myself and my work.

##
## Tech Stack
#### Front
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Recoil](https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white)

#### Back & DB
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Django REST Framework](https://img.shields.io/badge/Django%20REST_Framework-092E20?style=for-the-badge&logo=django&logoColor=white)

#### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

#### LLM & Domain
![GPT-4.1-nano](https://img.shields.io/badge/GPT--4.1--nano-412991?style=for-the-badge&logo=openai&logoColor=white)
![Domain: Gabia](https://img.shields.io/badge/Domain-Gabia-0A1F60?style=for-the-badge&logo=internetarchive&logoColor=white)

## Team
This project was planned, designed, and developed entirely by **Wooseok Park** as a full-stack developer.

- 🧠 Planning & Architecture: Wooseok Park  
- 🎨 Design: Wooseok Park  
- 🧩 Backend (Django + DRF): Wooseok Park  
- ⚛️ Frontend (Next.js): Wooseok Park  
- ☁️ Deployment (Vercel, Render): Wooseok Park

## Gols

- 🧩 **Learn Backend Development**  
  As a frontend-heavy developer, I wanted to strengthen my backend skills using Django.  
  Becoming a full-stack developer was one of my core objectives.

- 🧠 **Build a Foundation for AI Development**  
  Since most AI frameworks (like PyTorch, Transformers, etc.) are built in Python,  
  I wanted to become more comfortable with the Python language and its syntax.  
  That’s why I decided to work on a backend project using Django.

- ✨ **Optimize for Better User Experience**  
  I wanted the chatbot to feel like a real conversation — not just a keyword-matching bot,  
  but one powered by a language model that understands the user's intent and responds naturally.  
  My goal was to make the interaction intuitive, context-aware, and truly engaging.

## Folder Structure
```
back/
└── chat/ # Django app for chatbot logic
    ├── migrations/ # Django migration files
    ├── prompts/ # Static prompt templates or system messages
    ├── services/ # Business logic and LLM interaction services
    ├── views/ # Django REST Framework views
    ├── init.py
    ├── admin.py
    ├── apps.py
    ├── models.py # Database models
    ├── serializers.py # DRF serializers
    ├── tests.py
    ├── urls.py # App-level URL routing
    └── utils.py # Common utility functions
└── mychatproject/ # Django project settings
└── staticfiles/admin/ # Custom static files (e.g. CSS for Django admin)

```

```
front/
└── src/
├── app/ # Next.js App Router entry point
│ ├── _components/ # Shared UI components (buttons, cards, etc.)
│ ├── chatAnswer/ # ChatBot UI rendering logic
│ ├── home/ # Main page
│ ├── portfolio/ # Portfolio detail page
│ ├── project/ # Individual project detail pages
│ ├── studyProject/ # Personal study logs or dev notes
│ ├── AppProvider.tsx # Global context/provider setup
│ ├── layout.tsx # Root layout (Next.js)
│ ├── page.tsx # Root page (Next.js)
│ ├── globals.css # Global styles (Tailwind)
│ └── favicon.ico
│
├── data/ # Static/mock data or content
├── hooks/ # Custom React hooks
├── recoil/ # Recoil atoms/selectors for global state
├── type/ # TypeScript type definitions
└── utils/ # Utility functions and helpers
```
