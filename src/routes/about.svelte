<script>

  import Counter from '$lib/Binance.svelte';
  import { spring } from "svelte/motion";

  // import Counter from '$lib/Binance.svelte';

  let count = 0;
  const displayed_count = spring();
  $: displayed_count.set(count);
  $: offset = modulo($displayed_count, 1);

  var modulo = (n, m) => {
    ((n % m) + m) % m;
  };
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section
  class="text-center w-full h-screen bg-gradient-to-r from-yellow-200 via-red-300 to-pink-300"
>
  <h1 class="pt-10 text-7xl">About page</h1>
  <div class="font-serif pt-12 text-2xl">Ciao!</div>

  <div class="counter">
    <button
      on:click={() => (count -= 1)}
      aria-label="Decrease the counter by one"
    >
      <!-- <svg aria-hidden="true" viewBox="0 0 1 1">
        <path d="M0,0.5 L1,0.5" />
      </svg> -->

      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd" />
      </svg>
    </button>

    <div class="counter-viewport">
      <div
        class="counter-digits"
        style="transform: translate(0, {100 * offset}%)"
      >
        <strong class="hidden" aria-hidden="true"
          >{Math.floor($displayed_count + 1)}</strong
        >

        <strong>{Math.floor($displayed_count)}</strong>
      </div>
    </div>

    <button
      on:click={() => (count += 1)}
      aria-label="Increase the counter by one"
    >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  <br>

  <Counter />

</section>

  <style>
    .counter {
      display: flex;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      margin: 1rem 0;
    }

    .counter button {
      width: 2em;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      background-color: transparent;
      touch-action: manipulation;
      color: var(--text-color);
      font-size: 2rem;
    }

    .counter button:hover {
      background-color: var(--secondary-color);
    }

    svg {
      width: 25%;
      height: 25%;
    }

    path {
      vector-effect: non-scaling-stroke;
      stroke-width: 2px;
      stroke: var(--text-color);
    }

    .counter-viewport {
      width: 8em;
      height: 4em;
      overflow: hidden;
      text-align: center;
      position: relative;
    }

    .counter-viewport strong {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      font-weight: 400;
      color: var(--accent-color);
      font-size: 4rem;
      align-items: center;
      justify-content: center;
    }

    .counter-digits {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .hidden {
      top: -100%;
      user-select: none;
    }
  </style>

<!-- <h1>About page</h1>
<div>Ciao!</div> -->
