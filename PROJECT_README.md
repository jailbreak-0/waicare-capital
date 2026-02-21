# WAICA Re Capital Website

This is a Next.js clone of the WAICA Re Capital website built with modern web technologies.

## Features

- ✅ Responsive design
- ✅ Hero slider with smooth transitions
- ✅ Service showcase cards
- ✅ Client testimonials carousel
- ✅ Contact form
- ✅ Marquee ticker with daily prices
- ✅ Professional navigation with dropdowns
- ✅ Footer with links and social media

## Technologies Used

- **Next.js 16.1** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Swiper.js** - Carousels and sliders
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- pnpm (preferred) or npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

Build the production application:

```bash
pnpm build
```

### Start Production Server

```bash
pnpm start
```

## Project Structure

```
waicare-capital/
├── app/
│   ├── components/
│   │   ├── Marquee.tsx       # Daily prices ticker
│   │   ├── Navigation.tsx    # Main navigation
│   │   ├── HeroSlider.tsx    # Hero slider
│   │   ├── Services.tsx      # Services section
│   │   ├── CTASection.tsx    # Call-to-action
│   │   ├── Testimonials.tsx  # Client testimonials
│   │   ├── Contact.tsx       # Contact form
│   │   └── Footer.tsx        # Footer
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── public/                   # Static assets
│   ├── waicarelogo-1.png
│   ├── fm1.jpg
│   ├── waicacf12.jpg
│   ├── waicres133.jpg
│   └── Waic-BB.png
└── package.json
```

## Key Components

### Marquee
Displays daily fund prices in a scrolling marquee at the top of the page.

### Navigation
Fixed navigation bar with dropdown menus and contact information.

### HeroSlider
Full-screen slider showcasing key messages and call-to-actions.

### Services
Grid layout displaying three main services: Fund Management, Corporate Finance, and Research.

### Testimonials
Carousel of client testimonials with smooth transitions.

### Contact
Contact form and company information.

### Footer
Footer with links, contact details, and social media icons.

## Customization

### Colors

The primary colors are defined in `globals.css`:
- Primary: `#e5322d` (Red)
- Secondary: `#000000` (Black)
- Text: `#1f1f1f` (Dark Gray)
- Background: `#f7f7f7` (Light Gray)

### Content

Update content in the respective component files:
- Services: `app/components/Services.tsx`
- Testimonials: `app/components/Testimonials.tsx`
- Contact: `app/components/Contact.tsx`
- Footer links: `app/components/Footer.tsx`

## License

All rights reserved - WAICA Re Capital Ltd 2026

## Credits

Developed by Techcraft Solutions
