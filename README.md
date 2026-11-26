# 8760 HOURS V1.3.1 PWA Recovery Baseline

Reliability-only update for iOS/Home Screen startup. It preserves the locked V1.3.1 application and all data contracts.

## Deploy
Replace: `index.html`, `service-worker.js`, `manifest.webmanifest`.
Upload/retain: `icons/icon-192-v2.png`, `icons/icon-512-v2.png`.
Keep unchanged: `app-v131-clean.js`, `styles-v131-clean.css`, `hours-db-v130.js`, `question-set-v1.js`, `offline.html`.

Service worker cache: `8760-hours-v1.3.1-pwa-recovery`.
No `skipWaiting()` or `clients.claim()`. Navigation is network-first; immutable modules/icons are cache-first. IndexedDB is never modified by the worker.
