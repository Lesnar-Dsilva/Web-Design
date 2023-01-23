let img = document.getElementById("commentor");
let quote = document.getElementById("quote");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let comment = document.getElementById("comment");
let Name = document.getElementById("name");
let jobPosition = document.getElementById("jobPosition");

let carousel = 0;

let commentor = {
  fullName: ["Susan Smith", "Christine Read", "Jimmy Thorley", "Samson Rowe"],
  jobPosition: [
    "Web Devloper",
    "Software Developer",
    "Software Engineer",
    "UX Designer",
  ],
  comment: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hachabitasse platea dictumst vestibulum rhoncus est. Arcu risus quis varius quam quisque id diam vel quam. Elementum curabitur vitae nunc sed velit dignissim sodales. Egestas purus viverra accumsan in nisl. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Fermentum odio eu feugiat pretium nibh ipsum. Et odio pellentesque diam volutpat. Urna nec tincidunt praesent semper. Posuere sollicitudin aliquam ultrices sagittis. Non enim praesent elementum facilisis leo vel fringilla est. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Pulvinar pellentesque habitant morbi tristique senectus et. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu dictum varius duis at consectetur. Cursus in hac habitasse platea dictumst quisque. Eu consequat ac felis donec et odio pellentesque diam. Duis at tellus at urna condimentum mattis pellentesque. Suscipit tellus mauris a diam maecenas sed enim ut. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Nisl nisi scelerisque eu ultrices vitae. Purus non enim praesent elementum. Pellentesque habitant morbi tristique senectus et netus et.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis viverra nibh cras pulvinar mattis nunc sed. Id interdum velit laoreet id. Tellus pellentesque eu tincidunt tortor aliquam. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Semper feugiat nibh sed pulvinar proin gravida. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. A condimentum vitae sapien pellentesque habitant morbi tristique. Faucibus pulvinar elementum integer enim neque. Diam maecenas ultricies mi eget mauris. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Arcu dui vivamus arcu felis bibendum ut tristique et. Morbi blandit cursus risus at ultrices mi tempus. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.",
  ],
};

let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

let Image = (img.src = "Images/" + images[carousel]);

Name.innerHTML = commentor.fullName[carousel];
jobPosition.innerHTML = commentor.jobPosition[carousel];
comment.innerHTML = commentor.comment[carousel];

prev.addEventListener("click", prevBtn);

function prevBtn() {
  if (carousel < images.length) {
    carousel--;
    Image = img.src = "Images/" + images[carousel];
    console.log(carousel);
    Name.innerHTML = commentor.fullName[carousel];
    jobPosition.innerHTML = commentor.jobPosition[carousel];
    comment.innerHTML = commentor.comment[carousel];
  }
  if (carousel == -1) {
    carousel = 0;
    Image = img.src = "Images/" + images[carousel];
    Name.innerHTML = commentor.fullName[carousel];
    jobPosition.innerHTML = commentor.jobPosition[carousel];
    comment.innerHTML = commentor.comment[carousel];
  }
}

next.addEventListener("click", nextBtn);

function nextBtn() {
  if (carousel < images.length) {
    carousel++;
    Image = img.src = "Images/" + images[carousel];
    console.log(carousel);
    Name.innerHTML = commentor.fullName[carousel];
    jobPosition.innerHTML = commentor.jobPosition[carousel];
    comment.innerHTML = commentor.comment[carousel];
  }
  if (carousel >= images.length) {
    carousel = 0;
    Image = img.src = "Images/" + images[carousel];
    console.log(carousel);
    Name.innerHTML = commentor.fullName[carousel];
    jobPosition.innerHTML = commentor.jobPosition[carousel];
    comment.innerHTML = commentor.comment[carousel];
  }
}

// QUOTATION MARK
quote.src = "Images/quote.png";
