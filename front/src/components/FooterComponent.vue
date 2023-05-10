<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h1 class="title">Valorantes</h1>
                </div>
                <div class="col-md-3">
                    <ul class="nav">
                        <li class="nav-item">
                            <a @click="$router.push('/')" class="nav-link">
                                Início
                            </a>
                        </li>
                        <li class="nav-item">
                            <a @click="$router.push('/blog')" class="nav-link">
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <ul class="nav">
                        <li class="nav-item"><a class="nav-link" href="#">Políticas de Privacidade</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Termos &amp; Condições</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#">Contato</a></li>

                    </ul>
                </div>
                <div class="col-md-3">
                    <h3 class="title">Acompanhe nossas redes sociais:</h3>
                    <div class="btn-wrapper profile">
                        <a target="_blank" href="#" class="btn btn-icon btn-neutral btn-round btn-simple">
                           <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png">
                        </a>
                        <a target="_blank" href="#" class="btn btn-icon btn-neutral btn-round btn-simple">
                           <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png">
                        </a>
                        <a target="_blank" href="#" class="btn btn-icon btn-neutral btn-round btn-simple">
                           <img src="https://cdn-icons-png.flaticon.com/512/3116/3116491.png">
                        </a>
                        <a target="_blank" href="#" class="btn btn-icon btn-neutral btn-round btn-simple">
                           <img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png">
                        </a>
                        <a target="_blank" href="#" class="btn btn-icon btn-neutral btn-round btn-simple">
                           <img src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'FooterComponent',

}
</script>