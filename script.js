'use strict'

new Vue({
    el: '#app',
    data: {
        mailGenerata: null,
        arrayMail: [],
        contatore: 0,
        cicloFinito: false,
    },
    methods: {
        randomMail() {
            this.arrayMail = []
            for (let i = 0; i < 10; i++) {

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((risultato) => {
                    this.mailGenerata = risultato.data.response
                    this.arrayMail.push(this.mailGenerata)
                    this.controlloLista()
                })
            }
        },
        controlloLista() {
            if (this.arrayMail.length === 10) {
                this.cicloFinito = true
            }
        }
    },
})




/*
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/