import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    icon: 'link';
  };
  attributes: {
    inNewTab: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    variant: Schema.Attribute.Enumeration<['text', 'contained', 'outlined']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface ElementsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'quote';
  };
  attributes: {
    Author: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
    Text: Schema.Attribute.Text;
  };
}

export interface NavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    inNewTab: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    path: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationLinkList extends Struct.ComponentSchema {
  collectionName: 'components_navigation_link_lists';
  info: {
    displayName: 'LinkList';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    linkList: Schema.Attribute.Component<'navigation.link', true>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'star';
  };
  attributes: {
    background: Schema.Attribute.Component<'shared.background', false> &
      Schema.Attribute.Required;
    buttons: Schema.Attribute.Component<'elements.button', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageFirst: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'quote';
  };
  attributes: {
    background: Schema.Attribute.Component<'shared.background', false> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'elements.testimonial', true>;
  };
}

export interface SharedBackground extends Struct.ComponentSchema {
  collectionName: 'components_shared_backgrounds';
  info: {
    displayName: 'background';
    icon: 'brush';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    transparent: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.button': ElementsButton;
      'elements.logo': ElementsLogo;
      'elements.testimonial': ElementsTestimonial;
      'navigation.link': NavigationLink;
      'navigation.link-list': NavigationLinkList;
      'sections.hero': SectionsHero;
      'sections.testimonials': SectionsTestimonials;
      'shared.background': SharedBackground;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
    }
  }
}
