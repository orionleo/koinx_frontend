import Footer from "@/components/footer/footer"
import MainPage from "@/components/main-page/main-page"
import GetStarted from "@/components/sidebar/get-started"
import Sidebar from "@/components/sidebar/sidebar"
import ThreeTrendingCoins from "@/components/sidebar/three-trending-coins"
import TrendingCoins from "@/components/trending-coins/trending-coints"


function CoinId({ params }: { params: { coinId: string } }) {



    return (
        <div className="w-full bg-[#EFF2F5] space-y-5 p-5">
            <div className="flex justify-start">
                <p className="text-[#3E5765]">Cryptocurrencies{` >>>`}&nbsp;</p>
                <p className="text-[#0F1629]">{params.coinId[0].toUpperCase() + params.coinId.slice(1)}</p>
            </div>
            <div className="bg-[#EFF2F5] md:flex-row flex-col flex h-full w-full ">
                <MainPage coinId={params.coinId} />
                <div className="hidden md:block">
                    <Sidebar />
                </div>
            </div>
            <div className="bg-white w-full">
                <TrendingCoins />
            </div>
            <div className="w-full flex justify-center bg-white items-center md:hidden">
                <Sidebar />
            </div>
        </div>
    )
}

export default CoinId