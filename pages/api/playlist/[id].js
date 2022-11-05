export default async function handler(req, res) {
  try {
    let {
      query: { id },
    } = req;
    let key = process.env.NEXT_PUBLIC_YOUTUBE;
    let response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=id&part=snippet&playlistId=${id}&key=${key}`,
      {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_YOUTUBE}`,
      }
    )
      .then((res) => res.json())
      .then((res) => res);
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({
        message: "Error with api credentials",
      });
    }
  } catch {
    res.status(404).json({
      message: "Error with api credentials",
    });
  }
}
export const config = {
  runtime: "nodejs",
};
