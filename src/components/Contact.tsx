const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 relative scroll-mt-28">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.18)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.14)_1px,transparent_1px)] bg-[size:112px_112px] opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Build what moves the product.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-foreground/60">
            Freelance builds, product work, collaboration.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          <a
            href="https://mail.google.com/mail/?view=cm&to=zakariyesahid96@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-lg border border-border/70 bg-card/55 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_70px_hsl(var(--primary)/0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <div className="flex items-center gap-4">
              <span className="p-3 rounded-lg border border-primary/15 bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  Email Me
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300 break-all">
                  zakariyesahid96@gmail.com
                </p>
              </div>
            </div>
            <svg
              className="absolute right-5 top-5 h-4 w-4 -translate-x-1 text-foreground/40 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/zakariye-sahid-855b94151/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-lg border border-border/70 bg-card/55 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_70px_hsl(var(--primary)/0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <div className="flex items-center gap-4">
              <span className="p-3 rounded-lg border border-primary/15 bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  Connect on LinkedIn
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                  Zakariye Sahid
                </p>
              </div>
            </div>
            <svg
              className="absolute right-5 top-5 h-4 w-4 -translate-x-1 text-foreground/40 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-foreground/50">
            Available for focused product builds.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact;
