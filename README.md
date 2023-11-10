# Apadrinha Brasil App
- [ ] TODO: Add a quick description of the project here.

## Getting Started
These instructions will help you get a copy of the project up and running on your local machine for development.

### Prerequisites
Before you begin, ensure you have met the following requirements:
- **Node.js**: Ensure you have Node.js version 16 installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Yarn**: The package manager is Yarn. Make sure to install it before proceeding. Follow the instructions in the [official website](https://classic.yarnpkg.com/en/docs/install).
- **Docker**: We use docker to run a containerized PostgreSQL database. You will need to have the Docker CLI installed to run the required commands to build, start, and stop the container. We recommend installing Docker Desktop which is the Docker's GUI software for managing containers. Once you install Docker Desktop it will have installed the Docker CLI as well. Go to the [official website](https://www.docker.com/products/docker-desktop/) to install Docker Desktop.

### First steps
1. Clone the repository.
```
git clone https://github.com/Apadrinha-Brasil/apadrinha-brasil.git
```
2. Navigate to the project directory.
```
cd apadrinha-brasil
```
3. Install dependencies.
```
yarn
```

### Configuration
1. Create a configuration `.env` file and set the required environment variables. You will need it to connect Prisma to the database.
```
DATABASE_URL=postgresql://admin:1234@localhost:5432/ab_dev
```
Note `admin` and `1234` in the database url. If you'd like to use PgAdmin or any other database management software to more easily manage the database, you will need these credentials to connect it to the database.

2. Create a `.env.local` file and add the content below. This file contains the JWT secret used to encode and decode the user's password digest. It also contains the salt which is used as an increment data to the JWT payload.
```
JWT_SECRET=m53WWgzip74cX63avQS0hr5DMTVPALO6MVxpjueYe0eO3CLThpAbiurRk3hgaT
HASH_SALT=E9iak6f7L2a9EqLGYJHhR04M8gTFUtvrDu33D3XEWIQFrEHNGKssjVFMXPkRz6
```

### Setup PostgreSQL database
Build the Postgres containerized database.
1. If the docker container doesn't exist (i.e. you've never successfully ran the below script), run the following command to build it.
```
yarn build:db
```
If the script above went well, the 2 following scripts can be skipped for the first time setup.

To start an existing postgres container.
```
yarn start:db
```
To shut down the container.
```
yarn stop:db
```
You can confirm that the container `postgresql` is running by checking Docker Desktop or running `docker ps` on your terminal. It will show all the running containers. You can also start and stop the container directly from Docker Desktop.

2. Once your local database is up and running you will need to apply all migration history to it.
```
yarn migrate:db
```

### Run the application
1. To start the development server run this command.
```
yarn dev
```
2. If you'd rather use Prisma built-in database manager instead of installing other software, you can do so.
```
yarn studio:db
```

### ES Lint and Prettier
It is recommended to install the ES Lint extension (by Microsoft) for VS Code as it highlights lint errors and warnings. It will also enable `.vscode/settings.json` to enforce lint fixes when files are saved. 
> **Note**: All the rules added was an initial set of rules to start off, but it's open for discussion what rules could be added and removed.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
