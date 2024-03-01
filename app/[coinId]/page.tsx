import Footer from "@/components/footer/footer"
import MainPage from "@/components/main-page/main-page"
import GetStarted from "@/components/sidebar/get-started"
import Sidebar from "@/components/sidebar/sidebar"
import ThreeTrendingCoins from "@/components/sidebar/three-trending-coins"
import TrendingCoins from "@/components/trending-coins/trending-coints"


function CoinId({ params }: { params: { coinId: string } }) {



    return (
        <div>
            <div className="bg-[#EFF2F5] md:flex-row flex-col flex h-full w-full p-5 ">
                <MainPage coinId={params.coinId} />
                <Sidebar />
            </div>
            <TrendingCoins />
            <Footer />
        </div>
    )
}

export default CoinId