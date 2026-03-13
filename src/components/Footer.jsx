
export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-slate-800 py-8 px-10 lg:px-24 bg-white dark:bg-slate-900 text-xs text-gray-500 dark:text-gray-400 mt-auto transition-colors duration-300">
      <div className="flex justify-between items-center mb-4">
        <p>© 2026 BVH.dev. All rights reserved. <span className="mx-2">•</span> Built with <strong className="dark:text-gray-300">React, Tailwind CSS & Vite</strong>.</p>
        <div className="flex gap-4 font-medium">
          <a href="https://github.com/BVHC" className="hover:text-dark dark:hover:text-white transition">GitHub</a>
          <a href="#" className="hover:text-dark dark:hover:text-white transition">LinkedIn</a>
        </div>
      </div>
      <div className="text-center text-gray-400 dark:text-gray-500">
        Design inspired by minimalist data-driven aesthetics.
      </div>
    </footer>
  );
}