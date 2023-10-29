# Apadrinha Brasil App
- [ ] TODO: Add a quick description of the project here.

## Getting Started
These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Before you begin, ensure you have met the following requirements:
- **Node.js**: Ensure you have Node.js version 16 installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Yarn**: The package manager is Yarn. Make sure to install it before proceeding. Follow the instructions in the [official website](https://classic.yarnpkg.com/en/docs/install).
- **Docker**: We use docker to run a containerized PostgreSQL database. You will need to have the Docker CLI installed to run the required commands to create, start, and stop the container. We recommend installing Docker Desktop which is the Docker's GUI software for managing containers. Once you install Docker Desktop it will have installed the Docker CLI as well. Go to the [official website](https://www.docker.com/products/docker-desktop/) to install Docker Desktop.

### First steps
1. Clone the repository
```
git clone https://github.com/Apadrinha-Brasil/apadrinha-brasil.git
```
2. Navigate to the project directory
```
cd apadrinha-brasil
```
3. Install dependencies
```
yarn install
```

### Configuration
1. Create a configuration file (e.g., .env) and set the required environment variables. You will need it to set up the database.
```
DATABASE_URL=postgresql://${DB_USERNAME}:${DB_PASSWORD}@localhost:5432/ab_dev
DB_USERNAME=<username>
DB_PASSWORD=<password>
```
Replace `<username>` and `<password>` to any that you wish. If you'd like to use PgAdmin to more easily manage the PostgreSQL databse, you will need these credentials to connect PgAdmin to the containerized database.

### Setup PostgreSQL database
1. Once your local database is up and running you will need to apply all migration history to it. To achieve that run the following command.
```
npx prisma migrate dev
```

### Run the application
1. To start the development server run this command.
```
yarn dev
```

### ES Lint and Prettier
It is recommended to install the ES Lint extension (by Microsoft) for VS Code as it highlights lint errors. It will also enable `.vscode/settings.json` to enforce lint fixes when files are saved. 
> **Note**: Applying fixes when saving files can become annoying for some people so this feature may change in the future based on feedback from the dev team. If this is something you'd like to discuss about, please bring the subject up to be discussed with the dev team.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
