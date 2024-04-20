import { useState } from "react";
import { Plus } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { CellAction } from "@/pages/dashboard/components/cell-action";
import { CreateMemberModal } from "@/pages/dashboard/components/create-member-modal";

import { useFetch } from "@/hooks/use-fetch";

export default function Members() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data } = useFetch({ endpoint: "member/index" });

  const formattedData = data.map(
    (item: {
      id: number | string;
      name: string;
      email: string;
      phone: string;
    }) => ({
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
    })
  );

  return (
    <div className="flex-1 space-y-5">
      <CreateMemberModal
        endpoint="member"
        messageError="Failed added member!"
        messageSuccess="Member added"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <Heading title="Members" description="Welcome in members page.">
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

interface MemberColumn {
  id: number | string;
  name: string;
  email: string;
  phone: string;
}

const columns: ColumnDef<MemberColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <p className="whitespace-nowrap">{row.original.name}</p>,
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <CellAction initialData={row.original} endpoint="member" />
    ),
  },
];
