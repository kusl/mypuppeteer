#!/bin/bash

time node index.js;
time git add .;
time git commit -m "run scraping" -m "automated run"
time git push origin master;