

export default {
  cacheRecipes: (recipes) => {
    const savedRecipes = recipes.map(recipe => ({...recipe, isRecipeItemShown: false, isEditFormShown: false,
    }));
    return localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
  },
  getCachedRecipes: () => {
    return localStorage.getItem('savedRecipes');
  },
  clearCachedRecipes: () => {
    return localStorage.setItem('savedRecipes', null);
  }
};
