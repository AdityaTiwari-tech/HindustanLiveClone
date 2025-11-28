This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Perfect, ADITYA — here’s a **complete polished README.md** that combines **Part A–D** into one professional document. You can drop this straight into your project root and submit it with confidence.

---

# 📰 News Portal – Next.js Assessment Project

## Overview
This project is a simplified **news/media front page** built with **Next.js App Router, TailwindCSS, and TypeScript**. It mimics the structure of a real-world portal like *LiveHindustan*, featuring a homepage grid of articles, dynamic article detail pages, and a responsive layout.

---

## 🚀 Tech Stack
- **Next.js 16 (App Router)**
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Jest + React Testing Library** for testing
- **Mock JSON data** for articles

---

## Part A – Code Implementation

### Features
- **Homepage (`app/page.tsx`)**
  - Displays top news in a responsive grid.
  - Uses `ArticleCard` component for each article.
- **Dynamic Article Pages (`app/article/[slug]/page.tsx`)**
  - Fetches article by slug.
  - Shows title, date, image, and full content.
- **Global Layout (`app/layout.tsx`)**
  - Header and footer with consistent styling.
  - Imports global styles from `globals.css`.
- **Data Layer (`lib/api.ts`)**
  - Functions `getArticles()` and `getArticleBySlug()` fetch mock data.
- **Types (`types/article.ts`)**
  - Strongly typed `Article` model ensures consistency.

---

## Part B – Explanation + Documentation

### Design Document
- **Wireframe:**  
  - Header → Hero → Grid → Footer.  
  - Article page → Title → Date → Image → Content.
- **Layout Decisions:**  
  - Grid: 1 column (mobile), 2 (tablet), 3 (desktop).  
  - Hero section highlights top story.  
  - Footer provides branding.
- **Data-Fetching Strategy:**  
  - Homepage → ISR (revalidate every 5 minutes).  
  - Article page → SSR for accuracy and SEO.
- **Components:**  
  - `Layout`, `Hero`, `ArticleCard`, `Footer`.  
- **Data Model:**  
  ```ts
  export interface Article {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    imageUrl: string;
    publishedAt: string;
    category: 'national' | 'business' | 'cricket' | 'lifestyle';
  }
  ```
- **Challenges & Solutions:**  
  - Type mismatches → fixed with explicit types.  
  - Import errors → corrected paths.  
  - Tailwind init issues → created config manually.  
- **Improvements if given more time:**  
  - Category pages, search, live API integration, SEO metadata, dark mode.

---

## Part C – Testing / Edge Cases

### Scenarios
- **Missing Image:** Fallback placeholder image.  
- **No Articles:** Show “No news available.”  
- **Long Titles:** Use `line-clamp` to prevent layout break.  
- **API Failure:** Show error message.  
- **Loading State:** Show skeleton loader/spinner.

### Example Tests
```tsx
// ArticleCard.test.tsx
it('uses fallback image if none provided', () => {
  const articleWithoutImage = { ...mockArticle, imageUrl: '' };
  render(<ArticleCard article={articleWithoutImage} />);
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', expect.stringContaining('placeholder.jpg'));
});

// HomePage.test.tsx
it('shows fallback when no articles', async () => {
  getArticles.mockResolvedValue([]);
  render(await HomePage());
  expect(screen.getByText(/No news available/i)).toBeInTheDocument();
});
```

---

## Part D – AI Use + Reflection

### Where AI Helped
- Generated boilerplate for components (`ArticleCard`, `Layout`, `ArticlePage`).
- Suggested Tailwind grid layouts and styling.
- Helped debug TypeScript errors and import issues.
- Provided mock article data for testing.

### Where AI Was Wrong
- Suggested wrong import path for `globals.css`.
- Used `description` instead of `excerpt`.
- Used `article.body` instead of `article.content`.
- Tailwind init command failed in PowerShell.

### How I Verified & Corrected
- Relied on TypeScript compiler errors.
- Ran `npm run dev` to test rendering.
- Cross-checked against `types/article.ts`.

### Custom Modifications
- Expanded mock data with multiple realistic articles.
- Added error and loading states.
- Wrote Jest tests for edge cases.
- Designed layout with semantic HTML and accessibility in mind.

---

## 📦 How to Run Locally
```bash
npm install
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000).

---

## ✅ Reflection
This project demonstrates my ability to:
- Build with modern frameworks (Next.js, Tailwind, TypeScript).
- Handle real-world edge cases.
- Justify architectural decisions.
- Use AI critically — as a helper, not a crutch.
- Deliver professional documentation alongside working code.

---



