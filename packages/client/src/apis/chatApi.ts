import fetcher from "./fetcher";

export function fetchChatMessageList(roomId: string) {
  return fetcher(`/chat/${roomId}`);
}

export function sendChatMessage(roomId: string, content: string) {
  return fetcher(`/chat/${roomId}`, { content });
}
