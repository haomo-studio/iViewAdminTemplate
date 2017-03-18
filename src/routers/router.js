const routers = {
    '/index': {
        component(resolve) {
            require(['../views/index.vue'], resolve);
        }
    }
};
export default routers;