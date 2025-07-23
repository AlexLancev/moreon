import { observer } from "mobx-react-lite";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { modalUserUpdateStore } from "@/stores";

import { Personal_account_form } from "../personal_account_form";

export const Personal_account_modal = observer(() => {
  const { isVisibleModal, change_modal } = modalUserUpdateStore;

  return (
    <Dialog open={isVisibleModal} onOpenChange={change_modal}>
      <DialogContent className="w-full max-w-[425px] border-[rgb(115,115,115)] bg-[rgba(14,14,19,1)]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl text-inherit">
            Редактировать профиль
          </DialogTitle>
        </DialogHeader>

        <Personal_account_form />
      </DialogContent>
    </Dialog>
  );
});
