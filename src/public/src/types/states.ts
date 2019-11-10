import { Conversation } from "./Chat";
import { User } from "./User";
import { TNotification } from "./notifications";

export type AppState = {
    user: User;
    conversations: Conversation[];
    notifications: TNotification[];
    socket?: SocketIOClient.Socket;
};