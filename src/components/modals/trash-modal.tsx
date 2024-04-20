import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

interface TrashModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading: boolean;
}

export const TrashModal = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading,
}: TrashModalProps) => {
  return (
    <Modal
      title="Are you sure?"
      description="you will never restore from trash."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 flex items-center justify-end gap-4 w-full">
        <Button disabled={isLoading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={isLoading} variant="destructive" onClick={onConfirm}>
          Continue {isLoading && <Spinner className="text-white ml-2" />}
        </Button>
      </div>
    </Modal>
  );
};
