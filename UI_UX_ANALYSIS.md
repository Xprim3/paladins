# UI/UX Analysis & Standardization Plan

## Issues Found

### 1. Typography Inconsistencies
- **Main Section Headings**: Vary between `text-3xl` to `text-7xl`
  - Hero: Uses Logo component (custom sizes)
  - About: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
  - Main Alliance: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
  - Academy: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` ❌
  - Farms: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` ❌
  - Kingdom: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` ❌
  - Join: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`

**Fix**: Standardize all main section headings to `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`

- **Subsection Headings (H3)**: Vary between `text-2xl` to `text-5xl`
  - Should be: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`

- **Body Text**: Inconsistent scaling
  - Large body: `text-base sm:text-lg md:text-xl` ✓
  - Body: `text-sm sm:text-base md:text-lg` ✓
  - Small: `text-xs sm:text-sm md:text-base` ✓

### 2. Section Padding Inconsistencies
- Hero: `pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20` (special case for hero)
- About: `py-16 md:py-24 lg:py-32` ✓
- Main Alliance: `py-16 md:py-24 lg:py-32` ✓
- Academy: `py-16 md:py-20 lg:py-24` ❌
- Farms: `py-16 md:py-20 lg:py-24` ❌
- Kingdom: `py-16 md:py-20 lg:py-24` ❌
- Join: `py-16 md:py-24 lg:py-32` ✓

**Fix**: Standardize all standard sections to `py-16 md:py-24 lg:py-32`

### 3. Section Margin Inconsistencies
- Main heading margins: `mb-8`, `mb-10`, `mb-12`, `mb-16`, `mb-20`, `mb-24`
- **Fix**: Standardize to `mb-12 md:mb-16 lg:mb-20`

- Content section margins: `mb-8`, `mb-10`, `mb-12`, `mb-14`, `mb-16`, `mb-20`, `mb-24`
- **Fix**: Standardize to `mb-12 md:mb-16 lg:mb-20` for major sections, `mb-8 md:mb-10 lg:mb-12` for subsections

### 4. Card Padding Inconsistencies
- Cards use: `p-6`, `p-8`, `p-10`, `p-12`, `p-14`, `p-16`
- **Fix**: Standardize to `p-6 sm:p-8 md:p-10 lg:p-12` for standard cards, `p-8 sm:p-10 md:p-12 lg:p-16` for large cards

### 5. Container Width Inconsistencies
- Uses: `max-w-3xl`, `max-w-4xl`, `max-w-5xl`, `max-w-6xl`, `max-w-7xl`
- **Fix**: Use consistent widths based on content type:
  - Narrow content: `max-w-4xl`
  - Standard content: `max-w-5xl`
  - Wide content: `max-w-6xl`
  - Grid layouts: `max-w-7xl`

### 6. Button Size Inconsistencies
- Various: `px-6 py-3`, `px-8 py-4`, `px-10 py-5`, `px-12 py-6`
- **Fix**: Standardize to:
  - Large: `px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 text-base md:text-lg lg:text-xl`
  - Standard: `px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 text-sm md:text-base lg:text-lg`

### 7. Gap Inconsistencies
- Uses: `gap-3`, `gap-4`, `gap-6`, `gap-8`, `gap-10`, `gap-12`
- **Fix**: Standardize to:
  - Small: `gap-4 md:gap-6`
  - Medium: `gap-6 md:gap-8`
  - Large: `gap-8 md:gap-10`

### 8. Icon Size Inconsistencies
- Uses: `w-8 h-8`, `w-10 h-10`, `w-12 h-12`, `w-16 h-16`, `w-20 h-20`, `w-24 h-24`, `w-32 h-32`
- **Fix**: Standardize to:
  - Small: `w-8 h-8 sm:w-10 sm:h-10`
  - Medium: `w-12 h-12 sm:w-16 sm:h-16`
  - Large: `w-20 h-20 sm:w-24 sm:h-24`
  - Extra Large: `w-24 h-24 sm:w-32 sm:h-32`

## Standardization Rules Applied

1. All main section headings: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
2. All section padding: `py-16 md:py-24 lg:py-32` (except Hero)
3. Main heading margins: `mb-12 md:mb-16 lg:mb-20`
4. Standard card padding: `p-6 sm:p-8 md:p-10 lg:p-12`
5. Large card padding: `p-8 sm:p-10 md:p-12 lg:p-16`
6. Standard buttons: `px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 text-sm md:text-base lg:text-lg`
7. Standard gaps: `gap-6 md:gap-8` for grids
8. Line heights: `leading-relaxed` for body text, `leading-tight` for headings

