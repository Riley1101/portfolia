import { NextSeo } from "next-seo";
interface MetaProps {
  title: string;
  description: string;
  url: string;
  mainImage?: string;
  tags?: string[];
  isBlogPost?: boolean;
}

const Meta = ({ meta }: { meta: MetaProps }) => {
  const blogMeta = () =>
    meta.isBlogPost && {
      authorName: "Arkar Kaung Myat",
      publisherName: "Arkar Kaung Myat",
      description: meta.description,
      isAccessibleForFree: true,
    };
  return (
    <>
      {/* meta viewport tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <NextSeo
        {...blogMeta()}
        useAppDir={true}
        title={meta.title}
        description={meta.description}
        openGraph={{
          title: meta.title,
          description: meta.description,
          url: meta.url,
          type: meta.isBlogPost ? "article" : "website",

          images: [
            {
              url: meta.mainImage as string,
              width: 850,
              height: 650,
              alt: meta.title,
            },
          ],
        }}
      />
    </>
  );
};

export default Meta;
