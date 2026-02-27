# Fabric Search — Fashion by Material

A product search engine for clothing filtered by fabric composition. Search for items like "black tank top" and filter by natural fibers, regenerated fabrics, synthetics, blends, and verified fiber percentages.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Data

Product data lives in `data/products.json`. Currently uses **25 sample products** with realistic material compositions. When you integrate with affiliate feeds (CJ, ShareASale, etc.), replace or extend this data source.

### Data Structure

Each product includes:
- `materials.fibers` — Array of `{ name, percentage, type }` where type is `natural`, `regenerated`, or `synthetic`
- `materials.verified` — Whether fiber percentages are verified
- `categories` — e.g. casual, workwear, activewear, intimates
- `gender` — women, men, unisex

## Project Structure

- `data/products.json` — Product catalog (swap for API/feeds later)
- `src/app/page.tsx` — Main search + results page
- `src/components/` — ProductCard, SearchFilters
- `src/lib/products.ts` — Filter logic
