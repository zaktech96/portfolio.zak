import { motion, useReducedMotion } from 'framer-motion'
import {
  ClipboardList,
  CreditCard,
  Gauge,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Store,
  Workflow,
} from 'lucide-react'
import moncuresImage from './moncures.png'
import nomadImage from './nomad.png'
import quranImage from './quran.png'
import visionboardImage from './visionboard.png'

type VisualSignal = {
  title: string
  detail: string
  icon: typeof Sparkles
  tone: string
}

type ProofImage = {
  title: string
  detail: string
  image: string
  alt: string
  imageClassName?: string
}

const impactLayers: VisualSignal[] = [
  {
    title: 'First impression',
    detail: 'Interfaces that feel polished before the user reads.',
    icon: Sparkles,
    tone: 'border-cyan-400/25 bg-cyan-400/10 text-cyan-700 dark:text-cyan-200',
  },
  {
    title: 'Sales flow',
    detail: 'Checkout, pricing, stock, and confirmation paths.',
    icon: CreditCard,
    tone: 'border-violet-400/25 bg-violet-400/10 text-violet-700 dark:text-violet-200',
  },
  {
    title: 'Admin control',
    detail: 'Orders, members, filters, refunds, and tracking.',
    icon: ClipboardList,
    tone: 'border-amber-400/30 bg-amber-400/10 text-amber-700 dark:text-amber-200',
  },
  {
    title: 'Operational trust',
    detail: 'Fulfilment, data state, feedback, and safer changes.',
    icon: ShieldCheck,
    tone: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-700 dark:text-emerald-200',
  },
]

const productPath: VisualSignal[] = [
  {
    title: 'Screen',
    detail: 'Looks ready',
    icon: Store,
    tone: 'border-primary/20 bg-primary/10 text-primary',
  },
  {
    title: 'Flow',
    detail: 'Actions connect',
    icon: Workflow,
    tone: 'border-cyan-400/25 bg-cyan-400/10 text-cyan-700 dark:text-cyan-200',
  },
  {
    title: 'System',
    detail: 'Data holds',
    icon: PackageCheck,
    tone: 'border-violet-400/25 bg-violet-400/10 text-violet-700 dark:text-violet-200',
  },
  {
    title: 'Growth',
    detail: 'Improve faster',
    icon: Gauge,
    tone: 'border-amber-400/30 bg-amber-400/10 text-amber-700 dark:text-amber-200',
  },
]

const proofImages: ProofImage[] = [
  {
    title: 'NomadSearch',
    detail: 'SaaS workflow',
    image: nomadImage,
    alt: 'NomadSearch application preview',
  },
  {
    title: 'QuranSphere',
    detail: 'Content experience',
    image: quranImage,
    alt: 'QuranSphere application preview',
    imageClassName: 'object-left-top',
  },
  {
    title: 'VisionBoard',
    detail: 'Planning UI',
    image: visionboardImage,
    alt: 'VisionBoard application preview',
  },
]

const moncuresChips = ['Storefront', 'Admin OS', 'Stock', 'Fulfilment']

const Capabilities = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="capabilities" className="relative scroll-mt-28 overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.18)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.16)_1px,transparent_1px)] bg-[size:104px_104px] opacity-20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
              Craft
            </p>
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Proof that the page is part of a product.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/60 sm:text-lg">
              Screens first. Then the flows behind them: checkout, auth, stock, admin control,
              content, and smoother paths to growth.
            </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.04, ease: 'easeOut' }}
            className="grid gap-2 sm:grid-cols-4"
          >
            {productPath.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  key={step.title}
                  className="relative rounded-lg border border-border/65 bg-card/50 p-4 shadow-sm backdrop-blur"
                >
                  <div className={`mb-4 grid h-10 w-10 place-items-center rounded-lg border ${step.tone}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{step.title}</p>
                  <p className="mt-1 text-xs font-medium text-foreground/50">{step.detail}</p>
                  <span className="absolute right-3 top-3 text-xs font-semibold text-foreground/30">
                    0{index + 1}
                  </span>
                </div>
              )
            })}
          </motion.div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.07fr_0.93fr]">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="grid gap-4"
          >
            <div className="group relative overflow-hidden rounded-lg border border-border/70 bg-card/55 shadow-sm backdrop-blur">
              <div className="aspect-[4/3] overflow-hidden bg-muted/40 sm:aspect-[16/10]">
                <img
                  src={moncuresImage}
                  alt="Moncures product preview"
                  className="h-full w-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/12 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 text-white sm:inset-x-5 sm:bottom-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  {moncuresChips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                      Lead proof
                    </p>
                    <h3 className="mt-1 text-2xl font-bold sm:text-3xl">Moncures as a real system</h3>
                  </div>
                  <p className="hidden max-w-sm text-sm leading-6 text-white/70 sm:block">
                    Brand screen, sales path, admin control, and fulfilment in one product.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {proofImages.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.38, delay: Math.min(index * 0.05, 0.12), ease: 'easeOut' }}
                  className="group overflow-hidden rounded-lg border border-border/65 bg-card/50 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/25"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted/40">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                        item.imageClassName ?? ''
                      }`}
                    />
                  </div>
                  <div className="border-t border-border/60 p-3">
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-xs font-medium text-foreground/50">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
            className="grid content-start gap-4"
          >
            <div className="rounded-lg border border-border/70 bg-card/55 p-5 shadow-sm backdrop-blur sm:p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">
                    Impact layers
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-foreground">Less talk. Clear signals.</h3>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Product-led
                </span>
              </div>

              <div className="grid gap-3">
                {impactLayers.map((layer) => {
                  const Icon = layer.icon

                  return (
                    <div
                      key={layer.title}
                      className="flex items-center gap-4 rounded-lg border border-border/55 bg-background/40 p-4 transition-colors hover:border-primary/25 hover:bg-primary/[0.04]"
                    >
                      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg border ${layer.tone}`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-base font-semibold text-foreground">{layer.title}</h4>
                        <p className="mt-1 text-sm leading-6 text-foreground/60">{layer.detail}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-border/65 bg-background/40 p-4 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/40">
                  Before
                </p>
                <p className="mt-2 text-xl font-bold text-foreground">A page</p>
                <p className="mt-2 text-sm leading-6 text-foreground/56">Looks good, but stops at presentation.</p>
              </div>
              <div className="rounded-lg border border-primary/25 bg-primary/[0.055] p-4 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/72">
                  After
                </p>
                <p className="mt-2 text-xl font-bold text-foreground">A product</p>
                <p className="mt-2 text-sm leading-6 text-foreground/60">Users, payments, content, admin, and operations.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Capabilities
