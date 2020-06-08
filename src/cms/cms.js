import CMS from 'netlify-cms-app'
import React from 'react'

import BlogPostPreview from './preview-templates/blog-post'

CMS.registerPreviewTemplate('blog', BlogPostPreview)