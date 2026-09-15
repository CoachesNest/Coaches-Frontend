# Coaches — Frontend

The official web frontend for the **Coaches** mentorship platform — a Next.js application that connects mentors and mentees, provides a rich community experience, and offers role-based dashboards for mentors, mentees, and administrators.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **State & Data:** Server Components with client trees, REST/API integration
- **Charts/UI:** Recharts and a component-based design system

## Features

- **Role-based experience** — dedicated routes for `mentors`, `mentees`, and `admins`
- **Mentor & Mentee dashboards** — track mentorship progress, goals, and sessions
- **Community** — member discovery, messaging, and collaboration tools
- **Resources hub** — curated learning materials for the community
- **Auth & onboarding** — sign-in, profile setup, and role selection flows
- **Responsive design** — mobile-first, accessible UI

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# (fill in the required values)

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts

| Script            | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the development server        |
| `npm run build`   | Build for production                |
| `npm run start`   | Start the production server         |
| `npm run lint`    | Run ESLint                          |
| `npm run format`  | Run Prettier                         |
| `npm run debug`   | Build with debug hints enabled      |

## Project Structure

```
app/
  (mentor)/        Mentor-facing pages (dashboard, sessions, mentees)
  (mentee)/        Mentee-facing pages (dashboard, goals, sessions)
  (admin)/         Admin pages (users, analytics, approvals)
  (dashboard)/     Shared dashboard layout and pages
  (community)/     Community pages (discovery, messaging, lists)
  (resources)/     Resources hub pages
  api/             Route handlers / server endpoints
components/
  common/          Shared reusable UI components
  layout/          Site-wide layout components (navbar, footer)
  forms/           Form components and validation
context/           React context providers (auth, notifications)
hooks/             Shared custom hooks
lib/               Utility libraries and helpers
types/             Shared TypeScript types and interfaces
```

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Commit your changes and open a pull request into `main`.
4. Ensure linting and tests pass before requesting review.

## License

Proprietary — all rights reserved.