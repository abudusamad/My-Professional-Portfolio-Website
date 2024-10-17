"use client";

import { useEffect, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { AvatarImg } from "./avatarImage";
import { useSession } from "next-auth/react";
import { getNotification } from "@/actions/get-notification"; // Ensure the correct import path
import { Notification } from "@prisma/client";
import { getNotificationRead } from "@/actions/get-notification-read";

export const UserMenu = () => {
  const { data: session } = useSession();
  const [notifications, setNotifications] = useState<Notification[]>([]);

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

  const handleNotificationClick = async () => {
    try {
      await getNotificationRead();
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) => ({
          ...notification,
          isRead: true,
        }))
      );
    } catch (error) {
      console.error("Failed to mark notifications as read:", error);
    }
  };

  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger asChild>
          <div
            className="cursor-pointer flex items-center gap-3 relative"
            onClick={handleNotificationClick}
          >
            <AvatarImg src={session?.user?.image} />
            {notifications.some((notification) => !notification.isRead) && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {
                  notifications.filter((notification) => !notification.isRead)
                    .length
                }
              </span>
            )}
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

export default UserMenu;
