
export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-10 lg:px-24 bg-white text-xs text-gray-500 mt-auto">
      <div className="flex justify-between items-center mb-4">
        <p>© 2024 BVH.dev. All rights reserved. <span className="mx-2">•</span> Built with <strong>React, Tailwind CSS & Vite</strong>.</p>
        <div className="flex gap-4 font-medium">
          <a href="#" className="hover:text-dark transition">Twitter</a>
          <a href="#" className="hover:text-dark transition">GitHub</a>
          <a href="#" className="hover:text-dark transition">LinkedIn</a>
        </div>
      </div>
      <div className="text-center text-gray-400">
        Design inspired by minimalist data-driven aesthetics.
      </div>
    </footer>
  );
}