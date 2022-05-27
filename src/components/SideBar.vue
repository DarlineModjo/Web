<template>
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
            <div class="nav">
                <router-link class="nav-link" to="/">
                    <div class="sb-nav-link-icon">
                        <i class="fas fa-home"></i>
                    </div>
                    Accueil
                </router-link>
                <router-link class="nav-link" to="/products">
                    <div class="sb-nav-link-icon">
                        <i class="fas fa-product-hunt"></i>
                    </div>
                    Produits
                </router-link>
                <router-link class="nav-link" to="/services">
                    <div class="sb-nav-link-icon">
                        <i class="fa-solid fa-hand-holding"></i>
                    </div>
                    Services
                </router-link>

                <div class="sb-sidenav-menu-heading">Authentification</div>
                <div class="d-flex align-items-center">
                    <router-link class="nav-link" to="/login">
                        Connexion
                    </router-link>
                    <span>|</span>
                    <router-link class="nav-link" to="/register">
                        Inscription
                    </router-link>
                    
                </div>
                
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'SideBar'
    }
</script>
