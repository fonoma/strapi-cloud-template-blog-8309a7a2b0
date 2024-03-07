module.exports = ({ env }) => ({
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::acquisition.acquisition',
          draft: {
            url: `${env('WEBSITE_BASE_URL')}api/draft`,
            query: {
              path: '{path}',
              secret: env('DRAFT_SECRET')
            },
            openTarget: '_blank',
          },
          published: {
            url: `${env('WEBSITE_BASE_URL')}{path}`,
            query: {
            },
            openTarget: '_blank',
          },
        },
        {
          uid: 'api::acquisition-multi-carrier.acquisition-multi-carrier',
          draft: {
            url: `${env('WEBSITE_BASE_URL')}api/draft`,
            query: {
              path: '{path}',
              secret: env('DRAFT_SECRET')
            },
            openTarget: '_blank',
          },
          published: {
            url: `${env('WEBSITE_BASE_URL')}{path}`,
            query: {
            },
            openTarget: '_blank',
          },
        },
        {
          uid: 'api::disable-draft-mode.disable-draft-mode',
          draft: {
            url: `${env('WEBSITE_BASE_URL')}api/{slug}`,
            openTarget: '_blank',
          },
          published: {
            url: `${env('WEBSITE_BASE_URL')}api/{slug}`,
            openTarget: '_blank',
          },
        },
      ],
    },
  },
})
