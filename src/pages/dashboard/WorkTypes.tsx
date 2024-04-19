import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { CellAction } from "@/components/ui/cell-action";
import { CreateModal } from "@/components/modals/create-modal";

import { useFetch } from "@/hooks/use-fetch";

export default function WorkTypes() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data } = useFetch({ endpoint: "work_types/index" });

  const formattedData = data.map(
    (item: { id: number | string; name: string; icon_url: string }) => ({
      id: item.id,
      name: item.name,
      icon: item.icon_url,
    })
  );

  return (
    <div className="flex-1 space-y-5">
      <CreateModal
        endpoint="work_types"
        messageError="Failed added work types!"
        messageSuccess="Work Types added"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <Heading title="Work Types" description="Welcome in work types page.">
        <Button onClick={() => setIsOpen(true)} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add New
        </Button>
      </Heading>

      <Separator />

      <DataTable searchKey="name" columns={columns} data={formattedData} />
    </div>
  );
}

interface WorkTypesColumn {
  id: number | string;
  name: string;
  icon: string;
}

const columns: ColumnDef<WorkTypesColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "icon",
    header: "Icon",
    cell: ({ row }) => (
      <div className="w-10">
        <img
          src={row.original.icon}
          alt="Icon"
          className="object-contain"
          style={{ width: "100%", height: "auto" }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onError={(e: any | unknown) => {
            e.target.src = "./logo-icon.svg";
          }}
        />
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <CellAction initialData={row.original} endpoint="work_types" />
    ),
  },
];
