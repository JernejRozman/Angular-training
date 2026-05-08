# Angular for OIM Frontend — Personal Roadmap (v2, evidence-based)

**Target stack:** Angular 20.3.15 — One Identity Manager 10 HTML5 module
**Domain:** Banking / enterprise frontend (EU, WCAG 2.2 AA mandatory since June 2025)
**Runway:** 2 months training + ongoing on the job
**Daily commitment:** 4–6 focused hours
**Repo:** https://github.com/JernejRozman/Angular-training

> **Version note:** v2 incorporates findings from a deep research pass on OIM forums, modern Angular practitioner content (2025–2026), and cognitive-science learning research. Biggest changes vs v1: OIM exposure starts Week 2 (not Phase 5), RxJS demoted to a boundary skill, behavioral guardrails added, security/a11y/testing promoted to gates throughout (not a final phase).

---

## The Rules (read every day, no exceptions)

1. **No copy-paste.** Not from ChatGPT, not from me, not from Stack Overflow, not from OIM forum posts. Type every line, even when you're "copying intent."
2. **Proof or it didn't happen.** Every checkbox = a commit on GitHub with the actual file. Notes count if they're substantive. Empty `.ts` files do not count.
3. **Rubber duck test.** If you can't explain a concept out loud (Slovenian or English) without notes, it's not done.
4. **Modern Angular only.** Tutorial uses `NgModule`, `*ngIf`, or `constructor(private x: X)` → close the tab. Find Angular 17+ content.
5. **Confidence calibration.** End of each phase, rate yourself 1–10. We test if you're right with a transfer problem (different from what you practiced).
6. **🆕 Read terminal output before acting.** Before running any new command, read the previous output aloud. Predict what the next command will do *in writing*. Then run it. The 0-byte file panic and the `npm warn` typo today are why this rule exists.
7. **🆕 No-AI windows.** First 60–90 min of each focus block: ChatGPT/Copilot/Cursor closed. Then a 30-min window where AI is allowed *only to compare* against something you already wrote — not to generate. Research shows beginners with unrestricted AI complete tasks better but learn nothing. We're not optimizing for completion; we're optimizing for learning.
8. **🆕 Daily Feynman note.** End of each day, write 200 words explaining ONE concept you learned, with no code/notes in front of you. Push it to `/feynman/YYYY-MM-DD.md` in the repo. If you can't write it, that concept rolls to tomorrow.

---

## Track structure (this is new)

You're now running **two parallel tracks** instead of doing phases one-after-another:

- **Track A — Angular fundamentals** (the original phases, in order)
- **Track B — OIM context** (read-only at first, hands-on later)

Track A starts day 1. **Track B starts day 8.** They run in parallel until both finish. This is intentional — research shows interleaved learning crushes blocked learning for retention and transfer, and OIM has weird patterns that you need to start seeing early so they don't shock you in month 2.

---

## Phase 0 — Setup & TypeScript Foundation
*Why first: You're a Python dev. Static types will trip you before Angular does. Banks read types like prose.*

- [x] Confirm Node.js 20+ and npm working
- [x] Install Angular CLI globally; `ng version` matches OIM stack (20.3.15)
- [x] TypeScript: primitives, `type` vs `interface`, union/intersection types
- [x] TypeScript: generics — write one generic function from scratch
- [x] TypeScript: narrowing (typeof, instanceof, discriminated unions)
- [x] TypeScript strict mode — understand what each flag in `tsconfig.json` actually forbids and why
- [x] **🆕 Learn `unknown` vs `any`** — when each is right, why banks ban `any`
- [x] **🆕 Learn `as const`, `readonly`, and why immutability matters in TS**
- [ ] **Mini-project:** rewrite one of your Python scripts (pick something from AoC or Pacman) as TypeScript with full types and `--strict`. Push to repo.

**Self-check:** Read this signature cold and tell me what it does:
`function pluck<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>`

---

