'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "347e3485182a9f0f2798c7c83f917418",
"index.html": "55d6ed265f2d620ed41c04666c6c8c28",
"/": "55d6ed265f2d620ed41c04666c6c8c28",
"main.dart.js": "97df60a352b543ce4164ac88e22f4b5c",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"manifest.json": "5780572a82034b9834334b22d6184562",
".git/config": "7619c4f93b1dcc33b7304d07e0c31f9b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/cd01d80e08f13361fc46f9b3f7ce04ec33b5ab": "3227c06fb5bed90a8ba0e0b5b333e01a",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/2efc45f9038284b72d139cc894707f1d271177": "1d8adf4ab2d9585f1efdad6f98b3ee19",
".git/objects/6f/a1457c695d26b6ceb3c92d65a4193deca01d94": "ccbcd5910bd560e72103a33915996939",
".git/objects/03/9dc144b87e95a0f8371f9d843cea8f0cb3067c": "89e4cd887bd51dd064ebcbbe9d1c468e",
".git/objects/3c/16c7844658c4632f4b376421a6aa1659ee96cb": "fcb06c39bfd7b7c5217d8fdcd5de4ff7",
".git/objects/58/24b3586365f6bdd5fdba4904ea3aa4656dae50": "f0bfa371d65332cd66bf07eda6e0fd81",
".git/objects/05/3a5a9d13e7f89ac348f98541fd45facf6d9589": "aedf7f2c95065cbab86fc8d1acfdc50a",
".git/objects/9c/9c4dccf64b216acf11ad32f21599fb95757a7e": "5560923c58c4e23e78b9361c7dc11c06",
".git/objects/a4/ba21d16c596ca8223300b46669da8b8471be8d": "d933a4abcabc636b3c68d0652585e14e",
".git/objects/d9/10f8c35860dacd855f407159dfddda9975bcab": "2869810740fe6aa5959e39feb1fd6dc4",
".git/objects/d9/8f3eb923fa569613fca097c4ddef1708a30f72": "1e3c48853b72d9000f6279901fe8bd1f",
".git/objects/bb/e84533d489a84b4a7d0dac5b170f9d0f2a2b70": "c1caed6f5f2bc1b9f9fbb0a1189b849a",
".git/objects/a5/504441e4dec65a1c2a460f0a80687e5f0c6546": "a3d0e73112a1f310416e9e2e0d4d46d7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/af1d595f1b7f2bf8c680f833e734c72dfe6de9": "5004e0f32f41ad7a3f76eb3e1bc7183f",
".git/objects/bc/d929f273cccea7f2ba6d6de6baa337de425bd2": "854673942dce393f6a64537208cdd893",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/eebefd94e8c52d1b6623ec1779203de239f415": "4220cd44d744827a2b6037139fef3fb4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/54d3ef7668d9a44f47e44247bb5510ed03325f": "e6ebaec5050b1bd1b5cfe7b2913a0337",
".git/objects/ee/cce32bff0b7245f5a3da74b604621ffc146c88": "4800e6a7787f269eb5148c9358a99caa",
".git/objects/fc/b8e761ebf58b0941897c578efae9b757460d99": "4db93a7c334bb3a78bcdde9308bd309c",
".git/objects/e3/b04f30e99ead8daf3f2705cee95df3e7dd56ec": "92f308c8e6d6fe31bd354aa9f15d5dd2",
".git/objects/fb/bff5b1a266416ad02352744be77361ef0a18a7": "1fb0af0a2612c04abb714d06214c83ad",
".git/objects/ed/6f6cc6a69e8bbd5e4e52ea94baa0c66ea782fc": "0998f59db0f4070dc551f3854ec68ece",
".git/objects/ec/952268a4ab7408f9f5e1badcb88d8843fdec98": "2f04a1c8fb45376c8670f0f317646aa5",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/d637b02dd9ef7b2b08be667ed711a10bb97935": "85d17ec58c59b7d438d7d0a7073bc8f2",
".git/objects/27/5199abe8b84ba4ed9086e712f8969047966f57": "b9cc7f9a156f0fc2a48d832044c0d0c5",
".git/objects/27/32d3bf4a7b5937a9c300f36d1f34c3deb987c0": "2736656192b2c3ba8a52a9df550409c8",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/ab0d14c16b59d8c66ff948dff93e06fd1318b1": "b76acca060cda38b15e66336d186d25f",
".git/objects/45/d632c0be5ca9c236ef6b87d1a78fd666f92b50": "391d6f4058a4a8d0f4e2de9e7868f5bb",
".git/objects/1f/a2062adffacbefe34f771645a6b5393ef2666f": "96615f9f642706aa6fb204b0b29db4d5",
".git/objects/1a/b3eccb468fde52b02eae0ad407a4dbfa1d5948": "415628960ffce5a875938e33cb9a822e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/d2177bad54d3047caec2ac2f0a308aa57b6887": "16757ae26f9c299409c3087c3c892927",
".git/objects/26/b7016e28d5ff8cd6fef1d62e8f5e67bac78b5c": "c98fadc4bbb5ae6f03a04f906f1b76d0",
".git/objects/21/f747d1d1c073b781dffe2e30d4de965c35bfa6": "551a3eff84369cfe6b79ef94557dda11",
".git/objects/81/e8e89235f66fae25cc2b88a19b058c47392081": "526a4cd541e21def3cf58a821f00d192",
".git/objects/44/21d047e4f9a646b523c30260ead8d2c975443e": "cb21e580cf6c588a77bbcd0fe2f2bab0",
".git/objects/88/53060e6c4b49dc050a60c374a1c5d19f6f3b53": "fdc51cf20370855aa3fd7550aaad9b52",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/8f4d149dcfe29b0022ae14f39ab488e9a4f0ce": "a80574a886d0a0f3e0a46f9fc16b7fb6",
".git/objects/07/8d52dfb434c728eb9a419c5a59d419a9442076": "753db7ddb48b5b8a5bcfbb44ee281da7",
".git/objects/5d/250654d16a63ea138b7d23b04009b187a51f00": "b8c990c1a3ea873c7ce5c61c21dc1ae9",
".git/objects/31/8eb967ffe8b6bd46a06daae4c07e8b51f9a392": "f3c3255696f5a3897a04c31338b330d9",
".git/objects/31/226ca23d93d368c1e6ca3c9ad301109ef70056": "4d22de163c6786390f210217fad7933c",
".git/objects/62/24b9af8bfe83eebdc509c2ff4bbc1c43fb1e87": "52fb35b280dfe8f3cee6fb419cca7936",
".git/objects/3f/db58915f54031007e9a6f9184cf53d5c2abfb3": "18a1f9473e2bd361c7732c9a85e095cb",
".git/objects/30/bd78c542b26f7cb41bdd3cc2ffa06757755efd": "cc39150038c11845b13deb7924ce7a0e",
".git/objects/37/c94b7e965c34549f86be980c2cbaaae689cff5": "4b55081d92d86ca70c88578f28c49729",
".git/objects/6d/4c49b0ee9d04f32d412c8a702731fbe3a0714c": "54871762779d1358ba504e667e3b8b0b",
".git/objects/01/46f2c37eeea0f59773d79fb52ce260368cbc80": "9c07f760a2c48a5f1293878f316c0804",
".git/objects/0a/9b2b03bafd90ef880d4d5edb8778dd3dffdb00": "87e4addd19cf512eb66d392b61f5120e",
".git/objects/a0/644656bcba61d82af675de37c97fa68b9be013": "73d7951acfca53ec0d650ae6a690c9c4",
".git/objects/a7/9ba40eff790e7d6a44c1403045dd8dab8ad15f": "eabb7c9c410abbe3c1b36dd6da457069",
".git/objects/b1/bd4b7297f7baee7cacb5bc0ea64092196adcd0": "c488403ea8aee53cec0a251bcafd3947",
".git/objects/dd/5f077670cd474c65c4effc3582c3fbddcd3d74": "842d3aa1b490f4927e9ac5d4b969c3fe",
".git/objects/d5/5b9ce2e8f92904eac6f9c1917355adc3121419": "a095a7e339911dab5512ef1cf1cc0a70",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/51b4ab11b484b5a3fac539f703036421938a21": "4438d42a2408463420bb0f3399212140",
".git/objects/ef/82bb75caadafb46445f928eb864b7a117d0232": "082ac379f1f88447259797e7f406ddcc",
".git/objects/c3/68eec5375828139e18c63404996abfc60b331a": "484e23ec99497776f2d0c4f793ae9f7f",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e6/543c91c2e64d26b1c73b977c2a3159cc8a25db": "558a20a1695a3e61e491e1ec406272de",
".git/objects/f0/398578abd2b6c9d4e0817a74b3f608175c9bf5": "a956638b6232aa3debeb8bbc83e98ab6",
".git/objects/e8/ea5793481f5dffec0c43af8cba0c59cf2dea19": "85993913e9144aaa3ede075fbbcfe1a9",
".git/objects/c5/7c43ed0a71c52cd368852186db42029fcfbea5": "a372298ce676085f0342b9d2e3041226",
".git/objects/c5/3f1a22d213ee0d46d26cf8fd1db128016a3261": "2d528162d9e6e6704a1411a91f8686e0",
".git/objects/f6/7f0aebe33ec30507833d3a8ed8cd90187b992b": "5b213d1e2999e319b5bec014947a8898",
".git/objects/e7/027d897feb25f7eb25a5999b3e580298cc05c2": "f73f713bd6658d910c57d66ed22761c1",
".git/objects/2c/c56f6c76a9e9a0c3b7b0dbcaf5858d53517b78": "5ba38473ef44cd0395ee8a587891fcd6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/3417aa6bd7f25d09807051108cc9389140cc27": "b445968dfffb739f15f076f24c60e544",
".git/objects/41/dfee46b0ac25b24da92fea435186aebb5497ce": "431cab0e784f2abf275390480f2606d6",
".git/objects/77/e33d31dd129f6087b24ece6c4e797711c2a30d": "ded55acaf1adb48b50f0f8acf07d5b3c",
".git/objects/4a/371b02ac0abdfe2561f7ab2b54f95bbc369920": "2d583fa3948e0467f812b19b1f6ca7c5",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/4f/e1a1cf5fb4f7c1a6044e37d29447d88cc9bcf2": "837e83726ccbe0170c56c5dc9e97cf9c",
".git/objects/85/c5e72246aa22947900c4b3caddc1f47286264c": "21b3595ea6c1b62dd76516ea7d0aed0c",
".git/objects/85/1f0eefced54a5db9b92f9055c2b53477d430f2": "4b9742f8310a0240d26733723a79a0dc",
".git/objects/13/724c43476b2659f0daec317dc3897d474c8ede": "399468b5ff6368ed160e15924dbd0673",
".git/objects/25/f421fa93364508af557b030a366dd1b93bbb32": "1402c9b5674fb0a76b22c227b82231a4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "384d1ce4aebeefa4f262bc038de2b177",
".git/logs/refs/heads/main": "384d1ce4aebeefa4f262bc038de2b177",
".git/logs/refs/remotes/origin/main": "8bc7dc9163443719f9365306158121e7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1784a49dbd3f3fc34c4a7fcc93522701",
".git/refs/remotes/origin/main": "1784a49dbd3f3fc34c4a7fcc93522701",
".git/index": "16a58e1e53cdc5146c36cc2830eaa45b",
".git/COMMIT_EDITMSG": "fc98e471398614ad0e163dc50a258e60",
"assets/AssetManifest.json": "729e0af36d81b7905cd458c406c34abe",
"assets/NOTICES": "319575907e3293cebf35ae1911f38a7c",
"assets/FontManifest.json": "105e6c1c91d0ac97ee4d0fecda59f3cc",
"assets/packages/glyphicon/fonts/Glyphicon.ttf": "0c5ab8db9834cf88e81f120743fbe2c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/projects/audio-converter.jpg": "b9101cc27df0bc41dda8d6a9101909dd",
"assets/assets/projects/vitaminler.jpg": "14490fe44fb963eac0573b93bffbef56",
"assets/assets/projects/fitmoda.jpg": "d19edae8f7c8f37a821b89250d9ad757",
"assets/assets/projects/tomya.jpg": "3ccbd6a6b65463d7bec5cd61ec5f0a92",
"assets/assets/projects/btuner-ios.jpg": "d8325a5ec4eec85f77235ef304ad6704",
"assets/assets/projects/istanbulpos.jpg": "4ebab7773468f236acc587a622193b7b",
"assets/assets/projects/hpay.jpg": "46b292f63a7d41778832000df216be74",
"assets/assets/projects/habgusta.jpg": "93a2b1863e220e600595c966b69208b6",
"assets/assets/projects/questha.jpg": "869b911f1d659206208d2afe5acb3d34",
"assets/assets/projects/supplementler.jpg": "e849e181262a0ae80b0a96b5966eacca",
"assets/assets/projects/sweaters.jpg": "ab9a63e735f19a14972426825a5445df",
"assets/assets/projects/staroke.jpg": "23f26388d0f435a81855e8b31357189a",
"assets/assets/projects/btuner-android.jpg": "902b1e666ba2f98316e6b75996c3887f",
"assets/assets/data.json": "0101222ac385c8161b3c00a9b79d8aad",
"assets/assets/social/github.png": "01d067b4e5c95797c139cdd5bbc2da9f",
"assets/assets/social/linkedin.png": "716de11483ca6e14dd90c4e4c0ecee28",
"assets/assets/social/stack-overflow.png": "a27a6b82af35ab57702c0725a719e429",
"assets/assets/Horizon.otf": "1b054287f76ee4678531039506fc46a3",
"canvaskit/canvaskit%202.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit%202.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
