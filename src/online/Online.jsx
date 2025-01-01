import useOnline from "./OnlineHook"

export default function Online() {
    const status = useOnline()
    return (
        <>
            {status ? "Online" : "Offline"}
        </>
    )
}