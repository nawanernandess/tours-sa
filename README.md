# Tours-SA

Viagens incríveis começam com o transfer certo! Landing page moderna para empresa de transfers, tours e passeios turísticos.


<p align="center">
  <img src="https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular 21" title="Angular - Framework frontend moderno e performático"/>
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" title="TypeScript - Superset tipado de JavaScript"/>
  <img src="https://img.shields.io/badge/Angular%20Material-21-757575?style=for-the-badge&logo=angular&logoColor=white" alt="Angular Material" title="Angular Material - Biblioteca de componentes UI baseada no Material Design"/>
  <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" title="Bootstrap - Framework CSS para grid e utilitários responsivos"/>
  <img src="https://img.shields.io/badge/RxJS-7.8-B7178C?style=for-the-badge&logo=reactivex&logoColor=white" alt="RxJS" title="RxJS - Programação reativa com Observables"/>
  <img src="https://img.shields.io/badge/Swiper-11-6332F6?style=for-the-badge&logo=swiper&logoColor=white" alt="Swiper" title="Swiper - Biblioteca de carrosséis e sliders modernos"/>
  <img src="https://img.shields.io/badge/Font%20Awesome-6-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white" alt="Font Awesome" title="Font Awesome - Biblioteca de ícones vetoriais"/>
  <img src="https://img.shields.io/badge/JSON%20Server-0.17-000000?style=for-the-badge&logo=json&logoColor=white" alt="JSON Server" title="JSON Server - API REST fake para prototipação rápida"/>
</p>

## Preview

### Desktop

<p align="center">
  <img src="src/assets/img/preview-desktop.png" alt="Preview Desktop" width="800"/>
</p>

### Mobile

<p align="center">
  <img src="src/assets/img/preview-mobile.png" alt="Preview Mobile" width="350"/>
</p>

## Funcionalidades

- **Hero Section** — Seção principal com imagem de fundo e call-to-action
- **Atrações** — Cards descritivos dos serviços (Transfers e Passeios)
- **Sobre Nós** — Informações sobre a empresa com imagem complementar
- **Depoimentos** — Carrossel (Swiper) com avaliações de clientes
- **Formulário de Contato** — Formulário reativo com validação e máscara de telefone
- **Dialog de Feedback** — Alertas visuais de sucesso/erro ao enviar formulário
- **Scroll Suave** — Navegação entre seções com animação customizada
- **Botão "Voltar ao Topo"** — Aparece no mobile ao rolar a página
- **Layout Responsivo** — Adaptado para desktop e mobile
- **Lazy Loading** — Carregamento sob demanda das rotas

## Padrões Angular 19

- **Standalone Components** — Sem NgModules, cada componente declara suas dependências
- **Signals** — Estado reativo com `signal()`, `input()` e `output()`
- **inject()** — Injeção de dependência funcional
- **Lazy Loading** — Rotas carregadas sob demanda via `loadComponent`
- **Control Flow** — Sintaxe `@if` nativa do Angular
- **Reactive Forms** — Formulários tipados com `nonNullable: true`
- **Separação de Responsabilidades** — Core (estrutural) / Features (páginas) / Shared (reutilizável)
- **Services** — Lógica de negócio isolada em serviços injetáveis
- **Environment Files** — Configurações separadas por ambiente

## Estrutura do Projeto

```
tours-sa/
├── database/
│   └── database.json              # Banco de dados mock (JSON Server)
├── src/
│   ├── assets/
│   │   ├── icon/                  # Ícones estáticos
│   │   └── img/                   # Imagens (logo, faces, previews)
│   ├── environments/
│   │   ├── environment.ts         # Config de desenvolvimento
│   │   └── environment.prod.ts    # Config de produção
│   ├── app/
│   │   ├── core/                  # Módulos estruturais da aplicação
│   │   │   ├── components/
│   │   │   │   ├── navbar/        # Barra de navegação fixa
│   │   │   │   └── footer/        # Rodapé com links e redes sociais
│   │   │   └── models/
│   │   │       └── contact.model.ts  # Interface do contato
│   │   ├── features/              # Funcionalidades/páginas
│   │   │   ├── home/              # Página principal (hero, atrações, sobre, depoimentos)
│   │   │   ├── contact/           # Formulário de contato
│   │   │   └── content-navigation/  # Wrapper com router-outlet
│   │   └── shared/                # Componentes e serviços reutilizáveis
│   │       ├── components/
│   │       │   ├── avatar/        # Componente de imagem/avatar
│   │       │   ├── card/          # Card de serviço
│   │       │   ├── dialog-alert/  # Dialog de feedback (sucesso/erro)
│   │       │   └── swiper/        # Slide de depoimento
│   │       └── services/
│   │           ├── contact.service.ts       # Envio de contatos (HTTP)
│   │           ├── dialog-alert.service.ts  # Gerenciamento de dialogs
│   │           └── scroll-to.service.ts     # Scroll suave entre seções
│   ├── index.html                 # HTML principal
│   ├── main.ts                    # Bootstrap da aplicação
│   └── styles.css                 # Estilos globais e variáveis CSS
├── angular.json                   # Configuração do Angular CLI
├── package.json                   # Dependências e scripts
├── tsconfig.json                  # Configuração TypeScript base
└── tsconfig.app.json              # Configuração TypeScript da app
```

## Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18+)
- [Angular CLI](https://angular.dev/tools/cli) (v21+)

### Instalação

```bash
npm install
```

### Rodar o servidor mock (API local)

```bash
npm run database
```

> Inicia o servidor em `http://localhost:3000`

### Rodar a aplicação Angular
```bash
npm start
```
> Abre em `http://localhost:4200`

### Build de Produção

```bash
npm run build
```