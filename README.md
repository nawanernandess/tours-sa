# Tours-SA

Landing page moderna para empresa de transfers, tours e passeios turísticos, construída com Angular 21 seguindo as melhores práticas modernas do framework.

<p align="center">
  <img src="https://img.shields.io/badge/Angular-21-DD0031?logo=angular&logoColor=white" alt="Angular"/>
  <img src="https://img.shields.io/badge/Angular_Material-21-3f51b5?logo=angular&logoColor=white" alt="Angular Material"/>
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/RxJS-7.8-B7178C?logo=reactivex&logoColor=white" alt="RxJS"/>
  <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white" alt="Bootstrap"/>
  <img src="https://img.shields.io/badge/Swiper-11-6332F6?logo=swiper&logoColor=white" alt="Swiper"/>
  <img src="https://img.shields.io/badge/Font_Awesome-6-528DD7?logo=fontawesome&logoColor=white" alt="Font Awesome"/>
  <img src="https://img.shields.io/badge/ngx--mask-21-FF6F00" alt="ngx-mask"/>
  <img src="https://img.shields.io/badge/JSON_Server-mock_API-brightgreen" alt="JSON Server"/>
</p>

## Preview

### Desktop

<p align="center">
  <img src="src/assets/img/preview-desktop.png" width="600"/>
</p>

### Mobile

<p align="center">
  <img src="src/assets/img/preview-mobile.png" width="220"/>
</p>

## Funcionalidades

- **Hero Section** com imagem de fundo e call-to-action "Solicitar Cotação"
- **Atrações** com cards descritivos dos serviços (Transfers e Passeios)
- **Sobre Nós** com informações da empresa e imagem complementar
- **Depoimentos** com carrossel automático (Swiper) e navegação por dots
- **Formulário de Contato** reativo com validação e máscara de telefone
- **Dialog de Feedback** com alertas visuais de sucesso/erro
- **Scroll Suave** entre seções com animação customizada (easeInOutQuart)
- **Botão "Voltar ao Topo"** visível no mobile ao rolar a página
- **Layout Responsivo** adaptado para desktop e mobile
- **Lazy Loading** com carregamento sob demanda das rotas

## Padrões Angular 21

- Standalone components (sem NgModules)
- Signals (`signal`, `input`, `output`)
- `inject()` em vez de constructor injection
- `@if` control flow nativo
- Lazy loading em todas as rotas via `loadComponent`
- Reactive Forms tipados com `nonNullable: true`
- `afterNextRender()` para lógica pós-renderização
- Separação Core / Features / Shared

## Estrutura do Projeto

```
database/
└── database.json                  # Banco de dados mock (JSON Server)
src/
├── assets/
│   ├── icon/                      # Ícones estáticos
│   └── img/                       # Imagens (logo, faces, previews)
└── environments/
    ├── environment.ts             # Config de desenvolvimento
    └── environment.prod.ts        # Config de produção
    app/
    ├── core/                      # Módulos estruturais da aplicação
    │   ├── components/
    │   │   ├── navbar/            # Barra de navegação fixa
    │   │   └── footer/            # Rodapé com links e redes sociais
    │   └── models/
    │       └── contact.model.ts   # Interface do contato
    ├── features/                  # Funcionalidades/páginas
    │   ├── home/                  # Página principal (hero, atrações, sobre, depoimentos)
    │   ├── contact/               # Formulário de contato
    │   └── content-navigation/    # Wrapper com router-outlet
    └── shared/                    # Componentes e serviços reutilizáveis
        ├── components/
        │   ├── avatar/            # Componente de imagem/avatar
        │   ├── card/              # Card de serviço
        │   ├── dialog-alert/      # Dialog de feedback (sucesso/erro)
        │   └── swiper/            # Slide de depoimento
        └── services/
            ├── contact.service.ts       # Envio de contatos (HTTP)
            ├── dialog-alert.service.ts  # Gerenciamento de dialogs
            └── scroll-to.service.ts     # Scroll suave entre seções
```

## Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org) 18+
- [npm](https://npmjs.com) 9+

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

### Build de produção

```bash
npm run build
```
