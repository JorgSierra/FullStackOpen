const Total = ({ course }) => {

    let total = course.parts.reduce((count, part) => count + part.exercises, 0);

    return <p>Number of exercises {total}</p>

}

export default Total