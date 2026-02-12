import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

function getDbPath(): string {
  const envPath = process.env.DATABASE_PATH;
  if (envPath) return envPath;
  const dir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return path.join(dir, "leads.db");
}

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (!db) {
    const dbPath = getDbPath();
    db = new Database(dbPath);
    db.exec(`
      CREATE TABLE IF NOT EXISTS leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      )
    `);
  }
  return db;
}

export interface Lead {
  id: number;
  email: string;
  created_at: string;
}

export function addLead(email: string): Lead {
  const database = getDb();
  const stmt = database.prepare(
    "INSERT INTO leads (email) VALUES (?) RETURNING id, email, created_at"
  );
  const row = stmt.get(email.trim().toLowerCase()) as Lead;
  return row;
}

export function getLeads(): Lead[] {
  const database = getDb();
  const stmt = database.prepare(
    "SELECT id, email, created_at FROM leads ORDER BY created_at DESC"
  );
  return stmt.all() as Lead[];
}
