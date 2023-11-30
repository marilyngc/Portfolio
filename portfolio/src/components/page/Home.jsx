import { Navbar } from "../layout/navbar/Navbar.jsx"
import { Profile } from "../common/Profile.jsx"

export const Home = () => {
    return(
        <>
        <Navbar/>
        <main className=" flex flex-col items-center  py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 border">
    <Profile/>
    </main>
        </>

    )
}