# MATTAMOTORS UGANDA - Premium Car Repair & Spare Parts

A modern, luxury-inspired website for MATTAMOTORS UGANDA - your trusted dealer in car repairs, garage services, and retail car spare parts.

## 🎨 Design Features

- **Clean, Minimal UI**: Modern and professional design with generous whitespace
- **Luxury/Editorial Style**: Gradient accents, smooth animations, and premium typography
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Navigation**: Sticky header with mobile menu support
- **Professional Footer**: Comprehensive footer with contact info and quick links

## 📄 Pages

### 1. **Home** (`/`)

- Hero section with compelling call-to-action
- Scrolling image carousel (right to left animation)
- Features showcase highlighting why choose MATTAMOTORS
- Contact CTA section

### 2. **About** (`/about`)

- Company story and mission
- Team members display
- Key statistics and achievements
- Vision and values

### 3. **Projects** (`/projects`)

- Scrolling project gallery (replaceable images)
- Service categories with project counts
- Detailed breakdown of repair services
- Request service CTA

### 4. **Testimonials** (`/testimonials`)

- Customer reviews with 5-star ratings
- Statistics: 5000+ reviews, 4.9/5 rating, 99% satisfaction
- Video testimonial placeholders
- Call-to-action section

### 5. **Contact** (`/contact`)

- Contact form (functioning form with submission handling)
- Contact information (phone, email, address)
- Opening hours
- Map placeholder

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (or npm)

### Installation

```bash
cd mattamotors
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
pnpm build
pnpm start
```

## 🖼️ Customizing Images

### Scrolling Images Gallery

The scrolling image carousel is used on the Home and Projects pages. To customize the images:

1. **Home Page** - Edit `app/page.tsx`:

```typescript
const showcaseImages = [
  {
    src: "YOUR_IMAGE_URL_HERE",
    alt: "Image Description",
  },
  // Add more images...
];
```

2. **Projects Page** - Edit `app/projects/page.tsx`:

```typescript
const projectImages = [
  {
    src: "YOUR_IMAGE_URL_HERE",
    alt: "Project Description",
  },
  // Add more images...
];
```

**For Best Results:**

- Use high-quality images (at least 500x400px)
- Images from Unsplash, Pexels, or Pixabay work well
- The component automatically duplicates images for seamless scrolling
- Images are cached and optimized by Next.js Image component

## 🎯 Key Components

### Component Structure

```
app/
├── components/
│   ├── Navbar.tsx              # Navigation bar with mobile menu
│   ├── Footer.tsx              # Professional footer
│   ├── HeroSection.tsx         # Landing hero with gradient background
│   └── ScrollingImages.tsx     # Replaceable scrolling gallery
├── about/
│   └── page.tsx               # About page
├── projects/
│   └── page.tsx               # Projects showcase
├── testimonials/
│   └── page.tsx               # Customer testimonials
├── contact/
│   └── page.tsx               # Contact form & info
└── page.tsx                   # Home page
```

## 🎨 Styling

The project uses **Tailwind CSS** for styling. All components follow a clean, minimal design with:

- **Color Scheme**: Gray/White base with blue accents
- **Typography**: Clean sans-serif fonts
- **Spacing**: 16px base unit for consistent spacing
- **Animations**: Smooth transitions and hover effects

### Custom CSS

Scroll animations are defined in `app/globals.css`:

```css
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
```

## 📝 Contact Information

Update contact details in:

1. **Footer** - `app/components/Footer.tsx`
2. **Contact Page** - `app/contact/page.tsx`

Current placeholder:

- Phone: +256 700 000 000
- Email: info@mattamotors.com
- Location: Kampala, Uganda

## 🔧 Configuration

### Metadata

Update SEO metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "MATTAMOTORS UGANDA - Car Repairs & Spare Parts",
  description:
    "Premium car repairs, maintenance, and genuine spare parts dealer in Uganda",
};
```

### Form Handling

The contact form is functional and logs submissions to the browser console. To integrate with a backend service:

1. Update the form submission handler in `app/contact/page.tsx`
2. Send form data to your backend API
3. Handle email notifications

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The project is a standard Next.js application and can be deployed to:

- Netflify
- AWS
- Firebase
- DigitalOcean
- Any Node.js hosting

## 🎯 Features to Extend

Consider adding:

- Gallery lightbox for project images
- Blog/news section
- Online appointment booking
- Live chat support
- Search functionality
- Multi-language support (Luganda, etc.)

## 📱 Responsive Design

The website is optimized for:

- **Mobile**: 320px+ (fully functional mobile menu)
- **Tablet**: 768px+ (adjusted layouts)
- **Desktop**: 1024px+ (full features)

## 🛠️ Technologies Used

- **Next.js 16.1.6** - React framework
- **React 19.2.3** - UI library
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **Next.js Image Component** - Optimized image loading

## 📄 License

All rights reserved © 2026 MATTAMOTORS UGANDA

---

For any questions or support, contact us at info@mattamotors.com
