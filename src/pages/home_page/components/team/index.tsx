import { Tabs, Team_list } from "components";
import { observer } from "mobx-react-lite";
import Tabs_store from "stores/tabs_store";

const new_tabs = new Tabs_store();

export const Team = observer(() => {
  return (
    <section>
      <div className="container">
        <h2>Команда</h2>
        <Tabs {...new_tabs}/>
        <Team_list />
      </div>
    </section>
  );
});
