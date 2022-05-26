"use strict";
exports.id = 910;
exports.ids = [910];
exports.modules = {

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Xr": () => (/* binding */ getComponent),
  "lF": () => (/* binding */ renderBlocks),
  "ej": () => (/* binding */ renderByContentType)
});

// UNUSED EXPORTS: blockComponents, renderBlock

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./enums/blocks.ts
var blocks = __webpack_require__(236);
;// CONCATENATED MODULE: ./blocks/BlockHeaderBlock.tsx


function BlockHeaderBlock() {
  const props = {
    id: 'cl3hjoncu1byg0cmlbwjlvt9r',
    slug: 'blockHeader',
    image: {
      id: 'cl3hhfmt31b6x0elcf1k8q5cx',
      url: 'https://media.graphassets.com/TXJhVSOISvuB92hWYQAV'
    },
    navigation: {
      id: 'cl3acugwq0dw50amhyih4wm7h',
      pages: [{
        id: 'cl3af7vzt0gl10cmkvpgmd26i',
        slug: 'home',
        title: 'Home'
      }, {
        id: 'cl3aeqteu0fab0amni5m5ay6l',
        slug: 'about',
        title: 'About'
      }],
      slug: 'primaryNavigation',
      title: 'Primary Navigation'
    }
  };
  return getComponent(blocks/* Block.BlockHeader */.g.BlockHeader, props);
}
;// CONCATENATED MODULE: ./blocks/BlockFooterBlock.tsx


function BlockFooterBlock() {
  const props = {
    slug: 'blockFooter',
    image: {
      id: 'cl3hhfmt31b6x0elcf1k8q5cx',
      url: 'https://media.graphassets.com/TXJhVSOISvuB92hWYQAV'
    },
    navigation: {
      id: 'cl3acugwq0dw50amhyih4wm7h',
      slug: 'primaryNavigation',
      title: 'Primary Navigation',
      pages: [{
        id: 'cl3af7vzt0gl10cmkvpgmd26i',
        slug: 'home',
        title: 'Home'
      }, {
        id: 'cl3aeqteu0fab0amni5m5ay6l',
        slug: 'about',
        title: 'About'
      }]
    },
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam debitis odit, quos temporibus possimus iure?',
    socialsHeading: 'Follow us',
    socials: [{
      externalLink: 'https://www.instagram.com/',
      heading: 'Instagram',
      id: 'cl3aclyi10eab0cmkk2748q3n',
      socialIcon: 'instagram'
    }, {
      externalLink: 'https://www.facebook.com/',
      heading: 'Facebook',
      id: 'cl3acnwz20edm0cmke7wb9pdj',
      socialIcon: 'facebook'
    }, {
      externalLink: 'https://www.linkedin.com/',
      heading: 'LinkedIn',
      id: 'cl3acoksp0dc70amn82zjoqwf',
      socialIcon: 'linkedin'
    }, {
      externalLink: 'https://twitter.com/',
      heading: 'Twitter',
      id: 'cl3acpc5a0eep0cmkxxp2la78',
      socialIcon: 'twitter'
    }]
  };
  return getComponent(blocks/* Block.BlockFooter */.g.BlockFooter, props);
}
;// CONCATENATED MODULE: ./blocks/BlockHeroBlock.tsx


function BlockHeroBlock() {
  const props = {
    image: {
      id: '1',
      url: '/images/intro-home.jpg',
      alt: 'alt description'
    },
    heading: {
      html: '<h1>We are about to change the way <br> <i>you publish on the web</i></h1>'
    },
    subheading: 'NEW BRANDING AGENCY',
    overlay: true
  };
  return getComponent(blocks/* Block.BlockHero */.g.BlockHero, props);
}
;// CONCATENATED MODULE: ./blocks/BlockBenefitBlock.tsx


function BlockBenefitBlock() {
  const props = {
    items: [{
      id: 'cl3bu9m2a3cd10cmkpxsbki6b',
      heading: 'PROJECTS COMPLETED',
      subheading: '548',
      image: {
        id: 'cl3fxm5ej0f7e0elca91yru6g',
        url: 'https://media.graphassets.com/g09IWNYySZyGI4obIlH7'
      }
    }, {
      id: 'cl3bua5ba3aka0amhe72g0ils',
      heading: 'WORKING HOURS',
      subheading: '1465',
      image: {
        id: 'cl3fxmqje0fer0bmiajwszdo6',
        url: 'https://media.graphassets.com/grnM444MT7Cdh7t1KTlO'
      }
    }, {
      id: 'cl3buawbt38z20amnu2wkh096',
      heading: 'POSITIVE FEEDBACKS',
      subheading: '612',
      image: {
        id: 'cl3fxnp690f9g0elclfaqs9c2',
        url: 'https://media.graphassets.com/T8fZcmT1iu1uPvIpcAQU'
      }
    }, {
      id: 'cl3bubzfu392u0amny5dw3up5',
      heading: 'HAPPY CLIENTS',
      subheading: '735',
      image: {
        id: 'cl3fxo52u0fge0bmiahziuq67',
        url: 'https://media.graphassets.com/szsMgE2sSTG4AMrMDAq2'
      }
    }]
  };
  return getComponent(blocks/* Block.BlockBenefit */.g.BlockBenefit, props);
}
;// CONCATENATED MODULE: ./blocks/BlockTestimonialBlock.tsx


