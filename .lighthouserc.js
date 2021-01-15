module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'offscreen-images': 'off',
        'uses-webp-images': 'off',
        'color-contrast': 'off',
        'apple-touch-icon': 'off',
        'errors-in-console': 'off',
        'installable-manifest': 'off',
        label: 'off',
        'maskable-icon': 'off',
        'meta-description': 'off',
        'no-unload-listeners': 'off',
        'offline-start-url': 'off',
        'service-worker': 'off',
        'splash-screen': 'off',
        'unused-css-rules': 'off',
        'unused-javascript': 'off',
        'without-javascript': 'off',
        'works-offline': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
