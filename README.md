# Savefile

Savefile is a real-life RPG operating system prototype.

It models everyday life as a running system with resources, quests, debuffs, logs, skills, inventory, world domains, and weekly patch notes. Instead of treating productivity failures as moral failures, Savefile treats them as operational issues that can be observed, debugged, patched, and reviewed.

> Your life is already running. Make the save file readable.

## Core Loop

```txt
Log -> Detect Debuff -> Choose Quest -> Act -> Review -> Patch
```

## Current MVP

- **Character Sheet**: current build, resources, active quest, active debuffs, and system console.
- **Quest Board**: daily, side, main, and boss quests, each structured around IPOD.
- **Runtime Log**: a lightweight 3-line daily log with energy, focus, and mood.
- **Debuff Detector**: rule-based detection for operational issues such as Sleep Debt, Memory Leak, and Livelock.
- **Weekly Review**: patch notes generated from recent logs and quest state.
- **System Map**: skill tree, inventory, and world domains.

## Product Philosophy

Savefile is not a habit tracker, a motivational dashboard, or a self-help streak machine.

It is a system interface for making the user's life state readable. The language is game-like, but the rewards are meant to represent real operational capacity: better recovery, better boundaries, clearer quests, and safer behavior changes.

## Tech Stack

- React
- TypeScript
- Vite
- Lucide React
- Local storage for the current MVP

## Project Structure

```txt
src/
  app/                  App shell, routing state, app-level types
  data/                 Seed data for the local-first MVP
  features/
    character/          Builds, resources, character sheet
    logs/               Runtime log, debuff rules, diagnostics
    quests/             Quest types, quest engine, quest board
    review/             Weekly patch notes
    system/             Skill tree, inventory, world map
  shared/
    storage/            Local storage adapter
    styles/             Global UI styles
    ui/                 Reusable UI primitives
```

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

## Roadmap Ideas

- Editable quest detail modal
- Editable character sheet
- Season system
- Boss quest flow
- AI-assisted debuff detection
- Weekly patch note export
- Backend sync
- Social guilds and party quests

## License

GNU General Public License v3.0 or later. See [LICENSE](./LICENSE).
