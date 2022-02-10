import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const contactMediums = [
      {
        medium: "github",
        username: "gnarayan1337",
        link: "https://github.com/gnarayan1337",
      },
      {
        medium: "email",
        username: "gnarayan1337@gmail.com",
        link: "mailto:gnarayan1337@gmail.com",
      },
      {
        medium: "instagram",
        username: "gnarayan1337",
        link: "https://www.instagram.com/gnarayan1337/",
      },
      {
        medium: "linkedin",
        username: "gnarayan1337",
        link: "https://www.linkedin.com/in/gnarayan1337/",
      },
    ];

    res.json(contactMediums);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
