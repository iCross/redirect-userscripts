// ==UserScript==
// @name         Twitter to Nitter Redirector
// @namespace    https://codeberg.org/shmup/junk-trove
// @version      1.0
// @description  Redirect twitter to nitter, a free and open source alternative
// @author       shmup
// @match        https://www.twitter.com/*
// @match        https://twitter.com/*
// @match        https://mobile.twitter.com/*
// @grant        none
// @run-at       document-start
// @license      Unlicense
// ==/UserScript==

/**
 * Nitter is a free and open source alternative Twitter front-end focused on privacy and performance.
 * The source is available on GitHub at https://github.com/zedeus/nitter
 **/

(function () {
  top.location.hostname = "nitter.net";
})();

