import { NextApiRequest, NextApiResponse } from "next";
import { queryDb } from "@/utils/newsletter";
import formData from "form-data";
import Mailgun from "mailgun.js";
const mail_handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const users = await queryDb("SELECT * FROM mailing_list");
  if (users) {
    const rows = users?.rows;
  }
  const API_KEY = process.env.NEXT_PUBLIC_MAILGUN_API_KEY as string;
  const DOMAIN = "arkar.space";

  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "arkar.space", key: API_KEY });
  const title = "Quick Sort: A Divide-and-Conquer Sorting Algorithm";
  const description =
    "One more sorting algorithm that I love implementing is quick sorting. I feel clever while sorting that algorithm as well.";
  const data = {
    from: "ArkarDev <me@arkar.space>",
    to: "arkardev00@gmail.com",
    subject: `${title}`,
    template: "daily_article",
    "h:X-Mailgun-Variables": JSON.stringify({
      title,
      description,
      topic: "Algorithm",
    }),
  };

  client.messages
    .create(DOMAIN, data)
    .then((re) => {
      console.log(re);
      res.status(200).json({ re });
    })
    .catch((err) => {
      console.error(err);
      res.status(200).json({ err });
    });
};

export default mail_handler;
