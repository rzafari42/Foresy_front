import Card from "../card";

const CATargetCard = ({ data : { achieved, target } } : { data: { achieved: number, target: number } }) => {
    
    const progress = Math.min((achieved / target) * 100, 100).toFixed(0);

    return (
        <Card 
            title="Votre objectif de CA"
            infoBubble={{title:  "Votre objectif de CA", content: "C’est le rapport entre votre CA réalisé et l’objectif que vous vous êtes fixé."}}
        >
            <div className="flex flex-col items-end text-xs font-medium">
                <span className="text-gray-500">{progress}%</span>
                <span className="bg-gray-200 rounded-xl h-1.5 w-full">
                    <span className="bg-gradient-to-r from-[#FF8A4C] to-[#F05252] rounded-xl h-1.5 w-[75%] block"></span>
                </span>
            </div>
            <div className="flex text-xs font-medium mt-2 gap-1">
                <span>{achieved.toLocaleString("de-DE")}€ réalisés </span>
                <span className="text-gray-400">/ Objectif: {target.toLocaleString("de-DE")}€</span>
            </div>
        </Card>
    )
}

export default CATargetCard;