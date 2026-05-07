# Angular for OIM Frontend — Personal Roadmap

**Target stack:** Angular 20.3.15 (One Identity Manager HTML5)
**Domain:** Banking / Enterprise frontend
**Runway:** 2 months training + ongoing on the job
**Daily commitment:** 4–6 focused hours
**Starting from:** Strong Python/algorithmic background, weak frontend (~1.5/10 Angular)

---

## The Rules (read every day)

1. **No copy-paste.** Not from ChatGPT, not from me, not from Stack Overflow. Type every line, even if you're copying intent.
2. **Proof or it didn't happen.** Every checkbox needs a working commit on GitHub. No "I read about it" check-offs.
3. **Rubber duck test.** If you can't explain a concept out loud (in Slovenian or English) without notes, it's not done.
4. **Modern Angular only.** If a tutorial uses `NgModule`, `*ngIf`, or `constructor(private x: X)` — close the tab. Find Angular 17+ content.
5. **Confidence calibration.** After each phase, rate yourself 1–10. We'll test if you're right.

---

## Phase 0 — Setup & TypeScript Foundation
*Why first: You're a Python dev. Static types will trip you up before Angular does. Banks read types like prose.*

- [ ] Confirm Node.js 20+ and npm working
- [ ] Install Angular CLI globally; run `ng version` successfully
- [ ] TypeScript: primitives, type vs interface, union/intersection types
- [ ] TypeScript: generics — write one generic function from scratch
- [ ] TypeScript: narrowing (typeof, instanceof, discriminated unions)
- [ ] TypeScript strict mode — understand what each flag forbids and why
- [ ] **Mini-project:** rewrite one of your Python scripts as TypeScript with full types

**Self-check:** Can you read a function signature and predict what it accepts/returns without running it?

---

## Phase 1 — Angular Foundations
*Why now: This is "I can put pixels on screen." Don't skip steps — every shortcut here costs you in Phase 3.*

- [ ] `ng new` — understand every file the CLI creates (no skipping)
- [ ] Standalone component anatomy: `@Component`, selector, template, styles
- [ ] Template syntax: interpolation, property binding `[x]`, event binding `(x)`
- [ ] Two-way binding `[(x)]` — and why it's syntactic sugar
- [ ] New control flow: `@if`, `@for` (with `track`), `@switch`, `@defer`
- [ ] Signals: `signal()`, `computed()`, `effect()` — when each is right
- [ ] Component I/O: `input()`, `output()` (the modern signal-based versions)
- [ ] Content projection: `<ng-content>`
- [ ] **Mini-project:** Build a TODO app with signals only. No services yet.

**Self-check:** When does `effect()` cause infinite loops? When should you reach for `computed()` instead?

---

## Phase 2 — Application Architecture
*Why now: This is "I can build a real feature." Banks will not accept everything in one component.*

- [ ] Services: `@Injectable({ providedIn: 'root' })` and why
- [ ] `inject()` function — and why it replaces constructor injection
- [ ] Routing: standalone routes, lazy loading with `loadComponent`
- [ ] Route params, query params, route data
- [ ] HttpClient basics: GET, POST, error handling
- [ ] Reactive Forms: `FormGroup`, `FormControl`, `FormBuilder`
- [ ] Custom validators (sync and async)
- [ ] **Mini-project:** Extend your TODO app — add backend (mock REST API), routing between list/detail, reactive form for add/edit.

**Self-check:** Why do banks insist on Reactive Forms over template-driven? (Hint: it's not preference.)

---

## Phase 3 — The Hard Parts (where most devs plateau)
*Why now: This is "I can pass code review at a bank." Skip this phase and you'll plateau forever.*

- [ ] RxJS: `Observable`, `Subject`, `BehaviorSubject`, `ReplaySubject`
- [ ] RxJS operators: `map`, `filter`, `switchMap`, `mergeMap`, `concatMap`, `combineLatest`, `debounceTime`
- [ ] **The big question:** When signals, when RxJS, when `toSignal()`? Write a 200-word answer in your own words.
- [ ] Guards (`CanActivate`, `CanMatch`) — auth pattern for bank context
- [ ] Resolvers — pre-loading data
- [ ] HTTP Interceptors — auth tokens, error handling, logging (banks LOVE these)
- [ ] Change detection: default vs OnPush, how signals change everything
- [ ] Error handling: `ErrorHandler`, RxJS `catchError`, user-facing patterns
- [ ] **Mini-project:** Add JWT auth flow to your TODO app — login page, interceptor that adds token, guard that blocks unauthenticated routes, refresh token logic.

**Self-check:** A senior dev asks "why did you use `switchMap` here instead of `mergeMap`?" — can you defend it?

---

## Phase 4 — Enterprise & Bank Reality
*Why now: This is "I belong in this codebase." Most of this is missing from beginner tutorials.*

- [ ] Testing: Jasmine basics, Karma runner
- [ ] Component testing: `TestBed`, fixtures, signal-based tests
- [ ] Service testing with mocked HttpClient
- [ ] Security: XSS prevention, `DomSanitizer`, when bypass is dangerous
- [ ] Content Security Policy basics
- [ ] Accessibility: ARIA roles, keyboard navigation, focus management
- [ ] i18n: `@angular/localize` basics (banks usually serve multiple languages)
- [ ] Performance: bundle analysis (`ng build --stats-json`), lazy loading audit
- [ ] **Mini-project:** Add tests, a11y improvements, and i18n (at least 2 languages) to your TODO app.

**Self-check:** Show me your bundle size before vs after lazy loading a route. Explain the delta.

---

## Phase 5 — OIM-Specific (parallel to Phase 3+)
*Why parallel, not last: You'll be reading OIM code on the job. Better to start orienting early.*

- [ ] Read `oneidentitymanager_html5development_10_0_2.pdf` — chapter 1 only at first
- [ ] Identify OIM's module architecture (qbm, qer, etc. — what does the prefix system mean?)
- [ ] Read `one-identity-manager_web-portal_10_0.pdf` — extension points
- [ ] Read `one-identity-manager_web-application-configuration_10_0__1_.pdf` — config model
- [ ] Identify ONE customization scenario you'll likely face and trace the code path
- [ ] **Document for yourself:** Write a 1-page "how OIM HTML5 is structured" cheat sheet — in your words

**Self-check:** Where would you add a custom column to a Web Portal grid? Trace it without help.

---

## Tracking

**Currently active:** _______________
**Last completed:** _______________
**Next checkpoint:** _______________
**Confidence (1–10):** _______________

**Stuck on something?** Bring it to the tutor. Don't search for code solutions — diagnose where the gap is first.

---

## Re-reads (anti-forgetting protocol)

- Day +3 after a phase: re-read your own notes, not the tutorial
- Day +7 after a phase: rebuild one mini-project from scratch, no peeking
- Day +21 after a phase: explain it to someone else (or to me, role-played as a junior)
