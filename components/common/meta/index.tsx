const Meta = ({ meta }: any) => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_BETA_DOMAIN}/api/og?title=${
          meta.title
        }&description=${meta.description}&tags=${meta.tags.join(",")}`}
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={meta.url} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta
        property="twitter:image"
        content={`${process.env.NEXT_PUBLIC_BETA_DOMAIN}/api/og?title=${
          meta.title
        }&description=${meta.description}&tags=${meta.tags.join(",")}`}
      ></meta>
    </>
  );
};

export default Meta;
