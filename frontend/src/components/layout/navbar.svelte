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
    <Navbar color="dark" dark class="bg-black d-flex justify-content-start align-items-center" expand="md">
        <img
            class="me-2 ms-2 "
            src="/favicon.png"
            width="25rem"
            height="auto"
            alt=""
        />
        <NavbarBrand href="#/" class="me-2 p-0 ">Ezra Abarca</NavbarBrand>
        <NavbarToggler  on:click={toggle} class="me-2 pt-0 pb-0" />
        <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
            <Nav navbar>
                <NavItem class="me-2" > 
                    <NavLink class="p-0" on:click={toggle} href="#/">Inicio</NavLink>
                </NavItem>
                <NavItem class="me-2" >
                    <NavLink class="p-0" on:click={toggle} href="#/series">Series</NavLink>
                </NavItem>
                <NavItem class="me-2" >
                    <NavLink class="p-0" on:click={toggle} href="#/changelog">Changelog</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
</main>
