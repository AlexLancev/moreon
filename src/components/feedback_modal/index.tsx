import { observer } from "mobx-react-lite";

import { Feedback_form } from "@/components";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { modal_store } from "@/stores";

export const Feedback_modal = observer(() => {
  const { isVisibleModal, change_modal } = modal_store;

  return (
    <Dialog open={isVisibleModal} onOpenChange={change_modal}>
      <DialogContent className="w-full max-w-[425px] border-[rgb(115,115,115)] bg-[rgba(14,14,19,1)]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl text-inherit">
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
