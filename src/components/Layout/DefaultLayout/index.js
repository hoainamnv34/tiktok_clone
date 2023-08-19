import Header from "./Header";
import SideBar from "./SideBar";

function Default({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Default;