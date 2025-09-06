import { ModalStore } from "@/stores/modalStore";
import { TabsStore } from "@/stores/tabsStore";

export const getTabsStore = <K>(initialActiveTab: K): TabsStore<K> =>
  new TabsStore<K>(initialActiveTab);

export const modalStore = new ModalStore();
export const modalUserUpdateStore = new ModalStore();
