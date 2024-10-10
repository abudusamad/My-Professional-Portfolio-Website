
import {  columns } from "./columns";
import { DataTable } from "./data-table";
import { db } from "@/lib/db";


const AdminPage = async () => {
    const projects = await db.project.findMany({
    orderBy: {
      title: "asc",
    },  
  });

  return (
    <div className="xl:pl-6 md:pl-10 sm:pl-2 pl-4 z-10 ">
      <DataTable columns={columns} data={projects} />
    </div>
  );
};

export default AdminPage;