import { observer } from "mobx-react-lite";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { modalUserUpdateStore } from "@/stores";

import { PersonalAccountForm } from "../personalAccountForm";

export const PersonalAccountModal = observer(() => {
  const { isVisibleModal, changeModal } = modalUserUpdateStore;

  return (
    <Dialog open={isVisibleModal} onOpenChange={changeModal}>
      <DialogContent className="w-full max-w-[425px] border-[rgb(115,115,115)] bg-[rgba(14,14,19,1)]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl text-inherit">
            Редактировать профиль
          </DialogTitle>
        </DialogHeader>

        <PersonalAccountForm />
      </DialogContent>
    </Dialog>
  );
});
