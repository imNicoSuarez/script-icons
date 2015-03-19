#!/usr/bin/env bash

# GENERATE FOLDER
# node app.js

echo 'Start Move Image'
rm -rf icons-mapright
mkdir icons-mapright

mkdir icons-mapright/barn
mkdir icons-mapright/barn/barn-circle
mkdir icons-mapright/barn/barn-rectangle
mv barn-circle*.png ./icons-mapright/barn/barn-circle
mv barn-rectangle*.png ./icons-mapright/barn/barn-rectangle

mkdir icons-mapright/dump
mkdir icons-mapright/dump/dump-circle
mkdir icons-mapright/dump/dump-rectangle
mv dump-circle*.png ./icons-mapright/dump/dump-circle
mv dump-rectangle*.png ./icons-mapright/dump/dump-rectangle

mkdir icons-mapright/gate
mkdir icons-mapright/gate/gate-circle
mkdir icons-mapright/gate/gate-rectangle
mv gate-circle*.png ./icons-mapright/gate/gate-circle
mv gate-rectangle*.png ./icons-mapright/gate/gate-rectangle

mkdir icons-mapright/main-house
mkdir icons-mapright/main-house/main-house-circle
mkdir icons-mapright/main-house/main-house-rectangle
mv main-house-circle*.png ./icons-mapright/main-house/main-house-circle
mv main-house-rectangle*.png ./icons-mapright/main-house/main-house-rectangle

mkdir icons-mapright/photo-point
mkdir icons-mapright/photo-point/photo-point-circle
mkdir icons-mapright/photo-point/photo-point-rectangle
mv photo-point-circle*.png ./icons-mapright/photo-point/photo-point-circle
mv photo-point-rectangle*.png ./icons-mapright/photo-point/photo-point-rectangle

mkdir icons-mapright/spring
mkdir icons-mapright/spring/spring-circle
mkdir icons-mapright/spring/spring-rectangle
mv spring-circle*.png ./icons-mapright/spring/spring-circle
mv spring-rectangle*.png ./icons-mapright/spring/spring-rectangle

mkdir icons-mapright/well
mkdir icons-mapright/well/well-circle
mkdir icons-mapright/well/well-rectangle
mv well-circle*.png ./icons-mapright/well/well-circle
mv well-rectangle*.png ./icons-mapright/well/well-rectangle

mkdir icons-mapright/blind
mkdir icons-mapright/blind/blind-circle
mkdir icons-mapright/blind/blind-rectangle
mv blind-circle*.png ./icons-mapright/blind/blind-circle
mv blind-rectangle*.png ./icons-mapright/blind/blind-rectangle

mkdir icons-mapright/feeder
mkdir icons-mapright/feeder/feeder-circle
mkdir icons-mapright/feeder/feeder-rectangle
mv feeder-circle*.png ./icons-mapright/feeder/feeder-circle
mv feeder-rectangle*.png ./icons-mapright/feeder/feeder-rectangle

mkdir icons-mapright/horse-stall
mkdir icons-mapright/horse-stall/horse-stall-circle
mkdir icons-mapright/horse-stall/horse-stall-rectangle
mv horse-stall-circle*.png ./icons-mapright/horse-stall/horse-stall-circle
mv horse-stall-rectangle*.png ./icons-mapright/horse-stall/horse-stall-rectangle

mkdir icons-mapright/oil-well
mkdir icons-mapright/oil-well/oil-well-circle
mkdir icons-mapright/oil-well/oil-well-rectangle
mv oil-well-circle*.png ./icons-mapright/oil-well/oil-well-circle
mv oil-well-rectangle*.png ./icons-mapright/oil-well/oil-well-rectangle

mkdir icons-mapright/pier
mkdir icons-mapright/pier/pier-circle
mkdir icons-mapright/pier/pier-rectangle
mv pier-circle*.png ./icons-mapright/pier/pier-circle
mv pier-rectangle*.png ./icons-mapright/pier/pier-rectangle

mkdir icons-mapright/trough
mkdir icons-mapright/trough/trough-circle
mkdir icons-mapright/trough/trough-rectangle
mv trough-circle*.png ./icons-mapright/trough/trough-circle
mv trough-rectangle*.png ./icons-mapright/trough/trough-rectangle

mkdir icons-mapright/windmill
mkdir icons-mapright/windmill/windmill-circle
mkdir icons-mapright/windmill/windmill-rectangle
mv windmill-circle*.png ./icons-mapright/windmill/windmill-circle
mv windmill-rectangle*.png ./icons-mapright/windmill/windmill-rectangle

mkdir icons-mapright/cabin
mkdir icons-mapright/cabin/cabin-circle
mkdir icons-mapright/cabin/cabin-rectangle
mv cabin-circle*.png ./icons-mapright/cabin/cabin-circle
mv cabin-rectangle*.png ./icons-mapright/cabin/cabin-rectangle

mkdir icons-mapright/foremans-house
mkdir icons-mapright/foremans-house/foremans-house-circle
mkdir icons-mapright/foremans-house/foremans-house-rectangle
mv foremans-house-circle*.png ./icons-mapright/foremans-house/foremans-house-circle
mv foremans-house-rectangle*.png ./icons-mapright/foremans-house/foremans-house-rectangle

mkdir icons-mapright/house
mkdir icons-mapright/house/house-circle
mkdir icons-mapright/house/house-rectangle
mv house-circle*.png ./icons-mapright/house/house-circle
mv house-rectangle*.png ./icons-mapright/house/house-rectangle

mkdir icons-mapright/pens
mkdir icons-mapright/pens/pens-circle
mkdir icons-mapright/pens/pens-rectangle
mv pens-circle*.png ./icons-mapright/pens/pens-circle
mv pens-rectangle*.png ./icons-mapright/pens/pens-rectangle

mkdir icons-mapright/shed-shack
mkdir icons-mapright/shed-shack/shed-shack-circle
mkdir icons-mapright/shed-shack/shed-shack-rectangle
mv shed-shack-circle*.png ./icons-mapright/shed-shack/shed-shack-circle
mv shed-shack-rectangle*.png ./icons-mapright/shed-shack/shed-shack-rectangle

mkdir icons-mapright/water-storage-tank
mkdir icons-mapright/water-storage-tank/water-storage-tank-circle
mkdir icons-mapright/water-storage-tank/water-storage-tank-rectangle
mv water-storage-tank-circle*.png ./icons-mapright/water-storage-tank/water-storage-tank-circle
mv water-storage-tank-rectangle*.png ./icons-mapright/water-storage-tank/water-storage-tank-rectangle

rm circle-*.png
rm round-rectangle-*.png
rm barn*.png dump*.png gate*.png main-house*.png photo-point*.png spring*.png well*.png blind*.png feeder*.png
rm horse-stall*.png oil-well*.png pier*.png trough*.png windmill*.png cabin*.png foremans-house*.png house*.png
rm pens*.png shed-shack*.png water-storage-tank*.png

echo 'End Move Image'