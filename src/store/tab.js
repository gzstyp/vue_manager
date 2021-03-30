import el from "element-ui/src/locale/lang/el";
export default {
    state: {
        menu : [],
        currentMenu : {},
        tabsList : [
            {
                url : '/home',
                name : '首页',
                icon : 'el-icon-s-home'
            }
        ],
        listMenus : []
    },
    mutations: {
        setMenu (state,provider){
            state.menu = provider;
            sessionStorage.setItem('menus',JSON.stringify(provider));
        },
        clearMenu (state){
            state.menu = [];
        },
        addMenu(state,router){
            let menus = JSON.parse(sessionStorage.getItem('menus'));
            if(!menus)return;
            state.menu = menus;
            let _currentMenu = [
                {
                    path : '/',
                    component : () => import(`@/views/Main`),
                    children : []
                }
            ]
            for(var index in menus){
                var object = menus[index];
                if(object.children){
                    _currentMenu[0].children.push(object.children);//... 表示展开
                }else{
                    _currentMenu[0].children.push(object);
                }
            }
            console.info(_currentMenu);
            /*menus.forEach(item => {
                if(item.children){
                    console.info(item);
                    item.children = item.children.map(item => {
                        item.component = () => import(`@/views/User`);
                        return item;
                    });
                    _currentMenu[0].children.push(...item.children);//... 表示展开
                }else{
                    item.component = () => import(`@/views/User`);
                    _currentMenu[0].children.push(item);
                }
            });*/
            var routers = [
                {
                    path : '/page1',
                    name : '/page1',
                    component : () => import('@/views/Page1')
                },
                {
                    path : '/page2',
                    name : '/page2',
                    component : () => import('@/views/Page2')
                },
                {
                    path : '/setting',
                    name : '/setting',
                    component : () => import('@/views/Setting')
                },
                {
                    path : '/video',
                    name : '/video',
                    component : () => import('@/views/Video')
                },
                {
                    path : '/user',
                    name : '/user',
                    component : () => import('@/views/User')
                }
            ]
            state.listMenus = routers;
            //this.$router.options.routes = routes;
            //this.$router.addRoutes(routes);
            router.options.routes = routers;
            router.addRoutes(routers);
        },
        selectMenu(state,provider){
            if(provider.url !== '/home'){
                state.currentMenu = provider;
                let exist = state.tabsList.indexOf(provider);
                if(exist == -1){
                    state.tabsList.push(provider);
                }
            }
        },
        closeTab(state,provider){
            let exist = state.tabsList.findIndex(item => item.url === provider.url);
            console.info(exist);
            state.tabsList.splice(exist,1);
        }
    },
    actions: {
    }
}
