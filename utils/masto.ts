import Mastodon from "mastodon-api";
const accountId = process.env.NEXT_PUBLIC_MASTO_ACCOUNT_ID as string;

interface MastodonAccount {
  username: string;
  url: string;
  avator: string;
  emojis: string[];
  display_name: string;
}

export interface MastodonMedia {
  preview_url: string;
  url: string;
  id: string;
}

export interface MastodonPost {
  id: string;
  created_at: string;
  url: string;
  content: string;
  account: MastodonAccount;
  media_attachments: MastodonMedia[];
}

async function getPosts(): Promise<MastodonPost[]> {
  const M = new Mastodon({
    access_token: process.env.NEXT_PUBLIC_MASTO_ACCESS_TOKEN as string,
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    api_url: "https://burma.social/api/v1", // optional, defaults to https://mastodon.social/api/v1/
  });
  return M.get(`/accounts/${accountId}/statuses?limit=5`, {}).then(
    (res: any) => {
      console.log(res.data);
      return res.data;
    }
  );
}
export { getPosts };
