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
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      )
    `);
    // Add columns for DBs created before name/phone were added
    try {
      db.exec("ALTER TABLE leads ADD COLUMN name TEXT DEFAULT ''");
    } catch {
      /* column exists */
    }
    try {
      db.exec("ALTER TABLE leads ADD COLUMN phone TEXT DEFAULT ''");
    } catch {
      /* column exists */
    }
  }
  return db;
}

export interface Lead {
  id: number;
  name: string;
  phone: string;
  email: string;
  created_at: string;
}

export function addLead(data: { name: string; phone: string; email: string }): Lead {
  const database = getDb();
  const name = data.name.trim();
  const phone = data.phone.trim();
  const email = data.email.trim().toLowerCase();
  const stmt = database.prepare(
    "INSERT INTO leads (name, phone, email) VALUES (?, ?, ?) RETURNING id, name, phone, email, created_at"
  );
  const row = stmt.get(name, phone, email) as Lead;
  return row;
}

export function getLeads(): Lead[] {
  const database = getDb();
  const stmt = database.prepare(
    "SELECT id, COALESCE(name,'') as name, COALESCE(phone,'') as phone, email, created_at FROM leads ORDER BY created_at DESC"
  );
  return stmt.all() as Lead[];
}
