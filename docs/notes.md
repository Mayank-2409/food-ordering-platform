# Notes

General thoughts, ideas, and reminders.

---

- Focus on clarity over cleverness
- Keep frontend domain-driven
- Avoid premature optimization
- Write code that future-me can understand
- Document decisions as they happen

# Why do we use: src/app/login/page.tsx instead of something like: src/app/login/login.tsx

# In Next.js App Router, routing is folder-based, not file-based.

Folders define routes.
page.tsx defines what renders at that route.

The folder name becomes part of the URL.

# A file like: src/app/login/login.tsx will NOT create a route

Because only specific filenames are treated as route files in the App Router like:

page.tsx → route entry point

layout.tsx → layout wrapper

loading.tsx → loading UI

error.tsx → error boundary

not-found.tsx → 404 handling

route.ts → API endpoints

Any other file (e.g. login.tsx) is treated as a normal component, not a route.

# Folder-based routing enables powerful layout composition and scalability.

Example:

src/app/
|--- layout.tsx        // Global layout
|--- page.tsx          // /
|--- login/
|   |--- page.tsx      // /login
|--- dashboard/
|   |--- layout.tsx    // Dashboard-only layout
|   |--- page.tsx      // /dashboard

# Benefits:

Each route can have its own layout

Shared UI (header/footer) remains global

Pages stay isolated and maintainable

Auth-protected sections are easier to manage