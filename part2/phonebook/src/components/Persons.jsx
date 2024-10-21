
const Persons = ({persons,searchValue}) => {
    return (<>
        <h2>Numbers</h2>
        <ul>
            {persons
                .filter(({ name }) => !searchValue || name.toLowerCase().includes(searchValue.toLowerCase()))
                .map(({ name, number }) => (
                    <li key={name}>{`${name} | ${number}`}</li>
                ))}
        </ul>
    </>
    )
}
export default Persons;