
import { getUserId } from "../../lib/actions";

import apiServices from "@/app/services/apiService";
import ConversationDetail from "@/app/components/Inbox/ConversationDetail";
import { UserType } from "../page";
import { getAccessToken } from "../../lib/actions";

export type MessageType = {
    id:string;
    name:string;
    body:string;
    conversationId:string;
    sent_to: UserType;
    created_by: UserType
}

const ConversationPage = async({params, }: { params: Promise<{id: string }>}) => {
    const userId = await getUserId();
    const token = await getAccessToken();
    const { id } = await params;

    if(!userId || !token){
        return (
            <main className="max-w-[1500px] mx-auto px-6 pb-6">
                <p>You need to be authenticated...</p>
            </main>
        )
    }

    const conversation = await apiServices.get(`/api/chat/${id}`)

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <ConversationDetail
                token = {token}
                conversation={conversation.conversation}
                messages={conversation.message}
                userId = {userId}/>
        </main>
    )
}


export default ConversationPage;