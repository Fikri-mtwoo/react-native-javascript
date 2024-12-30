import Profile from "./Profile";
import ProfileAddress from "./ProfileAddres";
import { ProfileContext } from "./ProfileContext";

export default function ProfileApp() {
    return(
        <>
            <ProfileContext.Provider value="react">
                <h1>Profile App</h1>
                <Profile/>
                <ProfileAddress/>
            </ProfileContext.Provider>
        </>
    )
}