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

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }

    const toggle = () => (isOpen = !isOpen);
</script>

<main>
    <div class="d-md-flex justify-content-center align-items-center">
        <Navbar
        light
        class="justify-content-start align-items-center"
        expand="md"
    >
        <img src="/favicon.png" width="25rem" height="auto" alt="" />
        <NavbarBrand href="#/" class="ms-2">Ezra Abarca</NavbarBrand>
        <NavbarToggler on:click={toggle} />
        <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
            <Nav navbar>
                <NavItem>
                    <NavLink on:click={toggle} href="#/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink on:click={toggle} href="#/series">Series</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink on:click={toggle} href="#/changelog"
                        >Changelog</NavLink
                    >
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
    </div>
   
</main>
