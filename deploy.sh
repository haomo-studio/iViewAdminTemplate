#!/bin/bash
npm run build
rsync -avz index_prod.html member@haomo-studio.com:/var/www/html/haomo_tpl/iViewAdminTemplate/index.html
rsync -avz dist member@haomo-studio.com:/var/www/html/haomo_tpl/iViewAdminTemplate/