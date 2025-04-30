# DataAlex Dashboard

Dashboard analítico moderno construído com React, TypeScript e Chart.js, oferecendo visualizações de dados interativas e responsivas.

## 🚀 Tecnologias

- **React** (v18.3) - Framework JavaScript para construção de interfaces
- **TypeScript** (v5.5) - Superset JavaScript com tipagem estática
- **Vite** (v5.4) - Build tool e dev server
- **Chart.js** (v4.4) - Biblioteca de visualização de dados
- **Tailwind CSS** (v3.4) - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones modernos

## 📊 Funcionalidades

- **Visualizações Dinâmicas**
  - Gráficos de barras para receita
  - Gráficos de linha para crescimento de usuários
  - Gráficos de pizza para categorias
  - Gráficos radiais para métricas de desempenho

- **Filtros Interativos**
  - Período (Diário, Semanal, Mensal, Trimestral, Anual)
  - Ano
  - Categoria

- **Recursos Adicionais**
  - Tema claro/escuro automático
  - Layout totalmente responsivo
  - Animações suaves
  - Exportação de dados
  - Persistência de preferências do usuário

## 🛠️ Estrutura do Projeto

```
src/
├── components/         # Componentes React
│   ├── charts/        # Componentes de gráficos
│   └── ui/            # Componentes de interface
├── context/           # Contextos React (tema, etc)
├── services/          # Serviços e APIs
├── types/             # Definições TypeScript
└── utils/             # Utilitários e helpers
```

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/holandaalex/dataalex-dashboard

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🔧 Configuração

O projeto utiliza variáveis de ambiente para configuração. Crie um arquivo `.env` na raiz:

```env
VITE_API_URL=sua_url_api
```

## 📈 Tipos de Dados

```typescript
interface DashboardData {
  stats: DashboardStats;
  revenue: RevenueData;
  users: UsersData;
  categories: CategoriesData;
  performance: PerformanceData;
}
```

## 🎨 Personalização

O tema pode ser customizado através do arquivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {...},
      secondary: {...}
    }
  }
}
```

## 📱 Responsividade

O dashboard é totalmente responsivo com breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔐 Boas Práticas

- Componentes fortemente tipados com TypeScript
- Hooks personalizados para lógica reutilizável
- Context API para gerenciamento de estado global
- Lazy loading para otimização de performance
- Princípios de design responsivo mobile-first

## 🚥 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Visualiza build local
npm run lint     # Executa linting
```

## 📄 Licença

MIT

## 🤝 Contribuição

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add: nova funcionalidade'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para suporte, envie um email para contato@alexholanda.com.br
