const Display = ({ direction }) => {
    console.info("direction",direction);
    return (
        <div>
            <p>Directions Left : {direction.left}</p>
            <p>Directions Left : {direction.right}</p> 
        </div>
        
    )
}

export default Display;