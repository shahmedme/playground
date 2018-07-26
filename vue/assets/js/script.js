let hi = {
    el: "#test",
    data: {
        firstName: "John",
        lastName: "Doe",
        siteName: "Facebook",
        siteURL: "http://www.facebook.com",
        markUp: '<i>my name is <span style="color: red">shakil</span></i>',
        year: 15,
        seen: true,
        todos: [
            {text: 'learn javascript'},
            {text: 'learn vue'},
            {dat: 'build awesome apps'},
            {text: 'be great'}
        ],
        imgLink: "https://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg"
    },
    methods: {
        fullName: function(){
            return this.firstName + " " + this.lastName;
        },
        getLink: function(){
            let ln = prompt('Enter the link');
            return ln;
        },
        add: function(){
            this.year++;
        },
        sub: function(){
            this.year--;
        }
    }
}

let obj = new Vue(hi);

Vue.component('todo-item', {
    template: '<li>this is todo item</li>'
});


Vue.component('button-counter', {
    template: '<li>hi</li>'
  })


new Vue({el: '#app'});
new Vue({ el: '#components-demo' })
