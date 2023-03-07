import React from "react";
import { ArticleJsonLd } from "next-seo";
import Script from 'next/script'
type Props = {
  useAppDir?: boolean;
  url: string;
  title: string;
  images: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  publisherName: string;
  publisherLogo: string;
  description: string;
};

const ArticleJson = ({ meta }: { meta: Props }) => {
  return (
    <Script id="article_id">
      <ArticleJsonLd
        useAppDir={true}
        url={meta.url}
        title={meta.title}
        images={[meta.images]}
        datePublished={meta.datePublished}
        dateModified={meta.dateModified}
        authorName={[
          {
            name: "Arkar Kaung Myat",
            url: 'https://arkar.space',
          },
        
        ]}
        publisherName="Arkar Kaung Myat"
        description={meta.description}
        isAccessibleForFree={true}
      />
    </Script>
  );
};

export default ArticleJson;
