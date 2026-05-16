import { motion, useReducedMotion } from 'framer-motion'
import {
  SiClerk,
  SiReact,
  SiReactrouter,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
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
import moncuresImage from './moncures.png'

const impactSteps = [
  {
    title: 'Find the real bottleneck',
    detail: 'Spot the journey, trust, or operations issue.',
    icon: Target,
  },
  {
    title: 'Turn the idea into a working flow',
    detail: 'Shape the customer path, admin path, and data model.',
    icon: Route,
  },
  {
    title: 'Build the system behind the screen',
    detail: 'Connect auth, payments, stock, orders, and admin control.',
    icon: Workflow,
  },
  {
    title: 'Tighten what users feel',
    detail: 'Reduce friction and make every next action obvious.',
    icon: Gauge,
  },
]

const moncuresOutcomes = [
  {
    label: 'Commerce engine',
    detail: 'Checkout, stock, prices, refunds.',
    icon: Store,
  },
  {
    label: 'Admin control',
    detail: 'Orders, members, tracking, locks.',
    icon: ClipboardList,
  },
  {
    label: 'Fulfilment ready',
    detail: 'Royal Mail and dispatch actions.',
    icon: PackageCheck,
  },
  {
    label: 'Trust layer',
    detail: 'Polish, feedback, reliable state.',
    icon: ShieldCheck,
  },
]

const growthMarkers = [
  'Page builds to product ownership.',
  'Storefront plus private dashboard.',
  'Payments, auth, data, fulfilment.',
  'Complete systems, not isolated screens.',
]

const impactStats = [
  ['Direction', 'Problem, users, journey'],
  ['Build', 'Frontend, backend, data'],
  ['Operate', 'Orders, stock, fulfilment'],
  ['Improve', 'Friction, trust, conversion'],
]

const technologyStack = [
  {
    name: 'React',
    icon: SiReact,
    className: 'text-[#61DAFB]',
    impact: 'Interactive UI',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    className: 'text-[#3178C6]',
    impact: 'Safer logic',
  },
  {
    name: 'React Router',
    icon: SiReactrouter,
    className: 'text-[#CA4245]',
    impact: 'Clear journeys',
  },
  {
    name: 'Clerk',
    icon: SiClerk,
    className: 'text-[#6C47FF]',
    impact: 'Protected access',
  },
  {
    name: 'Stripe',
    icon: SiStripe,
    className: 'text-[#635BFF]',
    impact: 'Live checkout',
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
    className: 'text-[#06B6D4]',
    impact: 'Responsive polish',
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    className: 'text-foreground',
    impact: 'Production deploys',
  },
]

const technologyImpact = [
  {
    title: 'Polished responsive UI',
    body: 'Storefront confidence across devices.',
    icons: [SiReact, SiTypescript, SiTailwindcss],
  },
  {
    title: 'Protected journeys',
    body: 'Customer accounts and admin control stay separate.',
    icons: [SiReactrouter, SiClerk],
  },
  {
    title: 'Real commerce',
    body: 'Checkout, order state, and refunds work together.',
    icons: [SiStripe, SiVercel],
  },
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
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Impact shown visually, not just explained.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-foreground/62 sm:text-lg sm:leading-8">
            Screens, systems, and stack choices all point to one thing: clearer growth, in sha Allah.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, delay: 0.04, ease: 'easeOut' }}
          className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {impactStats.map(([label, detail], index) => (
            <div
              key={label}
              className="rounded-lg border border-border/65 bg-card/50 p-4 shadow-sm backdrop-blur"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-foreground">{label}</p>
                <span className="text-xs font-semibold text-primary/70">0{index + 1}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-foreground/56">{detail}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, delay: 0.06, ease: 'easeOut' }}
          className="mb-6 overflow-hidden rounded-lg border border-border/70 bg-card/55 shadow-sm backdrop-blur lg:grid lg:grid-cols-[1.08fr_0.92fr]"
        >
          <div className="relative min-h-[320px] overflow-hidden border-b border-border/65 bg-background/45 lg:min-h-[520px] lg:border-b-0 lg:border-r">
            <img
              src={moncuresImage}
              alt="Moncures homepage preview"
              className="h-full w-full object-cover object-left-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/12 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/15 bg-black/45 p-4 text-white shadow-lg backdrop-blur-md sm:inset-x-6 sm:bottom-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase text-white/60">Visual proof</p>
                  <h3 className="mt-1 text-2xl font-bold">Moncures launched as a real product</h3>
                </div>
                <p className="max-w-xs text-sm leading-6 text-white/70">
                  The design is backed by accounts, payments, stock, fulfilment, and admin control.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6 lg:p-7">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">
                Technologies Into Impact
              </p>
              <h3 className="mt-2 text-2xl font-bold text-foreground">
                Stack to result.
              </h3>
              <p className="mt-3 text-sm leading-6 text-foreground/60">
                Each tool had a job: trust, control, checkout, or delivery.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {technologyStack.map((tech) => {
                const Icon = tech.icon

                return (
                  <div
                    key={tech.name}
                    className="group rounded-lg border border-border/55 bg-background/38 p-3 transition-colors hover:border-primary/25 hover:bg-primary/[0.04]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-md border border-border/55 bg-card/55">
                        <Icon className={`h-4 w-4 ${tech.className}`} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">{tech.name}</p>
                        <p className="truncate text-xs text-foreground/52">{tech.impact}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-5 space-y-3">
              {technologyImpact.map((item) => (
                <div key={item.title} className="rounded-lg border border-border/55 bg-card/38 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex -space-x-2 pt-0.5">
                      {item.icons.map((Icon, index) => (
                        <span
                          key={`${item.title}-${index}`}
                          className="grid h-8 w-8 place-items-center rounded-full border border-border/70 bg-background text-primary"
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                      ))}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-foreground/58">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -14 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="rounded-lg border border-border/70 bg-card/50 p-5 shadow-sm backdrop-blur sm:p-6 lg:p-7"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">
                  How Impact Is Made
                </p>
                <h3 className="mt-2 text-2xl font-bold text-foreground">
                  From problem to operating flow
                </h3>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-primary/15 bg-primary/10 text-primary">
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
                    className="group rounded-lg border border-border/55 bg-background/38 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-primary/[0.045]"
                  >
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="grid h-9 w-9 place-items-center rounded-md border border-primary/15 bg-primary/10 text-primary">
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
              className="overflow-hidden rounded-lg border border-border/70 bg-card/55 shadow-sm backdrop-blur"
            >
              <div className="border-b border-border/60 bg-background/35 p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">
                      Moncures Case Study
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-foreground">
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
                      className="rounded-lg border border-border/55 bg-background/38 p-4 transition-colors hover:border-primary/20 hover:bg-primary/[0.04]"
                    >
                      <span className="mb-4 grid h-9 w-9 place-items-center rounded-md bg-primary/10 text-primary">
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
              className="rounded-lg border border-border/70 bg-background/42 p-5 shadow-sm backdrop-blur sm:p-6"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">
                    Growth Achieved
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
                    Bigger scope, better judgment, cleaner delivery
                  </h3>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-primary/15 bg-primary/10 text-primary">
                  <ChartNoAxesCombined className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {growthMarkers.map((marker) => (
                  <div
                    key={marker}
                    className="flex gap-3 rounded-lg border border-border/50 bg-card/35 p-4"
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
