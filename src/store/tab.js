export default {
    state: {
        menu : [],
        currentMenu : {},
        tabsList : [
            {
                url : '/',
                name : '首页',
                icon : 'el-icon-s-home'
            }
        ]
    },
    mutations: {
        selectMenu(state,provider){
            if(provider.url !== '/'){
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
