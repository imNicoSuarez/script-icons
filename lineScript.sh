#!/usr/bin/env bash

# GENERATE FOLDER
# node lines.js

echo 'Start Move Image'
rm -rf lines-mapright
mkdir lines-mapright

mkdir lines-mapright/fence
mv fence-line*.png ./lines-mapright/fence

mkdir lines-mapright/road-trail
mv road-trail-line*.png ./lines-mapright/road-trail

mkdir lines-mapright/primary-road
mv primary-road-line*.png ./lines-mapright/primary-road

mkdir lines-mapright/pipeline
mv pipeline-line*.png ./lines-mapright/pipeline

mkdir lines-mapright/transmission-line
mv transmission-line-line*.png ./lines-mapright/transmission-line

mkdir lines-mapright/stream-intermitent
mv stream-intermitent-line*.png ./lines-mapright/stream-intermitent

mkdir lines-mapright/river-creek
mv river-creek-line*.png ./lines-mapright/river-creek

rm line-*.png
rm line-background-*.png
echo 'End Move Image'




