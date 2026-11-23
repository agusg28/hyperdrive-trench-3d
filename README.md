# hyperdrive-trench-3d

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/agusg28/hyperdrive-trench-3d/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/agusg28/hyperdrive-trench-3d/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

HYPERDRIVE TRENCH 3D is a synthwave wireframe trench runner built by an AI agent from a single prompt — one self-contained HTML file, zero external assets, a hand-rolled perspective projector, procedural Web Audio, and an AI DEMO PILOT that threads laser gates at the last millisecond. Entered on make.fun with its X video post.

Open `game/index.html` in a browser to play it — arrows/WASD or touch drag to fly, or press AI DEMO PILOT and watch it dodge.

## AI Demo Pilot — perfect run (seed 36)

The AI DEMO PILOT uses two-gate lookahead: per axis it plans the nearest
gate and the next one after it, picking the gap edge that keeps the following
gate reachable, and pre-positions the other axis early for paired gates.
Default seed is **36** (`?seed=` overrides it). At seed 36 the pilot runs
flawless: 0 hull hits over 31+ s, max COMBO x36 (every gate a near miss),
max speed 663 KM/H, score 53,456 @ 15 s / 106,122 @ 20 s / 204,750 @ 25 s.
When COMBO reaches 6 the tunnel shifts into the fiery gold/crimson
Overdrive theme with radial warp speed-lines.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=605e1st0&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
