// Shared with the contact page so both inquiry channels reach the same inbox.
export const CONTACT_FORM_ENDPOINT = 'https://formspree.io/f/xzedjryr';
export const CONTACT_EMAIL = 'erolloliver97@gmail.com';
export const BOOKING_URL = 'https://calendly.com/erolloliver97/discuss-your-project-30-minute-consultation';
export const INQUIRY_SERVICES = [
  'Website development', 'WordPress', 'GoHighLevel / CRM', 'Sales funnel',
  'Shopify store', 'AI agents / automation', 'Lead generation', 'Other / support',
];

export function inferService(text = '') {
  if (/shopify|e-?commerce|online store/i.test(text)) return 'Shopify store';
  if (/wordpress|elementor/i.test(text)) return 'WordPress';
  if (/gohighlevel|go highlevel|\bghl\b|\bcrm\b/i.test(text)) return 'GoHighLevel / CRM';
  if (/funnel/i.test(text)) return 'Sales funnel';
  if (/automat|\bai\b|chatbot|voice agent/i.test(text)) return 'AI agents / automation';
  if (/lead generation/i.test(text)) return 'Lead generation';
  if (/website|landing page|web design/i.test(text)) return 'Website development';
  return 'Other / support';
}
