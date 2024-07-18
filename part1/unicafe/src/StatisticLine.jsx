const StatisticLine = ({ text, value }) => {
    return(
        <tr>
            <td>{text}</td>
            <td style={{textAlign: "center", minWidth: "143px"}}>{value}</td>
        </tr>
    )
}

export default StatisticLine