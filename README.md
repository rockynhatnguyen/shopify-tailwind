# Emerald Tornado Shopify Theme

- A theme made for Tomorrow Agency's Code Assessment.

## Requirements

- Node v14.7.3+
- NPM v6.3.2+
- Ruby v2.6.6+
- Shopify CLI

## Getting Started

To use this repository for making Shopify themes, use the following command with Shopify CLI.

```sh
shopify theme init [ NAME OF THEME ] --clone-url https://github.com/[USER]/[REPO]
```

## Packages

- TailwindCSS
- PostCSS
- Autoprefixer
- Alpine.js
- Flickity

## Commands

```sh
npm init -y
npm install -D tailwindcss postcss autoprefixer
npm run watch
npm run build
```

## Shopify CLI Commands

```sh
shopify theme init
shopify login --store https://[STORE-NAME].myshopify.com/
shopify theme serve
shopify theme check
shopify theme push
shopify theme publish
shopify theme list
```
