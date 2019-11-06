import { User } from "./User";
import { Conversation } from "./Chat";

export type AppState = {
    user?: User;
    conversations: Conversation[];
    socket?: SocketIOClient.Socket;
};
