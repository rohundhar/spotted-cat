const PreloadURLS = [
  'http://localhost:8080/api/proxy/image?gDriveId=1ofduUI0JYY7VzfmfJ_0EsfGvB5dQQGzO&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1sxxmflcvTrXVfyUOnBM6LcC4wOhbaE3o&type=video',
  'http://localhost:8080/api/proxy/image?gDriveId=1YtGEtXdIMuu0eBdtEAdw7SVfBjlpcAex&type=video',
  'http://localhost:8080/api/proxy/image?gDriveId=1z7tN2OqdRXibFsNVdMFcOA6zZ5LIQN1r&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1MDxAEe-rwoN7PJR2DwFb2NQbxvR56pBQ&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1Gc46i-K0RCGFsDJdFWMQNjoj-mJiXheu&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1pyvL4iY5NAcd7Amdomks1f0WV9t6uesx&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=11Jw8TG142sptT90r49WsPkqHs9AjiBHp&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1BMNd-RDmdmH6HcUq3ZO4MJVcy9Ab6BAw&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1mKCYpgdI4vV2gQcJSEL7YlvjMxud6c4L&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1tV7um4eKReitTYAltiKTnsr1KywvfAT4&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1KAkT2skpsV7Ne9ZXA-nwerdU9vZV60DI&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1khrMlq-tQ4WhTXlVcv1M26PxUd7TVa18&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1_UCowyoySmEdWpOR9QLHfIdiMpgiV46p&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1RdhFgQ7Y_KiOog02o4VYYe0rV9AnsDmE&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1-XwLRMJ0WfxtOz2NumHN-QEQqdFskv7m&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1TMIzV5WZYULo6oF9ywsrh2uYCCc5GgHJ&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1qLoRpMrkv3_MBO4l2rxTl6cRr0LsykL_&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1rEM8pYrPS8GB6Ug8MX13LgciGQf4ogv2&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1Mbyuj5rkC3TG-tJKHM9gPoVEH1FugNBF&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1SLjCgENeqtEVwDSvbin00bk_rFAXh6Tj&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1MfqM4wXPjP_VywMMkDm7fGSCxTUn-tZA&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1-X0TmXPSzg8M4BDD78wWLJbJbcTGulO5&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=12F-srw2xwUKMqziji8Dg_1L2ySBfNYG6&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1u1cHLoMpiW8GeusDQCP83qihEwZgxpaO&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1dZqSTyJJ9TPuFzWxQH8XGRBZcvxh5DKj&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1WiVt0ZOAw7NT1lgu4mO70GTozXShfmM2&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1Kw1c1R8O5pod4l4IO5boA7yPHn9bWwYA&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=10442Ya1oCFKe-R9Z5OgpTRd1EMYVFjtN&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1a4yR43tcU74E7h3hS51RJXldl1-8gp0H&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1EbClwJvFTXUJK1fva0-X84uI3iFWbiuM&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1yZaBBgRW2AOIsTARFkJ2ucGvN1Vl0fjx&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1b52vBi_X3hRr6SAN7j_awtZtwFG_xKgb&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1KBK8PY_TBDtPaD-MDtt6F2IMJ4VIxcNh&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1-E44M55725PN_K_Gm63rmshHGwxF9zge&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1559GK5S1PjFrcU310jtQAuAN8CXsZt7v&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1fKIQ6Ejb35XvwlPyeVrF3soz-mU8dYO-&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1kBswt1RYM7PcPZpqH4KRG5_EgfgjeVHw&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1LCXeE6VuTH64_qDw9lsTX4yTxI0GqQS0&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1i49obWiAF6AdJ6V2P-VxLTx5mKQkL3Pi&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1Qe0YfVvn66T5m3e7np4-ufDAqn_1RCOh&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1DCaUhoaiqgnMNkkndVXrWftYfmC5k9tZ&type=video',
  'http://localhost:8080/api/proxy/image?gDriveId=1RSeSLSgTzfFEBOvD4qgMj-KkpMwygG21&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1KbzN8XMQ_IE9ARHqYJB4beFvy9yjzypC&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1imOxgaJWk57rp0WsCMgjyZdKgLgX0O1g&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1gWS3YXyxaliqotwLknQf0JKv0siMv9s1&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1C7LNisVqyEUoyjtZVTrubL6fyl1agB9q&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1X4beKPOPYaPlXtJhMLZyNID1ENl12a5V&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1IrHHQVKv0IMok4-xrOhuz6io3aKEHwEE&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1bG37kR4gTjhLSrfKRfbG8AlhhpsgiSJq&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1QPHHPoSNh5y0Jr4aaSeouO3ypZ1EURpm&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=196QOl7b0VZ_Q8yfMMlWhRMszZmaI6yzh&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1S512qDFbFzHW6XrYWUoMRHn8LPiGxezz&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1cvx7i602ccPWcuuhq4Zm_7rSNQbTfpeZ&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1hYwMBYMgJrxpHX74E0gIHB7UR-XKMdd4&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1LL6r15Xbf3Pp6aLG9SDD7FnB5tm36COY&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=165znU-PF4kW98mltjx34x8EP8_X00Cak&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1zA3T9TtPYINpT8psYpsOWKYCtSsLadbQ&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1GNHzW0B0qFPCYkNoftMAV9qd409WhW51&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1RnJznSDyYVuhwS9HlblwBRrC1q1qiWhq&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=16_TtbVPdmoYG7xoUYuWwzNGLDj7iOUj8&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=198GvvrOv9O1kAPBkI69M0yAU4P4di7pR&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1bUYPiFA7vcEajryZ9BH8tuqVBxUrMG8g&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1GZ0OobGaPrUTkq4YQB9NFrIRSKDGNYtE&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=11jnjE6oHm4Gp22ilnfRNCLA_6IzTSmk7&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1Qk4_bnr_FPTHuQIBmRGHITB00spyVl6B&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1UY5DEhmCQ1zYyV9i6k4XiK44Y7fGKYNR&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1lZ0aw9kfeQqDkvMUS5DGghFSzvAqVZmB&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1vUVQVgpBgqkJSItg7HakBeP1b6V93gjR&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1-bgwiMGki0tuUQ24KDJDoOnW1fDtQTZD&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=18y3yECqG5JLTu1JD7-eJ7AkS9E8wuPP3&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1C1yFxWoQmUWCJTlXkfO7cSzmi4PHx1_7&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1ekjDjJY2nqLIoiu4rcxOIDDhUCeyuN3F&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=12VxHv_q3uDa-2Iq4VELyfjmRcoDtrVka&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1NfoOQXMKAcveR9plUxHDrByDzmjOGH20&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=17mAYCUDEd6m9Rt4zZopSSy7j7qOTsYRk&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1H4l66KSuSerX3EPozFB_zcgbyEJSSr3k&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=17_hO8csOnMK4TZrB0xWx4sjoR5KnKScT&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1yBNlrW-fNFq8CBpwqiK_U3kYkzBITIvu&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1MiTo2oJFXw-0smf0yxS6D8iQOgWIw4BN&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1i1QdOQmDLJFSi3T9hqZ1c2kKUj6XTIuN&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1UfraXmvuc1m0x5OsrAXmIqT7OIF4XIWi&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1cfahcuW4yLCIJejuRSoX5iysUtU56KyV&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1xS50WqOxPbS4z-7zvlmUc8vo34b6b2hL&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1lg0Q9LHqpQALdLs_rTUBDlykoJED_d5m&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1a3mDPwTJY0R9ft2Ku2Z7PFD2DsTI5n9d&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=10h-XanERQc3b11zFtGVPuYDWhscfNOM5&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1XStEsEXGd3jPP5kjD0iN2roLzoy3oBrS&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1mktSfFk3rexdYd72bK-idx-s57z8pZs4&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1T-WQqy7zJua_XtHQsZmAMRAJCT8-PoWP&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1aojPkiuVMJ-lLEFX6f46TDNRmYUN8R-O&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1FdBWgEhE2kyAJWlPOz1KZNd8qSDR7ur9&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1ly0PxsGxALiCamnfZaBLiJ3QGZteczvt&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1JZOYMtLO6s4TDnXSCypHIobgrPi25x8h&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1c3Ww8APsATvW0tazDfnLr3WmX0L63rC-&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1T1fSlrQG_UTWUrsGvOcsprbkQl3rr1L-&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1BMnrlSXwHDMICn4MxqAuNXUcpTMz4QRA&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1nkI1ibii7w5akQikoUsSlfMyaWHVV9yE&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1q3ExSJ7ss2mZWfTQ3nuitqSAoWsh8x9L&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=11AJFq2G8FhmQuCLYf8mvbeLSRrPQOr5T&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1Jyk7wFHg-lNBbUzRin-l0OGZKlXv4THt&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1h-NSgX2RQLF5yNE0n1vFiqVWSTsK6_vI&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1nZDskSGN_1am6SvK-Py7_UhkTRyv_sxw&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1YHB26s78dqjMnIZLuGI8ZEbOwxsUm-uB&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=18qQbobScgeiYjqmmgJXmvBvyUY1bguuO&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=12EDCTOwHoxtSWC4Ux5QYZ1oU-9C6x1u2&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1ukLE3IgeJ4EamGqHZJjRCq2L9U7N8xsp&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=15GdmhG1IdKYw0_sHJFpqsqNqH4s0lMQX&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1ihEnX-C99qb1KRu8Vq-g0gpXRWsu6f_d&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1TU92fmHcUuUGN8e9Sl3uHbX38MxbL2RT&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1K9b1igC1a1jKCHLCRXfcYJkkqtw9YoXl&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1jEdtK6-cnv-P7HT3IaKWs9X_gRVbuglN&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1NivP0pa2SsabTD47C5BeMdMIziuCYIoW&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1xAhzeBZuJllzUpaZR0METGKjZvZbq-A_&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1H2CAcY3u-TcLG13pgplN8uVkBY5-wQw1&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1IzFWdvhu1Ea60FacAcG8iwbEGFfNin4U&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1gzhahzCF3RKi2PoJoIEMIxyQdRm9ms7g&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1cMeT7w1vNqSLSZSatposCj0d6E4Y9Nlh&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1EfhY7ml7Zyz2p8h4GpQ9yD4GMjtqbMRt&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1AMqwFxQWoTflbo52SmloYwUdvGO2ctGL&type=video',
  'http://localhost:8080/api/proxy/image?gDriveId=1_j0DLV8n3sg53AosBdKsy5xYNPuKBdAN&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1MxiosliOSXPW6c7wOHUXyasbg6zArM6T&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1cfu8EcHyveMI1unYqE5LilPYXYXfaQ7Q&type=video',
  'http://localhost:8080/api/proxy/image?gDriveId=1LR9P8AkPCLbEfNQUvDLaiBPyweeDj6rW&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1coE6EJaxy6xXEwxqAQPfA5V16gldldem&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1nuZf5Bvg7-hO_IVuZWUoySPsTtyIViPJ&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1YEOUQfUNTFzyNHn5bAHfishz9wnmAFl7&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1RgPL8QHmt4ZVTiIdxd4LAJ1rrLA7teez&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1fGq7oyxYHsMhYnqGfwaAr9TzOeiuUE1k&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1hR0tgsc9l_Yx9J4OuXJ5KK3DhoFNiP1n&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1WVHcO1tkGIMZ3LWhuGY3dxhLAbrch5fN&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1D3BNFlS1eDGkK6iklUgP74-qAdflBwgb&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1atNSk_zuNg5JAzFqpLdz5Gx8b3vs3G4b&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=11uuvHjpraMrrSr4YP9xNIyHcxtmHeErj&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1nuzPQwUGa-A1YGHc24tqNBYEUqYnO_-g&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1MTAjEtHz2DZLmYLF2TvGXrUaAHMlRdXV&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1LNIkKwNj0O2D1MID6JtEGFjMDTC9bdS-&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1f2WEVpIJtP5vlaSDYthjQEwyWDF8QBtg&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1WomMbl_7qE6TPqyyv1SN74n5JTFnvL6U&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=16P7K8jKTFfBx4Ub1s3oOq9uwfwHomqFv&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1LG4aE1OLjHsIIhU4pleJBi0LLiyZmGgM&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=15Q1BYHsyoEj-v67OGYvgYXTzrZZfbJcC&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1fmuehlchfBqKi_fRTKi3X1XblDtRwJK1&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1biov9__fxDv1OOYdaz2JQ1ZFuqlljWiX&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1lXO7qqfJ-tRyC1RafgWsR8B5tQCY7TPq&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=18BR0PTtI-kVUY2D2YEl_fPEUy74wsPFi&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1sxZ0YY071kw-wEN9u7EM-GdyuUyMYO_O&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=11_pqXRVeXABMcKygXYbzpTRegg5jydGG&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1jhhGHN_Y5vsEXyayPIzvnC_6WLMCUOL_&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1jgjzZGKzVKl2KNPfofMHQoh4MAKA48Tm&type=video',
  'http://localhost:8080/api/proxy/image?gDriveId=1vzZ-ou4FbR6khZfebQEQEmCiQ_LlNSXQ&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1Ft5oE7PiESNTOj5hxWFhj_f2WOGtP6--&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1RzFy-sg84ROMqX2qZ-QMbnJt4DOaf7uk&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=12gWJnlt__gUbselT6Almxc0kTLup2Mzq&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1pOXbvbSmiFd2VUSsMX3jSKGyxcJJJUMA&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1fFeNfaL0raPfE--iTOHd1EBWNEPqoD_b&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1LgvMIRxoWntOfZ_sC_A4v5DfrQCHdBZi&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1TTwL_5Zr1ZhgjUhG1AnyK_g7YFsoz_eQ&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1R-53ewV7M0ngcUBKWdmjW07erWXKlAfa&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1cmTo0z_UVRkrvOEAPJ8Tu4UX06GC9SPi&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1g6FtdPnhaiB-u1l-6Vow7bvBe3AKJE4i&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1d8ZE5zfoI8STvipRKJEF_vgasHuLC8fl&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=17PF0o5aKzjF4vPp44xq8IO4-xiFQi7vc&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1Y6cyVlVNeb9b6NLrEZpiEuMSTSB2Dy91&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1MazeGpvTuIRYljUFfpdX_1uEJJmks4Dj&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1xXpgarzQMRl2MGEXnrKglsqUhDAsckYX&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1L9lz6xMOkje6v-NLO0wRn4wYqExZSt4L&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1qZfqdYtvlyaHlybHMwDLSI2lyhJHcTgf&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1I0QX3FHNLZ5dVS84p2cTkOf1U_uXhAxC&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1QjKYRvh8IJe-m4NJFYIkCz6EmrBwgiyK&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1J6othG-GMhuGfeRviJS7gIOAsrfiWw7H&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1c_NxRfv_oXbYQ1ldcTN_FHDlJnTprod9&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1zDLNSoVIY_o6DrFb2X7nUUlglrZX5rxr&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=13pnmAoP5fYy5U2GnprooylvdOa0ol_Og&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1Wz0k_nRAKhatnfuTIIZFp6rfB5Xq5n6h&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1qIaT2I0rd_Gy4GHgfquaZkjlYhdaAsPa&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1meeZV49vT9wakiuaesSZkohuelrZhJzB&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1OWmtHzaJeIqejpHGT2Ko4fLdOR3AmE0V&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1iu1H9SYl0U8xFb1WP6v9HpAKv76BZGoP&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1U5-vflBVbk56QO5mflbbgVhYO9aSEoZa&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1-zyMkwY4yvA_pcRNvKnO6-Pqor-EMIRd&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1TSj0zrYXsIBYD-87CnNmKh0OZTStFzO7&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1EmlY7xHfx-fTtrZCld1-XHBM12gNuHS0&type=video',
  'http://localhost:8080/api/proxy/image?gDriveId=13AxwVP5fF2h0w3JeXI2o-TpKs_PbrmNb&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1wMCcsmC720o6BOg5yJ4eRc-vefu0Owyb&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1mPq9JpKsH-_FTlZWZkh_QVgHix03PN1e&type=video',
  'http://localhost:8080/api/proxy/image?gDriveId=1pxyMSJcDDb_jqDTu6qAOGRrSY0GgfEof&type=video',
  'http://localhost:8080/api/proxy/image?gDriveId=1wXPU7L2LyhkxZ7k89AqRmRkX-6KFuJjH&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1li17C-qeM0UKwTS0L8hSnncfaUWe3VFD&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1B23PISRhek9cYyfn_mhfZfzwOqSu2q-N&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1K_stzfic2KgyaY05J8A5PLmqZ9kaI9us&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1zFtk0Ki6ZH1odK8vUdLaJ1tmdW0ellJB&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1ncMsO-HJWjt8JJ_3r0ObsVw2QK0EpG6L&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1gm1poLKyyBWnRwwv1x_CiF6629vWirxy&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1xs5SAPK3VJZoq_9kHSsjN_4Tf9BLImR-&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=18-NF2aBk8rpVKtKAP2trLQ5b9fyoDJ7a&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1xP6mL64tn9QlgtICkNGw_YgrFiPup30b&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1RNp3r5N_soCLAUlO8H0wyLJ-ErRS-2HK&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1jutNo_J--oe7diigLKsy0JKTXLtxsPaH&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1JDpJP9pmg-SFGzTcVS49KmWxcDWsDfMo&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1H6RSvPF1SYKgKDG3u8OB3I3WE5Et5V-6&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1trlPBRqeQmEOARk7Q-Xw_hA1AXyUBZ_0&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1BQpvvjx844inA_J-U2a_GdDahEXMcz4F&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1zkYSSWTA4pl4Y2qoaKE7qpuJK-WTUPQ6&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=17Adn-6ZUxyPuAUk-E7YTQGkPuniEY2yf&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1bq8ztTlcTQPaIIdCW1zqsHjV2hJD_fK_&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1lk_474S69SBSP5bT4XcZALtDDRBzfkYb&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=18kgKSHw7ayxiif3B7D_AexHQwtP6NEDW&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1ogfM-3ZQ0F8dWOMg5AsVazz2chIT-vyT&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1wnTIBq3qtn6Gn5DeEJ54-0UKIWEiYvDE&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1mb4wB09JCyk82REwC9Ck3p66NvOCW3nc&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=11Fh3d-xyV3rhEk54yX_rSq2BW1Dnack3&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1ZBejuXiCm6e59ayR335oUJBrp01gJW6l&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1Tcm98wfhKVJWaZEzzKj3fNaccVdmD8wz&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1Hd04ga2XRBtyX-iAJ1r-KO9erM2WwoT9&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1BvCpLtMVQ9_SK-0tIX_zrs319wo5JnAJ&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1uL1GJxYtYzw8Au5WceLhUlNnOUtGtO5Y&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1xLV6fpuFUCVeyp2Kza9krMEVmEODiy_i&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1oI3n-U7FwVeXfYwfTLSOGxEyV5BqAxYP&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1JGHJrw8et3xZtmwURDl3pMD2V-MM1khr&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=128n0gsCWPOqP_EDDWTuhWdB_xOoM92oP&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1c61WnEBO8a-WIGlj-EXck0H376oh0EeR&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=18XapPQAg_Ows0GwuBfKrI_4Z5PWxov1B&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1-WE7efplShbxIi4USmx7Dk_RSQCvlAGJ&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1vNlt6yf6m3C5MT0aV6nNBEwzawpaIch1&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1jg1iIvzSbE95kd1J42S_dONwQUcsc9Hq&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1C9Hb6xpb-Ctrp_UZTyk35w5A4A9Y_txl&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1L3c7lS5SLLfJkJqthM5ndhzrdNHnp9fs&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1cuCDYQ-P-18kxNJsF_iby1iBa9QNmjPK&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1r14oGKySolnBQW_IQhT953FRFg56ekTa&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1iCOiqml-EhkrhcnMgpzCilPYzstkftzT&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1CeBhL2uUKny9ZlBcn3BFTeGSbn5mq7yk&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1eWXioGRnXWlS_73blek2KYegEYQPX3AU&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1zQehNsz-SfdnNu0F-CZouvMYPh_NWo9k&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1PZmw-wgf8hVcqJSF1Q62GCuqEt1PgP8x&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1vbYIynD2y0L3Htc6DBjuPmK7FiRuJxzw&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1oooyKAbDUowg3Y1C-Xe74hMOjxja7lMv&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=18IjX6tvdWuY9lBeRSxghkcR8UOg8y-4L&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=13A-rhtK4rExrczRCvqYCrwY7yhHhQUXJ&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1R1-1qicjujHS0gzeELfdOTlaB936QjCu&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1vkM9PnlYL7jsUliOOaIoIlQIAKcu0rhA&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=12w7mTjk1fP8DntBj_HedN-AEHJQCb9Wc&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1OD4lrmy0DFSCFhUH4HFhZh0nrwXyt3sC&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1PVxwcznB8d8T0zNS9SzCReNsp5xwmHYk&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=127LaLHTFgud8FwRgkO2a4k1gWeWg-Zaw&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1wxxRJRXNospSMeGCH2VCwCA8X02m0DxQ&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1cSyjppnRpFoCh-Y5BMcErCKuuWxSARtF&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1sL_NqvWqU3M6OT1gzlv0KXNTWBLy2eJj&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1eCH6Jo_Rdlvu5u2NVWfgG3nvNWQM1eQk&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1siBD0IN1Advmb9PhGOnhVEUh0sMUhApI&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1_TGN7EMmvFZ2wBj1j1vHs2Y2zwMBDtVa&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=13wJf2SemvtIqqqt4lvbbFLUoN4i66q5_&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=16ziDVPUsiky1pexZ4yEBACiQqSgFCMIj&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1llMrTIbDvAqsSc-fqnH9a_0kGT6uas2i&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1CC37TNDK97yC8NFypVwrCqdooWMlnVaN&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=134pXp0MQ4MNOaOBbk_UyNgtRo4UTubTj&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1jObZLwIQCNF91S_unvPMWZ8nj3qbJ8eM&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1zxkfSN4BDjUh7sLbbTChFSwr_S3lxL1v&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1zkC_QlDUn8eLzqMBwyViJWhpcAYtf_eX&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1W8heWbNyEIISjxrS-pJuVwsclI3QHKPf&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1D-EL8NCM5Y62ntdBTQwnbCAGN7jo5Z8G&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1A9LQi_4zszfHi4ZwMbICccGLQwhCzYtR&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=13TxESM0QQaUI_hD0v0jPW9VH1cn1a_0I&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1FCtIgDBlGnqf844UWrmx5P0uUeTvPRIa&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1ATKmb2VLLWqVpngtxY35kVMxp9Pbk7Ik&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=13bQmuWIH39sRRe-gzIJROSlUMrh4NrnU&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1ZdAPQY94VDjbnTjzNcZqfMZUKhvWnnbL&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1ikbSQh3kpzsvuI22MQZzBoiI37PkbEsE&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1634BkuIZFhiSJJDXzVck7YBv7qY5_bnQ&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1zUCQgvy-mT9Xa5HZHBqpcdbSisITAumo&type=video',
  'http://localhost:8080/api/proxy/image?gDriveId=1WMz6kxCQBn8e91IWml7m-DNvb5wl1JG5&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1KVKSUUZVa7GE4zi-3IzxUtygXfKD6JQJ&type=video',
  'http://localhost:8080/api/proxy/image?gDriveId=1LKS-yzMrIlr4om4p3_SdOzaBoOCS5dj-&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1T99qVwZTtUHaIkxVMMFEltmFyGfakrKz&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1ofTb1lGPau_gJYFpl7VneTVPqIPbFtG9&type=video',
  'http://localhost:8080/api/proxy/image?gDriveId=1xuBsfFgjNz06wVt3FnUhiE_JpZ5YBYB8&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=15ix-SkVFmPbRrtRi4_MxT3_XZ55R47M3&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1XTh30JeMDbPsOwH7CSDWZmFPjKQIjeCU&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1pTRPaZiqouMeBc0CT7pp5Q_49oPc_1mu&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1_CkIIl1mywWznEFH14lrI5MLnMPoxgvQ&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=10YHDq1u5MMM3XQ3thVLfMmH9KLW46nA8&type=video',
  'http://localhost:8080/api/proxy/image?gDriveId=1wjcntAiuNCWGl5WhQNmmpfHeVc9xNcx4&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=13G1d5yFzqHSPP3Hpx8NgoqTWyCSrSFMS&type=video',
  'http://localhost:8080/api/proxy/image?gDriveId=1gYqDlXOET6oNEicLIbLohFNvcWDby6T0&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1m7DlQ3MwpVBXSWqzKUQjv_H-_sqVqk2j&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1TM0Ae4L5brQKnoPKtYpxKj9DF3Huc_wX&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=18wKNZ_pwcT7g9rlJZsSsT8lncXRNpFOx&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1sPVeDTZv1WRoNSaW_SgLwEvwx-fMW3Tj&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1w8crJjjDugkY_iDDAQ2ICnS7EgDwcLQv&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1In504JHDcZvKlGkxmQ423mEQUkV5T-_T&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1l6QbGXkdGKEu4eYHPaVybGYr0DW7BbcS&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1Sb5TWxn3YIc9irdhyNSADSjjUdY9o94q&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1Hchw321BrdetgiSitqrX1XdCRuKPyOXX&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1LHqime8Rc4N0zWy3jT2vrdwjAfFiELAy&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1roDGsm8yvLX0Ksqh4mflxxGdz24hCPHA&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1Dc7JsfYELr1RIfTNuErjO1p-xcu_I9R5&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1g1uKM-L4jq3vaIItGSEhmDjIIG-Gr-5h&type=video',
  'http://localhost:8080/api/proxy/image?gDriveId=1Gg-AzjFdmtWMn_HxYjNoePzUMw4cuAmt&type=video',
  'http://localhost:8080/api/proxy/image?gDriveId=11aPpGJcWFZ38n6cu4E9OVvj_DFRjeXxs&type=image',
  'http://localhost:8080/api/proxy/image?gDriveId=1WNSY2R-VIKvKJr8DmaMY4oXpreMNYhYK&type=image'
]

const videosOnly = PreloadURLS.filter(url => url.includes('video'));

const CACHE_NAME = 'video-cache-v1';

console.log(PreloadURLS);
const addResourcesToCache = async (resources) => {
  const cache = await caches.open(CACHE_NAME);
  return cache.addAll(resources);
};

self.addEventListener('install', (event) => {
  event.waitUntil(addResourcesToCache(videosOnly).then(() => self.skipWaiting()));
});

const putInCache = async (request, response) => {
  const cache = await caches.open(CACHE_NAME);

  if (request.method !== 'GET') {
    console.log('Cannot cache non-GET requests');
    return;
  }

  await cache.put(request, response);
};

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);

  if (responseFromCache) {
    return responseFromCache;
  }

  const responseFromNetwork = await fetch(request);

  // we need to clone the response because the response stream can only be read once
  putInCache(request, responseFromNetwork.clone());

  return responseFromNetwork;
};

self.addEventListener('fetch', (event) => {
 event.respondWith(cacheFirst(event.request));
});