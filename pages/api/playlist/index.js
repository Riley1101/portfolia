// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let { query } = req;
  let response;
  let key = process.env.NEXT_PUBLIC_YOUTUBE;
  if (query.id) {
    response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&part=id&key=${key}&id=${query.id}`,
      {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_YOUTUBE}`,
      }
    )
      .then((res) => res.json())
      .then((res) => res);
  } else {
    let limit = query.limit || 2;
    response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&part=id&channelId=UC_RfEQCC3gL2AzsFFAABikg&maxResults=${limit}&key=${key}`,
      {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_YOUTUBE}`,
      }
    )
      .then((res) => res.json())
      .then((res) => res);
  }
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({
      message: "Error with api credentials",
    });
  }
}
// curl \
//   'https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails&part=player&part=status&part=player&part=id&part=snippet&id=PLJznl3g92X7PHrcXpGHt3syk3AguFswZ6&id=PLJznl3g92X7PHrcXpGHt3syk3AguFswZ6&maxResults=20&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed
