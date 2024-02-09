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
    currency: Attribute.String & Attribute.DefaultTo<'$'>;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'landing-ui.carrier-data': LandingUiCarrierData;
      'landing-ui.carrier-plan': LandingUiCarrierPlan;
      'shared.seo': SharedSeo;
    }
  }
}
