
const Filter = ({searchValue,search}) => {
    return (
        <div>
            <h2>Search</h2>
            filter shown in <input type="text" value={searchValue} onChange={search} />
        </div>
    )
}
export default Filter;