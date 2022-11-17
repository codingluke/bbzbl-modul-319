import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import DocCardList from '@theme/DocCardList';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  YouTube: LiteYouTubeEmbed,
  DocCardList:DocCardList 
};
