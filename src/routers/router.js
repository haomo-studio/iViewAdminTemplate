const routers = {
  '/': {
    component(resolve) {
      require(['../views/layout.vue'], resolve);
    },

    subRoutes: {
      '/ui': {
        component: {
          template: '<router-view></router-view>'
        },
        
        subRoutes: {
          'form': {
            component(resolve){
              require(['../views/ui/form.vue'], resolve)
            }
          }
        }
      }
    }
  }
};
export default routers;