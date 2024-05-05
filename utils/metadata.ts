
export const metaData = {
  title: "Arkar",
  siteName: "Arkar",
  description:
    "An inspiring engineer who loves coding, problem-solving and design",
  url: new URL("https://arkar.space"),
  keywords: ["Next.js", "React", "JavaScript", "ArkarDev", "Arkar Myat","Arkar", "Arkar Kaung Myat"],
};


export const getOpenGraph = (image: string,title: string,description:string,url:URL) => ({
  title: title,
  description:description,
  url: url,
  siteName: "ArkarDev",
  images: [
    {
      url: image,
      width: 800,
      height: 600,
    },
  ],
  locale: "en-US",
  type: "website",
});

export const getTwitterCard = (image: string,title:string,description:string) => ( {
    card: 'summary_large_image',
    title: title,
    description:description,
    siteId: '1127263021007396864',
    creator: '@arkardev',
    creatorId: '1127263021007396864',
    images: [image],
  })
