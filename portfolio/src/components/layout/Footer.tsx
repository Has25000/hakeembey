import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            {currentYear} Hakeem Shitta-Bey. Built with React.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:Hakeemashittabey@gmail.com"
              className="p-2 text-text-secondary hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/hakeem-bey"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
