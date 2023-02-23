import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    // badge: {
    //   color: 'info',
    //   text: 'NEW'
    // }
  },
 
  {
    name: 'User Management',
    url: '/base',
    iconComponent: { name: 'cil-pencil' },
    children: [
      {
        name: 'All Users',
        url: '/users/manage'
      },
      {
        name: 'Admin Users',
        url: '/users/manage'
      },
      {
        name: 'Personell',
        url: '/users/profiles'
      },
    ]
  },
  {
    name: 'Company Management',
    url: '/base',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Companies',
        url: '/companies/manage'
      }
    ]
  },
  {
    name: 'Audit Management',
    url: '/base',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Audit Process',
        url: '/auditing/process'
      }
    ]
  },
  
];
