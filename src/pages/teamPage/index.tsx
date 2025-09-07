import { Hero, Team } from "@/components";
import { teamData } from "@/constans/heroData";
import { useTabsStore } from "@/hooks";

const TeamPage = () => {
  const teamStore = useTabsStore<TeamTabKeyType>("gym");

  return (
    <>
      <Hero
        data={teamData}
        isOpaque
        className="before:absolute before:left-28 before:top-28 before:h-[138px] before:w-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px] after:absolute after:inset-0"
      />
      <Team tabsStore={teamStore} />
    </>
  );
};

export default TeamPage;
