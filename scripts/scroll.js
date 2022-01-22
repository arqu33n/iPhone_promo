const scrollFunc = () => {
  const links = document.querySelectorAll(".header-menu__item a");
  const cardLink = document.querySelector(
    ".card-details__link-characteristics"
  );

  const newArray = [...links, cardLink];
  seamless.polyfill();
  newArray.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const id = element.getAttribute("href").substring(1);
      const section = document.getElementById(id);
      if (section) {
        seamless.elementScrollIntoView(section, {
          behavior: "smooth",
          block: "start",
        });
      } else {
        seamless.elementScrollIntoView(
          document.querySelector("#characteristics"),
          {
            behavior: "smooth",
            block: "center",
            inline: "center",
          }
        );
      }
    });
  });
  // cardLink.addEventListener("click", (event) => {
  //   event.preventDefault();
  //   const characteristicsSection = document.querySelector(cardLink.hash);
  //   seamless.elementScrollIntoView(characteristicsSection, {
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // });
};
scrollFunc();