function BlockTestimonialBlock() {
  const props = {
    items: [{
      id: 'cl3btsz7j3bo00cmk8qzfp9y1',
      author: 'Michael Hopkins',
      text: 'Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.'
    }, {
      id: 'cl3btsz7j3bo00cmk8qzfp9y2',
      author: 'Michael Hopkins',
      text: 'Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.'
    }]
  };
  return getComponent(blocks/* Block.BlockTestimonial */.g.BlockTestimonial, props);
}
;// CONCATENATED MODULE: ./blocks/BlockIntroBannerBlock.tsx


function BlockIntroBannerBlock() {
  const props = {
    image: {
      id: '1',
      url: '/images/intro-home.jpg',
      alt: 'alt description'
    },
    heading: 'About',
    overlay: true
  };
  return getComponent(blocks/* Block.BlockIntroBanner */.g.BlockIntroBanner, props);
}
;// CONCATENATED MODULE: ./blocks/BlockAboutBlock.tsx


function BlockAboutBlock_BlockHeaderBlock() {
  const props = {
    id: 'cl3hjoncu1byg0cmlbwjlvt9r',
    slug: 'blockAbout',
    heading: '',
    subheading: '',
    image: {
      id: 'cl3hhfmt31b6x0elcf1k8q5cx',
      url: 'https://media.graphassets.com/TXJhVSOISvuB92hWYQAV'
    }
  };
  return getComponent(blocks/* Block.BlockHeader */.g.BlockHeader, props);
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(3);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/theme/plain/Container.tsx




function Container({
  children,
  className,
  containerWidth
}) {
  const containerWidthVariant = external_classnames_default()({
    'container--medium': containerWidth === 'medium',
    'container--large': containerWidth === 'large'
  });
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `container ${containerWidthVariant} ${className ? className : ''}`,
    children: children
  });
}

/* harmony default export */ const plain_Container = (Container);
;// CONCATENATED MODULE: ./components/theme/plain/Image.tsx


function Image({
  image,
  className
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `image-block ${className ? className : ''}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: image.url,
      alt: image.alt && 'image description',
      width: image.width && '',
      height: image.height && '',
      className: "image-block__image"
    })
  });
}
;// CONCATENATED MODULE: ./components/theme/plain/Layout/Navigation.tsx




function Navigation({
  navigation,
  className
}) {
  const pages = navigation.pages || [];
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: `navigation ${className}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "navigation__list list-reset",
      children: pages && pages.length ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: pages.map(page => /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "navigation__item",
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: page.slug === 'home' ? '/' : `/${page.slug}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "navigation__link",
              children: page.title
            })
          })
        }, page.id))
      }) : null
    })
  });
}
;// CONCATENATED MODULE: ./components/theme/plain/Grid/Row.tsx


function Row({
  className,
  children,
  alignItems,
  justify
}) {
  const mediaClasses = (justify ? `${justify}` : '') + (alignItems ? ` ${['align-' + alignItems]}` : '');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `row ${mediaClasses} ${className ? className : ''}`,
    children: children
  });
}
;// CONCATENATED MODULE: ./components/theme/plain/Grid/Col.tsx


function Col({
  className,
  children,
  base,
  sm,
  md,
  lg,
  xl
}) {
  const mediaClasses = (base ? ` ${['base-' + base]}` : '') + (sm ? ` ${['sm-' + sm]}` : '') + (md ? ` ${['md-' + md]}` : '') + (lg ? ` ${['lg-' + md]}` : '') + (xl ? ` ${['xl-' + lg]}` : '');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `col ${mediaClasses} ${className ? className : ''}`,
    children: children
  });
}
;// CONCATENATED MODULE: ./components/theme/plain/Layout/Header.tsx









function Header({
  slug,
  image,
  navigation
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "header",
    children: /*#__PURE__*/jsx_runtime_.jsx(plain_Container, {
      className: "header__container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row, {
        alignItems: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Col, {
          base: 4,
          md: 3,
          children: image && image.url ? /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "header__logo-link",
              children: /*#__PURE__*/jsx_runtime_.jsx(Image, {
                image: image,
                className: "header__logo"
              })
            })
          }) : null
        }), /*#__PURE__*/jsx_runtime_.jsx(Col, {
          sm: 6,
          md: 9,
          children: /*#__PURE__*/jsx_runtime_.jsx(Navigation, {
            navigation: navigation,
            className: "header-navigation"
          })
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/theme/plain/IcoMoonIcon.tsx



function IcoMoonIcon({
  className,
  icon
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `icomoon-icon ${className ? className : ''}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: icon
    })
  });
}

