export default function GuesBookForm({refs, name, setName}) {
    return (
        <>
            <label htmlFor="nama">Nama</label><br />
            <input ref={refs} type="text" id="nama" name="nama" value={name} onChange={(e)=> setName(e.target.value)}/><br />
        </>
    )
}