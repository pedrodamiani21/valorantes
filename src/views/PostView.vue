<template>

    <div class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">

                    <div class="col-lg-12 p-0 mt-2">
                        <h3 class="title">{{ post.title }}</h3>
                        <div class="card-image text-center">

                            <img width="600" class="img-fluid" :src="post.url_img">

                        </div>
                    </div>
                    <div class="blog-category mb-2 mt-4">
                        Categoria:&nbsp;
                        <span class="badge badge-danger">{{ post.category }}</span>
                    </div>
                    <p>{{ post.description }}</p>

                    

                </div>
             
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'PostView',  
    metaInfo: {
    title: 'Valorantes',
    meta: [
      {
        property: 'og:url',
        content: 'https://exemplo.com/pagina'
      },
      {
        property: 'og:image',
        content: 'https://exemplo.com/imagem.jpg'
      },
      {
        property: 'og:title',
        content: 'Título personalizado'
      }
    ]
  },
    components: {

    },
    data: () => ({
        post: {}
    }),
    async created() {
        if (this.$route.params.id) {
            await this.getPost(this.$route.params.id);
        }
        else {
            this.$router.push('/blog');
        }

    },
    methods: {
        async getPost(req) {

            let data = await axios.get(`https://api.valorantes.com.br/posts/get/${req}`);
            this.post = data.data.data;

        }
    }
}
</script>
