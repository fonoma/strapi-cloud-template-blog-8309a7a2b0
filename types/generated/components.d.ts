import type { Schema, Attribute } from '@strapi/strapi';

export interface LandingUiCarrierData extends Schema.Component {
  collectionName: 'components_landing_ui_carrier_data';
  info: {
    displayName: 'carrier_data';
    icon: 'phone';
  };
  attributes: {
    name: Attribute.Enumeration<['net10-wireless', 'lyca-mobile', 't-mobile']> &
      Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
  };
}

export interface LandingUiCarrierPlan extends Schema.Component {
  collectionName: 'components_landigs_ui_carrier_plans';
  info: {
    displayName: 'carrier_plan';
    icon: 'handHeart';
    description: '';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    logo: Attribute.Media & Attribute.Required;
    old_price: Attribute.Integer;
    new_price: Attribute.Integer & Attribute.Required;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'landing-ui.carrier-data': LandingUiCarrierData;
      'landing-ui.carrier-plan': LandingUiCarrierPlan;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
