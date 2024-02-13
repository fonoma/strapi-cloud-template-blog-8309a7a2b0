module.exports = ({ env }) => ({
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::landing.acquisition',
          draft: {
            url: `${env('WEBSITE_BASE_URL')}api/draft`,
            query: {
              slug: '{lang},{type},{carrier.name}',
              secret: env('DRAFT_SECRET'),
              design: '{design}',
            },
          },
          published: {
            url: `${env('WEBSITE_BASE_URL')}{lang}/landing/{type}/{carrier.name}`,
            query: {
              design: '{design}',
            }
          },
        },
      ],
    },
  },
})
