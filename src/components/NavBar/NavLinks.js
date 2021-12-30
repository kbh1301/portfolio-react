import { contentRoutesNames } from "../Content/ContentRouter";
import { routeChange, timeout } from '../../utils/utils';

const NavLinks = ({ contentRef, setIsContactVisible, currentPath }) => {

    const onClick = async (event) => {
        // prevent full page reload
        event.preventDefault();
        // update url
        routeChange(event.target.href);
        await timeout(1);
        // scroll to content
        contentRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div style={{width: "100%"}}> {
            // generate link element for every item in contentTabs
            contentRoutesNames.map((route,i) => {
                // set tab button text color based on current tab
                const activeTab = route === currentPath ? "black" : "white";

                return (
                    <a
                        key={i}
                        href={route}
                        className="nav-btn"
                        style={{color: activeTab}}
                        onClick={onClick}
                    >
                        {route}
                    </a>
                );
            })}

            <p title="Contact Me" className="contact-btn" onClick={() => setIsContactVisible(true)}>Contact Me</p>
        </div>
    )
}

export default NavLinks