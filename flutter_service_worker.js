'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "88bf148964e4df8fdcbe806831ffc112",
"index.html": "7b725125d8fa49c0bbe5bd799de63c0a",
"/": "7b725125d8fa49c0bbe5bd799de63c0a",
"main.dart.js": "b44466fca9b8fc3c9045304cbb55729a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9b3e95d7042bf57b9b2bf1ba58fc1dec",
".git/config": "c2ad4869cb4d0bd82f9ece5768da4993",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/bf638a7010487de8747c97dbcbe2dd4256cd7e": "f6bb61d2bedf92d5a5adfbf5794d4542",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/08/6f49a3d2848657eeb107a78ed4a98eab45f1aa": "fc7f0d0f9c0b9e5131cf99b7c7507672",
".git/objects/97/ba1fe6ebde9ca16d0850b2a24bd8d9eacd3aaa": "6746a7543d67e4eddd36a8367d04caaf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/79/1fc42b7aa286340cf003a5e65c1ff331bf79f8": "ab93269a8891c73dcd0520b5b36d0c74",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "393ff5e74ff41d58b0ee93274d4261ce",
".git/logs/refs/heads/main": "f578b62f4cdadfcc6897d2f3a653c5aa",
".git/logs/refs/remotes/origin/main": "8ce7742a4ed137e3a3cbfbeb6b2b37c8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "46170a2bdaedb5f7f61135fc21980ece",
".git/refs/remotes/origin/main": "46170a2bdaedb5f7f61135fc21980ece",
".git/index": "66eead5d989e500183aaf74fadfa3b61",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "6e85249264040dc43eeb78596189319f",
"assets/NOTICES": "fe25c5d7b04877ec305b2a0a72c2168c",
"assets/FontManifest.json": "ac3f70900a17dc2eb8830a3e27c653c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "53e201e2634ad509e842434022ac4a38",
"assets/fonts/MaterialIcons-Regular.otf": "4cd3f553a296a92ab0c55c6325796026",
"assets/assets/images/icStar.svg": "233fc2fc906e94d29a1b28a72ea129f0",
"assets/assets/images/icProfile.svg": "4c46e536dbbe6d8d650f2a1bf04611f6",
"assets/assets/images/icPendingLeads.svg": "9f1fe4e5f6e031ccfdea59fb9948625a",
"assets/assets/images/icNemXem.svg": "925b3d55514abba03d8d126780eb9957",
"assets/assets/images/icDiamond.svg": "b0d53a4bed8758b6f477b47d0ba25963",
"assets/assets/images/icCandle.svg": "401a788e137a7500a97365dcf68934e4",
"assets/assets/images/icCategory2.svg": "965de4f19afd16e8a776bdce9e7209c4",
"assets/assets/images/icLogout.svg": "5db609a9858a36e0708809bdb0cfcd50",
"assets/assets/images/icEdit.svg": "7fe5fe02f7a9ed328f33e81220ffa288",
"assets/assets/images/icDemoSchedule.svg": "7557668f14aecaea5fabb1cb4c802a54",
"assets/assets/images/home.svg": "63f8db56028089f69eb24b71f7b07ed6",
"assets/assets/images/icCrown2.svg": "b4f65e02e35973d2bbef5b80fe8aa6b4",
"assets/assets/images/icCall2.svg": "30358b33d9b112862c282a1e158abe1c",
"assets/assets/images/icLocation.svg": "0530ec96e191e9a49a232c4b0a6ef658",
"assets/assets/images/icRowVerticalActive.svg": "291643e194f2f864c6292446ff7bf510",
"assets/assets/images/icCalendar.svg": "d762dc11d06925a7d03819e5fb5b9087",
"assets/assets/images/icCall1.svg": "03ba54efabc4ed46d4b203a70ab3ecb7",
"assets/assets/images/icNotification.svg": "7ca148b22d9c25fe33cba483dcba9663",
"assets/assets/images/icEdit2.svg": "7fe5fe02f7a9ed328f33e81220ffa288",
"assets/assets/images/icConverted.svg": "c2e7a606155a67fc9f6eead8815f3bcd",
"assets/assets/images/codeActive.svg": "2f8774d6374d9a5afc2a303097d27be2",
"assets/assets/images/learn_dart_logo.png": "9f894b7bdc3fb13b1bfb670880f90f81",
"assets/assets/images/icHBLogo.svg": "7b9ee4a12c1a2283e2de9c7a14157f92",
"assets/assets/images/icPrimeSend.svg": "c74d7e783f7c2bd956de183e35db160b",
"assets/assets/images/icAdd.svg": "cf53c720c03a5d5ca6522c8630acf3a8",
"assets/assets/images/icSearchNormal.svg": "92608368bdb9e8aa565f03d069e459c5",
"assets/assets/images/icDirectSend.svg": "2b35c388f146e8f3ca2d6b6d0635b125",
"assets/assets/images/icHBLogoBlue.svg": "c60a3950e59db7287b97995998a14bd3",
"assets/assets/images/icLogin.svg": "fcc702ebe8d90414338514feb144959b",
"assets/assets/images/icFourBox.svg": "f84357601b8cf45c248f51044921de33",
"assets/assets/images/icProfile2user.svg": "9a84682a031a042fba8f17b677aed76d",
"assets/assets/images/icUserSearchActive.svg": "cfe0010c7219743f7afbe170d03a2f39",
"assets/assets/images/icSms1.svg": "f404e065b592730b82037e49b5262f2e",
"assets/assets/images/icPersonalcard.svg": "fde377952d333521b63a0533d9faa597",
"assets/assets/images/icPersonalcardActive.svg": "f174562c2866506b0f1cc8ecfd8d4490",
"assets/assets/images/icSms.svg": "ac4075998dec62159842d1d03959329d",
"assets/assets/images/icElement3.svg": "19e6d5dea30ad85e42fac2556c591c82",
"assets/assets/images/icCall.svg": "6590054953cdc3e2c72ea1815c8fb4b1",
"assets/assets/images/icHBLogoWhite.svg": "33f2007714915d0ecd7fb9eb3cf0f3af",
"assets/assets/images/icEditSmall.svg": "30a7da9969c5367d6f290c658d266cb5",
"assets/assets/images/icCalendar1.svg": "8da0d201308a1602e40fa3437ea60033",
"assets/assets/images/codeInactive.svg": "877e3b72c6819c7d4cb5b96382fc5d59",
"assets/assets/images/icTrashSmall.svg": "a83baff6310d95cec0bb9eb4d87744f4",
"assets/assets/images/icNotInterested.svg": "97fcce0cc7f0e93a66939f7419da55ba",
"assets/assets/images/icDemoDone.svg": "a9d8572f2478fb2a325014321970fabf",
"assets/assets/images/icUserSearch.svg": "9d7349ecd7ba953750f0c33d0a8b7c2f",
"assets/assets/images/icTrash.svg": "660bbbe21262d5fb5f96cac38f61f8a7",
"assets/assets/images/icTotalLead.svg": "2bf0022dbacf9c6055a871888d28eab0",
"assets/assets/images/logo.png": "3ea38ab36c272d7692859d4a396e8d79",
"assets/assets/images/icCamera.svg": "582c446ca9fbcf067391100fe9fe37f8",
"assets/assets/images/icVerify.svg": "776865d59c5461f07b2784082b8025f0",
"assets/assets/images/icCallSmall.svg": "69d0cf2121f26412b6b9af760c91382b",
"assets/assets/images/icRowVertical.svg": "291643e194f2f864c6292446ff7bf510",
"assets/assets/images/icFollowUp.svg": "75eeda2e1d8a68c133560e799f97ba4b",
"assets/assets/images/icNotConverted.svg": "890c7d99d36f7e6d1ea9630439e74d77",
"assets/assets/images/icCube.svg": "fbc440794db67f486d2765243e225a69",
"assets/assets/images/icMinus.svg": "b20ecec7f54060ce3472d781771a6cc2",
"assets/assets/images/icBriefcaseActive.svg": "428e7325e9ed64b983a14efbe38efbd7",
"assets/assets/images/icGraph.svg": "b39e3d1cc938b66667261c9f0f1798c7",
"assets/assets/images/icUserSearch1.svg": "b6f29166cb44ebdf8b021e352c5b74bb",
"assets/assets/images/icCallBackLead.svg": "a188d984e1b2417201bb4a47ca9e97e9",
"assets/assets/images/icSmsSmall.svg": "e740faf30ed7fa75b48c37fdd35ef57c",
"assets/assets/images/icFourBoxActive.svg": "19e6d5dea30ad85e42fac2556c591c82",
"assets/assets/images/icRowVertical1.svg": "c1ce646c76632ef724b371d942210095",
"assets/assets/images/icUpload.svg": "69cc8a38b3e8845ee2a997a065a2cd1c",
"assets/assets/images/icTrontronTrx.svg": "53a6b282fc3a307f8f1bacc04da2f477",
"assets/assets/images/icArrowDown.svg": "b6d2f032e0ad9299a9892b2793a78b44",
"assets/assets/images/icFilter.svg": "5aa9aa4067215665de1770726c6a2005",
"assets/assets/images/icCategory2Active.svg": "dc73da483f9a92f747d78515305c121b",
"assets/assets/images/icEye.svg": "c338a2faa10bed1e6eb790cf8e5fd3a2",
"assets/assets/images/icProfile2userActive.svg": "fbb03dd0ddef03224056948936e6310f",
"assets/assets/images/icBriefcase.svg": "fcb4f8840ebf40c0445003786a70af96",
"assets/assets/images/icHBLogoBlue1.svg": "fbab3e97094d6be46555e0e0b5a705af",
"assets/assets/videos/home_video.mp4": "e065d1522863e0dab6df6f6f99a328cb",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
