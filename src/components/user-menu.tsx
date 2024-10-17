"use client";

import { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { AvatarImg } from "./avatarImage";
import { useSession } from "next-auth/react";
import { getNotification } from "@/actions/get-notification"; // Ensure the correct import path
import { Notification } from "@prisma/client";

export const UserMenu = () => {
  const { data: session } = useSession();
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const notifications = await getNotification();
        setNotifications(notifications);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    };

    if (session) {
      fetchNotifications();
    }
  }, [session]);

  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger asChild>
          <div className="cursor-pointer flex items-center gap-3">
            <AvatarImg src={session?.user?.image} />
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Notifications</h3>
            {notifications.length === 0 ? (
              <p className="text-sm text-gray-500">No new notifications</p>
            ) : (
              <ul className="mt-2 space-y-2">
                {notifications.map((notification) => (
                  <li key={notification.id} className="text-sm text-gray-700">
                    {notification.message}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
