#!/usr/bin/env bash

# For testing purposes – this is set in the GitHub Action:
# https://docs.github.com/en/actions/learn-github-actions/environment-variables
# GITHUB_SHA=9e3891cefe220459347e32f8750347a6a7fcb652

DATETIME=$(date '+%Y-%m-%d %H:%M:%S')

echo "{\"commit\": \"$GITHUB_SHA\", \"datetime\": \"$DATETIME\"}" | tee ./public/resources/version.json