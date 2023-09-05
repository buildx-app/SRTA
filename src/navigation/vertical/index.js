const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: 'tabler:layout-dashboard',
      path: '/dashboard'
      // badgeContent: 'new',
      // badgeColor: 'error',
      // children: [
      //   {
      //     title: 'Analytics',
      //     path: '/dashboards/analytics'
      //   },
      //   {
      //     title: 'CRM',
      //     path: '/dashboards/crm'
      //   },
      //   {
      //     title: 'eCommerce',
      //     path: '/dashboards/ecommerce'
      //   }
      // ]
    },

    {
      title: 'Users',
      icon: 'basil:user-outline',
      path: '/users'
    },
    {
      title: 'Exams',
      icon: 'healthicons:i-exam-multiple-choice-outline',
      path: '/exams'
    },
    {
      title: 'Questionnaires',
      icon: 'wpf:ask-question',
      path: '/questionnaires'
    },
    {
      title: 'Lookups',
      icon: 'tabler:search',
      path: '/lookups'
    },
    {
      title: 'Procedures',
      icon: 'tabler:settings',
      path: '/procedures'
    },
    {
      title: 'Sections',
      icon: 'tabler:chart-pie',
      path: '/sections'
    },
    {
      title: 'Categories',
      icon: 'tabler:category',
      path: '/categories'
    }
  ]
}

export default navigation
