import { Outlet, useLocation } from "react-router";
import { Page } from "../components/Page";


const titles = {
    "/": "Dashboard",
    "/my-collection": "Mi Colección",
    "/about": "Acerca de"
}

export const Layout = () => {
    const { pathname: currentPath } = useLocation();
    console.log("Current Path:", currentPath);
    return (
        <Page title={titles[currentPath] || 'Not Found'}>
            <Outlet />
        </Page>
    )

}