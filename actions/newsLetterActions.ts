"use server";
import { redirect } from "next/navigation";
import { db, QueryResult, QueryResultRow } from "@vercel/postgres";

export interface User {
  email: string;
  name?: string;
  id: number;
}

export async function queryDb<T extends QueryResultRow>(
  query: string,
): Promise<QueryResult<T> | null> {
  const client = await db.connect();
  try {
    const response = await client.query(query);
    client.release();
    return response;
  } catch (e) {
    return null;
  }
}

export const unsubscribe = async (mail: string) => {
  "use server";
  const exists = await user_exists(mail);
  if (exists) {
    const res = await queryDb(
      `DELETE FROM mailing_list WHERE email = '${mail}'`,
    );
    console.log(res);
  }
};

export async function user_exists(email: string): Promise<boolean> {
  const result = await queryDb(
    `SELECT * FROM mailing_list WHERE email='${email}'`,
  );
  if (result && result.rowCount > 0) {
    return true;
  } else return false;
}

export async function add_user(
  email: string,
  name: string,
): Promise<User | null> {
  try {
    const result = await queryDb<User>(
      `INSERT INTO mailing_list (name, email) VALUES ('${name}', '${email}') RETURNING *`,
    );
    if (result && result.rowCount > 0) {
      return result.rows[0];
    }
    return null;
  } catch (e) {
    return null;
  }
}

export async function handleSubmit(formData: FormData) {
  const email = formData.get("email");
  const name = formData.get("name");
  if (email) {
    const exists = await user_exists(email as string);
    if (!exists) {
      const response = await add_user(email as string, name as string);
      if (response !== null) {
        redirect("/newsletter/thank-you");
      }
    } else {
      redirect("/newsletter/already-with-me");
    }
  }
}
