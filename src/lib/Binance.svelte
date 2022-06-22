<script>
  import { spring } from "svelte/motion";

  let count = 0;
  const displayed_count = spring();
  $: displayed_count.set(count);
  $: offset = modulo($displayed_count, 1);

  var modulo = (n, m) => {
    ((n % m) + m) % m;
  };

  async function asyncCall() {
    count += 1;

    // https://binance-docs.github.io/apidocs/spot/en/#websocket-market-streams
    var exampleSocket = new WebSocket("wss://stream.binance.com:9443/ws");

    // https://binance-docs.github.io/apidocs/spot/en/#live-subscribing-unsubscribing-to-streams
    var payload = {
      method: "SUBSCRIBE",
      params: [
        //   "btcusdt@aggTrade",
        //   "btcusdt@depth",
        //   "bnbusdt@bookTicker",
          "bnbusdt@kline_1m@1000ms"
        ],
      id: 1,
    };

    // send subscribe payload
    var payload_str = JSON.stringify(payload);

    // TODO debug print these
    console.log("payload: " + payload);
    console.log("payload_str: " + payload_str);


    // make sure connection is OPEN
    exampleSocket.onopen = function (event) {

      let counter__bookTicker = 0;
      let counter__candleStick = 0;

      exampleSocket.send(payload_str);

      // event listener
      exampleSocket.onmessage = function (event) {

        console.log(event.data);

        counter__bookTicker += 1;
        if (counter__bookTicker % 100 == 0) {
            console.log(counter__bookTicker);
            console.log(event.data);
        }
      };

      // wait forever?
    };
  }
</script>


<!-- The Counter Class -->
<div class="counter">


  <!-- Decrease Counter Button -->
  <button
    on:click={() => (count -= 1)}
    aria-label="Decrease the counter by one"
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
        clip-rule="evenodd"
      />
    </svg>
  </button>

  <!-- Actual Counter -->
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

  <!-- Increase Counter Button -->
  <button
    on:click={() => (count += 1)}
    aria-label="Increase the counter by one"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>

  <!-- Contact Binance -->
  <button
    on:click={asyncCall}
    aria-label="Increase the counter by one"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
      />
    </svg>
  </button>
</div>

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
