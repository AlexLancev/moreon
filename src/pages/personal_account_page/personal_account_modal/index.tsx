import { observer } from "mobx-react-lite";

import { Personal_account_form } from "../personal_account_form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { personal_account_store } from "@/stores";

export const Personal_account_modal = observer(() => {
  const { isVisibleModal, change_modal } = personal_account_store;

  return (
    <Dialog open={isVisibleModal} onOpenChange={change_modal}>
      <DialogContent className="w-full max-w-[425px] bg-[rgba(14,14,19,1)] border-[rgb(115,115,115)]">
        <DialogHeader>
          <DialogTitle className="text-inherit text-center text-2xl">
            Редактировать профиль
          </DialogTitle>
        </DialogHeader>

        <Personal_account_form />
      </DialogContent>
    </Dialog>
  );
});
