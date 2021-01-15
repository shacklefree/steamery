module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'offscreen-images': 'off',
        'uses-webp-images': 'off',
        'color-contrast': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
