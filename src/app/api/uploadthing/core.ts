
import getCurrentUser from "@/actions/get-current-user";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
const f = createUploadthing();

const handleAuth = async() => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return {error: new UploadThingError("Unauthorized")}
	}
	return { currentUser };
};

export const ourFileRouter = {
		projectImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
		.middleware(() => handleAuth())
		.onUploadComplete(() => {}),
	videoFile: f({ video: { maxFileCount: 1, maxFileSize: "16MB"} })
		.middleware(() => handleAuth())
		.onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;