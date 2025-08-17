# Icons Directory

This directory contains SVG icons used throughout the portfolio website.

## Adding Icons

1. Add your SVG icon files to this directory
2. Reference them in the data files (e.g., `src/data/portfolio.ts`)
3. The Icon component will automatically handle fallback emojis if the SVG fails to load

## Icon Naming Convention

Use descriptive names in kebab-case:
- `react.svg`
- `typescript.svg`
- `github.svg`
- `linkedin.svg`
- `email.svg`
- `phone.svg`
- `location.svg`

## Icon Requirements

- Use SVG format for best quality and scalability
- Keep file sizes small (< 10KB when possible)
- Use consistent viewBox (typically 24x24 or 32x32)
- Remove unnecessary metadata and comments from SVG files

## Fallback Emojis

The Icon component includes fallback emojis for common icons:
- Email: 📧
- Phone: 📱
- Location: 📍
- LinkedIn: 💼
- GitHub: 🐙
- Twitter: 🐦
- Dribbble: 📸
- Default: 💻