## Phase 1 — Angular Foundations
*Why now: This is "I can put pixels on screen." Don't skip steps — every shortcut here costs you double in Phase 3.*

- [ ] `ng new` — understand every file the CLI creates (no skipping). Commit a written explanation of each file in `/notes/ng-new-anatomy.md`.
- [ ] Standalone component anatomy: `@Component`, selector, template, styles
- [ ] Template syntax: interpolation, property binding `[x]`, event binding `(x)`
- [ ] Two-way binding `[(x)]` — and why it's syntactic sugar for the other two combined
- [ ] New control flow: `@if`, `@for` (with `track` — and *why* `track` matters), `@switch`, `@defer`
- [ ] Signals: `signal()`, `computed()`, `effect()` — when each is right
- [ ] **🆕 Signals deeper:** `linkedSignal()`, `untracked()`, why effects are dangerous
- [ ] Component I/O: `input()`, `output()` (modern signal-based versions, not `@Input`/`@Output`)
- [ ] **🆕 `model()` for two-way binding** between components
- [ ] Content projection: `<ng-content>`
- [ ] **Mini-project:** Build a TODO app with signals only. No services. Use `@if`/`@for`. Push to repo.

**Self-check:** When does `effect()` cause infinite loops? When should you reach for `computed()` instead? Answer in your Feynman note.

---

## 🆕 Track B starts here — Phase B1: OIM read-only orientation (parallel to Phase 1+)

*Why now: OIM's monorepo, plugin system, and IMX entity model are not in any Angular tutorial. You need to start seeing the shape of the codebase before you write code in it.*

- [ ] Clone `https://github.com/OneIdentity/IdentityManager.Imx`, branch **v100** (matches OIM 10 / Angular 20)
- [ ] Run `npm install`. Run `npx nx graph` and screenshot the dependency graph. Push the screenshot.
- [ ] Watch Quest's **3-part "Beginner Guide to Identity Manager Angular Portal Customizations"** (oneidentity.com/video/beginner-guide-to-identity-manager-angular-portal-customizations-1/ — and parts 2, 3)
- [ ] Watch first 5 episodes of **Abele Herwig's "Angular Web Development" YouTube playlist** (channel @OneIdentity, playlist `PL242czeZwlAmhFqcLZP6KwlUiro6YWdI9`)
- [ ] Browse repo: identify what `qbm`, `qer`, `tsb`, `aad`, `o3t` modules do. Write 1 sentence each in `/notes/oim-modules.md`.
- [ ] Open `qer-app-portal`'s entry component. Read the file. Don't try to understand everything. Note 5 patterns that look unfamiliar.
- [ ] **No customization yet.** Read-only. The temptation to "try modifying something" is what breaks the learning sequence.

**Self-check:** Draw the dependency direction (qbm → qer → app) on paper. Predict: if I change a file in `qbm`, what apps need to be rebuilt? If I change a plugin library like `tsb`, what needs to be rebuilt?

---

## Phase 2 — Application Architecture
*Why now: This is "I can build a real feature." Banks won't accept everything-in-one-component code.*

- [ ] Services: `@Injectable({ providedIn: 'root' })` and why
- [ ] `inject()` function — and why it replaces constructor injection
- [ ] Routing: standalone routes, lazy loading with `loadComponent`
- [ ] Route params, query params, route data
- [ ] HttpClient basics: GET, POST, error handling
- [ ] **🆕 `httpResource()` and `resource()` — Angular 20's signal-first HTTP** (this is what OIM 10 will increasingly use)
- [ ] Reactive Forms: `FormGroup`, `FormControl`, `FormBuilder`
- [ ] Custom validators (sync and async)
- [ ] **🆕 GATE: Every feature from now on includes 1 Jasmine spec + 1 axe a11y check.** No exceptions. We're not "doing testing in Phase 4" — testing is a habit starting now.
- [ ] **Mini-project:** Extend TODO — mock REST API (json-server is fine), routing list/detail, reactive form for add/edit. Push.

