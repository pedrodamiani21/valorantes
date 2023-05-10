<template>
    <section class="match-section set-bg"
        data-setbg="https://esports.srxwebdesign.com/frontend/assets/img/match/match-bg.jpg"
        style="background-image: url(&quot;https://esports.srxwebdesign.com/frontend/assets/img/match/match-bg.jpg&quot;);">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ms-content">
                        <h4>Partidas em  Andamento</h4>
                   
                        <div v-for="item, i in items.inProgress" class="mc-table">
                            

                            <table>
                                <tbody>
                                    <tr>
                                        <td class="left-team">
                                           
                                            <img :src="item.match?.teams[0]?.icon" alt="team a">
                                            <h6>{{ item.match?.teams[0]?.name }}</h6>
                                        </td>
                                        <td class="mt-content">
                                            <div class="mc-op">{{ item.local }}</div>
                                            <h4>{{ item.match?.teams[0]?.game_wins }} : {{ item.match?.teams[1]?.game_wins }}
                                            </h4>
                                            <div class="mc-op">{{item.date.split('T')[0].split('-').reverse().join('/')}}</div>
                                            <div class="mc-op">{{item.league.name}}</div>
                                        </td>
                                        <td class="right-team">
                                            <img :src="item.match?.teams[1]?.icon" alt="team b">
                                            <h6>{{ item.match?.teams[1]?.name }}</h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="ms-content">
                        <h4>Próximas partidas</h4>
                        <div v-for="item, i in items.unstarted.slice(0, limit)" class="mc-table">

                            <table>
                                <tbody>
                                    <tr>
                                        <td class="left-team">
                                         <img :src="item.match?.teams[0]?.icon" alt="team a">
                                            <h6>{{ item.match?.teams[0]?.name }}</h6>
                                        </td>
                                        <td class="mt-content">
                                            <div class="mc-op">{{ item.local }}</div>
                                            <h4> : 
                                            </h4>
                                            <div class="mc-op">{{item.date.split('T')[0].split('-').reverse().join('/')}}</div>
                                            <div class="mc-op">{{item.league.name}}</div>
                                        </td>
                                        <td class="right-team">
                                            <img :src="item.match?.teams[1]?.icon" alt="team b">
                                            <h6>{{ item.match?.teams[1]?.name }}</h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="ms-content">
                        <h4>Resultados Recentes</h4>

                        <div v-for="item, i in items.completed.slice(0, limit)" class="mc-table">
                          

                            <table>
                                {{ item.length }}
                                <tbody>
                                    <tr>
                                        <td class="left-team">
                                            <img :src="item.match?.teams[0].icon" alt="team a">
                                            <h6>{{ item.match?.teams[0].name }}</h6>
                                        </td>
                                        <td class="mt-content">
                                            <div class="mc-op">{{ item.local }}</div>
                                            <h4>{{ item.match?.teams[0].game_wins }} : {{ item.match?.teams[1].game_wins }}
                                            </h4>
                                             <div class="mc-op">{{item.date.split('T')[0].split('-').reverse().join('/')}}</div>
                                             <div class="mc-op">{{item.league.name}}</div>
                                        </td>
                                        <td class="right-team">
                                            <img :src="item.match?.teams[1].icon" alt="team b">
                                            <h6>{{ item.match?.teams[1].name }}</h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div v-if="limit > 0" class="col-lg-12">
                    <div class="ms-content text-center mt-3">
                        <v-btn @click="$router.push('/partidas')" class="btn btn-danger">Ver mais...</v-btn>
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
        items: {completed: [], inProgress: [], unstarted: []},
    }),
    props: {
        limit: String
    },
    async created() {
        await this.getMatchs();

    },
    methods: {
        async getMatchs() {
            let response = await axios.get("https://api.henrikdev.xyz/valorant/v1/esports/schedule");
            console.log(response)
            response = response.data.data;
          console.log(response.length)
            for(let i = 0; i < response.length; i++){
               if(response[i].state.includes('completed')){
                this.items?.completed.push(response[i]);
               }
               if(response[i].state.includes('inProgress')){
                this.items?.inProgress.push(response[i]);
               }
               if(response[i].state.includes('unstarted')){
                this.items?.unstarted.push(response[i]);
               }

            }

        }
    }
}
</script>