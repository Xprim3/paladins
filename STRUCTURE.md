# Project Structure - Blood Paladins

## Complete Folder Structure

```
blood-paladins/
├── .vscode/                    # VS Code settings
│   ├── extensions.json        # Recommended extensions
│   └── settings.json          # Editor settings
│
├── public/                     # Static public assets
│
├── src/                        # Source code
│   ├── assets/                # Static assets
│   │   ├── fonts/             # Custom fonts
│   │   └── images/            # Image files
│   │
│   ├── components/            # Vue components
│   │   ├── sections/          # Page section components
│   │   │   ├── HeroSection.vue
│   │   │   ├── AboutSection.vue
│   │   │   ├── MainAllianceSection.vue
│   │   │   ├── AcademySection.vue
│   │   │   ├── FarmsSection.vue
│   │   │   ├── KingdomSection.vue
│   │   │   ├── JoinSection.vue
│   │   │   └── FooterSection.vue
│   │   └── ui/                # Reusable UI components
│   │
│   ├── composables/           # Vue composables
│   │
│   ├── config/                # Configuration files
│   │   └── constants.ts       # App constants
│   │
│   ├── types/                 # TypeScript types
│   │   └── index.ts           # Type definitions
│   │
│   ├── utils/                 # Utility functions
│   │   └── index.ts           # Helper functions
│   │
│   ├── App.vue                # Main app component
│   ├── main.ts                # Application entry point
│   ├── style.css              # Global styles
│   └── vite-env.d.ts          # Vite type definitions
│
├── .editorconfig              # Editor configuration
├── .gitignore                 # Git ignore rules
├── .env.example               # Environment variables example
│
├── BRANDING.md                # Branding guidelines
├── PROJECT_STRUCTURE.md       # Project structure docs
├── README.md                  # Project documentation
│
├── index.html                 # HTML entry point
├── package.json               # Dependencies
├── package-lock.json          # Lock file
│
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── tsconfig.node.json         # TypeScript node config
└── vite.config.ts             # Vite configuration
```

## Path Aliases

The project uses `@/` as an alias for the `src/` directory:

```typescript
// ✅ Good - Using path alias
import Component from '@/components/sections/HeroSection.vue'
import { CONSTANT } from '@/config/constants'
import { utility } from '@/utils'

// ❌ Bad - Relative paths
import Component from './components/sections/HeroSection.vue'
```

## File Organization Rules

### Components (`src/components/`)
- **sections/**: Page-specific section components (one per section)
- **ui/**: Reusable UI components (buttons, cards, etc.)

### Configuration (`src/config/`)
- Centralized constants and configuration values
- Export constants for reuse across components

### Types (`src/types/`)
- TypeScript interfaces and type definitions
- Shared types used across the application

### Utils (`src/utils/`)
- Pure utility functions
- No Vue-specific logic
- Reusable helper functions

### Assets (`src/assets/`)
- **images/**: Image files (jpg, png, svg, etc.)
- **fonts/**: Custom font files (woff, ttf, etc.)

## Modern Practices Implemented

✅ **Path Aliases** - Using `@/` for clean imports  
✅ **TypeScript** - Full type safety  
✅ **Component-based** - Modular architecture  
✅ **Separation of Concerns** - Clear folder structure  
✅ **Configuration Management** - Centralized constants  
✅ **Utility Functions** - Reusable helpers  
✅ **Type Definitions** - Shared interfaces  
✅ **Editor Configuration** - Consistent code style  
✅ **VS Code Settings** - Optimized development experience  

## Verification Checklist

- ✅ All files in correct locations
- ✅ Path aliases working (`@/` imports)
- ✅ TypeScript compilation successful
- ✅ Build process working
- ✅ Dev server running
- ✅ No linter errors
- ✅ Modern structure implemented

