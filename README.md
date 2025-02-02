# Build

![https://github.com/rg-mpg-de/skohub-reconcile/actions?query=workflow%3ABuild](https://github.com/rg-mpg-de/skohub-reconcile/workflows/Build/badge.svg?branch=main)

# skohub-reconcile

This repository provides a [Reconciliation Service](https://reconciliation-api.github.io/specs/latest/)
for the the [SkoHub](http://skohub.io) core infrastructure.

Dependencies:

- elasticsearch 7.0
- node-version >= v12.16.1

Basic setup:

    $ git clone https://github.com/rg-mpg-de/skohub-reconcile.git
    $ cd skohub-reconcile
    # Copy `sample.env` to `.env` and adjust values therein
    $ npm ci
    $ npm test
    $ npm start

This will start the Reconciliation service on the port specified with `APP_PORT` in `.env`. It accepts
queries according to the [Reconciliation Service specification](https://reconciliation-api.github.io/specs/latest/)
at endpoints corresponding to all hosted vocabularies, e.g. `/project/vocab`, `/class/esc`, or `/rg-mpg-de/polmat` etc.

Currently only reconciliation queries are supported. Preview, suggestion and data extensions support is on the roadmap.

The elasticsearch server must be populated when a vocabulary is published on skohub. This present service creates an
appropriate index and takes PUT requests from skohub-vocabs, adding resources to the elasticsearch index.

## elasticsearch
You need to run a properly configured `elasticsearch` instance by
setting `cluster.name: skohub`. See the provided [elasticsearch.yml](scripts/etc/elasticsearch/elasticsearch.yml).
Also, in some contexts, it's mandatory to initialize elasticsearch with a proper
[index-mapping](scripts/elasticsearch-mappings.json).

## start scripts
You may want to use the start script in `scripts/start.sh`. This script ensures the proper
installation of skohub-reconcile and the configuration of elasticsearch. There also reside
further scripts to manage the starting/stopping of the skohub-reconcile via init and to
monitor the processes with `monit`.

## Credits
The project to add a Reconciliation Service to SkoHub has been initiated by Andreas Wagner and
carried out in cooperation with the [SkoHub.io team](https://github.com/skohub-io) in 2021/2022.
