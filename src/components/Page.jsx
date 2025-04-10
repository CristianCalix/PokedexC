import { NavBar } from "./Navbar"

export const Page = ( {title, children} )=>{
    return (
        <>
            <header className="bg-white text-black py-2 px-4">
                <div className="text-3xl text-center font-bold">{title}</div>
                <NavBar />
            </header>
            <main className="grow">
                 {children}
            </main>
            <footer className="p-4">
                Cristian Calix
            </footer>
        </>
    )
}