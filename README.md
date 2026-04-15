# Sun Design System

A modern React component library built with TypeScript, Tailwind CSS, and Radix UI primitives.

## 🚀 Getting Started

### For Development

### Prerequisites

This library requires **Tailwind CSS v4** in your project.

### From GitHub Packages (Private)

1. **Install Tailwind CSS v4** (if not already installed):
   ```bash
   npm install tailwindcss@next @tailwindcss/vite
   ```

2. **Configure Tailwind** in your `vite.config.ts`:
   ```ts
   import tailwindcss from '@tailwindcss/vite';

   export default defineConfig({
     plugins: [tailwindcss()],
   });
   ```

3. **Create a Personal Access Token (PAT)** on GitHub:
   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Select scopes: `read:packages`
   - Copy the token

4. **Configure SSO for your token** (Important for Sun Asterisk):
   - After creating the token, you'll see "Configure SSO" button next to it
   - Click "Configure SSO" → "Authorize" for `sun-asterisk-internal` organization
   - This step is **required** to access packages from the organization

5. **Configure npm to use GitHub Packages**:
   ```bash
   # Create or edit ~/.npmrc file
   echo "@sun-asterisk-internal:registry=https://npm.pkg.github.com" >> ~/.npmrc
   echo "//npm.pkg.github.com/:_authToken=YOUR_GH_PACKAGES_TOKEN" >> ~/.npmrc
   ```

6. **Install the package**:
   ```bash
   npm install @sun-asterisk-internal/sun-design-system
   # or
   yarn add @sun-asterisk-internal/sun-design-system
   # or
   pnpm add @sun-asterisk-internal/sun-design-system
   ```

### For Library Usage

```bash
npm install sun-design-system
# or
yarn add sun-design-system
# or
pnpm add sun-design-system
```

## 📚 Documentation

Visit our [Storybook documentation](http://localhost:6006) to explore all components with live examples and API documentation.

## 💡 Usage

### React (Vite/CRA)

```tsx
import { Button, Tooltip, TooltipTrigger, TooltipContent, Input } from '@sun-asterisk-internal/sun-design-system';

function App() {
  return (
    <div>
      <Button variant="primary" size="medium">
        Click me
      </Button>

      <Tooltip>
        <TooltipTrigger>
          <Button variant="secondary">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>This is a tooltip</TooltipContent>
      </Tooltip>

      <Input placeholder="Enter text" />
    </div>
  );
}
```

> **Note:** CSS is automatically imported when you use any component. No manual CSS import needed!

### Next.js

#### 1. Install Dependencies

```bash
npm install @sun-asterisk-internal/sun-design-system
```

#### 2. Use Components Directly

CSS is automatically imported - no manual setup needed!

**Client Components** (with interactivity):

```tsx
// app/components/MyButton.tsx
'use client'

import { Button } from '@sun-asterisk-internal/sun-design-system'

export default function MyButton() {
  return (
    <Button
      variant="primary"
      onClick={() => alert('Clicked!')}
    >
      Click me
    </Button>
  )
}
```

**Server Components** (static rendering):

```tsx
// app/page.tsx
import { Badge, Divider } from '@sun-asterisk-internal/sun-design-system'

export default function Page() {
  return (
    <div>
      <h1>Welcome</h1>
      <Badge>New</Badge>
      <Divider />
    </div>
  )
}
```

#### 3. Optional: Import Design Tokens

If you want to use design tokens (CSS variables) in your custom styles:

```tsx
// app/layout.tsx
import '@sun-asterisk-internal/sun-design-system/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

#### 4. Important Notes for Next.js

- **Interactive components** (Button, Modal, Tooltip, etc.) must be used in Client Components (`'use client'`)
- **Static components** (Badge, Divider, Typography, etc.) can be used in both Server and Client Components
- Tailwind CSS v4 is required - make sure you're using `@next` version
- The library works with both App Router and Pages Router

#### Example with Forms

```tsx
'use client'

import { Input, Button, TextField } from '@sun-asterisk-internal/sun-design-system'
import { useState } from 'react'

export default function ContactForm() {
  const [email, setEmail] = useState('')

  return (
    <form className="space-y-4">
      <TextField
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  )
}
```

## Components

- **Button** - Flexible button with multiple variants (primary, secondary, emphasis, plain, danger)
- **Input** - Form input with adornments support
- **TextField** - Complete text field with label and error handling
- **Textarea** - Multi-line text input
- **TextareaField** - Complete textarea with label and error handling
- **RadioGroup** - Radio button group component
- **Badge** - Small count or status badge
- **Divider** - Visual separator
- **Switch** - Toggle switch component
- **Tooltip** - Contextual information popup
- **Tab** - Tab navigation component
- **Snackbar** - Toast notification component
- **Modal** - Modal dialog component

## 🔧 TypeScript Support

This library is written in TypeScript and provides complete type definitions.

```tsx
import type { ButtonProps, TooltipProps } from '@sun-asterisk-internal/sun-design-system';
```

## 🎨 Styling

**CSS is automatically imported** when you use any component from the library. No manual CSS import needed!

### Using Design Tokens (Optional)

If you want to use the library's design tokens (CSS variables) in your custom styles:

```tsx
// In your root component or layout
import '@sun-asterisk-internal/sun-design-system/global.css';
```

This gives you access to CSS variables like:
```css
/* Example usage in your custom CSS */
.my-custom-class {
  color: var(--color-neutral-800);
  padding: var(--spacing);
  border-radius: var(--radius-m);
}
```

## Requirements

- React 18+ or React 19+
- **Tailwind CSS v4+** (required)
- TypeScript 5+ (recommended)

## License

MIT

---

# Development

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

## 🎓 Publishing to GitHub Packages

### Setup (One-time)

1. **Create GitHub Personal Access Token**:
   - Go to: https://github.com/settings/tokens
   - Generate new token (classic)
   - Select scope: `write:packages`, `read:packages`, `delete:packages`
   - Save the token securely

2. **Login to GitHub Packages**:
   ```bash
   npm login --scope=@sun-asterisk-internal --registry=https://npm.pkg.github.com
   # Username: your-github-username
   # Password: your-personal-access-token (not your GitHub password!)
   # Email: your-email@example.com
   ```

### Publishing

```bash
# Build the package
npm run build

# Bump version
npm version patch  # 1.0.0 -> 1.0.1
# or
npm version minor  # 1.0.0 -> 1.1.0
# or
npm version major  # 1.0.0 -> 2.0.0

# Publish to GitHub Packages
npm publish

# Or create a GitHub Release to auto-publish (via GitHub Actions)
```

### Sharing with Team Members

1. **Invite users to your GitHub repository** (Settings → Collaborators)
2. **They need to**:
   - Create their own Personal Access Token with `read:packages` scope
   - Configure their `.npmrc` file (see Installation section above)
   - Install the package: `npm install @sun-asterisk-internal/sun-design-system`

---

## 🎓 Next Steps

1. **Local Testing**

```bash
# In library directory
npm link

# In test project
npm link @sun-asterisk-internal/sun-design-system
```

2. **GitHub Packages** (Current setup)
```bash
npm publish
```

3. **Alternative: Git Dependencies** (Simplest for private use)
```bash
# Users can install directly from GitHub
npm install github:sun-asterisk-internal/sun-design-system
```
