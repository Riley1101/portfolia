/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

// eslint-disable-next-line @next/next/no-img-element

export default function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has("title");
    const hasDescription = searchParams.has("description");
    const hasTag = searchParams.has("tags");
    const tags = hasTag ? searchParams.get("tags").split(",") : ["Welcome"];
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Arkar — An Inspiring Developer, travelling in CS 🚀";
    const description = hasDescription
      ? searchParams.get("description")?.slice(0, 100)
      : "An inspiring developer who loves computer science, frontend technlogies, coding and designs.";

    return new ImageResponse(
      (
        <div
          style={{
            color: "#222",
            padding: "3em",
            display: "flex",
            paddingTop: "5em",
            background: "#EFF2F9",
            width: "1200px",
            flexDirection: "column",
            height: "630px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "2em",
            }}
          ></div>
          <img
            src="https://beta.arkar.space/static/general/avatar.png"
            alt="Profile"
            width={120}
            style={{
              marginBottom: "1em",
              objectFit: "cover",
            }}
            height={120}
          />
          <div style={{ display: "flex", marginBottom: ".5em" }}>
            {tags.map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: "#C6F6D5",
                  padding: "5px 16px",
                  fontWeight: "bold",
                  fontSize: 14,
                  borderRadius: "20px",
                  marginRight: 10,
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <h1
            style={{
              fontSize: 50,
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: 24,
              width: "70%",
              color: "#414752",
            }}
          >
            {description}
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
export const config = {
  runtime: "edge",
};
