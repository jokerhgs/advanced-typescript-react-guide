import { useState, useTransition } from "react";

const TabButton = ({
  name,
  isActive,
  onSwitch,
  isPending,
}: {
  name: string;
  isActive: boolean;
  onSwitch: (tabName: string) => void;
  isPending: boolean;
}) => {
  return (
    <button
      className={` rounded-md px-4 py-2 text-white cursor-pointer ${
        isActive ? "bg-green-600" : "bg-blue-600"
      } ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={() => {
        if (!isPending) {
          onSwitch(name);
        }
      }}
      disabled={isPending}
    >
      {isPending ? "Loading" : name}
    </button>
  );
};
const tabData = {
  recent: [
    "New product launch announced",
    "Updated user guidelines published",
    "Team building workshop scheduled",
    "Quarterly results released",
    "Office closure for holidays",
    "New hires starting this week",
    "Website maintenance planned",
    "Annual conference dates confirmed",
    "Customer feedback summary",
    "Updated privacy policy",
  ],
  popular: [
    "How to request time off",
    "WFH policy explained",
    "Team lunch preferences",
    "Bonus structure FAQ",
    "Promotion criteria",
    "IT help desk contacts",
    "Upcoming holiday calendar",
    "Most used keyboard shortcuts",
    "Break room etiquette",
    "Parking space rules",
  ],
  saved: [
    "Important tax documents",
    "Healthcare plan details",
    "2024 meeting schedule",
    "Professional development budget",
    "Emergency contacts list",
    "Reference documents",
    "Conference call numbers",
    "Team birthdays list",
    "Recommended reading",
    "Travel expense form",
  ],
};

type Tab = {
  name: string;
  data: string[];
};

export const Tabs = () => {
  const tabs: Tab[] = [
    { name: "Recent", data: tabData.recent },
    { name: "Popular", data: tabData.popular },
    { name: "Saved", data: tabData.saved },
  ];
  const [activeTab, setActiveTab] = useState("Recent");
  const [isPending, startTransition] = useTransition();

  const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleTabSwitch = (tabName: string) => {
    startTransition(async () => {
      await delay(2000);
      setActiveTab(tabName);
    });
  };

  return (
    <div className="w-96 mt-40 mx-auto flex flex-col shadow p-10 gap-4 rounded-xl border border-slate-100">
      <div className="flex flex-row justify-around">
        {tabs.map((tab, index) => {
          return (
            <TabButton
              key={index}
              isActive={activeTab === tab.name}
              name={tab.name}
              onSwitch={handleTabSwitch}
              isPending={isPending}
            />
          );
        })}
      </div>
      <div className="flex flex-col">
        {tabs[tabs.findIndex((tab) => tab.name === activeTab)].data.map(
          (data, index) => {
            return <div key={index}> {`${index + 1}. ` + data}</div>;
          }
        )}
      </div>
    </div>
  );
};
