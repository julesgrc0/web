if(!self.define){let s,e={};const r=(r,c)=>(r=new URL(r+".js",c).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(c,i)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let n={};const a=s=>r(s,o),u={module:{uri:o},exports:n,require:a};e[o]=Promise.all(c.map((s=>u[s]||a(s)))).then((s=>(i(...s),n)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/adr-VexMc_Lg.svg",revision:null},{url:"assets/Career-azH0OU9b.js",revision:null},{url:"assets/Contact-_GOLHVJG.js",revision:null},{url:"assets/culturesigne-kjk9dFva.png",revision:null},{url:"assets/echiquier-c6X4w4DL.png",revision:null},{url:"assets/eyesgames-2ndXU0Je.ico",revision:null},{url:"assets/Home-mfTkEtIn.js",revision:null},{url:"assets/index-ADULOMYh.js",revision:null},{url:"assets/index-bQOQx3KI.css",revision:null},{url:"assets/Project-SVucb_79.js",revision:null},{url:"assets/pyedit-LyFtOI6U.ico",revision:null},{url:"assets/router-0Hy0jkTJ.js",revision:null},{url:"assets/TopBar-Q8zY4WU7.js",revision:null},{url:"assets/vendor-QoCl0KGr.js",revision:null},{url:"assets/workbox-window.prod.es5-prqDwDSL.js",revision:null},{url:"icon.svg",revision:"afc0be4f1602c442bf14fe704814c989"},{url:"index.html",revision:"de13dedde3ab2474e5f4c6d147beaf2f"},{url:"manifest.webmanifest",revision:"312e7a55740e45e45cd91509e0a073c1"},{url:"sources/index.html",revision:"dcd1d84a5287a1378f7512bec75c8745"},{url:"sources/package-lock.json",revision:"1914d792b11e7cae4d410ce7764f35af"},{url:"sources/package.json",revision:"3f3b61aafdc25d20d860fd8fd511e250"},{url:"sources/public/icon.svg",revision:"afc0be4f1602c442bf14fe704814c989"},{url:"sources/src/assets/arrow.svg",revision:"be8444cdc79fd4b4beebd1f9ab20a31e"},{url:"sources/src/assets/call.svg",revision:"7f3ee89ed90ad8127b3beffe15ca90a9"},{url:"sources/src/assets/discord.svg",revision:"e772c8fcf3aeaf7ab61800b360a2f6e2"},{url:"sources/src/assets/facebook.svg",revision:"69e97939177ba04dbc8f5262851d1459"},{url:"sources/src/assets/git.svg",revision:"1bb027109345a90a9eab1e929d8669c2"},{url:"sources/src/assets/icons/adr.svg",revision:"8e7831f9d20d1cc3509f0171bd36f3e1"},{url:"sources/src/assets/icons/cnet.svg",revision:"c640dc5520e91428199cf41b6ee6e298"},{url:"sources/src/assets/icons/compteur.webp",revision:"6488e22b4c447aea5aa49d5baa3deb10"},{url:"sources/src/assets/icons/culturesigne.png",revision:"16af70585ecbc6e4fae27b4916c2528d"},{url:"sources/src/assets/icons/echiquier.png",revision:"2695fb26a1d807adef168e9c439920f9"},{url:"sources/src/assets/icons/eyesgames.ico",revision:"dfde37c73772b4ec5f7deb9e0b6c3b38"},{url:"sources/src/assets/icons/pyedit.ico",revision:"fd7135f52daffc4b6c2afb1f7a543461"},{url:"sources/src/assets/icons/sd.png",revision:"546cc71a702f1053caf9674353ac5061"},{url:"sources/src/assets/icons/skyattack.png",revision:"b5de04441b30ce3116ad584f4ebe0122"},{url:"sources/src/assets/icons/spaceship.png",revision:"c9ee5e258425e7badec0d4d719e56f59"},{url:"sources/src/assets/logo.svg",revision:"f11b8a322b0b90a4b5e59cfe07c5188f"},{url:"sources/src/assets/mail.svg",revision:"5c02ca856a9ee28ade5a038f1d2974f0"},{url:"sources/src/components/const.tsx",revision:"be9dbcf5edb1f62b245021e9f8c10956"},{url:"sources/src/components/TextReveal.tsx",revision:"5d061af7127d34df1a93ae5c558b31d7"},{url:"sources/src/components/TopBar.tsx",revision:"e002f770a6557861270fdd8d12144b58"},{url:"sources/src/main.tsx",revision:"0bf27752e3465a076345599e9b48b5c7"},{url:"sources/src/pages/Career.tsx",revision:"efc2636dff734e639a6c38b0d6068f6e"},{url:"sources/src/pages/Contact.tsx",revision:"4035bce16a6fcf5600bcc8cbb3ed1cc0"},{url:"sources/src/pages/Home.tsx",revision:"6f9b6664b11002c6d3badb4865ffe397"},{url:"sources/src/pages/Project.tsx",revision:"6969bb7c888eb237aa93259991fde7c0"},{url:"sources/src/router.tsx",revision:"1e0a25fda896595cae30ea130499186f"},{url:"sources/src/styles/index.scss",revision:"c76d11b4394ad811bdaed8a40e85cf3f"},{url:"sources/src/vite-env.d.ts",revision:"0352474ba2918efe13895edbc3780d94"},{url:"sources/tsconfig.json",revision:"02ef83dd71debd417f980105d7cb5fc7"},{url:"sources/tsconfig.node.json",revision:"767b2e9abe6452170cdc399ca052cfbc"},{url:"sources/vite.config.ts",revision:"4f5579e8deab0b423d935c5a97f2dbca"},{url:"manifest.webmanifest",revision:"312e7a55740e45e45cd91509e0a073c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));