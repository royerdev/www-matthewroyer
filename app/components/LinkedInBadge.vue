<template>
  <div class="pointer-events-none absolute bg-white dark:bg-black text-gray-700 dark:text-gray-300 text-xs leading-3 w-40 m-auto left-1/2 transform -translate-x-1/2 p-3 -bottom-14 -mb-1 opacity-0 transition-opacity group-hover:opacity-100 flex flex-row gap-2 justify-between items-center z-10 shadow text-left">
    <div data-popper-arrow class="invisible absolute h-4 w-4 bg-inherit m-auto left-1/2 transform -translate-x-1/2 -top-2 before:visible before:absolute before:h-4 before:w-4 before:rotate-45 before:bg-inherit before:content-['']" />
    <svg
      data-tooltip-target="tooltip-default"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      className="mercado-match"
      width="24"
      height="24"
      focusable="false"
    >
      <path d="M14.73 10H17l-5.5 8L8 14.5l1.34-1.34L11.21 15zM20 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V3h5.69l.52-1A2 2 0 0112 1a2 2 0 011.76 1l.52 1zm-2 2h-2.6l.6 1.1V7H8v-.9L8.6 5H6v14a1 1 0 001 1h10a1 1 0 001-1z" />
    </svg>
    <p>Verified LinkedIn skill assessment badge</p>
  </div>
</template>
