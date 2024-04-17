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

export default function Technologies() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data } = useFetch({ endpoint: "technology/index" });

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
        endpoint="technology"
        messageError="Failed added technology!"
        messageSuccess="Technology added"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <Heading title="Technologies" description="Welcome in technologies page.">
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

interface TechnologyColumn {
  id: number | string;
  name: string;
  icon: string;
}

const columns: ColumnDef<TechnologyColumn>[] = [
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
      <CellAction initialData={row.original} endpoint="technology" />
    ),
  },
];
