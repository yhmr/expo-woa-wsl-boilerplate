# Expo Android Starter

A clean, opinionated Expo starter template optimized for Android development.
Built for high-quality production apps with a focus on testing and maintainability.

## Features

- **Architecture**: Clean `src/` directory structure with modular feature separation
- **Database**: Pre-configured with `expo-sqlite`
- **Testing**: Ready-to-use Unit Testing environment with **Vitest** + React Native Mocks
- **Quality Control**: Strict linting with **ESLint (Flat Config)** + **Prettier**
- **State Management**: **Zustand** included for simple and scalable state management
- **Integrations**: Pre-installed `react-native-health-connect` for health data sync
- **Clean Slate**: No web support, no boilerplate UI code—just the essentials

## Project Structure

```
src/
├── app/          # Expo Router (File-based routing)
├── components/   # Shared UI Components
├── features/     # Feature-specific modules
├── db/           # Database setup and migrations
├── services/     # External integrations (Health Connect, API clients)
├── hooks/        # Custom React hooks
├── constants/    # Theme and configuration constants
└── types/        # TypeScript type definitions
```

## Getting Started

### 1. Installation

```bash
npm install
```

### 2. Run Tests

Verify that everything is set up correctly.

```bash
npm run test
```

### 3. Development

Start the Android development server.

```bash
npm run android
```

> **Note**: This template is configured for **Development Builds** (`npx expo prebuild`). You might need to run prebuild if you add native modules.

## Available Scripts

- `npm run test`: Run unit tests with Vitest
- `npm run test:run`: Run tests once (no watch mode)
- `npm run lint`: Check for linting errors
- `npm run lint:fix`: Auto-fix linting and formatting issues
- `npm run android`: Start the app on an Android emulator or device