/* harmony default export */ const plain_IcoMoonIcon = (IcoMoonIcon);
;// CONCATENATED MODULE: ./components/theme/plain/Typography.tsx


function Typography({
  level,
  className,
  text
}) {
  if (level) {
    const Component = level;
    return /*#__PURE__*/jsx_runtime_.jsx(Component, {
      className: `heading ${className ? className : ''}`,
      dangerouslySetInnerHTML: {
        __html: text
      }
    });
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: `text ${className ? className : ''}`,
      children: text
    });
  }
}
;// CONCATENATED MODULE: ./enums/common.ts
let HeadingLevel;

(function (HeadingLevel) {
  HeadingLevel["H1"] = "h1";
  HeadingLevel["H2"] = "h2";
  HeadingLevel["H3"] = "h3";
  HeadingLevel["H4"] = "h4";
  HeadingLevel["H5"] = "h5";
  HeadingLevel["H6"] = "h6";
})(HeadingLevel || (HeadingLevel = {}));

let EnumsIcon;

(function (EnumsIcon) {
  EnumsIcon["Twitter"] = "icon-twitter";
  EnumsIcon["Linkedin"] = "icon-linkedin";
  EnumsIcon["Facebook"] = "icon-facebook";
  EnumsIcon["Instagram"] = "icon-instagram";
})(EnumsIcon || (EnumsIcon = {}));

let ContainerWith;

(function (ContainerWith) {
  ContainerWith["Small"] = "container--small";
  ContainerWith["Medium"] = "container--Medium";
  ContainerWith["Large"] = "container--Large";
})(ContainerWith || (ContainerWith = {}));
;// CONCATENATED MODULE: ./components/theme/plain/Layout/Footer.tsx












function Footer_Header({
  image,
  navigation,
  text,
  socialsHeading,
  socials
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "footer",
    children: /*#__PURE__*/jsx_runtime_.jsx(plain_Container, {
      className: "header__container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row, {
        justify: "space-between",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Col, {
          md: 4,
          children: [image && /*#__PURE__*/jsx_runtime_.jsx(Image, {
            image: image,
            className: "footer__logo"
          }), text && /*#__PURE__*/jsx_runtime_.jsx(Typography, {
            text: text,
            className: "footer__text"
          }), socialsHeading && /*#__PURE__*/jsx_runtime_.jsx(Typography, {
            text: socialsHeading,
            level: HeadingLevel.H6,
            className: "footer__social-heading"
          }), socials && socials.length ? /*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: "social-list list-reset",
            children: socials.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "social-list__item",
              children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: item.externalLink,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "social-list__link",
                  target: "_blank",
                  children: /*#__PURE__*/jsx_runtime_.jsx(plain_IcoMoonIcon, {
                    icon: `icon-${item.socialIcon}`
                  })
                })
              })
            }, item.id))
          }) : null]
        }), /*#__PURE__*/jsx_runtime_.jsx(Col, {
          md: 6,
          children: navigation && /*#__PURE__*/jsx_runtime_.jsx(Navigation, {
            navigation: navigation,
            className: "footer-navigation"
          })
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/theme/plain/BlockHero.tsx







function BlockHero({
  image,
  heading,
  subheading,
  overlay = true
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "block-hero",
    children: [overlay && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "image-absolute-overlay"
    }), /*#__PURE__*/jsx_runtime_.jsx(Image, {
      image: image,
      className: "block-hero__bg-image image-absolute-fill"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(plain_Container, {
      className: "block-hero__container text-align--center",
      children: [subheading && /*#__PURE__*/jsx_runtime_.jsx(Typography, {
        text: subheading,
        className: "block-hero__subheading text-uppercase color-white"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        dangerouslySetInnerHTML: {
          __html: heading.html
        },
        className: "block-hero__heading text-uppercase"
      })]
    })]
  });
}

/* harmony default export */ const plain_BlockHero = (BlockHero);
;// CONCATENATED MODULE: ./components/theme/plain/BlockBenefit.tsx







function BlockBenefit({
  items
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "block-benefits",
    children: /*#__PURE__*/jsx_runtime_.jsx(plain_Container, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Row, {
        children: items.map(benefit => {
          var _benefit$image;

          return /*#__PURE__*/jsx_runtime_.jsx(Col, {
            sm: 6,
            md: 3,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "benefit",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "benefit__icon",
                children: benefit && (_benefit$image = benefit.image) !== null && _benefit$image !== void 0 && _benefit$image.url ? /*#__PURE__*/jsx_runtime_.jsx(Image, {
                  image: {
                    url: benefit.image.url,
                    alt: benefit.heading
                  }
                }) : null
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "benefit__body",
                children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "benefit__count font-semibold",
                  children: benefit.subheading
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "benefit__heading text-uppercase font-semibold",
                  children: benefit.heading
                })]
              })]
            })
          }, benefit.id);
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/theme/plain/Testimonial.tsx



