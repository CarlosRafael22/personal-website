import { Download, FileText, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function SocialLinks() {
  return (
    <div className="mt-4 flex items-center justify-center gap-4">
      <Link
        href="https://www.linkedin.com/in/carlos-rafael-leitao/"
        className="text-gray-600 transition-colors hover:text-gray-900"
        aria-label="LinkedIn Profile"
      >
        <Linkedin className="size-5" />
      </Link>
      <Link
        href="https://github.com/CarlosRafael22"
        className="text-gray-600 transition-colors hover:text-gray-900"
        aria-label="GitHub Profile"
      >
        <Github className="size-5" />
      </Link>
      <Link
        href="https://dev.to/carlosrafael22"
        className="text-gray-600 transition-colors hover:text-gray-900"
        aria-label="Medium Blog"
      >
        <FileText className="size-5" />
      </Link>
      <Link
        href="mailto:carlosrafael093@gmail.com"
        className="text-gray-600 transition-colors hover:text-gray-900"
        aria-label="Email Contact"
      >
        <Mail className="size-5" />
      </Link>
      <Link
        href="/assets/cv.pdf"
        download="Rafael-Leitao-CV.pdf"
        className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
        aria-label="Download CV"
      >
        <Download className="size-4" />
        <span>Download CV</span>
      </Link>
    </div>
  );
}
