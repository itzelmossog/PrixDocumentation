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
        {text: 'Components', link: '../prix-components/'},
        {text: 'Team', link: '../team/'},
      ],
      sidebar: {
          '/prix-components/' : getcomponentsSidebar()
      },
    },
    head: [
        [
            'script', {
                src: 'https://unpkg.com/prixcomponents@latest/dist/prixcomponents/prixcomponents.js'
            }
        ],
        [
            'link', {
                href: 'https://use.fontawesome.com/releases/v5.7.0/css/all.css'
            }
        ],
        [
            'link', {
                href: '//fonts.googleapis.com/css?family=Ubuntu'
            }
        ],
        [
            'script',{
                src: 'https://unpkg.com/axios/dist/axios.min.js'
            }
        ]
    ]
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