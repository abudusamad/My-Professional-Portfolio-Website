import { db } from "@/lib/db";
import getCurrentUser from "./get-current-user";


export const getNotification = async () => {
    try {
        
        const currentUser = await getCurrentUser();
        if(!currentUser) {
            return [];
        }

        const notifications = await db.notification.findMany({
            where: {
                userId: currentUser.id,
                isRead: false
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        return notifications;

        
    }catch(error) {
        console.log("[GET_NOTIFICATIONS]", error);
        return [];
    }
}