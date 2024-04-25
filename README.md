# Zenith

Our communication API to send text messages and emails.

# How to run

Run the **Dockerfile**, the default server runs on port 3000.

Check the **example.env** for the variables you need.

# Compatibility

For sending text messages we recommend using a well known SMTP host because most carriers will just reject the message if they don't recognize you.

Any SMTP host can be used as long as it fits within the constraining variables.

# Countries and carriers

For right now only the US is supported, and only a few carriers inside the US too.

To see which ones are available check **/lib/carriers.js**

Feel free to create an issue with more carriers and countries if needed or wanted.

# Routes

```
[POST] http://[your-server-ip]:3000/action/text

country: "us",
carrier: "att",
number: "YOUR-PHONE-NUMBER",
text: "Testing message 123",
```

```
[POST] http://[your-server-ip]:3000/action/email

email: "YOUR-EMAIL",
subject: "Another testing message",
html: "<p>Testing message again lol</p>",
```

# Contributing

Just make a PR or fork and we will look at it.

Try to keep the code quality consistent with the formatting.
