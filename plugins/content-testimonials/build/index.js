/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit({
  attributes,
  setAttributes
}) {
  const {
    section_style,
    section_class,
    section_id,
    section_image,
    section_image_class,
    section_image_style,
    section_block,
    container_style,
    container_class,
    container_id,
    row_style,
    row_class,
    row_id,
    testimonials
  } = attributes;
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const addTestimonial = () => {
    setAttributes({
      testimonials: [...testimonials, {
        col_class: 'col-md-6',
        col_style: '',
        col_id: '',
        title: '',
        content: '',
        code_block: ''
      }]
    });
  };
  const updateTestimonial = (testimonialIndex, field, value) => {
    setAttributes({
      testimonials: testimonials.map((testimonial, index) => {
        if (index === testimonialIndex) {
          return {
            ...testimonial,
            [field]: value
          };
        }
        return testimonial;
      })
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Section'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
    label: "Section Style",
    value: section_style,
    onChange: nextValue => setAttributes({
      section_style: nextValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
    label: "Section Class",
    value: section_class,
    onChange: nextValue => setAttributes({
      section_class: nextValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
    label: "Section ID",
    value: section_id,
    onChange: nextValue => setAttributes({
      section_id: nextValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Image'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      section_image: media.url
    }),
    type: "image",
    allowedTypes: ['image'],
    value: section_image,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, section_image && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isLink: true,
      isDestructive: true,
      onClick: () => setAttributes({
        section_image: ''
      })
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Section Image')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      icon: "upload",
      className: "editor-media-placeholder__button is-button is-default is-large"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Section Image')))
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
    label: "Background Image Class",
    value: section_image_class,
    onChange: nextValue => setAttributes({
      section_image_class: nextValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
    label: "Background Image Style",
    value: section_image_style,
    onChange: nextValue => setAttributes({
      section_image_style: nextValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Code Block'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    style: {
      lineHeight: '2'
    }
  }, "Code Block"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    id: "sectionStyleTextarea",
    value: attributes.section_block,
    onChange: event => setAttributes({
      section_block: event.target.value
    }),
    placeholder: "Enter section block here",
    style: {
      width: '100%',
      height: '100px'
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Container'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
    label: "Container Section Style",
    value: container_style,
    onChange: nextValue => setAttributes({
      container_style: nextValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
    label: "Container Section Class",
    value: container_class,
    onChange: nextValue => setAttributes({
      container_class: nextValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
    label: "Container Section ID",
    value: container_id,
    onChange: nextValue => setAttributes({
      container_id: nextValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Row'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
    label: "Row Style",
    value: row_style,
    onChange: nextValue => setAttributes({
      row_style: nextValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
    label: "Row Class",
    value: row_class,
    onChange: nextValue => setAttributes({
      row_class: nextValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
    label: "Row ID",
    value: row_id,
    onChange: nextValue => setAttributes({
      row_id: nextValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Testimonial Settings'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => addTestimonial()
  }, "Add New Testimonial"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: section_image,
    alt: ""
  }), console.log(section_image), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "column-wrapper"
  }, testimonials.map((testimonial, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `column ${testimonial.col_class}`,
      style: {
        background: '#f7f7f7',
        padding: '25px',
        borderBottom: '1px solid',
        marginBottom: '25px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        display: 'flex'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        paddingRight: '25px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        marginBottom: '0px'
      }
    }, "Testimonial Class"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: testimonial.col_class,
      onChange: content => updateTestimonial(index, 'col_class', content.target.value)
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        paddingRight: '25px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        marginBottom: '0px'
      }
    }, "Testimonial Style"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: testimonial.col_style,
      onChange: content => updateTestimonial(index, 'col_style', content.target.value)
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        marginBottom: '0px'
      }
    }, "Testimonial ID"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: testimonial.col_id,
      onChange: content => updateTestimonial(index, 'col_id', content.target.value)
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        display: 'flex',
        paddingTop: '25px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {}
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        marginBottom: '0px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Testimonial Content")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      value: testimonial.content,
      onChange: content => updateTestimonial(index, 'content', content),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('')
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        marginBottom: '0px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Testimonial Name")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      value: testimonial.title,
      onChange: content => updateTestimonial(index, 'title', content),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('')
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      style: {
        border: '1px solid'
      },
      onClick: () => {
        const newTestimonials = [...testimonials]; // Create a copy of the columns array
        const newColumn = {
          // Define a new column object
          col_class: '',
          col_style: '',
          col_id: '',
          title: 'new column',
          content: 'new column content'
        };
        newTestimonials.splice(index, 0, newColumn); // Insert the new column at the current index
        setAttributes({
          testimonials: newTestimonials
        }); // Update the columns attribute with the new array
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Testimonial Above')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      style: {
        border: '1px solid'
      },
      isDestructive: true,
      onClick: () => {
        const newTestimonials = [...testimonials];
        newTestimonials.splice(index, 1);
        setAttributes({
          testimonials: newTestimonials
        });
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Testimonial')));
  }))));
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */




/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save({
  attributes
}) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: `position-relative ${attributes.section_class}`,
    style: `padding:50px 0;${attributes.section_style}`,
    id: attributes.section_id
  }, attributes.section_image && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.section_image,
    alt: "",
    className: `w-100 h-100 position-absolute bg-img ${attributes.section_image_class}`,
    style: `top:0;left:0;object-fit:cover;pointer-events:none;${attributes.section_image_style}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, attributes.section_block), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: attributes.container_class,
    style: attributes.container_style,
    id: attributes.container_id
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: attributes.row_class,
    style: attributes.row_style,
    id: attributes.row_id
  }, attributes.testimonials.map((testimonial, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `accordion position-relative ${testimonial.col_class}`,
      style: `border-bottom:1px solid #D5D8DC;${testimonial.col_style}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: `button`,
      style: {
        cursor: 'pointer'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      value: testimonial.title
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `accordion-content`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `accordion-content-inner`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        margin: '0px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      value: testimonial.content
    })))));
  })))));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nError: Can't resolve 'owl.theme.default.min.css' in '/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/src'\n    at finishWithoutResolve (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:564:18)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:656:15\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:89:43\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:43:1)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/ConditionalPlugin.js:53:42\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/forEachBail.js:39:13\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/ModulesInHierarchicalDirectoriesPlugin.js:79:16\n    at process.processTicksAndRejections (node:internal/process/task_queues:81:21)\n    at tryRunOrWebpackError (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/HookWebpackError.js:88:9)\n    at __webpack_require_module__ (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5241:12)\n    at __webpack_require__ (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5198:18)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5270:20\n    at symbolIterator (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/Hook.js:18:14)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5176:43\n    at symbolIterator (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3463:5)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5138:16\n    at symbolIterator (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3463:5)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5106:15\n    at symbolIterator (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3527:9)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5052:8\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:3490:6\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Cache.js:113:20)\n    at ItemCacheFacade.store (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:3489:11\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Cache.js:99:5\n    at Hook.eval [as callAsync] (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at Cache.get (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Cache.js:81:18)\n    at ItemCacheFacade.get (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:3456:9)\n    at codeGen (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5040:11)\n    at symbolIterator (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3463:5)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5070:14\n    at processQueue (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n-- inner error --\nError: Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nError: Can't resolve 'owl.theme.default.min.css' in '/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/src'\n    at finishWithoutResolve (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:564:18)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:656:15\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:89:43\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:43:1)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/ConditionalPlugin.js:53:42\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/forEachBail.js:39:13\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/ModulesInHierarchicalDirectoriesPlugin.js:79:16\n    at process.processTicksAndRejections (node:internal/process/task_queues:81:21)\n    at Object.<anonymous> (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[3]!/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/src/style.scss:1:7)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:452:10\n    at Hook.eval [as call] (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/Hook.js:14:14)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5243:39\n    at tryRunOrWebpackError (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/HookWebpackError.js:83:7)\n    at __webpack_require_module__ (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5241:12)\n    at __webpack_require__ (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5198:18)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5270:20\n    at symbolIterator (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/Hook.js:18:14)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5176:43\n    at symbolIterator (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3463:5)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5138:16\n    at symbolIterator (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3463:5)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5106:15\n    at symbolIterator (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3527:9)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5052:8\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:3490:6\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Cache.js:113:20)\n    at ItemCacheFacade.store (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:3489:11\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Cache.js:99:5\n    at Hook.eval [as callAsync] (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at Cache.get (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Cache.js:81:18)\n    at ItemCacheFacade.get (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:3456:9)\n    at codeGen (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5040:11)\n    at symbolIterator (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/neo-async/async.js:3463:5)\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/Compilation.js:5070:14\n    at processQueue (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n\nGenerated code for /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[3]!/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/src/style.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\nError: Can't resolve 'owl.theme.default.min.css' in '/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/src'\\n    at finishWithoutResolve (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:564:18)\\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:656:15\\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:89:43\\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:43:1)\\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/ConditionalPlugin.js:53:42\\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/Resolver.js:714:5\\n    at eval (eval at create (/Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/forEachBail.js:39:13\\n    at /Users/efrainlemus-martinez/Local Sites/discovery-engineering/app/public/wp-content/plugins/content-testimonials/node_modules/enhanced-resolve/lib/ModulesInHierarchicalDirectoriesPlugin.js:79:16\\n    at process.processTicksAndRejections (node:internal/process/task_queues:81:21)\");");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/content-testimonials","version":"0.1.0","title":"Content Testimonials","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"attributes":{"section_style":{"type":"string","default":""},"section_class":{"type":"string","default":""},"section_id":{"type":"string","default":""},"section_image":{"type":"string","default":null},"section_image_class":{"type":"string"},"section_image_style":{"type":"string"},"section_block":{"type":"string","default":""},"container_style":{"type":"string","default":""},"container_class":{"type":"string","default":"container"},"container_id":{"type":"string","default":""},"row_style":{"type":"string","default":""},"row_class":{"type":"string","default":"row justify-content-center testimonial-carousel owl-carousel owl-theme"},"row_id":{"type":"string","default":""},"testimonials":{"type":"array","items":{"type":"object"},"default":[{"col_class":"","col_style":"","col_id":"","name":"","content":""}]}},"textdomain":"content-testimonials","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map