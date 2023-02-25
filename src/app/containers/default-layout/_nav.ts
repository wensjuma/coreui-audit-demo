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
        url: '/users/manage'
      },
      {
        name: 'Profiles',
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
  {
    name: 'Customer Relations',
    url: '/base',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Feedbacks',
        url: '/relations/feedback'
      },
      {
        name: 'Surveys',
        url: '/relations/surveys'
      },
      {
        name: 'Complains',
        url: '/relations/complains'
      }
    ]
  },
  {
    name: 'Management',
    url: '/base',
    iconComponent: { name: 'cil-calculator' },
    children: [
      {
        name: 'Management minutes',
        url: '/management/minutes'
      },
      {
        name: ' Management findings',
        url: '/management/findings'
      },
      {
        name: 'Risk Analysis',
        url: '/management/risk'
      }
    ]
  },
  {
    name: 'Reports',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Compliance Audits',
        url: '/reports/c-audits'
      },
      {
        name: 'Activity Audit reports',
        url: '/reports/activity-audit'
      },
      {
        name: 'Survey Analysis',
        url: '/reports/survey/analysis'
      }
    ]
  },
  {
    name: 'Settings',
    url: '/base',
    iconComponent: { name: 'cil-settings' },
    children: [
      {
        name: 'Parameters',
        url: '/settings/audit-params'
      },
      {
        name: 'Counties',
        url: '/settings/counties'
      },
      {
        name: 'Towns',
        url: '/settings/towns'
      },
      {
        name: 'Notifications',
        url: '/settings/notifications'
      }
    ]
  }
];
