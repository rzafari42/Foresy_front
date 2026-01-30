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
import DashboardDataTable from "@/components/dashboardDataTable";
import { dashboardTableHeader } from "@/lib/constants/tablesHeader";
import { PaymentStatus } from "@/lib/constants/paymentStatus";

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

  const tmpDataTable = [
    {
      month: 'Janvier',
      status: PaymentStatus.NEW,
      ca: '12000',
      expenses: '8000',
      mop: '33 %',
      tace: '75 %',
      benchPeriod: '10 %',
      tjmMoyen: '550 €',
    },
    {
      month: 'Février',
      status: PaymentStatus.PENDING,
      ca: '15000',
      expenses: '9000',
      mop: '40 %',
      tace: '70 %',
      benchPeriod: '12 %',
      tjmMoyen: '575 €',
    },
    {
      month: 'Mars',
      status: PaymentStatus.SENT,
      ca: '15000',
      expenses: '9000',
      mop: '40 %',
      tace: '70 %',
      benchPeriod: '12 %',
      tjmMoyen: '575 €',
    },
    {
      month: 'Avril',
      status: PaymentStatus.FULLY_PAID,
      ca: '15000',
      expenses: '9000',
      mop: '40 %',
      tace: '70 %',
      benchPeriod: '12 %',
      tjmMoyen: '575 €',
    },
    {
      month: 'Mai',
      status: PaymentStatus.FULLY_PAID,
      ca: '15000',
      expenses: '9000',
      mop: '40 %',
      tace: '70 %',
      benchPeriod: '12 %',
      tjmMoyen: '575 €',
    },
    {
      month: 'Juin',
      status: PaymentStatus.PAID,
      ca: '15000',
      expenses: '9000',
      mop: '40 %',
      tace: '70 %',
      benchPeriod: '12 %',
      tjmMoyen: '575 €',
    },
    {
      month: 'Juillet',
      status: PaymentStatus.PAID,
      ca: '15000',
      expenses: '9000',
      mop: '40 %',
      tace: '70 %',
      benchPeriod: '12 %',
      tjmMoyen: '575 €',
    },
    {
      month: 'Août',
      status: PaymentStatus.PAID,
      ca: '15000',
      expenses: '9000',
      mop: '40 %',
      tace: '70 %',
      benchPeriod: '12 %',
      tjmMoyen: '575 €',
    },
    {
      month: 'Septembre',
      status: PaymentStatus.PAID,
      ca: '15000',
      expenses: '9000',
      mop: '40 %',
      tace: '70 %',
      benchPeriod: '12 %',
      tjmMoyen: '575 €',
    },
    {
      month: 'Octobre',
      status: PaymentStatus.PAID,
      ca: '15000',
      expenses: '9000',
      mop: '40 %',
      tace: '70 %',
      benchPeriod: '12 %',
      tjmMoyen: '575 €',
    },
    {
      month: 'Novembre',
      status: PaymentStatus.PAID,
      ca: '15000',
      expenses: '9000',
      mop: '40 %',
      tace: '70 %',
      benchPeriod: '12 %',
      tjmMoyen: '575 €',
    },
    {
      month: 'Décembre',
      status: PaymentStatus.PAID,
      ca: '15000',
      expenses: '9000',
      mop: '40 %',
      tace: '70 %',
      benchPeriod: '12 %',
      tjmMoyen: '575 €',
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
        <section>
            <DashboardDataTable columns={dashboardTableHeader} rows={tmpDataTable} />
        </section>
    </>
  )
}

export default Dashboard;