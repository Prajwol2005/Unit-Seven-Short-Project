// This is an example for product 1, copy and paste everything below for each product
$(".product1_button").click(function() {

    $(".product_image").attr("src", "http://www.cratekings.com/wp-content/uploads/2010/03/Beats-Spin-dr-dre-headphones-White.JPG"); // Sets the product image

    $(".product_text").text("Beats By Dre - White $299"); // Sets the product text
});

$(".product2_button").click(function() {

    $(".product_image").attr("src", "https://www.lenovo.com/medias/lenovo-legion-y740-15-5.png?context=bWFzdGVyfHJvb3R8NjM4MjB8aW1hZ2UvcG5nfGhhYy9oODYvOTg3OTg1ODM4MDgzMC5wbmd8YjJhZDMyZDlhZWVmM2FjZGM5YWVlYTFlNjMwMDAzOWNmZmM2YjAyOTFkMjM5YWI4YWJiN2VjMWQ0ZjI5NmM4ZQ"); // Sets the product image

    $(".product_text").text("LegionY740 - $2,100"); // Sets the product text
});

$(".product3_button").click(function() {

    $(".product_image").attr("src", "https://cdn57.androidauthority.net/wp-content/uploads/2021/03/oneplus-9-pro-pine-green-color-closeup-1200x675.jpg"); // Sets the product image

    $(".product_text").text("OnePlus 9Pro - $1,100"); // Sets the product text
});

$(".product4_button").click(function() {

    $(".product_image").attr("src", "https://static-assets.tesla.com/share/tesla_design_studio_assets/CYBERTRUCK/NVRP_mx9o6kxjwvf.png?&version=v0028d202103220940"); // Sets the product image

    $(".product_text").text("Tesla Cybertruck - $69,900"); // Sets the product text
});

//submission(address info)
$(".enterAddress").click(function() {
    let address = $(".Address").val();
    $(".systemMessage").append("<p>" + "Thanks for purchasing at out store, shipment will arrive to " + address + "within 2 days" + "</p>");
});