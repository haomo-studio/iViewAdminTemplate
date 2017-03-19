const routers = {
    '/': {
        component(resolve) {
            require(['../views/layout.vue'], resolve);
        }
    }
};
export default routers;