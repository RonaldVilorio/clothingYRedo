import { Outlet,NavLink } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as ClothingLogo } from '../../assets/crown (1).svg';
import "./navigation.styles.scss"

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <NavLink to="/"className="logo-container">
                    <ClothingLogo className="logo"/>
                </NavLink>
                <div className="nav-links-container">
                    <NavLink to="shop"className="nav-link" >Shop</NavLink>
                </div>
            </div>
            <Outlet/>
        </Fragment>
     );
}
 
export default Navigation;