# ASV TOURS — Dev Server Run Doc

## Prerequisites

1. Install dependencies:
   ```
   npm install
   ```

2. Create `.env` file (copy from main checkout or create manually):
   ```
   PORT=3000
   JWT_SECRET=asvtours-secret-2026
   ```

3. Seed the database (first time only):
   ```
   node db/seed.js
   ```

## Start the Server

Run detached on Windows using PowerShell:
```
powershell -NoProfile -Command "(Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev' -RedirectStandardOutput 'C:\projects\travel_website\.freebuff\preview-5cb2d5df-d7a9-48db-8a29-708527d8a2a2.log' -RedirectStandardError 'C:\projects\travel_website\.freebuff\preview-5cb2d5df-d7a9-48db-8a29-708527d8a2a2.log.err' -WindowStyle Hidden -PassThru).Id"
```

Or simply:
```
npm run dev
```

The server starts Express on port 3000, serving:
- Public website at `/`
- Admin panel at `/admin`
- API at `/api/*`

## Default Admin Credentials

- Email: `admin@asvtours.com`
- Password: `admin123`
