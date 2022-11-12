import fetcher from "./fetcher";

interface MakeChatRoomRequest {
  opponentId: string;
}

export function fetchChatRoomList() {
  return fetcher("/room");
}

export function fetchChatRoomDetail(roomId: string) {
  return fetcher(`/room/${roomId}`);
}

export function makeChatRoom(body: MakeChatRoomRequest) {
  return fetcher(`/room`, body);
}
