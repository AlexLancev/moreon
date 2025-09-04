import { observer } from "mobx-react-lite";

import { FeedbackForm } from "@/components";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { modalStore } from "@/stores";

export const FeedbackModal = observer(() => {
  const { isVisibleModal, changeModal } = modalStore;

  return (
    <Dialog open={isVisibleModal} onOpenChange={changeModal}>
      <DialogContent className="w-full max-w-[425px] border-[rgb(115,115,115)] bg-[rgba(14,14,19,1)]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl text-inherit">
            Оставьте свои контактные данные
          </DialogTitle>
          <DialogDescription>
            Наши менеджеры свяжутся с Вами в ближайшее время
          </DialogDescription>
        </DialogHeader>

        <FeedbackForm />
      </DialogContent>
    </Dialog>
  );
});
