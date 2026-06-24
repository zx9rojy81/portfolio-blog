import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
