import { ScrollIndicator } from './ui/scroll-indicator'

const Hero = () => {
  const proofPoints = [
    ['Live commerce', 'Checkout + stock'],
    ['Admin systems', 'Orders + fulfilment'],
    ['Growth work', 'Sharper flows'],
  ]

  const launchRows = [
    ['Storefront', 'Customer journey live'],
    ['Checkout', 'Payments and order state'],
    ['Operations', 'Admin, fulfilment, tracking'],
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/zaktech96',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/zakariye-sahid-855b94151/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Zaktech96',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="home" className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-4 pt-32 sm:pt-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.32)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.28)_1px,transparent_1px)] bg-[size:88px_88px] opacity-30" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,hsl(var(--primary)/0.14),transparent_34%),linear-gradient(300deg,hsl(35_75%_54%/0.12),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/70 px-4 py-2 text-sm font-medium text-foreground/70 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Full stack product builder
          </div>

          <div className="mt-8 space-y-6">
            <h1 className="max-w-4xl text-balance text-5xl font-bold text-foreground sm:text-6xl lg:text-7xl">
              Sharp interfaces. Real systems. Visible growth.
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/68 sm:text-xl">
              From idea to launch-ready product: journeys, backend flows, admin control, and cleaner decisions.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#impact" className="button-primary shimmer-on-hover min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              See the Impact
            </a>
            <a href="#contact" className="button-secondary min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              Start a Project
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-12 w-12 place-items-center rounded-full border border-border/70 bg-card/70 text-foreground/70 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="mt-10 grid gap-3 text-left sm:grid-cols-3">
            {proofPoints.map(([value, label]) => (
              <div key={label} className="group rounded-lg border border-border/70 bg-card/45 p-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-card/65 hover:shadow-[0_18px_50px_hsl(var(--primary)/0.08)]">
                <div className="text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">{value}</div>
                <div className="mt-1 text-sm text-foreground/55">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-8 -top-6 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
          <div className="rounded-lg border border-border/75 bg-card/68 p-3 shadow-[0_30px_110px_hsl(var(--foreground)/0.10)] backdrop-blur-xl">
            <div className="rounded-md border border-border/65 bg-background/60">
              <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-500/80" />
                </div>
                <span className="text-xs font-semibold uppercase text-foreground/45">
                  Launch System
                </span>
              </div>

              <div className="grid gap-3 p-4 sm:p-5">
                <div className="rounded-lg border border-primary/20 bg-primary/[0.07] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-primary">Moncures</p>
                      <h2 className="mt-2 text-2xl font-bold text-foreground">
                        Storefront + admin control
                      </h2>
                    </div>
                    <span className="rounded-full border border-primary/25 bg-background/70 px-3 py-1 text-xs font-semibold text-primary">
                      Live
                    </span>
                  </div>
                  <div className="mt-5 grid gap-2 sm:grid-cols-3">
                    {['Orders', 'Stock', 'Fulfilment'].map((item) => (
                      <div key={item} className="rounded-md border border-border/55 bg-background/45 px-3 py-2 text-sm font-medium text-foreground/70">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  {launchRows.map(([label, detail], index) => (
                    <div key={label} className="flex items-center gap-3 rounded-lg border border-border/55 bg-card/45 p-3">
                      <span className="grid h-9 w-9 place-items-center rounded-md border border-border/55 bg-background/55 text-sm font-semibold text-primary">
                        0{index + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground">{label}</p>
                        <p className="text-sm text-foreground/55">{detail}</p>
                      </div>
                      <svg
                        className="h-4 w-4 shrink-0 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 5 7 7-7 7" />
                      </svg>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.07] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-foreground">Growth loop</p>
                    <p className="text-sm text-amber-600 dark:text-amber-300">Idea to launch</p>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-background/70">
                    <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-primary via-amber-500 to-sky-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center lg:justify-end">
            <ScrollIndicator />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
