import { useContext } from "react"
import { ProfileContext } from "./ProfileContext";

function ProfileAddress() {
    const profile = useContext(ProfileContext);
    return (
        <>
            <h2>Profile Address</h2>
            <p>Alamat {profile}</p>
        </>
    )
}

export default ProfileAddress