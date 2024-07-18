const Hello = ({ name, age }) => {
  /*
  Evolution of destructuring props:

  const name = props.name;
  const age = props.age;
  .
  .
  const { name, age } = props;
  .
  .
  at the component (function) definition:
  const Hello = ({ name, age }) => {}
  
  */

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = 'Peter';
  const age = 10;
  const friends = [
    { name: 'F. Peter', age: 4 },
    { name: 'F. Maya', age: 10}
  ];
  const primitiveFriends = [ 'P. Peter', 'P. Maya' ];
  

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      {/* 
        To render "things" between braces in React 
        must be primitive values such as number
        strings does not render objects:
          <p> {friends[0]} <p/> is NOT ALLOWED
        arrays are rendered if the contents are 
        primitive values but the result might not 
        be what is expected
      } */}
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{primitiveFriends}</p>
      <Footer />
    </>
  )
}

export default App