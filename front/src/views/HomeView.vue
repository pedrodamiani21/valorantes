<template>
  <div class="home">
    <section class="hero-section set-bg" data-setbg="assets/img/bg.png"
      :style="{ 'background-image': 'url(' + require('@/assets/img/bg.png') + ')' }">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="hs-item">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="hs-text">
                      <!-- <h4>Valorantes</h4> -->
                      <h2>Tudo sobre Valorant aqui!</h2>
                      <btn @click="$router.push('/blog')" class="btn btn-lg btn-danger">Ver Todas as Postagens...</btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <NewsComponent/>
    <MatchComponent :limit="5"/>

  

  </div>
</template>

<script>
import MatchComponent from '@/components/MatchComponent.vue';
import NewsComponent from '@/components/NewsComponent.vue';
export default {
  name: 'HomeView',
  components: { MatchComponent, NewsComponent
  },
  data:() => ({

  })
  
}
</script>
