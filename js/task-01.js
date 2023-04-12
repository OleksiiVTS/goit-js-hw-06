const ulCategories = document.getElementById("categories");
// console.log(ulCategories);
console.log(`Number of categories: ${ulCategories.children.length}`);

const liItems = ulCategories.querySelectorAll(".item")
liItems.forEach(itemEl => {
    // console.log(itemEl)
    console.log(`Category: ${itemEl.querySelector("h2").textContent}`)
    console.log(`Elements: ${itemEl.querySelectorAll("li").length}`)
});
