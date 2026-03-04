# SaralStack

A modern, responsive web application built with cutting-edge technologies to deliver seamless user experiences.

## About

SaralStack showcases our agile development process, services, and collaborative approach to building digital solutions. The application features an interactive UI with smooth animations, responsive design, and a clean, professional aesthetic.

## Getting Started

### Prerequisites

- Node.js (v18 or higher) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or bun package manager

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd saralstack
```

2. Install dependencies:
```sh
npm install
# or
bun install
```

3. Start the development server:
```sh
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Technologies

This project is built with modern web technologies:

- **Vite** - Fast build tool and development server
- **React** - UI library for building interactive interfaces
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Radix UI** - Unstyled, accessible component primitives
- **React Query** - Data fetching and state management
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon set

## Project Structure

```
saralstack/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/         # shadcn/ui components
│   │   └── ...         # Custom components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── test/           # Test files
├── public/             # Static assets
└── ...
```

## Features

- 📱 Fully responsive design
- 🎨 Modern, clean UI with glass-morphism effects
- ✨ Smooth animations and transitions
- 🌙 Dark theme optimized
- ♿ Accessible components
- 🧪 Unit testing with Vitest
- 🎯 TypeScript for type safety

## Development

### Code Quality

The project uses ESLint for code quality. Run linting with:
```sh
npm run lint
```

### Testing

Run tests using Vitest:
```sh
npm test          # Run once
npm run test:watch # Watch mode
```

## Deployment

### Build for Production

```sh
npm run build
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service.

### Preview Production Build

```sh
npm run preview
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

---

Built with ❤️ by SaralStack Team
