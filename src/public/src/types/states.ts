import { Conversation } from "./Chat";
import { User } from "./User";

export type AppState = {
    user: User;
    conversations: Conversation[];
    socket?: SocketIOClient.Socket;
};