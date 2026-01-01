# Blood Paladins - Project Structure

## Folder Organization

```
src/
├── assets/                 # Static assets
│   ├── images/            # Image files
│   └── fonts/             # Custom font files
│
├── components/            # Vue components
│   ├── sections/          # Page section components
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── MainAllianceSection.vue
│   │   ├── AcademySection.vue
│   │   ├── FarmsSection.vue
│   │   ├── KingdomSection.vue
│   │   ├── JoinSection.vue
│   │   └── FooterSection.vue
│   └── ui/                # Reusable UI components
│
├── composables/           # Vue composables (reusable logic)
│
├── config/                # Configuration files
│   └── constants.ts      # App constants (family names, etc.)
│
├── types/                 # TypeScript type definitions
│   └── index.ts          # Shared types
│
├── utils/                 # Utility functions
│   └── index.ts          # Helper functions
│
├── App.vue               # Main app component
├── main.ts               # Application entry point
├── style.css             # Global styles
└── vite-env.d.ts        # Vite type definitions
```

## Component Structure

### Sections (`src/components/sections/`)
Each section of the one-page website is a separate component:
- **HeroSection** - Hero/banner section
- **AboutSection** - About the Family
- **MainAllianceSection** - Main Alliance information
- **AcademySection** - Academy alliance details
- **FarmsSection** - Farm alliances showcase
- **KingdomSection** - Kingdom information
- **JoinSection** - Join/application section
- **FooterSection** - Footer with social links

### Configuration (`src/config/`)
- **constants.ts** - Centralized constants (family names, alliance names, contact links)

### Types (`src/types/`)
- **index.ts** - TypeScript interfaces and types for the application

### Utils (`src/utils/`)
- **index.ts** - Utility functions (smooth scroll, number formatting, etc.)

## Benefits of This Structure

1. **Modularity** - Each section is a separate component, easy to maintain
2. **Reusability** - Components can be reused or modified independently
3. **Scalability** - Easy to add new sections or features
4. **Type Safety** - TypeScript types ensure consistency
5. **Organization** - Clear separation of concerns
6. **Maintainability** - Easy to find and update specific parts

## Adding New Features

- **New Section**: Create a component in `src/components/sections/`
- **New UI Component**: Add to `src/components/ui/`
- **New Utility**: Add function to `src/utils/index.ts`
- **New Type**: Add interface to `src/types/index.ts`
- **New Constant**: Add to `src/config/constants.ts`

