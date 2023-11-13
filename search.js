const inputElement = document.querySelector("#search-input");
const search_icon = document.querySelector("#search-close-icon");
const sort_wrapper = document.querySelector(".sort-wrapper");

const handleInputChange = (inputElement) => {
  const inputValue = inputElement.value;
  if (inputValue !== "") {
    document
      .querySelector("#search-close-icon")
      .classList.add("search-close-icon-visible");
  } else {
    document
      .querySelector("#search-close-icon")
      .classList.remove("search-close-icon-visible");
  }
};

const handleSearchCloseOnClick = () => {
  document.querySelector("#search-input").value = "";
  document
    .querySelector("#search-close-icon")
    .classList.remove("search-close-icon-visible");
};

const handleSortIconOnClick = () => {
  document
    .querySelector(".filter-wrapper")
    .classList.toggle("filter-wrapper-open");

  document.querySelector("body").classList.toggle("filter-wrapper-overlay");
};

inputElement.addEventListener("input", () => {
  handleInputChange(inputElement);
});
search_icon.addEventListener("click", handleSearchCloseOnClick);
sort_wrapper.addEventListener("click", handleSortIconOnClick);
