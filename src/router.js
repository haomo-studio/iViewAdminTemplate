const routers = {
    '/index': {
        component(resolve) {
            require(['./views/index.vue'], resolve);
        }
    },

    '/exam/login': {
        component(resolve) {
            require(['./views/exam/login.vue'], resolve);
        }
    },

    '/exam/welcome': {
        component(resolve) {
            require(['./views/exam/welcome.vue'], resolve);
        }
    },

    '/exam/question': {
        component(resolve) {
            require(['./views/exam/question.vue'], resolve);
        }
    },

    '/exam/finish': {
        component(resolve) {
            require(['./views/exam/finish.vue'], resolve);
        }
    }
};
export default routers;