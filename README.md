# franarolas.github.io

Personal website + hosting for app metadata (privacy policies, AdMob verification, support pages).

Lives at https://franarolas.github.io

## Structure

```
.
├── index.html                                    # Landing page
├── app-ads.txt                                    # AdMob verification — must stay at root
├── support.html                                   # Contact / support page
├── privacy-policy/
│   ├── nuria-vallllosera-relajacion.html          # Núria's relaxation app — DO NOT MODIFY
│   ├── most-likely-to.html                        # Most Likely To
│   └── never-have-i-ever.html                     # Never Have I Ever
└── README.md
```

## Constraints

- **`app-ads.txt` must remain at the root.** AdMob's crawler only checks `https://franarolas.github.io/app-ads.txt`. Do not move it into a subdirectory.
- **`privacy-policy/nuria-vallllosera-relajacion.html`** is in active use by a third-party app (Núria Vall-llosera RELAJACIÓN). Do not change the path, filename, or content without verifying it is safe to do so.
- URLs referenced from App Store / Play Store listings are effectively permanent. Once an app is published pointing at a URL here, renaming that file is disruptive. Plan filenames up front.

## Orchestrated from MOS

This project is tracked in the MOS orchestrator under `projects/website/`. Tasks, status, and changes are logged there.

## Deploying

GitHub Pages serves from `main`. Every push auto-deploys (no build step).

## Related ad/store configuration

| Concern           | Where                                                                     |
| ----------------- | ------------------------------------------------------------------------- |
| AdMob publisher   | `app-ads.txt` line                                                        |
| Play Store URLs   | https://play.google.com/console — fill developer website + privacy URL    |
| App Store URLs    | https://appstoreconnect.apple.com — fill marketing + privacy URL          |
