/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  defaultSidebar: [
    'get-started/index',
    {
      label: 'Quick Start',
      type: 'category',
      collapsed: false,
      link: { id: 'get-started/quick-start/create-your-app', type: 'doc' },
      items: [
        'get-started/quick-start/create-your-app',
        'get-started/quick-start/schema',
        'get-started/quick-start/javascript-client',
        'get-started/quick-start/permissions',
      ],
    },
    {
      label: 'Authentication',
      type: 'category',
      link: { id: 'get-started/authentication/index', type: 'doc' },
      items: ['get-started/authentication/index'],
    },
    {
      label: 'CLI Workflow',
      type: 'category',
      link: { id: 'get-started/cli/index', type: 'doc' },
      items: [
        'get-started/cli/index',
        'get-started/cli/workflow-setup',
        'get-started/cli/install-cli',
        'get-started/cli/local-changes',
        'get-started/cli/metadata-and-serverless-functions',
      ],
    },
    {
      label: 'Upgrade',
      type: 'category',
      link: { id: 'get-started/upgrade/index', type: 'doc' },
      items: ['get-started/upgrade/index'],
    },
  ],
  platformSidebar: [
    {
      type: 'autogenerated',
      dirName: 'platform',
    },
  ],
  referenceSidebar: [
    {
      type: 'autogenerated',
      dirName: 'reference',
    },
  ],
};

module.exports = sidebars;
