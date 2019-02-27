Vue.component('btn', {
    template: '<button>Click Here</button>'
});

Vue.component('shakil', {
    props: ['designation'],
    template: '<h1>My name is Shakil and I am a {{ designation }}</h1>'
})

Vue.component('navbar', {
    props: ['logo', 'buttonText'],
    template: '<nav class="navbar navbar-dark bg-dark justify-content-between"><div class="container"><a class="navbar-brand text-light">{{ buttonText }}</a><form class="form-inline"><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">{{ logo }}</button></form></div></nav>'
})

let app = new Vue({
    el: '#app',
    data: {
        firstName: 'Jon',
        lastName: 'Doe',
        link: 'http://',
        newWindow: false,
        showLink: true,
        todos: [
            {
                title: 'Rise up early',
                text: 'rs up erly'
            },
            {
                title: 'go to sleep early',
                text: 'go 2 slp erly'
            },
            {
                title: 'math',
                text: 'math hw'
            }
        ],
        word: 'teacher',
        brandName: 'Microsoft',
        link: 'Submit'
    },
    methods: {
        fullName: function(){
            return this.firstName + " " + this.lastName;
        },
        modifyFullName: function(){
            let newFirstName = prompt('Enter the new first name');
            this.firstName = newFirstName;
            let newLastName = prompt('Enter the new second name');
            this.lastName = newLastName;
        },
        reverseWord: function(){
             let rWord = this.word.split('').reverse().join('');
             return rWord;
        },
        btnTextChange: function(){
            alert('hi');
        }
    }
});