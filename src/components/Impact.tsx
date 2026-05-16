import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  BadgeCheck,
  ChartNoAxesCombined,
  ClipboardList,
  Gauge,
  PackageCheck,
  Route,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  Workflow,
} from 'lucide-react'

const impactSteps = [
  {
    title: 'Find the real bottleneck',
    detail:
      'Start by separating nice-to-have visuals from the part of the journey that is slowing trust, sales, or operations.',
    icon: Target,
  },
  {
    title: 'Turn the idea into a working flow',
    detail:
      'Map the customer path, admin path, data model, and edge cases before polishing the interface.',
    icon: Route,
  },
  {
    title: 'Build the system behind the screen',
    detail:
      'Connect auth, payments, stock, orders, emails, fulfilment, and admin controls so the product can actually run.',
    icon: Workflow,
  },
  {
    title: 'Tighten what users feel',
    detail:
      'Reduce friction, sharpen feedback, improve responsive layout, and make each next action obvious.',
    icon: Gauge,
  },
]

const moncuresOutcomes = [
  {
    label: 'Commerce engine',
    detail: 'Checkout, live stock changes, price controls, refunds, and customer order flow.',
    icon: Store,
  },
  {
    label: 'Admin control',
    detail: 'Order management, member records, tracking inputs, and launch locking in one dashboard.',
    icon: ClipboardList,
  },
  {
    label: 'Fulfilment ready',
    detail: 'Royal Mail fulfilment support and operational actions built into the backend.',
    icon: PackageCheck,
  },
  {
    label: 'Trust layer',
    detail: 'A polished storefront, cleaner flows, and reliable state across customer and admin journeys.',
    icon: ShieldCheck,
  },
]

const growthMarkers = [
  'Moved from page builds to full product ownership.',
  'Built public storefronts and private dashboards together.',
  'Handled live payments, auth, data, fulfilment, and admin workflows.',
  'Grew delivery judgment by shipping complete systems, not isolated screens.',
]

const Impact = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="impact" className="relative scroll-mt-28 overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.24)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.20)_1px,transparent_1px)] bg-[size:96px_96px] opacity-25" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-border/70 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
            Impact & Growth
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            The work is measured by what changes after it ships.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-foreground/62 sm:text-lg sm:leading-8">
            I focus on product changes that make a business easier to run and easier to trust:
            clearer journeys, stronger operations, and systems that can keep improving, in sha Allah.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -14 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="rounded-2xl border border-border/70 bg-card/50 p-5 shadow-sm backdrop-blur sm:p-6 lg:p-7"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">
                  How Impact Is Made
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                  From problem to operating flow
                </h3>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>

            <div className="space-y-3">
              {impactSteps.map((step, index) => {
                const Icon = step.icon

                return (
                  <motion.div
                    key={step.title}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{
                      duration: 0.36,
                      delay: Math.min(index * 0.05, 0.16),
                      ease: 'easeOut',
                    }}
                    className="group rounded-xl border border-border/55 bg-background/38 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-primary/[0.045]"
                  >
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/15 bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        {index !== impactSteps.length - 1 && (
                          <span className="mt-3 h-8 w-px bg-border/70" aria-hidden="true" />
                        )}
                      </div>
                      <div className="min-w-0 pb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-primary/70">
                            0{index + 1}
                          </span>
                          <h4 className="text-base font-semibold text-foreground group-hover:text-primary">
                            {step.title}
                          </h4>
                        </div>
                        <p className="mt-1 text-sm leading-6 text-foreground/58">{step.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 14 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: 0.05, ease: 'easeOut' }}
              className="overflow-hidden rounded-2xl border border-border/70 bg-card/55 shadow-sm backdrop-blur"
            >
              <div className="border-b border-border/60 bg-background/35 p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">
                      Moncures Case Study
                    </p>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                      Growth through real product infrastructure
                    </h3>
                  </div>
                  <a
                    href="#projects"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                  >
                    View project
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-6">
                {moncuresOutcomes.map((outcome, index) => {
                  const Icon = outcome.icon

                  return (
                    <motion.div
                      key={outcome.label}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{
                        duration: 0.34,
                        delay: Math.min(index * 0.04, 0.14),
                        ease: 'easeOut',
                      }}
                      className="rounded-xl border border-border/55 bg-background/38 p-4 transition-colors hover:border-primary/20 hover:bg-primary/[0.04]"
                    >
                      <span className="mb-4 grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <h4 className="text-base font-semibold text-foreground">{outcome.label}</h4>
                      <p className="mt-2 text-sm leading-6 text-foreground/58">{outcome.detail}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
              className="rounded-2xl border border-border/70 bg-background/42 p-5 shadow-sm backdrop-blur sm:p-6"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">
                    Growth Achieved
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    Bigger scope, better judgment, cleaner delivery
                  </h3>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
                  <ChartNoAxesCombined className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {growthMarkers.map((marker) => (
                  <div
                    key={marker}
                    className="flex gap-3 rounded-xl border border-border/50 bg-card/35 p-4"
                  >
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <p className="text-sm leading-6 text-foreground/64">{marker}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
