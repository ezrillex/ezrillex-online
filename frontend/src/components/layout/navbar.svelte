<script>
    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink
    } from 'sveltestrap';
  
    let isOpen = false;
  
    function handleUpdate(event) {
      isOpen = event.detail.isOpen;
    }

    const toggle = () => (isOpen = !isOpen);
</script>

<main>
    <Navbar color="dark" dark class="bg-black" expand="md">
        <img
            class="me-2 ms-2"
            src="/favicon.png"
            width="25"
            height="25"
            alt=""
        />
        <NavbarBrand href="#/" class="me-auto">Ezra Abarca</NavbarBrand>
        <NavbarToggler  on:click={toggle} class="me-2" />
        <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
            <Nav navbar>
                <NavItem>
                    <NavLink on:click={toggle} href="#/">Inicio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink on:click={toggle} href="#/series">Series</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink on:click={toggle} href="#/changelog">Changelog</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
</main>
