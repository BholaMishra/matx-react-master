export const navigations = [
    
    
    
    {
        name: 'Dashboard',
        path: '/dashboard/default',
        icon: 'dashboard',
    },

    {
        name: 'Sign in',
        iconText: 'SI',
        path: '/session/signin',
    },
    {
        name: 'Sign up',
        iconText: 'SU',
        path: '/session/signup',
    },
    {
        name: 'Contacts',
        icon: 'people-fill',
        badge: { value: '30+', color: 'secondary' },
        children: [
            {
                name: 'Contacts',
                path: '/material/autocomplete',
                iconText: 'people-fill',
                    //   <Icon> people-fill </Icon>
                            /* <i class="bi bi-people-fill"></i> */
            },
            {
                name: 'Add Contacts',
                path: '/material/buttons',
                iconText: 'person-plus-fill',
                //  <Icon> person-plus-fill </Icon>
                            /* <i class="bi bi-person-plus-fill"></i> */
            },
        ],
    },
       
    {
        name: 'Profile Setting',
        icon: 'settings',
        // type: 'extLink',
        // path: '/material/checkbox',
        path: '/material/icons',
    },
    {
        name: 'Logout',
        icon: 'power_settings_new',
        type: 'extLink',
        // path: '/session/signin',
        path: 'Running Windows Network Diagnostics',
        // pathII: 'signout',
    },
]
