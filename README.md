# 🌲 The Wild Oasis Website

A luxury cabin booking application built with **Next.js 14**, providing a seamless experience for guests to explore and book their perfect mountain getaway in the heart of the Italian Dolomites.

![The Wild Oasis](public/bg.png)

## ✨ Key Features

- **🏠 Luxury Cabin Discovery**: Browse a curated selection of cabins with detailed information, high-quality images, and availability.
- **🔍 Advanced Filtering**: Filter cabins based on guest capacity to find the perfect match for your group.
- **📅 Dynamic Reservation System**: Real-time calendar integration with `react-day-picker` to prevent double bookings and manage stay dates.
- **🔐 Secure Authentication**: Integrated **NextAuth.js (v5)** with Google OAuth for a frictionless and secure login experience.
- **👤 Guest Profile Management**: Personalized dashboards for guests to manage their profile, including nationality and national identification.
- **📋 Booking Management**: Complete CRUD functionality for reservations—guests can view, update, or cancel their upcoming stays.
- **🚀 Performance Optimized**: Utilizing Next.js features like **Server Components**, **Streaming with Suspense**, and **Incremental Static Regeneration (ISR)** for blazing-fast performance.
- **🎨 Modern Design**: A premium, responsive UI built with **Tailwind CSS**, featuring dark mode aesthetics and smooth transitions.
- **💾 Robust Backend**: Powered by **Supabase** for real-time database management and secure storage.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [NextAuth.js v5 (Beta)](https://authjs.dev/)
- **Database & Storage**: [Supabase](https://supabase.com/)
- **State Management**: [React Hooks](https://react.dev/)
- **Date Handling**: [date-fns](https://date-fns.org/)
- **Icons**: [Heroicons](https://heroicons.com/)

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/the-wild-oasis-website.git
cd the-wild-oasis-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory and add the following:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

AUTH_SECRET=your_auth_secret
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
app/
├── _components/    # Reusable UI components
├── _lib/           # Server actions, data fetching, and auth config
├── _styles/        # Global CSS and Tailwind directives
├── about/          # Static "About" page
├── account/        # Protected guest dashboard and booking management
├── api/            # API route handlers
├── cabins/         # Cabin listings and individual cabin pages
└── login/          # Authentication pages
```

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Developed as part of Jonas Schmedtmann's Ultimate Next.js Course.*
