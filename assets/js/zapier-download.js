// Zapier Download Event Tracking
const ZAPIER_WEBHOOK = 'https://hooks.zapier.com/hooks/catch/26145744/u77lnd3/';

const downloadLinks = {
  'meditation-cheatsheet': 'Meditation Cheatsheet',
  'space-guide': 'Creating My Meditation Space',
  'mistakes-checklist': 'Meditation Mistakes Checklist'
};

document.addEventListener('DOMContentLoaded', function() {
  Object.keys(downloadLinks).forEach(elementId => {
    const link = document.getElementById(elementId);
    if (link) {
      link.addEventListener('click', function(e) {
        const email = prompt('Enter your email to download:');
        if (email) {
          fetch(ZAPIER_WEBHOOK, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              email: email,
              first_name: email.split('@')[0],
              resource: downloadLinks[elementId]
            })
          });
        }
      });
    }
  });
});
