
const WelciomeAlert = ({title, icon, content, button, onClick, bgColor} : { title: string, icon: React.ReactNode, content: string, button: string, onClick: () => void, bgColor: string }) => {
    return (
        <div className={`flex flex-col ${bgColor} p-4 rounded-xl shadow-md`}>
            <div className="flex justify-between">
                <div className="flex p-6 gap-4">
                </div>
            </div>
        </div>
    )
}

export default WelciomeAlert;