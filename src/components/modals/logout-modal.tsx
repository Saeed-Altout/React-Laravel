import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading: boolean;
}

export const LogoutModal = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading,
}: LogoutModalProps) => {
  return (
    <Modal
      title="Are you sure to logout?"
      description="If you choses continue you will go out dashboard."
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
