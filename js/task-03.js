const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.alignItems = "center";
gallery.style.justifyContent = "space-evenly";
gallery.style.gap = "10px";
gallery.style.listStyle = "none";
              
let galleryFragment = "";

images.forEach(({url, alt}) => {
  const image = `<li><img style="border-radius: 10px; box-shadow: 10px 5px 5px gray" width="300px" height="auto"; src="${url}" alt="${alt}"></li>`;
  galleryFragment += image;
});
// console.log(galleryFragment)
gallery.insertAdjacentHTML("beforeend", galleryFragment)

