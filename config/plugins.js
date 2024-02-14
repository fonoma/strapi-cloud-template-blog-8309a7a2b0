module.exports = ({ env }) => ({
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::landing-acquisition.landing-acquisition',
          draft: {
            url: `${env('WEBSITE_BASE_URL')}api/draft`,
            query: {
              slug: '{locale},acquisition,{carrier}',
              secret: env('DRAFT_SECRET'),
              design: '{design}',
            },
            openTarget: '_blank',
          },
          published: {
            url: `${env('WEBSITE_BASE_URL')}{locale}/landing/acquisition/{carrier}`,
            query: {
              design: '{design}',
            },
            openTarget: '_blank',
          },
        },
      ],
    },
  },
})
