import sanityClient from "@/utils/client";
import { queryDb } from "@/utils/newsletter";
import formData from "form-data";
import Mailgun from "mailgun.js";
import { NextApiRequest, NextApiResponse } from "next";

const mail_handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const mailgun_header = req.headers["x-mailgun-signature"];
  const MAILGUN_SECRET = process.env.NEXT_PUBLIC_MAILGUN_SECRET as string;
  if (mailgun_header !== MAILGUN_SECRET) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    const API_KEY = process.env.NEXT_PUBLIC_MAILGUN_API_KEY as string;
    const EMAIL_TEMPLATE = process.env
      .NEXT_PUBLIC_MAILGUN_EMAIL_TEMPLATE as string;
    const DOMAIN = "arkar.space";
    const { slug: url } = req.query;
    const query = `*[_type == "article" && slug.current == $slug][0]{title,description,"slug":slug.current,"image":mainImage.asset->url} `;
    const { title, description, slug, image } = await sanityClient.fetch(
      query,
      {
        slug: url,
      }
    );

    const mailgun = new Mailgun(formData);
    const client = mailgun.client({ username: "arkar.space", key: API_KEY });
    const users = await queryDb("SELECT * FROM mailing_list");
    if (users) {
      const rows = users?.rows;
      const emails = rows?.map((row) => row.email);
      let recipent_vars = rows?.map((row) => {
        return {
          [row.email]: {
            name: row.name,
          },
        };
      });
      const object = recipent_vars.reduce(
        (acc, obj) => ({ ...acc, ...obj }),
        {}
      );
      const data = {
        from: "ArkarDev <me@arkar.space>",
        to: emails,
        subject: `${title}`,
        template: EMAIL_TEMPLATE,
        "h:X-Mailgun-Variables": JSON.stringify({
          title,
          description,
          topic: title,
          link: `https://arkar.space/articles/${slug}`,
          image: image,
        }),
        "recipient-variables": JSON.stringify(object),
      };

      client.messages
        .create(DOMAIN, data)
        .then((re) => {
          res.status(200).json({ re });
        })
        .catch((err) => {
          res.status(200).json({ err });
        });
    }
  }
};

export default mail_handler;
