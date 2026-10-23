# Strona autorska Roberta Bembnisty

Strona robertbembnista.pl zbudowana w [Astro](https://astro.build), publikowana przez GitHub Pages.

## Gdzie co jest

- `src/config.ts`: nazwa, opis, e-mail, LinkedIn, identyfikator komentarzy (Cusdis)
- `src/content/eseje/`, `src/content/poradniki/`: teksty w Markdown, jeden plik na tekst
- `src/content/ksiazki/`: opisy książek i wybrane fragmenty (nigdy całość)
- `src/pages/`: strony stałe (Szkolenia i coaching, O mnie, Kontakt)

## Publikacja

Każdy zapis na gałęzi `main` uruchamia `.github/workflows/deploy.yml`, który buduje stronę i publikuje ją na GitHub Pages.

## Lokalnie

```
npm install
npm run dev
```
