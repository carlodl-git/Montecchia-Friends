# Ottimizzazione Immagini

## Stato Attuale

Le immagini attuali non sono ottimizzate:
- `hero-golf.jpeg`: 246KB, 1920x1080px
- `Logo_Golf_Montecchia.png`: 132KB, 664x376px

## Raccomandazioni

### 1. Ottimizzazione Manuale (Consigliato)

#### Per hero-golf.jpeg:
- **Ridurre dimensioni**: 1920x1080 è troppo grande per web
  - Desktop: 1920x1080 → 1280x720 (o anche 960x540)
  - Mobile: max 800px di larghezza
- **Convertire in WebP**: riduce del 25-35% rispetto a JPEG
- **Qualità**: 80-85% è sufficiente per foto
- **Strumenti**:
  - Online: https://squoosh.app/ (gratuito, Google)
  - Online: https://tinypng.com/ (gratuito)
  - Desktop: ImageOptim (Mac), GIMP, Photoshop

#### Per Logo_Golf_Montecchia.png:
- **Convertire in SVG**: se il logo è vettoriale, SVG è molto più piccolo
- **Oppure PNG ottimizzato**: se deve rimanere raster
- **Dimensioni**: 664x376 è ok, ma può essere ridotto a 400x226 per web
- **Strumenti**: stessi di sopra

### 2. Script di Ottimizzazione (Opzionale)

Puoi creare uno script Node.js per ottimizzare automaticamente:

```bash
npm install --save-dev sharp
```

Poi crea `scripts/optimize-images.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  { input: 'src/assets/hero-golf.jpeg', output: 'src/assets/hero-golf-optimized.webp', width: 1280, quality: 80 },
  { input: 'src/assets/Logo_Golf_Montecchia.png', output: 'src/assets/Logo_Golf_Montecchia-optimized.webp', width: 400, quality: 90 }
];

async function optimizeImages() {
  for (const img of images) {
    await sharp(img.input)
      .resize(img.width, null, { withoutEnlargement: true })
      .webp({ quality: img.quality })
      .toFile(img.output);
    console.log(`✓ Ottimizzato: ${img.output}`);
  }
}

optimizeImages();
```

Aggiungi al `package.json`:
```json
"scripts": {
  "optimize:images": "node scripts/optimize-images.js"
}
```

### 3. Risultati Attesi

Dopo l'ottimizzazione:
- `hero-golf.webp`: ~80-100KB (da 246KB) = **-60%**
- `Logo_Golf_Montecchia.webp`: ~20-30KB (da 132KB) = **-75%**

**Totale risparmiato: ~280KB** (circa 70% di riduzione)

### 4. Implementazione

1. Ottimizza le immagini usando uno degli strumenti sopra
2. Sostituisci i file in `src/assets/`
3. Aggiorna gli import se necessario
4. Testa che tutto funzioni correttamente

## Note

- WebP è supportato da tutti i browser moderni (95%+)
- Per compatibilità con browser vecchi, puoi usare `<picture>` con fallback
- Vite comprime automaticamente le immagini durante il build, ma l'ottimizzazione manuale è sempre meglio


