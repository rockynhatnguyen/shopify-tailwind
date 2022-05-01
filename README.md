# Shopify Tailwind Theme Base

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

## Commands

```sh
npm init -y
npm install -D tailwindcss postcss autoprefixer
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