function Testimonial_Image({
  id,
  text,
  author
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("blockquote", {
    className: "testimonial text-align--center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "testimonial__text",
      children: text
    }), /*#__PURE__*/jsx_runtime_.jsx("figcaption", {
      className: "testimonial__author text-uppercase",
      children: author
    })]
  });
}
;// CONCATENATED MODULE: ./components/theme/plain/BlockTestimonial.tsx




function BlockTestimonials({
  className,
  items
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: `block-testimonials ${className ? className : ''}`,
    children: /*#__PURE__*/jsx_runtime_.jsx(plain_Container, {
      containerWidth: "medium",
      className: "block-testimonials__container",
      children: items.map(item => /*#__PURE__*/jsx_runtime_.jsx(Testimonial_Image, {
        author: item.author,
        text: item.text
      }, item.id))
    })
  });
}
;// CONCATENATED MODULE: ./components/theme/plain/BlockIntroBanner.tsx








function BlockIntroBanner({
  image,
  heading,
  overlay = true
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "block-intro-banner",
    children: [overlay && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "image-absolute-overlay"
    }), /*#__PURE__*/jsx_runtime_.jsx(Image, {
      image: image,
      className: "block-intro-banner__bg-image image-absolute-fill"
    }), /*#__PURE__*/jsx_runtime_.jsx(plain_Container, {
      className: "block-intro-banner__container text-align--center",
      children: heading && /*#__PURE__*/jsx_runtime_.jsx(Typography, {
        text: heading,
        level: HeadingLevel.H1,
        className: "block-intro-banner__heading text-uppercase color-white"
      })
    })]
  });
}

/* harmony default export */ const plain_BlockIntroBanner = (BlockIntroBanner);
;// CONCATENATED MODULE: ./components/theme/plain/BlockHeading.tsx






