---
title: "Persist client-side preferences with Svelte (without DB)"
excerpt: ""
coverImage: ""
date: "2024-04-23T10:37:49.200Z"
author:
  name: "Adele Beitvashahi"
  picture: "/assets/author.png"
ogImage:
  url: ""
tags:
  "svelte, js, cookies"
---

## <center>**Context**</center>
I was in the middle of creating a static site with Svelte. Now of course you might say, why not just make it with plain HTML and CSS. To that I say, it's 2024 and you can go to jail for something like that. 

Now, I'm a React developer by trade, but I chose Svelte for this project, because; 1) it ships less JS to the browser due to it not using a virtual DOM. 2) it's excellent for static site generation (SSG), which is what I needed for this project. and most importantly, 3) it was time I finally learned it and saw what the craze was about, I can't go a day without hearing about the amazing developer experience (dx) Svelte provides. And by golly was I in for a treat! Seriously everyone <mark>**needs** to learn Svelte</mark>.

## <center>**Challenge**</center>
I needed to provide the website content in different locales, and I wanted to persist their preference across all time and space; all pages, routes, and sessions. This challenge is also applicable to website theming, and potentially any other user preference setting that isn't saved on serverside.

First step is setting and viewing the user preference. 

Here's how:

```javascript
// routes/+page.svelte
<script>
  // defaults to 'en';
  let locale = 'en';
</script>

<h1>Your preference of locale is set to {locale}</h1>
<button on:click={() => locale = "en"}>english</button>
<button on:click={() => locale = "es"}>spanish</button>
<button on:click={() => locale = "fr"}>french</button>
```


This is all good and well for a page, but if we wanna share it `between pages`. 

Enter, Svelte `+layout.svelte`. If we move that code to the root layout, every descendant of that route (page.svelte and layout.svelte alike) will have that layout display without changing. If I navigate between routes as long as I don't move up above that layout, the preference will stay. 

Now the next issue is accessing that preference from a different component/page. To do that we will need a store. Which is just an object with a subscribe function. Whatever subscribes to that store will update when the store updates.

Here's a brief review of how to create a [store in Svelte](https://svelte.dev/docs/svelte-store).


```javascript
// $lib/utils/stores.js
import { writable } from "svelte/store";
const defaultLocale = 'en';
export const locale = writable(defaultLocale);
```

The locale selector is located inside the navbar, which I want to be nearly global to this site so it will live in `+layout.svelte`
Here's how to use that store, in a dumbed down version of my use case.

```javascript
// routes/+layout.svelte
<script>
  import { locale } from "$lib/utils/stores.js";
</script>

<h1>Your preference of locale is set to {$locale}</h1>
<button on:click={() => $locale = "en"}>english</button>
<button on:click={() => $locale = "es"}>spanish</button>
<button on:click={() => $locale = "fr"}>french</button>
```

Now the state of locale will persist across page/route navigations, but it will reset upon refresh and or closing and reopening the site. 

So naturally we will want to persist the state somewhere <mark>tangible</mark>, and more <mark>enduring</mark>.
How about ✨local storage✨? 
Let's do that, we can reuse the code from above and <mark>subscribe</mark> the localStorage to the store. So updates to store also update localStorage.

```javascript
// $lib/utils/stores.js
import { browser } from "$app/environment";
import { writable } from "svelte/store";
const defaultLocale = 'en';
// retrieve localStorage value if it's been set already
// important for persisting through refreshes
// broswer check is needed because localstorage doesn't exist on server side
let storedLocale = browser && localStorage.getItem('locale') || defaultLocale;
export const locale = writable(storedLocale);
// subscribe to changes
locale.subscribe((val) => browser && localStorage.setItem('locale', val));
```

```javascript
// routes/+layout.svelte
<script>
  import { locale } from "$lib/utils/stores.js";
</script>

<h1>Your preference of locale is set to {$locale}</h1>
<button on:click={() => $locale = "en"}>english</button>
<button on:click={() => $locale = "es"}>spanish</button>
<button on:click={() => $locale = "fr"}>french</button>
```

Here's what we've achieved so far:
- ✅ get & set a preference 
- ✅ persist it through pages/routes
- ✅ persist through refreshes <mark>AND</mark> sessions (new tab/window)

