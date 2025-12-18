# Linea Pantheon

![Banner](./public/banner.png)

A modern e-commerce web application built with React and TypeScript, featuring a comprehensive design system and responsive user interface.

## Description

Linea Pantheon is a full-featured e-commerce platform that provides a seamless shopping experience with product browsing, detailed product pages, shopping cart functionality, and checkout process. The application includes various informational pages about the brand, sustainability efforts, and customer support.

## Features

- Product catalog with category filtering
- Detailed product pages with image galleries and reviews
- Shopping cart and checkout functionality
- Responsive design for mobile and desktop
- Accessibility-focused components
- Dark/light theme support
- Form validation and error handling
- SEO-friendly routing

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Charts**: Recharts
- **Date Handling**: date-fns

## Design System

This project uses a custom design system built on top of shadcn/ui components with the following characteristics:

### Component Library

- **Base**: shadcn/ui with New York style variant
- **Color Scheme**: Neutral base colors with CSS custom properties
- **Typography**: System fonts with consistent sizing and spacing
- **Icons**: Lucide icon library for consistent iconography

### Key Design Principles

- **Accessibility**: All components follow WCAG guidelines
- **Consistency**: Unified design tokens across all components
- **Modularity**: Reusable components that can be composed together
- **Responsiveness**: Mobile-first approach with responsive breakpoints
- **Dark Mode**: Built-in theme switching capability

### Available Components

The design system includes a comprehensive set of UI components:

- Form controls (buttons, inputs, selects, checkboxes, etc.)
- Layout components (cards, dialogs, sheets, tooltips)
- Navigation elements (navigation menus, breadcrumbs)
- Data display (tables, charts, carousels)
- Feedback components (toasts, alerts, progress bars)

### Customization

Components can be customized using Tailwind CSS classes and CSS custom properties defined in the theme configuration. The design system supports easy theming and brand adaptation.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ibrahimraimi/pantheon.git
cd pantheon
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Development

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
```

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Design system components (shadcn/ui)
│   ├── header/         # Header-related components
│   ├── footer/         # Footer components
│   ├── product/        # Product-specific components
│   ├── category/       # Category page components
│   ├── content/        # Content section components
│   └── about/          # About page components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```
