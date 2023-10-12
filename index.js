const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yashvivastarpara@gmail.com",
    pass: "wskynsoshfzwmagy",
  },
});
let Otp = Math.floor(Math.random() * 10000);

app.get("/:otp", (req, res) => {
  let { otp } = req.params;
  if (Otp == otp) {
    console.log("otp successfully");
    res.send("otp successfully");
  } else {
    console.log("otp failed");
    res.send("otp failed");
  }
});
app.post("/", (req, res) => {
  const mailOptions = {
    from: "yashvivastarpara@gmail.com",
    to: req.body.email,
    subject: req.body.subject,
    html: `<h1>${Otp}</h1>`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
  res.send("success in data");
});

app.listen(8090, () => {
  console.log("listining port 8090");
});
