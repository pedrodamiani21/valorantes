<template>
    <div>
        <div class="row mt-5">
            <div class="col-lg-12 p-0 text-center mt-2">
                <h3 class="title">Todas as Postagens...</h3>
                <div @click="toggleListening">{{ listening ? 'Parar' : 'Ouvir' }}</div>

                <p>{{ transcript }}</p>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            recognition: null,
            listening: false,
            transcript: '',
        };
    },
    mounted() {

        // inicializa o reconhecimento de voz quando o componente é montado
        this.recognition = new window.webkitSpeechRecognition();
        this.recognition.lang = 'pt-BR';
        
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;
        this.recognition.addEventListener('result', (event) => {

            const last = event.results.length - 1;
            this.transcript = event.results[last][0].transcript;
            if (this.transcript.toLowerCase().includes('cadastr')) {
                if (this.transcript.includes('equipe') || this.transcript.includes('time')) {
                    console.log('Cadastrar Time')
                    alert("Cadastrar Equipe");
                }
                if (this.transcript.includes('partida')) {
                    alert("Cadastrar Partida");
                }
            }
            if (this.transcript.toLowerCase().includes('quem é o pai')) {


                alert("o Bad");

            }
        });
        this.recognition.addEventListener("error", (event) => {
            console.error(`Speech recognition error detected: ${event.error}`);
        });

        this.recognition.addEventListener('end', () => {
            if (this.listening) {
                this.recognition.start();
            }
        });

        this.recognition.start();
        this.listening = true;
    },
    beforeDestroy() {
        // para o reconhecimento de voz quando o componente é destruído
        this.recognition.stop();
    },
    methods: {
        toggleListening() {
            this.listening = !this.listening;
            if (!this.listening) {
                this.recognition.stop();
            }
        },
    },
};
</script>