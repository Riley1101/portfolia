import MainContainer from "@/layouts/container";
import Banner from "@/components/blog/meta";
import { gql } from "@apollo/client";
import client from "@/utils/query/client";
import BlogContent from "@/components/blog/markdown";
import Meta from "@/components/common/meta";
const BlogDetail = ({ data }) => {
  let defaultMeta = {
    title: data.title,
    description: data.description,
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/snippet/${data.slug}`,
    image: "/static/general/snippet.jpg",
  };
  return (
    <MainContainer>
      <Meta meta={defaultMeta} />
      <Banner data={data} />
      <BlogContent data={data} />
    </MainContainer>
  );
};

export default BlogDetail;
const ALL_QUERIES = gql`
  query ALL_QUERIES {
    snippets {
      id
      slug
      title
    }
  }
`;
const SNIPPET_DETAIL = gql`
  query SNIPPET_SPECIFIC($slug: String) {
    snippet(where: { slug: $slug }) {
      id
      title
      description
      content
      slug
      publishedAt
      categories {
        name
        id
      }
    }
  }
`;
export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: SNIPPET_DETAIL,
    variables: {
      slug: params.slug,
    },
  });

  return {
    props: {
      data: data.snippet,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: ALL_QUERIES,
  });
  let paths = data.snippets.map((snp) => {
    return {
      params: {
        slug: snp.slug,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
