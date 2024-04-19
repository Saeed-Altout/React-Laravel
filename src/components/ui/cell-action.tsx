import { toast } from "sonner";
import { useState } from "react";
import { AxiosError } from "axios";
import { Trash, Edit } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EditModal } from "@/components/modals/edit-modal";
import { TrashModal } from "@/components/modals/trash-modal";

import axios from "@/lib/axios";

interface CellActionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData: any;
  endpoint: string;
}

export const CellAction = ({ initialData, endpoint }: CellActionProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onConfirm = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`${endpoint}/delete?id=${initialData?.id}`);
      toast.success("Success");
      setIsDelete(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error?.response?.data?.message || `Failed delete ${endpoint}!`
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <TrashModal
        isOpen={isDelete}
        isloading={isLoading}
        onConfirm={onConfirm}
        onClose={() => setIsDelete(false)}
      />

      <EditModal
        initialData={initialData}
        endpoint={endpoint}
        messageSuccess={`${initialData.name} update.`}
        messageError=""
        isOpen={isEdit}
        onClose={() => setIsEdit(false)}
      />

      <div className="flex item-center gap-5">
        <Button variant="ghost" size="icon" onClick={() => setIsEdit(true)}>
          <span className="sr-only">Edit</span>
          <Edit className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setIsDelete(true)}>
          <span className="sr-only">Delete</span>
          <Trash className="h-5 w-5  text-red-500" />
        </Button>
      </div>
    </>
  );
};
