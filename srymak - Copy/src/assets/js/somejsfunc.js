
export class MyClass {

  constructor() { }
  send_mail() {
  Email.send({
    Host: "smtp-relay.gmail.com",
    Port:587,
    Username: "atuldagur2009@gmail.com",
    Password: "q,w.e/1Q",
    To: 'kyamsd1@gmail.com',
    From: "atuldagur2009@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
    UseDefaultCredentials :false
  }).then(
    message => alert(message)
  );
}
}
