# Echo Assist — Project Conventions

## Purpose
Single-page dashboard embedding the Echo Barrier "Echo Assist" AI conversational agent directly on the page. The agent runs in-browser via WebRTC — no redirects to external URLs.

## Tech Stack
- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Agent SDK:** `@elevenlabs/react` — `useConversation` hook
- **Font:** Roboto (Google Fonts)

## Agent
- **Name:** Echo Assist
- **ID:** `agent_01jyrr07e8eqbazm1txte3csbp`
- **Connection:** WebRTC (`connectionType: "webrtc"`)
- **Never** link to `elevenlabs.io/app/talk-to` — the agent must be embedded via `useConversation`

## Branding (match echo-barrier-training-platform)
| Token | Value |
|-------|-------|
| Primary orange | `#FF7026` |
| Dark orange (hover) | `#e05e1a` |
| Background | `#ffffff` |
| Text | `#000000` |
| Border / divider | `#f0f0f0` |
| Font | Roboto, sans-serif |

## Code Conventions
- All agent interaction lives in `src/components/EchoAssistAgent.tsx` (client component)
- Page shell (`src/app/page.tsx`) is a server component that renders the client component
- Inline styles are acceptable for one-off layout; use Tailwind classes for reusable patterns
- No QR codes, no external links to ElevenLabs — agent is embedded
- `NEXT_PUBLIC_` env vars only for values that must be public; agent ID can be hardcoded as it's public
