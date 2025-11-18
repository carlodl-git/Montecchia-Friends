# Montecchia & Friends

Landing page per il programma "Montecchia & Friends" del Golf della Montecchia.

## Stack Tecnologico

- **Vite** - Build tool e dev server
- **React 18** - Framework UI
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **shadcn/ui** - Componenti UI
- **React Router** - Routing

## Struttura del Progetto

```
src/
├── components/          # Componenti React
│   ├── ui/             # Componenti shadcn/ui
│   ├── Hero.tsx        # Sezione hero
│   ├── HowItWorks.tsx  # Come funziona
│   ├── Benefits.tsx    # Vantaggi
│   ├── OpenDays.tsx    # Prossimi Open Days
│   ├── InviteFriend.tsx # Condividi con amici
│   ├── FAQ.tsx         # Domande frequenti
│   └── Footer.tsx      # Footer
├── pages/              # Pagine
│   ├── Index.tsx       # Homepage
│   └── OpenDayForm.tsx # Form iscrizione
├── lib/                # Utilities
└── assets/             # Assets statici
```

## Routing

- `/` - Landing page principale
- `/open-day/iscrizione` - Pagina form iscrizione

## Funzionalità

- **Landing Page**: Sezioni Hero, Come funziona, Vantaggi, Open Days, Condividi, FAQ, Footer
- **Form Iscrizione**: Pagina dedicata per l'iscrizione agli Open Days
- **Condivisione**: Funzione per condividere il link di iscrizione
- **Design Responsive**: Ottimizzato per desktop e mobile
- **Colori Istituzionali**: Verde Golf della Montecchia, bianco, nero

## Installazione

```bash
npm install
```

## Sviluppo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```
