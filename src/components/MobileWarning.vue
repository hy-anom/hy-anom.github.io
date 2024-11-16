<template>
  <div class="overlay">
    <div class="warning">
      <h2>Sorry for the inconvenience</h2>
      <p class="mb-20">
        Mobile Version of this site is still under construction :(
      </p>
      <p class="mb-20">For now please enjoy this pasta recipe</p>
      <h3 class="mb-20"><b>Garlic Butter Pasta</b></h3>
      <h3>Ingredients (Serves 2):</h3>
      <ul>
        <li>200g (7 oz) spaghetti or your favorite pasta</li>
        <li>3 tbsp unsalted butter</li>
        <li>3 cloves garlic, finely minced</li>
        <li>1/2 tsp red chili flakes (optional)</li>
        <li>Salt and freshly ground black pepper, to taste</li>
        <li>2 tbsp grated Parmesan cheese (optional)</li>
        <li>Fresh parsley, chopped, for garnish</li>
      </ul>
      <h3>Instructions:</h3>
      <ol>
        <li>
          <strong>Cook the pasta:</strong>
          <ul>
            <li>Bring a large pot of salted water to a boil.</li>
            <li>
              Add the pasta and cook according to the package instructions until
              al dente.
            </li>
            <li>Reserve 1/2 cup of pasta water, then drain the rest.</li>
          </ul>
        </li>
        <li>
          <strong>Prepare the sauce:</strong>
          <ul>
            <li>In a large skillet, melt the butter over medium heat.</li>
            <li>
              Add the minced garlic and sauté for 1-2 minutes until fragrant (be
              careful not to burn the garlic).
            </li>
            <li>Stir in the chili flakes (if using).</li>
          </ul>
        </li>
        <li>
          <strong>Combine pasta and sauce:</strong>
          <ul>
            <li>Add the cooked pasta to the skillet and toss to coat.</li>
            <li>
              If the pasta seems dry, add a splash of the reserved pasta water
              until it reaches your desired consistency.
            </li>
          </ul>
        </li>
        <li>
          <strong>Season and serve:</strong>
          <ul>
            <li>Season with salt and pepper to taste.</li>
            <li>
              Sprinkle with Parmesan cheese and chopped parsley for extra
              flavor.
            </li>
          </ul>
        </li>
      </ol>
      <p>
        <strong>Tips:</strong> You can add protein like grilled chicken or
        shrimp for a heartier meal. Experiment with vegetables like cherry
        tomatoes or spinach for added nutrition.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  display: none;
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 20;
  background-color: #000000bb;
  padding: 30px;
}

.warning {
  background-color: #303446;
  width: 360px;
  margin: auto;
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
}

.mb-20 {
  margin-bottom: 20px;
}

@media screen and (max-width: 768px) {
  .overlay {
    display: block;
  }
}
</style>
