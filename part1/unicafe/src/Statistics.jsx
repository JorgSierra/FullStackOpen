import StatisticLine from "./StatisticLine";

const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad;
    const avg = (good - bad) / total;
    const positivePercentage = (good * 100) / total;
  
    if (good === 0 && neutral === 0 && bad === 0){
      return(<p>No feedback given</p>)
    }
  
    return(        
    <table>
        <thead>
            <tr>
                <th>Items</th>
                <th>Value</th>
            </tr>         
        </thead>
        <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='total' value={total} />
            <StatisticLine text='average score' value={avg} />
            <StatisticLine text='positive %' value={positivePercentage} />
        </tbody>
    </table>
    )
}

export default Statistics