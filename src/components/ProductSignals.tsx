import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChartNoAxesCombined, Code2, Rocket, Store, Workflow } from 'lucide-react'
import { SiReact, SiStripe, SiTailwindcss, SiTypescript } from 'react-icons/si'

const flow = [
  { label: 'Idea', detail: 'Problem' },
  { label: 'System', detail: 'Build' },
  { label: 'Launch', detail: 'Live' },
  { label: 'Growth', detail: 'Improve' },
]

const stack = [
  { label: 'React', icon: SiReact, className: 'text-[#61DAFB]' },
  { label: 'TypeScript', icon: SiTypescript, className: 'text-[#3178C6]' },
  { label: 'Stripe', icon: SiStripe, className: 'text-[#635BFF]' },
  { label: 'Tailwind', icon: SiTailwindcss, className: 'text-[#06B6D4]' },
]

const outcomeBars = [
  ['Trust', 'w-[88%]'],
  ['Control', 'w-[76%]'],
  ['Speed', 'w-[82%]'],
]

const ProductSignals = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section aria-label="Product build signals" className="relative overflow-hidden border-y border-border/60 py-8">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.22)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.18)_1px,transparent_1px)] bg-[size:96px_96px] opacity-25" />
      <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.38, ease: 'easeOut' }}
          className="rounded-lg border border-border/70 bg-card/50 p-4 shadow-sm backdrop-blur"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Workflow className="h-5 w-5 text-primary" aria-hidden="true" />
              <p className="text-sm font-semibold text-foreground">Build Flow</p>
            </div>
            <span className="text-xs font-semibold uppercase text-foreground/45">4 steps</span>
          </div>

          <div className="grid grid-cols-4 items-center gap-2">
            {flow.map((item, index) => (
              <div key={item.label} className="relative">
                <div className="grid min-h-24 place-items-center rounded-md border border-border/55 bg-background/45 p-3 text-center">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 text-xs text-foreground/50">{item.detail}</p>
                </div>
                {index !== flow.length - 1 && (
                  <ArrowRight
                    className="absolute -right-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-primary"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.38, delay: 0.04, ease: 'easeOut' }}
          className="rounded-lg border border-border/70 bg-card/50 p-4 shadow-sm backdrop-blur"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-primary" aria-hidden="true" />
              <p className="text-sm font-semibold text-foreground">Stack Signal</p>
            </div>
            <span className="text-xs font-semibold uppercase text-foreground/45">tools</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {stack.map((tech) => {
              const Icon = tech.icon

              return (
                <div key={tech.label} className="flex min-h-16 items-center gap-3 rounded-md border border-border/55 bg-background/45 px-3">
                  <Icon className={`h-5 w-5 ${tech.className}`} aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground/72">{tech.label}</span>
                </div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.38, delay: 0.08, ease: 'easeOut' }}
          className="rounded-lg border border-border/70 bg-card/50 p-4 shadow-sm backdrop-blur"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ChartNoAxesCombined className="h-5 w-5 text-primary" aria-hidden="true" />
              <p className="text-sm font-semibold text-foreground">Outcome</p>
            </div>
            <Rocket className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>

          <div className="space-y-3">
            {outcomeBars.map(([label, width]) => (
              <div key={label}>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground/70">{label}</span>
                  <Store className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <div className="h-2 rounded-full bg-background/70">
                  <div className={`h-full rounded-full bg-primary ${width}`} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductSignals
