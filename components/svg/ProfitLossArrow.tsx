const ProfitLossArrow = ({ profit }: { profit: boolean }) => {

    if (profit) {
        return (
            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 0L11 8H0L5.5 0Z" fill="#14B079" />
            </svg>

        )
    }
    return (
        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 8L0 0H11L5.5 8Z" fill="#DC2626" transform="rotate(180 1)" />
        </svg>

    )
}

export default ProfitLossArrow