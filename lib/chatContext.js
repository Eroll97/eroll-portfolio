// Shared limits keep a longer conversation within the server's request budget.
export const CHAT_MAX_MESSAGES = 40;
export const CHAT_MAX_CHARS = 60000;
export const CHAT_MAX_BYTES = CHAT_MAX_CHARS * 3;

export function prepareChatHistory(messages) {
  const conversation = messages.filter(message => !message.intro).map(message => ({
    role: message.role,
    content: message.text ?? message.content,
  }));
  // Keep the opening brief as well as recent decisions and corrections.
  const selected = conversation.length <= 36
    ? conversation : [...conversation.slice(0, 6), ...conversation.slice(-30)];
  while (JSON.stringify({ messages: selected }).length > CHAT_MAX_CHARS && selected.length > 1) {
    selected.splice(selected.length > 7 ? 6 : 0, 1);
  }
  return selected;
}