But what's this?? there's a new problem. Everytime you reload the page, there's a <mark>layout shift</mark>, where the value of the preference will be set to its initial default before it fetches the stored localstorage value.

This happens because of `server side rendering (SSR)`, which is an amazing amazing feature that's readily available to us today. It works by partially rendering the website on server side before sending it to the client, and then `hydrating` it with the rest of the javascript that's necessary for it to fully render, clientside JS basically. I won't go into details of why and how SSR is good, you know how to google.

The problem is that, our user preferences are stored in localstorage, which is only available on client side. The server that's performing SSR is unaware of this localstorage. So when it partially renders the page, `localStorage.getItem()` just returns undefined. So it will default to the fallback value of "en". Even though the users might have specified otherwise in their previous visit, and stored that preference in their localStorage. There are 2 ways to solve this:

1. We can add conditional rendering for any affected content on the site so that it doesn't render until our hydration is fully complete, but that will defeat the purpose of SSR.
2. We can use cookies 🍪 to store user preferences. Because unlike localStorage, <mark>cookies persist on user's system **and** the server will have access to them</mark>. Perfect!

<h6>P.S. we could also try and fetch localstorage value first thing in our lifecycle events like onMount, but that doesn't follow the Svelte way. It doesn't fully embrace SSR as we are interrupting the initial load with dataloading/fetching, which should be done on server side as much as possible.

If we were in React land, then it'd be more acceptable.</h6>

To send and receive the preference cookies, we will need to setup a server js file for our layout that will handle the data fetching and initial data setting through Svelte's [`load` function](https://kit.svelte.dev/docs/load). That data is then loaded into our route, as defined in +layout.svelte.

For this, I'll move most of the store logic to +layout.svelte


```javascript
// $lib/utils/stores.js
import { writable } from "svelte/store";
export const locale = writable();
```

```javascript
// routes/+layout.server.js
import data from "$lib/data/en.json";
export function load({ cookies }) {
  let defaultLocale = 'en';
  data.preferences = { locale: cookies.get("locale") || defaultLocale };
  return data;
}
```

```javascript
<script>
// routes/+layout.svelte
  import { locale } from "$lib/utils/stores.js";
  import { browser } from "$app/environment";
  import {setCookie} from "$lib/utils/cookies.js";
  export let data;
  // use the cookie value
  $locale = data.preferences.locale;
  if(browser){
    let storedLocale = localStorage.getItem("locale");
    // prefer localstorage value if cookie is unreliable for any reason.
    $locale = storedLocale || $locale;
  }
  // subscribe localstorage and cookies to the locale store
  $: {
    browser && localStorage.setItem("locale",$locale);
    // setCookie is a custom function I wrote for managing cookies easier, you can find it under this codeblock
    browser && setCookie("locale",$locale);
  }
</script>

<h1>Your preference of locale is set to {$locale}</h1>
<button on:click={() => $locale = "en"}>english</button>
<button on:click={() => $locale = "es"}>spanish</button>
<button on:click={() => $locale = "fr"}>french</button>
```

```javascript
// $lib/utils/cookies.js
import { browser } from "$app/environment";

export function setCookie(name, value, path = "/") {
  if (!browser)
    throw new Error(
      "setCookie can only be used in the browser, make sure to check for browser object first"
    );
  const currentDate = new Date();
  const farFutureDate = new Date(
    currentDate.getTime() + 100 * 365 * 24 * 60 * 60 * 1000
  ); // 100 years from now
  const expires = farFutureDate.toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=${path}`;
}
```

At this point you might be wondering why do we need localstorage if we are going to use cookies. The answer is <mark>redundancy</mark>.

And there you have it! This was how to <mark>persist</mark> data on <mark>clientside</mark> and avoid layout shifts in SSR.

<h6>If you have any comments, questions, or concerns, please keep them to yourself.</h6>

<h6>All typos are on purpose.</h6>

## Resources
- [SvelteKit Docs](https://kit.svelte.dev/docs/)
- [Unpaid Intern](https://chat.openai.com/)
- [Emotional Support](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzdY2LIXuzsiEvKVd-jxZYF17s4WwtvIIdA&usqp=CAU)
- [Shameless Plug](https://adelbeit.com/)

Cover picture provided by [unsplash](https://unsplash.com/photos/round-white-compass-iDzKdNI7Qgc?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash)