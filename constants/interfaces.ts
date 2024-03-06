export interface CoinData {
    id: string;
    symbol: string;
    name: string;
    web_slug: string;
    asset_platform_id: null;
    platforms: { [key: string]: string };
    detail_platforms: { [key: string]: { decimal_place: null; contract_address: string } };
    block_time_in_minutes: number;
    hashing_algorithm: string;
    categories: string[];
    preview_listing: boolean;
    public_notice: null;
    additional_notices: any[]; // You may replace 'any' with a more specific type if available
    description: { en: string };
    links: {
        homepage: string[];
        whitepaper: string;
        blockchain_site: string[];
        official_forum_url: string[];
        chat_url: string[];
        announcement_url: string[];
        twitter_screen_name: string;
        facebook_username: string;
        bitcointalk_thread_identifier: null;
        telegram_channel_identifier: string;
        subreddit_url: string;
        repos_url: { github: string[]; bitbucket: string[] };
    };
    image: {
        thumb: string;
        small: string;
        large: string;
    };
    country_origin: string;
    genesis_date: string;
    Sentimentvotes_up_percentage: number;
    Sentimentvotes_down_percentage: number;
    watchlist_portfolio_users: number;
    market_cap_rank: number;
    market_data: {
        current_price: { [key: string]: number };
        total_value_locked: null;
        mcap_to_tvl_ratio: null;
        fdv_to_tvl_ratio: null;
        roi: null;
        ath: { [key: string]: number };
        ath_change_percentage: { [key: string]: number };
        ath_date: { [key: string]: string };
        atl: { [key: string]: number };
        atl_change_percentage: { [key: string]: number };
        atl_date: { [key: string]: string };
        market_cap: { [key: string]: number };
        market_cap_rank: number;
        fully_diluted_valuation: { [key: string]: number };
        market_cap_fdv_ratio: number;
        total_volume: { [key: string]: number };
        high_24h: { [key: string]: number };
        low_24h: { [key: string]: number };
        price_change_24h: number;
        price_change_percentage_24h: number;
        price_change_percentage_7d: number;
        price_change_percentage_14d: number;
        price_change_percentage_30d: number;
        price_change_percentage_60d: number;
        price_change_percentage_200d: number;
        price_change_percentage_1y: number;
        market_cap_change_24h: number;
        market_cap_change_percentage_24h: number;
        price_change_24h_in_currency: { [key: string]: number };
        price_change_percentage_1h_in_currency: { [key: string]: number };
        price_change_percentage_24h_in_currency: { [key: string]: number };
        price_change_percentage_7d_in_currency: { [key: string]: number };
        price_change_percentage_14d_in_currency: { [key: string]: number };
        price_change_percentage_30d_in_currency: { [key: string]: number };
        price_change_percentage_60d_in_currency: { [key: string]: number };
        price_change_percentage_200d_in_currency: { [key: string]: number };
        price_change_percentage_1y_in_currency: { [key: string]: number };
        market_cap_change_24h_in_currency: { [key: string]: number };
        market_cap_change_percentage_24h_in_currency: { [key: string]: number };
    };
    community_data: {
        facebook_likes: null;
        twitter_followers: number;
        reddit_average_posts_48h: number;
        reddit_average_comments_48h: number;
        reddit_subscribers: number;
        reddit_accounts_active_48h: number;
        telegram_channel_user_count: null;
    };
    status_updates: any[];
    last_updated: string;
}


export interface CoinItem {
    item: {
        id: string;
        coin_id: number;
        name: string;
        symbol: string;
        market_cap_rank: number;
        thumb: string;
        small: string;
        large: string;
        slug: string;
        price_btc: number;
        score: number;
        data: {
            price: string;
            price_btc: string;
            price_change_percentage_24h: Record<string, number>;
            market_cap: string;
            market_cap_btc: string;
            total_volume: string;
            total_volume_btc: string;
            sparkline: string;
            content: {
                title: string;
                description: string;
            };
        };
    };
}

export interface TrendingCoinData {
    coins: CoinItem[]
}

export interface YearStats {
    year_low: number;
    year_high: number;
}

export interface WeekStats {
    week_low: number;
    week_high: number;
}

export interface AllTimeStats {
    allTime_high: number;
    allTime_low: number;
}

export interface Stats {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: null | any; // Replace 'any' with the actual type if needed
    last_updated: string;
    sparkline_in_7d: {
        price: number[];
    };
    price_change_percentage_1y_in_currency: number;
    price_change_percentage_24h_in_currency: number;
    price_change_percentage_7d_in_currency: number;
}

export interface MarketData {
    data: {
        active_cryptocurrencies: number;
        upcoming_icos: number;
        ongoing_icos: number;
        ended_icos: number;
        markets: number;
        total_market_cap: {
            btc: number;
            eth: number;
            ltc: number;
            bch: number;
            bnb: number;
            eos: number;
            xrp: number;
            xlm: number;
            link: number;
            dot: number;
            yfi: number;
            usd: number;
            aed: number;
            ars: number;
            aud: number;
            bdt: number;
            bhd: number;
            bmd: number;
            brl: number;
            cad: number;
            chf: number;
            clp: number;
            cny: number;
            czk: number;
            dkk: number;
            eur: number;
            gbp: number;
            gel: number;
            hkd: number;
            huf: number;
            idr: number;
            ils: number;
            inr: number;
            jpy: number;
            krw: number;
            kwd: number;
            lkr: number;
            mmk: number;
            mxn: number;
            myr: number;
            ngn: number;
            nok: number;
            nzd: number;
            php: number;
            pkr: number;
            pln: number;
            rub: number;
            sar: number;
            sek: number;
            sgd: number;
            thb: number;
            try: number;
            twd: number;
            uah: number;
            vef: number;
            vnd: number;
            zar: number;
            xdr: number;
            xag: number;
            xau: number;
            bits: number;
            sats: number;
        };
        total_volume: {
            btc: number;
            eth: number;
            ltc: number;
            bch: number;
            bnb: number;
            eos: number;
            xrp: number;
            xlm: number;
            link: number;
            dot: number;
            yfi: number;
            usd: number;
            aed: number;
            ars: number;
            aud: number;
            bdt: number;
            bhd: number;
            bmd: number;
            brl: number;
            cad: number;
            chf: number;
            clp: number;
            cny: number;
            czk: number;
            dkk: number;
            eur: number;
            gbp: number;
            gel: number;
            hkd: number;
            huf: number;
            idr: number;
            ils: number;
            inr: number;
            jpy: number;
            krw: number;
            kwd: number;
            lkr: number;
            mmk: number;
            mxn: number;
            myr: number;
            ngn: number;
            nok: number;
            nzd: number;
            php: number;
            pkr: number;
            pln: number;
            rub: number;
            sar: number;
            sek: number;
            sgd: number;
            thb: number;
            try: number;
            twd: number;
            uah: number;
            vef: number;
            vnd: number;
            zar: number;
            xdr: number;
            xag: number;
            xau: number;
            bits: number;
            sats: number;
        };
        market_cap_percentage: {
            btc: number;
            eth: number;
            usdt: number;
            bnb: number;
            sol: number;
            steth: number;
            xrp: number;
            usdc: number;
            ada: number;
            doge: number;
        };
        market_cap_change_percentage_24h_usd: number;
        updated_at: number;
    };
}  

export interface Stats{
    weekStats:WeekStats;
    yearStats:YearStats;
    
}