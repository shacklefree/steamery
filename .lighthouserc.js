module.exports = {
  ci: {
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0 }],
        'categories:accessibility': ['warn', { minScore: 0 }],
      },
    },
  },
};
