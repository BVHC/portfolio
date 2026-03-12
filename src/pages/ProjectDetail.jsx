// src/pages/ProjectDetail.jsx
import { useParams, Navigate, Link } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import { projects } from '../content/profile';

export default function ProjectDetail() {
  // 1. Lấy mã 'slug' từ thanh địa chỉ (Ví dụ: /projects/pet-shop-ecommerce -> slug là 'pet-shop-ecommerce')
  const { slug } = useParams();

  // 2. Đi tìm vị trí (index) của dự án có slug trùng khớp trong kho dữ liệu
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // 4. Tìm dự án trước và sau để làm nút Next/Prev ở cuối trang
  const prevProject = projectIndex > 0 ?  projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="max-w-6xl animate-fade-in pb-20">
      <div className="text-sm font-medium text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-dark transition">Home</Link>
        <span>/</span>
        <Link to={"/projects"} className="hover:text-dark transition">Projects</Link>
        <span>/</span>
        <span className="text-dark">{project.title}</span>
      </div>

      <header className="mb-12">
        <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold text-dark mb-4 tracking-tight leading-tight">
          {project.title}
        </h1>
        <p className="text-xl text-gray-500 mb-8 max-w-3xl leading-relaxed">
          {project.summary}
        </p>

        {project.links && (
          <div className="flex flex-wrap items-center gap-4">
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm shadow-primary-500/30">
                View Live Demo <FiArrowRight />
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white hover:bg-gray-50 text-dark border border-gray-200 px-5 py-2.5 rounded-lg font-medium transition-colors">
                <FiGithub /> Source Code
              </a>
            )}
          </div>
        )}
      </header>

      <div className="aspect-[21/9] w-full bg-gray-50 rounded-2xl overflow-hidden mb-16 border border-gray-100 shadow-sm">
        <img src={project.coverImage} alt="Cover" className="w-full h-full object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">

        <div className="lg:col-span-1">
          <div className="sticky top-32 flex flex-col gap-10">

            <div>
              <h4 className="text-[11px] font-bold text-gray-900 mb-4 tracking-widest uppercase">Table of Contents</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-500 border-l-2 border-gray-100 pl-4">
                <li><a href="#overview" className="hover:text-primary-600 transition-colors">Overview</a></li>
                <li><a href="#challenge" className="hover:text-primary-600 transition-colors">Challenge & Solution</a></li>
                <li><a href="#tech-stack" className="hover:text-primary-600 transition-colors">Tech Stack</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-gray-900 mb-4 tracking-widest uppercase">Meta</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="block text-gray-400 font-medium mb-1">Role</span>
                  <span className="font-bold text-dark">{project.role}</span>
                </div>
                <div>
                  <span className="block text-gray-400 font-medium mb-1">Timeline</span>
                  <span className="font-bold text-dark">{project.timeline}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        

        <div className="lg:col-span-3 space-y-16 text-gray-600 leading-relaxed text-lg">
          
          <section id="overview" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary-500"></span> The Overview
            </h2>
            <p>{project.overview}</p>
          </section>

          {/* Render nếu có mảng challenge và solution */}
          {(project.challenge || project.solution) && (
            <section id="challenge" className="scroll-mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-red-600 flex items-center gap-2 mb-4">
                  <span className="bg-red-50 text-red-500 px-2 py-0.5 rounded text-sm">⚠</span> The Challenge
                </h3>
                <ul className="space-y-4">
                  {project.challenge?.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm"><span className="text-red-400 mt-1">×</span> {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-600 flex items-center gap-2 mb-4">
                  <span className="bg-green-50 text-green-500 px-2 py-0.5 rounded text-sm">✓</span> The Solution
                </h3>
                <ul className="space-y-4">
                  {project.solution?.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm"><span className="text-green-500 mt-1">✓</span> {item}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <section id="tech-stack" className="scroll-mt-32 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-xl font-bold text-dark mb-6">Tech Stack & Tools</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack?.map( (tech) => (
                <span key={tech} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-dark shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* --- Điều hướng bài viết (Next / Prev) --- */}
      <div className="mt-24 pt-10 border-t border-gray-100 flex justify-between items-center">
        {prevProject ? (
          <Link to={`/projects/${prevProject.slug}`} className="group flex flex-col gap-1">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1 group-hover:text-primary-600 transition"><FiArrowLeft /> Previous Project</span>
            <span className="font-bold text-dark group-hover:text-primary-600 transition">{prevProject.title}</span>
          </Link>
        ) : <div />}

        {nextProject ? (
          <Link to={`/projects/${nextProject.slug}`} className="group flex flex-col items-end gap-1">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1 group-hover:text-primary-600 transition">Next Project <FiArrowRight /></span>
            <span className="font-bold text-dark group-hover:text-primary-600 transition">{nextProject.title}</span>
          </Link>
        ) : <div />}
      </div>

    </div>
  );
}