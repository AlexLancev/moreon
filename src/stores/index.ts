import { ModalStore } from "@/stores/modalStore";
import { TabsStore } from "@/stores/tabsStore";

type TabsStoreKey = `component${string}`;

const tabsStoreInstances: Record<TabsStoreKey, TabsStore> = {} as Record<
  TabsStoreKey,
  TabsStore
>;

export const getTabsStore = (key: TabsStoreKey): TabsStore => {
  if (!tabsStoreInstances[key]) {
    tabsStoreInstances[key] = new TabsStore();
  }
  return tabsStoreInstances[key];
};

export const modalStore = new ModalStore();
export const modalUserUpdateStore = new ModalStore();
