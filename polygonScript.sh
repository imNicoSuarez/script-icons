#!/usr/bin/env bash

# GENERATE FOLDER
node polygon.js

echo 'Start Move Image'
rm -rf polygon-mapright
mkdir polygon-mapright

mkdir polygon-mapright/pond-tank
mv pond-tank-polygon*.png ./polygon-mapright/pond-tank

mkdir polygon-mapright/boundaty
mv boundaty-polygon*.png ./polygon-mapright/boundaty

echo 'End Move Image'