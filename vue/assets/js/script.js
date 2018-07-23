let hi = {
    el: "#test",
    data: {
        firstName: "Shakil",
        lastName: "Ahmed",
        siteName: "Facebook",
        siteURL: "http://www.facebook.com",
        markUp: '<i>my name is <span style="color: red">shakil</span></i>',
        year: 15,
        input: 20
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
        },
        input: function(){
            console.log('You entered a number');
        }
    }
}

let obj = new Vue(hi);

console.log(obj.$data);