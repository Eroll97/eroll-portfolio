// Cancellable page shortcuts only. Browser menus and OS capture remain outside
// the website's control; never treat this as protection for secrets or media.
export function isRestrictedShortcut(event) {
  const key = String(event.key || '').toLowerCase();
  if (key === 'f12') return true;
  if (event.ctrlKey && event.shiftKey && ['i', 'j', 'c'].includes(key)) return true;
  if (event.metaKey && event.altKey && ['i', 'j', 'c', 'u'].includes(key)) return true;
  if ((event.ctrlKey || event.metaKey) && ['u', 's'].includes(key)) return true;
  return false;
}
