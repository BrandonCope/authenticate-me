import { Route, Switch } from "react-router-dom";
import ProfileBookings from "../ProfileBookings";
import ProfileEstateBookings from "../ProfileEstateBookings";
import ProfileListings from "../ProfileListings";
import ProfileNav from "../ProfileNavigation";

const Profile = () => {

    return (
        <>
        <ProfileNav />
        <Switch>
            <Route path={'/profiles/:id/reservations'}>
                <ProfileBookings />
            </Route>
            <Route path={'/profiles/:id/listings'}>
                <ProfileListings />
            </Route>
            <Route path={'/profiles/:id/myEstateBookings'}>
                <ProfileEstateBookings />
            </Route>
        </Switch>
        </>
    )
}

export default Profile;
