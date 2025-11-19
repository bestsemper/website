# Personal Portfolio Website

Modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Built with Next.js 14 App Router
- Styled with Tailwind CSS and CSS Variables
- Dark/Light mode support (CSS variables ready)
- Fully responsive design
- Smooth animations and transitions
- TypeScript for type safety
- Modular component architecture

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Variables
- **Font:** Poppins (Google Fonts)
- **Icons:** Heroicons & Custom SVG

## Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section with typing effect
│   ├── About.tsx          # About & Education
│   ├── Experience.tsx     # Work experience
│   ├── Projects.tsx       # Project showcase
│   ├── Skills.tsx         # Skills & Languages
│   ├── Contact.tsx        # Contact information
│   └── Footer.tsx         # Footer
└── data/
    └── resume.ts          # Resume data & content
```

## Design Features

- **Gradient Theme:** Smooth gradients for text and backgrounds
  - Light mode: Teal to Purple (#74EBD5 → #9FACE6)
  - Dark mode: Pink to Purple (#AA367C → #4A2FBD)
- **Typography:** Poppins font for modern, clean look
- **Animations:** Typing effect on hero section, hover effects on cards
- **Responsive:** Mobile-first design with breakpoints

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Update Personal Information
Edit `data/resume.ts` to update:
- Personal info (name, email, phone, etc.)
- Education details
- Work experience
- Projects
- Skills
- Languages

### Modify Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --background-color: #ffffff;
  --primary-color: #2c2c2c;
  --gradient-from: #74EBD5;
  --gradient-to: #9FACE6;
}
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bestsemper/website)

## License

MIT License - feel free to use this for your own portfolio!

---

Built by John J. Kim
