import algoliasearch from "algoliasearch";
// API keys below contain actual values tied to your Algolia account
const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || ""
);

export default client;
