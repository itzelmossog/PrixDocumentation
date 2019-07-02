module.exports = {
    title: 'Summer Practices',
    description : 'This is a great tool',
    palette : {
        $accentColor : '#0033a0',
        $textColor : '#333',
        $borderColor : '#003078',
        $codeBgColor : '#282c34'
    },
    themeConfig:{
        logo: '/assets/img/logo.png',
      nav:[
        {text: 'Home', link: '/'},
        {text: 'Components', link: '../components/'},
        {text: 'Team', link: '../team/'},
      ],
      sidebar: {
          '/components/' : getcomponentsSidebar()
      },
    },
};

function getcomponentsSidebar(){
    return [
        {
            'title': 'Web Components',
            'collapsable' : false,
            children: [
                'Directory',
                'drawer',
                'modal',
                'SideMenu'
            ]
        },
    ];
}