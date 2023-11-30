import { Navbar } from "../layout/navbar/Navbar.jsx"
import { Profile } from "../common/Profile/Profile.jsx";
import { Experince } from "../common/Experience/Experience.jsx";

export const Home = () => {
    return(
        <>
        <Navbar/>
        <main className="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10">
    <Profile/>
    <hr className="border border-dotted border-gray-300 dark:border-gray-600 rounded-md"/>
   <Experince/>
   
    </main>
        </>

    )
}