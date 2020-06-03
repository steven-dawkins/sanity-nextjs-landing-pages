export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed80c292240280226c2c7f5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-e2ecrvy5',
                  apiId: 'abf086ac-d9b2-4ba3-88d1-976e6b71cc93'
                },
                {
                  buildHookId: '5ed80c2a26c7a07abb58e6bb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uf677ewr',
                  apiId: 'c4c6cd4f-be43-4f57-8b35-8f20dfbd7733'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/steven-dawkins/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uf677ewr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
