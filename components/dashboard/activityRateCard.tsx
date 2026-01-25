import Card from "../card";


const ActivityRateCard = ({ data } : {data: number}) => {
    return (
       <Card 
            title="Taux d'activité"
            infoBubble={{title: "Taux d'activité", content: "C’est le pourcentage de temps facturable par rapport au temps total travaillé."}}
        >
            <span className="text-xl text-green-500 font-bold">
                {data} %
            </span>
        </Card>
    )
}

export default ActivityRateCard;