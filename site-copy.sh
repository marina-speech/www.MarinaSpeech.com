#!/bin/bash

SITE="site-02"

rm *.html *.js

rm -rf css img js lib

cp -r $SITE/* ./

ls -las
