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
      datePublished: "2015-02-05T08:00:00+08:00",
      dateModified: "2015-02-05T09:00:00+08:00",
      authorName: "Kali Skye",
      publisherName: "Kali Skye",
      publisherLogo: "https://www.example.com/photos/logo.jpg",
      description: "This is a mighty good description of this article.",
      isAccessibleForFree: true,
    };
  return (
    <>
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
