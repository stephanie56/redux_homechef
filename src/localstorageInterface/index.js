
export default {
  cacheRecipes: (recipes) => {
    return localStorage.setItem('savedRecipes', JSON.stringify(recipes));
  },
  getCachedRecipes: () => {
    return localStorage.getItem('savedRecipes');
  },
  clearCachedRecipes: () => {
    return localStorage.setItem('savedRecipes', null);
  }
};
