# Portfolio Design Improvement Notes

Goal: make the portfolio feel more polished, responsive, and dynamic without becoming glitchy, noisy, or over-animated.

## Design Direction

- Keep the current sleek dark/light aesthetic with restrained green accents.
- Prioritize clarity, spacing, readable typography, and smooth interaction.
- Use motion to support navigation and feedback, not as decoration.
- Avoid heavy glitch effects, constant loops, large moving blobs, rapid text scrambling, or anything that distracts from the work.

## Interaction Improvements

### Navigation

- Add active section styling to the top navbar so users know where they are.
- Keep hover states subtle: soft background tint, small color shift, no large scaling.
- On mobile, add a compact menu or horizontally scrollable nav rather than hiding navigation completely.
- Ensure all anchor jumps account for the fixed navbar with `scroll-margin-top`.

### Project Cards

- Add refined hover depth:
  - slight upward movement, max `translateY(-4px)`
  - border color shifts toward primary
  - image zoom no more than `scale(1.025)`
  - subtle top highlight line
- Add visible buttons for `Live` and `Code` on mobile because hover overlays are not discoverable on touch devices.
- Make the first project feel featured with a slightly larger card or a small `Live Product` badge.
- Keep card descriptions readable and capped consistently with `line-clamp`.

### Buttons And Links

- Use consistent button sizing across hero, contact, and project actions.
- Add focus-visible rings for keyboard users.
- Add icon + text for important actions where helpful, especially project links.
- Avoid bouncy or springy button effects; use smooth `duration-200` to `duration-300`.

## Responsive Improvements

### Mobile

- Reduce hero headline size slightly on narrow screens if it wraps too aggressively.
- Stack hero stat cards cleanly with equal heights.
- Make project action links always visible below the image or title.
- Increase tap targets to at least `44px`.
- Avoid hover-only content for critical links.

### Tablet

- Use two-column layouts only where content has enough width.
- Keep about skill cards in a balanced grid with consistent vertical rhythm.
- Ensure project images keep a stable aspect ratio.

### Desktop

- Keep max content width restrained so sections feel premium, not stretched.
- Add more breathing room between major sections.
- Keep side timeline nav subtle and secondary to the main navbar.

## Dynamic Polish

- Use Framer Motion for entrance animations with low distance and short duration:
  - opacity from `0` to `1`
  - translateY from `12px` to `0`
  - duration around `0.35s` to `0.55s`
- Stagger project cards lightly, no more than `0.06s` between items.
- Respect `prefers-reduced-motion` and disable non-essential animation when enabled.
- Use scroll-triggered reveals once per section, not repeated looping animation.

## Visual System

- Keep one primary accent color and one subtle secondary accent.
- Avoid adding more decorative blobs or orbiting elements.
- Use borders, shadows, and background opacity for depth instead of strong gradients.
- Keep card radius consistent around `12px` to `16px`.
- Keep text contrast high enough in both light and dark themes.

## Implementation Checklist

- Add `scroll-mt-24` or equivalent to each main section.
- Add active state handling to `Navbar`.
- Add mobile-visible project action buttons.
- Add `focus-visible` styles to nav links, project links, social links, and buttons.
- Add `prefers-reduced-motion` handling for animated components.
- Review project card layout at `375px`, `768px`, `1024px`, and `1440px`.
- Run `npx tsc --noEmit` after changes.

## Things To Avoid

- Do not bring back heavy glitch text or constant text scrambling.
- Do not add animated background elements that move forever.
- Do not make every card animate independently on every scroll.
- Do not hide important actions behind desktop-only hover states.
- Do not add multiple competing accent colors.
