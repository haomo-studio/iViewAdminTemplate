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
      },

      '/module': {
        component: {
          template: '<router-view></router-view>'
        },

        subRoutes: {
          'cards': {
            component(resolve){
              require(['../views/module/cards.vue'], resolve)
            }
          },
          'chart': {
            component(resolve){
              require(['../views/module/chart.vue'], resolve)
            }
          },
          'map': {
            component(resolve){
              require(['../views/module/map.vue'], resolve)
            }
          },
          'table': {
            component(resolve){
              require(['../views/module/table.vue'], resolve)
            }
          }
        }
      },

      '/page': {
        component: {
          template: '<router-view></router-view>'
        },

        subRoutes: {
          'userAuthentification': {
            component(resolve){
              require(['../views/page/userAuthentification.vue'], resolve)
            }
          },
          'errPage': {
            component(resolve){
              require(['../views/page/errPage.vue'], resolve)
            }
          },
          'userCenter': {
            component(resolve){
              require(['../views/page/userCenter.vue'], resolve)
            }
          }
        }
      },

      '/applications': {
        component: {
          template: '<router-view></router-view>'
        },

        subRoutes: {
          'oa': {
            component(resolve){
              require(['../views/applications/oa.vue'], resolve)
            }
          },
          'eBusiness': {
            component(resolve){
              require(['../views/applications/eBusiness.vue'], resolve)
            }
          }
        }
      }
    }
  }
};
export default routers;