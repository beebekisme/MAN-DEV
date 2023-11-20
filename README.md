
## Getting Started

To quickly get started, follow the steps below.

```bash
# Clone this repository
git clone git@github.com:huntabyte/sveltekit-actions.git

# Navigate to the sveltekit-loading directory
cd sveltekit-actions

# Install dependencies
npm install

#Install prisma and setup 
npx prisma init --datasource-provider sqlite

#Push setup database before running 
npx prisma db push

#To see prisma studio 
npx prisma studio

# Start development environment
npm run dev
```

