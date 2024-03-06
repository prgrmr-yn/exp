const webhookUrl = 'https://discord.com/api/webhooks/1214867648391938088/DUcc0Jm5CzKnOBuIB5Ytiql8qpRXQZ4jTE7YCKM50DZzQysAMZltzp6rYZmoiUgeMInr';

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
