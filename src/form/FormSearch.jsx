export default function FormSearch() {
    return (
        <form>
            <input type="text"/>
            <button onClick={(e) => {
                e.preventDefault()
                alert('Find me')
            }}>
                Search
            </button>
        </form>
    )
}