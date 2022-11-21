import MainContainer from "@/layouts/container";
import Banner from "@/components/blog/meta";
import { gql } from "@apollo/client";
import Meta from "@/components/common/meta";
import client from "@/utils/query/client";
import BlogContent from "@/components/blog/markdown";
const BlogDetail = ({ data }) => {
  const meta = {
    title: data.title,
    description: data.description,
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/blog/${data.slug}`,
    image: data.coverImage.url,
    tags: data.categories.map((item) => item.name),
  };
  return (
    <MainContainer>
      <Meta meta={meta} />
      <Banner data={data} />
      <BlogContent data={data} />
    </MainContainer>
  );
};

export default BlogDetail;
const ALL_POSTS = gql`
  query ALL_POSTS {
    posts {
      id
      slug
    }
  }
`;
const POST_DETAIL_QUERY = gql`
  query SPECIFIC_QUERT($slug: String) {
    post(where: { slug: $slug }) {
      id
      title
      description
      content
      toc
      slug
      createdAt
      coverImage {
        url
      }
      categories {
        name
        id
      }
    }
  }
`;
export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: POST_DETAIL_QUERY,
    variables: {
      slug: params.slug,
    },
  });
  return {
    props: {
      data: data.post,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: ALL_POSTS,
  });

  let paths = data.posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
