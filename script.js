// Initialize flatpickr date range with Russian locale
document.addEventListener('DOMContentLoaded', () => {
  const locale = flatpickr.l10ns.ru || undefined;
  flatpickr('#date-range', {
    mode: 'range',
    minDate: 'today',
    dateFormat: 'd.m.Y',
    locale,
    conjunction: ' — ',
    disableMobile: true,
  });

  const form = document.getElementById('booking-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    // Placeholder: send to your endpoint or CRM here
    console.log('Booking request:', payload);

    // Friendly UX
    form.reset();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  });
});

