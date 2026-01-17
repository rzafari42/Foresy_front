import Image from "next/image";
import { BtnDegradedOrange } from "@/components/ui/btn-degraded-orange";
import { GoPlay } from "react-icons/go";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full items-center justify-center flex-col">
        <div className="flex flex-col gap-[24px] items-center justify-center pt-[64px] lg:px-[64px] px-8">
          <div className="text-center text-xs font-semibold uppercase text-orange-500">
            Indépendants, freelance
          </div>
          <h1 className="text-[64px] font-helvetica font-extralight text-center">
            La solution 
              <span className="font-medium mx-2 bg-gradient-to-r from-[#FF8A4C] to-[#F05252] bg-clip-text text-transparent">
                pré-compta
              </span> 
            pour <br />
            maîtriser votre CA !
          </h1>
          <div className="font-light text-[20px] text-gray-500 text-center">
            Chez nous pas de comptabilité, juste du pilotage.
            <br/>
            <br/>
            Lancez, planifiez et développez votre activité en parcourant votre feuille de route avec notre logiciel tout-en-un de suivi, planification et prévision d’activité en temps réel.
          </div>
          <Link href="/inscription">
            <BtnDegradedOrange >
              Essayer maintenant
            </BtnDegradedOrange>
          </Link>
          <div className="h-[280px] overflow-hidden">
            <Image
              src="/images/orangeScreen.png"
              alt="Orange Screen"
              width={800}
              height={100}
            />
          </div>
        </div>
        <div className="bg-white lg:px-[145px] lg:py-[80px] gap-[48px] w-full flex flex-col">
          <h2 className="text-center text-5xl font-extralight mt-16 mb-8">
            Constatez le passé, <span className="font-medium mx bg-gradient-to-r from-[#FF8A4C] to-[#F05252] bg-clip-text text-transparent">changez l'avenir</span>
          </h2>
          <div className="lg:grid lg:grid-cols-3 lg:grid-rows-2 flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-[8px] justify-center items-center bg-orange-50 col-span-1 rounded-3xl px-16 py-8">
              <h3 className="text-center text-[20px]">On se connaît déjà</h3>
              <p className="text-center font-light text-[16px]">
                Retrouvez votre entreprise, ajoutez-y vos missions actuelles ou futures
              </p>
              <p className="text-[60px]">👋</p>
            </div>
            <div className="flex flex-col gap-[8px] justify-center items-center bg-orange-50 col-span-2 rounded-3xl px-16 py-8 lg:mb-6">
              <p className="text-[60px]">🎉</p>
              <h3 className="text-center text-[20px]">Trackez vos jours travaillés et ceux prévus</h3>
              <p className="text-center font-light text-[16px]">
                Identifiez les jours travaillés passés ou prévus sur vos projets, que se soit à la journée ou à la demi-journée.
              </p>
            </div>
            <div className="flex flex-col gap-[8px] justify-center items-center bg-orange-50 col-span-2 rounded-3xl px-16 py-8 lg:mb-6">
              <p className="text-[60px]">🧙</p>
              <h3 className="text-center text-[20px]">Vos factures sont actualisées en temps réel</h3>
              <p className="text-center font-light text-[16px]">
                Selon vos jours travaillés, les données de vos factures évoluent en conséquent, sans aucun effort.
              </p>
            </div>
            <div className="flex flex-col gap-[8px] justify-center items-center bg-orange-50 col-span-1 rounded-3xl px-16 py-8">
              <h3 className="text-center text-[20px]">Visualisez votre performance, anticipez l’avenir, atteignez vos objectifs de CA</h3>
              <p className="text-center font-light text-[16px]">
                Retrouvez votre entreprise, ajoutez-y vos missions actuelles ou futures.
              </p>
              <p className="text-[60px]">✨</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-[145px] py-[80px] gap-[80px] w-full flex flex-col lg:flex-row items-center justify-center">
            <Image
              src="/images/portrait-user.png"
              alt="Forecasting Illustration"
              width={420}
              height={689}
            />
          <div className="flex flex-col items-left justify-center gap-[24px] max-w-lg">
            <h3 className="uppercase text-orange-500">
              Ce qu’ils disent de nous
            </h3>
            <p className="font-helvetica text-gray-900 text-[52px] font-normal italic">
              “Je dispose instantanément des informations dont j’ai besoin.”
              <span className="text-[14px] not-italic">Aurélie</span>
            </p>
            <p className="text-[16px] italic font-normal">
              Retrouvez le tableau de bord de votre entreprise, mis à jour en temps réel, issu de l’ensemble des projets sur lesquels vous intervenez. Pointez les jours travaillés et facturables, vos 
            </p>
            <div className="flex flex-row items-center justify-left gap-[8px] text-[16px] text-orange-500">
   
              <GoPlay size={45} color="orange-500" />
              <p>Lire l’avis d’Aurélie</p>
            </div>

          </div>

        </div>
       
      </main>
    </div>
  );
}
