# CHANGELOG

## 6.5.1 (2022-02-18)

* Fix consumer time series
* Fix npm vulnerability warnings

## 6.5.0 (2022-02-18)

* Update docs
* Allow to configure queue rate limiting, clean up

## 6.4.0 (2022-02-08)

* Allow deleting namespaces
* Sync API updates from redis-smq@6.0.0-rc.12

## 6.3.0 (2022-01-31)

* Sync latest updates from redis-smq

## 6.2.0 (2022-01-20)

* Fix window.matchMedia error for Safari < 14
* Refactor the Web UI to match the latest updates from redis-smq

## 6.1.0 (2022-01-18)

* Fix npm vulnerability warnings
* Integrate queue deletion into Web UI, refactor
* Update HTTP API endpoints

## 6.0.0 (2022-01-03)

* Add support for multi-queue producers
* Add support for rates time series
* Refactor and make use of new WebSocket streams

## 5.0.7 (2021-12-07)

* Use strict package versioning.

## 5.0.6 (2021-12-04)

* Excluded screenshots from the npm package.

## 5.0.5 (2021-12-04)

* Fixed table heading captions in ConsumerResourcesChart.
* Updated screenshot-00003.png.

## 5.0.4 (2021-12-01)

* Refactored application routing.
* Added a custom error page for XHR requests errors.

## 5.0.3 (2021-11-24)

* Updated RedisSMQ logo.
* Updated screenshots.

## 5.0.2 (2021-11-23)

* Added RedisSMQ logo.
* Updated screenshots.

## 5.0.1 (2021-11-22)

* Fixed broken dist.
* Always run a new build before publishing.

## 5.0.0 (2021-11-22)

* Integrated RedisSMQ REST API allowing to manage queues and messages.
* Bug fixes and improvements regarding UI experience and page layout.
* Updated line charts.

## 4.0.0 (2021-11-02)

* Updated models to match metrics from redis-smq v4.

## 3.0.0 (2021-09-22)

* Moved redis-smq-monitor server to redis-smq.
* Clean up.

## 2.0.1 (2021-09-06)

* Fixed .npmignore

## 2.0.0 (2021-09-06)

* Fixed inconsistent typing between redis-smq and redis-smq-monitor.
* Fixed small issues in consumer listing.
* Refactored monitor server.

## 1.1.5 (2020-09-23)

* Fixed broken build.

## 1.1.4 (2020-09-23)

* Reset timeline when switching between queues.

## 1.1.3 (2020-09-21)

* Improved queue listing.
* Handled application state during a cold start.

## 1.1.2 (2020-09-20)

* Fixed root directory for static files
* Fallback to index.html if the requested path does not exist

## 1.1.1 (2020-09-20)

* Fixed package.json main entry.
* Improved error handling, websocket, and commonjs export type for the server.

## 1.1.0 (2020-09-20)

* Migrated React codebase to TypeScript.
* Improved consumer stats: added cpu usage percentage, pid, hostname, ip address.
* Added a new rates chart per queue, in plus of the existing global rates chart.
* Used react router for routing to new dedicated queue pages.
* Fixed many performance issues.
* Refactored the page layout and replaced semantic-ui with bootstrap.

## 1.0.2 (2019-11-11)

* Fixed npm warning about chart.js@^2.3 not being installed
* Removed unused packages

