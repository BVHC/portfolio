import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiArrowLeft, FiArrowRight, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, success: true });

  const EMAILJS_SERVICE_ID = 'service_4o7zpmn';   
  const EMAILJS_TEMPLATE_ID = 'template_flyynhi'; 
  const EMAILJS_PUBLIC_KEY = 'fr1kG46HNXYgoZsip';  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setToast({ show: true, success: true });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setToast({ show: true, success: false });
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setToast({ show: false, success: true }), 4000);
      });
  };

  return (
    <div className="max-w-6xl animate-fade-in pb-20 relative">
      {toast.show && (
        <div className={`fixed top-16 right-8 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in z-50 ${toast.success ? 'bg-green-500' : 'bg-red-500'}`}>
          {toast.success ? <FiCheckCircle size={24} /> : <FiAlertCircle size={24} />}
          <div>
            <h4 className="font-bold text-sm">{toast.success ? 'Success!' : 'Error!'}</h4>
            <p className="text-xs opacity-80">
              {toast.success ? 'Your message has been sent successfully.' : 'Failed to send message. Please try again.'}
            </p>
          </div>
        </div>
      )}

      {/* Tiêu đề  */}
      <div className="mb-16 max-w-2xl">
        <h1 className="text-[3rem] font-bold text-dark dark:text-white mb-4 tracking-tight leading-tight">
          Let's build something amazing
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
          Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
        <div className="lg:col-span-3">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-dark dark:text-white">Name <span className="text-red-500">*</span></label>
                <input
                  required
                  type="text"
                  name="from_name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 focus:bg-white dark:focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-dark dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-dark dark:text-white">Email <span className="text-red-500">*</span></label>
                <input
                  required
                  type="email"
                  name="reply_to"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 focus:bg-white dark:focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-dark dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-dark dark:text-white">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Project inquiry"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 focus:bg-white dark:focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-dark dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-dark dark:text-white">Message <span className="text-red-500">*</span></label>
              <textarea
                required
                name="message"
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 focus:bg-white dark:focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all min-h-[150px] resize-y text-dark dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
            </div>


            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-medium transition-all shadow-sm ${isSubmitting
                  ? 'bg-primary-400 text-white cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700 text-white shadow-primary-500/30'
                }`}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <FiSend />
              )}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* CỘT PHẢI: THÔNG TIN CÁ NHÂN */}
        <div className="lg:col-span-2 space-y-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-dark dark:text-white mb-6">Contact Information</h3>
            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 shrink-0">
                  <FiMail size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-dark dark:text-white mb-1">Email</p>
                  <a href="mailto:minhhien1062@gmail.com" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    minhhien1062@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 shrink-0">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-dark dark:text-white mb-1">Location</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Vinh Thanh, Ha Noi<br />
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Connect Elsewhere */}
          <div>
            <h3 className="text-lg font-bold text-dark dark:text-white mb-6">Connect Elsewhere</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              Feel free to connect with me on social media. I'm always open to discussing new opportunities.
            </p>
            <div className="space-y-3">

              <a href="#" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl hover:border-gray-300 dark:hover:border-slate-600 hover:shadow-sm transition-all group">
                <div className="flex items-center gap-3 font-medium text-dark dark:text-white">
                  <FiLinkedin className="text-[#0A66C2]" size={20} /> LinkedIn
                </div>
                <FiArrowRight className="text-gray-300 dark:text-gray-600 group-hover:text-dark dark:group-hover:text-white transition-colors" />
              </a>

              <a href="https://github.com/BVHC" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl hover:border-gray-300 dark:hover:border-slate-600 hover:shadow-sm transition-all group">
                <div className="flex items-center gap-3 font-medium text-dark dark:text-white">
                  <FiGithub className="text-gray-900 dark:text-white" size={20} /> GitHub
                </div>
                <FiArrowRight className="text-gray-300 dark:text-gray-600 group-hover:text-dark dark:group-hover:text-white transition-colors" />
              </a>

            </div>
          </div>

        </div>
      </div>

      {/*  Điều hướng dưới cùng  */}
      <div className="mt-24 pt-10 border-t border-gray-100 dark:border-slate-800 flex justify-between items-center">
        <Link to="/about" className="group flex flex-col gap-1">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition"><FiArrowLeft /> Previous</span>
          <span className="font-bold text-dark dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">About Me</span>
        </Link>
        <Link to="/" className="group flex flex-col items-end gap-1">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">Next <FiArrowRight /></span>
          <span className="font-bold text-dark dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">Home</span>
        </Link>
      </div>

    </div>
  );
}