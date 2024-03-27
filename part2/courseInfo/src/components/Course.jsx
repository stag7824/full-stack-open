const Header = ({name}) =>{
    console.log("Header",name);
    return (
      <>
        <h1>
          {name}
        </h1>
      </>
    )
  }
  
  const Part = (props) =>{
    return (
      <>
        <p>
          {props.parts.name} {props.parts.exercises}
        </p>
      </>
    )
  }
  const Content = (props) =>{
    console.log("Content",props);
    const value=props.parts.map((part)=><Part key={part.id} parts={part}/>)
    console.log("props.part",props.parts);
    console.log("value",value);
    return (
      <>
        {value}
      </>
    )
  }
  const Total = (props) =>{
    console.log("Total props",props);
    return (
      <>
        <p>
          Number of exercises {props.parts.reduce((acc,curr)=>acc+curr.exercises,0)}
        </p>
      </>
    )
  }

  const Course=(props)=>{
    console.log("Course",props);
    

    return (
        <>
        <Header name={props.course.name} />
        <Content parts={props.course.parts} />
        <Total parts={props.course.parts} />
        </>
    )
  };
  export default Course;

