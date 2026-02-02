# Expo WoA/WSL Boilerplate

A clean, opinionated Expo starter template optimized for **Android development on Windows on Arm (WoA) / WSL**.
Built for high-quality production apps with a focus on testing, maintainability.

## Features

- **Architecture**: Clean `src/` directory structure with modular feature separation
- **Testing**: Ready-to-use Unit Testing environment with **Vitest** + React Native Mocks
- **Quality Control**: Strict linting with **ESLint (Flat Config)** + **Prettier**
- **Error Monitoring (optional)**: Pre-configured with **Sentry** for crash reporting and performance monitoring
- **CI/CD Ready**: GitHub Actions workflow pre-configured for automated testing
- **Windows on Arm Support**: Includes custom Hermes plugin (`withWoAFix`) for WoA / WSL environments
- **Local Build Automation**: Script included for easy local Android builds

## Getting Started

### 1. Installation

```bash
npm install
```

### 2. Configuration

Copy the example environment file and configure your keys.

```bash
cp .env.example .env
```

Edit `.env` to set your Expo project details:
- `EXPO_PUBLIC_SLUG`: Your app slug (default: `expo-woa-wsl-boilerplate`)
- `EXPO_PUBLIC_EAS_PROJECT_ID`: Your EAS project ID
- `EXPO_PUBLIC_SENTRY_DSN`: (Optional) Sentry DSN for error monitoring

### 3. Development

Start the development server:

```bash
npm start
```

## Build & Release

### Local Android Build

A helper script is included to streamline local Android builds (Debug/Release).

```bash
# Run debug build
npm run build:android

# Or specify mode
node scripts/build-android.js release
```

This script handles dependency installation, prebuild, and Gradle execution automatically.

### CI/CD

The repository includes a GitHub Actions workflow (`.github/workflows/test.yaml`) that automatically runs tests on Pull Requests.

## Project Structure

```
src/
├── app/          # Expo Router (File-based routing)
├── components/   # Shared UI Components
├── features/     # Feature-specific modules
├── hooks/        # Custom React hooks
├── constants/    # Theme and configuration constants
└── types/        # TypeScript type definitions
```

## Available Scripts

- `npm start`: Start the Expo development server
- `npm run android`: Run on Android emulator/device
- `npm run test`: Run unit tests with Vitest
- `npm run lint:fix`: Auto-fix linting and formatting issues
- `npm run build:android`: Build Android APK locally