**Self-check:** Why do banks insist on Reactive Forms over template-driven? (Hint: validation, type safety, testability — pick one and explain in depth.)

---

## 🆕 Phase B2 — OIM tooling & monorepo (parallel to Phase 2+)

- [ ] Learn Nx basics: `nx graph`, `nx build qer`, `nx serve qer-app-portal`, project boundaries
- [ ] **The dependency rule:** static libraries (qbm, qer) are baked into apps at compile time. Plugin libraries (tsb, aad, o3t) load at runtime via `imx-plugin-config.json`. Internalize this — multiple OIM forum threads exist because juniors miss this.
- [ ] Generate Compodoc: `npx compodoc -p tsconfig.lib.json` for qer. Browse the generated component docs.
- [ ] Read `imx-plugin-config.json` schema. Understand what fields do.
- [ ] **Worked example exercise:** Watch Quest's Beginner Guide #2 (system entitlement column). Don't pause to follow along. Just watch. Then write in your own words what they did and why.

**Self-check:** Draw the build-and-deploy flow: developer changes file → nx builds → `Html_<projectname>.zip` produced → Software Loader → IIS. Where can it go wrong?

---

## Phase 3 — The Hard Parts (where most devs plateau)
*Why now: This is "I can pass code review at a bank." Skip this phase and you'll plateau forever.*

> **🆕 Major reframe:** RxJS is *no longer* a co-equal Phase 3 pillar. In Angular 20 / OIM 10, signals own state and derived state; RxJS lives at the async boundary. The 2025–2026 consensus across Angular Experts, ng.guide, AppSignal, and the official Angular roadmap converges on this. We learn just enough RxJS to interop with the async edge.

