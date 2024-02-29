import MainPage from "@/components/main-page/main-page"
import GetStarted from "@/components/sidebar/get-started"
import Sidebar from "@/components/sidebar/sidebar"
import ThreeTrendingCoins from "@/components/sidebar/three-trending-coins"


function CoinId({ params }: { params: { coinId: string } }) {



    return (
        <div className="bg-[#EFF2F5] md:flex-row flex-col flex h-full w-full p-5 ">

            <MainPage coinId={params.coinId} />
            <Sidebar />
        </div>
    )
}

export default CoinId