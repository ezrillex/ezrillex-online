<script>
    import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
    } from "sveltestrap";

    let isOpen = false;
    const toggle = () => (isOpen = !isOpen);
</script>

<main>
    <Navbar color="dark" dark class="bg-black">
        <img
            class="me-2 ms-2"
            src="/favicon.png"
            width="25"
            height="25"
            alt=""
        />
        <NavbarBrand href="#/" class="me-auto">ezrillex online</NavbarBrand>
        <NavbarToggler on:click={toggle} class="me-2" />
        <Collapse {isOpen} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink href="#/">Inicio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#/series">Series</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#/changelog">Changelog</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
</main>
