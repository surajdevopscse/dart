'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "88bf148964e4df8fdcbe806831ffc112",
"index.html": "7fe7ad86ba5c49ddf39f092dc88aa703",
"/": "7fe7ad86ba5c49ddf39f092dc88aa703",
"main.dart.js": "b44466fca9b8fc3c9045304cbb55729a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9b3e95d7042bf57b9b2bf1ba58fc1dec",
".git/config": "c2ad4869cb4d0bd82f9ece5768da4993",
".git/objects/61/7af3d81ee0df5bb92ff6eecbab59da432b2b0c": "7f106f4971f6c72adf296882ac1799e4",
".git/objects/61/159940645a8fe35db66b75d9bdc8a2b65dd396": "72832689ca82db6c6e7244182e0a067b",
".git/objects/66/e018946c1321139ca6c8ed31d53ed38d7343fb": "6408a69fd503a78c395603687a7c8b70",
".git/objects/68/acd7bfc1be3dc79a446fb7020dba97c34e23de": "78274c485cc7779f7496768b26f698ce",
".git/objects/32/f6bd35a480ae336c415f9fd96df12ea3ca19ed": "191ffd8237becaaa7d7cb4bf8d49fa25",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/a66944ddd5e591cecbacbc94ac220a4d884ede": "1495f204117e07d9b361f5dc737d312c",
".git/objects/0b/dbc3a38234aa71066e6cc9403eeb511aec282e": "8ab9548c0fb8ab04f5bc170e3f165724",
".git/objects/93/e1e5cd794d886016afae423c9aa5e99d2ccd1a": "cfb3e3a82e6d41889e24f0dd6b994dab",
".git/objects/0e/7a85b7cbab7b5140f857ba1406e24cd65c21f0": "de706fe9c157f45981001632d8cb2cca",
".git/objects/0e/189d172e46e73d72ee7df044cdc15c6f27cc37": "c271ef9b6b8084e6a0253e2ca51243e7",
".git/objects/0e/a46e81ce15ccb1767a51aaf061963ad528efeb": "4e571e4a27c5bd49c4ce8009bdcac524",
".git/objects/5f/22c62f11ad5abc2763be3bc7edcb8fcc3ea37c": "159f643aff4800402cef73389c012841",
".git/objects/9d/f401e04778032a54438e1f1ab22ede80748688": "3d94d868a5e9a136cde6a208e8dd088c",
".git/objects/a3/82c114ee0a568399d596e1f79d957f3b47f7bc": "96fc2c3070744204da27eefebb211f4c",
".git/objects/b2/e75455f1698187c5a4b85272c6d3ba29a74073": "f9484d994bf3d12784af304719919150",
".git/objects/d9/7402cdc1ac63466b9953ac2fd4c8869ed3357f": "207d82b9b0ccba40f8a0b9352c24d778",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/3bd4dbe2bd11748aff40e09db123ff85d28ff4": "723b14053910d67cc267875716c2aa36",
".git/objects/be/91d1b5d7d1339346b1f41de394dd2cd5a16eca": "21f4fe1bc691a761fad5eb0e6f607352",
".git/objects/b3/7696ef1b72b3acd450ee6d33cdbdc00913b0d3": "f5c8fc239a73600c629bedda0e7e929d",
".git/objects/df/a9838a8d9fc294185266bc3da9f0e7954bdfea": "d68a9cb2bf52b121eacec2798ebde07e",
".git/objects/da/4ed251b4e7d1ab1ae08d2de23e56c1065c493d": "30374db0a4f60cf459624599459f3f2d",
".git/objects/b4/4a5a92d36bd20092fea684a1188821de3a2d14": "3fd9a4df0e540108ac3b3201f60de4d9",
".git/objects/d1/03856200be2e2e8f94be7de3bf9c8886892349": "8cc34af438dbe2d77ebc466168361109",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/bf638a7010487de8747c97dbcbe2dd4256cd7e": "f6bb61d2bedf92d5a5adfbf5794d4542",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/ed54cdeab5d99c3ac45fc265385cfd66626b69": "60dedc30bbed40bf4318bfb921aa9ab0",
".git/objects/ee/7304b3319566ce05d47e206c6e8805eb827a54": "5c385dcd12585f44a4a9f2bdd9b69697",
".git/objects/c9/8cb6e159a957ee5b099d4d9ec0efcd9b2fb187": "159f8fceb1f4c8458c2a2013941e297b",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/cf/358e66fc29be20bd50a6e050cf0eb3d0a408a8": "555865eea1cb1393b5ece2b343bb90df",
".git/objects/ca/3faed50fa958e059c30f16121c211993c8936b": "369afc9e1ec344198742ea10c34d304d",
".git/objects/fe/cc53391c8c06a5539a902ef96c10735b812b6e": "ef8733bd24df224e14ac0d2f7e88dcf7",
".git/objects/fb/ad747168766447c51635e0b007c6f49ec98791": "34e23df8b156f762347289069f2b17ba",
".git/objects/ed/d78028f54ff0e884faeb46e186af0b1c3492c6": "e79f8a19f5b8a321bce1c9e46fb6f316",
".git/objects/ed/a02b6b667492bfc439f2740c7a4dade0fdb6dc": "69ac21acdec1d6c9bfdd820ecd6f827b",
".git/objects/c6/736332a258f97a83019d5f952729777ff9ada9": "c529c701652f7d03f93faa4bb732cd05",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/4e/1cd267220549722fc3298f0d64860abec7c981": "84b2b299d6215857bae137a5fc1fd479",
".git/objects/18/c4fc5bb357f38285993b94d9de12f7f451cf8c": "d36d29f6b8560a6612b857221fb96545",
".git/objects/18/4fb7934b6e581a106fcf54ee8ee7072e64a5cd": "b4bece171b184cf99b0f0ed65298b9ce",
".git/objects/18/de9a73522ba53561e26855bd6ff9e58cfb8e32": "8882704e0e69a6c70d6eaed2426a451a",
".git/objects/4b/b8db59fee951a79e368e0198783f14e34787b6": "e25d024b012560b9b87ab448f67368d0",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/bd1b9d501bc723fb5663498306bded4320e8de": "8d574755ecb8914d200534bba42286e0",
".git/objects/42/f3731869f9ed8aea5136e973041bea6621c276": "560d486f0404bf96501560fedcf180bf",
".git/objects/89/d9e0d3920c2455030adc7b04b3a1a03f7d563f": "01a9f19e9cb7ef5d602298c15bc8fc04",
".git/objects/89/9bd97db54de0263648a805542ad6cc729da69e": "58df9026bf4abda26a30b863ccdf737f",
".git/objects/1f/160b31c8665c154b094273dcca8377952ad5c9": "ca4a2ff0de02f83dbe896d964096585d",
".git/objects/74/79fe65276ebcb881c5cba9d01ccfcdb67ac30d": "5db21ad2b80e619a3fd70d5e2a355d1f",
".git/objects/7b/0f2f45c59d981c2c642816833d9858a0eb7f90": "0461bb4a8cdeea93b16bdd792c980567",
".git/objects/8f/eb8249cef26b943c360aec81fe948e7b9ff181": "1ad7ac7108a52b680bfb148726ff4bb0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/de9658055868cc428b963de194b028a8139700": "c2f06915993c03dbfb4b836d532b31c9",
".git/objects/86/dbf1c039057e42ce5f0ab5cd44955148f0a30b": "cc08939427d89fba3f612345adfe93c2",
".git/objects/2f/477a69a7aca226764925ae634b0020bd70b3b7": "43a382c398161542a33fbc0fe8532a95",
".git/objects/88/1dda4c60512ce033115c0ab12f39e477a9a747": "d0a9c6aaea5b0b909832320412ce9c4b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/7d836e2909b494697c6ceda5c537f5a8acc863": "023dfd8cda637909be5165441fc9c492",
".git/objects/96/cb463d3e42cad785ef4dee9d9043f0c023405c": "ef7f0c3eb9232414c1bd39f2549150aa",
".git/objects/98/879adc138e0a7b6587d739844fb5b63fa5896d": "276669a158fa96f97e46cac5458e857c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/a979ac8bcb940dcd76187e87a7b295aeae7e70": "cdd198032e99d7a377a5d96a41cff1fa",
".git/objects/5e/6f16e80973b96f9e663fddf4efee6a7eb928c9": "72b1d1d5db56a6a18df911f5ed0d851c",
".git/objects/08/6f49a3d2848657eeb107a78ed4a98eab45f1aa": "fc7f0d0f9c0b9e5131cf99b7c7507672",
".git/objects/08/f7167fa0ba17ccd93a8a9a4c73ab187822c386": "eb0dad2ee65099c9c17761952d6136cb",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/706a3852d4b00c961c411fe69af45182192687": "68c38e497c99d2783077dcf322fd057c",
".git/objects/06/4a6cf90c9a7110497adf3cb1dae405657999c7": "63b3cfbd3999b55ae36c17870dde592a",
".git/objects/97/aabfcf1480c5cc34dfe2ca76b06a468bdc6f06": "8134094fd4d7833ecf2a07c5107e97e3",
".git/objects/97/98b18a07837b808845f726aa1f3271a7f9a517": "d374979616cef8cc3ee268755656331c",
".git/objects/97/ba1fe6ebde9ca16d0850b2a24bd8d9eacd3aaa": "6746a7543d67e4eddd36a8367d04caaf",
".git/objects/0f/e9d0b34b4d7e595309720a90310b7a24d4cbee": "40c9cdcd4c4cbe9731f6b075266db412",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a7/a7410ae6dfedc41ad7e16e54d64af286a119fe": "781508f6105e3ead971c5c2f01257e92",
".git/objects/dd/5d12458a0deae75b278b71dfa966fd4ad192a3": "9cef17bc04024093061aa8ac46f1eb03",
".git/objects/dc/ff320194ba10f955bdea45c95b4a2b91ed62cc": "4c1c2576d7feff1faa9047763c8bd5cf",
".git/objects/a9/7051d323e1ea8541f42bf45e8e6c0fcc84e272": "15f8c073e1d7505bf53d0eb46eaa3481",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a6/93ca02c3c148d92fad4a9f9e3982ebe1d1ccc2": "cfa42ee1a4e08626f3f495de43c2ec3f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/783b3f795bebd4bb5b541508e5753934cc1e8a": "abfb2a7090b08a379932f067456b9a80",
".git/objects/e1/7dc418db9cfd899bccc6e2e42019977830239d": "eb25ea5fb89ce7da76b349eb78fbf501",
".git/objects/cc/54d549405422f5a57a1fe23cbb51bf0cc39cc6": "9e62a9de82af67255ec7e9c1a661e320",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/f636dfd61d06d098d8c6ab5d474ebb66e6e4a2": "f331ced3e36b644ad51a392a7c53298e",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/fa/b6a2899fb04c5ec296416ceec495ab7331383f": "d95654ea0395c606cb8ca85963a191bc",
".git/objects/fa/b29d91c5e8a2e74cfef6129405386926fd8964": "0d472f6cdb5a0d7ad6b1ee7eb9c434e9",
".git/objects/ff/542f70c69d88c1886081ab99200a806dcc9e1c": "b6be565b266afbb6311fb2caa0e2f37e",
".git/objects/c5/4aee439c5bb817da34ba399d4f89c37277d91f": "2d908cfe2052e46affa4bd5b66447e63",
".git/objects/79/52ac29ba9b727f61301e75bafd87d9342ad4dd": "79bda84ba13be7aefced1182d878e32e",
".git/objects/79/1a3cf4cb0dbceae6c593482197ef5420a97c3f": "278184d0bd37cb8bdf40de6f8637b881",
".git/objects/79/1fc42b7aa286340cf003a5e65c1ff331bf79f8": "ab93269a8891c73dcd0520b5b36d0c74",
".git/objects/79/c30a80d3a5f317a90e61fd363e70d88a05a7e9": "9b0a163a4eec11dceca225b571903bb0",
".git/objects/2d/1b506ee80d4af593537fd9ed47557c63cc57ff": "1c8a2f3a7ada04ab72e82b8b790376f4",
".git/objects/2d/f823b5111a4d253f039e348b543b0a94ef24bf": "77099845c453227ad5841bc961b47661",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/8d/ea81cf722c80f84cd44aab765fa57a5f42928f": "a41143f279e8afd740620ed0545d3cde",
".git/objects/12/8437f467b32ff045e5bfcd9a0a65730c7acd59": "3803ff8542a2b9c10a701c6dded8490d",
".git/objects/85/0438c57f682d615f9b33c9564a42aab1e61a41": "a4f72337ac8a6efcf20e77e70cfe4f12",
".git/objects/85/16cf604609f5cac71ca9786e470ff5074042b3": "e4c978bf4a9f2c0e2365be261f692113",
".git/objects/1d/bc2f67628f0b408a3222796cc88b0d5f9219ca": "1100e341fa51fa0852695021ae1d95f6",
".git/objects/1d/00f1ab597f8129ee2a9f35afe22a949a903551": "dbf185acc98aefc77d0e2fb6e6f3a426",
".git/objects/71/aad807dbc574624fbc67787a817570f078e3c8": "d891f090af18e063a9720ad1df20cf70",
".git/objects/1c/ca2faeb7f82466b044c18ba4c2d63643ee8b3a": "93ce7a2101704a476bb6c0331aacfd46",
".git/objects/40/60eaae6c9faa0818f15a1ff38a928bd6349a45": "8d3e7986f75301893d4138dea685eb79",
".git/objects/2b/3cf41f5e2e30cb47bb86b2b1344489772730ce": "bc22f10d6ba210d033144538f15f50a3",
".git/objects/2b/27f9c0921064d98de932faf9af748429b7529d": "bf4204bfbff38ba3fea8dc2dd2b16b50",
".git/objects/7f/8f0c24105aab704f46a398dd7f854abc53e1e4": "ec06e0e4b479781568f0ade6060f6c36",
".git/objects/7f/892a947e983e79cdbb6f1f9b76659e352287a6": "ba0e3324c3acfc3cea91e9ad0d9a4d84",
".git/objects/8e/0c8b775bef7ad5043d78698adc0104252155e1": "c7455a0d62d8f8191c487bf2f0c49b2b",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/22/e4f3b42926b1bf60302fe4f5e764bb63906e37": "e0746f10cd1e21b9af8bc2e7abcc2921",
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
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
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
