"use client";

import { useState } from "react";
import CATargetCard from "@/components/dashboard/CATargetCard";
import OperatingMarginCard from "@/components/dashboard/operatingMarginCard";
import ActivityRateCard from "@/components/dashboard/activityRateCard";
import BenchPeriodCard from "@/components/dashboard/benchPeriodCard";
import AlertMessage from "@/components/alertMessage";
import Selector from "@/components/selector";
import ChartArea from "@/components/chartArea";
import { faker } from "@faker-js/faker";

const Dashboard = () => {

  const [selectedFilter, setSelectedFilter] = useState("ca");

  const notification = {
    title: "Bienvenue Redwane, terminons la configuration de votre compte.",
    content: "Effectuez les 2 prochaines étapes.",
    actions: [
      {
        label: "Compléter mon compte",
        href: "/settings",
      },
    ]
  }

  const filterOption = [
    { label: "Chiffre d'affaires", value: "ca" },
    { label: "MOP", value: "operatingMargin" },
    { label: "TACE", value: "activityRate" },
    { label: "Intercontrat", value: "benchPeriod" },
  ]

  const labels = ['Jan.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juill.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'];

  const tmpDataset = [
    {
      label: 'CA 2024', 
      data: labels.map(() => faker.number.int({ min: 0, max: 100000 }))
    },
     {
      label: 'Charges', 
      data: labels.map(() => faker.number.int({ min: 0, max: 100000 }))
    },
  ]

  console.log("TMP DATASET: ", tmpDataset);
  return (
    <>
        {
          notification &&
            <AlertMessage content={notification}/>
        }
        <section className="flex justify-center gap-4">
          <CATargetCard data={{ achieved: 112000, target: 150000 }} />
          <OperatingMarginCard data={0.97}/>
          <ActivityRateCard data={80.15}/>
          <BenchPeriodCard data={19.85} />
        </section>
        <section className="flex flex-1 flex-col justify-between p-6 gap-2 rounded-2xl bg-white shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Évolution du CA</h2>
            <Selector options={filterOption} onSelect={(value) => setSelectedFilter(value)} selected={selectedFilter} />
          </div>
          <ChartArea  dataset={tmpDataset} labels={labels} />
        </section>
    </>
  )
}

export default Dashboard;