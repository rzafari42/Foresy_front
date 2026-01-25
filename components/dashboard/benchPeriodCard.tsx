import Card from "../card";

const BenchPeriodCard = ({ data } : { data: number }) => {
    return (
        <Card 
            title="Intercontrat"
            infoBubble={{title: "Intercontrat", content: "C’est la période pendant laquelle un consultant n’a pas de mission facturable."}}
        >
            <span className="text-xl text-blue-500 font-bold">
                {data} %
            </span>
        </Card>
    );
}

export default BenchPeriodCard;