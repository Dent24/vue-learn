Vue.component('todo-item', {
    template: '<li>{{ title }} - {{ num }}</li>',
    props: {
        title: String,
        num: Number
    }
})

var app = new Vue({
    el: '#app',
    data() {
        return {
            message: 'Hello',
            todoList: [
                {
                    title: 'Apple',
                    num: 2
                },
                {
                    title: 'Orenge',
                    num: 2
                },
                {
                    title: 'Guava',
                    num: 2
                }
            ]
        }
    }
})