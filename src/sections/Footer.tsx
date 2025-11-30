import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/wilbertwinardi/",
  },
  {
    title: "GitHub",
    href: "https://github.com/WilbertWinardi",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/wilber._39/",
  },
  {
    title: "WhatsApp",
    href: "https://wa.me/6281717133233",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row items-center gap-8 md:justify-between">
          <div className="text-white/40">
            &copy; 2025 Wilbert Winardi. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8 md:gap-4">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 hover:text-emerald-300 transition"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
