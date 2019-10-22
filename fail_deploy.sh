#!/usr/bin/env bash
[[ $(git rev-parse --abbrev-ref HEAD) == "master" ]] && git fetch origin && git reset --hard origin/master && git checkout -f 11ty && echo "...done!"
