describe("SauceDemo Login and Cart", () => {
  it("User success login", async () => {
    await browser.url("https://www.saucedemo.com/");
    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();

    // Validate user berada di dashboard setelah login
    await expect($(".title")).toHaveTextContaining("Products");
  });

  it("Add item to cart", async () => {
    // Add item to cart
    await $(".inventory_item").waitForDisplayed();
    await $(".inventory_item .btn_inventory").click();

    // Validate item sukses ditambahkan ke cart
    await $(".shopping_cart_badge").waitForDisplayed();
    const cartCount = await $(".shopping_cart_badge").getText();
    await expect(cartCount).toBe("1");
  });
});
