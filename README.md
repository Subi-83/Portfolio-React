# Subitha Portfolio (React + Tailwind)

Modern recruiter-focused portfolio rebuilt from static HTML into a React application.

## Tech Stack

- React (functional components)
- Tailwind CSS (mobile-first styling)
- Framer Motion (smooth animations)
- Vite (fast development and build tooling)

## Run Locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Folder Structure

```text
portfolio/
	public/
		img/
	src/
		components/
			Navbar.jsx
			Hero.jsx
			About.jsx
			Skills.jsx
			Projects.jsx
			Contact.jsx
			Footer.jsx
			SectionHeading.jsx
		data/
			portfolioData.js
		hooks/
			useTheme.js
		App.jsx
		main.jsx
		index.css
	index.html
	tailwind.config.js
	postcss.config.js
	vite.config.js
```

## Features

- Dark/light mode toggle with persisted preference
- Smooth-scroll section navigation
- Animated skill bars and section reveals
- Project cards with hover effects and clear business context
- Download CV button
- Updated, concise content optimized for junior developer recruiting

## Content Update Notes

- Hero copy is now outcome-oriented instead of generic self-description.
- About section is concise and role-aligned.
- Skills are grouped by contribution area: Frontend, Backend & Mobile, Tools & Engineering.
- Projects include purpose, implementation, stack, and impact.
- Contact section is simplified for quick recruiter action.
