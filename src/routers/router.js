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
          },
          'icons': {
            component(resolve){
              require(['../views/ui/icons.vue'], resolve)
            }
          },
          'buttons': {
            component(resolve){
              require(['../views/ui/buttons.vue'], resolve)
            }
          },
          'layout': {
            component(resolve){
              require(['../views/ui/layout.vue'], resolve)
            }
          },
          'themes': {
            component(resolve){
              require(['../views/ui/themes.vue'], resolve)
            }
          },
          'words': {
            component(resolve){
              require(['../views/ui/words.vue'], resolve)
            }
          }
        }
      }
    }
  }
};
export default routers;