function BlockHeading({
  heading,
  subheading,
  level = HeadingLevel.H2,
  alignContent,
  className
}) {
  const contentAlign = external_classnames_default()({
    'text-align--center': alignContent === 'center',
    'text-align--right': alignContent === 'right'
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `block-heading ${className ? className : ''} ${contentAlign ? contentAlign : ''}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Typography, {
      level: level,
      text: heading
    }), subheading && /*#__PURE__*/jsx_runtime_.jsx(Typography, {
      text: subheading
    })]
  });
}
;// CONCATENATED MODULE: ./components/theme/plain/BlockAbout.tsx









function BlockAbout({
  heading,
  subheading,
  image
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "block-about",
    children: /*#__PURE__*/jsx_runtime_.jsx(plain_Container, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Row, {
        justify: "center",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Col, {
          md: 8,
          children: [/*#__PURE__*/jsx_runtime_.jsx(BlockHeading, {
            heading: heading,
            subheading: subheading,
            level: HeadingLevel.H2,
            alignContent: "center",
            className: "block-about__heading-block"
          }), image && image.url ? /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "block-about__image text-align--center",
            children: /*#__PURE__*/jsx_runtime_.jsx(Image, {
              image: image
            })
          }) : null]
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/theme/plain/index.tsx








const components = [{
  contentType: blocks/* Block.BlockHeader */.g.BlockHeader,
  component: Header
}, {
  contentType: blocks/* Block.BlockFooter */.g.BlockFooter,
  component: Footer_Header
}, {
  contentType: blocks/* Block.BlockHero */.g.BlockHero,
  component: plain_BlockHero
}, {
  contentType: blocks/* Block.BlockBenefit */.g.BlockBenefit,
  component: BlockBenefit
}, {
  contentType: blocks/* Block.BlockTestimonial */.g.BlockTestimonial,
  component: BlockTestimonials
}, {
  contentType: blocks/* Block.BlockIntroBanner */.g.BlockIntroBanner,
  component: plain_BlockIntroBanner
}, {
  contentType: blocks/* Block.BlockAbout */.g.BlockAbout,
  component: BlockAbout
}];
/* harmony default export */ const plain = (components);
;// CONCATENATED MODULE: ./components/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const blockComponents = {
  [blocks/* Block.BlockHeader */.g.BlockHeader]: BlockHeaderBlock,
  [blocks/* Block.BlockFooter */.g.BlockFooter]: BlockFooterBlock,
  [blocks/* Block.BlockHero */.g.BlockHero]: BlockHeroBlock,
  [blocks/* Block.BlockBenefit */.g.BlockBenefit]: BlockBenefitBlock,
  [blocks/* Block.BlockTestimonial */.g.BlockTestimonial]: BlockTestimonialBlock,
  [blocks/* Block.BlockIntroBanner */.g.BlockIntroBanner]: BlockIntroBannerBlock,
  [blocks/* Block.BlockAbout */.g.BlockAbout]: BlockAboutBlock_BlockHeaderBlock
};
const registeredComponents = {
  plain: plain
};
function renderBlocks(blocks = []) {
  return blocks.map((blockContent, index) => renderBlock(blockContent.slug, index));
}
function renderBlock(contentType, index) {
  var _registeredComponents;

  const Component = contentType ? blockComponents[contentType] : null;
  const byContentType = (_registeredComponents = registeredComponents['plain']) === null || _registeredComponents === void 0 ? void 0 : _registeredComponents.filter(c => c.contentType === contentType);
  if (!Component) return null;
  return /*#__PURE__*/jsx_runtime_.jsx(Component, {
    contentType: byContentType
  }, index);
}
function getComponent(contentType, props) {
  var _registeredComponents2;

  let Component = null;
  const byContentType = (_registeredComponents2 = registeredComponents['plain']) === null || _registeredComponents2 === void 0 ? void 0 : _registeredComponents2.filter(c => c.contentType === contentType);
  Component = byContentType[0].component;
  if (!Component) return null;
  return /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, props));
}
function renderByContentType(contentType) {
  const Component = blockComponents[contentType] || null;
  if (!Component) return null;
  return /*#__PURE__*/jsx_runtime_.jsx(Component, {
    contentType: contentType
  });
}

/***/ }),

/***/ 236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ Block)
/* harmony export */ });
let Block;

(function (Block) {
  Block["BlockHeader"] = "blockHeader";
  Block["BlockFooter"] = "blockFooter";
  Block["BlockAbout"] = "blockAbout";
  Block["BlockBenefit"] = "blockBenefit";
  Block["BlockHero"] = "blockHero";
  Block["BlockLatestBlog"] = "blockLatestBlog";
  Block["BlockProjects"] = "blockProjects";
  Block["BlockTestimonial"] = "blockTestimonial";
  Block["BlockIntroBanner"] = "blockIntroBanner";
})(Block || (Block = {}));

/***/ }),

/***/ 459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ getPageData)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);

async function getPageData(page) {
  const url = 'https://api-eu-west-2.graphcms.com/v2/cl308wjdo09nt01xq5d4o2wr4/master';
  const graphQLClient = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
  });
  const pageData = page === '/' ? 'home' : page;
  const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query PAGE_DATA($page: String) {
      page(where: { slug: $page }) {
        id
        slug
        title
        seo {
          id
          keywords
          title
          description
        }
        blockHero {
          id
          slug
          subheading
          image {
            id
            url
          }
          heading {
            html
          }
        }
        blocks {
          ... on BlockBenefit {
            id
            slug
            items {
              id
              heading
              subheading
              image {
                id
                url
              }
            }
          }
          ... on BlockTestimonial {
            id
            slug
            items {
              id
              text
              author
            }
          }
          ... on BlockIntroBanner {
            id
            slug
            heading
            image {
              id
              url
              height
            }
          }
        }
        blockFooter {
          id
          slug
          image {
            id
            url
          }
          internalLink
          text
          socialsHeading
          socials {
            id
            heading
            socialIcon
            externalLink
          }
          navigation {
            id
            slug
            title
            pages {
              id
              slug
              title
            }
          }
        }
        blockHeader {
          id
          image {
            id
            url
          }
          slug
          navigation {
            id
            slug
            title
            pages {
              id
              title
              slug
            }
          }
        }
      }
    }
  `;
  const data = await graphQLClient.request(query, {
    page: pageData
  });
  return data;
}

/***/ })

};
;