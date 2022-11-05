import algolia from "@/utils/search/client";
import client from "@/utils/query/client";
import { gql } from "@apollo/client";
const AllQueires = gql`
  query HomeQuery {
    posts {
      slug

      title
    }
    snippets {
      slug
      title
    }
  }
`;

export default async function handler(req, res) {
  const {
    data: { posts, snippets },
  } = await client.query({
    query: AllQueires,
  });
  function removeDuplicate(index, data) {
    index.browseObjects({
      batch: async (damn) => {
        damn.forEach((itm) => {
          data = data.filter((item) => {
            return item.slug !== itm.slug;
          });
        });
        await index.saveObjects(data, {
          autoGenerateObjectIDIfNotExist: true,
        });
      },
    });
  }
  const blogIndex = algolia.initIndex("blogs");
  const snippetIndex = algolia.initIndex("snippets");
  removeDuplicate(blogIndex, posts);
  removeDuplicate(snippetIndex, snippets);

  res.status(404).json({
    status: "Success",
    snippets,
  });
}
