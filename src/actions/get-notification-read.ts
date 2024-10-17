import { db } from "@/lib/db";
import getCurrentUser from "./get-current-user";


export const getNotificationRead = async () => {
    try {
        
        const currentUser = await getCurrentUser();
        if(!currentUser) {
            return [];
        }

        const notifications = await db.notification.updateMany({
            where: {
                userId: currentUser.id,
                isRead: false
            },
            data: {
                isRead: true
            },
        });

        return notifications;

        
    }catch(error) {
        console.log("[GET_NOTIFICATIONS]", error);
        return [];
    }
}