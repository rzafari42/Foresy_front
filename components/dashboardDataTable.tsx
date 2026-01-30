import { TiArrowUnsorted } from "react-icons/ti";
import { PaymentStatus } from "@/lib/constants/paymentStatus";
import { CiLock } from "react-icons/ci";

const conditionalTextColor = (status: string) => {
   return status === PaymentStatus.PAID ? "text-gray-500" : "text-gray-900"
};

const conditionalStatusRender = (status: string) => {
    switch(status) {
        case PaymentStatus.NEW:
            return (
                <span className="text-orange-700 bg-gradient-to-r from-[#FFC1A1] to-[#FFAAAA] px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {status}
                </span>
            )
        case PaymentStatus.SENT:
            return (
                <span className="text-blue-600 bg-blue-100 px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {status}
                </span>
            )
        case PaymentStatus.PENDING:
            return (
                <span className="text-blue-600 bg-blue-100 px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {status}
                </span>
            )
        case PaymentStatus.FULLY_PAID:
            return (
                <span className="w-fit flex gap-3">
                    <span className="text-green-600 bg-green-100 px-2.5 py-0.5 rounded-full text-xs font-medium">
                        {status}
                    </span>
                    <span className="text-yellow-500">🎉</span>
                </span>
            )
        case PaymentStatus.PAID:
            return (
                <span className="w-fit flex justify-center items-center gap-1 text-gray-500 bg-gray-100 p-2 rounded-md text-xs font-medium">
                    <CiLock />
                    {status}
                </span>
            )
        default:
            return (
                <span className="text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {status}
                </span>
            )
    }
}

const DashboardDataTable = ({ columns, rows } : {columns: {id: string, label: string, sort: boolean}[], rows: {month: string, status: string, ca: string, expenses: string, mop: string, tace: string, benchPeriod: string, tjmMoyen: string}[]}) => {
    return (
        <table className="w-full table-auto border-collapse p-4 shadow-md rounded-bl-2xl rounded-br-2xl overflow-hidden bg-transparent">
            <thead>
                <tr>
                {
                    columns.map((column) => (
                        <th key={column.id} className={`p-4 font-semibold text-gray-500 text-xs text-left ${(column.label.toLowerCase() === 'mois' || column.label.toLowerCase() === 'status') ? 'text-left' : 'text-right'}`}>
                            {
                                column.label.toLocaleUpperCase()
                            }
                            {
                                column.sort &&
                                <TiArrowUnsorted />
                            }
                        </th>
                    ))
                }
                </tr>
            </thead>
            <tbody className="">
                {
                    rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className={`${row.status === PaymentStatus.NEW && 'bg-orange-50!'} ${row.status === PaymentStatus.FULLY_PAID && 'bg-green-50!'} ${(row.status === PaymentStatus.PENDING || row.status === PaymentStatus.SENT) && 'bg-blue-50!'} bg-white border-t border-gray-200 `}>
                            {
                                Object.values(row).map((cell, cellIndex) => (
                                    <td key={cellIndex} className={`p-4 text-sm font-semibold ${cellIndex === 0 || cellIndex === 1 ? 'text-left' : 'text-right'} ${conditionalTextColor(row.status)}`}>
                                        {
                                            cellIndex === 1 ? conditionalStatusRender(cell) : cell
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default DashboardDataTable;
