# Backlog React TypeScript App

This project is a simple issue tracker application built using **React**, **TypeScript**, and **Vite**. It allows users to manage issues by creating, viewing, editing, and deleting them. The application uses **Material-UI** for styling and components, and **Day.js** for date handling.

## Pre Install

To make this to work you must first download or clone [simple-tracking-api](https://github.com/patrik1970/slim-tracking-api) and run it localy.

## Features

- **Issue Table**: Displays a list of issues with details such as title, description, priority, type, and dates.
- **Add Issue**: Create a new issue with customizable fields.
- **Edit Issue**: Modify existing issues.
- **Delete Issue**: Remove issues from the list.
- **Routing**: Uses React Router for navigation between pages.
- **Responsive Design**: Styled with Material-UI for a modern and responsive user interface.

## Project Structure

```
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   └── Header.tsx
│   ├── pages/
│   │   ├── Add-issue-card.tsx
│   │   ├── Issue-card.tsx
│   │   └── Issue-table.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── App.css
│   ├── index.css
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Key Files

- **`src/pages/Issue-table.tsx`**: Displays the list of issues in a table format.
- **`src/pages/Add-issue-card.tsx`**: Form to add a new issue.
- **`src/pages/Issue-card.tsx`**: Form to edit or delete an existing issue.
- **`src/components/Header.tsx`**: Header component with navigation links.
- **`src/App.tsx`**: Main application component with routing.
- **`vite.config.ts`**: Vite configuration file.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backlog-react-typescript-app-remake
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser at [http://localhost:5173](http://localhost:5173).

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build.
- **`npm run lint`**: Runs ESLint to check for code quality issues.

## Dependencies

- **React**: Frontend library for building user interfaces.
- **React Router**: For routing and navigation.
- **Material-UI**: For UI components and styling.
- **Day.js**: For date manipulation.
- **Vite**: Build tool for fast development.

## Development

### ESLint Configuration

The project uses ESLint for linting with the following plugins:

- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`

### TypeScript Configuration

The project uses two TypeScript configurations:

- **`tsconfig.app.json`**: For the application code.
- **`tsconfig.node.json`**: For Node.js-specific configurations.

## API Integration

The application interacts with a backend API hosted at `https://localhost:7121/api/Issue`. Ensure the backend is running and accessible for the app to function correctly.

## Future Improvements

- Add authentication for secure access.
- Implement pagination for the issue table.
- Enhance error handling and user feedback.
- Add unit tests for components and API calls.

## License

This project is licensed under the MIT License.