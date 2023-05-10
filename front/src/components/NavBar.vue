<template>
    <header>
        <nav class="navbar navbar-expand-lg fixed-top navbar-transparent " color-on-scroll="100">
            <div class="container">
                <div class="navbar-translate">
                    <a class="navbar-brand" href="/">
                        <span>Valorantes</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                        aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-bar bar1">s</span>
                        <span class="navbar-toggler-bar bar2"></span>
                        <span class="navbar-toggler-bar bar3"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse justify-content-end" id="navigation">
                    <div class="navbar-collapse-header">
                        <div class="row">
                            <div class="col-6 collapse-brand">
                                <a>
                                    <span>Valorantes</span>
                                </a>
                            </div>
                            <div class="col-6 collapse-close text-right">
                                <button type="button" class="navbar-toggler" data-toggle="collapse"
                                    data-target="#navigation" aria-controls="navigation-index" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <i class="tim-icons icon-simple-remove"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <ul class="navbar-nav">
                        <li v-for="item, i in menu" class="nav-item p-0"><btn @click="$router.push(item.url)" class="nav-link" >{{item.title}}</btn></li>
                       
                    </ul>
                </div>
            </div>
            
        </nav>
        
    </header>
</template>
<script>
export default {
    name: 'NavBar',
    data: () => ({
        test: 1,
        menu: [{ title: "Início", url: "/" }, { title: "Blog", url: "/blog" }, { title: "Partidas", url: "/partidas" }],
        items: ""
    })
}
</script>