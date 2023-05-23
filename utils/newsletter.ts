"use server";
import { db, QueryResult, QueryResultRow } from "@vercel/postgres";

export interface User {
  email: string;
  name?: string;
  id: number;
}

export async function queryDb<T extends QueryResultRow>(
  query: string
): Promise<QueryResult<T> | null> {
  const client = await db.connect();
  try {
    const response = await client.query(query);
    client.release();
    return response;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function user_exists(email: string): Promise<boolean> {
  const result = await queryDb(
    `SELECT * FROM mailing_list WHERE email='${email}'`
  );
  if (result && result.rowCount > 0) {
    return true;
  } else return false;
}

export async function add_user(
  email: string,
  name: string
): Promise<User | null> {
  try {
    const result = await queryDb<User>(
      `INSERT INTO mailing_list (name, email) VALUES ('${name}', '${email}') RETURNING *`
    );
    if (result && result.rowCount > 0) {
      return result.rows[0];
    }
    return null;
  } catch (e) {
    return null;
  }
}
