/** Edit the starter's public identity, copy and destinations here. */
export const site = {
  name: 'Qentrah Docs',
  description: 'The starting point for Qentrah products, creative tools and developer packages. Find a guide, explore the source, and make something of your own.',
  brand: 'qentrah',
  home: 'https://qentrah.com',
  github: 'https://github.com/Up-to-code/qentrah-docs',
  documentation: 'https://qentrah.com/docs',
  announcement: 'Good ideas deserve good documentation.',
  hero: {
    eyebrow: 'A QENTRAH DOCUMENTATION STARTER',
    title: ['Good ideas.', 'Clear documentation.'],
    description: 'A place to start, build, and go further. Explore Qentrah’s tools, learn how they work, and make them your own.',
    primary: { label: 'Start building', href: '#/docs/introduction' },
    secondary: { label: 'Explore the products', href: '#products' },
  },
  nav: [
    { label: 'Guide', href: '#/docs/introduction' },
    { label: 'Products', href: '#products' },
    { label: 'Packages', href: '#packages' },
  ],
  resources: [
    { label: 'Customize this starter', href: '#/docs/customization' },
    { label: 'Contribute', href: '#/docs/contributing' },
    { label: 'Qentrah documentation', href: 'https://qentrah.com/docs' },
    { label: 'Research & ideas', href: 'https://qentrah.com/blog' },
    { label: 'Live demos', href: 'https://qentrah.com/demos' },
  ],
  footer: [
    { title: 'BUILD', links: [ ['Getting started', '#/docs/introduction'], ['Products', '#products'], ['Packages', '#packages'] ] },
    { title: 'MAKE IT YOURS', links: [ ['Customization', '#/docs/customization'], ['Contributing', '#/docs/contributing'], ['Source code', 'https://github.com/Up-to-code/qentrah-docs'] ] },
    { title: 'QENTRAH', links: [ ['Studio', 'https://qentrah.com'], ['Research', 'https://qentrah.com/blog'], ['Contact', 'mailto:hello@qentrah.com'] ] },
  ],
}

// Homepage copy stays separate from the components that lay it out.
export const home = {
  ecosystem: 'One home for the things you’re building.',
  intro: { eyebrow: 'FROM THE FIRST STEP TO THE NEXT IDEA', title: ['Less searching.', 'More making.'], description: 'Practical guides. Real tools. Room to make them yours.' },
  features: {
    start: { number: '01 / GET STARTED', title: 'A clear place to start.', description: 'Set up the starter, make your first edit, and see it running. One useful step at a time.' },
    explore: { number: '02 / EXPLORE', title: 'Tools with their own story.', description: 'Find the right guide for your creative workflow, development environment, or next application.' },
    customize: { number: '03 / MAKE IT YOURS', title: 'Your content. Your source.', description: 'Change the words, add a guide, and shape the composition. A small set of readable content files.' },
    motion: { number: '04 / KEEP MOVING', title: 'A little motion. A lot of clarity.', description: 'A living composition that can slow down with you. Pause the motion, or use your system’s reduced-motion setting.' },
  },
  products: { eyebrow: 'THE QENTRAH ECOSYSTEM', title: 'Find your starting point.', more: 'All projects', href: 'https://qentrah.com/projects' },
  packages: { eyebrow: 'SMALL PIECES. USEFUL POSSIBILITIES.', title: 'Build with Qentrah.', more: 'All packages', href: 'https://qentrah.com/packages' },
  open: { eyebrow: 'OPEN BY DESIGN', title: ['A starting point.', 'Not a finished story.'], description: 'Keep the composition. Change the content. This starter is yours to build on, with readable source and a clear place for every edit.' },
  footer: { title: ['Your next idea', 'starts with a first step.'], description: 'Find the guide. Open the source. Make something yours.', brandDescription: ['Tools, ideas, and a place', 'to put them to work.'] },
}
