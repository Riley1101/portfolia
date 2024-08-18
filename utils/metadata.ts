export const metaData = {
  title: "Arkar Myat",
  siteName: "Arkar Myat",
  description:
    "An inspiring software engineer who loves coding, problem-solving and design",
  url: new URL("https://arkar.space"),
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "ArkarDev",
    "Arkar Myat",
    "Arkar",
    "Arkar Kaung Myat",
  ],
};

export const getOpenGraph = (
  image: string,
  title: string,
  description: string,
  url: URL,
  type = "website",
) => ({
  title: title,
  description: description,
  url: url,
  siteName: "ArkarDev",
  images: [
    {
      url: image,
      width: 1200,
      height: 630,
    },
  ],
  locale: "en-US",
  type: type,
});

export const getTwitterCard = (
  image: string,
  title: string,
  description: string,
) => ({
  card: "summary_large_image",
  title: title,
  description: description,
  siteId: "1127263021007396864",
  creator: "@arkardev",
  creatorId: "1127263021007396864",
  images: [image],
});
