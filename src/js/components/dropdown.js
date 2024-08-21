export function Dropdown(options) {
  const { root = "" } = options;
  const $root = $(root);

  if (!root || !$root.length)
    console.error("Root must be defined as css selector");

  const dropdownHTML = `
  <div class="dropdown__wrapper">
    <button class="dropdown__trigger">...</button>
    <ul class="dropdown__menu">
      <li>Action</li>
      <li>Lorem Ipsum</li>
    </ul>
  </div>`;

  $root.addClass("dropdown");
  $root.html(dropdownHTML);

  const $trigger = $root.find(".dropdown__trigger");
  const $menu = $root.find(".dropdown__menu");

  $trigger.on("click", () => {
    $menu.toggle();
  });

  $menu.on("click", () => {
    $menu.toggle();
  });
}
