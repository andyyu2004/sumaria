export type Conversation = {
    name: string;
    members: string[];
    _id: string;
};


export type Message = {
    userid: string,
    username: string,
    conversationId: string,
    createdAt: string,
    message: string,
    updatedAt: string,
    _id: string,
};

