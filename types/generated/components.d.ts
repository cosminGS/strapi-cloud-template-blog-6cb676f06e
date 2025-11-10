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

export interface ElementsQuestion extends Struct.ComponentSchema {
  collectionName: 'components_elements_questions';
  info: {
    displayName: 'question';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsStep extends Struct.ComponentSchema {
  collectionName: 'components_elements_steps';
  info: {
    displayName: 'step';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'quote';
  };
  attributes: {
    author: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
  };
}

export interface ElementsUsp extends Struct.ComponentSchema {
  collectionName: 'components_elements_usps';
  info: {
    displayName: 'usp';
    icon: 'thumbUp';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
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
    label: Schema.Attribute.String;
    linkList: Schema.Attribute.Component<'navigation.link', true>;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'bulletList';
  };
  attributes: {
    background: Schema.Attribute.Component<'shared.background', false>;
    heading: Schema.Attribute.String;
    hideSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    questions: Schema.Attribute.Component<'elements.question', true>;
    subHeading: Schema.Attribute.String;
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
    hideSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<'images'>;
    imageFirst: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    displayName: 'Richtext';
    icon: 'pencil';
  };
  attributes: {
    background: Schema.Attribute.Component<'shared.background', false> &
      Schema.Attribute.Required;
    buttons: Schema.Attribute.Component<'elements.button', true>;
    content: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    hideSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subHeading: Schema.Attribute.String;
    textAlign: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
  };
}

export interface SectionsStepper extends Struct.ComponentSchema {
  collectionName: 'components_sections_steppers';
  info: {
    displayName: 'Stepper';
    icon: 'stack';
  };
  attributes: {
    background: Schema.Attribute.Component<'shared.background', false> &
      Schema.Attribute.Required;
    buttons: Schema.Attribute.Component<'elements.button', true>;
    heading: Schema.Attribute.String;
    hideSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    steps: Schema.Attribute.Component<'elements.step', true>;
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
    hideSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subHeading: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'elements.testimonial', true>;
  };
}

export interface SectionsUsPs extends Struct.ComponentSchema {
  collectionName: 'components_sections_us_ps';
  info: {
    displayName: 'USP';
    icon: 'thumbUp';
  };
  attributes: {
    background: Schema.Attribute.Component<'shared.background', false> &
      Schema.Attribute.Required;
    buttons: Schema.Attribute.Component<'elements.button', true>;
    containerBackground: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    desktopColumns: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    heading: Schema.Attribute.String;
    hideSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
    uspContainer: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    usps: Schema.Attribute.Component<'elements.usp', true>;
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
    wavyBottom: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    wavyTop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
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
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.button': ElementsButton;
      'elements.logo': ElementsLogo;
      'elements.question': ElementsQuestion;
      'elements.step': ElementsStep;
      'elements.testimonial': ElementsTestimonial;
      'elements.usp': ElementsUsp;
      'navigation.link': NavigationLink;
      'navigation.link-list': NavigationLinkList;
      'sections.faq': SectionsFaq;
      'sections.hero': SectionsHero;
      'sections.rich-text': SectionsRichText;
      'sections.stepper': SectionsStepper;
      'sections.testimonials': SectionsTestimonials;
      'sections.us-ps': SectionsUsPs;
      'shared.background': SharedBackground;
      'shared.seo': SharedSeo;
    }
  }
}
