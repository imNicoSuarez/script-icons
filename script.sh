#!/usr/bin/env bash

# MDPI
node app.js

echo 'Start Move Image'
mkdir barn
mkdir barn/barn-circle
mkdir barn/barn-rectangle
mv barn-circle*.png ./barn/barn-circle
mv barn-rectangle*.png ./barn/barn-rectangle

mkdir dump
mkdir dump/dump-circle
mkdir dump/dump-rectangle
mv dump-circle*.png ./dump/dump-circle
mv dump-rectangle*.png ./dump/dump-rectangle

mkdir gate
mkdir gate/gate-circle
mkdir gate/gate-rectangle
mv gate-circle*.png ./gate/gate-circle
mv gate-rectangle*.png ./gate/gate-rectangle

mkdir main-house
mkdir main-house/main-house-circle
mkdir main-house/main-house-rectangle
mv main-house-circle*.png ./main-house/main-house-circle
mv main-house-rectangle*.png ./main-house/main-house-rectangle

mkdir photo-point
mkdir photo-point/photo-point-circle
mkdir photo-point/photo-point-rectangle
mv photo-point-circle*.png ./photo-point/photo-point-circle
mv photo-point-rectangle*.png ./photo-point/photo-point-rectangle

mkdir spring
mkdir spring/spring-circle
mkdir spring/spring-rectangle
mv spring-circle*.png ./spring/spring-circle
mv spring-rectangle*.png ./spring/spring-rectangle

mkdir well
mkdir well/well-circle
mkdir well/well-rectangle
mv well-circle*.png ./well/well-circle
mv well-rectangle*.png ./well/well-rectangle

mkdir blind
mkdir blind/blind-circle
mkdir blind/blind-rectangle
mv blind-circle*.png ./blind/blind-circle
mv blind-rectangle*.png ./blind/blind-rectangle

mkdir feeder
mkdir feeder/feeder-circle
mkdir feeder/feeder-rectangle
mv feeder-circle*.png ./feeder/feeder-circle
mv feeder-rectangle*.png ./feeder/feeder-rectangle

mkdir horse-stall
mkdir horse-stall/horse-stall-circle
mkdir horse-stall/horse-stall-rectangle
mv horse-stall-circle*.png ./horse-stall/horse-stall-circle
mv horse-stall-rectangle*.png ./horse-stall/horse-stall-rectangle

mkdir oil-well
mkdir oil-well/oil-well-circle
mkdir oil-well/oil-well-rectangle
mv oil-well-circle*.png ./oil-well/oil-well-circle
mv oil-well-rectangle*.png ./oil-well/oil-well-rectangle

mkdir pier
mkdir pier/pier-circle
mkdir pier/pier-rectangle
mv pier-circle*.png ./pier/pier-circle
mv pier-rectangle*.png ./pier/pier-rectangle

mkdir trough
mkdir trough/trough-circle
mkdir trough/trough-rectangle
mv trough-circle*.png ./trough/trough-circle
mv trough-rectangle*.png ./trough/trough-rectangle

mkdir windmill
mkdir windmill/windmill-circle
mkdir windmill/windmill-rectangle
mv windmill-circle*.png ./windmill/windmill-circle
mv windmill-rectangle*.png ./windmill/windmill-rectangle


mkdir cabin
mkdir cabin/cabin-circle
mkdir cabin/cabin-rectangle
mv cabin-circle*.png ./cabin/cabin-circle
mv cabin-rectangle*.png ./cabin/cabin-rectangle

mkdir foremans-house
mkdir foremans-house/foremans-house-circle
mkdir foremans-house/foremans-house-rectangle
mv foremans-house-circle*.png ./foremans-house/foremans-house-circle
mv foremans-house-rectangle*.png ./foremans-house/foremans-house-rectangle

mkdir house
mkdir house/house-circle
mkdir house/house-rectangle
mv house-circle*.png ./house/house-circle
mv house-rectangle*.png ./house/house-rectangle

mkdir pens
mkdir pens/pens-circle
mkdir pens/pens-rectangle
mv pens-circle*.png ./pens/pens-circle
mv pens-rectangle*.png ./pens/pens-rectangle

mkdir shed-shack
mkdir shed-shack/shed-shack-circle
mkdir shed-shack/shed-shack-rectangle
mv shed-shack-circle*.png ./shed-shack/shed-shack-circle
mv shed-shack-rectangle*.png ./shed-shack/shed-shack-rectangle

mkdir water-storage-tank
mkdir water-storage-tank/water-storage-tank-circle
mkdir water-storage-tank/water-storage-tank-rectangle
mv water-storage-tank-circle*.png ./water-storage-tank/water-storage-tank-circle
mv water-storage-tank-rectangle*.png ./water-storage-tank/water-storage-tank-rectangle

rm circle-*.png
rm round-rectangle-*.png
rm barn*.png dump*.png gate*.png main-house*.png photo-point*.png spring*.png well*.png blind*.png feeder*.png
rm horse-stall*.png oil-well*.png pier*.png trough*.png windmill*.png cabin*.png foremans-house*.png house*.png
rm pens*.png shed-shack*.png water-storage-tank*.png

echo 'End Move Image'