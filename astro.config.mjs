// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

// {
//   "compilerOptions": {
//     "baseUrl": ".",
//     "paths": {
//       "@components/*": ["src/components/*"],
//       "@assets/*": ["src/assets/*"]
//     }
//   }
// }

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'MAD9011 - Mobile Design Tools',
      favicon: '/favicon24.png',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/' }],
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Modules',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Week One: Intro to Photoshop', slug: 'modules/week1' },
            { label: 'Week Two: Photo Retouching', slug: 'modules/week2' },
            { label: 'Week Three: Intro to Illustrator', slug: 'modules/week3' },
            { label: 'Week Four: Color & Effects', slug: 'modules/week4' },
            { label: 'Week Five: Icons & Typography', slug: 'modules/week5' },
            { label: 'Week Six: Intro to SVG', slug: 'modules/week6' },
            { label: 'Week Seven: Midterm', slug: 'modules/week7' },
            { label: 'Week Nine: Getting Started with Figma', slug: 'modules/week9' },
            { label: 'Week Ten: Design Systems I', slug: 'modules/week10' },
            { label: 'Week Eleven: Design Systems II', slug: 'modules/week11' },
            { label: 'Week Twelve: Visual Design & Wireframes', slug: 'modules/week12' },
            { label: 'Week Thirteen: Interactive Visual Prototype', slug: 'modules/week13' },
            { label: 'Week Fourteen: Presenting Your Concepts', slug: 'modules/week14' },
          ],
        },
        {
          label: 'Deliverables',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Deliverables Summary', slug: 'deliverables/summary' },
            { label: 'Exercises', slug: 'deliverables/exercises' },
            { label: 'Assignments', slug: 'deliverables/assignments' },
            { label: 'Projects', slug: 'deliverables/projects' },
          ],
        },
        {
          label: 'References',
          autogenerate: { directory: 'references' },
        },
        {
          label: 'Overview',
          autogenerate: { directory: 'overview' },
        },
      ],
    }),
  ],

  adapter: vercel(),
});
