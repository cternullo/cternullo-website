# Personal Website with Parallax Effect

This is a personal website template built with React, TypeScript, and the react-scroll-parallax library for smooth parallax effects.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Add your images:
Create a `public/images` directory and add the following images:
- `bg1.jpg` - First parallax background
- `bg2.jpg` - Second parallax background
- `bg3.jpg` - Third parallax background
- `profile.jpg` - Your profile picture

3. Start the development server:
```bash
npm run dev
```

## Customization

1. Update the content in `src/App.tsx` with your personal information:
   - Your name
   - About Me section
   - Skills
   - Projects
   - Work Experience

2. Modify the parallax effects in `src/components/ParallaxSection.tsx`
   - Adjust the speed parameter for different scrolling effects
   - Customize the opacity values for the parallax layers

3. Style customization:
   - The project uses Tailwind CSS for styling
   - Modify the `tailwind.config.js` file to customize the theme
   - Add custom styles in `src/index.css`
