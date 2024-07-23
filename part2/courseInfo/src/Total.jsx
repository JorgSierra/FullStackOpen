const Total = ({ course }) => {

    let total = course.parts.reduce((count, part) => count + part.exercises, 0);

    return <h4>Total of {total} exercises</h4>

}

export default Total