- [ ] **Signals-first state management** — `signal`, `computed`, `effect`, `linkedSignal`, `toSignal`, `takeUntilDestroyed`
- [ ] **The big essay:** Write a 200-word answer to *"When signals, when RxJS, when `toSignal`?"* in your own words, push to `/feynman/signals-vs-rxjs.md`
- [ ] RxJS minimum viable subset: `Observable`, operators `map` / `filter` / `switchMap` / `debounceTime` / `catchError` / `takeUntilDestroyed`. **Skip Subjects, BehaviorSubject, `combineLatest`, schedulers** for now — learn them when you encounter them.
- [ ] Guards (`CanActivate`, `CanMatch`) — auth pattern for bank context
- [ ] Resolvers — pre-loading data
- [ ] HTTP Interceptors — auth tokens, error handling, logging (banks LOVE these)
- [ ] Change detection: default vs OnPush, how signals make this mostly automatic
- [ ] **🆕 Zoneless mode** — what it is, why Angular is moving there, why you should write zoneless-compatible code now
- [ ] Error handling: `ErrorHandler`, RxJS `catchError`, user-facing patterns
- [ ] **🆕 Angular DevTools workshop** (half-day): install the Chrome extension, profile your TODO app, identify a needless change-detection cycle. Screenshot the profile. Push.
- [ ] **Mini-project:** Add JWT auth flow to TODO — login page, interceptor, guard, refresh token, **HttpOnly cookie discussion in your notes** (don't use localStorage for tokens — bank-killer mistake).

**Self-check:** Senior dev: *"Why `switchMap` here, not `mergeMap`?"* — defend it with a concrete example. Different senior: *"Why a signal here, not a BehaviorSubject?"* — defend it.

---

## 🆕 Phase B3 — IMX-specific patterns (parallel to Phase 3+)

*This is the OIM stuff that no Angular tutorial teaches. The forum questions cluster here.*

- [ ] **TypedClient / V2Client architecture** — auto-generated API clients per module, `imx-modules/imx-api-<module>.tgz`
- [ ] Method-name generation rule: `GET portal/serviceitems` → `portal_serviceitems_get`
- [ ] The three named services: `imx_SessionService` (qbm), `QerApiService` (qer), `ApiService` (everywhere else) — when to inject which
- [ ] **Plugin registration** via `imx-plugin-config.json` and `bin\imxweb\custom`
- [ ] **Software Loader machine-role assignment**: "Business API Server" / "Development and Testing"
- [ ] **Translations:** `#LDS#` markers in code, `ImxClient check-translations` command, Designer-side translation tables
- [ ] **Custom-table flow:** *requires both* a C# `IApiProviderFor<PortalApiProject>` plugin (built from `Modules/QBM/dvd/AddOn/ApiSamples`) AND Angular code consuming the generated client. Read at least the C# side, even if you won't write it.
- [ ] **Authentication config** lives in **Designer → Base Data → Security Settings → Web Server Configurations → API Server**. Not in `web.config`, not in environment files. Find this on a real OIM install before you need it.
- [ ] **First productive-failure exercise:** Pick a Quest video customization you haven't watched. Spend 90 min trying it solo. Then watch the video and annotate what you tried vs what they did. Push the annotated notes.

**Self-check:** A teammate says "I changed a file in `qer/src/lib/admin` but my change isn't showing in the deployed portal." What are the 3 most likely causes, in order?

---

## Phase 4 — Enterprise & Bank Reality
*Why now: This is "I belong in this codebase." Most of this is missing from beginner tutorials and will absolutely be flagged in bank code review.*

> **🆕 Reframe:** items here are *gates* you've been applying since Phase 2, not new topics. Phase 4 is where you go deep on each.

- [ ] Testing depth: Jasmine + Karma, `TestBed`, fixtures, signal-based tests
- [ ] Service testing with mocked HttpClient and mocked TypedClient
- [ ] **🆕 Component testing for OIM patterns** — testing components that depend on injected `QerApiService`
- [ ] **Security depth:** XSS prevention, `DomSanitizer`, when bypass is dangerous, **Trusted Types**, **strict CSP with nonces**
- [ ] Content Security Policy — write one for a sample app, test it doesn't break the app
- [ ] **🆕 WCAG 2.2 AA compliance** (mandatory under EU Accessibility Act since 28 June 2025): route-change focus management, `cdkTrapFocus`, `LiveAnnouncer`, color-contrast 4.5:1, semantic HTML, ARIA on Material custom controls
- [ ] **🆕 Add `axe-core` to your test pipeline.** No PR ships without a clean axe run.
- [ ] i18n: `@angular/localize` basics, RTL languages
- [ ] Performance: bundle analysis (`ng build --stats-json`), lazy loading audit, **Chrome Performance panel's Angular track** with `enableProfiling()`
- [ ] **Mini-project:** Take your TODO from earlier. Add tests, a11y improvements (clean axe run), 2 languages, lazy loading audit. Bundle size before/after in your notes.

**Self-check:** Pretend you're the senior reviewer of your own TODO PR. Write 5 things you'd flag. Be honest.

---

## Phase 5 — OIM deep work (no longer "read PDFs")

> **🆕 Reframe:** the four PDFs you have aren't reading material — they're worksheets. Each one becomes a deliverable.

- [ ] **HTML5 Development Guide PDF** → 1-page architecture diagram + 3 questions you can't yet answer + 1 prediction tested in code
- [ ] **Web Portal PDF** → list every extension point in your own words
- [ ] **Web Application Configuration PDF** → diagram the config model
- [ ] **Angular Evolution ebook** → mark which chapters apply to OIM 10 (Angular 20) vs which are obsolete
- [ ] **Reading exercise (Wang et al. 2025 protocol):** Read `qer/src/lib/admin/qer-permissions-helper.ts`, three `*-base-cdr` patterns, the side-sheet/dialog patterns. End each session with a Markdown summary: (a) what does this module own, (b) where is data validated, (c) what gotchas to remember.
- [ ] **First real customization:** Pick the smallest realistic ticket you might face. Attempt without help for 90 min. Then watch/read the relevant Quest content. Push your attempt + reflection.

**Self-check:** Where would you add a custom column to a Web Portal grid? Trace the code path from UI through to the SQL table without help.

---

## 🆕 Spaced retrieval system (concept cards, not syntax)

Build an Anki/Mochi deck of ~50–80 cards by end of week 2. **Concepts only** — IDE autocompletes syntax. Examples:

- "When does qer-app-portal need recompiling vs deploying a plugin zip?"
- "Where is auth-method config stored in OIM?"
- "What's the difference between TypedClient and V2Client?"
- "When is `toSignal` preferred to `async` pipe?"
- "What does `track` do in `@for` and why does it matter?"
- "Why is `any` banned in bank TypeScript?"

Review intervals: 1 day, 3 days, 1 week, 3 weeks, 2 months.

---

## Schedule (concrete weekly plan)

| Week | Track A focus | Track B focus | Daily routine |
|---|---|---|---|
| 1 | Phase 0 finish + Phase 1 start | (none — front-loading fundamentals) | 4–6 h Track A + Feynman + Anki |
| 2 | Phase 1 deep | OIM repo + Quest videos #1–3 | 3 h Track A + 1 h Track B + Feynman |
| 3 | Phase 2 start | Abele Herwig #1–5 + nx graph | Interleaved |
| 4 | Phase 2 finish | OIM tooling deep dive | Interleaved |
| 5 | Phase 3 start | First IMX patterns | Interleaved |
| 6 | Phase 3 finish | First productive-failure customization | Interleaved |
| 7 | Phase 4 (testing/security/a11y depth) | Phase B3 IMX patterns | Interleaved |
| 8 | Phase 5 + first real ticket attempt | (Track B merges into A) | Full integration |

**Advancement rule:** can't move to next week if last week's Feynman notes are vague or copy-paste of docs. Quality of teaching = quality of understanding.

---

## Tracking

**Currently active:** Phase 0 — TypeScript narrowing
**Last completed:** Phase 0 — generics
**Next checkpoint:** Phase 0 self-check (read the `pluck` signature cold)
**Confidence (1–10):**

**Stuck on something?** Bring it to the tutor. Don't search for code solutions — diagnose where the gap is first.

---

## 🆕 Pitfalls watchlist (specific to your patterns)

| Failure mode | Detection signal | Pre-set response |
|---|---|---|
| Skim terminal output, break env | Env breaks ≥1× per week | "Read aloud" rule for every command output, 2-week mandatory streak |
| Tick boxes without proof | Commits don't match checkboxes | Audit weekly — un-tick anything without a commit |
| Vibe-code with AI then ship | Can't write Feynman note on what you just wrote | No-AI window doubled for that topic |
| Static-vs-dynamic library confusion | "My change isn't showing" | Drill `nx graph` until you can predict redeploy fanout |
| RxJS rabbit hole | Spending >4 h/week on RxJS exotica in month 1 | Time-cap: 4 h/week max on RxJS exploration |
| Imposter spiral → over-Googling | Asking same question 5x rephrased | Mandatory pause + Feynman attempt before any AI query |

---

## Re-reads (anti-forgetting protocol)

- Day +3 after a phase: re-read your own notes, not the tutorial
- Day +7 after a phase: rebuild one mini-project from scratch, no peeking
- Day +21 after a phase: explain it to me, role-played as a junior dev who doesn't know Angular

---

## Caveats (be honest with yourself about these)

- This roadmap produces a junior who can pass review on **small** OIM customizations after 2 months. Not a confident plugin author.
- If your employer expects more than that, the honest conversation to have early is: *"I'll be productive on small tickets in 2 months; complex plugin work is a 4–6 month track."* That conversation is worth more than any roadmap polish.
- Angular moves fast. Check `angular.dev/roadmap` quarterly. If Signal Forms graduates from experimental and `httpResource` becomes the dominant HTTP pattern, the RxJS section gets even smaller.
- OIM versions vary. If your client is on 9.2.x (still common in banks), the GitHub branch is v92 and Angular is older — confirm the actual deployed version on day 1, don't assume Angular 20.
