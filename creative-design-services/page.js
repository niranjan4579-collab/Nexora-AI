const whatsappMessage = 'Hi Nexora AI, I’m interested in your creative design services starting at ₹10 per design. Please share the details.';
const whatsappUrl = 'https://wa.me/918527856091?text=' + encodeURIComponent(whatsappMessage);
document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = whatsappUrl; });
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('design').value = link.dataset.service;
  });
});
document.getElementById('design-form').addEventListener('submit', function(event) {
  event.preventDefault();
  if (!this.reportValidity()) return;
  const data = new FormData(this);
  const body = 'Hi Nexora AI, I’m interested in your creative design services starting at ₹10 per design. Please share the details.\n\n' +
    [['Name', 'name'], ['Business name', 'business'], ['Required design', 'design'], ['Preferred platform', 'platform'], ['Quantity', 'quantity'], ['Project details', 'details']]
      .map(([label, key]) => label + ': ' + data.get(key)).join('\n');
  window.location.href = 'mailto:sm@ffdwarka.online?subject=' + encodeURIComponent('Nexora AI — Creative design enquiry') + '&body=' + encodeURIComponent(body);
  document.getElementById('form-status').textContent = 'Your email draft is ready to open in your email app. Send it there to place your enquiry. If it does not open, use the email or WhatsApp links.';
});
