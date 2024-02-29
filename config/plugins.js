module.exports = ({ env }) => ({
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::acquisition.acquisition',
          draft: {
            url: `${env('WEBSITE_BASE_URL')}api/draft`,
            query: {
              slug: '{locale},acquisition,{carrier}',
              secret: env('DRAFT_SECRET'),
            },
            openTarget: '_blank',
          },
          published: {
            url: `${env('WEBSITE_BASE_URL')}{locale}/landing/acquisition/{carrier}`,
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
              slug: '{locale},acquisition-multi-carrier',
              secret: env('DRAFT_SECRET'),
            },
            openTarget: '_blank',
          },
          published: {
            url: `${env('WEBSITE_BASE_URL')}{locale}/landing/acquisition-multi-carrier`,
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
