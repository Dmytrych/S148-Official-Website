import { AppBar, IconButton, Toolbar } from "@mui/material";
import logo from '../../imgShared/S148.png'
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";
import { locale } from "../../locale/ua";
import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/useCart';

const topBarHeight = "80px"

const AppTopBar = () => {
    const [cartLinkDisabled, setCartLinkDisabled] = useState(true);
    const [ cart ] = useCart();

    useEffect(() => {
        setCartLinkDisabled(Object.keys(cart).length <= 0)
    }, [cart])

    return (<StyledAppBar>
        <Toolbar>
            <LogoContainer src={logo} />
            <ItemMenu>
                <TopBarItem>
                    <TopBarNavLink to="/">{locale.home_page}</TopBarNavLink>
                </TopBarItem>
                <TopBarItem>
                    <TopBarNavLink to="/products">{locale.products_page}</TopBarNavLink>
                </TopBarItem>
                <TopBarItem>
                    {
                        cartLinkDisabled
                        ? <TopBarNavLinkDisabled>{locale.cart_page}</TopBarNavLinkDisabled>
                        : <TopBarNavLink to="/cart">{locale.cart_page}</TopBarNavLink>
                    }
                </TopBarItem>
            </ItemMenu>
        </Toolbar>
    </StyledAppBar>)
}

const StyledAppBar = styled(AppBar)({
    backgroundColor: "var(--navbar-background-color)",
    fontFamily: "var(--home-page-font-family)",
    position: "sticky",
    height: topBarHeight,
    display: "flex",
    justifyContent: "center"
})

const TopBarItem = styled("div")({
    display: "flex",
    alignItems: "center",
    height: "50%",
    margin: "1rem"
})

const TopBarNavLinkDisabled = styled("span")({
    cursor: "pointer",
    textDecoration: "none",
    color: "var(--global-color-inactive)",
})

const TopBarNavLink = styled(NavLink)({
    ":hover": {
        color: "var(--global-text-color-highlight)"
    },
    color: "var(--global-text-color)",
    textDecoration: "none"
})

const LogoContainer = styled("img")({
    width: "auto",
    height: "60px",
    margin: "10px 0px"
})

const ItemMenu = styled("div")({
    paddingRight: "15vw",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "end",
    flexGrow: "9"
})

export default AppTopBar;