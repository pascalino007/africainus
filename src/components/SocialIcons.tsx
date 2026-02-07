"use client";

const iconClass = "h-5 w-5 transition-colors";

export function InstagramIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm0 5.108a3.605 3.605 0 100 7.21 3.605 3.605 0 000-7.21zM12 8.027a3.973 3.973 0 110 7.946 3.973 3.973 0 010-7.946z" clipRule="evenodd" />
      <path d="M18 5.025a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM12 9.03a2.97 2.97 0 110 5.94 2.97 2.97 0 010-5.94z" />
    </svg>
  );
}

export function FacebookIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  );
}

export function LinkedInIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.453C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const defaultLinks = {
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
};

export default function SocialIcons({
  instagram = defaultLinks.instagram,
  facebook = defaultLinks.facebook,
  linkedin = defaultLinks.linkedin,
  className = "flex gap-6",
  iconClassName = "text-white/50 hover:text-primary-400",
}: {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={className}>
      <a href={instagram} target="_blank" rel="noopener noreferrer" className={iconClassName} aria-label="Instagram">
        <InstagramIcon className="h-5 w-5" />
      </a>
      <a href={facebook} target="_blank" rel="noopener noreferrer" className={iconClassName} aria-label="Facebook">
        <FacebookIcon className="h-5 w-5" />
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className={iconClassName} aria-label="LinkedIn">
        <LinkedInIcon className="h-5 w-5" />
      </a>
    </div>
  );
}
