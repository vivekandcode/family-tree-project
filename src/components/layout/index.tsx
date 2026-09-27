import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {

    return (

        <div className="flex">
            <Sidebar />
            <Header />
        </div>

    )
}

export default AppLayout;