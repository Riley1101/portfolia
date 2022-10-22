import algoliasearch from "algoliasearch";
// API keys below contain actual values tied to your Algolia account
const client = algoliasearch("9AFR596DHV", process.env.NEXT_PUBLIC_ALGOLIA);

export default client;
