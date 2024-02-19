
const Button = ({Event,Label})=>{
    // console.log(`Event : ${Event} and Label : ${Label}`);
    return(
        <div>
            <button onClick={Event}>
            {Label}
            </button>
        </div>
    );
}

export default Button;