'use client'

import { FaCircleExclamation } from "react-icons/fa6"
import { BtnDegradedOrange } from "./ui/btn-degraded-orange";
import { useRouter } from "next/navigation";

const AlertMessage = ({ content } : { content: { title: string, content: string, actions: { label: string, href: string }[] } }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col rounded-lg p-4 gap-2 w-full bg-orange-100 text-orange-600" role="alert">
        <p className="flex gap-2  items-center font-bold text-base">
            <FaCircleExclamation size={18} />
            {content.title}
        </p>
        <p className="text-sm">
            {content.content}
        </p>
        <div className="mt-2">
            {
                content.actions.map((action, index) => (
                    <BtnDegradedOrange key={index} onClick={() => router.push(action.href)} style="rounded-lg text-xs">
                        {action.label}
                    </BtnDegradedOrange>
                ))
            }
        </div>
    </div>
  );
}

export default AlertMessage;