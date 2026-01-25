import Card from "../card"
import { FaCircleExclamation } from "react-icons/fa6"

const OperatingMarginCard = ({ data } : { data: number }) => {
  return (
    <Card
        title="Marge opérationnelle"
        infoBubble={{title: "Marge opérationnelle", content: "C’est la différence entre votre chiffre d'affaires et vos coûts opérationnels."}}
    >
      <div className="flex gap-2 items-center justify-between text-xs font-medium">
        <span className="text-xl text-orange-500 font-bold">
          {data} %
        </span>
        <span className="flex items-center text-gray-500 bg-gray-50 rounded-lg px-3 py-2 gap-2 border border-gray-100">
          <FaCircleExclamation size={12} />
          Que faire ?
        </span>
      </div> 
    </Card>
  )
}

export default OperatingMarginCard;