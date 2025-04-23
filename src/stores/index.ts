import { Modal_store } from "@/stores/modal_store";
import { Tabs_store } from "@/stores/tabs_store";

type Tabs_store_key = `component_${string}`;

const tabs_store_instances: Record<Tabs_store_key, Tabs_store> = {} as Record<
  Tabs_store_key,
  Tabs_store
>;

export const get_tabs_store = (key: Tabs_store_key): Tabs_store => {
  if (!tabs_store_instances[key]) {
    tabs_store_instances[key] = new Tabs_store();
  }
  return tabs_store_instances[key];
};

export const modal_store = new Modal_store();
