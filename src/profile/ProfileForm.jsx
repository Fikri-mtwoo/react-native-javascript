export default function ProfileForm({name, setName}) {
    function handleChange(e) {
        setName(e.target.value)
    }
    return (
        <form>
            <input type="text" value={name} onChange={handleChange}/>
        </form>
    )
}