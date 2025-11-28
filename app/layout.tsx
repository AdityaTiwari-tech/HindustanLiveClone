import './globals.css';
import { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className="bg-red-600 text-white p-4 text-xl font-bold">
          LiveHindustan Clone
        </header>
        {children}
        <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
          © 2025 News Portal
        </footer>
      </body>
    </html>
  );
}