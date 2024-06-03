const Mailjet = require("node-mailjet");

const sendEmail = (fullname, message) => {
  Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE,
    {
      config: {},
      options: {},
    }
  );
  //send email with feedback in content
  const request = mailJet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "CFSystem@noreply.com",
          Name: "Admin",
        },
        To: [
          {
            Email: "Emmanuelmuya@gmail.com",
            Name: "Emmanuel Nsanga",
          },
        ],
        Subject: "New Feedback Submitted",
        TextPart: `Dear Emmamnuel ,<br/> a new feedback has been submitted by ${fullname} on the system! 
        Their feedback was : ${message} `,
        HTMLPart:
          '<h3>welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
      },
    ],
  });

  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
};
module.exports = {
  sendEmail,
};
