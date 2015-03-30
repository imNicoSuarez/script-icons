#!/usr/bin/env bash

# GENERATE FOLDER
node polygon.js

echo 'Start Move Image'
rm -rf polygon-mapright
mkdir polygon-mapright

mkdir polygon-mapright/pond-tank
mv pond-tank*.png ./polygon-mapright/pond-tank

mkdir polygon-mapright/boundaty
mv boundaty*.png ./polygon-mapright/boundaty

mkdir polygon-mapright/triangle
mv triangle*.png ./polygon-mapright/triangle


mkdir polygon-mapright/star
mv star*.png ./polygon-mapright/star


mkdir polygon-mapright/square
mv square*.png ./polygon-mapright/square


mkdir polygon-mapright/plane
mv plane*.png ./polygon-mapright/plane


mkdir polygon-mapright/pin
mv pin*.png ./polygon-mapright/pin


mkdir polygon-mapright/circle
mv circle*.png ./polygon-mapright/circle


echo 'End Move Image'