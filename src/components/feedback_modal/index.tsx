import { observer } from "mobx-react-lite";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Feedback_form } from "@/components";
import { modal_store } from "@/stores";

export const Feedback_modal = observer(() => {
  const { isVisibleModal, change_modal } = modal_store;

  return (
    <Dialog open={isVisibleModal} onOpenChange={change_modal}>
      <DialogContent className="w-full max-w-[425px] bg-[rgba(14,14,19,1)] border-[rgb(115,115,115)]">
        <DialogHeader>
          <DialogTitle className="text-inherit text-center text-2xl">
            Оставьте свои контактные данные
          </DialogTitle>
          <DialogDescription>
            Наши менеджеры свяжутся с Вами в ближайшее время
          </DialogDescription>
        </DialogHeader>

        <Feedback_form />
      </DialogContent>
    </Dialog>
  );
});
