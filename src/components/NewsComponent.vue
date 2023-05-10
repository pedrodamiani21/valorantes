<template>
    <section class="latest-news-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 p-0">
                    <h3 class="title">Novas Postagens...</h3>
                    <hr class="line-danger">
                </div>
            </div>
            <div class="row">
                <div v-for="post, i in items" class="col-lg-3 col-sm-6 p-0">
                    <div @click="$router.push(`/blog/${post.id}/${post.titleFormated}`)" v-if="i < 4" :key="i"
                        class="latest-news-item set-bg" :style="{ 'background-image': 'url(' + post.url_img + ')' }">
                        <div class="si-tag">{{ post.category }}</div>
                        <div class="si-text">
                            <h5><a>{{ post.title }}</a></h5>
                            <ul class="m-0 p-0">
                                <li><i class="fa fa-calendar"></i> {{ post.author }}</li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios';
export default {
    name: 'MatchComponent',
    data: () => ({
    items: []
  }),
  async created() {
    await this.getPosts();
  },
  methods: {
    async getPosts() {
      console.log('entrei')
      let data = await axios.get("https://api.valorantes.com.br/posts/get");
      this.items = data.data.data;
      for(let i = 0; i < this.items.length; i++){
                this.items[i].titleFormated = this.items[i].title.split(" ").join('-');
            }
    }
  }
}

</script>