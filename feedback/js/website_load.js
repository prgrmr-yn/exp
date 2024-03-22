const webhookUrl = 'https://discord.com/api/webhooks/1214867639466328074/ZrV9ob1z67RAOo7Cc94LyiN3EC6pZOmIRlJPBqJqYw7e_W1GXPJXD-rUt2M6wqH4OZ35';

function sendToDis(webhookUrl) {
  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "content": `Someone is on your website from ${navigator.appVersion.slice(5, 33)}
          `,
      })
    })
    console.log('sent');
  });
}

sendToDis(webhookUrl);
