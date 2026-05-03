import { motion, useReducedMotion } from 'framer-motion'

type IconName = 'spark' | 'data' | 'card' | 'dashboard' | 'gauge' | 'shield' | 'workflow'

const CapabilityIcon = ({ name, className = 'h-5 w-5' }: { name: IconName; className?: string }) => {
  const commonProps = {
    className,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    viewBox: '0 0 24 24',
  }

  switch (name) {
    case 'data':
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="5" rx="7" ry="3" />
          <path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
          <path d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
          <path d="M15.5 10.5 17 12l3-3" />
        </svg>
      )
    case 'card':
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 10h18" />
          <path d="M7 15h4" />
        </svg>
      )
    case 'dashboard':
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 4v16" />
          <path d="M3 10h18" />
          <path d="M12 15h5" />
        </svg>
      )
    case 'gauge':
      return (
        <svg {...commonProps}>
          <path d="M4 14a8 8 0 1 1 16 0" />
          <path d="M12 14l4-4" />
          <path d="M5 20h14" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...commonProps}>
          <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      )
    case 'workflow':
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="6" height="6" rx="1.5" />
          <rect x="15" y="14" width="6" height="6" rx="1.5" />
          <path d="M9 7h3a3 3 0 0 1 3 3v4" />
          <path d="M12 11l3 3 3-3" />
        </svg>
      )
    default:
      return (
        <svg {...commonProps}>
          <path d="M12 2v5" />
          <path d="M12 17v5" />
          <path d="M4.93 4.93 8.46 8.46" />
          <path d="m15.54 15.54 3.53 3.53" />
          <path d="M2 12h5" />
          <path d="M17 12h5" />
          <path d="m4.93 19.07 3.53-3.53" />
          <path d="m15.54 8.46 3.53-3.53" />
        </svg>
      )
  }
}

const buildAreas = [
  {
    title: 'Product Interfaces',
    description:
      'Responsive pages, dashboards, cards, flows, and details that feel clean on mobile and confident on desktop.',
    icon: 'spark' as IconName,
  },
  {
    title: 'Full-stack Systems',
    description:
      'Auth, databases, serverless functions, checkout flows, order handling, emails, and admin tools that hold together.',
    icon: 'data' as IconName,
  },
  {
    title: 'Commerce Workflows',
    description:
      'Product pages, carts, Stripe checkout, stock states, confirmation flows, and customer-facing polish.',
    icon: 'card' as IconName,
  },
  {
    title: 'Operational Dashboards',
    description:
      'Admin panels, content management, tracking views, filters, tables, and actions with clear feedback.',
    icon: 'dashboard' as IconName,
  },
]

const principles = [
  {
    title: 'Sharp first impression',
    detail: 'The interface should look composed before the user reads a word.',
    icon: 'spark' as IconName,
  },
  {
    title: 'Fast paths',
    detail: 'Primary actions stay obvious, tap targets stay comfortable, and flows avoid friction.',
    icon: 'gauge' as IconName,
  },
  {
    title: 'Reliable foundations',
    detail: 'Type safety, clean state, auth, payments, and data flow matter as much as visuals.',
    icon: 'shield' as IconName,
  },
  {
    title: 'Built to evolve',
    detail: 'Strong ownership means leaving the product easier to improve after each change.',
    icon: 'workflow' as IconName,
  },
]

const Capabilities = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="capabilities" className="relative scroll-mt-28 overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute right-0 top-24 h-80 w-[min(620px,82vw)] rounded-full bg-primary/[0.055] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:sticky lg:top-28"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
              Craft
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              More than pages. I build the product around the page.
            </h2>
            <p className="mt-5 text-lg leading-8 text-foreground/62">
              A portfolio should show taste, but the work underneath needs structure. My strongest
              projects combine polished UI with real flows: accounts, payments, content, stock,
              search, email, and admin control. I enjoy stepping in early, finding what will move the
              product forward, and leading that change through to something shipped.
            </p>

            <div className="mt-8 rounded-2xl border border-border/70 bg-card/50 p-5 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Current focus</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">
                    Building sharper client-ready products, taking more ownership of direction, and
                    making changes that are visible in both user experience and business impact.
                  </p>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Available
                </span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {buildAreas.map((area, index) => {
                return (
                  <motion.div
                    key={area.title}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.16), ease: 'easeOut' }}
                    className="group rounded-2xl border border-border/70 bg-card/50 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_70px_hsl(var(--primary)/0.09)]"
                  >
                    <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-primary/15 bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                      <CapabilityIcon name={area.icon} />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-foreground/60">{area.description}</p>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
              className="rounded-2xl border border-border/70 bg-background/40 p-4 shadow-sm backdrop-blur sm:p-5"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {principles.map((principle) => {
                  return (
                    <div
                      key={principle.title}
                      className="rounded-xl border border-border/55 bg-card/40 p-4 transition-colors hover:border-primary/20 hover:bg-primary/[0.045]"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                          <CapabilityIcon name={principle.icon} className="h-4 w-4" />
                        </span>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">{principle.title}</h4>
                          <p className="mt-1 text-sm leading-6 text-foreground/58">{principle.detail}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Capabilities
